import React from 'react';
import MotorsList from '../containers/motor-list';
import { Row, Col } from 'reactstrap';
import ActualBoat from '../containers/actualboat';
import Motorshowinfo from '../containers/motor-showinfo';

const Motors = () => (
 <div>
  <Row>
    <Col xs="9">
        <div>
         <MotorsList/>
        </div>
        <div>
         <Motorshowinfo/>
        </div>
    </Col>
    <Col xs="3" className="actualboat">
      <ActualBoat/>
    </Col>
    </Row>
    
 </div>
)

export default Motors;