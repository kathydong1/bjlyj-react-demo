import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import {Link} from 'react-router-dom'
import img1 from './images/banner_01.jpg'
import img2 from './images/banner_02.jpg'
import img3 from './images/banner_03.jpg'
import img4 from './images/banner_10.png'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './style.less'
import 'animate.css';

class Category extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	index:0,
      realIndex:0
	  }
	}
  componentDidMount() {
		const _this = this;
   new Swiper(this.myRef, {
     watchOverflow: true,//因为仅有1个slide，swiper无效
		 loop:true,
		 speed:'2000ms',
		 autoplay:false,
		 autoplay:{
      	delay:5000,
        waitForTransition:false,
        disableOnInteraction:false
			},
		 on:{
       slideChangeTransitionStart:function(){
			 },
       slideChangeTransitionEnd:function(){
         _this.setState({
           realIndex:this.slides.eq([this.activeIndex]).attr('data-index')
         });
        }
			}
    });

  }
	render(){
		return (
				<div id="home-category">
          <div className="swiper-container" ref={self => this.myRef = self}>
						<div className="swiper-wrapper">
							<div className="swiper-slide" data-index="0">
								<img src={img1} alt=''/>
								<div className='animated zoomIn check-btn'><span>查看详情</span><b></b></div>
                <ul className="check-btn2">
                  <li className={`animated ${this.state.realIndex == 0 ? 'fadeInLeft':''}`}>描述性段落,描述性段落</li>

								</ul>
							</div>
              <div className="swiper-slide" data-index="1">
								<img src={img2} alt=''/>
                <ul className="check-btn2">
                  <li className={`animated ${this.state.realIndex == 1 ? 'zoomIn':''}`}>描述性段落,描述性段落</li>
                </ul>
							</div>
              <div className="swiper-slide" data-index="2">
								<img src={img3} alt=''/>
                <ul className="check-btn2">
                  <li className={`animated ${this.state.realIndex == 2 ? 'fadeInDown':''}`}>描述性段落,描述性段落</li>
                </ul>
							</div>
							<div className="swiper-slide" data-index="3">
								<img src={img4} alt=''/>
                <ul className="check-btn2">
                   <li className={`animated ${this.state.realIndex == 3 ? 'rotateIn':''}`}>描述性段落,描述性段落</li>
                  <li className={`animated ${this.state.realIndex == 3 ? 'swing':''}`}>描述性段落,描述性段落</li>
								</ul>

							</div>
						</div>
					</div>

					<div className="index-container">
						<ul>
							<li className={this.state.index === 0 ? "selected" : ''} data-index="0" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 1 ? "selected" : ''} data-index="1" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 2 ? "selected" : ''} data-index="2" onClick={this.SwipeCategory.bind(this)}></li>
						</ul>
					</div>
					<div className='prev-btn'></div>
          <div className='next-btn'></div>
				</div>
			)
	}

	SwipeAnimation(){

	}

	resetSwipeAnimation(){
    // 重置样式

	}

	SwipeCategory(e){
		e.preventDefault();
		e.stopPropagation();
	}
}

export default Category
