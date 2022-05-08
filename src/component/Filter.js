import React from "react";
const Filter = ({ sortByDate, sortByStatus, sortByUpcoming }) => {
  const launchDate = [
    {
      name: "Last Week",
      day: 7,
    },
    {
      name: "Last Month",
      day: 30,
    },
    {
      name: "Last Year",
      day: 365,
    },
  ];

  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Launch Date
        </button>
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
              {index !== launchDate.length - 1 && 
              <li>
                <hr class="dropdown-divider" />
              </li>
              }
            </>
          ))}
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Launch Status
        </button>
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <p class="dropdown-item" onClick={() => sortByStatus(true)}>
              Success
            </p>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <p class="dropdown-item" onClick={() => sortByStatus(false)}>
              Failure
            </p>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Upcoming
        </button>
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <p class="dropdown-item" onClick={() => sortByUpcoming(true)}>
              True
            </p>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <p class="dropdown-item" onClick={() => sortByUpcoming(false)}>
              False
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
