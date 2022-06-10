import React, { useState } from "react";
import PersonForm from "./PersonForm.jsx";
//create your first component
const Home = () => {
	const [tareas, setTareas] = useState([]);
	const agregarTarea = (nombre) => {
		const auxTarea = tareas.concat(nombre);
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-x-lg"
								viewBox="0 0 16 16">
								<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
							</svg>
						</button>
					</>
				);
			})}
		</div>
	);
};
export default Home;
