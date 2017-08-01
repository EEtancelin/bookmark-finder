import React from 'react';
import { Icon } from 'semantic-ui-react';


// Style constants

const tagStyle = {
  fontFamily: "'Mukta Vaani', sans-serif",
  position: 'relative',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};


const Tag = ({ title, logo, onRemoveClick, onClick }) => (
  <div className="tag"
    style={tagStyle}
    id="hover-me">
    {logo &&
      <div className="tag-logo" style= {{backgroundImage: `url(${logo})`}}> </div>
    }
    <div className="tag-title" onClick={onClick} >
      {title}
    </div>

    { onRemoveClick &&
      <div onClick={onRemoveClick}
        className="remove-button"
        id="hover-content">
        <Icon name="remove" />
      </div>
    }

  </div>
)
export default Tag;
