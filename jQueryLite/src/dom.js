class DomNode {
  constructor() {

  }
  
  $l(selector) {
    let nodeList = this.querySelectorAll(selector);
    let nodeListArr = Array.from(nodeList);
    return nodeListArr;
  };
}
