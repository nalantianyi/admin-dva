/**
 * Created by nalantianyi on 2017/3/21.
 */
import React from 'react';
import {Icon} from 'antd';
import styles from './error.less';

const Error = () => {
    return (
        <div className="content-inner">
            <div className={styles.error}>
                <Icon type="frown-0"/>
                <h1>404 Not Found</h1>
            </div>
        </div>
    );
};
export default Error;