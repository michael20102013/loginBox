import React from 'react';
import { Form, Icon } from 'antd';

import NormalLoginForm from './antLoginForm';

import loginCfg from './logincfg';

import styles from './loginBox.module.less'

const LoginBoxForm = Form.create({ name: 'login_box'})(NormalLoginForm);


console.log(styles)

class LoginBoxComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id={styles.loginBox} className={styles.main}>
                <h4 className={styles.title}>
                    登录
                </h4>
                <LoginBoxForm {...this.props} loginCfg={loginCfg}/>
                {             
                    //根据配文件显示社交账号登录
                    loginCfg.isSocialAccountShow === true &&
                    <div>
                        <h6>社交账号登录</h6>
                        <div className={styles["more-sign"]}>
                            <ul>
                                <li><Icon type="weibo" className={`${styles.icon} ${styles['anticon-weibo']}`} /></li>
                                <li><i className={`anticon_user anticon-weixin ${styles.icon} ${styles['anticon-weixin']}`} /></li>
                                {/* <li><i className={styles['anticon-weixin']} /></li> */}
                                <li><Icon type="qq" className={`${styles.icon} ${styles['anticon-qq']}`} /></li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default LoginBoxComponent
