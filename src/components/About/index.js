import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img } from './InfoElements'
import React from 'react';

const Info = ({ id, imgStart, topLine, description1, description2, description3, alt, img }) => {
  return (
    <>
      <InfoContainer id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle>{description1}</Subtitle>
                <Subtitle>{description2}</Subtitle>
                <Subtitle>{description3}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info;
