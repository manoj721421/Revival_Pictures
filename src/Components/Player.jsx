import React , {useState, useEffect}from 'react';
import  {useHistory} from "react-router-dom";


export default function Player(props){
    let history =  useHistory();
    console.log(history)
    const [imdb,setImdb] = useState('https://autoembed.xyz/movie/imdb/'+history.location.search.slice(1))
    return(
        <>
        <iframe src={imdb} width="100%" height="600px" frameborder="0" allowfullscreen></iframe>
            
    </>
    )
}
