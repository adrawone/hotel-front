import React from "react";
import PropTypes from "prop-types";

// components

export default function CardRoom({ data, selectRoom, color }) {
	return (
		<>
			<div
				className={
					"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
					(color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
				}>
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-col  items-start px-4">
						<div className="relative w-full  max-w-full flex-grow flex-1">
							<h3
								className={
									"font-bold text-xl " +
									(color === "light" ? "text-blueGray-700" : "text-white")
								}>
								{data?.name}
							</h3>
							<div>
								<p>capacidad: {data?.capacity}</p>
								<p>camas: {data?.beds}</p>
							</div>
						</div>

						<div className="mt-10 w-full border-t border-blueGray-200">
							<h2 className="font-bold">Precio</h2>
							<p>${data?.price}</p>
						</div>
						<div className="mt-10 ">
							<button
								className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => selectRoom(data)}>
								Selecionar
							</button>
						</div>
					</div>
				</div>
				<div className="block w-full overflow-x-auto"></div>
			</div>
		</>
	);
}

CardRoom.defaultProps = {
	color: "light",
};

CardRoom.propTypes = {
	color: PropTypes.oneOf(["light", "dark"]),
};
