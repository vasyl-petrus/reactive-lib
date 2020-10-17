import { h } from 'virtual-dom';

const Password = ({ value, changeHandler }) =>
  h('div', [
    h('input', {
      type: 'password',
      name: 'password',
      value,
      placeholder: 'Enter password',
      oninput: changeHandler,
    }),
    h('span', 'length '),
    h('span', `${value.length}`),
  ]);

export default Password;
