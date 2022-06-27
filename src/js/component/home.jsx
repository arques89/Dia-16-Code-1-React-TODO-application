import React, { useState } from "react";

//include images into your bundle
import PersonForm from "./PersonForm.jsx";
import "../../styles/Home.css";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		const auxTask = tasks.concat(task);
		setTasks(auxTask);
	};
	const deleteTask = (index) => {
		const auxDeleteTask = tasks.filter((task, ind) => {
			if (index !== ind) return task;
		});
		setTasks(auxDeleteTask);
	};

	return (
		<>
			<h1 className="principal">4Geeks Academy</h1>
			<div className="text-center">
				<h1>todo</h1>
				<PersonForm addTask={addTask} />
				{tasks.map((tarea, index) => {
					return (
						<>
							<div className="el">
								<div key={index} className="tarea-texto">
									<h3>{tarea}</h3>
								</div>
								<div className="botonera">
									<button
										onClick={() => {
											deleteTask(index);
										}}
										className="boton">
										X
									</button>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Home;
