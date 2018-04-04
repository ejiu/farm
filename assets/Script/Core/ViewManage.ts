/******************
 * 视图管理器---单例对象
 * 创建者：许强
 * 创建日期：2018.4.2
 * ************** */
class ViewManage{

    private viewStack:cc.Node[] = []; //页面堆栈

    private topPointer: number = 0; //栈顶指针

    private canvas:cc.Node; //根节点Canvas对象
    
    /******************
     * 设置根节点对象
     * obj: 根节点对象
     * ************** */
    public setCanvasObj(obj:cc.Node){
        this.canvas = obj;
    }
    /******************
     * 获取根节点对象
     * obj: 根节点对象
     * ************** */
    public getCanvasObj(){
        return this.canvas;
    }
    /******************
     * 打开视图
     * str: 视图名
     * ************** */
    public openView(str:string){
        let viewObj = this.getViewObj(str); //获取视图名对应的视图指针
        if(viewObj){
            this.pushNode(viewObj); //入栈
        }
    }
    /******************
     * 关闭最上层视图
     * str: 视图名
     * ************** */
    public closeView(){
        this.popNode();
    }
    /******************
     * 检索获取视图对象
     * str: 视图名
     * return：视图对象
     * ************** */
    private getViewObj(str:string):cc.Node{
        return this.canvas.getChildByName(str);
    }
    /******************
     * 入栈
     * node: 视图对象
     * ************** */
    private pushNode(node:cc.Node){
        node.active = true; //激活视图

        this.viewStack.push(node); //入栈

        this.topPointer++; //指针指向栈顶
    }
    /******************
     * 出栈
     * obj: 视图对象
     * ************** */
    private popNode(){

        this.topPointer--; //栈顶指针下移

        let viewNode = this.viewStack[this.topPointer]; //获取栈顶node

        viewNode.active = false; //关闭视图

        this.viewStack.splice(this.topPointer,1); //出栈
    }

}
export default new ViewManage();