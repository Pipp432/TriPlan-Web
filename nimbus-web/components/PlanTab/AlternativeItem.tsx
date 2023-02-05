import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AlternativeItem = () => {
    return (
        <div className="flex flex-col m-4 place-items-center gap-2">
            <div className="bg-sky-300 h-44 w-44 rounded-full"></div>
            <div className="text-2xl font-extrabold">Title</div>
            <div className="bg-yellow-300 w-40 h-4">Stars</div>
            <div className="text-xs w-44 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ratione blanditiis Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Officiis ratione blanditiis
            </div>
            <div className="cursor-pointer">
                More
                <ArrowDropDownIcon />
            </div>
        </div>
    );
};

export default AlternativeItem;
