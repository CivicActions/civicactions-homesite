import "../sass/styles.scss";
import React, { useState } from "react";
import RedLayout from "../layouts/red";
import Hero from "../components/hero.js";
import emailIcon from "../files/icons/email.png";
import mailIcon from "../files/icons/mail.png";
import phoneIcon from "../files/icons/phone.png";
import SEO from "../components/seo";

const WORKER_ENDPOINT =
  "https://worker.civicactions.com/api/contact";

const TURNSTILE_SITE_KEY = "0x4AAAAAACbPfzYoEubkjDMX";

const Contact = () => {

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");
    setErrorMsg("");

    const token = window.turnstile?.getResponse();

    if (!token) {
      setStatus("error");
      setErrorMsg("Please complete verification.");
      return;
    }

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("organization"),
      message: formData.get("message"),
      "cf-turnstile-response": token
    };

    try {
      const res = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      setStatus("success");
      e.target.reset();
      window.turnstile?.reset();

    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  const fontStyles = { color: "white" };

  return (
    <RedLayout>
      <Hero
        title="Put us to work"
        description="We love solving hard problems. Tell us about your challenge or idea, and we’ll get in touch."
      />

      <section className="contact--form">
        <div className="inner">

          <h2>Contact Us</h2>

          <form onSubmit={handleSubmit} noValidate>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization">
                Organization (optional)
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                autoComplete="organization"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
              />
            </div>

            <div
              className="cf-turnstile"
              data-sitekey={TURNSTILE_SITE_KEY}
            />

            {status === "error" && (
              <p role="alert">{errorMsg}</p>
            )}

            {status === "success" && (
              <p role="status">
                Thanks — your message has been sent!
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>
        </div>
      </section>

      <section className="contact--ways-to-contact--section">
        <div className="inner">
          <h2 className="h3" style={fontStyles}>
            More ways to reach us
          </h2>

          <p className="body" style={fontStyles}>
            Feel free to connect with us about work opportunities,
            speaking engagements, partnerships, or just to say hi.
          </p>

          <div className="contact-grid">
            <div className="grid">
              <img src={emailIcon} alt="" />
              <p className="label body" style={fontStyles}>EMAIL</p>
              <a
                href="mailto:contact@civicactions.com"
                className="link body"
                style={fontStyles}
              >
                contact@civicactions.com
              </a>
            </div>

            <div className="grid">
              <img src={mailIcon} alt="" />
              <p className="label body" style={fontStyles}>MAIL</p>
              <a
                href="https://www.google.com/maps/place/3527+Mt+Diablo+Blvd+%23269,+Lafayette,+CA+94549"
                className="link body"
                style={fontStyles}
              >
                3527 Mt Diablo Blvd #269 Lafayette, CA 94549
              </a>
            </div>

            <div className="grid">
              <img src={phoneIcon} alt="" />
              <p className="label body" style={fontStyles}>PHONE</p>
              <a
                href="tel:510-408-7510"
                className="link body"
                style={fontStyles}
              >
                (510) 408-7510
              </a>
            </div>
          </div>
        </div>
      </section>
    </RedLayout>
  );
};

export default Contact;

export const Head = () => (
  <>
    <SEO title="Contact" description="Get in touch." />
    <script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      async
      defer
    />
  </>
);
