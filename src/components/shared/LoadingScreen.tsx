import { motion } from "framer-motion";

import logo from "../../assets/logo/logo.png";

export default function LoadingScreen() {
    return (
        <div
            className="
                fixed
                inset-0

                z-[9999]

                flex
                flex-col
                items-center
                justify-center

                bg-[#f8fcff]
            "
        >
            <motion.img
                src={logo}
                alt="Logo"
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="w-28"
            />

            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.4,
                }}
                className="
                    mt-4

                    tracking-[8px]

                    font-semibold
                    
                    text-[#1f6f75]
                "
            >
                H & R
            </motion.p>

            <motion.div
                animate={{
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
                className="
                    mt-8

                    text-sm

                    tracking-[4px]

                    uppercase

                    text-[#8b7b68]
                "
            >
                Loading
            </motion.div>
        </div>
    );
}