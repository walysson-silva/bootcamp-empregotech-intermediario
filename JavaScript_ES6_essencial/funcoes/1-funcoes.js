function getName () {
    return 'Wálysson Silva'
}

function logFn(fn) {
    console.log(fn());
}
const logFnResult = logFn;

logFnResult(getName);