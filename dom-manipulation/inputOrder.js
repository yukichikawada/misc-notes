document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) alert('Please Select One');
    else alert('You like ' + event.target.value + ' ice cream.'); 
}
// function changeEventHandler(event) {
//     console.log('hi')
//     // let inputs = inputValues();
//     // assignClassNames(inputs);
// }

// const INPUTFIELDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

// function inputValues() {
//     // loop over each input field creating k,v pairs of classname and value
//     // return an array of k,v pairs sorted on v being the lowest, last item highest v
//     // write helper method that sorts k,v pairs
//     const pairs = [];
//     INPUTFIELDS.forEach(el => {
//         let pair = [el];
//         let val = document.getElementByClassName(el).value;
//         if (typeof val === 'undefined') val = 9;
//         pair.push(val);
//     });
    
//     const sortedPairs = sortKVPairs(pairs);
//     return sortedPairs;
// }

// function sortKVPairs(arr) {
//     arr.sort((a,b) => {
//         return a[1] - b[1];
//     })
// }

// const CLASSNAMES = [
//     "one", "two", "three", "four", "five",
//     "six", "seven", "eight", "nine"
// ];

// function assignClassNames(array) {
//     array.forEach((el, idx) => {
//         let input = document.getElementByClassName(el);
//         let addedClass = CLASSNAMES[idx];
//         input.classList.Add(addedClass);
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('container').onChange=changeEventHandler;
// })



// let pair = {};
// pair['d'] = document.getElementsByClassName("d").value;
// console.log(pair);



// var maxSpeed = {
//     car: 300, 
//     bike: 60, 
//     motorbike: 200, 
//     airplane: 1000,
//     helicopter: 400, 
//     rocket: 8 * 60 * 60
// };
// var sortable = [];
// for (let vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });

// console.log(sortable);

// let val = document.getElementsByClassName("d").value;
// if (typeof val === 'undefined') val = 9;
// console.log(val);