(self.webpackChunkcivic_actions_homesite=self.webpackChunkcivic_actions_homesite||[]).push([[844],{9458:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.title,n=e.description;return a.createElement("section",{className:"hero-component"},a.createElement("div",{className:"inner"},a.createElement("h1",null,t),a.createElement("p",{className:"body"},n)))}},9763:function(e,t,n){"use strict";var a=n(7294),r=n(5444);t.Z=function(e){var t=e.size,n=e.src,o=e.text,i=e.type;return a.createElement(r.Link,{className:"button "+("secondary"===i?"button__secondary":"button__primary")+" "+(null!=t?t:" "),to:n},o)}},9340:function(e,t,n){"use strict";var a=n(7294),r=n(9763);t.Z=function(e){var t=e.title,n=e.subtitle,o=e.primaryButtonText,i=e.primaryButtonLink,s=e.secondaryButtonText,l=e.secondaryButtonLink;return a.createElement("section",{className:"primary-page-cta"},a.createElement("div",{className:"inner"},a.createElement("div",{className:"cta-column primary-page-cta__text"},a.createElement("h2",null,t),a.createElement("span",{className:"h3"},n)),a.createElement("div",{className:"cta-column primary-page-cta__buttons"},a.createElement(r.Z,{src:i||"/contact",type:"primary",text:o||"Put us to work"}),a.createElement(r.Z,{src:l||"/careers",type:"secondary",text:s||"Join our team"}))))}},6179:function(e,t,n){"use strict";var a=n(7294),r=n(5414),o=n(9499),i=n(5444),s=function(e){var t=e.title,n=e.description,s=e.image,c=e.article,m=(0,o.useLocation)().pathname,u=(0,i.useStaticQuery)(l).site.siteMetadata,d=u.defaultTitle,p=(u.titleTemplate,u.defaultDescription),y=u.siteUrl,h=u.defaultImage,f=u.twitterUsername,E={title:(t||d)+" | CivicActions",description:n||p,image:s||""+y+h,url:""+y+m};return a.createElement(r.q,{htmlAttributes:{lang:"en"},title:E.title},a.createElement("meta",{name:"description",content:E.description}),a.createElement("meta",{name:"image",content:E.image}),E.url&&a.createElement("meta",{property:"og:url",content:E.url}),!c?null:a.createElement("meta",{property:"og:type",content:"article"}),E.title&&a.createElement("meta",{property:"og:title",content:E.title}),E.description&&a.createElement("meta",{property:"og:description",content:E.description}),E.image&&a.createElement("meta",{property:"og:image",content:E.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f&&a.createElement("meta",{name:"twitter:creator",content:f}),E.title&&a.createElement("meta",{name:"twitter:title",content:E.title}),E.description&&a.createElement("meta",{name:"twitter:description",content:E.description}),E.image&&a.createElement("meta",{name:"twitter:image",content:E.image}))};t.Z=s,s.defaultProps={title:null,description:null,image:null,article:!1};var l="4202924991"},6788:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7294),r=n(5444),o=n.p+"static/CA-white-e8d26f610893dfd9387a448d81952c5d.svg",i=n(8346),s=n(9235),l=n(8355),c=n(4008),m=n(6793),u=function(){var e=a.useState(!1),t=e[0],n=e[1],u=a.useState(!1),d=u[0],p=u[1],y=function(){var e=window.scrollY;e>500?n(!0):e>300?p(!0):(n(!1),p(!1))};(0,a.useEffect)((function(){window.addEventListener("scroll",y)}));return t&&["header"].push("scrolled"),a.createElement("header",{className:(t?"header red-header scrolled":"header red-header")+" "+(d?"scrolled-mobile":"")},a.createElement("div",{className:"red-header--header"},a.createElement("div",{className:"inner"},a.createElement(r.Link,{to:"/",className:"logo"},a.createElement("img",{className:"white-logo",src:o,alt:"Civic Actions Logo"}),a.createElement("img",{className:"red-logo",src:i.Z,alt:"Civic Actions Logo"})),a.createElement(c.Z,{redHeader:!0}),a.createElement(m.Z,{right:!0,noTransition:!0,width:"75%",customBurgerIcon:a.createElement("img",{alt:"mobile menu navigation icon",src:s.Z}),customCrossIcon:a.createElement("img",{alt:"mobile menu close button",src:l.Z})}))))},d=n(6060),p=n(4396),y=n(5414),h=n(9609),f=function(e){var t=e.children,n=(0,a.useState)(!0),r=n[0],o=n[1];return a.createElement("div",{style:{position:"relative"}},a.createElement(y.q,{htmlAttributes:{lang:"en"}}),a.createElement("div",null,a.createElement(h.p,null),a.createElement("div",{className:"red-rectangle"}),a.createElement(u,null),a.createElement("main",{id:"main-content",className:"red--header",tabIndex:"-1"},a.createElement("div",null,t)),a.createElement(d.Z,null)),a.createElement(p.Z,{hidden:r,close:function(){return o(!0)}}))}},1135:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(6788),o=n(9340),i=n(9458),s=n(6179);t.default=function(){return a.createElement(r.Z,null,a.createElement(s.Z,{title:"Privacy policy",desciption:"Our privacy policy describes how we collect and use information about visitors to our website."}),a.createElement(i.Z,{title:"Our privacy policy",description:"This is a plain-language statement explaining how we collect information on our website, and how we use it. Our pledge is to be responsible stewards of any information we collect, and to protect the rights of our site visitors."}),a.createElement("section",{className:"privacy__content-section"},a.createElement("div",{className:"inner"},a.createElement("h3",null,"Have questions? Drop us a line."),a.createElement("p",{className:"body"},"If you have any questions about this statement, feel free to",a.createElement("a",{href:"mailto:contact@civicactions.com"}," send an email")," or contact us at:"),a.createElement("p",{className:"body"},"CivicActions",a.createElement("br",null),"3527 Mt Diablo Blvd Unit 269,",a.createElement("br",null),"Lafayette, CA 94549, USA",a.createElement("br",null),"(510) 408-7510"),a.createElement("h4",null,a.createElement("strong",null,"What information do we collect?")),a.createElement("p",{className:"body"},"We collect information from you when you register on our site, subscribe to our newsletter, or fill out a form."),a.createElement("p",{className:"body"},"When ordering or registering on our site, as appropriate, you may be asked to enter your: name, company name, e-mail address, mailing address and phone number. You may, however, visit our site anonymously."),a.createElement("h4",null,a.createElement("strong",null,"What do we use your information for?")),a.createElement("p",{className:"body"},"Any of the information we collect from you may be used in one of the following ways:"),a.createElement("ul",null,a.createElement("li",{className:"body"},"To personalize your experience: your information helps us to better respond to your individual needs"),a.createElement("li",{className:"body"},"To improve our website: we continually strive to improve our offerings based on the information and feedback we receive from you"),a.createElement("li",{className:"body"},"To improve customer service: your information helps us to more respond to your service requests and support needs"),a.createElement("li",{className:"body"},"To administer a contest, promotion, survey or other site feature"),a.createElement("li",{className:"body"},"To send periodic emails: The email address you provide may be to send you information and updates pertaining to our services, in addition to receiving occasional company news, updates, related product or service information, etc.")),a.createElement("p",{className:"body"},"Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email."),a.createElement("h4",null,a.createElement("strong",null,"How do we protect your information?")),a.createElement("p",{className:"body"},"We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information."),a.createElement("p",{className:"body"},"We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Database to be only accessed by those authorized with special access rights to our systems, and are required to keep the information confidential."),a.createElement("p",{className:"body"},"After a transaction, your private information (credit cards, social security numbers, financials, etc.) may be kept on file for more than 60 days."),a.createElement("h4",null,a.createElement("strong",null,"Do we use cookies?")),a.createElement("p",{className:"body"},"Yes. We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business."),a.createElement("h4",null,a.createElement("strong",null,"Do we disclose any information to outside parties?")),a.createElement("p",{className:"body"},"We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses."),a.createElement("h4",null,a.createElement("strong",null,"Third party links")),a.createElement("p",{className:"body"},"Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites."),a.createElement("h4",null,a.createElement("strong",null,"California Online Privacy Protection Compliance")),a.createElement("p",{className:"body"},"Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We will not distribute your personal information to outside parties without your consent."),a.createElement("p",{className:"body"},"As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at any time by logging into their control panel and going to the ‘Edit Profile’ page."),a.createElement("h4",null,a.createElement("strong",null,"Children’s Online Privacy Protection Act Compliance")),a.createElement("p",{className:"body"},"We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older."),a.createElement("h4",null,a.createElement("strong",null,"Online Privacy Policy Only")),a.createElement("p",{className:"body"},"This online privacy policy applies only to information collected through our website and not to information collected offline."),a.createElement("h4",null,a.createElement("strong",null,"Terms and Conditions")),a.createElement("p",{className:"body"},"Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website."),a.createElement("h4",null,a.createElement("strong",null,"Your Consent")),a.createElement("p",{className:"body"},"By using our site, you consent to our website’s privacy policy."),a.createElement("h4",null,a.createElement("strong",null,"Changes to our Privacy Policy")),a.createElement("p",{className:"body"},"If we decide to change our privacy policy, we will post those changes on this page."),a.createElement("p",{className:"body"},"This policy was last modified on April 25, 2014."),a.createElement("p",{className:"body"},"It was last reviewed in March, 2021."))),a.createElement(o.Z,{title:"Let’s build a public success story.",subtitle:"Get in touch to start."}))}}}]);
//# sourceMappingURL=component---src-pages-privacy-js-2f5da1ef36dc645cb072.js.map