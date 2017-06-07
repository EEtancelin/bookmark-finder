// Absolute Import
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';


// Component constants
// Style constants

// Component
class AddBookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', url: '' };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onTitleChange(e) { this.setState({ title: e.target.value }); }
  onUrlChange(e) { this.setState({ url: e.target.value }); }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ title: '', url: '' });
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        { this.props.show &&
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder='First Name'
              onChange={this.onTitleChange}
              value={this.state.title}
              autoFocus="true"
              />
          </Form.Field>
          <Form.Field>
            <label>Url</label>
            <input placeholder='Last Name' onChange={this.onUrlChange} value={this.state.url} />
          </Form.Field>
          <Button type='submit' >save</Button>
        </Form>
      }
      </div>
    )};
}

AddBookmark.propTypes = {

};

export default AddBookmark;
