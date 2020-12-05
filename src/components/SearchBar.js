import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='search'>Image Search</label>
            <input
              type='text'
              name='search'
              id='search'
              value={this.state.text}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
