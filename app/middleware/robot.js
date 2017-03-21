/**
 * Created by nalantianyi on 2017/3/8.
 * 禁止爬虫的插件
 */

module.exports = (options, app) => {
    return function * robotMiddleware(next) {
        const source = this.get('user-agent') || '';
        const match = options.ua.some(ua => ua.test(source));
        if (match) {
            this.status = 403;
            this.message = 'go away,robot';
        }
        else {
            yield next;
        }
    };

};