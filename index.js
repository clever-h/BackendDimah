const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://hamidrs7:Cr7091924@blogdimah.yl7hx.mongodb.net/DimahDB?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);

app.listen('5000', () => {
  console.log('backend is running');
});
