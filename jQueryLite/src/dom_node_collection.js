class DOMNodeCollection {
  constructor(array) {
    theNodes = Array.from(array)
    this.nodes = theNodes;
  }

  empty() {
    this.html('');
  }

  html(html){
    if (typeof html === 'string') {
      this.each((node) => {
        node.innerHTML = html;
    });
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.nodes.forEach(node => {
      node.html = '';
    });
  }

  append(children) {
    if (this.nodes.length === 0) {
      return null;
    }

    if (typeof children === 'object' && !(children instanceof DomNodeCollection)) {
      children = $l(children);
    }

    if (typeof children === "string") {
      this.forEach((node) => {
        node.innerHTML += children;
      });
    } else if (children instanceof DomNodeCollection) {
      this.forEach((node) => {
        children.forEach((childNode) => {
          node.appendChild(childNode.cloneNode(true));
        });
      });
    }
  }

  attr(k, v) {
    if (typeof v === "string") {
      this.forEach(node => {
        return node.setAttribute(key, val);
      });
    } else {
      return this.nodes[0].getAttribute(k);
    }
  }

}
module.exports = DOMNodeCollection;