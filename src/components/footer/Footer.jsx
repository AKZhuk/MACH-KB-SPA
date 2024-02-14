import './index.css';
import React from 'react';

const footerConfig = {
  texts: [
    'The Alliance was formed in June 2020 as a non-profit co-operation to introduce a new, open and best-of-breed enterprise technology ecosystem. Founded by Commercetools, Contentstack, EPAM Systems and Valtech and counting 15 members at launch, the MACH Alliance is set to grow and expand over the coming years.',
    'The goal is to help enterprise organisations navigate the complex modern technology landscape. We aim to guide and show how businesses can benefit from open tech ecosystems that are Micro-services based, API-first, Cloud-native SaaS and Headless.',
    'All MACH Alliance members meet certification principles. The MACH Alliance welcomes technology companies and individual industry experts who share our vision for the future. We invite vendors and system integrators to take the tests shown below to find out whether they comply.',
  ],
  links: [
    {
      title: 'Competency: ',
      email: 'OrgCompetencyMACH@epam.com',
      background: '#2629A4',
    },
    {
      title: 'Staffing: ',
      email: 'OrgStaffingMACHCommittee@epam.com',
      background: '#DA5644',
    },
  ],
};

const FooterText = () => (
  <section className='footer-text'>
    {footerConfig.texts.map((text) => (
      <p key={text}>{text}</p>
    ))}
  </section>
);

const ContactUsList = ({links}) => (
  <div className='footer-links-container'>
    {links.map(({email, title, background}) => (
      <div
        key={email}
        style={{background: background}}
        className='footer-links-item'>
        <span>{title}</span>
        <a
          href={`mailto:${email}`}
          key={title}
          target='_blank'
          rel='noopener noreferrer'>
          {email}
        </a>
      </div>
    ))}
  </div>
);

export const Footer = () => (
  <footer className='mach-footer-wrapper flex-column'>
    <div className='footer-container'>
      <img
        src='http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/mach-logo.png'
        alt='logo'
      />
      <FooterText />
    </div>
    <ContactUsList links={footerConfig.links} />
  </footer>
);

// const container = document.getElementById("mach-footer");
// const root = ReactDOM.createRoot(container);
// root.render(<Footer/>);
