function capitalize(str) {
    const [first, ...rest] = str;
    return [first.toUpperCase(), ...rest].join('');
}

console.log(capitalize("hello"));
console.log(capitalize("javascript"));
console.log(capitalize("world"));