import React, { Component } from 'react';
import shopData from './../../data-files/shop-data';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }
  render() {
    return <div>SHOP PAGE</div>;
  }
}

export default Shop;
