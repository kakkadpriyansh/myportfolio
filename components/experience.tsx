import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Award, ExternalLink, MapPin, Users, Code, Trophy } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: "Technova Technologies",
      role: ".NET Developer",
      duration: "March 2025",
      description:
        "Developed enterprise web applications using .NET framework and worked on database optimization projects with advanced performance tuning.",
      skills: [
        { name: ".NET", icon: "🔵" },
        { name: "C#", icon: "🔷" },
        { name: "SQL Server", icon: "🗄️" },
        { name: "Web APIs", icon: "🔗" },
        { name: "Performance Optimization", icon: "⚡" }
      ],
      type: "Full-time",
      website: "https://technovatechnologies.com",
      location: "Remote",
      teamSize: "5-10",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      company: "CSRBOX",
      role: "NGO Chatbot Assistant Developer",
      duration: "2023",
      description:
        "Created an intelligent chatbot system using AI/ML to assist NGO operations, volunteer management, and automated customer support.",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "NLP", icon: "🧠" },
        { name: "Chatbot Development", icon: "🤖" },
        { name: "AI/ML", icon: "🔮" },
        { name: "Automation", icon: "⚙️" }
      ],
      type: "Project",
      location: "Remote",
      teamSize: "3-5",
      gradient: "from-green-500/10 to-blue-500/10"
    },
    {
      company: "CodSoft",
      role: "Web Development Intern",
      duration: "2023",
      description:
        "Developed responsive web applications and gained hands-on experience in modern web development practices with agile methodologies.",
      skills: [
        { name: "HTML/CSS", icon: "🌐" },
        { name: "JavaScript", icon: "🟨" },
        { name: "React", icon: "⚛️" },
        { name: "Responsive Design", icon: "📱" },
        { name: "Agile", icon: "🔄" }
      ],
      type: "Internship",
      location: "Remote",
      teamSize: "10+",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
  ]

  const achievements = [
    { icon: "🏆", text: "Completed IBM Cybersecurity Course with Distinction", color: "from-yellow-500/20 to-orange-500/20" },
    { icon: "🚀", text: "Built SAT Preparation adaptive learning platform", color: "from-blue-500/20 to-purple-500/20" },
    { icon: "💼", text: "Successfully completed multiple professional roles", color: "from-green-500/20 to-blue-500/20" },
    { icon: "🎯", text: "Specialized in full-stack development solutions", color: "from-purple-500/20 to-pink-500/20" },
  ]

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Building innovative solutions across diverse technologies and industries
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        {/* Enhanced Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/60 border-gray-700/50 hover:border-white/30 backdrop-blur-xl transform-gpu hover:scale-102 transition-all duration-700"
              style={{
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Enhanced animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <CardContent className="p-10 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start mb-6 lg:mb-0 flex-1">
                    <div className="relative mr-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-500" />
                      <div className="relative p-4 bg-gray-800/90 rounded-full border border-gray-600/50">
                        <Building className="h-8 w-8 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300 hover:text-blue-300 flex items-center gap-2"
                          >
                            {exp.company}
                            <ExternalLink className="h-6 w-6" />
                          </a>
                        ) : (
                          <h3 className="text-3xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                            {exp.company}
                          </h3>
                        )}
                      </div>
                      
                      <h4 className="text-2xl font-semibold text-gray-200 mb-4 group-hover:text-white transition-colors duration-300">
                        {exp.role}
                      </h4>

                      {/* Enhanced metadata */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge className="bg-white/10 text-white border-white/20 px-3 py-1 flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="h-4 w-4 mr-1" />
                          Team: {exp.teamSize}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300 lg:ml-6">
                    <Calendar className="h-6 w-6 mr-3" />
                    <span className="text-lg font-medium">{exp.duration}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {exp.description}
                </p>

                {/* Enhanced skills with icons */}
                <div className="flex flex-wrap gap-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-gray-800/90 text-gray-200 border border-gray-600/50 hover:bg-white hover:text-black transform-gpu hover:scale-110 transition-all duration-300 font-medium px-4 py-2 text-sm backdrop-blur-sm group/skill"
                      style={{
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        animationDelay: `${skillIndex * 0.1}s`,
                      }}
                    >
                      <span className="mr-2 transform group-hover/skill:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Achievements Section */}
        <div className="text-center">
          <Card
            className="inline-block p-12 bg-gray-900/60 border-gray-700/50 relative overflow-hidden backdrop-blur-xl transform-gpu hover:scale-102 transition-all duration-500"
            style={{
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-50" />

            <CardContent className="p-0 relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl scale-150 animate-pulse" />
                  <Award className="h-12 w-12 text-white mr-4 relative z-10" />
                </div>
                <h3 className="text-4xl font-bold text-white">Key Achievements</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="relative group/achievement p-6 bg-gray-800/60 rounded-lg border border-gray-600/30 hover:border-white/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover/achievement:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10 flex items-center">
                      <span className="text-3xl mr-4 transform group-hover/achievement:scale-125 transition-transform duration-300">
                        {achievement.icon}
                      </span>
                      <span className="text-gray-300 group-hover/achievement:text-white transition-colors duration-300 text-lg">
                        {achievement.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
