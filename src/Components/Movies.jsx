import React , {useState,useEffect} from 'react';
import {Carousel,Row,Card,Button,Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link,Switch,useHistory} from 'react-router-dom';
import "../Style/Movies.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Movies(){
    const [toggle,setToggle] = useState([]);
    const[upcoming,setUpcoming] = useState([]);
    const[movies,setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    let caraousel_img = [
                          {
                            Name:"Pushpa:The Rise part-01",
                            Image:"  https://shikshanews.com/wp-content/uploads/Pushpa-cover.jpeg ",
                            Plot:"Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization.",
                            Genre:"Action",
                            Year:"2021",
                            imdbId:"tt9389998",
                            Duration:"2hr 30min",
                          },
                          {
                            Name:"Spider-man:No Way Home",
                            Image:" https://images.thedirect.com/media/article_full/Spider-Man-NoWayHomePoster.jpg ",
                            Plot:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
                            Genre:"Action",
                            Year:"2021",
                            imdbId:"tt10872600",
                            Duration:"2hr 28min",
                          },
                          {
                            Name:"83",
                            Image:" https://chopnews.com/wp-content/uploads/2020/03/maxresdefault.jpg	 ",
                            Plot:"On June 25, 1983, the Lord's Cricket Ground witnessed 14 men beat the twice over World Champions West Indies, putting India back onto the cricket world stage.",
                            Genre:"sports/drama",
                            Year:"2021",
                            imdbId:"tt7518786",
                            Duration:"2hr 32min",
                          },
                        ];
                        console.log(caraousel_img )
    let history = useHistory();

    useEffect(()=>{
      AOS.init({
        duration : 1500
      })
        fetch("https://api.tvmaze.com/shows").then((response)=>{
            response.json().then((resp)=>{
                setToggle(resp.slice(60,80));
                console.log(toggle);
            })
        })
  
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=52a18783ed514602a5facb15a0177e61&language=en-US&page=1").then((response)=>{
          response.json().then((resp)=>{
              setUpcoming(resp.results);
              console.log(resp);
          })
      })
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=52a18783ed514602a5facb15a0177e61&language=en-US&page=1").then((response)=>{
          response.json().then((resps)=>{
              setMovies(resps.results);
              console.log(resps.results);
          })
      })
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=52a18783ed514602a5facb15a0177e61&language=en-US").then((response)=>{
        response.json().then((resps)=>{
          console.log(resps.results);
          setPopular(resps.results);
        })
      })
    },[])

    return(
        <div className="pt-4" style={{backgroundColor: 'black'}}>
        <Carousel  indicators={true} controls={true} >
          {
            caraousel_img.map((item)=>
              <Carousel.Item interval={6000} >
              <Card  className="mx-4" style={{backgroundColor:"black"}}>
              <Row>
                <Col xs={6} md={5}>
                  <div className="justify-content-center ">
                  <p className="m-0 text">
                 {item.Name}
                  </p>
                  <small className=" text-white">{item.Genre} . {item.Duration} . {item.Year}</small><br/>
                    <small className ="hide">{item.Plot}</small> 
                    <Row className="d-flex justify-content-around mt-3 btns">
                      <Col lg={4} md={2} xs={2} className="p-0">
                        <Button variant="danger" className="" onClick ={()=>{history.push(`/mdata/${item.imdbId}`)}} ><i class="fas fa-info-circle"></i> <span className="none">Details</span></Button>
                        </Col>
                        <Col lg={4} md={2} xs={2} className="p-0 ">
                        <Button variant="outline-danger" className="  text-white"><i class="fas fa-play-circle"></i> <span className="none">Watch Trailer</span> </Button>      
                        </Col>
                        <Col lg={4} md={2} xs={2} className="p-0 ">
                        <Button variant="danger" className=""><i class="fas fa-plus"></i> <span className="none">Watchlist</span></Button> 
                        </Col>
                    </Row>   
                      </div>
                </Col>
                <Col xs={6} md={7} className = "p-0 faded">
                  <img className="c-Image" src={item.Image} alt="First slide" style={{}} />
                </Col>
                </Row>
                </Card>
              </Carousel.Item>
            )
          }
      </Carousel>

      <div>
          <Row className=" mt-5 d-flex justify-content-between  w-100">
            <Col lg={2} md={4} xs={6}>
            <p className="text-white border-bottom  mx-3">Recently Added</p>
            </Col>
            <Col  lg={2} md={2} xs={2} >
              <Row className="justify-content-end me-2"> 
                <Col lg={2} md={2} xs={2} >
                  <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><i class="fas fa-chevron-right"></i></Button>
                </Col>
              </Row>
            </Col>
            </Row>

            <div className=" justify-content-between  center pt-4 " id="container" style={{backgroundColor:"black"}}>
                {
                    upcoming?.map((item)=>
                    <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`, search:item.name})}}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                        <p className="m-0">{item.original_title}{item.original_name}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.vote_average} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.vote_count} . {item.original_language}</small>
                    </div>

                    </Card>
                    </Row>
                    </div>
                    )

                }
            </div>  
        </div>


    <div>
      <Row className=" mt-5  d-flex justify-content-between w-100">
        <Col lg={2} md={4} xs={6}>
        <h5 className="text-white border-bottom ">Upcoming Movies</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
          <Row className="justify-content-end me-2"> 
              <Col lg={2} md={2} xs={2} >
                <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><i class="fas fa-chevron-right"></i></Button>
              </Col>
            </Row>
        </Col>
      </Row>
    
      <div className=" justify-content-between  center pt-4 " id="container" style={{backgroundColor:"black"}}>
                {
                    popular?.map((item)=>
                    <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`, search:item.original_title})}}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                        <p className="m-0">{item.original_title}{item.original_name}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.vote_average} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.vote_count} . {item.original_language}</small>
                    </div>

                    </Card>
                    </Row>
                    </div>
                    )

                }
            </div>  
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
                <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.externals.imdb}`,search:item.externals.imdb})}}>
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
    
              {/* <div className="mt-2  justify-content-between center pt-3">
                {
                movies.map((item)=>
                    <Col className="mx-4">
                      <Row className="justify-content-center ">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem",borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`,search:item.id})}}>
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
              </div> */}
            <div className=" justify-content-between  center pt-4 " id="container" style={{backgroundColor:"black"}}>
                {
                    movies?.map((item)=>
                    <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`, search:item.original_title})}}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                        <p className="m-0">{item.original_title}{item.original_name}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.vote_average} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.vote_count} . {item.original_language}</small>
                    </div>

                    </Card>
                    </Row>
                    </div>
                    )

                }
            </div>  

        </div>

    </div>
    )
}
export default Movies;