import { createReducer, on } from "@ngrx/store";
import { NewProduct, Product, RemovableProduct } from "../types/product.type";
import { addProductToBasket, removeProductFromBasket } from "./basket-actions";

export const productList: Product[] = [];

const getProductIndex = (prodcuts: Product[], productId: string): number => {
    return prodcuts.findIndex((product: Product) => product.id === productId);
}

export const basketReducer = createReducer(
    productList,

    // Add Product To Basket
    on(addProductToBasket, (products: Product[], newProduct: NewProduct) => {
        const productsClone: Product[] = [...products];
        const productIndex: number = getProductIndex(productsClone, newProduct.payload.id);
        if (productIndex >= 0) {
            const productClone = { ...productsClone[productIndex] };
            productClone.quantity++;
            productsClone[productIndex] = productClone;
        }
        else {
            const product: Product = { ...newProduct.payload, quantity: 1 }
            productsClone.push(product);
        }
        return productsClone;
    }),

    // Remove Product From Basket
    on(removeProductFromBasket, (products: Product[], removableProduct: RemovableProduct) => {
        const productsClone: Product[] = [...products];
        const productIndex: number = getProductIndex(productsClone, removableProduct.payload.productId);
        if (productsClone[productIndex].quantity > 1){
            const productClone = { ...productsClone[productIndex] };
            productClone.quantity--;
            productsClone[productIndex] = productClone;
        }
        else
            productsClone.splice(productIndex, 1);
        return productsClone;
    })
)
