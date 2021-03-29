import React, { useEffect, useState } from 'react';
import { AiFillFileImage, AiFillFileText, AiFillVideoCamera } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import api from '../../services/api';

import ImageEmpyte from '../../assets/images/empyte.svg';

import { Container } from './styles';

interface IParams {
  classId: string;
}

const Blocks: React.FC = () => {
  const [blocks, setBlock] = useState([]);

  const { classId } = useParams<IParams>();

  useEffect(() => {
    api.get(`/courses/class/${classId}/block`)
      .then(requestBlock => {
        console.log(requestBlock.data)
        setBlock(requestBlock.data);
      });
  }, [classId]);

  return <Layout title="Blocks">
    {
      blocks.length === 0 
        ? <img src={ImageEmpyte} style={{ height: '70rem', margin: 'auto' }} alt="Empyte"/> 
        : blocks.map((block) => (
        <Link key={block.id} to={`/classes/${classId}/blocks/${block.id}/contents`}>
            <Container>
              <AiFillVideoCamera color="#FFF" size={24} />
              <AiFillFileText color="#FFF" size={24}/>
              <AiFillFileImage color="#FFF" size={24}/>
            </Container>
        </Link>
      ))
    }
  </Layout>;
}

export default Blocks;