/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { URL_HOTEL } from "Constants/url";
import axios from "axios";

import CardRoom from "components/Cards/CardRoom.js";

export default function Hotel() {
	const router = useRouter();
	const [hotelInfo, setHotelInfo] = useState();
	const [roomSelected, setRoomSelected] = useState(null);

	const { id } = router.query;
	const getHotels = () => {
		axios.get(`${URL_HOTEL}/${id}`).then(function (response) {
			if (response.status === 200) {
				setHotelInfo(response.data);
			}
		});
	};

	const selectRoom = (room) => {
		setRoomSelected(room);
	};

	useEffect(() => {
		getHotels();
	}, []);

	return (
		<>
			<IndexNavbar fixed transparent />
			<main className="profile-page">
				<section className="relative block h-500-px">
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage: `url(${hotelInfo?.hotelImage})`,
						}}>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-50 bg-black"></span>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
						style={{ transform: "translateZ(0)" }}>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0">
							<polygon
								className="text-blueGray-200 fill-current"
								points="2560 0 2560 100 0 100"></polygon>
						</svg>
					</div>
				</section>
				<section className="relative py-16 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="text-center mt-12">
									<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
										{hotelInfo?.hotelName}
									</h3>

									<div className="mb-2 text-blueGray-600">
										<i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
										{hotelInfo?.hotelDescription}
									</div>
								</div>
								{/*  */}
								<div className="mt-10 py-10 border-t border-blueGray-200">
									{!roomSelected ? (
										<>
											{/* selecionar habitaciones */}
											<div className="w-full px-4">
												<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
													habitaciones
												</h3>
												<div className="grid grid-cols-2 gap-x-8 gap-y-4 ">
													{hotelInfo?.rooms.map((room) => {
														return (
															<CardRoom data={room} selectRoom={selectRoom} />
														);
													})}
												</div>
											</div>
										</>
									) : (
										<>
											<button
												className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="button"
												onClick={() => selectRoom(null)}>
												atras
											</button>
											<div className="flex flex-col">
												{/* selecionar habitaciones */}

												<div className="w-full px-4 ml-48 ">
													<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
														cotizar
													</h3>
													<p>{roomSelected?.name}</p>
													<p>camas:{roomSelected?.beds}</p>
													<p>capacidad:{roomSelected?.capacity}</p>

													<div></div>
													<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
														<form>
															<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
																select reservation
															</h6>

															<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
																User Information
															</h6>
															<div className="flex flex-wrap">
																<div className="w-full lg:w-6/12 px-4">
																	<div className="relative w-full mb-3">
																		<label
																			className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
																			htmlFor="grid-password">
																			Email address
																		</label>
																		<input
																			type="email"
																			className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
																			defaultValue=""
																		/>
																	</div>
																</div>
																<div className="w-full lg:w-6/12 px-4">
																	<div className="relative w-full mb-3">
																		<label
																			className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
																			htmlFor="grid-password">
																			First Name
																		</label>
																		<input
																			type="text"
																			className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
																			defaultValue=""
																		/>
																	</div>
																</div>
																<div className="w-full lg:w-6/12 px-4">
																	<div className="relative w-full mb-3">
																		<label
																			className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
																			htmlFor="grid-password">
																			Last Name
																		</label>
																		<input
																			type="text"
																			className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
																			defaultValue=""
																		/>
																	</div>
																</div>
															</div>
														</form>
													</div>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
