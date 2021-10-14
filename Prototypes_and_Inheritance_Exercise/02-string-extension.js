(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) return str + this;
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) return this + str;
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        return this.toString() === '';
    }
    String.prototype.truncate = function (n) {
        if (this.length <= n) return this.toString();
        if (n < 4) return '.'.repeat(n);
        if (!this.includes(' ')) return this.slice(0, n - 3) + '...';
        let words = this.split(' ');
        let result = '';
        for (const word of words) {
            if (result.length + word.length <= n - 3) {
                result += ' ' + word;
            } else {
                return result.trim() + '...';
            }
        }
        return result;
    }
    String.format = function (string, ...params) {
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