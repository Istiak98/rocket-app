import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissions } from "../redux/mission/missionSlice";

const RocketCard = () => {
  const { missions, loading } = useSelector((state) => state.missions);
  const [term, setTerm] = useState([]);
  useEffect(() => {
   setTerm(missions);
  }, [missions]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const submitHandler = (e) => {
    // e.preventDefault();
    const searchText = e.target.value;
    const matchFlight = missions.filter((mission) =>
      mission.rocket.rocket_name
        .toLowerCase()
        .startsWith(searchText.toLowerCase())
    );
    setTerm(matchFlight);
    console.log(matchFlight);
  };
  return (
    <div className="container">
      <h1 className="mt-3">Rocket Flight Mission</h1>
      <div className="input-group mb-3 justify-content-center">
        <input
          type="text"
          className="form-control justify-content-center"
          placeholder="Rocket Name"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => submitHandler(e)}
        />
      </div>
      <div className="row  row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {term.map((rockets) => (
          <div className="col col-md-3 aligen-items-center">
            <div className="card mt-3" style={{ width: "16rem" }}>
              <img
                src={rockets.links.mission_patch_small}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title text-start">
                  Missions:{" "}
                  <span className="text-info fs-5">{rockets.mission_name}</span>
                </h4>
                <h5 className="card-text text-start">
                  Rocket Name:{" "}
                  <span className="text-primary">
                    {rockets.rocket.rocket_name}
                  </span>
                </h5>
                <h6 className="card-text text-start">
                  Launch Year:{" "}
                  <span className="text-warning">{rockets.launch_year}</span>
                </h6>
                <h6 className="card-text text-start">
                  Launch Date:{" "}
                  <span className="text-danger">
                    {rockets.launch_date_local}
                  </span>
                </h6>
                {/* <h6 className="card-text text-start">
                  Launch Status:{" "}
                  <span className="text-success">{rockets.details}</span>
                </h6>
                <h6 className="card-text text-start">
                  Upcomming:{" "}
                  <span className="text-success">{rockets.upcoming}</span>
                </h6> */}
                <a href={rockets.links.article_link} className="btn btn-dark">
                  Lets learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RocketCard;
