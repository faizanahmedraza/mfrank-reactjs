import { combineReducers } from "redux";
import ProductListReducer from "Redux/V1/Products/Get/ProductGetReducer";
import ProductDetailReducer from "Redux/V1/Products/First/ProductFirstReducer";
import ProductUpdateReducer from "Redux/V1/Products/Put/ProductPutReducer";
import ProductCreateReducer from "Redux/V1/Products/Post/ProductPostReducer";
import ProductDeleteReducer from "Redux/V1/Products/Delete/ProductDeleteReducer";
import ProductStatusReducer from "Redux/V1/Products/Status/ProductStatusReducer";

const ProductRootReducer = combineReducers({
  list: ProductListReducer,
  detail: ProductDetailReducer,
  update: ProductUpdateReducer,
  create: ProductCreateReducer,
  delete: ProductDeleteReducer,
  status: ProductStatusReducer,
});
export default ProductRootReducer;
