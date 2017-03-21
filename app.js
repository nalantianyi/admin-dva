/**
 * Created by nalantianyi on 2017/3/9.
 */
module.exports = app => {
    app.beforeStart(function*() {
        app.logger.info('-------welcome chick！-------');
        const eggResult = yield app.curl('https://registry.npm.taobao.org/egg/latest', {
            dataType: 'json',
        });
        const dvaResult = yield app.curl('https://registry.npm.taobao.org/dva/latest', {
            dataType: 'json',
        });
        app.logger.info('egg latest version: %s', eggResult.data.version);
        app.logger.info('dva latest version: %s', dvaResult.data.version);

    });
};