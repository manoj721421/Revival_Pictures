import React , {useState,useEffect} from 'react';
import {Carousel,Row,Card,Button,Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link,Switch,useHistory} from 'react-router-dom';
import first from "../assets/dc.jpg";
import second from "../assets/flash.jpg";
import third from "../assets/things.jpg";
import "../Style/Movies.css";


function Movies(){
    const [toggle,setToggle] = useState([]);
    const[upcoming,setUpcoming] = useState([]);
    const[movies,setMovies] = useState([]);
    const [lgShow,setLgShow] = useState(false)
    let history = useHistory();




    useEffect(()=>{
        fetch("https://api.tvmaze.com/shows").then((response)=>{
            response.json().then((resp)=>{
                setToggle(resp.slice(20,32));
                console.log(toggle);
            })
        })
  
        fetch("https://api.tvmaze.com/shows").then((response)=>{
          response.json().then((resp)=>{
              setUpcoming(resp.slice(0,10));
              console.log(resp);
          })
      })
      fetch("https://imdb-api.com/en/API/MostPopularMovies/k_7si6m0ax").then((response)=>{
          response.json().then((resps)=>{
              setMovies(resps.items.slice(0,24));
              console.log(resps.items);
          })
      })
    },[])
    return(
        <div className="pt-4" style={{backgroundColor: 'black'}}>
        <Carousel  indicators={false} controls={false} >

        <Carousel.Item interval={2000} >
         <Card  className="mx-5" style={{backgroundColor:"black"}}>
         <Row>
          <Col xs={6} md={5}>
              <p className="m-0 text"> DC'S LOST ANGELS </p>
              <p className="m-0">Action . 1hr 23min . 2021</p>
              <small className ="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at </small> 
              <div className="d-flex justify-content-center mt-3">
                  <Button variant="danger" className="mx-3 px-3" onClick ={()=>{history.push("/contact")}} >  <i class="fas fa-play-circle"></i> Play</Button>
                  
                  <Button variant="outline-danger" className="mx-3 text-white"><i class="fas fa-info-circle"></i> Watch Trailer</Button>      
                  <Button variant="danger" className="mx-3"><i class="fas fa-plus"></i> Watchlist</Button> 
              </div>  
          </Col>
          <Col xs={6} md={7} className="p-0 faded">
          <img className="d-block w-100 shade" src={first} alt="First slide" style={{borderRadius:"0 10px 10px 0"}} />
          </Col>
           </Row>
           </Card>
        </Carousel.Item>


        <Carousel.Item interval={2000}>
         <Card  className="mx-5"  style={{backgroundColor:"black"}}>
         <Row>
          <Col xs={6} md={5} >
          <p className="m-0 text">
            FLASH 
          </p>
          <p className="m-0">Action . 1hr 23min . 2021</p>
              <small className ="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at </small> 
              <div className="d-flex justify-content-center mt-3">
                  <Button variant="danger" className="mx-3 px-3" onClick ={()=>{history.push("/Contact")}}><i class="fas fa-play-circle"></i> Play</Button>
                  <Button variant="outline-danger" className="mx-3 text-white"><i class="fas fa-info-circle"></i> Watch Trailer</Button>      
                  <Button variant="danger" className="mx-3"><i class="fas fa-plus"></i> Watchlist</Button> 
              </div>  
          </Col>
          <Col xs={6} md={7} className="p-0 faded ">
          <img className="d-block w-100" src={second} alt="First slide"  style={{borderRadius:"0 10px 10px 0"}} />
          </Col>
           </Row>
           </Card>
        </Carousel.Item>


        <Carousel.Item interval={2000} >
         <Card  className="mx-5" style={{backgroundColor:"black"}}>
         <Row>
          <Col xs={6} md={5}>
             <p className="m-0 text">
            STRANGER THINGS
             </p>
             <p className="m-0">Action . 1hr 23min . 2021</p>
              <small className ="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at </small> 
              <div className="d-flex justify-content-center mt-3">
                  <Button variant="danger" className="mx-3 px-3" onClick ={()=>{history.push("/contact")}} ><i class="fas fa-play-circle"></i> Play</Button>
                  <Button variant="outline-danger" className="mx-3 text-white"><i class="fas fa-info-circle"></i> Watch Trailer</Button>      
                  <Button variant="danger" className="mx-3"><i class="fas fa-plus"></i> Watchlist</Button> 
              </div>   
          </Col>
          <Col xs={6} md={7} className = "p-0 faded">
            <img className="d-block w-100" src={third} alt="First slide" style={{borderRadius:"0 10px 10px 0"}} />
          </Col>
           </Row>
           </Card>
        </Carousel.Item>

      </Carousel>

      <div>
      <Row className=" mt-5 d-flex justify-content-between">
        <Col lg={2} md={2} xs={2}>
        <h5 className="text-white border-bottom  mx-3">Upcoming Movies</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Button variant="danger">More Movies</Button>
        </Col>
        </Row>

        <Row className="mt-2 justify-content-between mx-3 center" id="container" >
                {
                    upcoming?.map((item)=>
                            
                            <Col xs={6} md={3} lg={2} className="px-3  ">
                        <Card className="bg-dark text-white mb-3 zoom1" style={{width:"12rem"}} >
                        <Card.Img src={item.image.medium} alt="Card image" />
                       
                        <div className="row justify-content-center info">
                            <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                            <p className="m-0">{item.name}</p>
                            <small style={{fontSize:"0.6rem"}}>{item.genres[0]} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.rating.average} . {item.language}</small>
                        </div>

                        </Card>
                        </Col>
                     )
                } 
               
        </Row>
        </div>



    <div>
      <Row className=" mt-5 d-flex justify-content-between">
        <Col lg={2} md={2} xs={2}>
        <h5 className="text-white border-bottom  mx-3">Recently Added</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Button variant="danger">More Movies</Button>
        </Col>
      </Row>
    
        <Row className="mt-2 justify-content-between mx-4">
        <Col xs={6} md={3} lg={2} className="p-0 zoom">
            <Card className="bg-dark text-white mb-3" style={{width:"12rem"}}>
            <Card.Img src={first} alt="Card image" />
            <Card.ImgOverlay className=""  style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5" > <i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>
          
          
          <Col  xs={6} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"12rem"}}>
            <Card.Img src={first} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}} >
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col  xs={6} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"12rem"}}>
            <Card.Img src={third} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col  xs={6} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom"  style={{width:"12rem"}}>
           
            <Card.Img src={first} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col   xs={6} md={4}lg={2}  className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"12rem"}} >
         
            <Card.Img src={second} alt="Card image" />
            <Card.ImgOverlay className="mt-0 " style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col  xs={6} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"12rem"}} >
         
            <Card.Img src={third} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>
        </Row>      
    </div>

    
    <div>
      <Row className=" mt-5 d-flex justify-content-between ">
        <Col lg={2} md={2} xs={2}>
        <h5 className="text-white border-bottom  mx-3">web Series</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Button variant="danger">More Movies</Button>
        </Col>
      </Row>
    
        <Row className="mt-2 mx-3  center">
                {
                toggle.map((item)=>
                    <Col xs={6} md={3} lg={2}  className="p-0  ">
                    <Card className="bg-dark text-white mb-3 zoom1" style={{width:"12rem"}} onClick={()=>{history.push({pathname:"/mdata",search:item.externals.imdb,id:item.id})}}>
                    <Card.Img src={item.image.medium} alt="Card image" />
                
                    <div className="row justify-content-center info" >
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                        <p className="m-0">{item.name}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.genres[0]} . {item.rating.average} . {item.language}</small>
                    </div>

                    </Card>
                    </Col>
                )

                }
                </Row>
        </div>
        <div>
      <Row className=" mt-5 d-flex justify-content-between ">
        <Col lg={2} md={2} xs={2}>
        <h5 className="text-white border-bottom  mx-3">Popular Movies</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Button variant="danger">More Movies</Button>
        </Col>
      </Row> 7853 0056 1436 3988
    
        <Row className="mt-2 mx-3  center">
                {
                movies.map((item)=>
                    <Col xs={5} md={3} lg={2}  className="p-0  ">
                    <Card className="bg-dark text-white mb-3 zoom1" style={{width:"12rem"}} onClick={()=>{history.push({pathname:"/mdata",search:item.id})}}>
                    <Card.Img src={item.image} alt="Card image" />
                
                    <div className="row justify-content-center info" >
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                        <p className="m-0">{item.title}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.year} . {item.imDbRating} . {item.imDbRatingCount}</small>
                    </div>

                    </Card>
                    </Col>
                )

                }
                </Row>
        </div>

    </div>
    )
}
export default Movies;