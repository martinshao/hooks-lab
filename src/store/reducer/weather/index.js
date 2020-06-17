
const initialState = { temperature: 'N/A', windSpeed: 'N/A' };

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        temperature: action.temperature,
        windSpeed: action.windSpeed
      };
    default:
      return state;
  }
}
