
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements'
import { motion } from "framer-motion"
import React from 'react';

const Info = ({lightBg, id, imgStart, topLine, darkText, description1, description2, description3, alt, img}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                

                <Subtitle darkText={darkText}>{description1}</Subtitle>
                
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
            
   
  
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
              
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
