import React,{Component} from "react";
import {Container,Row,Col,Button,Badge, ButtonGroup, Breadcrumb,Card} from "react-bootstrap";
class App extends Component{
  render(){
    return(
      <div>
      <Container>
        <br/>
        <Row>
            <Col >Website React bootstrap</Col>
            <Col md="auto">
              <ButtonGroup className="me-2" aria-label="First Group">
                <Button variant="primary">
                Notification <Badge bg="light" style={{color:"black"}}>9</Badge>
                </Button>
                <Button variant="primary">
                  Messages <Badge bg="light" style={{color:"black"}}>9</Badge>
                </Button>
              </ButtonGroup>
            </Col>
            <Col xs lg="2">
              <img width={32} height={32}  src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt="andreas" />Andreas
            </Col>
       </Row>
       <br/>
       <Row>
       <Col>{' '}</Col>

        <Col xs={4}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
            <Breadcrumb.Item href="/" active>Bola</Breadcrumb.Item>
         </Breadcrumb>
        </Col>
       </Row>
       <br/>

       <Row>
        <Col>
          <Card style={{width: '18rem', height:'30rem'}}>
            <Card.Img width="100px" height="180px" variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600/100px180"/>
            <Container>
            <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
            <Card.Text>
              Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pamungkas grup K.
            </Card.Text>
            <Button variant="primary">Read More</Button>
            <br/>
            </Container>
          </Card>
        </Col>
        <Col>
        <Card style={{width: '18 rem',height:'30rem'}}>
          <Card.Img width="100px" height="180px" variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100."/>
          <Container>
          <Card.Title> Diego Godin Ukir Rekor Spesial Lawan Thailand </Card.Title>
          <Card.Text>
            Godin Sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas thailand di final Piala Tiongkok. Diego Godin boleh berbangga setelah resmi menjadi.
          </Card.Text>
          <Button width="100px" height="180px" variant="primary">Read More</Button>
          </Container>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '18 rem', height:'30rem'}}>
          <Card.Img  width="100px" height="180px" variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600./100px180"/>
          <Container>
          <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint Germain</Card.Title>
          <Card.Text>
            Ayah sang pemain bintang Brazil berusaha meredam rumor keterkaitan Madrid. Neymar sedang berdiskusi dengan Paris Saint germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.
          </Card.Text>
          <Button variant="primary">Read More</Button>
          </Container>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '18 rem',height:'30rem'}}>
          <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600./100px180"/>
          <Container>
          <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
          <Card.Text>
            Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimistis. Ross Barkley merasa inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarnag ini.
          </Card.Text>
          <Button variant="primary">Read More</Button>
          </Container>
        </Card>
        </Col>
      </Row>

   </Container>
      </div>
    );
  }
}
export default App;
