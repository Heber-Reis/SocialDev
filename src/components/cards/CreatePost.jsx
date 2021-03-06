import styled from 'styled-components';

import H4 from '../tipographfy/H4';
import Textarea from '../inputs/Textarea';
import Button from '../inputs/Button'

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 20px;
  }
`

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`

const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px){
    flex-direction: column-reverse;
  }
`

const BottomText = styled.p`
  flex: 1;
`

function CreatePost () {
  return(
    <PostContainer>
      <H4><Title>No que você está pensando @heber?</Title></H4>
      <TextContainer>
        <Textarea placeholder='Digite sua mensagem!' rols="4"/>
      </TextContainer>
      <BottomContainer>
        <BottomText>Sua mensagem será pública!</BottomText>
        <Button>Enviar mensagem</Button>
      </BottomContainer>
    </PostContainer>
  )
}

export default CreatePost;