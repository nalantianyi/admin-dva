/**
 * Created by nalantianyi on 2017/3/9.
 * 404处理中间件
 */
module.exports = () => {
    return function *(next) {
        yield next;
        if (this.status === 404 && !this.body) {
            if (this.acceptJSON)
                this.body = {error: '你要找的页面被起司猫吃了'};
            else
                this.body=' <h1>404</h1><h4>你要找的页面被起司猫吃了</h4><img src="/public/image/cat.jpg">';
        }
    };
};
