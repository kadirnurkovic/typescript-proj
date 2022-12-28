import React from "react";
import {InterfaceTask} from "./interfaces";

interface Props {
    task?: InterfaceTask;
}

const TDTask = ({task}: Props) => {
    return (
        <div>{task?.taskName}</div>
    )
};

export default TDTask;