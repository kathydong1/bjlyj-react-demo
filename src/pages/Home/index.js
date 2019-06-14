import React,{Component} from 'react';
import './style.less';
import Category from './subpage/Category/index'
import List from './subpage/List/index'
import { connect } from 'react-redux'

class Home extends Component{
  render(){
    return (
      <div>
        <Category />
        <List/>
      </div>
    )
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type:'SET_INDEX',index:0});
  }

}

const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};


export default connect(mapStateToProps)(Home);
