import React from 'react';
import * as S from './styles';
import Slider from 'react-slick'
import { useDevice } from 'react-use-device';

const InfoCardListContext = ({ infoCards, sliderSettings }) => {
  const { isTABLET, isMOBILE } = useDevice();

  const settings = {
    infinite: sliderSettings.infinite,
    autoplay: sliderSettings.autoplay,
    arrows: sliderSettings.arrows,
    dots: sliderSettings.dots,
    speed: 500,
    slidesToShow: sliderSettings.slidesToShow,
    slidesToScroll: sliderSettings.slidesToShow
  };

  return (
    <S.Container>
      <Slider {...settings}>
        {infoCards?.map((slide, key) =>
          <div key={key}>
            <div
              className="infoCardContainer"
              style={
                (isTABLET || isMOBILE) ?
                  { backgroundImage: `url(${slide.imageUrl.mobile})` }
                  :
                  { backgroundImage: `url(${slide.imageUrl.desktop})` }
              }
            >
              <div className="container">
                <div className="textContainer"
                >
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitile}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Slider>
    </S.Container>
  )
}

export default InfoCardListContext;