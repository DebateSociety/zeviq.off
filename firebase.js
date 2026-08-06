import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// ===============================
// Firebase Configuration
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyAqrOkIQC79m3Cu_FWM_KMzCRTn5e_Q5qU",
  authDomain: "zeviq-official.firebaseapp.com",
  projectId: "zeviq-official",
  storageBucket: "zeviq-official.firebasestorage.app",
  messagingSenderId: "740360010897",
  appId: "1:740360010897:web:e0c51c1a54054095ef5330",
  measurementId: "G-NP736E1R5X"
};

// ===============================
// Initialize Firebase
// ===============================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("✅ Firebase Connected");

// ===============================
// Membership Form
// ===============================
const form = document.getElementById("membershipForm");

if (!form) {
    console.error("❌ Membership form not found.");
} else {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        // Collect interests
        const interests = Array.from(
            document.querySelectorAll(".checkbox-grid input[type='checkbox']:checked")
        ).map(box => box.value);

        // Collect form data ONCE
        const data = {
            fullName: form.fullName.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            age: form.age.value.trim(),
            country: form.country.value.trim(),
            city: form.city.value.trim(),
            school: form.school.value.trim(),
            grade: form.grade.value.trim(),
            experience: form.experience.value,
            interests: interests,
            reason: form.reason.value.trim(),
            achievement: form.achievement.value.trim(),
            goals: form.goals.value.trim(),
            submittedAt: serverTimestamp()
        };

        console.log("📦 DATA TO SAVE:", data);

        try {

            const docRef = await addDoc(collection(db, "members"), data);

            console.log("✅ Document ID:", docRef.id);

            alert("🎉 Application Submitted Successfully!");

            form.reset();

        } catch (error) {

            console.error("🔥 Firestore Error:", error);

            alert("❌ " + error.message);

        }

    });

}
