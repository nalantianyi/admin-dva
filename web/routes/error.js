/**
 * Created by nalantianyi on 2017/3/21.
 */
import React from 'react';
import {Icon} from 'antd';
import styles from './error.less';

const Error = () => <div className="content-inner">
    <div className={styles.error}>
        <Icon type="frown-o"/>
        <h1>404 Not Found</h1>
    </div>
</div>

export default Error
