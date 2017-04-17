import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getHeroInfo} from '../data/actions/hero';
import {getLiveStreamRibbon} from '../data/actions/teaserRibbon';
import {getVideoOnDemandRibbons} from '../data/actions/vodTeaserRibbon';
import Hero from '../components/Hero';
import TeaserRibbon from '../components/TeaserRibbon';

const actions = {
  getHeroInfo,
  getLiveStreamRibbon,
  getVideoOnDemandRibbons
};

const loadData = props => {
  props.getHeroInfo();
  props.getLiveStreamRibbon();
  props.getVideoOnDemandRibbons();
};

class Home extends React.Component {
  componentWillMount() {
    loadData(this.props);
  }

  render() {
    return (
      <section className="home-container">
        <Hero heroInfo={this.props.heroInfo} displayType={"slider"}/>
        <TeaserRibbon ribbonName={"Watch Now"} type={"live"} programsInfo={this.props.liveTeaserRibbonInfo}/>
        <TeaserRibbon ribbonName={"News"} type={"vod"} programsInfo={this.props.vodTeaserRibbonInfo}/>
      </section>
    );
  }
}

Home.propTypes = {
  liveTeaserRibbonInfo: PropTypes.object,
  vodTeaserRibbonInfo: PropTypes.object,
  heroInfo: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    liveTeaserRibbonInfo: state.teaserRibbonReducer.liveTeaserRibbonInfo,
    vodTeaserRibbonInfo: state.vodTeaserRibbonReducer.vodTeaserRibbonInfo,
    heroInfo: state.heroReducer.heroInfo
  };
};

// function mapDispatchToProps(dispatch) {
//     return {actions: bindActionCreators(actions, dispatch)}
// }

export default connect(mapStateToProps, actions)(Home);
