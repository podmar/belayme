import React, { useContext } from "react";
import List from "../components/List";
import ModalAlert from "../components/ModalAlert";
import ClimbersContext from "../context/ClimbersContext";
import { SpinnerListView } from "../components/SpinnerListView";

function ListView() {
  const { climbers } = useContext(ClimbersContext);
  return (
    <>
      <div>{climbers ? <List /> : <SpinnerListView />}</div>
      <ModalAlert />
    </>
  );
}

export default ListView;
