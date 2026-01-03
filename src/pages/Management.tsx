import Layout from '@/components/layout/Layout';
import { Linkedin, Mail } from 'lucide-react';

const managementTeam = [
  {
    name: 'Mr. Ramesh Kumar',
    designation: 'Chairman',
    qualification: 'MBA, PhD in Education Management',
    bio: 'With over 30 years of experience in educational leadership, Mr. Ramesh Kumar founded ECR with a vision to transform education.',
    initials: 'RK',
  },
  {
    name: 'Mrs. Lakshmi Devi',
    designation: 'Managing Director',
    qualification: 'M.Ed, MBA',
    bio: 'A passionate educator dedicated to nurturing young minds and ensuring quality education reaches every student.',
    initials: 'LD',
  },
  {
    name: 'Dr. Suresh Nair',
    designation: 'Principal',
    qualification: 'PhD in Computer Science, M.Tech',
    bio: 'Dr. Nair brings academic excellence and industry experience to lead the institution towards global standards.',
    initials: 'SN',
  },
  {
    name: 'Mr. Vijay Sharma',
    designation: 'Director - Operations',
    qualification: 'MBA in Operations, B.Tech',
    bio: 'Ensuring smooth operations and world-class infrastructure for the best learning environment.',
    initials: 'VS',
  },
  {
    name: 'Mrs. Priya Menon',
    designation: 'Director - Academics',
    qualification: 'M.Phil in Education, MA',
    bio: 'Spearheading academic innovations and curriculum development aligned with industry requirements.',
    initials: 'PM',
  },
  {
    name: 'Mr. Anil Rao',
    designation: 'Director - Placements',
    qualification: 'MBA in HR, LLB',
    bio: 'Building strong industry relationships to ensure 100% placement assistance for all students.',
    initials: 'AR',
  },
];

const Management = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="ecr-section bg-hero-pattern">
        <div className="ecr-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Leadership
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Management Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Meet the visionary leaders who guide ECR Academy towards excellence in education
            </p>
          </div>
        </div>
      </section>

      {/* Management Grid */}
      <section className="ecr-section bg-card">
        <div className="ecr-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div key={member.name} className="ecr-card text-center group">
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold-gradient flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="font-display text-3xl font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.designation}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.qualification}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Management;
