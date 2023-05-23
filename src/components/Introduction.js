import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.body`

   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: center;
   gap: 10px;
   position: relative;
   background: #ffffff;
   color: #3D4757;

   h1{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #1f242c;
  }
 
  p{
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 24px;
   text-align: center;
   color: #3D4757;
  }

  ul{
    list-style: none;
 }
 
 section{
    padding: 50px;
 }

`
const StyledSectionTop = styled.section`
align-items: center;
justify-content: center;
text-align: center;
padding: 30px 20px;
gap: 10px;
`

const StyledProfileImg = styled.img`
width: 120px;
height: 120px;
`
const StyledHeading = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #1f242c;
`
const StyledVerified = styled.img`
width: 22.75px;
height: 22.75px;
`
const StyledInterview = styled.p `
text-decoration-line: underline;
`
const StyledIntroBtn = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 16px 28px;
gap: 12px;
`

const StyledButton1 = styled.button`
   color: white;
   padding: 16px 28px;
   width: 268px;
   height: 56px;
   background: #1ab265;
   box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
   border-radius: 8px
`
const StyledButton2 = styled.button`
  color: #3D4757;
  padding: 16px 28px;
  width: 268px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`
const StyledButton3 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
padding: 16px 28px;
gap: 12px;
width: 215px;
height: 56px;
background: #1b1d3e;
box-shadow: 0px 1px 2px rgba(10, 24, 40, 0.05);
border-radius: 8px;
color: white;
font-size: 16px;
line-height: 24px;
font-weight: 600;
`

const StyledMiddle = styled.section`
align-items: center;
justify-content: center;
padding: 56px 84px;
gap: 10px;
background: #f7f7f7;
border-radius: 8px;
`

const StyledMySpecialties = styled.div`

`

const StyledEducation = styled.div`

`

const StyledBtnDiv =styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: flex-start;
padding: 20px;
gap: 16px;
`

const StyledTagsDiv = styled.div`
display: flex;
align-items: center;
padding: 8px 20px;
gap: 12px;
`
 
const StyledTags = styled.button`
align-items: center;
border: none;
width: 86px;
height: 44px;
color: #3D4757;
background: #ffffff;
border-radius: 24px;
`
const StyledEdBtn = styled.p`
   padding: 20px;
   border-radius: 25px;
   color: #3D4757;
   background: #ffffff;
`

const StyledEdImg = styled.img`

`
const StyledBtnImg = styled.img`
color: #ffffff;
align-items: center;
justify-content: center;
`

const StyledClient = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: flex-start;
padding: 20px;
gap: 16px;
`

const StyledReviews = styled.p`
   padding: 20px;
   border-radius: 25px;
   color: #3D4757;
   background: #ffffff;
`


const FeaturedClients = styled.div`

`
const StyledCta = styled.section`

`

const StyledRectangle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 1006px;
height: 483px;
left: 1px;
top: 0px;
justify-content: center;
background: #1ab265;
border-radius: 8px;

h1{
  color: white;
}

p{
  color: white;
}


`

const StyledIconDiv = styled.div`
display: flex;
flex-direction: row;
gap: 50px;
justify-content: center;
align-items: center;
`

const IconImgs = styled.img`
   width: 42px;
   height: 42px;
`






function Introduction() {
  return (
    <>
      <StyledBody>
        <StyledSectionTop>

          <StyledProfileImg src="./assets/person-1.png" />
          <StyledHeading> Etinosa Alade Jr
            <StyledVerified src="./assets/Vector.png" />
          </StyledHeading>
          <StyledInterview>Read Interview</StyledInterview>

          <div>
            <p>
              I help couples improve their relationships by identifying the underlying causes of their issues and developing <br /> practical strategies for resolving conflicts, improving communication, and strengthening their emotional bond.<br /> With a compassionate and emphatetic approach.I create a safe and supportive environment where couples <br /> can explore their feelings and work towards a more fulfilling relationship.
            </p>

            <StyledIntroBtn>
              <StyledButton1>Book A Session <StyledBtnImg src="./assets/right.svg" /> </StyledButton1>
              <StyledButton2>Learn More</StyledButton2>
            </StyledIntroBtn>
          </div>

        </StyledSectionTop>

        <StyledMiddle>

          <StyledMySpecialties>
            <StyledHeading>My Specialties</StyledHeading>
            <StyledTagsDiv>
              <StyledTags>ADHD</StyledTags>
              <StyledTags>Trauma</StyledTags>
              <StyledTags>Depression</StyledTags>
              <StyledTags>PTSD</StyledTags>
              <StyledTags>Anxiety</StyledTags>
              <StyledTags>Bipolar Disorder</StyledTags>

            </StyledTagsDiv>
          </StyledMySpecialties>

          <StyledEducation>

            <StyledHeading>Educational Qualifications</StyledHeading>
            <StyledBtnDiv>

              <StyledEdBtn>
                <StyledEdImg src="./assets/hat.svg" />
                Master of science in marriage and family therapy from Northwestern University
              </StyledEdBtn>

              <StyledEdBtn>
                <StyledEdImg src="./assets/hat.svg" />
                Certificate in emotionally focused therapy from the international center for excellence in emotionally <br /> focused therapy, Seattle, WA
              </StyledEdBtn>

              <StyledEdBtn>
                <StyledEdImg src="./assets/hat.svg" />
                Internship in couples and family therapy at the Guttmann institute in Seattle, WA
              </StyledEdBtn>

              <StyledEdBtn>
                <StyledEdImg src="./assets/hat.svg" />
                Licensed marriage and family therapist (lmft) in California, obtained through the board of behavioral <br /> sciences
              </StyledEdBtn>

            </StyledBtnDiv>
          </StyledEducation>

          <FeaturedClients>
            <StyledHeading>Featured Clients</StyledHeading>
            <h5>Names are hidden for privacy*</h5>


            <StyledClient>
              <StyledReviews>
                <StyledHeading>He Was Encouraging</StyledHeading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem voluptatem incidunt quaerat provident labore facere.
              </StyledReviews>

              <StyledReviews>
                <StyledHeading>He Was Encouraging</StyledHeading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem voluptatem incidunt quaerat provident labore facere.
              </StyledReviews>

              <StyledReviews>
                <StyledHeading>He Was Encouraging</StyledHeading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem voluptatem incidunt quaerat provident labore facere.
              </StyledReviews>

              <StyledReviews>
                <StyledHeading>He Was Encouraging</StyledHeading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem voluptatem incidunt quaerat provident labore facere.
              </StyledReviews>
            </StyledClient>
          </FeaturedClients>

        </StyledMiddle>

        <StyledCta>
          <StyledRectangle>
            <StyledHeading>Ready to take action?</StyledHeading>
            <p>Book me for N5,000/hr</p>
            <StyledButton3>
              Book A Session <StyledEdImg src="./assets/right.svg" alt='' />
            </StyledButton3>
          </StyledRectangle>

          <StyledIconDiv>
              <IconImgs src="./assets/facebook-logo.svg"/>
              <IconImgs src="./assets/twitter.svg"/>
              <IconImgs src="./assets/linkedin.svg"/>
          </StyledIconDiv>
        </StyledCta>








      </StyledBody>
    </>
  )
}

export default Introduction