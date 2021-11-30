/* eslint-disable import/no-anonymous-default-export */
import PageTitle from "../ui/pagetitle";
import Filters from "./Filters";
import Page from "../ui/page";
import Feed from "./Feed";

export default () => {
  return (
    <Page>
      <PageTitle>Women's Tops</PageTitle>
      <Filters />
      <Feed />
    </Page>
  );
};
