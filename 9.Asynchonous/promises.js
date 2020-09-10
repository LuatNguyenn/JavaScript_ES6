// What is promises ?
// An object that helps to keep track an event happened already or not
// If it happens, then it will determine what will happens next

//resolve means successfull
const getID = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([222, 555, 999, 555])
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout( id=> {
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
getID.
then(id => {
        console.log(id);
        return getRecipe(id[2]);
    }).then(recipe => {
        console.log(recipe);
        return getRelated(recipe.publisher);
    }).then(publisher => console.log(publisher))
    .catch(err => console.log('err'));