import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setdata(data);
                setIspending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    setIspending(false);
                    setError(err.message)}
            });
        }, 500);

        return () => abortCont.abort(); // aborts whichever fetch it is still ascoiated with
    }, [url]);

    return { data, isPending, error }

}
export default useFetch;