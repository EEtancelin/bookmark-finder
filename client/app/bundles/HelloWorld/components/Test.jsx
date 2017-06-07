import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import AddBookmark from './AddBookmark';

const Test = () => (
  <Modal open={true}>
    <Modal.Header>Fill in you're Bookmark info</Modal.Header>
    <Modal.Content>
      <AddBookmark show={true} />
    </Modal.Content >
  </Modal>
)

export default Test
