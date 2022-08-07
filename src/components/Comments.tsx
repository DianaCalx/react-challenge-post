import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Image from './Image';
import { Paragaph, CommentFlex, CommentCont, ParagaphRel } from '../styles/components';

type Comments = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}


const Comments = ({postId}: {postId:number}) => {

  const { data, fetchData } = useFetch();

  useEffect(() => {
   fetchComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const fetchComments = () => {
    const url:string = `${process.env.REACT_APP_API_URL}/comments?postId=${postId}`;
    fetchData(url);
  }

  return (
    <CommentCont>
      <h2>Comments</h2>
      {(data as Comments[])?.map( d => (
        <CommentFlex key={d.id}>
          <Image/>
          <div>
            <div>
              <Paragaph><span>Name:</span>{d.name}</Paragaph>
              <p>{d.body}</p>
            </div>          
          </div>
          <ParagaphRel>{d.email}</ParagaphRel>
        </CommentFlex>
      ))}
    </CommentCont>
  )
}

export default Comments