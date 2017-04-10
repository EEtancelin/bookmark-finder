import React from 'react';
const Tag = ({title ,logo}) => (
  <div className="tag">
    {logo &&
      <div className="tag-logo" style= {{backgroundImage: `url(${logo})`}}> </div>
    }
    <div className="tag-title">
      {title}
    </div>
  </div>
)
export default Tag;
