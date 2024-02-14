import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const servicesConfig = {
  title: 'Our Services',
  services: [
    {
      title: 'Community',
      description:
        'MACH is increasingly a global EPAM internal community of people starting to look at the alternative to older systems that do not offer the agility the business requires and experts who have been through the entire transition already.',
      link: {title: 'Join Us', href: 'https://kb.epam.com/display/EPMCMACH/MACH+Community'},
      background: '#3F2A56',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-community.png',
    },
    {
      title: 'Presale & Discovery',
      description:
        'We are the orchestration layer, connecting MACH experts with projects and accounts looking for help or opinion. Our team is also a trigger for other MACH CC services by providing insights regarding current and future needs.',
      link: {title: 'Request Support', href: 'https://kb.epam.com/pages/viewpage.action?pageId=1993972642'},
      background: '#2629A4',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-presale.png',
    },
    {
      title: 'Learning & Development',
      description:
        'MACH is a combination of different disciplines which covers different aspects of architecture, engineering, delivery, maintenance and quality control. Compare to the traditional view, where these disciplines are separate in MACH we are treating them as a components and benefit from the synergy.',
      link: {title: 'Request Support', href: 'https://kb.epam.com/pages/viewpage.action?pageId=1848533236'},
      background: '#DA5644',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-learning.png',
    },
    {
      title: 'Research & Development',
      description:
        'MACH R&D is a community of experts, who strive to learn new technologies and trends. Our ambition is to influence and drive exponential growth of EPAM in the area of modern commerce and overall composable architecture by designing and delivering desired solutions, as well as sharing our perspective on appearing platforms, technologies, or trends.',
      link: {title: 'Request Support', href: 'https://kb.epam.com/pages/viewpage.action?pageId=1790479117'},
      background: '#101021',
      img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-research.png',
    },
  ],
};

const ServiceCardLink = ({link}) => (
  <a
    href={link.href}
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
        <p className='service-card__description'>{service.description}</p>
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
  <section className='mach-services-wrapper wrapper'>
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
