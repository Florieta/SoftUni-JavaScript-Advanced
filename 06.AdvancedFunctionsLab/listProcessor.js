function listProcessor(commands) {
    let result = [];

    const functions = {
        'add': (string) => result.push(string),
        'remove': (string) => result = result.filter(i => i !== string),
        'print': () => console.log(result.join(','))
    };
    for (let c of commands) {
        const [command, string] = c.split(' ');
        functions[command](string)
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);