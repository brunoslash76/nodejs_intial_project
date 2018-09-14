module.exports.index = function (app, req, res) {
    res
        .status(200)
        .send('Hello World');
};