import "./ComponentTitle.css";
function ComponentTitle({ title }) {
  return (
    <div className='comp-title-container glass_bg'>
      <h3 className='comp-title'>{title ? title : "Graph"}</h3>
      {/* <div className='comp-title-container-down'></div> */}
    </div>
  );
}

export default ComponentTitle;
