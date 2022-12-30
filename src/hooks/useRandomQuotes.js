import {useState, useEffect} from 'react';
import axios from 'axios';

const useRandomQuotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const getQuote = async () => {
      const theQuote = await axios.get('https://www.affirmations.dev/');
      setQuote(
        theQuote?.data?.affirmation ||
          'No quote for now! Please come back later.',
      );
    };

    getQuote();
  }, []);

  return {quote};
};

export default useRandomQuotes;
