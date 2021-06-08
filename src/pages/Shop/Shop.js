import React, { Component } from 'react';
import CollectionPreview from './../../components/CollectionPreview/CollectionPreviev';
import shopData from './../../data-files/shop-data';
import './Shop.scss';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => {
          return (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              itemsArray={collection.items}
            />
          );
        })}
      </div>
    );
  }
}

export default Shop;
