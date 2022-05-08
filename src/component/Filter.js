import React from "react";
import { launchDate, launchStatus, launchUpcoming } from "../utlis/filterData";
import DropDownButton from "./DropDownButton";
const Filter = ({ sortByDate, sortByStatus, sortByUpcoming }) => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <div className="dropdown">
        <DropDownButton name="Launch Date" />
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {launchDate.map((item, index) => (
            <>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => sortByDate(item.date)}
                >
                  {item.name}
                </p>
              </li>
              {index !== launchDate.length - 1 && (
                <li>
                  <hr className="dropdown-divider" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="dropdown">
        <DropDownButton name="Launch Status" />
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {launchStatus.map((item, index) => (
            <>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => sortByStatus(item.status)}
                >
                  {item.name}
                </p>
              </li>
              {index !== launchStatus.length - 1 && (
                <li>
                  <hr className="dropdown-divider" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="dropdown">
        <DropDownButton name="Upcoming" />
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {launchUpcoming.map((item, index) => (
            <>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => sortByUpcoming(item.status)}
                >
                  {item.name}
                </p>
              </li>
              {index !== launchUpcoming.length - 1 && (
                <li>
                  <hr className="dropdown-divider" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
