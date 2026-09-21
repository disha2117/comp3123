function capitalize(str) {
    const [first, ...rest] = str;
    return [first.toUpperCase(), ...rest].join('');
}

const colors = ['red', 'green', 'blue', 'yellow'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);
