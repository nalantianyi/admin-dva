/**
 * Created by nalantianyi on 2017/3/8.
 */
module.exports = app => {
    app.get('/', 'home.index');
    app.get('/api/userInfo','user.userInfo');
    app.post('/api/login','user.login');
    app.post('/api/logout','user.logout');
    app.post('/api/dashboard','dashboard.index');


};