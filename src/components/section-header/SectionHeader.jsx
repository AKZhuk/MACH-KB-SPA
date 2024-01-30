import './index.css';
export const SectionHeader = ({title, moreLink, isCentred = false}) => {
  return (
    <div className={isCentred ? 'sectionHeader centred' : 'sectionHeader'}>
      <span className='title'>{title}</span>
      {moreLink ? (
        <a
          href={moreLink.href}
          target='_blank'
          className='more-heroes-btn'
          rel='noreferrer'>
          {moreLink.title}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'>
              <path
                d='M3 1.62L4.615 0L12.6 8L4.615 16L3 14.38L9.365 8L3 1.62Z'
                fill='#222'
              />
            </svg>
          </span>
        </a>
      ) : (
        ''
      )}
    </div>
  );
};
