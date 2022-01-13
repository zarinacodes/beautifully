/* eslint-disable import/no-anonymous-default-export */
import PageTitle from "../ui/pagetitle";
import Filters from "./Filters";
import Page from "../ui/page";
import Feed from "./Feed";

export default () => {
  return (
    <Page>
      <PageTitle>Women's clothing</PageTitle>
      <Filters />
      <Feed />
    </Page>
  );
};
