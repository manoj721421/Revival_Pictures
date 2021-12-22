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
              <Row className="py-4 mx-0" style={{backgroundColor: '#121212', opacity:0.9,width: '100%'}}>
              <Col xs={12}  md={6} className="p-0 px-5 py-5">
                    <Row className=" px-5 ">
                        <h1 className="text-white mb-3 bold" >{data.Title}</h1>
                       
                       <Col >
                       {/* <ul className=" d-flex justify-content-center px-0 ">
                            <li className="text-danger">Overview</li>
                            <li>Episodes</li>
                            <li>Trailer</li>
                            <li>Details</li>
                            <li>More</li>
                        </ul> */}
                        <p className="mb-3 text-secondary" style={{textAlign: 'center'}}>{data.Plot}</p>   
                       </Col>  
                        <div>
                            <div className="d-flex text-white">
                            <h5 className="m-0  px-2 "><span className="text-danger">Genre : </span>{data.Genre}</h5>
                            <h5><span className="text-danger">Playtime:</span> {data.Runtime}</h5>
                            </div>
                            
                            <Row className="text-white mt-4">
                            <Col>
                            <div>
                                <h4>Actors</h4>
                                <p className="m-o">{data.Actors}</p>
                            </div>
                            </Col>
                            <Col>
                            <div>
                                <h4>Director</h4>
                                <p className="m-o">{data.Director}</p>
                            </div>
                            </Col>
                            <Col>
                            <div>
                                <h4>Writer</h4>
                                <p className="m-o">{data.Writer}</p>
                            </div>
                            </Col>
                         </Row>

                            <div className="d-flex px-3 ">
                                <h5 className="  text-danger">{data.Rated}</h5>
                                <h5 className=" px-5 text-white ">{data.Year}</h5>
                                <h5 className="  text-white">Ratings-{data.imdbRating}<i class="fas fa-heart text-danger mt-1 mx-1"></i></h5>
                            </div>
                        </div>
                       
                        <div className="d-flex px-4 mt-3">
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