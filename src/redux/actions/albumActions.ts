import albumsTypes from '../types/albumsTypes';
import {getAlbums} from '../../services/albums';

export const fetchAlbum = () => dispatch => {
  dispatch({type: albumsTypes.LOADING});
  try {
    getAlbums().then(reponse => {
      dispatch({
        type: albumsTypes.FETCH_ALBUMS,
        payload: reponse.data,
      });
    });
  } catch (e) {
    dispatch({
      type: albumsTypes.ERROR,
      payload: 'Error albums',
    });
  }
};
