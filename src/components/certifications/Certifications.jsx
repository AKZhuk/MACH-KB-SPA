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
      title: 'MACH Experience Manager Certifications',
      imageUrl:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/certifications/mach-experience-manager.png',
      url: 'https://experts.epam.com/people?filterId=f29185c3-34b4-44bc-bdce-bb9a6a36edde',
      ids: ['777c10da-7a49-4844-be09-fc62855157c2'],
    },
    {
      title: 'MACH Commerce Certifications',
      imageUrl:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/certifications/mach-commerce.png',
      url: 'https://experts.epam.com/people?filterId=f29185c3-34b4-44bc-bdce-bb9a6a36edde',
      ids: ['c3741820-2327-4712-bf88-55fe14f2181c'],
    },
    {
      title: 'Other Certifications',
      imageUrl:
        'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/certifications/other-certifications.png',
      url: 'https://experts.epam.com/people?filterId=f29185c3-34b4-44bc-bdce-bb9a6a36edde',
      ids: ['c3741820-2327-4712-bf88-55fe14f2181c'],
    },
  ],
  button: {
    text: 'Request For Certification',
    link: 'https://experts.epam.com/certificates',
  },
  contactUs: {
    text: ' Want to be a speaker or mentor ',
    link: {
      href: '#',

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
