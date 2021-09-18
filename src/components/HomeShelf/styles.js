import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 15px;
  @media(max-width: 767px) {
    padding: 30px 7.5px;
  }
  .shelfTitle {
    width: max-content;
    font-size: 20px;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-weight: 900;
    margin-left: 15px;
      &::before {
        content: "";
        position: absolute;
        width: 50%;
        height: 4px;
        left: 0;
        bottom: 0;
        background-color: #C0C0C0;
    }
  }
  /* Fix Slick Slider */
  .slick-slide  {
    > div {
      height: 100%;
    }
  }
`;