export function whatType(array) {
    let elementos = array.map(item=>{
        return typeof item
    });
    return elementos;
}