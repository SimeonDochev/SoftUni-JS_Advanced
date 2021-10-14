(function solve() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) return str + this;
        return this.toString();
    }
    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) return this + str;
        return this.toString();
    }
    String.prototype.isEmpty = function() {
        return this.toString() === '';
    }
    String.prototype.truncate = function(n) {
        if (this.length <= n) return this.toString();
        if (n < 4) return '.'.repeat(n);
        if (!this.includes(' ')) return this.slice(0, n-3) + '...';
        let words = this.split(' ').reverse();
        let result = [];
        for (const word of words) {
            if ((result + word).length <= n) {
                result.push(words.pop());
            } else {
                break;
            }
        }
        if (words.length > 0) return result.join(' ') + '...';
        return result.join(' ');
    }
    String.format = function(string, ...params) {
        let idx = 0;
        return string.split(' ')
            .map(word => {
                if (word === `{${idx}}` && params[idx]) {
                    word = params[idx];
                    idx += 1;
                }
                return word;
            })
            .join(' ');
    }
})();

// let str = 'my string';
// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// console.log(str);
// str = String.format('jumps {0} {1}',
//   'dog');
// console.log(str);
