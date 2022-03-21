import styled from 'styled-components';

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`
const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`
const ContainerText = styled.div`
  margin-top: 20px;
`
function Post () {
  return(
    <PostContainer>
      <StyledUsername>@User</StyledUsername>
      <StyledDate>21 de Março de 2022</StyledDate>
      <ContainerText>Postagem bebev rjvrvbrvo ovrovnrovn rovnrvornvon orvnorvnro</ContainerText>
    </PostContainer>
  )
}

export default Post;