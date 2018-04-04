/******************
 * httpt通讯模块
 * 创建者：许强
 * 创建日期：2018.4.2
 * ************** */
import _config from '../Config' //引入配置
import _errorList from './ErrorList' //错误列表
import _interactionLogic from '../Logic/InteractionLogic' //交互模块
import _tableData from '../Data/TableData' //静态表模块
import _webSocket from '../Net/WebSocket' //webSokcet通讯模块
import _systemData from '../Data/SystemData' //系统数据模块

class HttpRequest {

    private net: XMLHttpRequest; //通讯对象

    constructor() {
        this.net = new XMLHttpRequest();
    }
    /******************
     * 发送请求
     * str: 发送的数据内容
     * behaviorStr: 行为字符串
     * fun：回调函数
     * ************** */
    send(str:string,behaviorStr:string,fun){
        var that = this;

        this.net.onreadystatechange = () => {
            if (this.net.readyState == 4) {
                if (this.net.status >= 200 && this.net.status <= 207 || this.net.status == 0) {
                    var requestValue = this.net.responseText;
                    var jsonValue = JSON.parse(requestValue);

                    console.log("@Net:服务器返回数据");
                    console.log(jsonValue);
                    var error = parseInt(jsonValue.errorCode);
                    if (error == _errorList.ERROR_CODE_NONE) { //服务器状态检测是否成功

                        _systemData.sid = jsonValue.sid; //设置会话标识
                        _webSocket.openWebSocket(); //链接webSokcet

                        fun();
                    } else {
                        let str = '';
                        switch (error){
                            case _errorList.ERROR_CODE_USER_EXISTS:str = _tableData.getText('Register_Error_Account');break;
                            case _errorList.ERROR_CODE_USER_NOT_EXISTS:str = _tableData.getText('Login_Error_AccountNone');break;
                            case _errorList.ERROR_CODE_USER_PWD_DIFFERENT:str = _tableData.getText('Login_Error_Wrong');break;
                            case _errorList.ERROR_CODE_USER_PWD_LENGTH:str = _tableData.getText('Register_Error_PasswordWrong');break;
                        }
                        _interactionLogic.prompt(str, 1);
                    }
                } else {
                    
                }
            }
        };
        this.net.open("Post", _config.httpUrl + '/' + behaviorStr, true);
        this.net.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");  //设置请求头信息
        this.net.send(str);
    }


}
export default new HttpRequest();