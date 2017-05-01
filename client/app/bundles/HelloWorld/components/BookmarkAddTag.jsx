import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Icon } from 'semantic-ui-react';

class BookmarkAddTag extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isNewTag: true,
      inputValue: '',

    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.onProposedTagCLick = this.onProposedTagCLick.bind(this);
    this.isTagsToPropose = this.isTagsToPropose.bind(this);
    this.submitNewTag = this.submitNewTag.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  submitNewTag() {

    this.props.onTagSubmit(this.props.tags, this.state.inputValue, this.props.bookmark)
    this.setState({
      isEditing: false,
      inputValue: '',
    })
  }

  onKeyDown(event) {
    event.keyCode === 13 && this.submitNewTag();
    event.keyCode === 27 && this.setState({ isEditing: false });
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onProposedTagCLick(tag) {
    const tagTitle = this.props.tags
      .filter(t => t.get('id') === tag)
      .first()
      .get('title');
    this.setState({ inputValue: tagTitle });

  }

  onUserInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }


  isTagsToPropose(){
    const proposedTags = this.props.getProposedTags(this.props.tags, this.state.inputValue);
    const inputValue = this.state.inputValue;

    return(
      (
        proposedTags.count() === 1 &&
        proposedTags.first().get('title') !== inputValue
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
    const style = { display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' };
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
    const proposedTags = this.props.getProposedTags(this.props.tags, this.state.inputValue)
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
              value={this.state.inputValue}
              onChange={this.onUserInputChange}
              onKeyDown={this.onKeyDown}
            />
          <Button
            style={addButtonStyle}
            color="danger"
            onClick={() => { this.submitNewTag()}}
            >
            Ajouter
          </Button>
            { this.isTagsToPropose() &&
              <div style={ tagProposalsBoxStyle } >
                  {proposedTags.valueSeq().map(t => (
                    <div key={t.get('id')}
                      style={tagProposal}
                      onClick={() => { this.onProposedTagCLick(t.get('id')); }}
                    >
                      {t.get('title')}
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
  onTagAddedToBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.number.isRequired,
  onTagCreated: PropTypes.func.isRequired,
};

export default BookmarkAddTag;
