function changeEventHandler(event) {
    let values = inputValues();
    assignClassNames(values);
}

// id value of input fields whose order will be reassigned onChange
const INPUTFIELDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

function inputValues() {
    // loop over each input field creating k,v pairs of classname and value
    // return an array of k,v pairs sorted on v being the lowest, last item highest v
    // write helper method that sorts k,v pairs
    const pairs = [];
    INPUTFIELDS.forEach(el => {
        let pair = [el];
        let val = document.getElementById(el).value;
        // if no value, empty fields appear at bottom of list
        // hence, assign value of 9
        if (val === '') val = 9;
        pair.push(val);
        pairs.push(pair);
    });
    
    const sortedPairs = sortKVPairs(pairs);
    return sortedPairs;
}

function sortKVPairs(arr) {
    return arr.sort((a,b) => {
        return a[1] - b[1];
    });
}

// classnames corresponding to css rules designating order
const CLASSNAMES = [
    "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine"
];

function assignClassNames(array) {
    array.forEach((el, idx) => {
        let input = document.getElementById(el[0]);
        // clear classList
        input.classList = '';
        // add currently appropriate classname
        input.classList = CLASSNAMES[idx];
    });
}

document.addEventListener('DOMContentLoaded', (e) => {
    let content = document.getElementById('container');

    content.addEventListener('input', (e) => changeEventHandler(e));
});

