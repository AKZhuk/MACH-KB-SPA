import React from 'react';
import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';
import {BlueButton} from '../button/Button';

const MAX_SHOWN_EMPLOYEES = 5;
const EMPLOYEE_IMAGE_LEFT_MARGIN_STEP = 20;
const EMPLOYEE_IMAGE_MIN_Z_INDEX = 1;

const certificationConfig = {
  title: 'Certifications',
  text: "Let's take a moment to recognize and celebrate the incredible results achieved by our team members throughout the year.",
  certificatesGroupsWithIds: [
    {
      title: 'Contentful Certifications',
      imageUrl:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/certifications/mach-experience-manager.png',
      url: 'https://experts.epam.com/people?filterId=89971569-ccbf-463f-8df7-d55a515f6dc3',
      ids: ['59f2261b-31bd-41a1-a551-19610415d405', '4234a762-7315-44da-9e27-be864d77a272'],
    },
    {
      title: 'Contentstack Certification',
      imageUrl:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/certifications/mach-experience-manager.png',
      url: 'https://experts.epam.com/people?filterId=155b48df-b79f-4ae0-a5fd-b29e412caea6',
      ids: ['dd5057bc-2238-41fa-9e3b-d90973a36363', '4698b580-ac37-4a2b-8785-2f2d637fbad8'],
    },
    {
      title: 'Commercetools Certification',
      imageUrl:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/certifications/mach-commerce.png',
      url: 'https://experts.epam.com/people?filterId=12331044-2aa2-4372-aaf5-bedb526107f4',
      ids: [
        'e4c8d387-917e-47de-b939-4a13e4150a97',
        '75f3045f-9057-42e8-b617-f12c0c17572e',
        '8815ceba-81ee-432d-9e27-59f4dfca3473',
        '777c10da-7a49-4844-be09-fc62855157c2',
        '81749458-c4cb-41df-88f0-755ab4258a8b',
        '37487e65-6ef8-43c9-8453-31527866fac5',
        '567ce749-be8e-412c-acb1-fe5f8184b9df',
        '4cb0deeb-181d-4bd2-b8f3-dd94bae3e3ad',
        'be70ebeb-c757-4710-9ff7-cbbe96c2f78c',
        'c3741820-2327-4712-bf88-55fe14f2181c',
      ],
    },
    {
      title: 'BigCommerce Certifications',
      imageUrl:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/certifications/mach-commerce.png',
      url: 'https://experts.epam.com/people?filterId=1b81ea2b-8e6e-445e-849d-8ba3d5f6f2a2',
      ids: [
        '388a41ec-00ba-47a8-b1ef-19917b206643',
        '7692c649-d091-474e-a210-2265d54ec408',
        'https://experts.epam.com/certificates/b8329d13-3ea5-43f2-844f-b04d7489a5e7',
      ],
    },
  ],
  button: {
    text: 'See more about Certifications',
    link: 'https://kb.epam.com/display/EPMCMACH/MACH+Learning+Courses',
  },
  contactUs: {
    text: ' Want to be a trainer or support certification process ',
    link: {
      href: 'https://teams.microsoft.com/l/channel/19%3aaa1b60e3399f4ea686b292d9f6199c89%40thread.tacv2/Learn%2520and%2520Development?groupId=fa243644-9f63-43bb-94d3-15de8bd87125&tenantId=b41b72d0-4e9f-4c26-8a69-f949f367c91d',

      text: 'Contact Us',
    },
  },
};

function getEmployeesWithCertificates(employees, certificates) {
  const certificatesSet = new Set(certificates);
  if (!employees || !employees.length) {
    return [];
  }
  return employees.filter((employee) => {
    return employee.certs && employee.certs.length && employee.certs.some((c) => certificatesSet.has(c.id));
  });
}

function convertEmployee(employee) {
  return {
    ...employee,
    avatarUrl: 'https://static.cdn.epam.com/avatar/' + employee.avatar,
    links: {
      cert: 'https://experts.epam.com/profile/' + employee.id,
      telescope: 'https://telescope.epam.com/who/key/upsaId/' + employee.id,
    },
  };
}

const CertificatedEmployees = ({employees}) => {
  let currZIndex = EMPLOYEE_IMAGE_MIN_Z_INDEX;
  const hasHiddenEmployees = employees.length > MAX_SHOWN_EMPLOYEES;
  const shownEmployees = employees.slice(0, MAX_SHOWN_EMPLOYEES);
  return (
    <React.Fragment>
      {shownEmployees.map(({id, avatarUrl, fullName}, ind) => (
        <div
          key={id}
          className='certifications__card-employee'
          style={{
            right: EMPLOYEE_IMAGE_LEFT_MARGIN_STEP * ind,
            zIndex: currZIndex++,
          }}>
          <img
            src={avatarUrl}
            alt={fullName}
          />
        </div>
      ))}
      {hasHiddenEmployees && (
        <div
          className='certifications__card-employee-count'
          style={{
            right: shownEmployees.length * EMPLOYEE_IMAGE_LEFT_MARGIN_STEP,
            zIndex: currZIndex++,
          }}>{`+${employees.length - shownEmployees.length}`}</div>
      )}
    </React.Fragment>
  );
};

function CertificationsCard({data, title, ids, imageUrl, url}) {
  const CERT_EMPLOYEES = data ? data.CERT_EMPLOYEES.map(convertEmployee) : [];
  const CERT_EMPLOYEES_FILTERED = CERT_EMPLOYEES.filter((employee) => {
    return {
      ...employee,
      certs: employee.certs.filter((el) => {
        return el.expiresAt != null ? el.expiresAt - new Date().getTime() > 0 : el;
      }),
    };
  });
  const employees = getEmployeesWithCertificates(CERT_EMPLOYEES_FILTERED, ids);
  const shownEmployeesNumber = employees.slice(0, MAX_SHOWN_EMPLOYEES).length;
  const maxLeftMargin = EMPLOYEE_IMAGE_LEFT_MARGIN_STEP * shownEmployeesNumber;

  return (
    <a
      className='certifications__card'
      href={url}
      target='_blank'
      rel='noreferrer'>
      <img
        className='certifications__card-image'
        src={imageUrl}
        alt={title}
      />
      <div className='certifications__card-text'>
        <h3 className='certifications__card-title'>{title}</h3>
      </div>
      <div
        className='certifications__card-employees'
        style={{left: Math.floor(maxLeftMargin * 0.5)}}>
        <CertificatedEmployees employees={employees} />
      </div>
    </a>
  );
}

export function Certifications({data}) {
  const {title, text, button, contactUs, certificatesGroupsWithIds} = certificationConfig;
  return (
    <section className='certification wrapper'>
      <SectionHeader title={title} />
      <div className='certification-content flex-column'>
        <p className='certification-content-text'>{text}</p>
        <div className='certification-certificates'>
          {certificatesGroupsWithIds.map((certificationGroup) => (
            <CertificationsCard
              key={certificationGroup.title}
              data={data}
              {...certificationGroup}
            />
          ))}
        </div>
        <BlueButton
          arrow={false}
          {...button}
        />
        <p className='certification-contact-us'>
          {contactUs.text}
          <a
            href={contactUs.link.href}
            target='_blank'
            rel='noreferrer'
            className='certification-contact-us-link'>
            {contactUs.link.text}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'>
              <path
                d='M3 1.62L4.615 0L12.6 8L4.615 16L3 14.38L9.365 8L3 1.62Z'
                fill='#1F55DB'
              />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
}

// const container = document.getElementById('mach-certifications');
// const root = ReactDOM.createRoot(container);
// root.render(<Certifications data={window.__SERVER_DATA__} />);
