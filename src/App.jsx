import { useState, useEffect } from "react";
import Map from "./components/Map.jsx";
import "./styles.css";

const BASE_URL =
  "https://eonet.gsfc.nasa.gov/api/v3/categories/wildfires?limit=20";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error("Fetch request to Nasa API failed");
      }
      const { events } = await res.json();
      setData(events); //passing fetched data from events variable to data variable
      console.log(events);
    };
    fetchData(data);
  }, [BASE_URL]);

  return (
    <div>
      <Map data={data} />
    </div>
  );
};

export default App;
