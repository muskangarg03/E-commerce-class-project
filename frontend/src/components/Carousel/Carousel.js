import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const items = [
  {
    image:
      'https://th.bing.com/th/id/R.eeca6325f1e79e533f35110785c7f4eb?rik=fBq7C7gqqJPe4A&riu=http%3a%2f%2fwww.codelist.cc%2fuploads%2fposts%2f2016-05%2f1464240733_sale.jpg&ehk=%2bOPOYkUf3y3hKT4zIaeMVgs4uHazmA5Ul7wTqvVYRPY%3d&risl=&pid=ImgRaw&r=0',
    // title: 'Item 1',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:
      'https://img.freepik.com/vecteurs-libre/nouvelle-illustration-arrivee-banniere_253396-247.jpg?size=626&ext=jpg',
    // title: 'Item 2',
    // description:
    //   'Nulla facilisi. Sed euismod erat sed ipsum iaculis, et mollis metus facilisis.',
  },
  {
    image:
      'https://i.pinimg.com/originals/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg',
    // title: 'Item 3',
    // description:
    //   'Suspendisse potenti. Etiam in libero in turpis consectetur hendrerit.',
  },
];
class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // enable autoplay
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} className="img-size" />
              {/* <h3>{item.title}</h3>
              <p>{item.description}</p> */}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
