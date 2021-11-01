import view from './view';
import {connect} from 'react-redux';
import * as photoReducer from '../../redux/actions/photoActions';
const mapSateToProps = state => {
  return state.photoReducer;
};

export default connect(mapSateToProps, photoReducer)(view);
