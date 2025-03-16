import { JSX } from "react"
import './styles.scss';
import { delay, motion } from "framer-motion";

type Props = {
    children: React.ReactNode
}

export default function Stairs({ children }: Props): JSX.Element {
    const anim = (variants: {}, custom?: {}) => ({
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants,
        custom
    })

    const expand = {
        initial: {
            top: 0,
        },
        enter: (i:number) => ({
            top: "100%",
            transition: {
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.38, 0.64, 0.68, 1]
            },
            transitionEnd: {
                height: 0,
                top: 0
            }
        }),
        exit: (i:number) => ({
            height: "100%",
            transition: {
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.38, 0.64, 0.68, 1]
            },
        })
    }

    const overlay = {
        initial: {
            opacity: 0.9,
            transition: {
                duration: 0.8,
                ease: [0.38, 0.64, 0.68, 1]
            },
        },
        enter: {
            opacity: 0
        },
        exit: {
            opacity: 0.9,
            transition: {
                duration: 0.8,
                ease: [0.38, 0.64, 0.68, 1]
            },
        }
    }

    const numberOfColumns = 5;
    
    return (
        <div className="page stairs">
            
            <motion.div {...anim(overlay)} className="background"/>
            <div className="transitions-container">
                {[...Array(numberOfColumns)].map((_, i) => {
                    return <motion.div {...anim(expand, numberOfColumns - i)} key={i} />
                })}
            </div>

            {children}
        </div>
    )
}