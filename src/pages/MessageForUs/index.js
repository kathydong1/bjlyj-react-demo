import React,{Component} from 'react';
import { connect } from "react-redux";



class MessageForUs extends Component{

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type:'SET_INDEX',index:4});
  }


  render(){
    return (
      <div>
        在线留言
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};
export default connect(mapStateToProps)(MessageForUs);
