import { h } from 'virtual-dom';

const Submit = ({ submitHandler }) =>
  h('input', {
    type: 'submit',
    onclick: submitHandler,
  });

export default Submit;
