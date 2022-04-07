import styled from 'styled-components'

export const Container = styled.article`
  background-color: #2a2f40;
  text-align: center;
  color: #fff;
  width: 260px;
  height: 360px;
  flex-direction: row;


           
`

export const PhotoArea = styled.div`
  
  padding-top: 20px; 
  

  & img {
    border: 1px solid yellow;
    border-radius:50%;
    position: relative;
    max-width: 100px;
    margin-top: 6px;
       
  }
`
export const Pro = styled.span`
  position: absolute;
  left: 50px;
  border-radius:10%;
  background-color:yellow; 
  color: #2a2f40;
  font-weight: bold;
  margin-left:5px; 
`

export const InfoArea = styled.div`  
  padding: 15px;
`

export const Name = styled.p`
font-size: 18px;
font-weight: bold; 
`

export const City = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin: 0;
`

export const Office = styled.p`
  font-size: 14px;
  
`


export const SkillsArea = styled.div`
  height: 60px;  
  text-align: left;
  padding:5px;  
  background-color: black;
  
  
`

export const Skills = styled.span`  
  font-size: 10px;
  border:1px solid;
  padding: 2px;
  
  
  &:not(last-of-type) {
    margin-right: 3px;
  }
`


