function SkillsSection() {
  const skills = [
    {
      title: "Generative AI",
      description: "Learn to create with AI tools",
      image: "https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png",
      link: "https://www.udemy.com/topic/generative-ai/"
    },
    {
      title: "IT Certifications",
      description: "Prepare for industry certifications",
      image: "https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png"
    },
    {
      title: "Data Science",
      description: "Master data analysis and visualization",
      image: "https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png"
    }
  ];

  return (
    <div className="skills-section">
      <div className="container">
        {/* Main Heading */}
        <div className="skills-header">
          <h1>Learn essential career and life skills</h1>
          <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-image">
                <img src={skill.image} alt={skill.title} />
              </div>
              <div className="skill-info">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                {skill.link && (
                  <a href={skill.link} className="skill-link">Explore {skill.title}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;