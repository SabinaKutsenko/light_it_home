import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL, ProductsState, ProductsAction } from './products.types';

const initialState: ProductsState = {
	loading: false,
	productsList: [],
	productsStatus: ""
};

export default function (state = initialState, action: ProductsAction) : ProductsState {
	switch (action.type) {
		case FETCH_PRODUCTS_PENDING:
			return {
				loading: true,
				productsList: state.productsList,
				productsStatus: "pending",
			};
		case FETCH_PRODUCTS_SUCCESS:
			return {
				loading: false,
				productsList: action.payload,
				productsStatus: "success",
			};
		case FETCH_PRODUCTS_FAIL:
			return {
				loading: false,
				productsList: state.productsList,
				productsStatus: "fail",
				/*error: action.error*/
			};
		default:
			return state;
	}
}
