import "./hero.scss";
import {motion} from "framer-motion";

const Hero = () => {
   const textVariants = {
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1,
            },
        },
        scrollButton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }
    };
    const sliderVariants ={
        initial:{
            x:0,
            
        },
        animate:{
            x:"-220%",
            opacity:1,
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:50,
            },
        },
    }

  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer"
         variants={textVariants}
         initial="initial"
         animate="animate"
        >
            <motion.h2 variants={textVariants}>Sanni Emmanuel</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer and Technical Writer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                 <motion.button variants={textVariants}>See the Latest Works</motion.button>
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll_btn" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} intials="intial" animate="animate">
            Website Developer Technical writer

        </motion.div>
        <div className="imageContainer">
            <img src="" alt="" className="heropic"/>
        </div>
    </div>
  )
}

export default Hero