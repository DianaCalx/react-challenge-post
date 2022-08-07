import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import ImagePost from './Image';
import { DivData, Paragaph, Link, ParLoading, ParError } from '../styles/components';
import useLocalStorage from '../hooks/useLocalStorage';

type Posts = {
  body: string;
  id: number;
  title: string;
  userId: string;
}

const MyPosts = () => {
  const { data, loading, error, fetchData } = useFetch();
  const { getLS } = useLocalStorage('user');
  const user = getLS();

  useEffect(() => {
    if(user){
      fetchPostsUser();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const fetchPostsUser = () => {
    const url:string = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`;
    fetchData(url);     
  }

  if(error){
    return <ParError>There was an error loading the data</ParError>
  }
 
  return (
    <>
      { loading ? <ParLoading>Loading....</ParLoading> : (data as Posts[])?.map( d => (
        <Link to = {`/posts/${d.id}`}  key={d.id}>
          <DivData           
          >
            <ImagePost/>
            <div>
              <Paragaph><span>Title: </span>{d.title}</Paragaph>
              <Paragaph><span>Description:</span> {d.body}</Paragaph>
            </div>
          </DivData>
        </Link>
      ))
      }
    </>
  )
}

export default MyPosts