/**
 * Created by nalantianyi on 2017/3/21.
 */
import  React, {PropTypes} from 'react';
import {connect} from 'dva';
import {color} from '../utils/theme';

const bodyStyle = {
    bodyStyle: {
        height: 432,
        background: '#fff'
    }
};
function Dashboard() {
    return (<div>dashboard</div>);
}
Dashboard.propTypes = {
    dashboard: PropTypes.object
};
export default connect(({dashboard}) => ({dashboard}))(Dashboard);