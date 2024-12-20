import React from "react";
import './Project.css';

function Project(props) {
  const {name, date, img} = props.data;

  return (
    <div className="project" onClick={props.onClick}>
      <div className='project__imageBg' >
         <img src={require(`../../../public/assets/${img}`)} alt='project'/>
      </div>
      <h2 className="title">{name}</h2>
      <h3 className="subtitle gray">{date}</h3>
    </div>
  );
}
  
export default Project;
  