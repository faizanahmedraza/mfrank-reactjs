import { combineReducers } from 'redux';
import CategoryListReducer from 'Redux/V1/Categories/Get/CategoryGetReducer';
import CategoryPostReducer from 'Redux/V1/Categories/Post/CategoryPostReducer';

const CategoryRootReducer = combineReducers({
    list: CategoryListReducer,
    create: CategoryPostReducer,
});
export default CategoryRootReducer;
