import { combineReducers } from "redux";
import ColorListReducer from "Redux/V1/Variation/Color/Get/ColorGetReducer";
import SizeListReducer from "Redux/V1/Variation/Size/Get/SizeGetReducer";

const ProductRootReducer = combineReducers({
  colorList: ColorListReducer,
  sizeList: SizeListReducer,
});
export default ProductRootReducer;
