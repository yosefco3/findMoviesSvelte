import { writable } from 'svelte/store'

export const API_KEY = process.env.API_KEY;
// url to get genres
const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US&language=en-US&sort_by=popularity.desc&`;


// store for genres
export let genresObject = writable(genres())
// store for complicated search 
export let searchParams = writable({
    with_genres: "",
    "with_runtime.gte": "",
    "with_runtime.lte": "",
    "sort_by":"",
    "release_date.gte":"",
    "release_date.lte":"",
    "page":1
});

// store for query
export let SimpleSearchParams= writable({
    "query":"",
    "page":1,

})

async function fetchUrl(url) {
    const response = await fetch(url);
    return await response.json();
}


// get genres
async function genres () {
    let data = await fetchUrl(genreListUrl)
    data.genres.map(x=>x["active"]=false)
    return await data.genres
}

// load movues of complicated search
export async function loadMovies(url,params) {
    let paramsArray=[]
    for (let key in params){
        if (params[key]!=""){
        paramsArray.push(key+"="+params[key])
        }
    }
    url+=paramsArray.join("&")
    console.log(url)
    let res= await fetchUrl(url)
    console.log(res)
};

