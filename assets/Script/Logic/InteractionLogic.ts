/******************
 * 交互反馈模块
 * 创建者：许强
 * 创建日期：2018.4.3
 * ************** */
import _viewManage from '../Core/ViewManage' //引入视图管理模块
import _resManage from '../Core/ResManage' //引入资源管理模块

class InteractionLogic {

    constructor(){

    }

    /******************
     * 发送请求
     * str: 提示内容
     * tag: 提示性质   1：友善  2：警告
     * ************** */
    public prompt(str:string, tag:number){
        let mainUIListObj:cc.SpriteAtlas = _resManage.getRes('mainUIList');
        let canvasNode = _viewManage.getCanvasObj();

        let color = cc.color(0,0,0);
        switch(tag){
            case 1:color = cc.color(0,0,0);break;
            case 2:color = cc.color(255,0,0);break;
        }

        let bgNode = new cc.Node();
        bgNode.setScale(0.1);
        bgNode.parent = canvasNode;

        let sp = bgNode.addComponent(cc.Sprite);
        sp.spriteFrame = mainUIListObj.getSpriteFrame('mainUI_005');
        
        let node = new cc.Node();
        node.color = color;
        node.parent = bgNode;

        let lb = node.addComponent(cc.Label);
        lb.string = str;
        lb.fontSize = 30;
        lb.lineHeight = 30;
        lb.isSystemFontUsed = true;

        bgNode.runAction(cc.sequence(cc.scaleTo(0.2,1), cc.delayTime(0.5), cc.callFunc(function(){
            bgNode.destroy();
        })));
    }

}
export default new InteractionLogic();
