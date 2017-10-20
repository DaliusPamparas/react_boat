import React, {Component} from 'react';
import{bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectBoats} from '../actions/index';
import {Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class BoatsList extends Component {

    showBoatsList () {
        return this.props.boats.map ((boat) => {
            return (
                <div className="boatlabel" >
                    
                    <Card>
                        <CardImg top width="100%" src={boat.img} alt={"our boat "+boat.name} />
                        <CardBody>
                        <CardTitle>{boat.name}</CardTitle>
                        <CardSubtitle>{boat.price} kr.</CardSubtitle>
                        <CardText>{boat.desc}</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                                      
                       
                       
        
                </div>
               
            );

        });
    }
    
    render (){
        return (
           <Row> 
                <Col xs="3">
                   
                    {this.showBoatsList ()}
                </Col>
           </Row>
        );
    }
}

function mapStateToProps (state){
  return {
     boats: state.boats
  };  
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({selectBoats: selectBoats}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BoatsList);