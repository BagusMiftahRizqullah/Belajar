let namesAndHobbies = {
    'elie': "JavaScript",
    'matt': "jogging",
    'janey': "table building",
    'tim': "sailing"
}


for (let i = 0; i < Object.keys(namesAndHobbies).length; i++) {

    console.log(`${Object.values(namesAndHobbies)[i]} => ${Object.keys(namesAndHobbies)[i]}`);

}


namesAndHobbies.Bagus = "bermain";
console.log(namesAndHobbies);
if (namesAndHobbies.Bagus) {
    console.log(`${Object.keys(namesAndHobbies)[4]} ${namesAndHobbies.Bagus} `);

}



