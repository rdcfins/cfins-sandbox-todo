import useSWR, { preload } from 'swr'
let controller;

/**
 * Fetch initial data
 * @param {Function} setCallback
 */
export const getInitialData = async (url) => {
  controller = new AbortController();
  const signal = controller.signal;
//   setDataCb(loadingStateValue);
  if (typeof window !== "undefined") {
    console.log("Client Side");
    const result = await fetch(url, {
      method: "GET",
      cache: "force-cache",
      signal
    });
    let todos = await result.json();
    return todos;
  }
};

// preload data
preload('http://localhost:3000/api/todo', getInitialData);

// Export data
const useInitialData = () => {
     return useSWR(`http://localhost:3000/api/todo`, getInitialData);
};

export default useInitialData;
