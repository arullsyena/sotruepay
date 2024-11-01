import "./PanelTitle.css";
import styled from "styled-components";

const H2CardComponent = styled.h2`
  color: ${(props) => props.theme.color};
`;
function PanelTitle({ title }) {
  return (
    <div className='panel-title glass_bg'>
      <H2CardComponent>{title ? title : "Dashboard"}</H2CardComponent>
    </div>
  );
}

export default PanelTitle;
