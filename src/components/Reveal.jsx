import {useEffect, useRef, useState} from 'react';
import {motion, useInView} from 'framer-motion';

export const Reveal = ({children}) => {
    let ref = useRef(null);
    let isInView = useInView(ref);
    let [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (isInView && !isVisible) {
            setIsVisible(true);
        }
    }, [isInView,isVisible]);
    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 15,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                },
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{delay: 0.5}}
        >
            {children}
        </motion.div>
    )
}