"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const email_route_1 = __importDefault(require("./src/email.route"));
const cors_1 = __importDefault(require("cors"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = (0, express_1.default)();
        const port = 3000;
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use("/mail", email_route_1.default);
        app.get("/", (req, res) => {
            res.status(200).send("api is working");
        });
        app.listen(port, () => {
            console.log("app is running on http://localhost:3000");
        });
    }
    catch (err) {
        console.error(err.message, "errp");
    }
}))();
