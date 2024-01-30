import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const aboutUsConfig = {
  title: 'About Us',
  facts: [
    {
      number: '12+',
      firsLine: 'YEARS OF CONSULTING',
      secondLine: '& ENGINEERING',
    },
    {
      number: '130+',
      firsLine: 'CUSTOMER SUCCESS',
      secondLine: 'STORIES',
    },
    {
      number: '1000+',
      firsLine: 'CONSULTANTS',
      secondLine: '& ENGINEERS',
    },
    {
      number: '300+',
      firsLine: 'MACH CERTIFIED',
      secondLine: 'PROFESSIONALS',
    },
  ],
};

export const AboutUs = () => {
  const {title, facts} = aboutUsConfig;
  return (
    <div className='aboutUs'>
      <SectionHeader title={title} />
      <div className='aboutUs-facts'>
        {facts.map((fact) => (
          <div
            className='fact'
            key={fact.number}>
            <div className='fact-number'>{fact.number}</div>
            <div className='fact-desc'>
              {fact.firsLine}
              <br />
              {fact.secondLine}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ReactDOM.render(
//   <AboutUs/>,
//   document.getElementById("mach__aboutUs")
// );
