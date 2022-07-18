// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDfNWlE_wVU2ydN-H3IR2w0T2EMabGMAC0",
//     authDomain: "life-history-questionnaire.firebaseapp.com",
//     projectId: "life-history-questionnaire",
//     storageBucket: "life-history-questionnaire.appspot.com",
//     messagingSenderId: "366798430190",
//     appId: "1:366798430190:web:d063af6a7f7b52ebc838ff",
//     measurementId: "G-QLKG50LFWX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore(app);

// // console.log('Initializing Firestore', firestore);

// function submitData(event) {
//     event.preventDefault();
//     db.collection('quest_answers').set({
//         name: 'Andersen S'
//     })
// }