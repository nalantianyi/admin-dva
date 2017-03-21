/**
 * Created by nalantianyi on 2017/3/8.
 */

module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            yield this.ctx.render('index.html');
        }
    }
    return HomeController;

};
