import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Senior Software Engineer with 7+ years building and scaling Java/Spring Boot distributed systems, event-driven microservices, and full-stack platforms using Kafka/RabbitMQ/Solace, Docker/Kubernetes, and AWS/Azure. Delivered 99.9% uptime, reduced manual publishing effort 40%, improved deployment frequency 2x, and cut deployment errors 35% by driving CI/CD automation, test gates, and cloud-native release practices across multi-cloud environments. Shipped 8+ microservices and secure REST/GraphQL APIs with caching and performance tuning, reducing response time 40%, improving system reliability 30%, and enforcing production-grade engineering standards.";

  const experience = [
    {
      company: "Staples INC",
      role: "Senior Software Engineer",
      location: "Remote / Framingham, MA",
      dates: "Jun 2022 – Present",
      highlights: [
        "Architected and implemented event-driven microservices using Java, Spring Boot, Kafka, Solace, and RabbitMQ, eliminating manual document reprocessing and improving system reliability by 30%.",
        "Engineered scalable REST APIs and backend services powering Staples' enterprise content platform, reducing manual publishing effort by 40% and accelerating content turnaround across business teams.",
        "Led hybrid deployments across Azure Cloud and data center infrastructure, integrating Docker, Kubernetes, and CI/CD automation, sustaining 99.9% platform uptime and doubling deployment frequency (2x).",
        "Designed and enforced Azure DevOps CI/CD pipelines with automated test suites and code quality gates, reducing deployment errors by 35% over 18 months and strengthening production stability.",
        "Optimized asynchronous processing and document synchronization via Kafka/Solace/RabbitMQ messaging improvements, reinforcing the ~30% reliability gain and eliminating manual reprocessing across CMS workflows.",
        "Drove performance tuning and monitoring across multi-cloud CMS environments, sustaining 99.9% uptime while supporting 2x higher deployment frequency through more stable releases."
      ]
    },
    {
      company: "Mindstix Software Labs",
      role: "Software Engineer",
      location: "India",
      dates: "Aug 2017 – Jul 2021",
      highlights: [
        "Delivered 8+ production microservices using Java, Spring Boot, and AWS, containerized with Docker and Kubernetes, sustaining 99.9% API uptime and improving scalability by 30% through horizontal scaling.",
        "Implemented secure REST APIs with RBAC and OAuth 2.0 SSO, enforcing least-privilege access and strengthening authentication and authorization for enterprise workloads.",
        "Optimized backend latency by introducing Redis caching on AWS, cutting average response times by 40% under high-traffic conditions; validated performance via JMeter and AWS X-Ray.",
        "Built and operated CI/CD pipelines using Jenkins, Azure Pipelines, and AWS CodeBuild, reducing release cycle time while enabling fault-tolerant multi-region deployments aligned to 99.9% uptime targets.",
        "Delivered integrations with SAP and PayPal using Spring Integration and REST templates, improving external service connectivity and supporting reliable enterprise data exchange.",
        "Standardized reusable backend components and service templates with Java, Spring, and MySQL, accelerating delivery across Agile teams and supporting 8+ microservices in production."
      ]
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'Node.js', 'Python', 'C++']
    },
    {
      icon: TrendingUp,
      title: 'Backend & Frameworks',
      skills: ['Spring', 'Spring Boot', 'Spring Cloud', 'JPA/Hibernate', 'Thymeleaf', 'Bloomreach CMS', 'Camunda BPM', 'Apache Libraries']
    },
    {
      icon: Users,
      title: 'Databases & Messaging',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Couchbase', 'Oracle', 'Apache Kafka', 'RabbitMQ', 'Solace']
    },
    {
      icon: Lightbulb,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Azure DevOps', 'Git', 'CI/CD Pipelines', 'REST APIs', 'GraphQL', 'System Design', 'Performance Optimization']
    }
  ];

  const education = [
    {
      school: "University of North Carolina at Charlotte",
      degree: "Master of Science, Information Technology",
      location: "Charlotte, NC",
      dates: "Aug 2021 – Dec 2022",
      details: "Advanced studies in Information Technology with focus on distributed systems and cloud computing."
    },
    {
      school: "CDAC",
      degree: "Post-Graduate Diploma, Advanced Computing",
      location: "India",
      dates: "Feb 2017 – Aug 2017",
      details: "Intensive program in advanced computing technologies and software engineering."
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor of Engineering, Electronics Engineering",
      location: "India",
      dates: "Jun 2011 – May 2015",
      details: "Foundation in electronics engineering with coursework in systems and software development."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">GAURAV MULAY</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Gaurav Mulay"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              GAURAV MULAY
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Senior Software Engineer | Java, Microservices & Cloud
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              CHARLOTTE, NC, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                💻 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'PLATFORM UPTIME', value: '99.9%', detail: 'Sustained Availability' },
              { label: 'PERFORMANCE GAIN', value: '40%', detail: 'Response Time Reduction' },
              { label: 'DEPLOYMENT IMPROVEMENT', value: '2x', detail: 'Frequency Increase' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Senior Software Engineer specializing in Java/Spring Boot microservices, event-driven architectures, and cloud-native solutions. Proven track record of delivering high-availability systems and driving DevOps excellence across multi-cloud environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Microservices Architecture',
                detail: 'Architected and delivered 8+ production microservices using Java, Spring Boot, and event-driven patterns with Kafka/RabbitMQ/Solace, improving system reliability by 30% and scalability by 30%.'
              },
              {
                icon: Rocket,
                title: 'Cloud & DevOps',
                detail: 'Led hybrid deployments across Azure and AWS with Docker/Kubernetes, sustaining 99.9% uptime while doubling deployment frequency through CI/CD automation and reducing deployment errors by 35%.'
              },
              {
                icon: Lightbulb,
                title: 'Performance Optimization',
                detail: 'Optimized backend systems with Redis caching and performance tuning, cutting response times by 40% under high-traffic conditions while enforcing production-grade engineering standards.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              7+ years of software engineering experience building enterprise microservices, event-driven systems, and cloud-native platforms at Staples and Mindstix Software Labs.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Full-stack development, microservices architecture, and cloud infrastructure expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss Java microservices, cloud architecture, or distributed systems engineering opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+19803108769"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (980) 310-8769
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/gaurav-mulay/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:mulaygaurav04@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                mulaygaurav04@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Gaurav Mulay · Senior Software Engineering & Cloud Architecture.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;