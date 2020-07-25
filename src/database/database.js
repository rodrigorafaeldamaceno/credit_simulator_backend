require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tindevcluster-gxzea.mongodb.net/credit_simulator?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

//functions deprecation
mongoose.set('useFindAndModify', false);

module.exports = mongoose