import {useEffect, useState} from 'react';
import {getTheBobBurgers} from '../backend';

const useBobsBurger = () => {
  const [theBobsBurgers, setBobsBurger] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bobsBurger();
  }, []);

  const bobsBurger = async () => {
    setLoading(true);
    try {
      const bobsBurget = await getTheBobBurgers();
      setBobsBurger(bobsBurget || []);
    } catch (error) {
      console.log('While fetching bobs burgers');
    }
    setLoading(false);
  };

  return {loading, theBobsBurgers};
};

export default useBobsBurger;
