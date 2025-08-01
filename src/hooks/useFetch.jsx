
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => { 
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                setError('Error fetching data: ' + err.message);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

export default useFetch;
