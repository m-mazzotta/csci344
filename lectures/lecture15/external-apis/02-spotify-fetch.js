// alternative syntax (using "then" instead of async / await):
const showSpotifyResults = (term, type, limit) => {
    const rootURL = 'https://www.apitutor.org/spotify/simple/v1/search';
    const endpoint = `${rootURL}?q=${term}&type=${type}&limit=${limit}`;
    fetch(endpoint)
        .then(response => response.json())
        .then(jsonData => {
            //console.log(`Matches for ${term} + ${type}:`, jsonData);

            for(const track of jsonData){
                console.log(track.album.image_url);
            }
        });
 };

// note that the albums might print before the tracks 
// (b/c network request is less expensive):
showSpotifyResults('Akina Nakomori', 'track', 10);
//showSpotifyResults('The Muppets', 'album', 2);