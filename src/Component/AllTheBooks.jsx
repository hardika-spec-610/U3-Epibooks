import { Component } from "react";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import items from "../books/history.json";
import './componentStyles.css'

class AllTheBooks extends Component{
    render() {
        return (
            <Container>
                <Row>
                    {items.map((singleBook) =>{
                        return(
                            <Col xs={12} sm={12} md={6} lg={3} className="d-flex mb-lg-4 mb-md-4 mb-sm-3 mb-xs-3" >
                                <Card>
                                    <Card.Img variant="top" src={singleBook.img} alt={singleBook.title} height="300px" />
                                    <Card.Body>
                                      <Card.Title className="text-truncate">{singleBook.title}</Card.Title>

                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                      <ListGroupItem>{singleBook.category}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body className="d-flex justify-content-between pb-0">
                                    <Card.Text className="font-weight-bold" >
                                      Price
                                    </Card.Text>
                                    <Card.Text className="price-text font-weight-bold">
                                      {singleBook.price}
                                    </Card.Text>

                                    </Card.Body>
                                </Card> 
                            </Col>
                        )
                    })}
                    
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks