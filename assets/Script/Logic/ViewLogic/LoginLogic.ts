/******************
 * 登录页面逻辑
 * 创建者：许强
 * 创建日期：2018.4.3
 * ************** */
import _httpRequest from '../../Net/HttpRequest' //http通讯模块
import _viewManage from '../../Core/ViewManage' //视图管理模块

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginLogic extends cc.Component {

    private loginView:cc.Node; //登录页面对象

    onLoad () {
        this.loginView = this.node;
    }

    /******************
     * 登录按钮回调
     * ************** */
    private loginBtcallBack(){
        let usernameStr:string = this.loginView.getChildByName('usernameBox').getComponent(cc.EditBox).string;
        let userpawdStr:string = this.loginView.getChildByName('userpawdBox').getComponent(cc.EditBox).string;

        if(this.validationStr(usernameStr))return
            
        if(this.validationStr(userpawdStr))return
        
        _httpRequest.send('username=' + usernameStr +'&userpwd=' + userpawdStr,'login', ()=>{
            this.loginSuccessful();
        });
    }

    /******************
     * 注册按钮回调
     * ************** */
    private registeredBtcallBack(){
        let usernameStr:string = this.loginView.getChildByName('usernameBox').getComponent(cc.EditBox).string;
        let userpawdStr:string = this.loginView.getChildByName('userpawdBox').getComponent(cc.EditBox).string;

        if(this.validationStr(usernameStr))return
            
        if(this.validationStr(userpawdStr))return

        _httpRequest.send('username=' + usernameStr +'&userpwd=' + userpawdStr,'join', ()=>{
            this.loginSuccessful();
        });
    }

    /******************
     * 登录成功
     * ************** */
    private loginSuccessful(){
        _viewManage.closeView();

        _viewManage.openView('MainView');
    }

    /******************
     * 验证输入字符串是否合法，如果返回值是true则非法
     * str：输入字符串
     * ************** */
    private validationStr(str:string):boolean{
        if(str == ''){
            return true;
        }
        return false;
    }
    
}
