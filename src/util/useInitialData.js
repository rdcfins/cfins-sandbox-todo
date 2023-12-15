import { useState, useEffect, useMemo } from "react";

let controller;

/**
 * Fetch initial data
 * @param {Function} setCallback
 */
export const getInitialData = async (setDataCb, loadingStateValue) => {
  controller = new AbortController();
  const signal = controller.signal;
//   setDataCb(loadingStateValue);
  if (typeof window !== "undefined") {
    console.log("Client Side");
    const result = await fetch(`http://localhost:3000/api/todo`, {
      method: "GET",
      cache: "force-cache",
      signal
    });
    let todos = await result.json();
    return todos;
  }
};

// Export data
const useInitialData = () => {
  const [data_state, setData] = useState(undefined);

  // If data_state changes update listener to use new data
//   useEffect(() => {
//     addEventListener("storage", (e) => {
//       let storeData = data_state ?? e.detail;
//       localStorage.setItem("todo", JSON.stringify(storeData || []));
//     });
//     return () => {
//       if (controller) {
//         controller.abort();
//         console.log("Data fetch aborted");
//       }
//       removeEventListener("storage", null);
//     };
//   }, [data_state]);

  // If data has been set by state dispatch
  if (data_state) return [data_state, setData];

  try {
    // Initial Data fetching and parsing
    // dispatchEvent(new CustomEvent("storage", { detail: getInitialData(setData, []) }));
  } catch (error) {
    return [error, setData];
  }
};

export default useInitialData;
