import React,{Component} from 'react';
import { connect } from "react-redux";



class ServerCase extends Component{

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type:'SET_INDEX',index:3});
  }


  render(){
    return (
      <div>
        客户案例
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};
export default connect(mapStateToProps)(ServerCase);
