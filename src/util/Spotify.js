
//client id: 9b0c499f6c3b4090b759e77268deeaf4
//client secret: cfbf8ed487e44220b6fb6ee2a3127b1a

let accessToken;

Spotify = {

    getAccessToken(){
        if(accessToken){
            return accessToken;
        }
    }

}

export default Spotify;