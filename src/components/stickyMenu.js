import { useTransform, motion, useScroll } from 'framer-motion';
import '../App.css';
import Header from './header';

const StickyMenu = () => {

    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <div
                className="section"
                style={{ backgroundColor: 'maroon' }}>
                <h1>Hello StackBlitz!</h1>
                <p>Start editing to see some magic happen :)</p>
            </div>
            <div className="section" style={{ backgroundColor: 'peru' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea,
                libero aliquam explicabo aliquid modi sint quae obcaecati voluptatibus
                voluptatem.
            </div>
        </div>
    );
}

export default StickyMenu