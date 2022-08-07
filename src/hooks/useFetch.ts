import axios from 'axios';
import { useState } from 'react';

interface UseGetFetchReturn {
  loading: boolean;
  error: string | undefined;
  data: any;
  fetchData: (url: string) => Promise<void>;
};

const useFetch = (): UseGetFetchReturn  => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<any>();

  const fetchData = async (url:string) => {
    setLoading(true);
    try{
      const { data } = await axios(url);
      setData(data);
      setLoading(false);
      setError(undefined);
    } catch(e) {
      setError(String(e));
      setData(undefined);
    }
  }

  return {
    loading,
    data,
    error,
    fetchData
  };
}

export default useFetch;
