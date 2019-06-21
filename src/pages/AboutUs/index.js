import React,{Component} from 'react';
import { connect } from "react-redux";



class AboutUs extends Component{

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type:'SET_INDEX',index:5});
  }


  render(){
    return (
      <div>
        联系我们
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};
export default connect(mapStateToProps)(AboutUs);
