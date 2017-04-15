
import { USER_INPUT_UPDATE } from '../constants/mainContentConstants';

export const onUserInputUpdate = (userInput) => ({
  type: USER_INPUT_UPDATE,
  userInput,
});
