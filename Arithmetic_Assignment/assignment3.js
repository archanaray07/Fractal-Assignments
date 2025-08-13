function validation(action) {
    let firstnum = document.getElementById("first_number").value.trim();
    let secondnum = document.getElementById("second_number").value.trim();

    if (firstnum === "" || secondnum === "") {
        document.getElementById("result_container").innerHTML = "Input should not be blank";
        return;
    }

    if (isNaN(firstnum) || isNaN(secondnum)) {
        document.getElementById("result_container").innerHTML = "Inputs must be numbers.";
        return;
    }

    firstnum = parseInt(firstnum);
    secondnum = parseInt(secondnum);

    performAction(firstnum, secondnum, action);
}

function performAction(firstnum, secondnum, action) {
    if (action === "add") {
        document.getElementById("result_container").innerHTML = firstnum + secondnum;
    } else if (action === "sub") {
        document.getElementById("result_container").innerHTML = firstnum - secondnum;
    } else if (action === "multiply") {
        document.getElementById("result_container").innerHTML = firstnum * secondnum;
    } else {
        document.getElementById("result_container").innerHTML = "Error! Something wrong!!!";
    }
}
