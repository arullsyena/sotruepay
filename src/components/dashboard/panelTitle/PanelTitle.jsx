import "./PanelTitle.css";
function PanelTitle({ title }) {
  return (
    <div className='panel-title glass_bg'>
      <h2>{title ? title : "Dashboard"}</h2>
    </div>
  );
}

export default PanelTitle;
