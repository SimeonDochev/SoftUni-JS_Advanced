function compose(arr) {
    let obj = {};

    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            obj[arr[i]] = Number(arr[i+1]);
        }
    }
    return obj;
};

console.log(compose(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
