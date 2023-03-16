"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routers/index"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, './views'));
server.engine('mustache', (0, mustache_express_1.default)());
server.use(index_1.default);
server.use(express_1.default.urlencoded({ extended: true }));
server.use((req, res) => {
    res.status(404).render('pages/notFound');
});
server.listen(process.env.PORT);
