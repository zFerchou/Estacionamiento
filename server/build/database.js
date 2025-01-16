"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const Keys_1 = __importDefault(require("./Keys"));
const pool = promise_mysql_1.default.createPool(Keys_1.default.database);
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB in Conected');
});
exports.default = pool;
