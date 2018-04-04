/******************
 * 资源管理器---单例对象
 * 创建者：许强
 * 创建日期：2018.4.2
 * ************** */
class ResManage {

    private resMap:any = {}; //资源集合

    /******************
     * 加载资源
     * name: 资源名称
     * type: 资源类型
     * obj: 资源对象
     * ************** */
    public addRes(name:string,type:any,obj:any){
        this.resMap.name = {
            'type': type,
            'obj': obj
        }
    }
    
    /******************
     * 删除资源
     * name: 资源名称
     * ************** */
    public delRes(name:string){
        delete this.resMap.name;
    }

    /******************
     * 获取资源
     * name: 资源名称
     * ************** */
    public getRes(name:string){
        return this.resMap.name.obj;
    }
}
export default new ResManage();