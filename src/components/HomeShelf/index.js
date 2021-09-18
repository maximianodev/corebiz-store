import React, { useLayoutEffect, useState } from 'react';
import Slider from 'react-slick';

// styles
import * as S from './styles';

// components
import Shelf from 'components/Shelf';
import { getProducts } from 'services/getProducts';

const sliderSettings = {
  infinite: false,
  autoplay: true,
  arrows: true,
  dots: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

function HomeShelf() {
  const [productContext, setProductContext] = useState()

  useLayoutEffect(() => {
    getProducts().then(resp => setProductContext(resp.data)).catch(resp => setProductContext())
  }, [])

  if (!productContext) return null
  return (
    <S.Container className="container">
      <h3 className="shelfTitle">Mais Vendidos</h3>
      <Slider {...sliderSettings}>
        {productContext.map((product, key) =>
          <Shelf data={product} key={key} />
        )}
      </Slider>
    </S.Container>
  )
}

export default HomeShelf;
