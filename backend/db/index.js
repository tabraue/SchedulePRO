const { MongoClient, ServerApiVersion } = require('mongodb');
const url = process.env.CONNECTION
const client = new MongoClient(url);

const dbName = process.env.DB_NAME


module.exports = client