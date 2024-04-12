import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;


// import { useEffect, useState } from "react";
// import axios from 'axios';

// const useFetch = (url) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null); // Changed to null initially

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const res = await axios.get(url);
//                 setData(res.data);
//             } catch (err) {
//                 setError(err.message); // Store only the error message
//             }
//             setLoading(false);
//         };

//         fetchData();

//         // Cleanup function to handle component unmounting
//         return () => {
//             // Cleanup code can be added here if necessary
//         };
//     }, [url]);

//     const reFetch = async () => {
//         setLoading(true);
//         try {
//             const res = await axios.get(url);
//             setData(res.data);
//         } catch (err) {
//             setError(err.message); // Store only the error message
//         }
//         setLoading(false);
//     };

//     return { data, loading, error, reFetch };
// };

// export default useFetch;
