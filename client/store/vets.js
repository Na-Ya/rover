import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_VETS = 'GET_VETS';

/**
 * INITIAL STATE
 */
const defaultUser = { vets: [] };

/**
 * ACTION CREATORS
 */
const getVets = vets => ({ type: GET_VETS, vets });

export const fetchVets = () => async dispatch => {
  try {
    const vets = await axios.get('/api/vets');
    dispatch(getVets(vets.data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_VETS:
      return { ...state, vets: action.vets };
    default:
      return state;
  }
}
