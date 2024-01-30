import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const SERVICES = [
  {
    title: 'Community',
    description:
      'MACH is increasingly a global EPAM internal community of people starting to look at the alternative to older systems that do not offer the agility the business requires and experts who have been through the entire transition already.',
    button: {title: 'Join Us', href: ''},
    background: '#3F2A56',
    imgOnLeft: false,
    img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-community.png',
  },
  {
    title: 'Presale & Discovery',
    description:
      'We are the orchestration layer, connecting MACH experts with projects and accounts looking for help or opinion. Our team is also a trigger for other MACH CC services by providing insights regarding current and future needs.',
    button: {title: 'Request Support', href: 'https://kb.epam.com/pages/viewpage.action?pageId=1993972642'},
    background: '#2629A4',
    imgOnLeft: false,
    img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-presale.png',
  },
  {
    title: 'Learning & Development',
    description:
      'MACH is a combination of different disciplines which covers different aspects of architecture, engineering, delivery, maintenance and quality control. Compare to the traditional view, where these disciplines are separate in MACH we are treating them as a components and benefit from the synergy.',
    button: {title: 'Request Support', href: 'https://kb.epam.com/pages/viewpage.action?pageId=1848533236'},
    background: '#DA5644',
    imgOnLeft: true,
    img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-learning.png',
  },
  {
    title: 'Research & Development',
    description:
      'MACH R&D is a community of experts, who strive to learn new technologies and trends. Our ambition is to influence and drive exponential growth of EPAM in the area of modern commerce and overall composable architecture by designing and delivering desired solutions, as well as sharing our perspective on appearing platforms, technologies, or trends.',
    button: {title: 'Request Support', href: 'https://kb.epam.com/pages/viewpage.action?pageId=1848533236'},
    background: '#101021',
    imgOnLeft: true,
    img: 'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/services/services-research.png',
  },
];

const ServiceCard = ({service, style}) => {
  return (
    <div
      className='service-card'
      style={style}>
      <div
        className='service-card-content-container'
        style={{background: service.background}}>
        <header className='service-card-header'>{service.title}</header>
        <p>{service.description}</p>
        <a href={service.button.href}>
          {service.button.title}{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008'
              stroke='white'
              stroke-width='2'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </a>
      </div>
      <img
        src={service.img}
        alt='service image'
      />
    </div>
  );
};

export const OurServices = () => (
  <div className='mach-services-wrapper'>
    <SectionHeader title='Our Services' />
    <div className='services-container'>
      {SERVICES.map((service, idx) => (
        <ServiceCard
          key={service.title}
          service={service}
          style={{flexDirection: service.imgOnLeft ? 'row-reverse' : 'row'}}
        />
      ))}
    </div>
  </div>
);

// const container = document.getElementById('mach-services');
// const root = ReactDOM.createRoot(container);
// root.render(<OurServices />);
