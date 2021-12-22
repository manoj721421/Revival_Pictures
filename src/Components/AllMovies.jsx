import React ,{useState, useEffect}from 'react';
import {useHistory} from 'react-router-dom';
import {Row,Col,Card} from 'react-bootstrap';

export default function AllMovie(){
    let history = useHistory();
    const [all,setAll] = useState([])

    useEffect(()=>{
        fetch("https://imdb-api.com/en/API/Top250Movies/k_8vvz46wi").then((response)=>{
            response.json().then((resps)=>{
                console.log(resps.items)
                setAll(resps.items)
            })
        })
    },[])

    return(
        <>
       
        <Row className="mt-2 justify-content-between mx-3 center" id="container" >
                {
                    all?.map((item)=>
                            
                            <Col xs={5} md={3} lg={2} className="px-0">
                        <Row className="justify-content-center ">
                        <Card className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem"}} onClick={()=>{history.push({pathname:"/mdata",search:item.id})}}>
                        <Card.Img src={item.image} alt="Card image" />
                       
                        <div className="row justify-content-center info">
                            <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                            <p className="m-0">{item.fullTitle}</p>
                            <small style={{fontSize:"0.6rem"}}>{item.year} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.imDbRating} . {item.imDbRatingCount}</small>
                        </div>

                        </Card>
                          </Row>
                        </Col>
                     )
                } 
               
        </Row>
        </>
    )
}

