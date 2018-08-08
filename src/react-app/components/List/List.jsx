import React, { Component } from 'react';
import '../List/List.scss';
import Tile from '../Tile/Tile';
import { productList } from '../../../../Public/List';
import { Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

class List extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('In component Did Mount');
  }

  componentWillUnmount() {
    console.log('In component Will Unmount')
  }

  notifyFavourite = () => {
    console.log('Fav Notified');
  }

  render() {
    return (
      <div className="productListContainer">
          <div className="col-md-12 col-lg-12">
            {productList.map((item, index) => {
              return <Tile {...item} notifyFavourite={this.notifyFavourite} Fkey = {index}/>
            })}
          </div>
        <Link to="/PageNotFound">Clicke Here to Move out of the page</Link>
      </div>
    )
  }
}

export default List;