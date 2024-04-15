import React from "react";
import AboutMe from "../Components/about-me";
import { aboutMe, skills, professionalData } from "@/data/page-data";
import ProfessionaExperience from "@/Components/ProfessionaExperience";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills}/>
			<ProfessionaExperience data={professionalData}/>
		</div>
	);
};

export default page;