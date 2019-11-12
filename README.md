## 项目目的：
这是一个基于react的creat-react-app脚手架和ant-design的UI框架的登陆框封装组件，主要为后期项目搭建提供便利
## 操作步骤
1. 确定你的项目less配置(demo中用的是customize-cra的配置方法)OK,antd安装和配置完成。
2. 直接项目中引用，就像这样
3. ```js 

        import LoginBoxComponent from '../../components/LoginBox/LoginBox';//LoginBoxComponent就是我们导出的登录框组件
        class Login extends React.Component {
          constructor(props) {
              super(props);
          }
          render() {
              return (
                    <>
                        <div id='loginBox' className="sign">
                            <LoginBoxComponent {...this.props} />
                        </div>               
                    </>
                )
            }
        }
   ```
 
