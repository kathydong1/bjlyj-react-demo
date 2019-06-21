import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import ScrollReveal from 'scrollreveal';

class HomeList extends Component{
	constructor(props) {
	  super(props);
    this.myRef = React.createRef();
	  this.state={
	  	img:this.props.img
		};
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
  componentDidMount(){
    ScrollReveal().reveal(this.myRef.current,{
      interval: 0,
      reset: true,   // 滚动鼠标时，动画开关(默认是false没有打开鼠标滚动的动画开关)
      origin: 'right', // 动画开始的方向
      duration: 500,   // 动画持续时间
      delay: 0, // 延迟
      rotate: {x:0, y:0, z:0},  // 过度到0的初始角度
      opacity: 0.2, // 初始透明度  (0.2到1的效果)
      scale:.5,       //缩放
      easing: 'ease-in-out', //动画效果// 缓动'ease', 'ease-in-out'，'linear'...
      // 回调函数
      //当动画开始之前会被触发
      beforeReveal: function(domEl){
        // console.log('动画执行了');
      },
      //鼠标滚轮滚动之前会被触发
      beforeReset: function(domEl){
        // console.log('滚轮开始---');
      },
      //动画开始之后会被触发
      afterReveal: function(domEl){
        // console.log('动画结束了');
      },
      //滚轮滚动之后会被触发
      afterReset: function(domEl){
        // console.log('滚轮结束了');
      }
    });
	}
	render(){
		return (
          <div className='product-img' ref={this.myRef}>
						<img src={this.state.img} alt=''/>
          </div>
			)
	}
}

export default HomeList
