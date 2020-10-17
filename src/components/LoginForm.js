import { h } from 'virtual-dom';
import { Component } from '../lib';
import Email from './Email';
import Password from './Password';
import Submit from './Submit';

const LoginFormView = (input, state) => {
  const handleEmailChange = (event) => {
    state.email = event.target.value;
  };

  const handlePasswordChange = (event) => {
    state.password = event.target.value;
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();
    state.email = '';
    state.password = '';
  };

  return h('div.container', {}, [
    h('form', {}, [
      h('div', {}, [
        Email({
          changeHandler: handleEmailChange,
          value: state.email,
        }),
        Password({
          changeHandler: handlePasswordChange,
          value: state.password,
        }),
      ]),
      Submit({
        submitHandler: handleSubmitButtonClick,
      }),
    ]),
  ]);
};

const LoginForm = Component(LoginFormView, {
  email: 'test@test.com',
  password: 'test',
});

export default LoginForm;
