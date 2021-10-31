import albumsTypes from '../types/albumsTypes';

const initialState = {
  albums: [],
  loading: false,
  error: '',
};

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case albumsTypes.FETCH_ALBUMS:
      return {
        ...state,
        albums: action.payload,
        loading: false,
        error: '',
      };
    case albumsTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case albumsTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
};
