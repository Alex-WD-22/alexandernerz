import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img } from './InfoElements'
import React from 'react';
import ProfileImg from "../../images/alexanderNerzProfile.webp"


const Info = () => {
  return (
    <>
      <InfoContainer id='about'>
        <InfoWrapper>
          <InfoRow >
            <Column1>
              <TextWrapper>
                <TopLine>Me, Myself & I</TopLine>
                <Subtitle>I'm a Junior Full Stack Developer based in Freiburg, Germany. Currently searching for an opportunity to work with a team, a mentor who guides me through best practices and points out my mistakes to become the best version of myself.</Subtitle>
                <Subtitle>I love innovative, fast-paced, multidisciplinary teams.</Subtitle>
                <Subtitle>Let's get in contact!</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={ProfileImg} alt='profile-picture' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info;
