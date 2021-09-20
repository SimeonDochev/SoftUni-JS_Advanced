function addAndRemove(commands) {
    let result = [];
    let current = 1;

    for (const command of commands) {
        switch (command) {
            case 'add':
                result.push(current);
                current += 1;
                break;
            case 'remove':
                result.pop();
                current += 1;
                break;
        }
    }
    if (result.length == 0) {
        return 'Empty';
    }
    return result.join('\n');
}

console.log(addAndRemove(['add', 'add', 'add', 'add']));
console.log(addAndRemove(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemove(['remove', 'remove', 'remove']));
