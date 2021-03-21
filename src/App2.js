import React, {useState, useEffect} from 'react';
function App() {
  const [title, setTitle] = useState("Hello"); // return 2 variable.
  const [subTitle, setSubTitle] = useState("Belajar Bersama");

  useEffect(() => {
    setTimeout(() => {
      setTitle("Hello World");
    }, 3000);    
  }, []);

  return (
    <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </>
  );
}

export default App;
