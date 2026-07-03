// ================================================================
// FIREBASE CONFIGURATION
// ================================================================
// Go to Firebase Console > Project Settings > General > Your apps
// Copy the firebaseConfig object and paste it below.
// ================================================================

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Enable offline persistence (optional)
db.settings({ merge: true });
