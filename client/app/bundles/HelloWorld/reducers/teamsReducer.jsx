import { Map } from 'immutable';

// Selectors

export const getTeams = (state) => {
  return (state.getIn(['entities', 'teams']));
};

export const teams = (state = Map({}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
