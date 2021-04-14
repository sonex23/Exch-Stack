import { GET_COUNTRY_EXCHANGE } from "../actionTypes";

const initialState = [];

const exchangeCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_EXCHANGE:
      const country = action.payload.map((data) => data.country);
      const countryUnique = country.filter(
        (data, index, arr) => arr.indexOf(data) === index
      );
      return countryUnique;
    default:
      return state;
  }
};

export default exchangeCountryReducer;
