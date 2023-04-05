// function calculateZakat() {
//     var amount = document.getElementById("amount").value;
//     var zakatInGold = document.getElementById("gold").value;
//     var zakatInSilver = document.getElementById("silver").value;
//     var zakat = amount * 0.025;
//     var zakatInGold = gold * 0.025;
//     var zakatInSilver = silver * 0.025;
//     var resultElement = document.getElementById("result");
//     resultElement.innerHTML = "Zakat due: " + zakat.toFixed(2) + " PKR";
//     resultElement.innerHTML = "Zakat due: " + zakatInGold.toFixed(2) + " PKR";
//     resultElement.innerHTML = "Zakat due: " + zakatInSilver.toFixed(2) + " PKR";
//     resultElement.style.display = "block";
//     if (amount === "") {
//         alert("please fill the requirement")
//     }
// }

function zakatcalc() {
    var gold = document.getElementById("gold").value
    var pkr = document.getElementById("amount").value
    var silver = document.getElementById("silver").value
    var zakatInPkr = pkr / 40
    var zakatInGold = gold * 220000 / 40
    var zakatInSilver = silver * 13 / 40
    var getTheResult = document.getElementById("result")
        // var getTheResult1 = document.getElementById("result2")
        // var getTheResult2 = document.getElementById("result3")
    getTheResult.innerHTML = "Zakat Due " + zakatInGold.toFixed(2) + " Pkr"
        // getTheResult1.innerHTML = "Zakat Due " + zakatInPkr.toFixed(2) + " Pkr"
        // getTheResult2.innerHTML = "Zakat Due " + zakatInSilver.toFixed(2) + "Pkr"
    getTheResult.style.display = "inline-block"
        // getTheResult1.style.display = "block"
        // getTheResult2.style.display = "block"

}