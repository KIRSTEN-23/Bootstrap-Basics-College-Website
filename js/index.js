submit = () => {
    let nameSurname = document.getElementById("exampleInputText").checked;
    let subject = document.getElementById("exampleFormControlSelect1").checked;
    let email = document.getElementById("exampleInputEmail1").checked;
    let number = document.getElementById("exampleInputTel").checked;
    let checkbox = document.getElementById("exampleCheck1").checked;

    if(checkbox){
        alert("Welcome" + nameSurname + "!Thank you for your interest in " + subject + "!We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number);
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter...you don't seem to be that interested " + nameSurname + "! If you want to sign up, you better CHECK that newsletter box!");
    }
}