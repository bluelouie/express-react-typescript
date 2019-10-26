"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const users_js_1 = __importDefault(require("./routes/users.js"));
const index = express_1.default();
index.use(morgan_1.default('dev'));
index.use(express_1.default.json());
index.use(express_1.default.urlencoded({ extended: false }));
index.use(cookie_parser_1.default());
// index.use(express.static(path.join(__dirname, 'api')));
index.use('/', index_js_1.default);
index.use('/api/users', users_js_1.default);
module.exports = index;
