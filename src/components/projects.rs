use yew::prelude::*;

struct Project {
    name: String,
    description: String,
    link: String,
    skills: Vec<String>,
}

#[component]
pub fn Projects() -> Html {
    let projects = vec![
        Project {
            name: "NOAA Water Column Sonar Visualization".to_string(),
            description:
                "A web visualization and data processing tool for sonar data collected by NOAA"
                    .to_string(),
            link: "https://noaa-capstone-website.vercel.app/".to_string(),
            skills: vec![
                "React".to_string(),
                "ThreeJS".to_string(),
                "Vite".to_string(),
            ],
        },
        Project {
            name: "Taskless.nvim".to_string(),
            description:
                "A neovim plugin focusing on making the build process easier within the editor"
                    .to_string(),
            link: "https://github.com/LeGarbage/taskless.nvim".to_string(),
            skills: vec![
                "Lua".to_string(),
                "Neovim".to_string(),
                "Editing".to_string(),
            ],
        },
        Project {
            name: "Codewars Leaderboard".to_string(),
            description: "A dynamic command-line leaderboard for Codewars written in Python"
                .to_string(),
            link: "https://github.com/LeGarbage/codewars_leaderboard".to_string(),
            skills: vec!["Python".to_string(), "APIs".to_string(), "Data".to_string()],
        },
    ];

    html! {
        <section id="projects">
            <h2>{ "Projects" }</h2>
            {
                projects
                    .iter()
                    .map(
                        |project| html! {
                            <div class={classes!("project-card")} key={project.name.clone()}>
                                <h3>{ &project.name }</h3>
                                <p>{ &project.description }</p>
                                <div class={classes!("project-footer")}>
                                    <a href={ project.link.clone() } target="_blank" rel="noopener noreferrer">{ "View Project" }</a>
                                    <div class={classes!("project-skills")}>
                                        {project.skills.iter().map(|skill| html! {
                                            <span class={classes!("project-skill")} key={skill.clone()}>{skill}</span>
                                        }).collect::<Html>()}
                                    </div>
                                </div>
                            </div>
                        }
                    ).collect::<Html>()
            }
        </section>
    }
}
