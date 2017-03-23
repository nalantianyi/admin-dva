/**
 * Created by nalantianyi on 2017/3/21.
 */
let dataKey = [
    {
        username: 'guest',
        password: 'guest',
    },
    {
        username: '纳兰天忆',
        password: '123456',
    },
];
module.exports = app => {
    class UserController extends app.Controller {
        * userInfo() {
            var session = this.ctx.session;
            const res = {
                success: session['user_session'] && session['user_session'] > new Date().getTime(),
                username: session['user_name'] || '',
                message: ''
            };
            this.ctx.body = res;
        }

        * login() {
            const userItem = this.ctx.request.body;
            const response = {success: false, message: ''};
            const d = dataKey.filter((item) => {
                return item.username === userItem.username;
            });
            if (d.length) {
                if (d[0].password === userItem.password) {
                    let session = this.ctx.session;
                    session['user_session'] = new Date().getTime();
                    session['user_name'] = userItem.username;
                    response.message = '登录成功';
                    response.success = true;
                }
                else {
                    response.message = '密码不正确';

                }
            }
            else {
                response.message = '用户不存在';
            }
            this.ctx.body = response;
        }

        * logout() {
            this.ctx.session = null;
            this.ctx.body = {
                success: true,
                message: '退出成功'
            };

        }


    }
    return UserController;
};