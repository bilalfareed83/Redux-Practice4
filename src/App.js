import React from 'react';
import { connect } from 'react-redux';
import { userLoginSuccess } from './store/actons/authAction';
import { userAction } from './store/actons/userAction';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(userLoginSuccess());
    this.props.dispatch(userAction({ name: 'Bilal', age: 36 }));
  }

  render() {
    console.log(this.props);
    return <h1>This is Reduc architecture</h1>;
  }
}
const mapStateToProps = state => {
  return {
    isloggedIn: state.auth.isLoggedIn,
    successMessage: state.auth.successMessage,
    user: state.userState.user
  };
};

export default connect(mapStateToProps)(App);
