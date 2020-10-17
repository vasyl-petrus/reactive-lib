import { h } from 'virtual-dom';

const Email = ({ value, changeHandler }) =>
  h('input', {
    type: 'text',
    name: 'email',
    value,
    placeholder: 'Enter email',
    oninput: changeHandler,
  });

export default Email;
