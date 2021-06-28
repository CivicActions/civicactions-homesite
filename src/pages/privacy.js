import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import PrimaryPageCTA from '../components/primary-page-cta.js';
import Hero from '../components/hero.js';
import SEO from '../components/seo';

const PrivacyPage = () => {
  return (
    <RedLayout>
      <SEO
        title='Privacy policy'
        desciption='Our privacy policy describes how we collect and use information about visitors to our website.'
      />
      <Hero
        title='Our privacy policy'
        description='This is a plain-language statement explaining how we collect
            information on our website, and how we use it. Our pledge is to be
            responsible stewards of any information we collect, and to protect
            the rights of our site visitors.'
      />
      <section className='privacy__content-section'>
        <div className='inner'>
          <h3>Have questions? Drop us a line.</h3>
          <p className='body'>
            If you have any questions about this statement, feel free to
            <a href='mailto:contact@civicactions.com'> send an
            email</a> or contact us at:
          </p>
          <p className='body'>
            CivicActions
            <br />
            3527 Mt Diablo Blvd Unit 269,
            <br />
            Lafayette, CA 94549, USA
            <br />
            (510) 408-7510
          </p>

          <h4><strong>What information do we collect?</strong></h4>
          <p className='body'>
            We collect information from you when you register on our site,
            subscribe to our newsletter, or fill out a form.
          </p>
          <p className='body'>
            When ordering or registering on our site, as appropriate, you may be
            asked to enter your: name, company name, e-mail address, mailing
            address and phone number. You may, however, visit our site
            anonymously.
          </p>

          <h4><strong>What do we use your information for?</strong></h4>
          <p className='body'>
            Any of the information we collect from you may be used in one of the
            following ways:
          </p>
          <ul>
            <li className='body'>
              To personalize your experience: your information helps us to
              better respond to your individual needs
            </li>
            <li className='body'>
              To improve our website: we continually strive to improve our
              offerings based on the information and feedback we receive from
              you
            </li>
            <li className='body'>
              To improve customer service: your information helps us to more
              respond to your service requests and support needs
            </li>
            <li className='body'>
              To administer a contest, promotion, survey or other site feature
            </li>
            <li className='body'>
              To send periodic emails: The email address you provide may be to
              send you information and updates pertaining to our services, in
              addition to receiving occasional company news, updates, related
              product or service information, etc.
            </li>
          </ul>
          <p className='body'>
            Note: If at any time you would like to unsubscribe from receiving
            future emails, we include detailed unsubscribe instructions at the
            bottom of each email.
          </p>

          <h4><strong>How do we protect your information?</strong></h4>
          <p className='body'>
            We implement a variety of security measures to maintain the safety
            of your personal information when you enter, submit, or access your
            personal information.
          </p>
          <p className='body'>
            We offer the use of a secure server. All supplied sensitive/credit
            information is transmitted via Secure Socket Layer (SSL) technology
            and then encrypted into our Database to be only accessed by those
            authorized with special access rights to our systems, and are
            required to keep the information confidential.
          </p>
          <p className='body'>
            After a transaction, your private information (credit cards, social
            security numbers, financials, etc.) may be kept on file for more
            than 60 days.
          </p>

          <h4><strong>Do we use cookies?</strong></h4>
          <p className='body'>
            Yes. We use cookies to understand and save your preferences for
            future visits and compile aggregate data about site traffic and site
            interaction so that we can offer better site experiences and tools
            in the future. We may contract with third-party service providers to
            assist us in better understanding our site visitors. These service
            providers are not permitted to use the information collected on our
            behalf except to help us conduct and improve our business.
          </p>

          <h4><strong>Do we disclose any information to outside parties?</strong></h4>
          <p className='body'>
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information. This does not include trusted
            third parties who assist us in operating our website, conducting our
            business, or servicing you, so long as those parties agree to keep
            this information confidential. We may also release your information
            when we believe release is appropriate to comply with the law,
            enforce our site policies, or protect ours or others rights,
            property, or safety. However, non-personally identifiable visitor
            information may be provided to other parties for marketing,
            advertising, or other uses.
          </p>

          <h4><strong>Third party links</strong></h4>
          <p className='body'>
            Occasionally, at our discretion, we may include or offer third party
            products or services on our website. These third party sites have
            separate and independent privacy policies. We therefore have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, we seek to protect the integrity of our
            site and welcome any feedback about these sites.
          </p>

          <h4><strong>California Online Privacy Protection Compliance</strong></h4>
          <p className='body'>
            Because we value your privacy we have taken the necessary
            precautions to be in compliance with the California Online Privacy
            Protection Act. We will not distribute your personal information to
            outside parties without your consent.
          </p>
          <p className='body'>
            As part of the California Online Privacy Protection Act, all users
            of our site may make any changes to their information at any time by
            logging into their control panel and going to the ‘Edit Profile’
            page.
          </p>

          <h4><strong>Children’s Online Privacy Protection Act Compliance</strong></h4>
          <p className='body'>
            We are in compliance with the requirements of COPPA (Children’s
            Online Privacy Protection Act), we do not collect any information
            from anyone under 13 years of age. Our website, products and
            services are all directed to people who are at least 13 years old or
            older.
          </p>

          <h4><strong>Online Privacy Policy Only</strong></h4>
          <p className='body'>
            This online privacy policy applies only to information collected
            through our website and not to information collected offline.
          </p>

          <h4><strong>Terms and Conditions</strong></h4>
          <p className='body'>
            Please also visit our Terms and Conditions section establishing the
            use, disclaimers, and limitations of liability governing the use of
            our website.
          </p>

          <h4><strong>Your Consent</strong></h4>
          <p className='body'>
            By using our site, you consent to our website’s privacy policy.
          </p>

          <h4><strong>Changes to our Privacy Policy</strong></h4>
          <p className='body'>
            If we decide to change our privacy policy, we will post those
            changes on this page.
          </p>
          <p className='body'>
            This policy was last modified on April 25, 2014.
          </p>
          <p className='body'>
            It was last reviewed in March, 2021.
          </p>
        </div>
      </section>
      <PrimaryPageCTA
          title='Let’s build a public success story.'
          subtitle='Get in touch to start.'
      />
    </RedLayout>
  );
};

export default PrivacyPage;
