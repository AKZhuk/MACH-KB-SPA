import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const servicesConfig = {
  title: 'Our Services',
  services: [
    {
      title: 'Community',
      description:
        'MACH is increasingly a global EPAM <a target="_blank" rel="noreferrer" href="https://teams.microsoft.com/l/channel/19%3aa7c687d1ca8c4c1c9795b4ed1c8a6f64%40thread.tacv2/Community?groupId=fa243644-9f63-43bb-94d3-15de8bd87125&tenantId=b41b72d0-4e9f-4c26-8a69-f949f367c91d">internal community</a> of people starting to look at the alternative to older systems that do not offer the agility the business requires and experts who have been through the entire transition already.',
      link: {title: 'Join Us', href: 'https://wearecommunity.io/communities/mach'},
      background: '#3F2A56',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-community.png',
    },
    {
      title: 'Presale & Discovery',
      description:
        'We are the orchestration layer, connecting MACH experts with projects and accounts looking for help or opinion. Our team is also a trigger for other MACH CC services by providing insights regarding current and future needs.',
      link: {
        title: 'Request Support',
        href: 'https://teams.microsoft.com/l/channel/19%3a8f21532475324406a7945501a7d8f5eb%40thread.tacv2/Presales%252C%2520Discovery%2520and%2520Consultancy?groupId=fa243644-9f63-43bb-94d3-15de8bd87125&tenantId=b41b72d0-4e9f-4c26-8a69-f949f367c91d',
      },
      background: '#2629A4',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-presale.png',
    },
    {
      title: 'Learning & Development',
      description:
        'MACH is a combination of different disciplines which covers different aspects of architecture, engineering, delivery, maintenance and quality control. Compare to the traditional view, where these disciplines are separate in MACH we are treating them as a components and benefit from the synergy.',
      link: {
        title: 'Request Support',
        href: 'https://teams.microsoft.com/l/channel/19%3aaa1b60e3399f4ea686b292d9f6199c89%40thread.tacv2/Learn%2520and%2520Development?groupId=fa243644-9f63-43bb-94d3-15de8bd87125&tenantId=b41b72d0-4e9f-4c26-8a69-f949f367c91d',
      },
      background: '#DA5644',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-learning.png',
    },
    {
      title: 'Research & Development',
      description:
        'MACH R&D is a community of experts, who strive to learn new technologies and trends. Our ambition is to influence and drive exponential growth of EPAM in the area of modern commerce and overall composable architecture by designing and delivering desired solutions, as well as sharing our perspective on appearing platforms, technologies, or trends.',
      link: {
        title: 'Request Support',
        href: 'mailto:Mykhailo_Shved@epam.com,Tatsiana_Polyn@epam.com?subject=Request Support',
      },
      background: '#101021',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-research.png',
    },
  ],
};

const ServiceCardLink = ({link}) => (
  <a
    href={link.href}
    target='_blank'
    rel='noreferrer'
    className='service-card__link'>
    {link.title}{' '}
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'>
      <path
        d='M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008'
        stroke='white'
        strokeWidth='2'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </a>
);

const ServiceCard = ({service}) => {
  return (
    <div className='service-card'>
      <div
        className='service-card-content-container'
        style={{background: service.background}}>
        <header className='service-card__header'>{service.title}</header>
        <p
          className='service-card__description'
          dangerouslySetInnerHTML={{__html: service.description}}></p>
        <ServiceCardLink link={service.link} />
      </div>
      <div
        className='service-card__img'
        style={{
          backgroundImage: `url(${service.img})`,
        }}
      />
    </div>
  );
};

export const OurServices = () => (
  <section
    id='our-services'
    className='mach-services-wrapper wrapper'>
    <SectionHeader title={servicesConfig.title} />
    <div className='services-container'>
      {servicesConfig.services.map((service) => (
        <ServiceCard
          key={service.title}
          service={service}
        />
      ))}
    </div>
  </section>
);

// const container = document.getElementById('mach-services');
// const root = ReactDOM.createRoot(container);
// root.render(<OurServices />);
