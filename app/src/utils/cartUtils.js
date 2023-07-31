export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const updateCart = (state) => {
    // calculate item price
    state.itemsPrice = addDecimals(state.cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0))

    //calculate Shipping Price
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10
    )

    //calculate tax Price(18%)
    state.taxPrice = addDecimals(Number((0.18 * state.itemsPrice).toFixed(2))
    )

    //calculate total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2)

    // save to local storage
    localStorage.setItem('cart', JSON.stringify(state));

    return state
}