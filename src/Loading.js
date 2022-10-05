import { useCallback, useEffect, useRef, useState } from "react";



function useTimeout(callback, delay) {
  const timeoutRef = useRef();
  const callbackRef =useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setTimeout kicks in, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // timeout will be reset.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the timeout:

  useEffect(() => {
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);

      // Clear timeout if the components is unmounted or the delay changes:
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);

  // In case you want to manually clear the timeout from the consuming component...:
  return timeoutRef;
}


const Test = () => {
  const [isLoading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  
  // Simulate loading some data:
  const fakeNetworkRequest = useCallback(() => {
    setLoading(true);
    setShowLoader(false);
    
    // 50% of the time it will display the loder, and 50% of the time it won't:
    window.setTimeout(() => setLoading(false), Math.random() * 4000);
  }, []);
  
  // Initial data load:


  useEffect(() => {
    fakeNetworkRequest()
  }, [])
  
        
  // After 2 second, we want to show a loader:
  useTimeout(() => setShowLoader(true), isLoading ? 2000 : null);

  return (<>
    <button onClick={ fakeNetworkRequest } disabled={ isLoading }>
      { isLoading ? 'coypid 📀' : 'cpoy  🚀' }
    </button>
    
    { isLoading && showLoader ? <div className="loader"><span className="loaderIcon">📀</span></div> : null }
    { isLoading ? null : <p>Loaded! ✨</p> }
  </>);
}

export default Test