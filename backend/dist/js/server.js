"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Configuration and Logging handlers
/* eslint-disable import/first */
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const morgan_1 = __importDefault(require("morgan"));
const debug_1 = __importDefault(require("debug"));
// HTTP handlers
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
// Express framework and additional middleware
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const compression_1 = __importDefault(require("compression"));
const serverDebug = (0, debug_1.default)('server');
const isDevelopment = (process.env.MODE === 'Development');
if (isDevelopment) {
    debug_1.default.enable('server db api route');
}
serverDebug(`Is development mode ${isDevelopment}`);
// Create and configure the express app
const app = (0, express_1.default)();
// Express view/template engine setup
serverDebug('setting up templating engine');
let relPath = (isDevelopment) ? process.env.VIEW_RELATIVE_PATH_DEV : process.env.VIEW_RELATIVE_PATH;
serverDebug(`Base directory is: ${__dirname}`);
serverDebug(`Relative path is: ${relPath}`);
serverDebug(`${__dirname}${relPath}views`);
app.set('views', `${__dirname}${relPath}views`);
app.engine('handlebars', (0, express_handlebars_1.default)({
    defaultLayout: 'default',
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    layoutsDir: path_1.default.join(app.get('views'), 'layouts')
}));
serverDebug('setting up templating engine - handlebars');
app.set('view engine', 'handlebars');
app.set('view cache', !isDevelopment); // view caching in production
serverDebug('Installing middlewares');
// Express middlewares
app.use((0, compression_1.default)()); // add compression support
app.use('/', express_1.default.static('./public')); // root directory of static content
app.use('/dist', express_1.default.static('./dist')); // root directory of static content
/* Are we in Development or in Production? */
serverDebug('Setting up server side logging with Morgan');
if (isDevelopment) {
    app.use((0, morgan_1.default)('dev')); /* log server calls with performance timing with development details */
    /* log call requests with body */
    app.use((request, response, next) => {
        serverDebug(`Received ${request.method} request for ${request.url} with/without body and params`);
        serverDebug(request.params);
        if (request.body) {
            if (process.env.SHOW_BODY)
                serverDebug(request.body);
        }
        next();
    });
}
else {
    app.use((0, morgan_1.default)('combined')); /* log server calls per standard combined Apache combined format */
}
// ensure the user is logged in with a path
// routes
const routes_1 = __importDefault(require("./routes"));
app.use('/', routes_1.default); // add the middleware path routing
// route for the env.js file being served to the client
serverDebug('Setting the environment variables for the browser to access');
const port = process.env.PORT || 3000;
const API_SERVER_URL = process.env.API_SERVER_URL || '';
let env = { serverURL: API_SERVER_URL };
// construct the web server
serverDebug('Create HTTP Server');
//const httpServer = new https.Server({key: key, cert: cert },app);
const httpServer = new http_1.default.Server(app);
// catch 404 and forward to error handler
serverDebug('Setting up 404 handler');
app.use((req, res, next) => {
    serverDebug('404 forwarder');
    const err = new Error('Not Found');
    // @ts-ignore
    err.status = 404;
    next(err);
});
// error handler
if (isDevelopment) {
    serverDebug('Setting up DEV 500 handler');
    // @ts-ignore
    app.use((err, req, res, next) => {
        serverDebug(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
        });
    });
}
else {
    serverDebug('Production 500 handler');
    // @ts-ignore
    app.use((err, req, res, next) => {
        serverDebug(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
        });
    });
}
httpServer.listen(port, () => {
    serverDebug(`Server started on port ${port}`);
});
//# sourceMappingURL=server.js.map