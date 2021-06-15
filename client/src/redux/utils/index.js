export const addItemToShoppingCart = (cartItems, itemToAdd) => {
  const exitsItem = cartItems.find(item => item._id === itemToAdd._id);

  if (exitsItem) {
    return cartItems.map(item =>
      item._id === itemToAdd._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const descreaseCartItemQty = (cartItems, cartItem) => {
  const exitsItem = cartItems.find(item => item._id === cartItem._id);

  if (exitsItem.quantity === 1) {
    return cartItems.filter(item => item._id !== cartItem._id);
  }

  return cartItems.map(item =>
    item._id === cartItem._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : item
  );
};
