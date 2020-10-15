import { writable } from 'svelte/store'

export const API_KEY = process.env.API_KEY;

const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US&`;


const loadGenres=async ()=>{
    let res = await fetch(genreListUrl);
    res = await res.json();
    await res.genres.map(x => (x["active"] = false));
    return await res.genres
}

// A store with the search movie results , populates by loadMovies function.
// The first item is the Url , the second is the movies , the third is the params.
export let result = writable([])

// a store populates by genres.
export let genres=writable(loadGenres())

// a store wich says if modal is open, what his size , and what his name.
export let modalOpen=writable({
                            open:false,
                            name:"",
                            size:undefined
                        })


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

// store for simple text query
export let simpleSearchParams= writable({
    "query":"",
    "page":1,

})

export let basicSearchParams=writable({
    page:1,
    "sort_by":""

})

export async function fetchUrl(url) {
    const response = await fetch(url);
    return await response.json();
}


export async function loadMovies(url,params) {
    let paramsArray=[]
    for (let key in params){
        if (params[key]!=""){
        paramsArray.push(key+"="+params[key])
        }
    }
    url+=paramsArray.join("&")
    // console.log(url)
    let res= await fetchUrl(url)
    // console.log(res)
    res = await [url,res,params]
    console.log(res)
    await result.set(res)
};

