import {BlueButton} from '../button/Button';
import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const architectureConfig = {
  title: 'Architecture',
  text: 'While utilising traditional single vendor tech platforms, organizations run the risk of trapping themselves in a set of limited capabilities, waiting for upgrades to the latest release in order to make advancements. MACH offers organisations separate building blocks with which they can build all kinds of different commerce solutions. Every component is pluggable, scalable, replaceable, and can be continuously improved through agile development.',
  button: {text: 'Read more about MACH', link: '#'},
};

export const Architecture = () => (
  <section className='mach-architecture-wrapper wrapper flex-column'>
    <SectionHeader title={architectureConfig.title} />
    <p className='mach-architecture__text'>{architectureConfig.text}</p>
    <img
      width='100%'
      className='mach-architecture__img_main max-width-wrapper'
      src='http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/MACH-architecture-scheme.jpg'
      alt='architecture scheme'
    />
    <img
      width='100%'
      className='mach-architecture__img_mobile'
      src=' http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/MACH-architecture-scheme-640.png'
      alt='architecture scheme'
    />
    <BlueButton
      text={architectureConfig.button.text}
      link={architectureConfig.button.link}
    />
  </section>
);

// const container = document.getElementById('mach-architecture');
// const root = ReactDOM.createRoot(container);
// root.render(<Architecture />);
