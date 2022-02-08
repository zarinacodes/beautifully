/* eslint-disable import/no-anonymous-default-export */
import PageTitle from "../ui/pagetitle";
import Filters from "./Filters";
import Page from "../ui/page";
import Feed from "./Feed";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default () => {
  const { gender = "" } = useParams();
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const titles = {
    him: "Men's clothing",
    her: "Women's clothing",
  };

  useEffect(() => {
    if (gender !== "" && !titles[gender]) {
      navigate("/pagenotfound");
    }
  }, [gender, navigate, titles]);

  return (
    <Page>
      <PageTitle>{titles[gender] || "All clothing"}</PageTitle>
      <Filters />
      <Feed gender={gender} />
    </Page>
  );
};
