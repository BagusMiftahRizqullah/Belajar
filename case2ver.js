var hege = ["Cecilie", "Lone", "Linus", "Totok", "Bagus"];
var stale = ["Emil", "Tobias", "Linus", "Cecilie", "Bagus"];

var result = []
for (let i = 0; i < hege.length; i++) {
    let temp = stale.filter(b => b == hege[i]).length;
    if (!temp) {
        result.push(hege[i])
    }
}
console.log(result)