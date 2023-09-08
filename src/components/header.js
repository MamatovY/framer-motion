import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const height = 250;
    const imgWidth = 100;
    const fontSize = '40px';

    return (
        <motion.header
            className="header"
            style={{
                height,
            }}
        >
            <div className="flex">
                <motion.img
                    src="https://octocourses.com/static/7bcadc9ec2ba0513c32383ea8ff863c7/630fb/framer-motion.png"
                    style={{
                        width: imgWidth,
                    }}
                />
                <motion.h2
                    style={{
                        fontSize,
                    }}
                >
                    Hello Coders!
                </motion.h2>
                <motion.button
                    style={{
                        marginLeft: 'auto',
                        // opacity: btnOpacity,
                    }}
                >
                    Click me!
                </motion.button>
            </div>
            <motion.p
                style={{
                    marginTop: '30px',
                    // opacity: pOpacity,
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit porro
                quasi iusto fuga blanditiis, eius amet ea ab omnis voluptatem
                perferendis.
                <button
                    style={{
                        display: 'block',
                        marginTop: '10px',
                    }}
                >
                    Click me!
                </button>
            </motion.p>
        </motion.header>
    );
};

export default Header