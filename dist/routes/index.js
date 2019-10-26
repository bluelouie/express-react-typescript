"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.sendFile('index.html', {
    //   root: 'C:\\Users\\jmedi\\Documents\\Github\\social-network\\public'
    // });
    res.send('index.html');
});
exports.default = router;
