export function makePositive(array) {
    let elementos = array.map(item=>{
        return Math.abs(item);
    });
    return elementos;
    
}

