import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

class Tile extends Component {

	constructor(props) {
    super(props);
    this.state = ({
      isAddedToCart: false
    });
  }
  
  handleClick = (e) => {
    this.setState((prevState) => ({
			isAddedToCart: !prevState.isAddedToCart
		}));
  }

	shouldComponentUpdate() {
		 return true;
	}

	render() {
    console.log('In render Method');
		const { Title, Description, ImageSource } = this.props;
		return (
			<div className="col-4 Tile">
				<div className="card">
					<img
						className="card-img-top"
						src={ImageSource}
						alt="Product Tile"
					/>
					<div className="card-body">
						<h5 className="card-title">{Title}</h5>
						<p className="card-text">{Description}</p>

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