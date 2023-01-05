const arrLength = Number(prompt('Enter length array :',''))
const stringOfUser = prompt('Enter the elements' +
    'for array separated by a space','')
const arrayForUser = stringOfUser.split(' ')
for (let j = 0; j < arrayForUser.length; j++) {
    if (Number.isNaN(Number(arrayForUser[j]))) {
        alert(`Your item ${j + 1} is not a number`)
        break
    }
}

if (!Number.isNaN(arrLength) || arrLength > 0) {
    if (arrLength === arrayForUser.length) {
        alert(`Your array : ${arrayForUser}`)

        function sortArray(a, b) {
            return a > b ? 1 : b > a ? -1 : 0
        }

        arrayForUser.sort(sortArray)
        alert(`Array with elements in ascending order : ${arrayForUser}`)
        const newArrayForUser = arrayForUser.splice(1, 3)
        alert(`Items to be deleted : ${newArrayForUser}`)
        alert(`Remaining items : ${arrayForUser}`)
    }
}
else {
    alert(`You have entered incorrect length array`)
}


