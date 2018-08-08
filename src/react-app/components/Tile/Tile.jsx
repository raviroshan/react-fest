import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';
import { Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

class Tile extends Component {

	constructor(props) {
    console.log('In constructor');
    super(props);
    this.state = ({
      isAddedToCart: false
    });
   // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('In component Did Mount');
  }

  componentWillUnmount() {
    console.log('In component Will Unmount')
  }
  
  handleClick = (e) => {
    this.setState((prevState) => ({
			isAddedToCart: !prevState.isAddedToCart
		}));
  }

	render() {
    console.log('In render Method');
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
				<Link to="/PageNotFound">Click Here</Link>
			</div>
		)
	}
}

export default Tile;

Tile.propTypes = {
	Title: PropTypes.string,
	Description: PropTypes.string.isRequired
}