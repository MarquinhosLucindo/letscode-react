import card from './card.json'
import Button from '../Button'
import { Button as BtnAntd } from 'antd'

import { Container, PhotoArea, Pro, InfoArea, Name, City, Office, SkillsArea, Skills } from './styles'

const Card = () => (
  <Container>
    <PhotoArea>
      <Pro>
      PRO
      </Pro>
      
      {<img src={card.photos[0]} />       }
    </PhotoArea>
    <InfoArea>
      <Name>{card.name}</Name>
      <City>{card.city}</City>
      <Office>{card.office}</Office>

      <Button>         
          Message
      </Button>
      <Button>          
          Following
      </Button>
    </InfoArea>

    <SkillsArea>
    
    Skills
    {
          card.skills
            .map(skills =>
              <Skills>{skills}</Skills>
            )
        }
    </SkillsArea>
    
  </Container>
)

export default Card
