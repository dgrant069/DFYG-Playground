import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {getHeroInfo} from '../data/actions/hero';

import styles from './userProfile.css';

// const actions = {
//   getHeroInfo
// };
//
// const loadData = props => {
//   props.getHeroInfo()
// };

class UserProfile extends React.Component {
  // componentWillMount() {
  //   loadData(this.props);
  // }

  render() {
    return (
      <section className={`${styles.userProfileContainer} ${styles.appPadding}`}>
        <p className={styles.test}>user profile</p>
      </section>
    );
  }
}

// UserProfile.propTypes = {
//   heroInfo: PropTypes.object
// };
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     heroInfo: state.heroReducer.heroInfo
//   };
// };
//
// function mapDispatchToProps(dispatch) {
//     return {actions: bindActionCreators(actions, dispatch)}
// }
//
// export default connect(mapStateToProps, actions)(UserProfile);

export default UserProfile;
