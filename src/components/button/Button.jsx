import './index.css';
export const BlueButton = ({text, link, arrow = true}) => (
  <a
    href={link}
    target='_blank'
    rel='noreferrer'
    className='blue-btn'>
    {text}
    {arrow && (
      <span className='blue-btn__arrow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <g clipPath='url(#clip0_73_4496)'>
            <path
              d='M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07996'
              stroke='white'
              strokeWidth='2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_73_4496'>
              <rect
                width='24'
                height='24'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </span>
    )}
  </a>
);
