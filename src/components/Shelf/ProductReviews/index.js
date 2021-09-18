import React from 'react';
import * as S from './styles';

// assets
import StarIcon from 'assets/icons/star.svg'
import StarFilledIcon from 'assets/icons/star-filled.svg'

const ProductReviews = ({ stars }) => {

  function ReviewStars() {

    let totalStarts = 5
    let quantityStartsCalculated = totalStarts - stars
    let emptyStar = [];
    for (let initialValue = 0; initialValue < quantityStartsCalculated; initialValue++) {
      emptyStar.push(<img key={initialValue} src={StarIcon} alt="Avaliação Vazia" />);
    }

    let starsFilled = [];
    for (let initialValue = 0; initialValue < stars; initialValue++) {
      starsFilled.push(<img key={initialValue} src={StarFilledIcon} alt="Avaliação Preenchida" />);
    }
    return (
      <>{starsFilled}{emptyStar}</>
    );
  };
  if (stars === undefined || stars === null) return null
  return (
    <S.Container>
      <ReviewStars />
    </S.Container>
  )
}

export default ProductReviews;