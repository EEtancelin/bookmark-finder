
import { UPDATE_SEARCHED_TAG } from '../constants/mainContentConstants';

export const updateSearchedTag = tags => ({
  type: UPDATE_SEARCHED_TAG,
  tags,
});
