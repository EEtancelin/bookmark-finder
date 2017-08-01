import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Icon } from 'semantic-ui-react';

class BookmarkAddTag extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      inputValue: '',
    };

    this.onEditClick = this.onEditClick.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.onProposedTagCLick = this.onProposedTagCLick.bind(this);
    this.shouldProposeTags = this.shouldProposeTags.bind(this);
    this.onTagSubmit = this.onTagSubmit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onTagSubmit() {
    this.props.submitTag(this.state.inputValue, this.props.bookmarkId)
    this.setState({
      isEditing: true,
      inputValue: '',
    })
  }

  onKeyDown(event) {
    event.keyCode === 13 && this.onTagSubmit();
    event.keyCode === 27 && this.setState({ isEditing: false });
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onProposedTagCLick(tagTitle) {
    this.setState({ inputValue: tagTitle });
  }

  onUserInputChange(e) {
    this.setState({
      inputValue: e.target.value.toLowerCase(),
    });
  }


  shouldProposeTags(){
    const proposedTags = this.props.getProposedTags(this.state.inputValue);
    const inputValue = this.state.inputValue;

    return(
      (
        proposedTags.count() === 1 &&
        proposedTags.first() !== inputValue
      ) || (
        proposedTags.count() > 1
      )
    )
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
    const style = {
      height: '23px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative'
    };
    const tagProposalsBoxStyle = {
      paddingTop: '5px',
      paddingBottom: '3px',
      backgroundColor: 'white',
      position: 'absolute',
      top: '28px',
      left: '15px',
      width: '119px',
      border: 'solid 1px rgba(0,0,0,0.1)',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '13px',
      zIndex: 1,
    }

    const TagProposalSelected = {
      paddingLeft: '8px',
      backgroundColor: 'rgba(0,0,0,0.06)'
    }

    const tagProposal = {
      paddingLeft: '8px',
      cursor:'pointer',
    }
    const proposedTags = this.props.getProposedTags(this.state.inputValue)
    return (
      <div style={style}>
        { this.state.isEditing ? (
          <div style={flexRowCenteredStyle}>
            <input
              className="add-tag-input"
              type="text"
              name="search"
              placeholder="Tag this Bookmark"
              autoFocus="true"
              value={this.state.inputValue}
              onChange={this.onUserInputChange}
              onKeyDown={this.onKeyDown}
            />
          <Button
            style={addButtonStyle}
            color="danger"
            onClick={() => { this.onTagSubmit()}}
            >
            Ajouter
          </Button>
            { this.shouldProposeTags() &&
              <div style={ tagProposalsBoxStyle } >
                  {proposedTags.valueSeq().map(tagTitle => (
                    <div
                      key={tagTitle}
                      style={tagProposal}
                      onClick={() => { this.onProposedTagCLick(tagTitle); }}
                    >
                      {tagTitle}
                    </div>
                  ))}
                </div>
          }
          </div>
      ) :
      (
        <Icon style={{color: 'rgba(0,0,0,0.75)', marginBottom: '4px'}} name='write' onClick={this.onEditClick} />
      )
      }
      </div>
    );
  }
}

BookmarkAddTag.propTypes = {
  tags: PropTypes.any.isRequired,
  bookmarkId: PropTypes.string.isRequired,
};

export default BookmarkAddTag;
