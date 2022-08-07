import { DivPosts } from '../styles/components';
import MyPosts from './MyPosts';
import AllPosts from './AllPosts';

interface PostProps {
  viewPost: string
}

const Posts = ({ viewPost }: PostProps) => {
  return (
    <DivPosts>
      {viewPost === 'myPosts' &&
        <MyPosts/>
      }
      {viewPost === 'allPosts' &&
        <AllPosts/>
      }
    </DivPosts>
  )
}

export default Posts