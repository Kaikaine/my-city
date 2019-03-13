import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import 'firebase/storage'

const key = require('./config/key').key

const config = {
  apiKey: key,
  authDomain: "two-man-8d0dd.firebaseapp.com",
  databaseURL: "https://two-man-8d0dd.firebaseio.com",
  projectId: "two-man-8d0dd",
  storageBucket: "two-man-8d0dd.appspot.com",
  messagingSenderId: "114248468068"
};
firebase.initializeApp(config);

const db = firebase.database()
const firebaseMatches = db.ref('matches')
const firebasePromotions = db.ref('promotions');
const firebaseTeams = db.ref('teams')
const firebasePlayers = db.ref('players');

export {
    firebase,
    db,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
}