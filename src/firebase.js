// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCItpT4VZ_SSSX9whHL6DTY3etpRClvoOM",
    authDomain: "ai-sudio.firebaseapp.com",
    projectId: "ai-sudio",
    storageBucket: "ai-sudio.firebasestorage.app",
    messagingSenderId: "297249069071",
    appId: "1:297249069071:web:5580f7412ec10b0473eb7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        return user;
    } catch (error) {
        throw (error)
    }
}

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        const user = res.user;
        return user;
    } catch (error) {
        throw (error)
    }
}

const signInwithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider)
        const user = res.user;
        return user
    } catch (error) {
        throw (error)
    }
}

const resetPassowrd = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)

    } catch (error) {
        throw (error)
    }
}

const logout = async (email) => {
    try {
        await signOut(auth, email)
        return { success: true }
    } catch (error) {
        throw (error)
    }
}

export { registerWithEmailAndPassword, loginWithEmailAndPassword, auth, logout, resetPassowrd, signInwithGoogle }