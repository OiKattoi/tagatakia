// Test import of styles
import '@/styles/index.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Masonry from 'masonry-layout';
import * as imagesLoaded from 'imagesloaded';


    // init Masonry
    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: 200,
      percentPosition: true
    });

    imagesLoaded(grid).on('progress', function () {
      // layout Masonry after each image loads
      msnry.layout();
    });

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