import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../types/product.type";

export const selectProducts = createSelector(
    createFeatureSelector('basketProducts'),
    (state: Product[]) => state
);

export const selectTotalPrice = createSelector(
    createFeatureSelector('basketProducts'),
    (state: Product[]): number => {
        let totalPrice: number = 0;
        state.map(product => totalPrice += (+product.price * +product.quantity));
        return totalPrice;
    }
);