import "./App.css";
import { useEffect, useState } from "react";
import { Loading, Tour } from "./componentes";

function App() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((req) => req.json())
      .then((data) => setTours(data));
  }, []);

  const handleRemove = (i) => {
    var data = [...tours];
    data.splice(i, 1);

    setTours(data);
  };

  return (
    <>
      {tours.length ? (
        <div className="w-full min-h-screen flex flex-col justify-start items-start">
          <h1 className="text-sky-700 font-bold self-center border-b-4 pb-5 mb-6 font-mono border-sky-700 text-center">
            Our Tours
          </h1>
          <div className="w-full grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1 p-5 min-h-screen bg-white">
            {tours.map((item, index) => {
              return (
                <Tour
                  handleRemove={() => handleRemove(index)}
                  data={item}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
