function Submit(){
    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    const number = document.getElementById("user_number").value;
    const address = document.getElementById("user_address").value;

    // if (!name || !email || !number || !address){
    //     alert("Please fill all fields");
    //     return;
    // }
    const userData = {
        name,
        email,
        number,
        address
    };

    localStorage.setItem("userdata", JSON.stringify(userData));
    window.location.href="next.html";

}