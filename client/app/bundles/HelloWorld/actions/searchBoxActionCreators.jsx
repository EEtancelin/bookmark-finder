
import { ADD_SEARCHED_TAG } from '../constants/mainContentConstants';

export const addSearchedTag= (tag) => ({
  type: ADD_SEARCHED_TAG,
  tag,
});
