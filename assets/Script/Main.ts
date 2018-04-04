import _viewManage from './Core/ViewManage'
import _resManage from './Core/ResManage'
import _tableData from './Data/TableData'

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    public onLoad(){
        _viewManage.setCanvasObj(cc.find('Canvas')); //设置游戏根节点
 
        cc.loader.load('/res/raw-assets/resources/json.txt', function (err, str) { //拉取静态表
            
            _tableData.setTableData(str); //设置静态表数据

            cc.loader.loadRes("mainUIList", cc.SpriteAtlas, function (err, atlas) {
            
                _resManage.addRes('mainUIList', cc.SpriteAtlas, atlas);
    
                _viewManage.openView('LoginView');
            });
        });
    }
}
