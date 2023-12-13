// NewArrivals.js

import React from 'react';
// import image from './app/src/images/90.jpeg'
import { Container, Row, Col, Card } from 'react-bootstrap';

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 1,
      name: 'Paulo Coelho',
      bio: 'Paulo Coelho is irrefutably of the best writers of late circumstances, offering more than 100 million books in no less than 150 nations globally. Paulo Coelho has met with a considerable measure of progress; his books have been generally decipherd in various dialects, winning him the lofty Guinness World Record for most interpreted book by a living writer and has gotten much respect.Be that as it may, it ought to be noticed that Coelho was not Need . ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KVfe54FW0FCRlew24qFb0vqNR30TDlz89RCGYiuhZGq779Kr',
    },
    {
      id: 2,
      name: 'Vikram Seth ',
      bio: 'Vikram Seth is among the most observed Indian authors and writers. He was conceived on twentieth of June 1952 in Kolkata to Leila, a court judge, and Prem Seth, a shoe organization official. He has his underlying foundations in Punjab. He voyaged a cnsiderable measure with his family as a kid from Batanagar to Danpur to London.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Vikram_Seth%2C_in_Oxfordshire_%28cropped%29.jpg/640px-Vikram_Seth%2C_in_Oxfordshire_%28cropped%29.jpg',
    },
    {
      id: 3,
      name: 'Arundhati Roy',
      bio: 'Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India. Her parents were Rajib Roy, a Bengali Hindu tea plantation anager from Calcutta and Mary Roy, a Malayali Syrian Christian women s rights activist from Kerala',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdd1qwdHSMaxrDsh3ok8zzu6agSHjNFyCa-rK8zxX7OqEPzTd'    },
     {
      id: 4,
      name: 'Shashi Tharoor',
      bio:'Shashi Tharoor is an individual from the Indian Parliament from the Thiruvananthapuram supporters in Kerala. He beforehand filled in as the United Nations Under-Secretary General for Communications and Public Information and as the Indian Ministe of State for External Affairs. He is likewise a productive creator, writer, columnist and a human rights advocate. Tharoor has composed various books in English. A large portion of his artistic manifestations are focused on Indian subjects towards india congress',
      image:'https://static.toiimg.com/photo/76180117.cms'},
      {
        id:5,
       name:'SIDNEY SHELDON',
       bio:'He was one of the great writer I ever follow. His most of the books are on romance and thriller. In his writing, he incorporated with great sense of awareness to the situation. I did not stick heavily to the detailing of the places .',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE5W_lxI3dSglzleNfgaX2wieEDm9bYvFYNT7ZaCAvx_aTFBMX'},
      {
        id:6,
       name:'Gayle Forman',
       bio:'Gayle Forman is an American young adult fiction author. She was born in June 5, 1978 in in Los Angeles. Her best known novel is If I Stay which topped the New York bestseller list for young adult fiction category. ',
      image: 'https://s3.amazonaws.com/ArchiveImages/SLJ/2014/07/gayle-foreman.jpg'},
      {
        id:7,
       name:' Erich Wolf Segal ',
       bio:'An American author, screenwriter, and educator Erich Wolf Segal (16 June, 1937- 17 January, 2010) shot to fame as the author of Love Story . The tragic novel was later adapted into a motion picture which was also a major hit. ',
      image: 'https://images.gr-assets.com/authors/1202419115p5/15516.jpg'},
      
      {
        id:8,
       name:'R.K. Narayan',
       bio:'Rasipuram Krishnaswami Iyar Narayanaswami otherwise called R. K. Narayan was a twentieth century Indian creator. Conceived on October 10, 1906, in Madras (Chennai), he was the child of a school dean. He spent a large portion of his adolescence under is maternal grandma supervision .',
      image: 'https://upload.wikimedia.org/wikipedia/ml/thumb/f/f1/RKNarayan.jpg/220px-RKNarayan.jpg'},



     
  ];

  return (
    <Container>
      <h2>Featured Authors</h2>
      <img src='' />
      <Row>
        {newArrivals.map((author) => (
          <Col key={author.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={author.image} />
              <Card.Body>
                <Card.Title>{author.name}</Card.Title>
                <Card.Text>{author.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewArrivals;
