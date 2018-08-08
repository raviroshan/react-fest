import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

class Tile extends Component {

	constructor(props) {
    super(props);
    this.state = ({
      isAddedToCart: false
    });
   this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.setState((prevState) => ({
			isAddedToCart: !prevState.isAddedToCart
		}));
  }

	render() {
		const { Title, Description } = this.props;
		return (
			  <div className="col-4 Tile">
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.shopify.com/s/files/1/0128/9452/products/TSM-Red-Line-Grey-Black_1024x1024.png?v=1524684645"
            alt="Product Tile"
          />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Description</p>

            <button type="button" className="btn btn-outline-dark" onClick={this.handleClick}>
              <span>Add To Favorite</span>
              <i className={this.state.isAddedToCart ? 'fas fa-star' : ''} />
            </button>
          </div>
        </div>
      </div>
		)
	}
}

export default Tile;

Tile.propTypes = {
	Title: PropTypes.string,
	Description: PropTypes.string.isRequired
}