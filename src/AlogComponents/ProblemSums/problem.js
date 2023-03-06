// Frequency Counter - sameFrequency
const FrequencyCounter = ({arr = 123, brr=321}) => {
    let arr1 = [...arr.toString()];
    let arr2 =[...brr.toString()];
    if(arr1.length !== arr2.length){
        return false;
    }
    const frequencyArr1 = {};
    const frequencyArr2 = {};
    for(let val of arr1){
        frequencyArr1[val] = (frequencyArr1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyArr2[val] = (frequencyArr2[val] || 0) + 1;
    }
    for ( let key in frequencyArr1 ){
        if(frequencyArr1[key] !== frequencyArr2[key]){
            return false
        }
    }
    return true;
}

export default FrequencyCounter