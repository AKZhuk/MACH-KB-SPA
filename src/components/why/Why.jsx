import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const whyConfig = {
  title: 'Why working with MACH?',
  texts: [
    "The eCommerce world is changing, with a multitude of factors like consumer behaviour, device usage, and COVID-19. A MACH-based approach is where many businesses are heading. With the ability to gain the speed, flexibility, and adaptability businesses need now, MACH is providing the freedom that isn’t afforded from the one size fits all approach of legacy platforms. That's why knowing MACH stack becomes a growing demand on the market.",
    'We welcome the experts in MACH and those who would like to get a new trending skill. See below how you can <a href="https://kb.epam.com/display/EPMCMACH/MACH+Learning+Program">learn and practice</a> the technologies.',
  ],
};

const WhyCommunityText = () => (
  <section className='why-mach__text'>
    {whyConfig.texts.map((text) => (
      <p
        key={text}
        dangerouslySetInnerHTML={{__html: text}}></p>
    ))}
  </section>
);

export const WhySection = () => (
  <section className='why-mach-wrapper'>
    <SectionHeader title={whyConfig.title} />
    <WhyCommunityText />
  </section>
);

// const container = document.getElementById('why-mach');
// const root = ReactDOM.createRoot(container);
// root.render(<WhySection />);