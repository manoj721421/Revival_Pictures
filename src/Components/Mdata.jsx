import React , {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Row,Col,Button} from 'react-bootstrap';
import "../Style/Mdata.css"

export default function Mdata(props){
    let history = useHistory();
     const [src, setSrc] = useState('https://www.omdbapi.com/?i='+history.location.search.slice(1)+'&plot=short&apikey=9f5e5150')
     const [data,setData] = useState({});
     const [url,setUrl] = useState('https://api.tvmaze.com/shows/'+history.location.id+'/seasons')
    let BaseUrl = {src};
    let baseUrl = {url};
    console.log(history.location.id);
    console.log(baseUrl);


    useEffect(()=>{
    console.log(BaseUrl);
        fetch(BaseUrl.src).then((response)=>{
            response.json().then((resp)=>{
                console.log(resp);
                setData(resp);
                console.log(data)
            })
        })
        fetch(baseUrl.url).then((response)=>{
            response.json().then((resps)=>{
                console.log(resps);
                setUrl(resps)
            })
        })

    },[])
    return(
        <>
        <div className="bg " style={{backgroundImage: `url(${data.Poster})`, backgroundRepeat:' no-repeat',backgroundPosition: 'center', backgroundSize: 'cover'}}>
              <Row className="py-3" style={{backgroundColor: 'black', opacity:0.9}}>
              <Col xs={12}  md={6} className="p-0 py-5">
                    <Row className=" px-5 ">
                        <p className="text-white display-2 mb-3 bold" >{data.Title}</p>
                        <p className="mb-3 text-secondary" style={{textAlign: 'center'}}>{data.Plot}</p>   
                        <ul className=" d-flex justify-content-center ">
                            <li className="text-danger">Overview</li>
                            <li>Episodes</li>
                            <li>Trailer&More</li>
                            <li>Details</li>
                            <li>More..</li>
                        </ul>
                        <div>
                            <h5 className="m-0 d-flex px-3 text-white">Genre : {data.Genre}</h5>
                            
                            <div className="d-flex px-3 mt-3">
                                <h3 className="  text-danger">{data.Rated}</h3>
                                <h3 className=" px-5 text-white ">{data.Year}</h3>
                                <h3 className="  text-white">Ratings-{data.imdbRating}</h3>
                            </div>
                        </div>
                        <div className="d-flex px-4 mt-5">
                            <Button variant="danger" className="px-5 rounded-pill" onClick={()=>{history.push({pathname:"/contact",search:data.imdbID})}}>Watch Now</Button>
                            <Button variant="outline-danger mx-3 px-4" className="rounded-pill text-white">+ My List</Button>
                        </div>
                        
                    </Row>
              </Col>
              <Col  className="p-0">
                    <div className="mt-5 pt-2">
                        <img src={data.Poster} alt="" style={{opacity:"1"}} />
                    </div>
              </Col>
        </Row>
          </div>
        
        </>
    )
}