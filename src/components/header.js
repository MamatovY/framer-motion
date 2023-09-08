import React from 'react';
import { motion, useTransform } from 'framer-motion';

const Header = ({ offsetY, scrollY }) => {
    const heightSizes = [250, 50]
    const imageSizes = [100, 35]
    const fontSizes = ['40px', '20px']

    //Первый аргумент useTransform это значение скролл который меняется
    //Второй это какие значение должны быть у скролл от и до
    //Третий это значение css когда в одной точке одно значение когда доходит до финишной точки другое значение
    const height = useTransform(scrollY, offsetY, heightSizes);
    const imgWidth = useTransform(scrollY, offsetY, imageSizes);
    const fontSize = useTransform(scrollY, offsetY, fontSizes);
    const pOpacity = useTransform(scrollY, [20, 150], [1, 0])
    const btnOpacity = useTransform(scrollY, [135, 300], [0, 1])

    return (
        <motion.header
            className="header"
            style={{
                height,
            }}
        >
            <div className="flex">
                <motion.img
                    src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
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
                        opacity: btnOpacity,
                    }}
                >
                    Click me!
                </motion.button>
            </div>
            <motion.p
                style={{
                    marginTop: '30px',
                    opacity: pOpacity,
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