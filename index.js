const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // JSON file you downloaded

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Test Firestore connection
db.collection("test").doc("demo").set({message: "Hello Firebase!"})
  .then(() => console.log("Connected! Data saved."))
  .catch(err => console.error(err));
