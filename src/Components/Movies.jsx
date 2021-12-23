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
              setUpcoming(resp.slice(0,12));
              console.log(resp);
          })
      })
      fetch("https://imdb-api.com/en/API/MostPopularMovies/k_8vvz46wi").then((response)=>{
          response.json().then((resps)=>{
              setMovies(resps.items.slice(0,20));
              console.log(resps.items);
          })
      })
    },[])
    return(
        <div className="pt-4" style={{backgroundColor: 'black'}}>
        <Carousel  indicators={false} controls={false} >

            <Carousel.Item interval={6000} >
            <Card  className="mx-4" style={{backgroundColor:"black"}}>
            <Row>
              <Col xs={6} md={5}>
                <div className="justify-content-center ">
                <p className="m-0 text">
                STRANGER THINGS
                </p>
                <small className=" text-white">Action . 1hr 23min . 2021</small><br/>
                  <small className ="hide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at </small> 
                  <Row className="d-flex justify-content-around mt-3 btns">
                    <Col lg={3} md={2} xs={2} className="p-0">
                      <Button variant="danger" className="" onClick ={()=>{history.push("/contact")}} ><i class="fas fa-play-circle"></i> <span className="none">Play</span></Button>
                      </Col>
                      <Col lg={4} md={2} xs={2} className="p-0 ">
                      <Button variant="outline-danger" className="  text-white"><i class="fas fa-info-circle"></i> <span className="none">Watch Trailer</span> </Button>      
                      </Col>
                      <Col lg={3} md={2} xs={2} className="p-0 ">
                      <Button variant="danger" className=""><i class="fas fa-plus"></i> <span className="none">Watchlist</span></Button> 
                      </Col>
                  </Row>   
                    </div>
              </Col>
              <Col xs={6} md={7} className = "p-0 faded">
                <img className=" " src={first} alt="First slide" style={{borderRadius:"0 10px 10px 0",width:"100%"}} />
              </Col>
              </Row>
              </Card>
            </Carousel.Item>


            <Carousel.Item interval={6000} >
            <Card  className="mx-4" style={{backgroundColor:"black"}}>
            <Row>
              <Col xs={6} md={5}>
                <div className="justify-content-center ">
                <p className="m-0 text">
                STRANGER THINGS
                </p>
                <small className=" text-white">Action . 1hr 23min . 2021</small><br/>
                  <small className ="hide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at </small> 
                  <Row className="d-flex justify-content-around mt-3 btns">
                    <Col lg={3} md={2} xs={3} className="p-0">
                      <Button variant="danger" className=" px-2  " onClick ={()=>{history.push("/contact")}} ><i class="fas fa-play-circle"></i> <span className="none">Play</span></Button>
                      </Col>
                      <Col lg={4} md={2} xs={3} className="p-0 ">
                      <Button variant="outline-danger" className="  text-white"><i class="fas fa-info-circle"></i> <span className="none">Watch Trailer</span></Button>      
                      </Col>
                      <Col lg={3} md={2} xs={3} className="p-0 ">
                      <Button variant="danger" className=""><i class="fas fa-plus"></i> <span className="none">Watchlist</span></Button> 
                      </Col>
                  </Row>   
                    </div>
              </Col>
              <Col xs={6} md={7} className = "p-0 faded">
                <img className=" " src={second} alt="First slide" style={{borderRadius:"0 10px 10px 0",width:"100%"}} />
              </Col>
              </Row>
              </Card>
            </Carousel.Item>


            <Carousel.Item interval={6000} >
            <Card  className="mx-4" style={{backgroundColor:"black"}}>
            <Row>
              <Col xs={6} md={5}>
                <div className="justify-content-center ">
                <p className="m-0 text">
                STRANGER THINGS
                </p>
                <small className=" text-white">Action . 1hr 23min . 2021</small><br/>
                  <small className ="hide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at </small> 
                  <Row className="d-flex justify-content-around mt-3 btns">
                    <Col lg={3} md={2} xs={3} className="p-0">
                      <Button variant="danger" className=" px-2  " onClick ={()=>{history.push("/contact")}} ><i class="fas fa-play-circle"></i> <span className="none">Play</span></Button>
                      </Col>
                      <Col lg={4} md={2} xs={3} className="p-0 ">
                      <Button variant="outline-danger" className="  text-white"><i class="fas fa-info-circle"></i> <span className="none">Watch Trailer</span></Button>      
                      </Col>
                      <Col lg={3} md={2} xs={3} className="p-0 ">
                      <Button variant="danger" className=""><i class="fas fa-plus"></i> <span className="none">Watchlist</span></Button> 
                      </Col>
                  </Row>   
                    </div>
              </Col>
              <Col xs={6} md={7} className = "p-0 faded">
                <img className=" " src={third} alt="First slide" style={{borderRadius:"0 10px 10px 0",width:"100%"}} />
              </Col>
              </Row>
              </Card>
            </Carousel.Item>

      </Carousel>

      <div>
      <Row className=" mt-5 d-flex justify-content-between  w-100">
        <Col lg={2} md={4} xs={6}>
        <p className="text-white border-bottom  mx-3">Upcoming Movies</p>
        </Col>
        <Col  lg={2} md={2} xs={2} >
          <Row className="justify-content-end me-2"> 
            <Col lg={2} md={2} xs={2} >
              <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><i class="fas fa-chevron-right"></i></Button>
            </Col>
          </Row>
        </Col>
        </Row>

        <div className="mt-2 justify-content-between center pt-3" id="container" >
                {
                    upcoming?.map((item)=>
                            
                            <div  className="mx-4">
                        <Row className="justify-content-center  ">
                        <Card className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem",borderRadius:"15px"}} >
                        <Card.Img src={item.image.medium} alt="Card image" style={{borderRadius:"15px"}} />
                       
                        <div className="row justify-content-center info">
                            <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                            <p className="m-0">{item.name}</p>
                            <small style={{fontSize:"0.6rem"}}>{item.genres[0]} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.rating.average} . {item.language}</small>
                        </div>

                        </Card>
                          </Row>
                        </div>
                     )
                } 
               
        </div>
        </div>



    <div>
      <Row className=" mt-5 mx-0 d-flex justify-content-between w-100">
        <Col lg={2} md={4} xs={6}>
        <h5 className="text-white border-bottom ">Recently Added</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Row className="justify-content-end me-2"> 
            <Col lg={2} md={2} xs={2} >
              <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><i class="fas fa-chevron-right"></i></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    
        <Row className="mt-2 justify-content-around mx-0">
        <Col xs={5} md={3} lg={2} className="p-0 zoom">
            <Card className="bg-dark text-white mb-3" style={{width:"11rem"}}>
            <Card.Img src={first} alt="Card image" />
            <Card.ImgOverlay className=""  style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5" > <i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>
          
          
          <Col  xs={5} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"11rem"}}>
            <Card.Img src={first} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}} >
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col  xs={5} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"11rem"}}>
            <Card.Img src={third} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col  xs={5} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom"  style={{width:"11rem"}}>
           
            <Card.Img src={first} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col   xs={5} md={4}lg={2}  className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"11rem"}} >
         
            <Card.Img src={second} alt="Card image" />
            <Card.ImgOverlay className="mt-0 " style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>

            <Col  xs={5} md={4} lg={2} className="p-0">
            <Card className="bg-dark text-white mb-3 zoom" style={{width:"11rem"}} >
         
            <Card.Img src={third} alt="Card image" />
            <Card.ImgOverlay className="mt-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
               
                <Card.Title className="mt-5"><i class="far fa-play-circle line"></i> Card title</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>
        </Row>      
    </div>

    
    <div>
    <Row className=" mt-5 d-flex justify-content-between  w-100">
        <Col lg={2} md={4} xs={6}>
        <h5 className="text-white border-bottom  mx-3">Web Series</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Row className="justify-content-end me-2"> 
            <Col lg={2} md={2} xs={2} >
              <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><i class="fas fa-chevron-right"></i></Button>
            </Col>
          </Row>
        </Col>
        </Row>
    
        <div className="mt-2 justify-content-between center pt-3   " id="container">
                {
                toggle.map((item)=>
                <div  className="mx-4">
                <Row className="justify-content-center ">
                <Card className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:"/mdata",search:item.externals.imdb})}}>
                <Card.Img src={item.image.medium} alt="Card image" style={{borderRadius:"15px"}} />
               
                <div className="row justify-content-center info">
                    <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                    <p className="m-0">{item.name}</p>
                    <small style={{fontSize:"0.6rem"}}>{item.genres[0]} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.rating.average} . {item.language}</small>
                </div>

                </Card>
                  </Row>
                </div>
                )

                }
                </div>
        </div>




        <div >
        <Row className=" mt-5 d-flex justify-content-between  w-100">
        <Col lg={2} md={4} xs={6}>
        <h5 className="text-white border-bottom  mx-3">Popular Movies</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Row className="justify-content-end me-2"> 
            <Col lg={2} md={2} xs={2} >
              <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><i class="fas fa-chevron-right"></i></Button>
            </Col>
          </Row>
        </Col>
        </Row>
    
        <div className="mt-2  justify-content-between center pt-3">
                {
                movies.map((item)=>
                    <Col className="mx-4">
                      <Row className="justify-content-center ">
                    <Card className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem",borderRadius:"15px"}} onClick={()=>{history.push({pathname:"/mdata",search:item.id})}}>
                    <Card.Img src={item.image} alt="Card image" style={{borderRadius:"15px"}}/>
                
                    <div className="row justify-content-center info" >
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                        <p className="m-0">{item.title}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.year} . <i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.imDbRating} . {item.imDbRatingCount}</small>
                    </div>

                    </Card>
                    </Row>
                    </Col>
                )

                }
                </div>
        </div>

    </div>
    )
}
export default Movies;