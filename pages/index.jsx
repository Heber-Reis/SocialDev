import styled from 'styled-components';
import { withIronSessionSsr } from 'iron-session/next';

import { ironConfig } from '../lib/middleware/ironSession'

import Navbar from "../src/components/layout/navbar";
import Container from '../src/components/layout/container';
import CreatePost from '../src/components/cards/CreatePost';
import Post from '../src/components/cards/Post';
import H3 from '../src/components/tipographfy/H3';

const Content = styled.div`
  margin: 50px 0;
`
const LastPostText = styled(H3)`
  padding: 40px 0;
`

const RefreshPosts = styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary};
  cursor: pointer;
`
const RefreshPostsContainer = styled.div`
  text-align: center;
`

const PostContainer = styled.div`
  display:  flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`

function HomePage ({ user }) {
  
  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost user={user.user}/>
          <LastPostText>Ultimas postagens:</LastPostText>
          <RefreshPostsContainer>
          <RefreshPosts>Carregar novas postagens</RefreshPosts>
          </RefreshPostsContainer>
          <PostContainer>
            <Post/>
            <Post/>
            <Post/>
          </PostContainer>
        </Container>
      </Content>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      }
    }
    console.log(user )
    return {
      props: {
        user
      }
    }
  },
  ironConfig
)

export default HomePage