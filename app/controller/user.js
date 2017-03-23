/**
 * Created by nalantianyi on 2017/3/21.
 */
module.exports = app => {
    class UserController extends app.Controller {
        * userInfo() {
            var session = this.ctx.session;
            const res = {
                success: session['user_session'],
                username: session['user_name'] || '',
                message: ''
            };
            this.ctx.body = res;
        }

    }
    return UserController;
};