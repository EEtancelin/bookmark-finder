// Absolute Import
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'

// Component constants
// Style constants

// Component
const AddBookmarkForm = ({}) => (
  <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Url</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Button type='submit'>save</Button>
    </Form>
);


AddBookmarkForm.propTypes = {

};

export default AddBookmarkForm;
