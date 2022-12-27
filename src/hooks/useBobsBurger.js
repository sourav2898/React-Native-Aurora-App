import {useEffect, useState} from 'react';
import {getTheBobBurgers} from '../backend';

const useBobsBurger = () => {
  const [theBobsBurgers, setBobsBurger] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const bobsBurger = async () => {
      setLoading(true);
      try {
        const bobsBurger = await getTheBobBurgers();
        setBobsBurger(bobsBurger || []);
        setLoading(false);
      } catch (error) {
        console.log('While fetching bobs burgers');
        setLoading(false);
      }
    };

    bobsBurger();
  }, []);

  return {loading, theBobsBurgers};
};

export default useBobsBurger;
