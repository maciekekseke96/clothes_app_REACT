import React, { Component } from 'react';
import { sections } from './../../data-files/directory-sections';
import MenuItem from './../MenuItem/MenuItem';
import './Directory.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => {
          return (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
