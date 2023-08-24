//Typically we would store in {process.env.API_key}
 const API_KEY="15d7a44576dc4d25e7f7aad144a158f9";

 const requests={

    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=eng-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=eng-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,                    
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`


 };

//https://api.themoviedb.org/3/trending/all/week?api_key=15d7a44576dc4d25e7f7aad144a158f9language=eng-US
//https://api.themoviedb.org/3/movies/top_rated?api_key=15d7a44576dc4d25e7f7aad144a158f9&language=eng-US

 export default requests;
