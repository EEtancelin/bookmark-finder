import ReactOnRails from 'react-on-rails';

import MainContentApp from './MainContentApp';
import Tag from '../components/Tag'
import BookmarkBody from '../components/BookmarkBody'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  MainContentApp,
});
