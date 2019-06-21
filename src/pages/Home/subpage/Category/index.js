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


class Category extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	index:0,
			img:[ani01,ani02,ani03]
	  }
	}
  componentDidMount() {
		const _this = this;
   new Swiper(this.myRef, {
     watchOverflow: true,//因为仅有1个slide，swiper无效
		 loop:true,
		 speed:'2000ms',
		 autoplay:{
     	delay:5000,
       waitForTransition:false,
       disableOnInteraction:false
		 },
		 on:{
       slideChangeTransitionEnd:function(){
       	_this.setState({
					index:this.realIndex
				})
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
							<img src={img1} alt=''/>
						</div>
						<div className="swiper-slide">
							<img src={img2} alt=''/>
						</div>
						<div className="swiper-slide">
							<img src={img3} alt=''/>
						</div>
					</div>
				</div>

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
