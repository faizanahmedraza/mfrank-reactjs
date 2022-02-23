import { combineReducers } from "redux";
import TagRootReducer from "Redux/V1/Tags/TagRootReducer";
import CategoryRootReducer from "Redux/V1/Categories/CategoryRootReducer";
import ProductRootReducer from 'Redux/V1/Products/ProductRootReducer';

export default combineReducers({
  tags: TagRootReducer,
  categories: CategoryRootReducer,
  products: ProductRootReducer
});
