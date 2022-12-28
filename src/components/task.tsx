import React from "react";
import {InterfaceTask} from "./interfaces";

interface Props {
    task?: InterfaceTask;
}

const TDTask = ({task}: Props) => {
    return (
        <div>TASK</div>
    )
};

export default TDTask;