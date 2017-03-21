/**
 * Created by nalantianyi on 2017/3/20.
 */
import dva from 'dva';
import createLoading from 'dva-loading';
import {hashHistory} from'dva/router';
console.log('a');
const app = dva({
    ...createLoading(),
    history: hashHistory,
    onError(error){
        console.error('app onError -- ', error);
    }
});

app.start('#root');