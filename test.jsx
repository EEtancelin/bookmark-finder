class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      image: ''
    }

    this.search = this.search.bind(this);
  }

  // Get initial image
  componentDidMount() {
    this.getImage();
  }

  // Get search value from input box on submit
  search(e) {
    e.preventDefault();
    this.getImage(this.refs.search.value);
  }

  // Set image state to the search value
  getImage(search = 'nature') {
    let src = 'https://source.unsplash.com/featured/?' + search;
    this.setState({
      image: src
    })
  }

  render() {
    const divStyle = {
      backgroundImage: `url(${this.state.image})`
    }

    // Set `search__results` bg image to the image url
    return (
       <div className="search">
          <form onSubmit={this.search}>
            <input className="search__input" type="text" placeholder="search..." ref="search" />
          </form>
          <div style={divStyle} className="search__results">
          </div>
      </div>
      )
  }
}

ReactDOM.render(<Search />, document.getElementById("app"))
