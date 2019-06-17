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
import anime from "animejs";
import $ from 'jquery';

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
    let el = $(document.getElementsByClassName('check-btn2')).children('li').toArray();
    var animation = anime({
      targets: el,
      translateX: 250,
      duration:2000,
      // scale:function(el){ console.log(el);},
      delay: anime.stagger(200) // 每个元素的延迟增加100毫秒。
    });

    let animation2 = anime({
      targets: this.textInput,
      rotate: {
        value: 360,
        duration: 800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 800,
        delay: 0,
        easing: 'easeInOutQuart'
      }
    });



   new Swiper(this.myRef, {
      centeredSlides: true,
      loop:true,
      speed:'500ms',
			autoplay:{
      	delay:2000,
        waitForTransition:false
			},
      controller:true,
			on:{
        slideChangeTransitionEnd:() => {
          animation.restart();  // 重置动画
          animation2.restart();
        },
        slideChangeTransitionStart:() => {
          animation.reset();
          animation2.reset();

        }
			}
    });
  }
	render(){
		return (
				<div id="home-category">
          <div className="swiper-container" ref={self => this.myRef = self}>
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<img src={img1} alt=''/>
								<div className="check-btn" ref={input => this.textInput = input}><span>查看详情</span><b></b></div>
                <ul className="check-btn2">
                  <li>描述性段落,描述性段落</li>
                  <li>描述性段落,描述性段落</li>
                  <li>描述性段落,描述性段落</li>
									<li>描述性段落,描述性段落</li>
                  <li>描述性段落,描述性段落</li>
								</ul>
							</div>
              <div className="swiper-slide"><img src={img2} alt=''/></div>
              <div className="swiper-slide"><img src={img3} alt=''/></div>
							<div className="swiper-slide"><img src={img4} alt=''/></div>
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
