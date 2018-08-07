import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

class Tile extends Component {

	constructor(props) {
    super(props);
    this.state = ({
      isAddedToCart: false
    });
   // this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.setState((prevState) => ({
			isAddedToCart: !prevState.isAddedToCart
		}));
  }

	render() {
		const { Title, Description } = this.props;
		return (
			<div className="Tile">
				<div className="card">
					<img
						className="card-img-top"
						src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
						alt="Product Tile"
					/>
					<div className="card-body">
						<h5 className="card-title">{Title}</h5>
						<p className="card-text">{Description}</p>

            <button type="button" className="btn btn-outline-dark" onClick={(e) => this.handleClick(e)}>
							<span>Add To Bag</span>
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