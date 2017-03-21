/**
 * Created by nalantianyi on 2017/3/21.
 */
import React, {PropTypes} from 'react';
import {connect} from 'dva';
function App() {
    return (<div>app</div>);
}
export default connect((app, loading) => (
    {
        //app, loading: loading.models.app
    }
))(App);