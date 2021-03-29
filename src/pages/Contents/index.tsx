import React, { useEffect, useState } from 'react';

import { Container, ViewContent, BlockContent, ContentContainer, Controls } from './styles';
import { AiFillVideoCamera, AiFillFileText, AiFillFileImage, AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import imageNotFound from '../../assets/images/not_found.svg';

interface IParams {
  blockId: string;
  classId: string;
}


const Contents: React.FC = () => {
  const [content, setContent] = useState('video');
  const [block, setBlock] = useState(undefined);

  let { blockId, classId } = useParams<IParams>()

  
  useEffect(() => {
    api.get(`/courses/class/${classId}/block/${blockId}`)
      .then(blocks => {
        console.log(blocks.status)
        setBlock(blocks)
      });

  }, [blockId, classId]);



  const notify = (titleToast: string) => toast.success(titleToast, {
    position: "top-right",
    autoClose: 700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    
    style:{
      fontSize: '2rem',
      background: ' #29292E',
      boxShadow: '-4px 0px 12px -1px rgba(0,0,0,0.72)'
    }
  });

  function LoadContent({ video, image, text }) {
    switch(content) {
      case 'video':
        return <ViewContent>
          <video onEnded={() => notify('Próximo video')} controls>
            <source src={video} type="video/mp4"/>
          </video> 
        </ViewContent>
      case 'image':
        return <ViewContent>
          <img src={image} alt="bloco de conteudo"/>  
        </ViewContent>
      
      case 'text':
        return <ViewContent>
          <p>{text}</p>
        </ViewContent>
    }
  }

  if(!block) {
    return <p>Loading</p>  
    }

  return <Container>
      {
      block.data[0] ? (
        <ContentContainer>
          {
            <LoadContent 
              image={block.data[0].image}
              video={block.data[0].video}
              text={block.data[0].text}
            /> 
          }
          <BlockContent>
            <ul>
              <li onClick={() => setContent('video')}>
                <AiFillVideoCamera 
                  color="#FFF" 
                  size={20}
                />
                <span>Video</span>
              </li>
              <li onClick={() => setContent('text')}>
                <AiFillFileText 
                  color="#FFF"
                  size={20}
                />

                <span>Texto</span>
              </li>
              <li onClick={() => setContent('image')}>
                <AiFillFileImage 
                  color="#FFF"
                  size={20}
                />
                <span>Imagem</span>
              </li>
            </ul>
          </BlockContent>
        </ContentContainer>
        ) : <img src={imageNotFound} alt="not found" />
      }

    <Controls>
      <Link to={`/classes/${classId}/blocks/${Number.parseInt(blockId) - 1}/contents`}>
        <AiFillCaretLeft onClick={() => {
          notify('Bloco anterior')
        }} size={24}/>
      </Link>
      <Link to={`/classes/${classId}/blocks/${Number.parseInt(blockId) + 1}/contents`}>
        <AiFillCaretRight onClick={() => {
          notify('Próximo bloco');        
        }} size={24}/>
      </Link>
    </Controls>

    <ToastContainer />
  </Container>;
}

export default Contents;