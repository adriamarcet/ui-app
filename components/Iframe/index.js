import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Iframe from './styles';

const Code = ({ component }) => {
  const [isLoading, setIsLoading] = useState(false);
  const Loader = () => <div>Loading {component}.twig...</div>;

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      console.log(component);
      await axios.get(`/api/ui/${component}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Iframe src={`http://localhost:5000/${component}.html`} frameBorder="0"></Iframe>
  );
};
export default Code;