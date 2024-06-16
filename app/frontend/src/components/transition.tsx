"use client";

import { motion } from "framer-motion";

export default function Transition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ y: 1000, x: 20, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.75 }}
        >
            {children}
        </motion.div>
    );
}