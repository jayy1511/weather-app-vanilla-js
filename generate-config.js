// generate-config.js
const fs = require("fs");
require("dotenv").config();

const content = `const API_KEY = "${process.env.API_KEY}";`;
fs.writeFileSync("config.js", content);
console.log("✅ config.js generated from .env");
