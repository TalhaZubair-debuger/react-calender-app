const API_KEY = "o6B1R2dcvdW4csdYVS1ttwGTD19wLpN3";

export const getCountries = async() => {
    try {
        const response = await fetch(
          `https://calendarific.com/api/v2/countries?api_key=${API_KEY}`,
          {
            method: "GET",
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.response.countries;
      } catch (error) {
        console.error("An error occurred:", error);
      }
}

export const getDataWithCountry = async(countryCode) => {
    const year = new Date().getFullYear();
    try {
        const response = await fetch(
          `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${countryCode}&year=${year}`,
          {
            method: "GET",
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.response.holidays;
      } catch (error) {
        console.error("An error occurred:", error);
      }
}