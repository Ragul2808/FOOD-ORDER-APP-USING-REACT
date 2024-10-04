import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1  // Corrected from existingCartItemIndex.quantity
            };
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id // Use action.id to find the item
        );
        const existingCartItem = state.items[existingCartItemIndex];

        if (existingCartItem.quantity === 1) {
            const updatedItems = [...state.items];
            updatedItems.splice(existingCartItemIndex, 1);
            return { ...state, items: updatedItems };
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            const updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem; // Correctly update the item
            return { ...state, items: updatedItems };
        }
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item }); // Corrected to 'ADD_ITEM'
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id }); // Corrected to 'REMOVE_ITEM'
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
    };

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
