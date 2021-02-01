import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const RouteNavigator = ({ prev, current }) => {
  const link = {
    textTransform: 'capitalize',
    color: '#616971',
    fontWeight: '500',
    fontSize: '.8rem',
  };

  return (
    <div className="route-navigator-wrapper flex-align-center m-bottom-20">
      <Link to="/" style={link}>
        Home
      </Link>
      {prev && (
        <>
          <IoIosArrowForward
            style={{ margin: '0 10px', color: '#616971', fontSize: '.6rem' }}
          />
          <Link to={`/${prev === 'home' ? '' : prev}`} style={link}>
            {prev}
          </Link>
        </>
      )}

      <IoIosArrowForward
        style={{ margin: '0 10px', color: '#616971', fontSize: '.6rem' }}
      />
      <span style={link}>{current}</span>
    </div>
  );
};

export default RouteNavigator;
