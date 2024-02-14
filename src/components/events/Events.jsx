import React from 'react';
import {SectionHeader} from '../section-header/SectionHeader';
import './index.css';

const eventConfig = {
  title: 'Events',
  moreLink: {
    title: 'More events',
    href: 'https://wearecommunity.io/events?f%5B0%5D%5Bcommunity%5D%5B%5D=MACH%20Community',
  },
};

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
  <div
    className='event-card__img'
    role='img'
    style={{backgroundImage: `url(${url})`}}></div>
);

const EventCardContent = ({title, date, description}) => (
  <React.Fragment>
    <header className='event-card__header'>{title}</header>
    <div className='event-card__info'>
      <p className='event-card__date'>{date}</p>
    </div>
    <p className='event-card__description'>{description}</p>
  </React.Fragment>
);

const EventCard = ({event}) => {
  const defaultEventImg =
    'http://static.cdn.epam.com/uploads/b3dcac368f4b1c5ea87d67e0d682da2e/MACH_CC/MACH-event-placholder.png';
  const {
    url,
    city,
    title,
    country,
    end_date,
    start_date,
    event_image,
    date_range_formatted = 'NOT DEFINED',
    description,
  } = event;
  const eventImg = event_image || defaultEventImg;
  const eventLocation = city && country ? `${city}, ${country}` : 'Online';
  const eventTime = getTimeInterval({start_date, end_date});
  return (
    <a
      href={url}
      target='_blank'
      className='event-card__container'
      rel='noreferrer'>
      <EventCardImage url={eventImg} />
      <div className='event-card-content-container'>
        <EventCardContent
          title={title}
          date={date_range_formatted}
          location={eventLocation}
          time={eventTime}
          description={description}
        />
      </div>
    </a>
  );
};

const EventsContainer = ({events}) => (
  <div className='events-container'>
    {events.map((event) => (
      <EventCard
        key={event.url}
        event={event}
      />
    ))}
  </div>
);

export const Events = ({data}) => (
  <section className='mach-events-wrapper wrapper flex-column'>
    <SectionHeader
      title={eventConfig.title}
      moreLink={eventConfig.moreLink}
    />
    <EventsContainer events={data.EVENTS} />
  </section>
);

// const container = document.getElementById("mach-events");
// const root = ReactDOM.createRoot(container);
// root.render(<Events data={window.__SERVER_DATA__}/>);
