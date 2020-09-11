//resolve means successfull
const getID = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([222, 555, 999, 555])
    }, 1500)
});

const getRecipe = function (recID) {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipe = {
                title: 'tomato',
                publisher: 'Luat'
            }
            resolve(`${id}: ${recipe.title}`);
        }, 1500, recID);

    })
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'tomatoPub',
                publisher: 'LuatPub'
            }
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    })
}

//then method will add handler if the promises are full fill

//This function is an asychonous function, so it keep running in 
//the background, we can have one or more await in side this function
async function getRecipeAW() { // the function always return a Promises
    //the await will stop executing the code at this point until the Promises is full filled
    // the await can be used in only async function
    const id = await getID;
    console.log(id)
    console.log('here 2');
    const recipe = await getRecipe(id[1]);
    console.log(recipe);
    const related = await getRelated('Publisher');
    console.log(related);

    return recipe;
}
// const rec = getRecipeAW(); //console will be Pending bc the 'recipe' always running
//on background till the promises full fill
// console.log(rec)

getRecipeAW().then(result => console.log(result));