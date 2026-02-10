use crate::components::{Bio, Contact, Projects, Skills};
use yew::prelude::*;

#[component]
pub fn App() -> Html {
    html! {
        <>
        <header>
            <div>
                <h1>{ "Logan Lessen" }</h1>
                <p>{ "Frontend Developer | React \"Enthusiast\"" }</p>
            </div>
            <div>
                <p>
                    {
                    "I'm a passionate web developer who enjoys experimenting
                    with new technologies and building cool things."
                    }
                </p>
                    <div>
                        <a href="#projects"><span>{ "View my projects" }</span></a>
                        <a href="#contact"><span>{ "Get in touch" }</span></a>
                    </div>
            </div>
        </header>
        <Bio />
        <Skills />
        <Projects />
        <Contact />
        </>
    }
}
