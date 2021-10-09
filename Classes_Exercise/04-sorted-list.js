class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size += 1;
    }

    remove(idx) {
        if(idx < 0 || idx >= this.list.length) {
            throw new RangeError('Index out of range!')
        }
        this.list.splice(idx, 1);
        this.size -= 1;
    }
    get(idx) {
        if(idx < 0 || idx >= this.list.length) {
            throw new RangeError('Index out of range!')
        }
        return this.list[idx];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
