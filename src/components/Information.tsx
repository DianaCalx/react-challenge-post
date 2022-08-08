import Image from './Image';
import { InfoContainer, Paragaph} from '../styles/components';

interface InfoInter {
  body:string;
  id: number;
  title: string;
  userId: number;
}

const Information = ({dataPost}:{dataPost:InfoInter}) => {
  return (
    <InfoContainer> 
    { dataPost && (  
      <>
      <Paragaph><span>Post title: </span>{dataPost?.title}</Paragaph>
      <Image isSquare/>
      <Paragaph><span>Description:</span> {dataPost?.body}</Paragaph>
      </>
    )}
    </InfoContainer>

  )
}

export default Information