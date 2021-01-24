import React from "react";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import { gql, useQuery } from "@apollo/client";

const LAUNCHES_Query = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_Query);
  if (loading) return <h4>Loading...</h4>;
  if (error) return console.log(error);
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey/>
      <>
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch}/>
        ))}
      </>
    </>
  );
};

export default Launches;
