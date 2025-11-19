export default function Skills() {
    const skills = [
        { name: "React", description: "Building dynamic, component-based web applications." },
        { name: "JavaScript", description: "Writing clean, modern, and efficient JS code." },
        { name: "HTML & CSS", description: "Crafting responsive and accessible layouts." },
        { name: "Vite", description: "Fast development environment and bundling." },
        { name: "Git", description: "Version control and collaboration with GitHub." }
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.name} title={skill.description}>{skill.name}</li>
                ))}
            </ul>
        </section>
    );
}
