import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = {
    results: [],
    isLoading: false,
  };

  handleSubmit = (value) => {
    this.setState({ isLoading: true });
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: { query: value },
        headers: {
          authorization:
            'Client-ID L2rQgdsTyFnmZUPsDYcRRY-QRnlUuEsIif-plQVOBr8',
        },
      })
      .then((res) =>
        this.setState({ results: res.data.results, isLoading: false })
      );
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ImageList images={this.state.results} />
        )}
      </div>
    );
  }
}

export default App;
