import {useState, useEffect} from 'react';

const useContent = (query) => {
    const [content, setContent] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        // Fetch the JSON data from the CMS
        fetch(`https://graphql.contentful.com/content/v1/spaces/gh49md68veon/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authenticate the request
              Authorization: "Bearer yhWYbW9S7oEH_Tk0uMgTXaUffRyuqJJgm5Qg8NQ1jfI",
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
          })
          .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch content from CSM");
            }
                return res.json();
            })
            .then((content) => {
                setContent(content);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name !== 'AbortError'){
                    setError(err.message);
                    setIsPending(false);
                }
            })

            return () => abortController.abort();
        }, [query]);

        return {content, isPending, error};
}

export default useContent;