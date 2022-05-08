import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../component/Filter";
import PageLoading from "../component/PageLoading";
import RocketCard from "../component/RocketCard";
import SearchField from "../component/SearchField";
import { getMissions } from "../redux/mission/missionSlice";

const Rocket = () => {
  const { missions, loading } = useSelector((state) => state.missions);

  const [term, setTerm] = useState([]);

  useEffect(() => {
    setTerm(missions);
  }, [missions]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const submitHandler = (e) => {
    const searchText = e.target.value;

    const matchFlight = missions.filter((mission) =>
      mission.rocket.rocket_name
        .toLowerCase()
        .startsWith(searchText.toLowerCase())
    );
    setTerm(matchFlight);
    console.log(matchFlight);
  };

  const sortByDate = (day) => {
    const today = new Date().getTime();
    const matchFlight = missions.filter(
      (mission) =>
        today - new Date(Date.parse(mission.launch_date_local)).getTime() ===
        day
    );
    setTerm(matchFlight);
  };

  const sortByStatus = (status) => {
    const matchFlight = missions.filter(
      (mission) => mission.launch_success === status
    );
    setTerm(matchFlight);
  };
  const sortByUpcoming = (upcoming) => {
    const matchFlight = missions.filter(
      (mission) => mission.upcoming === upcoming
    );
    setTerm(matchFlight);
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="container">
      <h1 className="mt-3">Rocket Flight Mission</h1>
      <div>
        <SearchField submitHandler={submitHandler} />

        <Filter
          sortByDate={sortByDate}
          sortByStatus={sortByStatus}
          sortByUpcoming={sortByUpcoming}
        />
      </div>

      <div className="row  row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {term.map((rockets) => (
          <RocketCard rockets={rockets} />
        ))}
      </div>
    </div>
  );
};
export default Rocket;
