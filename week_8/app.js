"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../views"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
const authMiddleware = (req, res, next) => {
    const user = req.session.username;
    if (user) {
        next();
    }
    else {
        res.redirect("/login");
    }
};
app.get("/login", (req, res) => {
    res.render("login", {
        error: null
    });
});
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
        req.session.username = username;
        res.cookie("lastVisit", new Date().toLocaleTimeString());
        res.redirect("/dashboard");
    }
    else {
        res.render("login", {
            error: "Invalid credentials"
        });
    }
});
app.get("/dashboard", authMiddleware, (req, res) => {
    const user = req.session.username;
    const lastVisit = req.cookies.lastVisit || "First time";
    res.render("dashboard", {
        user,
        lastVisit
    });
});
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.redirect("/login");
    });
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/login");
});
//# sourceMappingURL=app.js.map