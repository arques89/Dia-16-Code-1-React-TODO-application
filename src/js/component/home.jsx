import React, { useState } from "react";
import PersonForm from "./PersonForm.jsx";

const Home = () => {
	const [tareas, setTareas] = useState([]);

	const agregarTarea = (nombreTarea) => {
		const auxTarea = tareas.concat(nombreTarea); //tareas.push(nombreTarea)
		setTareas(auxTarea);
	};
	const eliminarTarea = (index) => {
		const auxTarea = tareas.filter((tarea, auxIndex) => {
			if (index !== auxIndex) {
				return tarea;
			}
		});
		setTareas(auxTarea);
	};
	return (
		<div className="lista">
			<h1 className="text-center mt-5">TODO LIST</h1>
			<PersonForm agregarTarea={agregarTarea} />
			{tareas.map((tarea, index) => {
				return (
					<>
						<h3> {tarea} </h3>
						<button
							onClick={() => {
								eliminarTarea(index);
							}}>
							X
						</button>
					</>
				);
			})}
		</div>
	);
};
export default Home;
