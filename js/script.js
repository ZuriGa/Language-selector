function hideResults() {
    document.getElementById("JavaScript").setAttribute("class", "hidden");
    document.getElementById("Python").setAttribute("class", "hidden");
    document.getElementById("C").setAttribute("class", "hidden");
    document.getElementById("HTML").setAttribute("class", "hidden");
    document.getElementById("TryDiffCareer").setAttribute("class", "hidden")
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const favNumber = parseInt(document.querySelector("input#number1").value);
        const favColor = document.querySelector("select#colors").value;
        const age = parseInt(document.querySelector("input#age").value);
        const favMusic = document.querySelector("select#music").value;
        const disneyland = parseInt(document.querySelector("input#disneyland").value);

        if (age >= 15 && favNumber <= 10 && (favColor === "Green" || favColor === "Red") && (favMusic === "Pop" || favMusic === "Rock" && disneyland >= 1 )) {
            document.getElementById("JavaScript").removeAttribute("class");
        } else if (age >= 29 && disneyland <= 5 && (favColor === "Green" || favColor === "Blue") && (favMusic === "Jazz" || favMusic === "Hiphop")) {
            document.getElementById("C").removeAttribute("class");
        } else if (favNumber >=1 && age <= 35 && (favColor === "Yellow" || favColor === "Red") && (favMusic === "Jazz" || favMusic === "Hiphop") && disneyland >= 1  ) {
            document.getElementById("Python").removeAttribute("class");
        } else if (favNumber >= 1 && disneyland >= 1  && (favMusic === "Rock" && favColor === "Yellow" )) {
            document.getElementById("HTML").removeAttribute("class");
        } else
            document.getElementById("TryDiffCareer").removeAttribute("class");




    };
}