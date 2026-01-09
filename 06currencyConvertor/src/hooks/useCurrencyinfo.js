// import { useEffect, useState } from "react";

// function useCurrencyinfo(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//         )
//             .then(() => res.json())
//             .then(() => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data;
// }

// export default useCurrencyinfo; 
import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    // `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
                    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'
                );
                const json = await res.json();
                setData(json[currency]);
            } catch (error) {
                console.error("Currency fetch error:", error);
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyinfo;
