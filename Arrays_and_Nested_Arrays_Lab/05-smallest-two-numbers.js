function smallestTwoNumbers(arr) {
    result = []
    arr.sort((a, b) => a - b)
    result.push(arr[0], arr[1])

    console.log(result.join(' '))
}

smallestTwoNumbers([30, 15, 50, 5])
