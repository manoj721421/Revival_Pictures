import React from "react";
import {Row, Col,Form,Button} from "react-bootstrap";
import connect from '../assets/connect.png';
import select from '../assets/select.png';
import enjoy from "../assets/popcorn.png";

function Login(){
    return(
        <div className="" style={{backgroundColor: "black"}}>
        <Row className="d-flex justify-content-center py-5">
            <Col lg={4} className="bg-danger p-5" style={{borderRadius:"15px 0 0px 15px"}}>
              <Row className="">
              <div className="d-flex my-4">
                    <img src={connect} alt="" width="70px"/>
                    <div className="mx-3 ">
                        <h3 className="m-0 text-white">Connect</h3>
                        <p>Connect To revival</p>
                    </div>
                </div>
                <div className="d-flex my-4 mx-5">
                    <img src={select} alt="" width="70px" />
                    <div className="mx-3">
                        <h3 className="m-0 text-white">Select</h3>
                        <p>Make your Sort Lsit</p>
                    </div>
                </div>
                <div className="d-flex my-5">
                    <img src={enjoy} alt="" width="70px" />
                    <div className="mx-3">
                        <h3 className="m-0 text-white">Revive</h3>
                        <p>Revive Again :)</p>
                    </div>
                </div>
              </Row>
            </Col>
            <Col xs={12} lg={4} className="bg-white" style={{borderRadius:"0 15px 15px 0"}}>
                <h5 className="text-dark px-5 mb-4 mt-4"> <span>Login</span> or <span>Sign Up </span> with your email address </h5>
                <Form className="bg-white px-5">
                    <Form.Group className="mb-3 "  controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    </Form>
            </Col>
        </Row>
        </div>
    )
}
export default Login;