function solution() {
    let text = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(str) {
        text += str;
    }
    function removeStart(count) {
        text = text.slice(count);
    }
    function removeEnd(count) {
        text = text.slice(0, -count);
    }
    function print() {
        console.log(text);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
