// Absolute Import
import React from 'react';
import PropTypes from 'prop-types';

// Component constants
const placeholderUrl = 'https://image.flaticon.com/icons/svg/139/139076.svg';

// Style constants
const placeholderWrapperStyle = { height: '80px', width:'80px', padding: '5px'}
const wrapperStyle = { height: '80px', width:'80px' };


const BookmarkThumbnail = ({ url }) => (
  <div style={url ? (wrapperStyle) : (placeholderWrapperStyle)}>

    <div
      style={{
        backgroundImage: `url( ${url || placeholderUrl} )`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    />
  </div>
);

BookmarkThumbnail.propTypes = {
};

export default BookmarkThumbnail;
