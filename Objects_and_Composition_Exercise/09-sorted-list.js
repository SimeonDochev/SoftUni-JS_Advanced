function createSortedList() {
    const list = [];

    return {
        add: function(el) {
            list.push(el);
            list.sort((a, b) => a - b);
            this.size += 1;
        },
        remove: function(idx) {
            if(idx < 0 || idx >= list.length) {
                throw new RangeError('Index out of range!')
            }
            list.splice(idx, 1);
            this.size -= 1;
        },
        get: function(idx) {
            if(idx < 0 || idx >= list.length) {
                throw new RangeError('Index out of range!')
            }
            return list[idx];
        },
        size: 0
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list);
console.log(list.size);
