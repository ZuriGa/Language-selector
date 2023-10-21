// work in progress

// function hideResults() {
//     document.getElementById("JavaScript").setAttribute("class", "hidden");
//     document.getElementById("Python").setAttribute("class", "hidden");
//     document.getElementById("C").setAttribute("class", "hidden");
//     document.getElementById("Ruby").setAttribute("class", "hidden");

// }

// window.onload = function () {
//     document.querySelector("form").onsubmit = function (event) {
//         event.preventDefault();
//         hideResults();
//         const outdoorAct = parseInt(document.querySelector("input#outdoorAct").value);
//         const coffee = parseInt(document.querySelector("input#coffee").value);
//         const loveLottery = document.querySelector("select#loveLottery").value;
//         const colors = document.querySelector("select#colors").value;
//         const season = document.querySelector("select#season").value;

//         if (outdoorAct === "yes" || outdoorAct === "no" && (coffee === no || coffee === yes) && (loveLottery === "lottery" || colors === "lightBlue") && (season === "winter" || season === "spring")) {
//             document.getElementById("JavaScript").removeAttribute("class");
//         } else if (outdoorAct === "yes" && outdoorAct === "no" && (colors === "lavender" || favColor === "red")) {
//             document.getElementById("Python").removeAttribute("class");
//         } else if (coffee === "yes" && (favColor === "pink" || favColor === "lightBlue") && (season === "spring" || season === "summer")) {
//             document.getElementById("C").removeAttribute("class");
//         } else (outdoorAct === "yes" && (coffee === "yes" && (loveLottery === "lottery") && (colors === "lightBlue" || colors === "pink"))) {
//             document.getElementById("Ruby").removeAttribute("class");


//         };

//     }
// }