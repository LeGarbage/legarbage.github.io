use yew::prelude::*;

struct Skill {
    name: String,
    description: String,
}

#[component]
pub fn Skills() -> Html {
    let skills = vec![
        Skill {
            name: "React".to_string(),
            description: "Building dynamic, component-based web applications.".to_string(),
        },
        Skill {
            name: "JavaScript".to_string(),
            description: "Writing clean, modern, and efficient JS code.".to_string(),
        },
        Skill {
            name: "HTML & CSS".to_string(),
            description: "Crafting responsive and accessible layouts.".to_string(),
        },
        Skill {
            name: "Vite".to_string(),
            description: "Fast development environment and bundling.".to_string(),
        },
        Skill {
            name: "Git".to_string(),
            description: "Version control and collaboration with GitHub.".to_string(),
        },
    ];

    html! {
        <section id="skills">
            <h2>{ "Skills" }</h2>
            <ul>
                {
                    skills
                        .iter()
                        .map(
                            |skill| html! {
                                <li key={skill.name.clone()} title={skill.description.clone()}>{ &skill.name }</li>
                            }
                        ).collect::<Html>()
                }
            </ul>
        </section>
    }
}
