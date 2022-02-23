import { combineReducers } from "redux";
import ProductListReducer from "Redux/V1/Products/Get/ProductGetReducer";
import ProductDetailReducer from "Redux/V1/Products/First/ProductFirstReducer";
import ProductUpdateReducer from "Redux/V1/Products/Put/ProductPutReducer";
import ProductCreateReducer from "Redux/V1/Products/Post/ProductPostReducer";
import ProductDeleteReducer from "Redux/V1/Products/Delete/ProductDeleteReducer";

const ProductRootReducer = combineReducers({
  list: ProductListReducer,
  detail: ProductDetailReducer,
  update: ProductUpdateReducer,
  create: ProductCreateReducer,
  delete: ProductDeleteReducer,
});
export default ProductRootReducer;
