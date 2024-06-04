const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://venkata2604:Bt2n3WY9aklviaEs@cluster0.fib6qja.mongodb.net/";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let collection;

async function runDBConnection() {
  try {
    await client.connect();
    collection = client.db('YourDatabaseName').collection('Cat'); // Ensure 'YourDatabaseName' is correct
    console.log('Connected to MongoDB and collection retrieved.');
  } catch (ex) {
    console.error('Error connecting to MongoDB:', ex);
  }
}

module.exports = { client, collection, runDBConnection };