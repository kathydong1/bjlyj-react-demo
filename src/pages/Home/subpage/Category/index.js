import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import {Link} from 'react-router-dom'
import img1 from './images/pic_02.jpg'
import img2 from './images/pic_03.jpg'
import img3 from './images/pic_04.png'
import ani01 from './images/ani_01.png'
import ani02 from './images/ani_02.png'
import ani03 from './images/ani_03.png'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './style.less'
import '../../../../common/Css/animate.less'
import { connect } from "react-redux";
import $ from 'jquery';
// test

class Category extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	index:0,
      onOff:true,
			img:[
				{bgImg:img1,aniImg:ani01},
        {bgImg:img2,aniImg:ani02},
        {bgImg:img3,aniImg:ani03}]
	  }
	}

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({type:'SET_INDEX',index:4});
		const _this = this;
    new Swiper(this.myRef, {
			 watchOverflow: true,//因为仅有1个slide，swiper无效
			 watchSlidesVisibility: true,//防止不可点击
			 loop:true,
			 speed:'2000ms',
      allowTouchMove:0,
			 autoplay:{
				delay:8000,
				 waitForTransition:false,
				 disableOnInteraction:false
			 },
			 pagination: {
				 el: '.swiper-pagination',
			 },
			 slideActiveClass:'DEMO-12345667890', // 控制动画的class
			 navigation: {
				 nextEl: '.swiper-button-next',
				 prevEl: '.swiper-button-prev',
			 },
			 on:{
				 slideChangeTransitionEnd:function(){
				   // 必须做一个定时器
           if(_this.state.onOff){
             const this_= this;
             let timer;
             _this.setState({
               onOff:false
             });
             timer = setTimeout(function () {
               $("#slide-animate").remove();
               var img = new Image();
               img.src = _this.state.img[this_.realIndex].aniImg;
               img.className="pic";
               img.id="slide-animate";
               $(this_.slides[this_.activeIndex]).append(img)
               clearTimeout(timer);
               _this.setState({
                 onOff:true
               })
             },1500);
           }
					}
				}
    });

  }
	render(){
		return (
      <div className="home-category">
				<div className="swiper-container" ref={self => this.myRef = self}>
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img src={img1} alt="" />
								{/*<img src={ani01} className="pic" alt="" />*/}
						</div>
            <div className="swiper-slide">
							<img src={img2} alt="" />
							{/*<img src={ani02} className="pic" alt="" />*/}
						</div>
            <div className="swiper-slide">
							<img src={img3} alt="" />
							{/*<img src={ani03} className="pic" alt="" />*/}
						</div>
					</div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
				</div>

    </div>

			)
	}

  throttle(fn, delay){
    var timer = null;
    return function(){
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, delay);
    };
  };

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

const mapStateToProps = state => {
  return {
    data:state.setIndex
  }
};

export default connect(mapStateToProps)(Category)


