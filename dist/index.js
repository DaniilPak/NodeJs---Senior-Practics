"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // Required for tsyringe
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
const test_route_1 = require("./routes/test-route");
// Import the container file to ensure registration of dependencies
require("./container");
const testRoute = new test_route_1.TestRoute();
app.use('/api/test', testRoute.getRouter());
/// Main entry
app.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`);
});
