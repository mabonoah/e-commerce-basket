export type BasketProducts = {
    basket: {
        products: Product[]
    }
}

export type Product = {
    id: string;
    name: string;
    quantity: number;
    price: number;
};

export type NewProduct = {
    payload: {
        id: string,
        name: string,
        price: number
    }
}

export type RemovableProduct = {
    payload: {
        productId: string
    }
}