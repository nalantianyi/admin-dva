/**
 * Created by nalantianyi on 2017/3/21.
 */
import React from 'react';
import styles from './main.less';
import {config} from '../../utils';
const Footer = () => <div className={styles.footer}>
    {config.footerText}
</div>
export default Footer;