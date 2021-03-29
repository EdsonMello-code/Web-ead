import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

import { useParams } from 'react-router';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface IParams {
  id: string;
}

interface IClasses {
  title: string;
  description: string;
  image: string;
  id: number;
}

const Classes: React.FC = () => {
  const [classes, setClass] = useState<IClasses[]>([]);

  const { id } = useParams<IParams>();

  useEffect(() => {
    api.get(`/courses/class/${id}`)
      .then(requestClasses => {
        console.log(requestClasses.data)
        setClass(requestClasses.data);
      });
  }, [id]);

  return <Layout title="Salas">
      {
        classes.map(classe => (
          <Link to={`/classes/${classe.id}/blocks`}>
            <Card 
              key={classe.id}
              imagePath={classe.image} 
              title={classe.title} 
              description={classe.description}
            />
          </Link>
        ))
      }
  </Layout>
}

export default Classes;