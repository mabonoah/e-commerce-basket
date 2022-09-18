import { createAction, props } from "@ngrx/store";
import { NewProduct, RemovableProduct } from "../types/product.type";

const ADD_PRODUCT_TO_BASKET: string = 'ADD_PRODUCT_TO_BASKET';
const REMOVE_PRODUCT_FROM_BASKET: string = 'REMOVE_PRODUCT_FROM_BASKET';

export const addProductToBasket = createAction(ADD_PRODUCT_TO_BASKET, props<NewProduct>());
export const removeProductFromBasket = createAction(REMOVE_PRODUCT_FROM_BASKET, props<RemovableProduct>());