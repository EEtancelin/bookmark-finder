import React from 'react';
import { Button } from 'reactstrap';
import Icons from './Icons';
import { Icon } from 'semantic-ui-react';

class BookmarkAddTag extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isNewTag: true,
      addedTagId: '1',
      inputValue: '',
      tags: this.props.tags,

    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.getProposedTags = this.getProposedTags.bind(this);
    this.onProposedTagCLick = this.onProposedTagCLick.bind(this);
    this.isTagsToPropose = this.isTagsToPropose.bind(this);
    this.submitNewTag = this.submitNewTag.bind(this);
    this.isNewtag = this.isNewTag.bind(this);
    this.getTagIdByTitle = this.getTagIdByTitle.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  submitNewTag() {
    const isNewTag = this.isNewTag(this.props.tags, this.state.inputValue);
    if (isNewTag) {
      this.props.onTagCreated(this.state.addedTagId, this.state.inputValue, this.props.bookmark)
    } else {
      this.props.onTagAddedToBookmark(this.state.inputValue, this.props.bookmark);
    }
    this.setState({
      isEditing: false,
      inputValue: '',
    })
  }

  onKeyDown(event) {
    event.keyCode === 13 ? this.submitNewTag(): ('')
  }

  isNewTag(tags, value) {
    return (!tags.map(t => t.get('title')).toSet().has(value));
}

  getTagIdByTitle(tags, title) {
    return (tags.find(t => t.get('title') === title)).get('id');
  }

  getAddedTagId(tags, value) {
    const isNewTag = this.isNewTag(tags, value)
    let tagId = "1"
    if (isNewTag) {
      tagId = tags.map(t => parseInt(t.get('id'))).max() + 1
    } else {
      tagId = this.getTagIdByTitle(tags, value)
    }
    return(tagId)
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
      isNewTag: this.isNewTag(this.props.tags, e.target.value),
      addedTagId: this.getAddedTagId(this.props.tags, e.target.value),
    });
  }

  getProposedTags() {
    return ( this.state.tags.filter(t => RegExp(this.state.inputValue).exec(t.get('title'))));
  }

  isTagsToPropose(){
    const proposedTags = this.getProposedTags();
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
    }

    const TagProposalSelected = {
      paddingLeft: '8px',
      backgroundColor: 'rgba(0,0,0,0.06)'
    }

    const tagProposal = {
      paddingLeft: '8px',
      cursor:'pointer',
    }
    const proposedTags = this.getProposedTags()
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
            { this.isTagsToPropose() ? (
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
            )
            :('')
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
  tags: React.PropTypes.isRequired,
  onTagAddedToBookmark: React.PropTypes.func.isRequired,
  bookmark: React.PropTypes.func.isRequired,
  onTagCreated: React.PropTypes.func.isRequired,
};

export default BookmarkAddTag;
