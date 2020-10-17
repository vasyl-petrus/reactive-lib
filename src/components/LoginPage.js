import { h } from 'virtual-dom';
import LoginForm from './LoginForm';

const LoginPage = (state) => {
  return h('div', {}, [
    h('div.header', [h('p.title', 'Login Form')]),
    h('main', [LoginForm('', state)]),
    h('div.footer', [h('p', 'Contact Us')]),
  ]);
};

export default LoginPage;
