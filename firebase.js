import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
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

if (!form) {
    console.error("❌ membershipForm not found.");
} else {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const interests = [...document.querySelectorAll('.checkbox-grid input[type="checkbox"]:checked')]
            .map(box => box.value);

        const data = {
            fullName: document.getElementById("fullName").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            age: document.getElementById("age").value.trim(),
            country: document.getElementById("country").value.trim(),
            city: document.getElementById("city").value.trim(),
            school: document.getElementById("school").value.trim(),
            grade: document.getElementById("grade").value.trim(),
            experience: document.getElementById("experience").value,
            interests: interests,
            reason: document.getElementById("reason").value.trim(),
            achievement: document.getElementById("achievement").value.trim(),
            goals: document.getElementById("goals").value.trim(),
            submittedAt: serverTimestamp()
        };

        console.log("📦 DATA TO SAVE:", data);

        try {

            const docRef = await addDoc(collection(db, "members"), data);

            console.log("✅ Saved:", docRef.id);

            alert("🎉 Application Submitted Successfully!");

            form.reset();

        } catch (err) {

            console.error("🔥 FIREBASE ERROR:", err);

            alert("❌ " + err.message);

        }

    });

}
