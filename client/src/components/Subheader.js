/* eslint-disable import/no-anonymous-default-export */
import Subheader from "../ui/subheader";

export default () => {
  return (
    <Subheader>
      <Subheader.Shipping>
        Free shipping. Free returns. All the time on all orders.
      </Subheader.Shipping>
      <Subheader.ClientsInfo>
        <Subheader.ListItem>My orders</Subheader.ListItem>
        <Subheader.ListItem>Support</Subheader.ListItem>
        <Subheader.ListItem modifiers="emoji">🇬🇧</Subheader.ListItem>
      </Subheader.ClientsInfo>
    </Subheader>
  );
};
