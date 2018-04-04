/******************
 * 处理策划表，解析数据---单例对象
 * 创建者：许强
 * 创建日期：2018.4.2
 * ************** */
class TableData {

    private table:any; //静态表

    constructor() {

    }

    /******************
     * 获取表字段映射
     * table: 表对象
     * ************** */
    private shineUpon(table:object) {
        var keyList = table["key"];
        var keyObj = {};
        for (var x = 0, l = keyList.length; x < l; x++) {
            keyObj[keyList[x]] = x;
        }
        return keyObj;
    };

    /******************
     * 设置表数据
     * str: 表数据对象
     * ************** */
    public setTableData(str:string){
        this.table = JSON.parse(str);
    }

    /******************
     * 设置表数据
     * str: 字段名
     * ************** */
    public getText(str:string){
        let table = this.table.lang[str];
        if(!table)return '@' + str;
        let keyList = this.shineUpon(this.table.lang);
        return table[keyList['FieldContent']];
    }

}

export default new TableData();