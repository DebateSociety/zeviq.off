import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqrOkIQC79m3Cu_FWM_KMzCRTn5e_Q5qU",
  authDomain: "zeviq-official.firebaseapp.com",
  projectId: "zeviq-official",
  storageBucket: "zeviq-official.firebasestorage.app",
  messagingSenderId: "740360010897",
  appId: "1:740360010897:web:e0c51c1a54054095ef5330",
  measurementId: "G-NP736E1R5X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("✅ Firebase Connected");

const form = document.getElementById("membershipForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const interests = [];

        document
            .querySelectorAll('.checkbox-grid input[type="checkbox"]:checked')
            .forEach(box => interests.push(box.value));

        try {

console.log("FULL NAME:", document.getElementById("fullName").value);
console.log("EMAIL:", document.getElementById("email").value);
console.log("PHONE:", document.getElementById("phone").value);
console.log("CITY:", document.getElementById("city").value);
console.log("REASON:", document.getElementById("reason").value);
          
          
          await addDoc(collection(db, "members"), {

                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                age: document.getElementById("age").value,
                country: document.getElementById("country").value,
                city: document.getElementById("city").value,
                school: document.getElementById("school").value,
                grade: document.getElementById("grade").value,
                experience: document.getElementById("experience").value,
                interests: interests,
                reason: document.getElementById("reason").value,
                achievement: document.getElementById("achievement").value,
                goals: document.getElementById("goals").value,
                submittedAt: serverTimestamp()

            });

            alert("🎉 Application Submitted Successfully!");

            form.reset();

        } catch (err) {

            console.error(err);

            alert("❌ Error submitting application.");

        }

    });

}
