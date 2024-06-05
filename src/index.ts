import 'reflect-metadata'; // Required for tsyringe

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

import { TestRoute } from './routes/test-route';

// Import the container file to ensure registration of dependencies
import './container';

const testRoute = new TestRoute();

app.use('/api/test', testRoute.getRouter());

/// Main entry
app.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`);
});
