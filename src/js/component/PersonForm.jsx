import React, { useState } from "react";
const PersonForm = (props) => {
	const [nombre, setNombre] = useState("");
	const changeName = (e) => {
		//console.log(e.target.value);
		const auxName = e.target.value;
		setNombre(auxName);
	};
	const guardarNombre = () => {
		if (tareas !== null && tareas.length <= 0) {
		} else props.agregarTarea(nombre);
	};
	return (
		<div className="container">
			<input type="text" placeholder="Tarea Aqui" onChange={changeName} />
			<button
				onClick={() => {
					guardarNombre();
				}}>
				Guardar
			</button>
		</div>
	);
};
export default PersonForm;
