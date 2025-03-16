import { JSX } from "react"
import { motion } from "framer-motion";
import './styles.scss';
import Link from "next/link";

type Props = {
    children: React.ReactNode
}

export default function Inner({ children }: Props): JSX.Element {
    const anim = (variants: {}) => ({
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    })
    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
        }
    }

    const slide = {
        initial: {
            top: "100vh",
        },
        enter: {
            top: "100vh",
        },
        exit: {
            top: "0",
            transition: {
                duration: 1,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    }

    const perspective = {
        initial: {
            y: 0,
            scale: 1,
            opacity: 1
        },
        enter: {
            y: 0,
            scale: 1,
            opacity: 1
        },
        exit: {
            y: -100,
            scale: 0.9,
            opacity: 0.5,
            transition: {
                duration: 1.2,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    }
    return (
        <div className="inner">
            
            <motion.div {...anim(slide)} className="slide"/>
            <motion.div {...anim(perspective)} className="page">
                <motion.div {...anim(opacity)} className="content_wrapper">
                    <div className="header">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    )
}