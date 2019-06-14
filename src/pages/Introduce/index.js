import React,{Component} from 'react';
import { connect } from "react-redux";



class Introduce extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type:'SET_INDEX',index:1});
  }

  render(){
    return (
      <div>
        公司介绍
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};

export default connect(mapStateToProps)(Introduce);
