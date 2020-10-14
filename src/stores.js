import { writable } from 'svelte/store'

export const API_KEY = process.env.API_KEY;

const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US&language=en-US&sort_by=popularity.desc&`;


const loadGenres=async ()=>{
    let res = await fetch(genreListUrl);
    res = await res.json();
    await res.genres.map(x => (x["active"] = false));
    return await res.genres
}

export let result = writable([])

export let genres=writable(loadGenres())

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

// store for query
export let SimpleSearchParams= writable({
    "query":"",
    "page":1,

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
    res = await [url,res]
    await result.set(res)
};

