import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import { ImageS } from '../styles/components';

const Image = ({ isSquare }: { isSquare?: boolean }) => {
  const { data, fetchData } = useFetch();

  useEffect(() => {
    fetchPostsUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const fetchPostsUser = () => {
    const url:string = 'https://aws.random.cat/meow';
    fetchData(url);     
  }

  const urlImage = 'https://purr.objects-us-east-1.dream.io/i/y31D9.jpg';

  return (
    <picture>
      <ImageS 
        src={data ? data.file : urlImage} 
        alt='Random'
        isSquare={isSquare}
      />
    </picture>
  )
}

export default Image;