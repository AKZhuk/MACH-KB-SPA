import './index.css';
import {SectionHeader} from '../section-header/SectionHeader';
import React from 'react';
const marginRightMapping = {
  1: '0%',
  2: '-5%',
  3: '-15%',
  4: '-25%',
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
    {count > 1 && <div className='badge-count'>{`x${count}`}</div>}
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
          className='employee-photo'
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
        <div className='employee-info-container'>
          <p className='hero-employee-name'>{fullName}</p>
          <p className='hero-employee-role'>{title}</p>
          <p className='hero-employee-location'>{location}</p>
        </div>
      </div>
    </a>
  );
};

const HeroBoardContainer = ({employees = []}) => (
  <div className='hero-board-container'>
    {employees.map(({photo, fullName, location, title, badges, profile}, index) => (
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

  return (
    <React.Fragment>
      <div className='mach-heroes-wrapper'>
        <SectionHeader
          title='Hero Board'
          moreLink={{title: 'Show more', href: '#'}}
        />
        <HeroBoardContainer employees={employeesData} />
      </div>
      <div className='mach-heroes-divider'>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
};
