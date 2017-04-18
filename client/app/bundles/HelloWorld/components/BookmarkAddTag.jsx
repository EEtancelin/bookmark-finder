import React from 'react';
import Icons from './Icons';
import { Button } from 'reactstrap';

class BookmarkAddTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.onAddTagCLick = this.onAddTagCLick.bind(this);
  }
  onAddTagCLick() {
    this.setState({ isEditing: true });
  }

  render() {
    const  addButtonStyle = { height: '20px',
      padding: '0px',
      paddingLeft: '9px',
      paddingRight: '9px',
      marginLeft: '5px',
      fontSize: '12px',
      fontWeight: '600',
    }
    const flexRowCenteredStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center' };
    const style = { display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' };
    return (
      <div style={style}>
        { this.state.isEditing ? (
          <div style={flexRowCenteredStyle}>
            <input
              className="search-input"
              type="text"
              name="search"
              placeholder="Tag this Bookmark"
              autoFocus="true"
              onChange={this.onUserInputChange}
            />
          <Button style={addButtonStyle}color="danger">Ajouter</Button>

          <div style={{ backgroundColor:'blue', position:'absolute', top:'10px' }} >
            coucou
          </div>
          </div>
      ) :
      (
        <div onClick={this.onAddTagCLick} style={{ marginLeft: '-5px', marginBottom: '-6px' }} >
          <Icons icon={'add'} viewBox={'0 0 7 16'} />
        </div>
      )
      }
      </div>
    );
  }
}

export default BookmarkAddTag;
