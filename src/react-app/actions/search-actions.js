export function getSearchPageData() {
  const data = {
    productList: [
      {
        productName: 'Pizza',
        productId: 'pizza',
        basePrice: 450
      },
      {
        productName: 'Choco Lava',
        productId: 'chocolava',
        basePrice: 200
      },
      {
        productName: 'Garlic Bread',
        productId: 'garlic_bread',
        basePrice: 100
      },
      {
        productName: 'Sprite',
        productId: 'sprite',
        basePrice: 50
      },
      {
        productName: 'Biryani',
        productId: 'biryani',
        basePrice: 250
      },
      {
        productName: 'Samosa',
        productId: 'samosa',
        basePrice: 30
      },
      {
        productName: 'Gulab Jamun',
        productId: 'gulab_jamun',
        basePrice: 70
      },
      {
        productName: 'Gajar ka Halwa',
        productId: 'gajar_halwa',
        basePrice: 180
      }
    ]
  };

  return function someAsyncFn(dispatch) {
    console.log('dispatch: ', dispatch);

    setTimeout(() => {
      console.log('Waiting completed');
      dispatch({
        type: 'SEARCH_DATA_FETCHED',
        payload: data
      });
    }, 2000);
  };
}

export function getSearchPageDataFromServer() {
  return function someAsyncFn(dispatch) {
    console.log('dispatch: ', dispatch);

    fetch('https://jsonblob.com/api/83522d37-a45b-11e8-b19b-0bbd4c2f3e51')
      .then(data => data.json())
      .then(dataFromServer => {
        console.log('dataFromServer: ', dataFromServer);
        dispatch({
          type: 'SEARCH_DATA_FETCHED',
          payload: dataFromServer
        });
      });
  };
}
