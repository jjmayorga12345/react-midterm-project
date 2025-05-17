import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const useFetch = (url: string): {
  data: any;
  loading: boolean;
  error: boolean;
} => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);
        console.log('Fetched data:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
