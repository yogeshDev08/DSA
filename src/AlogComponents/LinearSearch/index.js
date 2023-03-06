// Divide  amd  conquer

//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
// I've tried with recurrsion for the linear search for Divide and Conqure method to implement.
// He Did it with while loop.
// function binarySearch(array, value) {
//     if (array.length === 0 || value > array[array.length - 1] || value < array[0]) return -1
//     if (array[array.length - 1] === value) return array.length - 1
//     if (array[0] === value) return 0
//     let temp
//     const infiniteLoop = (leftPointer, middlePointer, rightPointer) => {
//         if (array[leftPointer] === value) temp = leftPointer
//         else if (array[rightPointer] === value) temp = rightPointer
//         else if (array[middlePointer] === value) temp = middlePointer
//         else if (value > array[middlePointer]) infiniteLoop(middlePointer, Math.floor((rightPointer + middlePointer) / 2), rightPointer)
//         else if (value < array[middlePointer]) infiniteLoop(leftPointer, Math.floor((middlePointer - leftPointer) / 2), middlePointer)
//         else temp = -1
//     }
//     infiniteLoop(0, Math.floor(array.length / 2), array.length - 1)
//     return temp
// }

// Navie Sting Searching
// In this we have to find a short string inside a long string
// eample find "yogesh" inside of some random long string => alkfjsdfjfyogeshskfjalskdjfslakdjf
// Also need to keep a count of how many times you got the proper match.

// function binarySearch(longString, shortString) {
//     let count = 0
//     for (let i = 0; i < longString.length; i++) {
//         if (longString[i] === shortString[0]) {
//             let tempArr = []
//             for (let j = 0; j < shortString.length; j++) {
//                 if (shortString[j] !== longString[i + j]) return
//                 if (shortString[j] === longString[i + j]) tempArr.push(longString[i + j])
//             }
//             if (tempArr.length === shortString.length) count = count + 1
//         }
//     }
//     return count
// }

function DivideConquer({ array = "alskdfjaslkfjomgaslsdkfjasdjklfghaskomggfjalsdkfjaslkjfaslkomgdjfaslkdjfaslkjdfsadkjf", value = "omg" }) {
    // console.log(binarySearch(array, value))
}

export default DivideConquer




