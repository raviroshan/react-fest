export const getProductListFromServer = () => dispatch => {
  fetch('https://jsonblob.com/api/7149a488-a3e5-11e8-bc11-adcf144749a6')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SEARCH_DATA_FETCHED',
        payload: data
      });
    });
};

export function getProductListLocal() {
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
      console.log('Indide set');
      dispatch({
        type: 'SEARCH_DATA_FETCHED',
        payload: data
      });
    }, 2000);
  };
}
