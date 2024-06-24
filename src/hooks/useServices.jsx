import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/services")
    //   .then((res) => res.json())
    //   .then((data) => setServices(data));
    axiosSecure.get("/services").then((res) => setServices(res.data));
  }, []);

  return services;
};

export default useServices;
