import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissions } from "../redux/mission/missionSlice";

const RocketCard = () => {
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  if (loading) {
    return (
      <div class="d-flex justify-content-center mt-5">
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="mt-3">Rocket Flight Mission</h1>
      <div className="row   justify-content-center">
        {missions.map((rocket) => (
          <div className="col-md-3 aligen-items-center">
            <div class="card mt-3" style={{ width: "16rem" }}>
              <img
                src={rocket.links.mission_patch_small}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title">{rocket.mission_name}</h4>
                <h5 class="card-text text-start">
                  Rocket Name:{" "}
                  <span className="text-primary">
                    {rocket.rocket.rocket_name}
                  </span>
                </h5>
                <h6 className="card-text text-start">
                  Launch Year:{" "}
                  <span className="text-warning">{rocket.launch_year}</span>
                </h6>
                <h6 className="card-text text-start">
                  Launch Date:{" "}
                  <span className="text-danger">
                    {rocket.launch_date_local}
                  </span>
                </h6>
                <a href={rocket.links.wikipedia} class="btn btn-dark">
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
