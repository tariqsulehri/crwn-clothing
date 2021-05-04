export const addItemToCart = (cartItems, cartItemToAdd) => {


    const existingcartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    console.log("existing Result : ", existingcartItem);

    if (existingcartItem) {

        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]


}