import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonIconBack from "../components/ButtonIconBack";
import ButtonIconBelayRequest from "../components/ButtonIconBelayRequest";
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
      {climberDetail && <CardClimberDetail climber={climberDetail} />}
      <Stack
        className="belayme-custom-box-center"
        direction="row"
        alignItems={"space-between"}
        spacing={1}
        flexWrap={"wrap"}
        xs={{ p: 0.5, m: 0 }}
      >
        {climberDetail && <ButtonIconBelayRequest id={climberDetail._id} />}
        <ButtonIconBack />
      </Stack>
      <ModalAlert />
    </div>
  );
}

export default DetailPartnerView;
