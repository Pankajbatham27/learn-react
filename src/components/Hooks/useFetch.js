import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchRecord = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok) throw new Error("Something went wrong!");
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
            
        }

        fetchRecord();
        
    },[url])


    return { data, error, loading }

}
export default useFetch;