

// import { useEffect, useState } from "react";

// function useCurrencyinfo(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)

//                 const json = await res.json();
//                 setData(json[currency]);
//             } catch (error) {
//                 console.error("Currency fetch error:", error);
//             }
//         };

//         fetchData();
//     }, [currency]);

//     return data;
// }

// export default useCurrencyinfo;

// import { useEffect, useState } from "react";

// function useCurrencyinfo(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetch(
//                     `https://api.frankfurter.dev/v1/latest?base=${currency.toUpperCase()}`
//                 );
//                 const json = await res.json();

//                 // ✅ correct property
//                 setData(json.rates);
//             } catch (error) {
//                 console.error("Currency fetch error:", error);
//             }
//         };

//         fetchData();
//     }, [currency]);

//     return data;
// }

// export default useCurrencyinfo;


import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;