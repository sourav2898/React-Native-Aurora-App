import {useState, useEffect} from 'react';
import {getDrinks} from '../backend';

const useDrinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        setLoading(true);
        const allDrinks = await getDrinks();
        setDrinks(allDrinks?.data?.drinks || []);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchDrinks();
  }, []);

  return {drinks, loading};
};

export default useDrinks;
