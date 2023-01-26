import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CardClimberDetail from "../components/CardClimberDetail";
import ModalAlert from "../components/ModalAlert";

function DetailPartnerView() {
  const { climberid } = useParams();
  const [climber, setClimber] = useState(null);

  return (
    <div>
      <h6>DetailPartnerView</h6>
      {climber && <CardClimberDetail climber={climber} />}
      <ModalAlert />
    </div>
  );
}

export default DetailPartnerView;
