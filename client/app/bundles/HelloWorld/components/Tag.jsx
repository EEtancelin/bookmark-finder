import React from 'react';
import { Icon } from 'semantic-ui-react';


// Style constants


const Tag = ({ title ,logo,showRemoveButton, onRemoveClick, onClick }) => (
  <div className="tag" onClick={onClick} style={{ fontFamily: "'Mukta Vaani', sans-serif", position:'relative' }} >
    {logo &&
      <div className="tag-logo" style= {{backgroundImage: `url(${logo})`}}> </div>
    }
    <div className="tag-title" style={{ cursor: 'default' }}>
      {title}
    </div>

    { showRemoveButton &&
      <div onClick={onRemoveClick}
        style={{ position: 'absolute', top: '-7px', right: '-16px' }} >
        <Icon style={{ color: 'rgba(0,0,0,0.75)' }} name="remove" />
      </div>
    }

  </div>
)
export default Tag;
