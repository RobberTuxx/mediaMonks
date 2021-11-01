import photoTypes from '../types/photoTypes';
import {getPhotos} from '../../services/photos';

export const fetchPhoto = () => dispatch => {
  dispatch({type: photoTypes.LOADING});
  try {
    getPhotos().then(reponse => {
      dispatch({
        type: photoTypes.FETCH_PHOTO,
        payload: reponse.data,
      });
    });
  } catch (e) {
    dispatch({
      type: photoTypes.ERROR,
      payload: 'Error photos',
    });
  }
};
