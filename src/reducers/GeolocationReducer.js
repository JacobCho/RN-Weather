import {
  FETCH_LOCATION_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  address: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LOCATION_SUCCESS: 
      const address_components = action.payload.data.results[0].address_components;
      const sublocale = address_components[3].long_name;
      const admin_area_1 = address_components[5].short_name;
      const address = `${sublocale}, ${admin_area_1}`;

      return { address };
    default:
      return state;
  }
};