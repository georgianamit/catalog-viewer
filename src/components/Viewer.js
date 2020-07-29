import React, { Component } from 'react';
import './Viewer.css';

class Viewer extends Component {

  render() {
    return (
        <div className="catalog-view">
          <img data-testid="catalog-view" className="catalog-image" src={this.props.catalog} alt='catalog'/>
        </div>
    );
  }
}

export default Viewer;
