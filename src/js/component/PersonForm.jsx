import React, { useState } from "react";

const PersonForm = (props) => {
	const [nombreTarea, setNombreTarea] = useState("");

	const changeName = (e) => {
		//console.log(e.target.value);
		const auxName = e.target.value;
		setNombreTarea(auxName);
	};
	const guardarNombre = () => {
		if (nombreTarea !== null && nombreTarea.length <= 0) {
		} else props.agregarTarea(nombreTarea);
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
