import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getCountries, getDataWithCountry } from "../api/api";
import moment from "moment";

const Search = ({ setCalender, month, setMonth }) => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getCountries();
    setCountry(data);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };
  const handleSelectedCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleSubmitSearch = async () => {
    console.log(selectedCountry);
    const data = await getDataWithCountry(selectedCountry);

    let formattedData = [];
    if (typeof data === "object" || Array.isArray(data)) {
      const convertedData = data.map((event) => ({
        start: moment(event.date.iso).toDate(),
        end: moment(event.date.iso).add(1, "days").toDate(),
        title: event.name,
      }));

      formattedData = [...convertedData];
      setCalender(formattedData);
    }
  };

  return (
    <nav>
      <div className="row-navbar-border-none">
        <div className="margin-right-5">Month</div>
        <select
          name="months"
          id="months"
          className="months-select"
          onChange={handleMonthChange}
          value={month}
        >
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>

      <div className="row-navbar">
        <div className="margin-right-5">Country</div>
        <select
          name="country"
          id="country"
          className="country-select"
          onChange={handleSelectedCountryChange}
          value={selectedCountry}
        >
          {country.map((cntry) => (
            <option key={cntry.uuid} value={cntry["iso-3166"]}>
              {cntry.country_name}
            </option>
          ))}
        </select>
      </div>

      <button className="btn-search" onClick={handleSubmitSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </nav>
  );
};

export default Search;
