import { useEffect, useState } from "react";
// create useServices hook
const useServices = () => {
  const [services, setServices] = useState([]);

 
  useEffect(() => {
    const url = "./info.JSON";
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServices;