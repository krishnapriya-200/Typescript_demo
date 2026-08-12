import express from "express";
import type{ Request, Response } from "express";

const app = express();
const port = 3000;

// Configure EJS template engine
app.set("view engine", "ejs");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// GET route - display registration form
app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });
});

// POST route - accept form data
app.post("/register", (req: Request, res: Response) => {

    const { username, age } = req.body;

    // Validation
    let errorMessage: string | null = null;

    if (!username || username.length < 3) {
        errorMessage = "Username must be at least 3 characters long.";
    }
    else if (!age || isNaN(Number(age)) || Number(age) < 18) {
        errorMessage = "You must be at least 18 years old.";
    }

    // If validation fails
    if (errorMessage) {

        res.render("index", {
            title: "Registration Failed",
            error: errorMessage,
            user: null
        });

    }
    // If validation passes
    else {

        res.render("index", {
            title: "Registration Successful",
            error: null,
            user: username
        });

    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
