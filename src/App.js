import logo from './logo.svg';
import './App.css'; 
import Data from './data.json'; 
import Moment from 'moment'; 
import Card from 'react-bootstrap/Card';  
import CardDeck from 'react-bootstrap/CardDeck';   
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'; 
import TextTruncate from 'react-text-truncate'; 
import { Row, Col, Grid } from 'react-bootstrap'; 
import logopic from './Prothom-Alo-logo.jpg'; 
import Figure from 'react-bootstrap/Figure'






function App() { 
  
  return ( 
   
   
<container className = "parent">  

<Figure className ="logopic">
  <Figure.Image
    width={171}
    height={180} 
    src={logopic} 

  /> 
  </Figure>

  
        
<CardDeck> 
  <div className = "card_position">
  <Card> 
    <container> 
      <Row> 
    {Data.map(post =>{  
      
      return(  
        <Col md={4} sm={6} xs={6}> 
        <div>
        <div className ="img_body">  
        <Row>
        <Col xs={12}><Card.Img variant="top" src={post.photo}/></Col>
        <Col>
        <Card.Body>
        <a href="#"><Card.Title>{post.title}/{post['sup-title']}</Card.Title></a>
          <Card.Text>
          <TextTruncate 
                    truncateText="" 
                    text = {post.description}  
                    textTruncateChild={<a href="#">......</a>}
                    />
          </Card.Text>
        </Card.Body> 
        </Col> 
         </Row> 
        </div> 
        <div classname ="card_footer">
        <Card.Footer>
          <small className="text-muted">{post.time}</small>
        </Card.Footer>  
        </div>
        </div> 
        </Col>
      )
    })} 

   </Row>  
   </container>

  </Card> 
  </div>

</CardDeck> 

 
  <container className="foot">
  <footer> 
    <p>&copy Prothom Alo</p>  
  </footer>  
  </container>         
   
</container>
  );
} 


export default App;
