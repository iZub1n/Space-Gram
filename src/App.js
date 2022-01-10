import './App.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
import DisplayArea from './DisplayArea';
import { useFetch } from './useFetch'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


let name = "Space Gram ⭐️🔭"

const antIcon = <LoadingOutlined style={{ textAlign: 'center', fontSize: 200 }} spin />;


const url = 'https://api.nasa.gov/planetary/apod?start_date=2021-12-31&thumbs=True&api_key=aBoeJ19KQJRiiEk7AU4AakcNHKEYlvTzuy8kU3XO'

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

const App = () => {
  const {photos, loading} = useFetch(url)
  return (
    <>
  <Navbar variant="dark">
    <Container>
      <Navbar.Brand href="">
      {name}
      </Navbar.Brand>
    </Container>
  </Navbar>
  {loading? (
    <div style={{textAlign: 'center', margin: 100}}>
     <Spin style={{textAlign: 'center'}} indicator={antIcon} />
    </div>
  )
  :(
    <DisplayArea photos={photos}/>
  )}
 
</>
    
  );
}

export default App;
