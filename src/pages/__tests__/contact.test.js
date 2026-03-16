import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Contact from '../contact';

jest.mock('../../layouts/red', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/hero', () => () => <div>Hero</div>);
jest.mock('../../components/seo', () => () => null);

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'Test User' },
  });
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByLabelText('Organization (optional)'), {
    target: { value: 'CivicActions' },
  });
  fireEvent.change(screen.getByLabelText('Message'), {
    target: { value: 'Hello team' },
  });
}

describe('Contact page form', () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn();
    globalThis.turnstile = {
      getResponse: jest.fn(),
      reset: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('shows an error when Turnstile verification is missing', async () => {
    globalThis.turnstile.getResponse.mockReturnValue('');

    render(<Contact />);
    fillRequiredFields();

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Please complete verification.',
    );
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  test('submits payload and shows success state when API succeeds', async () => {
    globalThis.turnstile.getResponse.mockReturnValue('mock-token');
    globalThis.fetch.mockResolvedValue({ ok: true });

    render(<Contact />);
    fillRequiredFields();

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    });

    const [url, options] = globalThis.fetch.mock.calls[0];
    expect(url).toBe('https://worker.civicactions.com/api/contact');
    expect(options.method).toBe('POST');

    expect(JSON.parse(options.body)).toEqual({
      name: 'Test User',
      email: 'test@example.com',
      company: 'CivicActions',
      message: 'Hello team',
      'cf-turnstile-response': 'mock-token',
    });

    expect(await screen.findByRole('status')).toHaveTextContent('Thanks');
    expect(globalThis.turnstile.reset).toHaveBeenCalledTimes(1);
  });

  test('shows a generic error when API returns non-OK', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    try {
      globalThis.turnstile.getResponse.mockReturnValue('mock-token');
      globalThis.fetch.mockResolvedValue({
        ok: false,
        text: async () => 'Bad request',
      });

      render(<Contact />);
      fillRequiredFields();

      fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

      expect(await screen.findByRole('alert')).toHaveTextContent(
        'Something went wrong. Please try again.',
      );
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });
});
