/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increase } from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {increase, value} = this.props;
    return <Main increase={increase} value={value}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  increase: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  return { value: state.counter.count};
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  return {
    increase : () => dispatch(increase())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
