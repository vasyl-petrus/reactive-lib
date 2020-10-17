import { h } from 'virtual-dom';
import RegistrationForm from './RegistrationForm';

const RegistrationPage = (state) => {
  return h('div', {}, [
    h('div.header', [h('p.title', 'Registration Form')]),
    h('main', [RegistrationForm('', state)]),
    h('div.footer', [h('p', 'Contact Us')]),
  ]);
};

export default RegistrationPage;
