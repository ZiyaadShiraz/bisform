import React from 'react';
import StoreCard from '../store-list-card/store-card.component';
import './store-list.style.css';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';

class StoreList extends React.Component {
  constructor() {
    super();
    this.state = {
      sell: [
        {
          category: 'Fashion',
          stores: [
            {
              name: 'Haske Collections',
              rating: 5,
              description:
                'Get your amazing fabrics from haske collections. Quality is our hall mark',
              imgUrl: 'https://posterstore.eu/images/zoom/peytil-rose-fur.jpg',
            },
            {
              name: 'Vogue',
              rating: 3.2,
              description:
                'At vogue, we obtain the best fashion designs from all around the world',
              imgUrl:
                'https://images-na.ssl-images-amazon.com/images/I/51grgAETm-L._AC_SL1164_.jpg',
            },
          ],
        },
        {
          category: 'Tech',
          stores: [
            {
              name: 'Parinjani',
              rating: 4,
              description: 'Contact us for your quality mobile phones',
              imgUrl: 'https://i.ytimg.com/vi/SV4W1DEdW5Y/maxresdefault.jpg',
              storeLink: '',
            },
            {
              name: 'Hilson Computers',
              rating: 4,
              description:
                'We are the home of affordable laptors, phones, and all your technology needs',
              imgUrl:
                'https://www.computersplus.com/wp-content/uploads/image_jpg_0.img_.jpg',
              storeLink: '',
            },
          ],
        },
        {
          category: 'Sports',
          stores: [
            {
              name: 'EA Sports',
              rating: 5,
              description: 'We guarantee you durable sports products',
              imgUrl:
                'https://mms.businesswire.com/media/20210202005629/en/856294/5/4874400_EA_SPORTS_logo.jpg',
              storeLink: '',
            },
            {
              name: 'Kalaamba Sports',
              rating: 3.2,
              description:
                'We provide the best products for your sporting needs.',
              imgUrl: 'https://www.appsnewyork.com/blog/admin/207838500.jpg',
              storeLink: '',
            },
            {
              name: 'Nike',
              rating: 5,
              description:
                'As the official sports-wear brand of the NBA, this is quality you can trust!.',
              imgUrl:
                'https://static.nike.com/a/images/w_1536,c_limit/9de44154-c8c3-4f77-b47e-d992b7b96379/image.jpg',
              storeLink: '',
            },
            {
              name: 'Valance',
              rating: 5,
              description:
                'We provide you with premium sports wear to meet all your sporting needs!!!',
              imgUrl:
                'https://i.pinimg.com/originals/9c/d4/0f/9cd40fa96abeb9d8e2cd371ef283fc70.jpg',
              storeLink: '',
            },
          ],
        },
      ],
    };
  }
  componentDidMount() {
    // this is where i make the ajax call to get the store list.
  }

  render() {
    return (
      <div className='home-page-stores-div' style={{ textAlign: 'center' }}>
        {this.state.sell.map((section) => {
          //in here, i loop through the main sections: e.g sell section, services section.
          return (
            <div>
              <div className='section-heading'>
                <Slide left>
                  <hr className='category-name-rule' />
                </Slide>
                <Flip bottom>
                  <h3 className='category-name' style={{ textAlign: 'center' }}>
                    {section.category}
                  </h3>
                </Flip>
                <Slide right>
                  <hr className='category-name-rule' />
                </Slide>
              </div>

              <Container fluid>
                <Fade bottom cascade>
                  <Row>
                    {section.stores.map((store) => {
                      //in here, i take the store in each section and add it to a div.
                      return (
                        <Col xs={12} sm={6} md={4} lg={3}>
                          <StoreCard
                            category={section.category}
                            name={store.name}
                            posterImage={store.imgUrl}
                            rating={store.rating}
                            description={store.description}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Fade>
              </Container>
            </div>
          );
        })}
      </div>
    );
  }
}

// function StoreLists(props) {
//   return (

//     //map through the sell array that is sent her.
//   );
// }

export default StoreList;
