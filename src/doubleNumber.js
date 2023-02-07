export function doubleNumber(array) {
    let arrayOfDoubles = array.map(num => {
        if (typeof num === "number" ){
           return num * 2
        }
       else { return NaN }
    } )
      return arrayOfDoubles
}
