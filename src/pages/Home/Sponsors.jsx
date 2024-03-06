import { StyledSponsors, Sponsor } from "./Styles";

import { secretaria, casaTueTimba, prefeitura, governo } from "../../assets/index";

export default function Sponsors() {
  return (
    <StyledSponsors>
      <Sponsor src={prefeitura} alt="Logo da prefeitura"></Sponsor>
      <Sponsor src={secretaria} alt="Logo da secretaria de cultura "></Sponsor>
      <Sponsor src={casaTueTimba} alt="Logo da instituição Casa Tue Timba"></Sponsor>
      <Sponsor src={governo} alt="Logo do Governo Federal"></Sponsor>
    </StyledSponsors>
  );
}
