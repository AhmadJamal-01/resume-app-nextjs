import React, {useId} from "react";
import Skills from "./skills";
import { skills } from "@/data/page-data";

const AboutMe = ({data, skills}) => {
const {title, body} = data;
const id = useId()
    return(
<section>
    <h2 className="mb-8">{title}</h2>
   {body?.map((el, i) => (<p key={`${id}_${i} `} className="mb-6"> {el} </p>))}
        
<Skills data={skills}/>
</section>
    );
};

export default AboutMe;