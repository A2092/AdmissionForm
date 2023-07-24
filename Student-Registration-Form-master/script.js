function saveDataToSpreadsheet() {
  // Get the data from the form.
  var data = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    gender: document.getElementById("gender").value,
    age: document.getElementById("age").value,
    date_of_birth: document.getElementById("date_of_birth").value,
    email_address: document.getElementById("email_address").value,
    see_marks: document.getElementById("see_marks").value,
    school_name: document.getElementById("school_name").value,
    phone_number: document.getElementById("phone_number").value,
    permanent_address: document.getElementById("permanent_address").value,
    state: document.getElementById("state").value,
    faculty: document.getElementById("faculty").value,
    hobbies: document.getElementById("hobbies").value,
    upload_photo: document.getElementById("upload_photo").value,
  };

  // Save the data to the spreadsheet.
  var spreadsheet = SpreadsheetApp.openById("1Fb_pzQ9N45RNaXDJVtLgpOdewODYWp-aaJkkBKlwWHw");
  var sheet = spreadsheet.getActiveSheet();
  sheet.appendRow([data.first_name, data.last_name, data.gender, data.age, data.date_of_birth, data.email_address, data.see_marks, data.school_name, data.phone_number, data.permanent_address, data.state, data.faculty, data.hobbies, data.upload_photo]);
}

// When the form is submitted, call the saveDataToSpreadsheet() function.
document.getElementById("form").addEventListener("submit", saveDataToSpreadsheet);

  var uploadField = document.getElementById("myfile");

uploadField.onchange = function() {
    if(this.files[0].size > 102400){
       alert("File is too big! File size should be 100kb.");
       this.value = "";
    };
};