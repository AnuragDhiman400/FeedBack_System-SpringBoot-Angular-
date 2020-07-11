//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/feedback'));

app.get('*', function(req, res) {
    // Replace the '/dist/<to_your_project_name>/index.html'
    res.sendFile(path.join(__dirname + '/dist/feedback/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);







// const express = require('express');
// const app = express();
// const path = require('path');
// const forceSSL = function() {
//     return function(req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(['https://', req.get('Host'), req.url].join(''));
//         }
//         next();
//     }
// }

// app.use(express.static(__dirname + '/dist/feedback'));

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/feedback/index.html'));
// });

// app.listen(process.env.PORT || 5000);