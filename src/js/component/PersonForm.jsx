import React, { useState } from "react";
import "../../styles/PersonForm.css";

const PersonForm = (props) => {
	const [change, setChange] = useState("");

	const onChange = (text) => {
		setChange(text.target.value);
	};

	const onSave = () => {
		if (change !== null && change.length <= 0)
			return alert("No ha introducido ninguna tarea");
		else return props.addTask(change);
	};

	return (
		<>
			<input
				type="text"
				className="tarea-input"
				placeholder="Ingrese tarea aqui"
				onChange={onChange}
			/>

			<button
				onClick={() => {
					onSave();
				}}
				className="tarea-boton">
				Guardar
			</button>
		</>
	);
};

export default PersonForm;
