import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const aboutUsConfig = {
  title: 'About Us',
  facts: [
    {
      number: '12+',
      description: 'YEARS OF CONSULTING & ENGINEERING',
    },
    {
      number: '130+',
      description: 'CUSTOMER SUCCESS STORIES',
    },
    {
      number: '1000+',
      description: 'CONSULTANTS & ENGINEERS',
    },
    {
      number: '300+',
      description: 'MACH CERTIFIED PROFESSIONALS',
    },
  ],
};

export const AboutUs = () => {
  const {title, facts} = aboutUsConfig;
  return (
    <section className='about-us wrapper flex-column'>
      <SectionHeader title={title} />
      <div className='about-us-facts max-width-wrapper'>
        {facts.map((fact) => (
          <div
            className='fact'
            key={fact.number}>
            <div className='fact__number'>{fact.number}</div>
            <p className='fact__description'>{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ReactDOM.render(
//   <AboutUs/>,
//   document.getElementById("mach__aboutUs")
// );
