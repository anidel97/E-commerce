//escribir una funcion que encuentre el numero mas grande de un array de numeros

import React from 'react';

const getMyMaxNumber = (array)=>{
    console.log(array);
    let max = array[0];
    for (let n=1; n < array.lenght; n++){
        if (array [n] > max){
            max = array[n];
        }
    }
    const MyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log("el numero ams grande es: " + getMyMaxNumber(MyArray));
}

export default getMyMaxNumber;