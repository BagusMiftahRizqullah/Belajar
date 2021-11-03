function meatBall(meat, flour, water, recipe) {
    // Strandar recipe
    let meatIg = recipe.meat
    let flourIg = recipe.flour
    let waterIg = recipe.water
    let bikinMeat = meat / meatIg
    let bikinFlour = flour / flourIg
    let bikinWater = water / waterIg
    let meatball_min = Math.min(bikinMeat, bikinFlour, bikinWater);
    // console.log(meatball_min)
    let meatball = Math.floor(meatball_min);
    // console.log(meatball)
    meat = meat - (meatIg * meatball)
    flour = flour - (flourIg * meatball)
    water = water - (waterIg * meatball)

    let result = ""
    if (meat && flour && water > 0) {
        result = `${meatball} meat ball with ${meat} meat, ${flour} flour, and ${water} water remain`
        console.log(result)
    }
    else if (meatball && meat && water > 0) {
        result = `${meatball} meat ball with ${meat} meat and ${water} water remain`
        console.log(result)
    }
    else if (meatball && meat && flour > 0) {
        result = `${meatball} meat ball with ${meat} meat and ${flour} flour remain`
        console.log(result)
    }
    else if (meatball && flour && water > 0) {
        result = `${meatball} meat ball with ${flour} flour and ${water} water remain`
        console.log(result)
    }
    else if (meatball && flour > 0) {
        result = `${meatball} meat ball with ${flour} flour remain`
        console.log(result)
    }



}

function test(fun, result) {
    // console.log(fun === result)
}

const standardRecipe = {
    meat: 1,
    flour: 2,
    water: 1,
}

const tastyRecipe = {
    meat: 1.5,
    flour: 1.5,
    water: 1,
}

test(meatBall(30, 61.5, 30, standardRecipe), '30 meat ball with 1.5 flour remain');
test(meatBall(12, 25, 11, standardRecipe), '11 meat ball with 1 meat and 3 flour remain');
test(meatBall(23, 20, 20, tastyRecipe), '13 meat ball with 3.5 meat, 0.5 flour, and 7 water remain');
test(meatBall(42, 45, 51, standardRecipe), '22 meat ball with 20 meat, 1 flour, and 29 water remain');
test(meatBall(15, 55, 21, standardRecipe), '15 meat ball with 25 flour and 6 water remain');
test(meatBall(33, 24, 19, tastyRecipe), '16 meat ball with 9 meat and 3 water remain');