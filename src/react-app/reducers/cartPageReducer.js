const initialState = {
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

export default function cartPageReducer(previousState = initialState, action) {
  console.log('previousState: ', previousState);
  console.log('action: ', action);
  // some logic
  return previousState;
}
