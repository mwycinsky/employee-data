
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLULkrGtvlaJylUzHU6m3AKTUTVw41DUQ",
    authDomain: "employee-data-91f00.firebaseapp.com",
    databaseURL: "https://employee-data-91f00.firebaseio.com",
    projectId: "employee-data-91f00",
    storageBucket: "employee-data-91f00.appspot.com",
    messagingSenderId: "963477689579"
  };
  firebase.initializeApp(config);
   
   // Capture Button Click
    $("#add-user").on("click", function(event) {
        // Don't refresh the page!
        event.preventDefault();
  
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        age = $("#age-input").val().trim();
        comment = $("#comment-input").val().trim();
  
        database.ref().set({
          name: name,
          email: email,
          age: age,
          comment: comment
        });
  
      });

      // testing