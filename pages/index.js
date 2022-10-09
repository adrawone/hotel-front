/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import axios from "axios";

export default function Index() {
	const [hotels, setHotels] = useState([]);
	const getHotels = () => {
		axios.get("http://localhost:8000/api/hotel").then(function (response) {
			if(response.status === 200){
				setHotels(response.data)
			}
		});
	};

	useEffect(() => {
		getHotels();
	}, []);

	return (
		<>
			<IndexNavbar fixed />
			<section className="header relative pt-16 items-center flex h-screen max-h-860-px">
				<div className="container mx-auto items-center flex flex-wrap">
					<div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
						<div className="pt-32 sm:pt-0">
							<h2 className="font-semibold text-4xl text-blueGray-600">
								beautiful hotel of my dream
							</h2>
						</div>
					</div>
				</div>
				<img
					className="absolute top-0 b-auto h-30 right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-460-px"
					src="/img/pattern_nextjs.png"
					alt="..."
				/>
			</section>

			<section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
				<div
					className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
							className="text-blueGray-100 fill-current"
							points="2560 0 2560 100 0 100"></polygon>
					</svg>
				</div>
				<div className="container mx-auto">
					<div className="flex flex-wrap items-center">
						{hotels?.map((hotel) => {
							return (
								<Link href={`hotel/${hotel?.id}`}>
									<div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32 cursor-pointer">
										<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
											<img
												alt="..."
												src={hotel?.imageUrl}
												className="w-full align-middle rounded-t-lg"
											/>
											<blockquote className="relative p-8 mb-4">
												<svg
													preserveAspectRatio="none"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 583 95"
													className="absolute left-0 w-full block h-95-px -top-94-px">
													<polygon
														points="-30,95 583,95 583,65"
														className="text-blueGray-700 fill-current"></polygon>
												</svg>
												<h4 className="text-xl font-bold text-white">
													{hotel?.name}
												</h4>
												<p className="text-md font-light mt-2 text-white">
													{hotel?.description}
												</p>
											</blockquote>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

