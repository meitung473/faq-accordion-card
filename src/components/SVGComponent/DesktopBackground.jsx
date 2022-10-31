import { motion } from "framer-motion";
import React from "react";

const backgroundVariant = {
    hidden: {
        y: "-32rem",
        x: "-32rem",
        opacity: 0,
    },
    show: {
        y: "-24rem",
        x: "-32rem",
        opacity: 0.099,
        transition: {
            staggerChildren: 0.3,
        },
    },
};
const pathVariant = {
    hidden: {
        pathLength: 0,
    },
    show: {
        pathLength: 1,
        transition: {
            duration: 1.5,
        },
    },
};
export default function DesktopBackground() {
    return (
        <motion.g
            fillRule="nonzero"
            fill="none"
            // opacity=".099"
            variants={backgroundVariant}
            initial="hidden"
            animate="show"
        >
            <path
                d="M468.755 937.353L19.744 671.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 381.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 936.933a59.64 59.64 0 01-59.17.42z"
                fill="#6862E6"
            />
            <motion.path
                d="M468.755 561.353L19.744 295.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 5.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 560.933a59.64 59.64 0 01-59.17.42z"
                stroke="#1E1F36"
                variants={pathVariant}
            />
            <motion.path
                d="M468.755 636.353L19.744 370.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 80.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 635.933a59.64 59.64 0 01-59.17.42z"
                stroke="#1E1F36"
                variants={pathVariant}
            />
        </motion.g>
    );
}
