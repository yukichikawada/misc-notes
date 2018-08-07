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

// select base node to call function on
let node = document.getElementById("container");

getText(node);

// select node to display results on
let resultNode = document.getElementById("result");

resultNode.innerText = nodesInnerText.reverse();