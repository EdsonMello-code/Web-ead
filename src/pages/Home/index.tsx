import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';

import Layout from '../../components/Layout';
import api from '../../services/api';

interface IHome {
  id: number;
  title: string;
  description: string;
  image: string;

}

const Home: React.FC = () => {
  const [courses, setCourses] = useState<IHome[]>([]);
  
  useEffect(() => {
    api.get('/courses')
      .then((requestCourses) => {
        setCourses(requestCourses.data.course)
      });


  }, []);

  return (
    <Layout title="Cursos">
         {
           courses.map((course) => (
            <Link key={course.id} to={`/${course.id}/classes`}>
              <Card 
              imagePath={course.image}  
              title={course.title}
              description={course.description}
            />
            </Link>
           ))
         }
    </Layout>
  )
}

export default Home;