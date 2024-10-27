import "./PanelTitle.css";
function PanelTitle({ title }) {
  return (
    <div className='panel-title'>
      <h2>{title ? title : "Dashboard"}</h2>
    </div>
  );
}

export default PanelTitle;
