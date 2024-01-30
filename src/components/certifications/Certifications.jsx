import React from 'react';
import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';
import {BlueButton} from '../button/Button';

const MAX_SHOWN_EMPLOYEES = 5;
const EMPLOYEE_IMAGE_LEFT_MARGIN_STEP = 20;
const EMPLOYEE_IMAGE_MIN_Z_INDEX = 1;

const CERT_EMPLOYEES = window.__SERVER_DATA__
  ? window.__SERVER_DATA__.CERT_EMPLOYEES.map(convertEmployee)
  : [];

const CERT_EMPLOYEES_FILTERED = CERT_EMPLOYEES.filter((employee) => ({
  ...employee,
  certs: employee.certs.filter((el) => {
    return el.expiresAt != null ? el.expiresAt - new Date().getTime() > 0 : el;
  }),
}));

const CERTIFICATES_GROUPS_WITH_IDS = [
  {
    title: 'MACH Experience Manager Certifications',
    imageUrl:
      'http://static.cdn.epam.com/uploads/eeff3da4f2c1e2bf6b2b57d2b6a14803/EPM-AEM/Adobe_CC_KB_Page/Adobe_Landing_Page/experience-manager.png',
    url: 'https://experts.epam.com/people?filterId=f29185c3-34b4-44bc-bdce-bb9a6a36edde',
    ids: [
      '68e3f0b6-c681-4137-b8e1-10daf7e2772e',
      '9b818f47-4917-4356-b0db-8abcce54c514',
      '0a051ec3-6374-4b47-a8c1-b438313e4624',
      '19f2ef7e-f1f5-4929-a30f-e7157b160355',
      'b4cf4613-b5cd-41a2-b4ff-3b5c472622f3',
      'b3e36dde-2d90-4e5d-9fe6-cd1215a633ec',
      '82a16159-a73e-49f8-9aea-2e1fa7c46e94',
      '4697a656-3623-4801-b5fd-a6f7f23ca129',
      'c427b876-4aae-46ce-aeaa-660cadbb0a8e',
      'c67a33fd-66cc-42a2-8c91-891bfa7a3f65',
      '4f35ed38-5106-4509-939a-ae6da98e885d',
      '0ffc3db6-015a-4606-accd-242f75a1e79a',
      'bb582063-0a41-49e1-bb61-b68381cc2830',
    ],
  },
  {
    title: 'MACH Commerce Certifications',
    imageUrl:
      'http://static.cdn.epam.com/uploads/eeff3da4f2c1e2bf6b2b57d2b6a14803/EPM-AEM/Adobe_CC_KB_Page/Adobe_Landing_Page/commerce.png',
    url: 'https://experts.epam.com/people?filterId=c1d0f647-694c-4045-bc8f-be71834f4a93',
    ids: [
      '20f9cbcc-5d80-4082-b48e-6d6774f3e829',
      'e50e9e5e-5564-4b7c-92bf-bb8d693f2f0c',
      '5c2c058e-ef35-4c4d-aa71-f1c77a75a4d8',
      '6d9187cb-4b47-4196-9afa-b46e5184f3eb',
      '54747e2b-827d-4043-b647-8e79ad5b15a1',
      '73c5d132-b5cf-4e81-9f7f-0a721b82ae3e',
      '1a7bc35b-b46c-4eba-b1c4-cbdb57a94f37',
      'c92fca0c-4707-4251-a6ff-db96eee413cf',
    ],
  },
  {
    title: 'Other Certifications',
    imageUrl:
      'http://static.cdn.epam.com/uploads/eeff3da4f2c1e2bf6b2b57d2b6a14803/EPM-AEM/Adobe_CC_KB_Page/Adobe_Landing_Page/other-certifications.png',
    url: 'https://experts.epam.com/people?filterId=f93292a5-b718-4d70-af5d-a2a12468dd63',
    ids: [
      '855068ed-9c45-4e78-9e3b-ccae0d6a9dfd',
      'ab179fff-98aa-490c-932c-7ccae189cf08',
      '4c4f3e9b-9afc-482f-97fc-6bfb91268a33',
      '4476ab88-a40b-4b1f-8eba-5cbb4681b8fb',
      'de8ed648-d25c-4d12-ac3e-aa7e2013efb1',
      '0a6b8137-0cdf-4619-9869-a5a2c11f414f',
      '55fee37d-0580-4cc1-9287-d1eb16a98ac7',
      'ed29e4bb-e9da-4102-918d-01dd877f85c3',
      '5a027ab8-2011-4f1f-b163-ab7f26f55c12',
      'fd29c4e8-c265-4d8c-a183-6a6a17acfaa9',
      '93db0107-4d20-426f-b35f-929d9a5963e1',
      '78bf3a20-d8c6-4fb8-865b-2e346e1ccd08',
      'b14bd275-af44-4aa4-89f0-b2d1ad05f6c1',
      '49517524-f7ff-4ebc-bf04-dc90b1e68b25',
      '87e2781a-c0b6-4e42-b065-31a7a2bd8fe4',
      '1576a001-ed4b-4b0f-9636-a17624253bce',
      '98d9044c-6c55-46b1-8921-c56497b84176',
      'a3655616-a382-4c87-9a84-c4ba169da3af',
      '8a9bf91c-cd04-4582-a149-8e53f41b20ba',
      '3e840428-e99c-4c2b-ba05-ed24066fda99',
      '91b3c920-7593-41e8-b96c-e95a9edd988a',
      '5a69faa7-7839-487e-83bf-2ee754378fb9',
      '1b5eff4e-fe68-46a9-b4db-f3afc254f4f1',
      '94b413c2-89d0-48d5-8777-8a650ff4e584',
      'a327fc64-2ab9-4dc9-80e3-a1ef45dc7df1',
      '7f6407ee-fd22-4a22-a81a-f71e86b30eaf',
      '2eefcba5-1141-4484-84ea-ea5905eb8007',
      '65cda44b-fea2-41ae-9d14-0571fb644092',
      '3dfe1b4e-4e3d-407e-af93-cd6d83f8661c',
      'eed795b0-ffff-40a4-bcff-00581a1a300e',
      '280422fe-8ed5-48dc-86c8-bb1c1c7a0840',
      '7faa94d5-0f77-477f-aadc-589df3e24182',
      '5b1e302e-2016-4187-9abd-d3dee9c2db37',
    ],
  },
];

const requestCertificationLink = 'https://experts.epam.com/certificates';

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

function CertificationsCard({title, ids, imageUrl, url}) {
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

export function Certifications() {
  return (
    <div className='certification'>
      <SectionHeader title='Certifications' />
      <div className='certification-content'>
        <p className='certification-content-text'>
          Let's take a moment to recognize and celebrate the incredible results achieved by our team members
          throughout the year.
        </p>
        <div className='certification-certificates'>
          {CERTIFICATES_GROUPS_WITH_IDS.map((certificationGroup) => (
            <CertificationsCard
              key={certificationGroup.title}
              {...certificationGroup}
            />
          ))}
        </div>
        <BlueButton
          text='Request For Certification'
          link={requestCertificationLink}
          arrow={false}
        />
        <p className='certification-contact-us'>
          Want to be a speaker or mentor{' '}
          <a
            href='#'
            className='certification-contact-us-link'>
            Contact Us
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
    </div>
  );
}

// const container = document.getElementById('mach-certifications');
// const root = ReactDOM.createRoot(container);
// root.render(<Certifications data={window.__SERVER_DATA__} />);
