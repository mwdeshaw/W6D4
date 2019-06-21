const DOMNodeCollection = require('./dom_node_collection');

window.$l = (arg) => {
  switch (typeof arg) {
    case "string":
      return getNodesFromDom(arg);
    case "object":
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
};

getNodesFromDom = (selector) => {
  let nodeList = this.querySelectorAll(selector);
  let nodeListArr = Array.from(nodeList);
  return DomNodeCollection(nodeListArr);
};
