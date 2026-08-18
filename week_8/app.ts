import express, {
  Request,
  Response,
  NextFunction
} from "express";

import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

// EJS configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    }
  })
);

// Authentication middleware
const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = (req.session as any).username;

  if (user) {
    next();
  } else {
    res.redirect("/login");
  }
};

// GET login page
app.get("/login", (req: Request, res: Response) => {
  res.render("login", {
    error: null
  });
});

// POST login
app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    (req.session as any).username = username;

    res.cookie(
      "lastVisit",
      new Date().toLocaleTimeString()
    );

    res.redirect("/dashboard");
  } else {
    res.render("login", {
      error: "Invalid credentials"
    });
  }
});

// Dashboard
app.get(
  "/dashboard",
  authMiddleware,
  (req: Request, res: Response) => {
    const user = (req.session as any).username;

    const lastVisit =
      req.cookies.lastVisit || "First time";

    res.render("dashboard", {
      user,
      lastVisit
    });
  }
);

// Logout
app.get("/logout", (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");

    res.redirect("/login");
  });
});

// Start server
app.listen(3000, () => {
  console.log(
    "Server running at http://localhost:3000/login"
  );
});
