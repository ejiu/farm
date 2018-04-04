/******************
 * webSocket通讯模块
 * 创建者：许强
 * 创建日期：2018.4.2
 * ************** */
import _config from '../Config' //引入配置
import _systemData from '../Data/SystemData' //引入系统模块数据

class FarmWebSocket {
    private webSocket:WebSocket; //webSocket通讯对象

    constructor() {

    }

    public openWebSocket(){
        this.webSocket = new WebSocket(_config.webSocketUrl + _systemData.sid);
        console.log("webSocket对象创建成功发起连接--------->>>>" + _config.webSocketUrl + _systemData.sid);
        this.webSocket.onopen = function (evt) { //连接成功触发
            console.log("<<<<---------webSocket连接成功");
            
        };
        this.webSocket.onerror = function (evt) { //发生错误触发方法
            console.log("webSocket发生错误！");
            console.log(evt);
        };
        this.webSocket.onmessage = function (evt) { //接收到消息
            console.log("<<<<---------webSocket接收到消息！");
            console.log(evt);
        };
        this.webSocket.onclose = function (evt) { //关闭连接
            console.log("webSocket已经关闭！");
            console.log("重新启动webSocket！");
            
        };
    }
}
export default new FarmWebSocket();