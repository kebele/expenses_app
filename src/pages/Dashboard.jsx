import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

// loader
// bu loader'ı App.jsx'de route'da loader'a ekleyeceğiz, yani bu route bir loader'a sahip yani oraya gittiğinde bu loader'ı çalıştıracak
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}
// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  //   console.log({ data, request });
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`wellcome, ${formData.userName}`);
    // throw new Error("ya done");
  } catch (error) {
    throw new Error("There was a problem creating your account.");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
