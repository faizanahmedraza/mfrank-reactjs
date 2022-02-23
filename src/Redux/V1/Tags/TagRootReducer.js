import { combineReducers } from 'redux';
import TagListReducer from 'Redux/V1/Tags/Get/TagGetReducer';

const TagRootReducer = combineReducers({
    list: TagListReducer
});
export default TagRootReducer;
