function hideResults() {
    document.getElementById("JavaScript").setAttribute("class", "hidden");
    document.getElementById("Python").setAttribute("class", "hidden");
    document.getElementById("C").setAttribute("class", "hidden");
    document.getElementById("HTML").setAttribute("class", "hidden");
    document.getElementById("error-message").setAttribute("class", "hidden")
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const favNumber = parseInt(document.querySelector("input#number1").value);
        const favColor = document.querySelector("select#colors").value;
        const age = parseInt(document.querySelector("input#age").value);
        const favMusic = document.querySelector("select#music").value;
        const date = parseInt(document.querySelector("input#date").value);

        if (age >= 24 && favNumber <= 10 && (favColor === "Green" || favColor === "Red") && favMusic === "Pop") {
            document.getElementById("JavaScript").removeAttribute("class");
        } else if (age >= 1 && date <= 30 && (favColor === "Green" || favColor === "Blue") && date >= 15 ) {
            document.getElementById("C").removeAttribute("class");
        } else if (favNumber >= 4 && age <= 70 && (favColor === "Yellow" || favColor === "Blue") && (favMusic === "Jazz" || favMusic === "Hiphop")) {
            document.getElementById("Ruby").removeAttribute("class");
        } else if (favMusic === "Rock" && favColor === "Yellow") {
            document.getElementById("HTML").removeAttribute("class");
        } else
            document.getElementById("error-message").removeAttribute("class");




    };
}