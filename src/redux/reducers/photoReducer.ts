import photoTypes from '../types/photoTypes';

const initialState = {
  photos: [],
  loading: false,
  error: '',
};

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case photoTypes.FETCH_PHOTO:
      return {
        ...state,
        photos: action.payload,
        loading: false,
        error: '',
      };
    case photoTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case photoTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
};
