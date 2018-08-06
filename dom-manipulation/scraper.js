function getText(node) {
  if (node.length === 1) {
    return node[0].innerText;
  } else {
    node.childNodes.forEach((el, idx) => {
      console.log([el, idx]);
      if (el.childElementCount === 0) {
        console.log('innerText');
        // return el.innerText;
      } else {
        console.log('recursive call');
        return getText(el);
      }
    });
  }
}



let node = document.getElementById("container");

console.log(getText(node));

// let notes = [];
// for (let i = 0; i < node.childElementCount; i++) {
//   console.log(i);
// }

