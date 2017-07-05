import React, { PropTypes } from 'react'
import BookmarkList from '../components/BookmarkList';
import InfiniteScroll from 'react-infinite-scroller';


/// This compoent manage the infinite scroll for the Bookmarks
class BookmarkListIS extends React.Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.state = { displayed: 5};
  }

  getItems() {
    return (this.props.bookmarksIds.take(this.state.displayed))
  }
  loadMore() {
    this.setState({ displayed: this.state.displayed + 5 })
  }
  render() {
    return(
      <InfiniteScroll
        pageStart={0}
        loadMore={() => this.loadMore()}
        hasMore={this.state.displayed < this.props.bookmarksIds.count()}
        loader={<div className="loader">Loading ...</div>}
      >
        <BookmarkList bookmarksIds={this.getItems()} />
      </InfiniteScroll>
    )
  }
}

export default BookmarkListIS;
