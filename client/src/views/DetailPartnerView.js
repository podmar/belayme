import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardClimberDetail from "../components/CardClimberDetail";
import ModalAlert from "../components/ModalAlert";
import { useFetch } from "../utils/useFetch";

function DetailPartnerView() {
  const { climberid } = useParams();
  const [climberDetail, setClimberDetail] = useState(null);

  const { fetchedData, loadingStatus } = useFetch(`climbers/id/${climberid}`);

  useEffect(() => {
    if (loadingStatus === "loaded") {
      console.log(fetchedData);
      setClimberDetail(fetchedData.climber);
    }
  }, [loadingStatus]);

  return (
    <div>
      <h6>Detail Partner View</h6>
      {climberDetail && <CardClimberDetail climber={climberDetail} />}
      <ModalAlert />
    </div>
  );
}

export default DetailPartnerView;
