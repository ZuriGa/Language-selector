// 

function hideResults() {
    event.preventDefault();
    document.getElementById("JavaScript").classList.add("hidden");
    document.getElementById("Python").classList.add("hidden");
    document.getElementById("C").classList.add("hidden");
    document.getElementById("Ruby").classList.add("hidden");
}

document.querySelector("form").onsubmit = function (event) {
    hideResults(s);

    const outdoorActivities = document.querySelector("input.outdoorAct").value;
    const coffee = document.querySelector("input#coffee").value;
    const loveLottery = document.querySelector("select#loveLottery").value;
    const colors = document.querySelector("select#favoriteColors").value;
    const season = document.querySelector("select#favoriteSeason").value;

    let result;

    if (
        (outdoorActivities === "yes" || outdoorActivities === "no") &&
        (coffee === "no") &&
        (loveLottery === "lottery" || loveLottery === "love") &&
        (colors === "lightBlue") &&
        (season === "winter")
    ) {
        result = "JavaScript";
    } else if (
        (outdoorActivities === "yes" || outdoorActivities === "no") &&
        (colors === "lavender" || colors === "red")
    ) {
        result = "Python";
    } else if (
        (coffee === "yes") &&
        (colors === "pink" || colors === "lightBlue") &&
        (season === "spring" || season === "summer")
    ) {
        result = "C#";
    } else if (
        (outdoorActivities === "yes") &&
        (coffee === "yes") &&
        (loveLottery === "lottery") &&
        (colors === "lightBlue" || colors === "pink")
    ) {
        result = "Ruby";
    }

    if (result) {
        document.getElementById("output").innerText = result;
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector("form").onsubmit = function (event) {
                hideResults();
            };
        });
        
    }
};
