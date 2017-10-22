<Container fluid>
<Row>
    <Col  xs="12">
        <h1>bygg din boat </h1>
    </Col>
    
</Row>
</Container>
<Container >
<Row>
    <Col  xs="3">
    <Link to='/'>Hem</Link>
    </Col>
    <Col  xs="3">
    <Link to='/motors'>Motors</Link>
    </Col>
    <Col  xs="3">
    <Link to='/tillbehor'>Tillbehör</Link>
    </Col>
    <Col  xs="3">
    <Link to='/farjer'>Färjer</Link>
    </Col>
    
</Row>
</Container>
<Container >
<Row>
    <Col  xs="12">
    <Switch>
      <Route exact path='/' component={Hem}/>
      <Route path='/motors' component={Motors}/>
      <Route path='/tillbehor' component={Tillbehor}/>
      <Route path='/farjer' component={Farjer}/>
    </Switch>
    </Col>
    
</Row>
</Container>