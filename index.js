const app = require('./confi/server');
const server = app.listen(8080, function () {
    console.log('Server Online @port 8080');
});