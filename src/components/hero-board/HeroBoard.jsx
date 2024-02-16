import './index.css';
import {SectionHeader} from '../section-header/SectionHeader';
import React from 'react';
const marginRightMapping = {
  1: '0%',
  2: '-5%',
  3: '-15%',
  4: '-25%',
};


const MAX_SHOWN_HEROES = 5;

const heroBoardConfig = {
  title: 'Hero Board',
  moreLink: {title: 'Show more', href: 'https://kb.epam.com/display/EPMCMACH/Board+of+MACH+CC+Heroes'},
};

const getEmployeesData = ({employees, badges}) => {
  const badgeDataByID = badges.reduce((acc, badge) => ({...acc, [badge.id]: badge}), {});

  return employees.map((emp) => ({
    location: emp.location,
    fullName: emp.fullName,
    title: emp.title,
    photo: emp.employeePhoto,
    profile: emp.profileLink,
    badges: emp.badges.map((badge) => ({
      ...badge,
      ...badgeDataByID[badge.badgeId],
    })),
  }));
};

const HeroBadge = ({src, name, count, style}) => (
  <div style={{position: 'relative', ...style}}>
    <img
      className='hero-badge'
      src={src}
      alt={name}
    />
    {count > 1 && <div className='hero-badge__count'>{`x${count}`}</div>}
  </div>
);

const HeroCard = ({photo, fullName, location, title, badges, profile}) => {
  const badgesQuantity = Math.min(badges.length, 4);
  const containerMarginRight = marginRightMapping[badgesQuantity] || '0%';
  return (
    <a
      className='hero-card-container'
      href={profile}
      target='_blank'
      rel='noreferrer'>
      <div className='employee-card'>
        <img
          className='hero-employee__photo'
          src={photo}
          alt='Employee'
        />
        <div
          className='hero-badges-container'
          style={{marginRight: containerMarginRight}}>
          {Array.from({length: badgesQuantity}, (_, index) => (
            <HeroBadge
              key={index}
              src={badges[index].photo}
              alt={badges[index].name}
              count={badges[index].count}
              style={{right: `${index * 10}%`, zIndex: badges.length - index}}
            />
          ))}
        </div>
        <div className='employee-info-container flex-column'>
          <p className='hero-employee__name'>{fullName}</p>
          <p className='hero-employee__role'>{title}</p>
          <p className='hero-employee__location'>{location}</p>
        </div>
      </div>
    </a>
  );
};

const HeroBoardContainer = ({employees = []}) => (
  <div className='hero-board-container max-width-wrapper'>
    {employees
      .slice(0, MAX_SHOWN_HEROES)
      .map(({photo, fullName, location, title, badges, profile}, index) => (
        <HeroCard
          key={fullName + index}
          fullName={fullName}
          location={location}
          title={title}
          badges={badges}
          photo={photo}
          profile={profile}
        />
      ))}
  </div>
);

export const HeroBoard = ({data}) => {
  const {employees, badges} = data.RECOGNITIONS;
  const employeesData = getEmployeesData({employees, badges});
  const {title, moreLink} = heroBoardConfig;
  return (
    <React.Fragment>
      <section className='mach-heroes-wrapper wrapper flex-column'>
        <SectionHeader
          title={title}
          moreLink={moreLink}
        />
        <HeroBoardContainer employees={employeesData} />
      </section>
      <div className='mach-heroes-divider'>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
};
