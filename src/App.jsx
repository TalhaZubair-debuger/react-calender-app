import { useState } from "react";
import Search from "./components/Search";
import Calender from "./components/Calender";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Footer from "./components/Footer";

function App() {
  const [calender, setCalender] = useState([]);
  const [month, setMonth] = useState(null);
  return (
    <>
      <Search setCalender={setCalender} month={month} setMonth={setMonth}/>
      <Calender calender={calender} month={month}/>
      <Footer/>
    </>
  );
}

export default App;
