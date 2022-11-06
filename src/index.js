// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Aj0XpkOjrghlFtQiknVzGUEAR85DJsE",
  authDomain: "tagatakia-1b325.firebaseapp.com",
  projectId: "tagatakia-1b325",
  storageBucket: "tagatakia-1b325.appspot.com",
  messagingSenderId: "485293927747",
  appId: "1:485293927747:web:215ae521b883cb251753f6",
  measurementId: "G-XHCQ7NK04C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const root = document.querySelector('#root')
root.append(logo, heading, imageBackground, imagePublic)
