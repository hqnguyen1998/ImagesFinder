import React from 'react';
import ImageCard from './ImageCard';
import './imageList.css';

class ImageList extends React.Component {
  images = () =>
    this.props.images.map((image) => (
      <ImageCard
        key={image.id}
        url={image.urls.small}
        description={image.alt_description}
      />
    ));

  render() {
    return <div className='image-list'>{this.images()}</div>;
  }
}

export default ImageList;
