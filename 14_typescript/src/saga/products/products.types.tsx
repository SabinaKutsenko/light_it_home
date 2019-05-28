export interface Owner {
	readonly avatar?: string;
	readonly color_scheme?: string;
	readonly email: string;
	readonly first_name?: string;
	readonly id: number;
	readonly language?: string;
	readonly last_name?: string;
	readonly location?: any;
	readonly username: string;
}

export interface Product {
	readonly activated_at?: string;
	readonly category?: string;
	readonly contract_price?: boolean;
	readonly currency?: number;
	readonly images?: Images[];
	readonly is_active?: boolean;
	readonly location?: number;
	readonly owner?: Owner;
	readonly pk?: number;
	readonly price?: number;
	readonly text?: string;
	readonly theme?: string;
}

export interface Images {
	readonly advert?: number;
	readonly file?: string;
	readonly pk?: number;
}

export interface ProductsState {
	readonly loading: boolean,
	readonly productsList: Product[],
	readonly productsStatus: string
}

// ********************************************
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
interface ProductsRequestAction {
	type: typeof FETCH_PRODUCTS_REQUEST
}

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
interface ProductsPendingAction {
	type: typeof FETCH_PRODUCTS_PENDING
}

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
interface ProductsSuccessAction {
	type: typeof FETCH_PRODUCTS_SUCCESS,
	payload: Product[]
}

export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';
interface ProductsFailAction {
	type: typeof FETCH_PRODUCTS_FAIL
}

export type ProductsAction = ProductsRequestAction | ProductsPendingAction | ProductsSuccessAction | ProductsFailAction
