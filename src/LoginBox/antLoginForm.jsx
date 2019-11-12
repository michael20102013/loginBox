import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './loginBox.module.less';

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props)
        // this.dologin = this.props.dologin.bind(this);//这里的登录按钮逻辑自己写
    }
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    //登陆成功处理
    if(true) {
    //    this.props.history.push('/index'); 
    //    this.dologin();
    }
    
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: '#1890FF' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: '#1890FF' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
        <div className={styles['loginbox__div--input']}>
            {/* 记住我 */}
            {
                this.props.loginCfg.isRemberMeShow === true && 
                getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(<Checkbox>记住我</Checkbox>)
            }
            {/*忘记密码 */}
            {
                this.props.loginCfg.isForgetPwdShow === true && 
                <Button type="link" className={styles.forgetPWD}>
                    忘记密码？
                </Button>
            }
        </div>
        <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
            登录
        </Button>
        {
            this.props.loginCfg.isRegisterShow === true &&
            <Button type="link">注册</Button>
        }
        </Form.Item>
      </Form>
    );
  }
}


export default NormalLoginForm;