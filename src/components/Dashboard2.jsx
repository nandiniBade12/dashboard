// Dashboard.js
import React, { useState, useEffect } from "react";
import "./Dashboard2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  faCalendar,
  faBell,
  faChartLine,
  faArrowLeft,
  faTachometerAlt,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import boy from "./boy-face.jpg";
import { Link } from "react-router-dom";

function Dashboard2() {

  const [searchOption, setSearchOption] = useState('default');
  const [searchValue, setSearchValue] = useState('');

  const tableData = [
    {
      Name: "Sana",
      Email: "sanatabasumnandini693@gmail.com",
      Cloud: "Azure",
      Exam: "AWS CLoud Practitioner Level 1",
      VoucherCode: "AWS000123",
      IssuedDate: "11-11-2023",
      ExpiryDate: "18-11-2023",
      ExamDate: "11-11-2023",
      Result: "Pending"
    },

    {
      Name: "Sana Tabasum",
      Email: "sana.t@capg.com",
      Cloud: "GCDL",
      Exam: "AWS CLoud Practitioner Level 2",
      VoucherCode: "AWS000123",
      IssuedDate: "11-11-2023",
      ExpiryDate: "18-11-2023",
      ExamDate: "11-11-2023",
      Result: "Pass"
    },
    {
      Name: "Nandini",
      Email: "sana.t@capg.com",
      Cloud: "AWS",
      Exam: "AWS CLoud Practitioner Level 2",
      VoucherCode: "AWS000123",
      IssuedDate: "11-11-2023",
      ExpiryDate: "18-11-2023",
      ExamDate: "11-11-2023",
      Result: "Pass"
    },
  ];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update the time every second

    return () => {
      clearInterval(timer);
    };
  }, []);

  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };

  const [selectedAllMUs, setSelectedAllMUs] = useState("");

  const handleAllMUsChange = (e) => {
    // Handle "ALLMU'S" dropdown change
    setSelectedAllMUs(e.target.value);
  };

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filters = (crop) => {
    if (searchOption === 'default') {
      return true;
    } else if (searchOption === 'Name') {
      return tableData.Name === searchValue;
    } else if (searchOption === 'ExamDate') {
      return tableData.ExamDate === searchValue;
    } else if (searchOption === 'farmLocation') {
      return crop.farmLocation === searchValue;
    } else if (searchOption === 'sellerName') {
      return crop.sellerName === searchValue;
    }
  };

  return (
    <div className="headd">

      <div className="navbar">

        <div className="user-info">
          <p id="name">Hello Name</p>
          <p id="date">
            {currentTime.toLocaleTimeString(undefined, timeOptions)}{" "}
            {currentTime.toLocaleDateString(undefined, dateOptions)}
          </p>
        </div>
        <input type="text" className="search-box" placeholder="Search" />
        <p id="profile">Kadin Septimus</p>
       
      </div>            {/*nav bar div*/}

      <div className="back">
            <Link to='/' style={{"color":"blue"}}>  {" "} <FontAwesomeIcon icon={faArrowLeft} />Back </Link>
      </div>

    <div className="wrap">

      <div className="dashboard-container">

        <div className="dashboard-dropdown">
        <select className='search-text' value={searchOption} onChange={handleSearchOptionChange}>
            <option value="default">Search </option>
            <option value="ExamDate">Search By Date</option>
            <option value="Name">Search Candidate name</option>

          </select>
          {(searchOption === 'Name' || searchOption === 'ExamDate' || searchOption === 'farmLocation' || searchOption === 'sellerName') && (
            <input type="text" value={searchValue} placeholder="Search..." onChange={handleSearchInputChange} />
          )}
        </div>

        <div className="dashboard-dropdown">
          <select value={selectedAllMUs} onChange={handleAllMUsChange}>
            <option value="">ALL MU's</option>
            <option value="CPRS">CPRS</option>
            <option value="MALS">MALS</option>
            <option value="MAL">MAL</option>
            <option value="CPR">CPR</option>
          </select>
        </div>

        <div className="right-corner">
          
        </div>

      </div> {/* dashboard container*/}

      <div className="table-div">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Cloud</th>
              <th>Exam</th>
              <th>Voucher code</th>
              <th>Issued Date</th>
              <th>Expiry Date</th>
              <th>Exam Date</th>
              <th>Result</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tableData.filter(filters).map((row,index) => (
              <tr key={index}>
                <td>{row.Name}</td>
                <td>{row.Email}</td>
                <td>{row.Cloud}</td>
                <td>{row.Exam}</td>
                <td>{row.VoucherCode}</td>
                <td>{row.IssuedDate}</td>
                <td>{row.ExpiryDate}</td>
                <td>{row.ExamDate}</td>
                <td>{row.Result}</td>
                <td><button>Assigned voucher</button></td>
              </tr>
             ))} 
          </tbody>
        </table>
      </div>

      </div>  {/* wrap div */}

      <div>
        <footer className="footer-div"> 
          <p>Capgemini 2022, All rights reserved.</p>
        </footer>
      </div>

      <div className="left-column">
        <h2 className="heading">Voucher Dashboard</h2>

        <hr />

        <div className="row">

        <div className="left-row">
        <p><b><Link to={'/dashboard2'} style={{"color":"blue"}}> 
        <FontAwesomeIcon icon={faTachometerAlt} size="1x" />  Dashboard</Link></b></p>
        </div>

        <div className="left-row">
          <p><b><FontAwesomeIcon icon={faCog} /> Vouchers</b></p>
        </div>

        <div className="left-row">
          <p><b><FontAwesomeIcon icon={faCog} /> Profile</b></p>
        </div>

        <div className="left-row">
          <p><Link to={'/logout'}>Logout</Link></p>
        </div>

        </div> {/*row div*/}

      </div> {/* left-column div */}
    </div>
  );
}

export default Dashboard2;
