import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc, minPrice, maxPrice) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/services")
    //   .then((res) => res.json())
    //   .then((data) => setServices(data));
    axiosSecure
      .get(
        `/services?sort=${
          asc ? "asc" : "desc"
        }&minPrice=${minPrice}&maxPrice=${maxPrice}`
      )
      .then((res) => setServices(res.data));
  }, [asc, minPrice, maxPrice]);

  return services;
};

export default useServices;
