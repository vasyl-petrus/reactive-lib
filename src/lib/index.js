import { patch, diff } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import observable from './observable';

const dom = {
  tree: null,
  node: null,
  view: null,
};

const renderDom = (tree) => {
  dom.view = tree;
  dom.tree = tree();
  dom.node = createElement(tree());
  document.body.appendChild(dom.node);
};

const updateDom = () => {
  const newTree = dom.view();
  const patches = diff(dom.tree, newTree);
  dom.node = patch(dom.node, patches);
  dom.tree = newTree;
};

const Component = (view, initialState) => {
  const state = observable({
    target: initialState,
    listener: updateDom,
  });

  return (input) => {
    return view(input, state);
  };
};

export { Component, renderDom };
