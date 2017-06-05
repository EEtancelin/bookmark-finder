
import { fetchData } from '../reducers/mainContentReducer';

export const postBookmark = bookmark => dispatch => {
  dispatch(fetchData())
}

export const getAPIHeader = (state) => {
  return (
    new Headers({
      'Content-Type': 'application/json',
      'X-User-Email': state.getIn(['user', 'userEmail']),
      'X-User-Token': state.getIn(['user', 'token']),
    })
  );
};
