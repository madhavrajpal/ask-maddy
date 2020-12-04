var firebaseConfig = {
  apiKey: "AIzaSyDFe__MbMOpIvV2E_qjfoEKf2iHQ8HOWMw",
  authDomain: "ask-me-6d164.firebaseapp.com",
  projectId: "ask-me-6d164",
  storageBucket: "ask-me-6d164.appspot.com",
  messagingSenderId: "424241032572",
  appId: "1:424241032572:web:677c5326e4136441fec8f9"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userName');
let userQuestion = document.querySelector('#userQuestion');

const db = firestore.collection("quesData");

submitBtn.addEventListener('click', function(){
  let userNameInput = userName.value;
  let userQuestionInput = userQuestion.value;

  db.doc().set({
    name: userNameInput,
    question: userQuestionInput,

  })
  .then(function(){
    console.log("data saved");
  })
  .catch(function(error){
    console.log(error);
  });
});

