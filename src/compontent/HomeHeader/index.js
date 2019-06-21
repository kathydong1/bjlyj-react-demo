import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput/index'
import './style.less'
import { createHashHistory } from 'history';
import { connect } from "react-redux";

const history = createHashHistory();


class HomeHeader extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
      index:this.props.data,
      clickIndex:this.props.data,
      item:[
        {name:'首页',router:'/'},
        {name:'公司介绍',router:'/introduce'},
        {name:'产品展示',router:'/product'},
        {name:'客户案例',router:'/server-case'},
        {name:'在线留言',router:'/message-for-us'},
        {name:'联系我们',router:'/about-us'},
      ]
	  }
	}

  toggleHover(ev){
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.target.getAttribute("data-index")){
    	this.setState({index: Number(ev.target.getAttribute("data-index"))})
    }
  }

  changePageHandel(path,ev){
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.target.getAttribute("data-index")){
      this.setState({clickIndex: Number(ev.target.getAttribute("data-index"))})
    }
    const { dispatch } = this.props;
    dispatch({type:'SET_INDEX',index:Number(ev.target.getAttribute("data-index"))});
    history.push(path);
  }

	render(){
	  const {index,clickIndex} = this.state;

	  const item = this.state.item.map((el,i) => {
	    return(
	      <div
            data-index={i}
            key={i}
            className={`${index === i?'item-box':''} ${clickIndex === i?'click-box':''}`}
            onMouseEnter={this.toggleHover.bind(this)}
            onClick={this.changePageHandel.bind(this,el.router)}
          >{el.name}<b className='active-line'></b>
      </div>
      )
    });
		return (
				<div id='home-header' className="clear-fix">
          <div className='home-header-content'>
            <div className='header-logo'>
              LOGO
            </div>
            <div className='header-nav'>
              <div className='header-item'>
                {item}
              </div>
              <SearchInput
                value=""
                enterHandle={this.enterHandle.bind(this)}
              />
            </div>
          </div>
          <div className='home-header-bg'></div>
				</div>
			)
	}


	enterHandle(value){
		this.props.history.push('/search/all/'+encodeURIComponent(value));
	}
}
const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};

export default connect(mapStateToProps)(HomeHeader);
