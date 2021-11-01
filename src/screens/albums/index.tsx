import view from './view';
import {connect} from 'react-redux';
import * as albumReducer from '../../redux/actions/albumActions';
const mapSateToProps = state => {
  return state.albumReducer;
};

export default connect(mapSateToProps, albumReducer)(view);
