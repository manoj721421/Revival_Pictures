import React , {useEffect,useState} from 'react';
import {useHistory , useParams} from 'react-router-dom';
import {Row,Col,Button} from 'react-bootstrap';
import "../Style/Mdata.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mdata(props){
    let history = useHistory();
    let {id} = useParams();
    console.log(id);
     const [src, setSrc] = useState('https://www.omdbapi.com/?i='+id+'&plot=short&apikey=9f5e5150')
     const [data,setData] = useState({});
     const [url,setUrl] = useState('https://api.tvmaze.com/shows')
    let BaseUrl = {src};
    let baseUrl = {url};
    console.log(baseUrl);


    useEffect(()=>{
        AOS.init({   
            duration: 2000
          })
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
        <div className="bg" style={{backgroundImage: `url(${data.Poster})`, backgroundRepeat:' no-repeat',backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <Row className="py-5 mx-0 blurry" >
            <Col  className="p-0">
                        <div className="mt-5 pt-2" data-aos="zoom-in"
     >
                            <img src={data.Poster} alt="" style={{opacity:"1",filter:"opacity(100%)"}} />
                        </div>
                </Col>
                <Col xs={12}  md={6} className="p-0 px-4 py-5">
                    <Row className=" px- ">
                        <h1  className="text-white mb-3 bold" >{data.Title}</h1>
                       
                            <Col >
                            
                                <p  className="mb-3 plot " >{data.Plot}</p>   
                            </Col>  

                            <div>
                                <div className="d-flex text-white text-center">
                                <h5 className="m-0  px-2 ">&nbsp;&nbsp;{data.Genre}</h5> |
                                <h5>&nbsp; {data.Runtime}</h5>
                            </div>
                            
                                
                            <Row className="text-white mt-3">
                                <Col>
                                    <div>
                                        <h5>Actors</h5>
                                        <small className="m-o">{data.Actors}</small>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <h5>Director</h5>
                                        <small className="m-o">{data.Director}</small>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <h5>Writer</h5>
                                        <small className="m-o">{data.Writer}</small>
                                    </div>
                                </Col>
                            </Row>

                            <div className="d-flex px-3 mt-2">
                                <h4 className="  text-danger">{data.Rated}</h4>
                                <h4 className=" px-5 text-white ">{data.Year}</h4>
                                <h4 className="  text-white"><i class="fas fa-star text-warning"></i> {data.imdbRating} <i class="fab fa-imdb text-warning"></i></h4>
                            </div>
                        </div>
                       
                        <div className="d-flex px-4 mt-5">
                            <Button variant="danger" className="px-5 rounded-pill" onClick={()=>{history.push({pathname:"/contact",search:data.imdbID})}}>Watch Now</Button>
                            <Button variant="outline-danger mx-3 px-4" className="rounded-pill text-white">+ My List</Button>
                        </div>

                        
                    </Row>
                </Col>
              
            </Row>
          </div>

          
        
        </>
    )
}