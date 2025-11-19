export default function Projects() {
    const projects = [
        {
            name: "NOAA Water Column Sonar Visualization",
            description: "A web visualization and data processing tool for sonar data collected by NOAA",
            link: "https://noaa-capstone-website.vercel.app/",
            skills: ["React", "ThreeJS", "Vite"]
        },
        {
            name: "Taskless.nvim",
            description: "A neovim plugin focusing on making the build process easier within the editor",
            link: "https://github.com/LeGarbage/taskless.nvim",
            skills: ["Lua", "Neovim", "Editing"]
        },
        {
            name: "Codewars Leaderboard",
            description: "A dynamic command-line leaderboard for Codewars written in Python",
            link: "https://github.com/LeGarbage/codewars_leaderboard",
            skills: ["Python", "APIs", "Data"]
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projects.map(project => (
                <div className="project-card" key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-footer">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        <div className="project-skills">
                            {project.skills.map(skill => (
                                <span className="project-skill" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
