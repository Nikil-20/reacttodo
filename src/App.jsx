import { useState, useEffect } from 'react';
import './App.css';
import Tod from './Component/Tod';
import { ShimmerText } from "react-shimmer-effects";


function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div>
    
          <ShimmerText line={23} gap={20} />;
        </div>
      ) : (
        <Tod />
      )}
    </>
  );
}

export default App;
