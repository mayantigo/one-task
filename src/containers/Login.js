import { connect } from 'react-redux';
import Login from '../screens/login';

const mapDispatchToProps = dispatch => ({
  login(user, password) {
    dispatch(user + password);
  },
});

export default connect(null, mapDispatchToProps)(Login);
