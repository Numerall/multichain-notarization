const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectBlockchains, getWeb3Instance } = require('./utils/blockchain');
const app = express();
const globalErrorHandler = require('./middleware/error');

require('./model/index');

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

var index = require('./routes/index');
const { PORT } = require('./config');
app.use(index);

// Error Handling middleware
app.use(globalErrorHandler);

app.listen(PORT, async () => {
  // Start script to Initialize all web3 providers
  await connectBlockchains();

  console.log('server running on port 3000');
});
