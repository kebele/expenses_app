import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// loader
// bu loader'ı App.jsx'de route'da loader'a ekleyeceğiz, yani bu route bir loader'a sahip yani oraya gittiğinde bu loader'ı çalıştıracak
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>Dashboard {userName}</div>;
};

export default Dashboard;
