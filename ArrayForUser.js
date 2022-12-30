let arrLength = Number(prompt('Enter length array :',''))
let stringOfUser = prompt('Enter the elements' +
    'for array separated by a space','')
let arrayForUser = stringOfUser.split(' ')
for (let j = 0; j < arrayForUser.length;) {
    if (Number.isNaN(Number(arrayForUser[j]))) {
        alert(`Your item ${j} is not a number`)
        j++
    }
    j++
}

if (Number.isNaN(arrLength) || arrLength <= 0) {
    alert(`You have entered incorrect length array`)
}
if (arrLength > arrayForUser.length) {
    let differenceLength = arrLength - arrayForUser.length
    for (let i = 1; i <= differenceLength; arrayForUser.push(0)) {
       i++
    }
}
else if (arrLength < arrayForUser.length) {
    alert(`You have entered too many items\n
    Length array is: ${arrayForUser.length}`)
}
alert(`Your array : ${arrayForUser}`)

function sortArray(a, b) {
    return a > b ? 1 : b > a ? -1 : 0
}
arrayForUser.sort(sortArray)
alert(`Array with elements in ascending order : ${arrayForUser}`)
let newArrayForUser = arrayForUser.splice(1, 3)
alert(`Items to be deleted : ${newArrayForUser}`)
alert(`Remaining items : ${arrayForUser}`)




