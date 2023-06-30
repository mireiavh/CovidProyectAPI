import  useFetch  from '../hooks/useFetch';
import DynamicUrl from '../services/DynamicUrl';

const Top10Service = () => {
  const data = useFetch(`${DynamicUrl}/countries`);
  return data;
};

export default Top10Service;