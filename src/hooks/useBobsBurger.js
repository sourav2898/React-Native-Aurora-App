import {useEffect, useState} from 'react';
import {getTheBobBurgers, getTheBobBurgersById} from '../backend';

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

export const useBobsBurgerById = id => {
  const [theBobsBurgersById, setBobsBurgerById] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const bobsBurger = async () => {
      setLoading(true);
      try {
        const bobsBurgerById = await getTheBobBurgersById(id);
        setBobsBurgerById(bobsBurgerById?.data || {});
        setLoading(false);
      } catch (error) {
        console.log('While fetching bobs burgers');
        setLoading(false);
      }
    };

    bobsBurger();
  }, []);

  return {loading, theBobsBurgersById};
};

export default useBobsBurger;
