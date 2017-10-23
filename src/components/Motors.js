import React from 'react';
import MotorsList from '../containers/motor-list';
import { Row, Col } from 'reactstrap';
import ActualBoat from '../containers/actualboat';

const Motors = () => (
 <div>
  <Row>
    <Col xs="10">
         <MotorsList/>
    </Col>
    <Col xs="2">
      <ActualBoat/>
    </Col>
    </Row>

 </div>
)

export default Motors;