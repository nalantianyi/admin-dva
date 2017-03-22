/**
 * Created by nalantianyi on 2017/3/20.
 */
import dva from 'dva';
import createLoading from 'dva-loading';
import {hashHistory} from'dva/router';
const app = dva({
    ...createLoading(),
    history: hashHistory,
    onError(error){
        console.error('app onError -- ', error);
    },
    onStateChange(){
        console.log(app._store.getState());
    }
});
app.model(require('./models/app'));
app.router(require('./router'));

app.start('#root');