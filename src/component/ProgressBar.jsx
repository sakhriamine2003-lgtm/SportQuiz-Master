import React from "react";

const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;
    return (
        <div className="w-full mb-6 text-left">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                    Progression
                </span>
                <span className="text-sm font-bold text-[#8D6DEE]">
                    {current} / {total}
                </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-100">
                <div 
                    className="bg-[#8D6DEE] h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }} 
                ></div>
            </div>
        </div>
    );
};
export default ProgressBar;