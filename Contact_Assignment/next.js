const storedData = localStorage.getItem("userdata");

const user=JSON.parse(storedData);
document.getElementById("userDetails").innerHTML=`
<strong>Name:</strong>${user.name}<br>
<strong>Email:</strong> ${user.email} <br>
<strong>Mobile:</strong> ${user.number} <br>
<strong>Address:</strong> ${user.address}`;
