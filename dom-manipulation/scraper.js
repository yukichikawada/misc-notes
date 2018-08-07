const nodesInnerText = [];

function getText(node) {
  // if no childNodes, extract innerText
  if (node.length === 1) {
    nodesInnerText.push(node.innerText);
  } else {
    node.childNodes.forEach((el, idx) => {
      // if no childNodes, extract innerText
      if (el.childElementCount === 0) {
        nodesInnerText.push(el.innerText);
      } else {
        // recurse on node with childNodes
        getText(el);
      }
    });
  }
}


let node = document.getElementById("container");

getText(node);

console.log(nodesInnerText);

let resultNode = document.getElementById("result");

resultNode.innerText = nodesInnerText.reverse();