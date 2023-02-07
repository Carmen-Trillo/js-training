export function countNames(array, coderName) {
    let countNames =array.filter(name => name.toLowerCase() === coderName.toLowerCase());
    return countNames.length;

}

