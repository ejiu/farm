/******************
 * 通用静态方法合集
 * 创建者：许强
 * 创建日期：2018.4.2
 * ************** */
export default class CommonFun {

    /******************
     * 把秒转换成0d:00:00:00格式
     * time: 传入秒
     * ************** */
    public static timeConversion(time:number) {
        if (time < 0) time = 0;
        let h, m, s;
        
        s = time % 60;
        if (s < 10) s = "0" + s;
        m = Math.floor(time / 60);
        if (m >= 60) {
            m = m % 60
        }
        if (m < 10) {
            m = "0" + m
        }
        h = Math.floor(time / (60 * 60));
        if (h < 10) h = "0" + h;
        if (time % (60) > 59) h = Math.ceil(time / (60 * 60));
        if (h / 24 >= 1 && time % 60 >= 0) {
            return Math.floor(h / 24) + "d " + h % 24 + ":" + m + ":" + s;
        } else {
            return h + ":" + m + ":" + s;
        }
    }
    
}
