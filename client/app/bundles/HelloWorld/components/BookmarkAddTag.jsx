import React from 'react';
import Icons from './Icons';
import { Button } from 'reactstrap';

class BookmarkAddTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      inputValue: '',
      tags: this.props.tags,
    };
    this.onAddTagCLick = this.onAddTagCLick.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.getProposedTags = this.getProposedTags.bind(this);
    this.onProposedTagCLick = this.onProposedTagCLick.bind(this);
    this.isTagsToPropose = this.isTagsToPropose.bind(this);
    this.submitNewTag = this.submitNewTag.bind(this);
  }

  submitNewTag() {
    console.log(this.state.inputValue);
    console.log(this.props.bookmark);
    this.props.onTagAddedToBookmark(this.state.inputValue, this.props.bookmark);
  }


  onAddTagCLick() {
    this.setState({ isEditing: true });
  }

  onProposedTagCLick(tag) {
    const tagTitle = this.props.tags
      .filter(t => t.get('id') === tag)
      .first()
      .get('title');
    this.setState({ inputValue: tagTitle });
  }

  onUserInputChange(e){
    this.setState({ inputValue: e.target.value });
  }

  getProposedTags(){
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
