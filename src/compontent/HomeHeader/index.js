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
      clickIndex:this.props.data
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
		return (
				<div id='home-header' className="clear-fix">
          <div className='home-header-content'>
            <div className='header-logo'>
              LOGO
            </div>
            <div className='header-nav'>
              <div className='header-item'>

                <div
                  data-index={0}
                  className={`${index === 0?'item-box':''} ${clickIndex === 0?'click-box':''}`}
                  onMouseEnter={this.toggleHover.bind(this)}
                  onClick={this.changePageHandel.bind(this,'/')}
                  >首页<b className='active-line'></b>
                </div>

                <div
                  data-index={1}
                  className={`${index === 1?'item-box':''} ${clickIndex === 1?'click-box':''}`}
                  onMouseEnter={this.toggleHover.bind(this)}
                  onClick={this.changePageHandel.bind(this,'/introduce')}
                  >公司介绍<b className='active-line'></b>
                </div>

                <div
                  data-index={2}
                  className={`${index === 2?'item-box':''} ${clickIndex === 2?'click-box':''}`}
                  onMouseEnter={this.toggleHover.bind(this)}
                  onClick={this.changePageHandel.bind(this,"/product")}
                  >产品展示<b className='active-line'></b>
                </div>

                <div
                  data-index={3}
                  className={`${index === 3?'item-box':''} ${clickIndex === 3?'click-box':''}`}
                  onMouseEnter={this.toggleHover.bind(this)}
                  onClick={this.changePageHandel.bind(this, "/server-case")}
                  >客户案例<b className='active-line'></b>
                </div>

                <div
                  data-index={4}
                  className={`${index === 4?'item-box':''} ${clickIndex === 4?'click-box':''}`}
                  onMouseEnter={this.toggleHover.bind(this)}
                  onClick={this.changePageHandel.bind(this,"/about-us")}
                  >联系我们<b className='active-line'></b>
                </div>
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
