import React,{Component} from 'react'
import './style.less'



class Footer extends Component{

	render(){
		return (
		    <div>
          <div className="footer-desc">
            <h3 className="footer-desc-header">愿美丽追随你</h3>
            <p className="footer-desc-text">极简主义风格的居室设计极简主义(Minimalism)，并极简主义风格的居室设计极简主义(Minimalism)，并极简主义风格的居室设计极简主义(Minimalism)，并极简主义风格的居室设计极简主义(Minimalism)，并极简主义风格的居室设计极简主义(Minimalism)，并不是现今所称的简约主义，是第二次世界大战之后60年代所兴起的一个艺术派系，又可称为“Minimal Art”，作为对抽象表现主义的反动而走向极至，以最原初的物自身或形式展示于观者</p>
            <div className='footer-desc-company'>
              <span>地址：中国北京市东城区</span>
              <span>咨询电话：185******</span>
              <span>邮箱：name@email.com</span>
            </div>
          </div>
          <div className='footer-copyright clear-fix'>
            <div>版权所有：某某公司</div>
            <div>备案号：京ICP</div>
          </div>
        </div>
			)
	}

}


export default Footer;
