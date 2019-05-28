import { ProductsAction } from './products.types';

export const fetchProducts = (): ProductsAction => ({
	type: "FETCH_PRODUCTS_REQUEST"
});
