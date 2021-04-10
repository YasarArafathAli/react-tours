import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, settours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const res = await fetch(url);
    
  }
  if (loading) {
    return (
      <main>
        <Loading />

      </main>
    );
  }
  else {
    return (
      <main>
        <Tours />
      </main>
    );
  }
  return <h2>Tours Project Setup</h2>
}

export default App
