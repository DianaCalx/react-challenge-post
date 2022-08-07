import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'
import Information from './Information';
import User from './User';
import Comments from './Comments';
import { Flex, ContainerPost, ParError, ParLoading} from '../styles/components';

const Post = () => { 
  const { id } = useParams();
  const { data, loading, error, fetchData } = useFetch();

  useEffect(() => {
    if(id){
      fetchPost();
    }
  }, []);

  const fetchPost = () => {
    const url:string = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
    fetchData(url);   
  }

  if (!data || !data[0]) {
    return <></>
  }


  if(error){
    return <ParError>There was an error loading the data</ParError>
  }

  return (
    <>
      { loading ? <ParLoading>Loading....</ParLoading> 
      : <ContainerPost>
          <Flex>
            <Information dataPost={data[0]}/>
            <User userId={data[0].userId}/>
          </Flex>
          <Comments postId={data[0].id}/>
        </ContainerPost>
      }
    </>
  )
}

export default Post