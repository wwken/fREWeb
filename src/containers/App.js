import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BuyerMain from '../components/BuyerMain'
import * as SocialActions from '../actions/social'

function mapStateToProps(state) {
  return {
    social: state.social
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SocialActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerMain)
