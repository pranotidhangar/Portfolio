import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ycmou-logo.jpg"
								alt="ycmou"
								className="work-image"
							/>
							<div className="work-title">Pursuing MBA</div>
							<div className="work-subtitle">
								YCM, Nashik
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./kce.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Btech in E&TC</div>
							<div className="work-subtitle">
								KCES's COEM, Jalgaon
								<div>CGPA - 8.5</div>
							</div>
							<div className="work-duration">2020-2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
