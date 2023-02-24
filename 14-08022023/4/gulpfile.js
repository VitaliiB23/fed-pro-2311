function hello(cb){
    console.log("Hello gulp");
    cb();
}

function finish(cb){
    console.log("finish");
    cb();
}
exports.finish = finish;
exports.default = hello;