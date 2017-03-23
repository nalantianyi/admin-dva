/**
 * Created by nalantianyi on 2017/3/21.
 */
import React, {PropTypes} from 'react';
import {Button, Row, Form, Input} from 'antd';
import {config} from '../utils';
import styles from './login.less';

const FormItem = Form.Item;
const Login = ({loginButtonLoading, onOk, form:{getFieldDecorator, validateFieldsAndScroll}}) => {
    function handleOk() {
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return;
            }
            else {
                onOk(values);
            }
        });
    }

    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                <img src={config.logoSrc} alt={'login'}/>
                <span>Dva Admin</span>
            </div>
            <Form>
                <FormItem hasFeedback>
                    {getFieldDecorator('username',
                        {rules: [{required: true, message: '请填写用户名'}]})
                    (<Input size="large" onPressEnter={handleOk} placeholder="用户名"/>)}
                </FormItem>
                <FormItem hasFeedback>
                    {getFieldDecorator('password',
                        {rules: [{required: true, message: '请填写密码'}]})
                    (<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码"/>)}
                </FormItem>
                <Row>
                    <Button type="primary" size="large" onClick={handleOk} loading={loginButtonLoading}>
                        登录
                    </Button>
                </Row>
                <p><span>账号：guest</span>
                    <span>密码：guest</span></p>
            </Form>

        </div>
    );
};
Login.propTypes = {
    form: PropTypes.object,
    loginButtonLoading: PropTypes.bool,
    onOk: PropTypes.func
};
export default Form.create()(Login);