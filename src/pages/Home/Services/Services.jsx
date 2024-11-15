// import { useEffect, useState } from "react";
import { useRef, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/services?sort=${
  // asc ? "asc" : "desc"
  // }&minPrice=${minPrice}&maxPrice=${maxPrice}")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const [asc, setAsc] = useState(true);
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [search, setSearch] = useState('');

  const services = useServices(asc, minPrice, maxPrice, search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText);
    setSearch(searchText);
  };

  return (
    <div className="my-20">
      <div className="text-center space-y-3">
        <h3 className="text-orange-500">Service</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <p>{minPrice}</p>
      {/* Sort */}
      <button className="btn btn-secondary" onClick={() => setAsc(!asc)}>
        {asc ? "Sort: High to Low" : "Sort: Low to High"}
      </button>

      {/* Range filter */}
      <div className="w-1/4 my-2">
        <p>Price Range</p>
        <div className="flex gap-3">
          <input
            onChange={(e) => setMinPrice(e.target.value)}
            type="text"
            placeholder="Min"
            className="input input-bordered max-w-1/2"
            defaultValue={minPrice}
          />
          <input
            onChange={(e) => setMaxPrice(e.target.value)}
            type="text"
            placeholder="Max"
            className="input input-bordered max-w-1/2"
            defaultValue={maxPrice}
          />
        </div>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Products"
          className="input input-bordered max-w-1/2"
          name="search"
        />
        <input type="submit" className="btn btn-secondary" value="Search" />
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
