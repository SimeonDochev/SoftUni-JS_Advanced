function validator(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriMatch = /^[\w.]+$/g
    const specialChars = /([<>\\&'"])/g

    if (!validMethods.includes(request.method) || !request.method) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!uriMatch.test(request.uri) || !request.uri) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (!validVersions.includes(request.version) || !request.version) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (specialChars.test(request.message) || request.message == undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return request
}

console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''})); // Valid

console.log(validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'})); // Invalid Method

console.log(validator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'})); // Invalid Version