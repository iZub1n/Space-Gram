import './App.css';
import { Row, Col} from 'antd';
import Photo from './Photo';

let name = "Space Gram ⭐️🔭"

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

function DisplayArea(props) {
  let photos = props.photos

  return (
    <>
  <div className="DisplayArea" >
  <Row>
        {photos.map((photo, index) => {
          return (
            <Col  key={`${index}`} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                     <Photo {...photo} />
          </Col>

          )
        })}
    </Row>
     
  </div>
</>
    
  );
}

export default DisplayArea;
