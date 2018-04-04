/******************
 * 错误列表
 * 创建者：许强
 * 创建日期：2018.4.3
 * ************** */
export default class ErrorList {
    public static ERROR_CODE_NONE:number = 0; //无错误

    public static ERROR_CODE_USER_NAME_INVALID:number = 101; //用户名格式错误

    public static ERROR_CODE_USER_PWD_LENGTH:number = 102; //用户密码长度错误

    public static ERROR_CODE_USER_EXISTS:number = 103; //用户名已存在

    public static ERROR_CODE_USER_NOT_EXISTS:number = 104; //用户名不存在

    public static ERROR_CODE_USER_PWD_DIFFERENT:number = 105; //用户密码错误

    public static ERROR_CODE_SESSION_ID_INVALID:number = 107; //会话过期,请重新登录

    public static ERROR_CODE_NICK_NAME_LENGTH:number = 107; //用户昵称长度错误
    
    public static ERROR_CODE_REQUEST_PARAMETERS:number = 108; //请求参数错误

    public static ERROR_CODE_UNKNOWN_MSG_TYPE:number = 201; //未知的消息类型

    public static ERROR_CODE_FAULT_OCCURED:number = 202; //发生错误
}
