/**
 * Created by nalantianyi on 2017/3/21.
 */
import React, {PropTypes} from 'react';
import {Router} from 'dva/router';
import App from './routes/app';

const cached = {};
const registerModel = (app, model) => {
    if (!cached[model.namespace]) {
        app.model(model);
        cached[model.namespace] = 1;
    }
};

const Routers = ({history, app}) => {
    const routes = [{
        path: '/',
        component: App,
        getIndexRoute(nextState, cb){
            require.ensure([], require => {
                registerModel(app, require('./models/dashboard'));
                cb(null, {component: require('./routes/dashboard')});
            }, 'dashboard');
        },
        childRoutes: [
            {
                path: 'dashboard',
                name: 'dashboard',
                getComponent(nextState, cb){
                    require.ensure([], require => {
                        registerModel(app, require('./models/dashboard'));
                        cb(null, require('./routes/dashboard'));
                    }, 'dashboard');
                }
            },
            // {
            //     path: 'users',
            //     name: 'users',
            //     getComponent(nextState, cb){
            //         require.ensure([], require => {
            //             registerModel(app, require('./models/users'));
            //             cb(null, require('./routes/users'));
            //         }, 'users');
            //     }
            // },
            // {
            //     path:''
            // }

        ]
    }];
    return <Router history={history} routes={routes}></Router>
};
Routers.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object
};
export default Routers;
