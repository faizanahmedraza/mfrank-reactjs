import { combineReducers } from 'redux';
import CategoryListReducer from 'Redux/V1/Categories/Get/CategoryGetReducer';

const CategoryRootReducer = combineReducers({
    list: CategoryListReducer
});
export default CategoryRootReducer;
