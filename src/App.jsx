import './App.css';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <header>
                <div>
                    <h1>Logan Lessen</h1>
                    <p>Frontend Developer | React "Enthusiast"</p>
                </div>
                <div>
                    <p>
                        I'm a passionate web developer who enjoys experimenting
                        with new technologies and building cool things.
                    </p>
                    <div>
                        <a href='#projects'><span>View my projects</span></a>
                        <a href='#contact'><span>Get in touch</span></a>
                    </div>
                </div>
            </header>
            <Bio />
            <Skills />
            <Projects />
            <Contact />
            <footer>
                &copy; {new Date().getFullYear()} Logan Lessen. All rights reserved.
            </footer>
        </>
    );
}

export default App;
