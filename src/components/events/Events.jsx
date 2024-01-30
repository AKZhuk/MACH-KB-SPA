import React from 'react';
import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const formatDate = (time) => {
  const date = new Date(time);
  const offset = date.getTimezoneOffset() / -60;

  date.setHours(date.getUTCHours() + offset);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return [`${hours}:${minutes}`, offset];
};

const getTimeInterval = ({start_date, end_date}) => {
  const [startTime, offset] = formatDate(start_date);
  const [endTime] = formatDate(end_date);

  return `${startTime} - ${endTime} (GMT${offset >= 0 ? '+' : ''}${offset})`;
};

const EventCardImage = ({url}) => (
  <img
    className='event-card-img'
    src={url}
    alt='Event image'
  />
);

const EventCardContent = ({title, date, location, time}) => (
  <React.Fragment>
    <header className='event-card-header'>{title}</header>
    <div className='event-card-info'>
      <p className='event-card-date'>{date}</p>
      <p className='event-card-location'>{location}</p>
      <p className='event-card-location'>{time}</p>
    </div>
  </React.Fragment>
);

const EventCard = ({event}) => {
  const defaultEventImg =
    'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/MACH-event-placholder.png';
  const {url, city, title, contry, end_date, start_date, event_image, date_range_formatted} = event;
  const eventImg = event_image || defaultEventImg;
  const eventLocation = city && contry ? `${city}, ${contry}` : 'Online';
  const eventTime = getTimeInterval({start_date, end_date});

  return (
    <a
      href={url}
      target='_blank'
      className='event-card-container'
      rel='noreferrer'>
      <EventCardImage url={eventImg} />
      <div className='event-card-content-container'>
        <EventCardContent
          title={title}
          date={date_range_formatted}
          location={eventLocation}
          time={eventTime}
        />
      </div>
    </a>
  );
};

const EventsContainer = ({events}) => (
  <div className='events-container'>
    {events.map((event) => (
      <EventCard
        key={event}
        event={event}
      />
    ))}
  </div>
);

export const Events = ({data}) => (
  <div className='mach-events-wrapper'>
    <SectionHeader
      title='Events'
      moreLink={{title: 'More events', href: '#'}}
    />
    <EventsContainer events={data.EVENTS} />
  </div>
);

// const container = document.getElementById("mach-events");
// const root = ReactDOM.createRoot(container);
// root.render(<Events data={window.__SERVER_DATA__}/>);
