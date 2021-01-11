export const existingCartItem = ({
  prevCartItems,
  nextCartItem
}) => {
  return prevCartItems.find(
    cartItem => cartItem.documentID === nextCartItem.documentID
  );
};

export const handleAddToCart () = ({
  prevCartItems,
  nextCartItems
}) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItems({ previousCartItems, nextCartItem });

  if (cartItemExists) {
    return previousCartItems.map(cartItem =>
      cartItem.documentID == nextCartItem.documentID
        ? {
          ...cartItem,
          quantity: cartItem.quantity + quantityIncrement
        } : cartItem
    )
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement
    }
  ]
};
