"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "src" });
});
app.get("/load-content", (req, res) => {
    res.send("<p>This content was loaded dynamically using htmx and Express.js!</p>");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
