import React from 'react';
const Tag = ({title ,logo}) => (
  <div className="tag" style={{ fontFamily: "'Mukta Vaani', sans-serif" }} >
    {logo &&
      <div className="tag-logo" style= {{backgroundImage: `url(${logo})`}}> </div>
    }
    <div className="tag-title" style={{ cursor: 'default' }}>
      {title}
    </div>
  </div>
)
export default Tag;
