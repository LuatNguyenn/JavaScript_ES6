//CORS policy: prevent to make request from different domain 
// fetch will return a promise

// function getWeather(id){
//     fetch(`https://www.metaweather.com/api/location/search/?query=${id}`)
//     .then(result => {
//         // console.log(JSON.parse(result)) //convert from JSON to JS obj
//         return result.json();
//     }).then(data => {
//         console.log(data);
//     }).catch(error => console.log(error));
// }



//ASYNC version

async function getWeather(id) {
    try {
        //fetch data when it's full fill it will return data
        const result = await fetch(`https://www.metaweather.com/api/location/search/?query=${id}`);
        const data = await result.json();
        return data;
    } catch (err) {
        console.log(err)
    }

}
getWeather('Calgary');
let data;
getWeather('Calgary').then(data => {
    data = data;
    console.log(data)
});