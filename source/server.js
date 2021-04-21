const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const logger = require('./logs/logger');
const app = require('./app');
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const { PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
   if (err) {
      logger.error(err);
      // process.exit(1);
      return;
   }
   logger.alert('mongodb connected');
});

app.listen(PORT, () => {
   logger.alert('server is running on port ' + PORT);
});
