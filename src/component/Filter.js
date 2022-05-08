import React from "react";
import { launchDate, launchStatus, launchUpcoming } from "../utlis/filterData";
import DropDownButton from "./DropDownButton";
const Filter = ({ sortByDate, sortByStatus, sortByUpcoming }) => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <div class="dropdown">
        <DropDownButton name="Launch Date" />
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {launchDate.map((item, index) => (
            <>
              <li>
                <p class="dropdown-item" onClick={() => sortByDate(item.date)}>
                  {item.name}
                </p>
              </li>
              {index !== launchDate.length - 1 && (
                <li>
                  <hr class="dropdown-divider" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <div class="dropdown">
        <DropDownButton name="Launch Status" />
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {launchStatus.map((item, index) => (
            <>
              <li>
                <p
                  class="dropdown-item"
                  onClick={() => sortByStatus(item.status)}
                >
                  {item.name}
                </p>
              </li>
              {index !== launchStatus.length - 1 && (
                <li>
                  <hr class="dropdown-divider" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <div class="dropdown">
        <DropDownButton name="Upcoming" />
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {launchUpcoming.map((item, index) => (
            <>
              <li>
                <p
                  class="dropdown-item"
                  onClick={() => sortByUpcoming(item.status)}
                >
                  {item.name}
                </p>
              </li>
              {index !== launchUpcoming.length - 1 && (
                <li>
                  <hr class="dropdown-divider" />
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
