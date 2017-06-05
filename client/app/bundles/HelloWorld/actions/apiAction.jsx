
import { fetchData } from '../reducers/mainContentReducer';

export const postBookmark = bookmark => dispatch => {
  dispatch(fetchData())
}
