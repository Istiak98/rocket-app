import React from "react";

const RocketCard = ({ rockets }) => {
  return (
    <div className="col col-md-3 aligen-items-center">
      <div className="card mt-3" style={{ width: "16rem" }}>
        <img
          src={rockets.links.mission_patch_small}
          className="card-img-top"
          alt="rocket-img"
        />
        <div className="card-body">
          <h4 className="card-title text-start">
            Missions:{" "}
            <span className="text-info fs-5">{rockets.mission_name}</span>
          </h4>
          <h5 className="card-text text-start">
            Rocket Name:{" "}
            <span className="text-primary">{rockets.rocket.rocket_name}</span>
          </h5>
          <h6 className="card-text text-start">
            Launch Year:{" "}
            <span className="text-warning">{rockets.launch_year}</span>
          </h6>
          <h6 className="card-text text-start">
            Launch Date:{" "}
            <span className="text-danger">{rockets.launch_date_local}</span>
          </h6>
          <a href={rockets.links.article_link} className="btn btn-dark">
            Lets learn more
          </a>
        </div>
      </div>
    </div>
  );
};
export default RocketCard;
