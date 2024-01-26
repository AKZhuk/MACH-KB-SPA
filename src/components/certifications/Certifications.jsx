import './index.css';
const generateAvatarURL = (employeeAvatar) => `https://static.cdn.epam.com/avatar/${employeeAvatar}`;

const getLatestCertifiedEmployees = (data, quantity = 3) => {
  const sortedByLatest = [...data].sort(
    (a, b) => b.certs[b.certs.length - 1].assignedAt - a.certs[a.certs.length - 1].assignedAt,
  );

  const latestByQuantity = sortedByLatest.slice(0, quantity);
  const nextFour = sortedByLatest.slice(quantity, quantity + 4);

  return {latestByQuantity, nextFour};
};

const marginRightMapping = {
  1: '0%',
  2: '-12%',
  3: '-35%',
  4: '-50%',
  5: '-68%',
};

const generateProfileLink = (id) => `https://experts.epam.com/profile/${id}`;

const ReguestCertificationBtn = ({text, link}) => (
  <a
    href={link}
    target='_blank'
    className='certification-btn'
    rel='noreferrer'>
    {text}
  </a>
);

const CertificationHeader = ({title}) => <header className='certifications-header'>{title}</header>;

const ShowAllBtn = ({link, text}) => (
  <a
    href={link}
    target='_blank'
    className='certificated-show-all-btn'
    rel='noreferrer'>
    {text}
    <span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'>
        <path
          d='M3 1.62L4.615 0L12.6 8L4.615 16L3 14.38L9.365 8L3 1.62Z'
          fill='#064771'
        />
      </svg>
    </span>
  </a>
);

const CertificationBadge = ({style}) => {
  const drupalBadgeURL =
    'http://static.cdn.epam.com/uploads/32eb272cb0bf452516ff5a7351d271eb/Drupal_CC/drupal_badge_default.svg';

  return (
    <img
      className='certification-badge'
      src={drupalBadgeURL}
      alt='Drupal badge'
      style={style}
    />
  );
};

const CertificationCard = ({employee: {avatar, fullName, certs, personId}}) => {
  const badgesQuantity = Math.min(certs.length, 5);
  const avatarURL = generateAvatarURL(avatar);
  const containerMarginRight = marginRightMapping[badgesQuantity] || '0%';
  const profileLink = generateProfileLink(personId);

  return (
    <a
      href={profileLink}
      className='certification-card-container'
      target='_blank'
      rel='noreferrer'>
      <div className='certification-employee-card'>
        <img
          className='certification-employee-ava'
          src={avatarURL}
          alt='Employee avatar'
        />
        <p className='certification-employee-name'>{fullName}</p>
        <div
          className='certification-badges-container'
          style={{marginRight: containerMarginRight}}>
          {Array.from({length: badgesQuantity}, (_, index) => (
            <CertificationBadge
              key={index}
              style={{
                right: `${index * 18}%`,
                zIndex: badgesQuantity - index,
              }}
            />
          ))}
        </div>
      </div>
    </a>
  );
};

const ShowAllCertificationCard = ({nextEmployees}) => {
  return (
    <div className='certification-card-container'>
      <div className='certification-employee-card small-bg-container'>
        <div className='certification-employee-ava small-ava-container'>
          {nextEmployees.map(({avatar}) => (
            <img
              className='certification-employee-ava small-avatar'
              src={generateAvatarURL(avatar)}
              alt='Employee avatar'
            />
          ))}
        </div>
        <p className='certifications-show-all-text'>Look at other Persons with DRUPAL Certificates</p>
        <ShowAllBtn
          text='Show All'
          link='https://experts.epam.com/people?filterId=07af9893-f638-4061-83bb-6a73b6688713'
        />
      </div>
    </div>
  );
};

const CertificationText = ({text}) => <p className='certifications-text'>{text}</p>;

const CertificationContainer = ({employees, nextEmployees}) => (
  <div className='certifications-content-container'>
    <CertificationText
      text="Let's take a moment to recognize and celebrate the incredible results
      achieved by our team members throughout the year."
    />
    <div className='certifications-employees-container'>
      {employees.map((employee) => (
        <CertificationCard employee={employee} />
      ))}
      <ShowAllCertificationCard nextEmployees={nextEmployees} />
    </div>
    <ReguestCertificationBtn
      text='Request for certification'
      link='https://kb.epam.com/display/EPMCDRCC/Acquia+Certifications'
    />
  </div>
);

export const Certifications = ({data}) => {
  // const {latestByQuantity, nextFour} = getLatestCertifiedEmployees(data.CERT_EMPLOYEES);

  return (
    <div className='drupal-certifications-wrapper'>
      <CertificationHeader title='Certifications' />
      {/* <CertificationContainer
        employees={latestByQuantity}
        nextEmployees={nextFour}
      /> */}
    </div>
  );
};

// const container = document.getElementById('drupal-certifications');
// const root = ReactDOM.createRoot(container);
// root.render(<DrupalCertifications data={window.__SERVER_DATA__} />);
