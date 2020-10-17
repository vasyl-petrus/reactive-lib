import { h } from 'virtual-dom';
import { Component } from '../lib';
import Email from './Email';
import Password from './Password';
import Submit from './Submit';

const RegistrationFormView = (input, state) => {
  const handleEmailChange = (event) => {
    state.email = event.target.value;
  };

  const handlePasswordChange = (event) => {
    state.password = event.target.value;
  };

  const handleSubmitButtonClick = () => {
    alert('form send');
  };

  return h('div.container', {}, [
    h('form', {}, [
      h('div', {}, [
        h('input', {
          type: 'text',
          name: 'FirstName',
          placeholder: 'Enter FirstName',
        }),
        h('input', {
          type: 'text',
          name: 'LastName',
          placeholder: 'Enter LastName',
        }),
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

const RegistrationForm = Component(RegistrationFormView, {
  email: '',
  password: '',
});

export default RegistrationForm;
