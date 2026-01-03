import Layout from '@/components/layout/Layout';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const councilMembers = [
  {
    name: 'Dr. Anand Krishnamurthy',
    designation: 'Dean of Academics',
    qualification: 'PhD in Aviation Management, MBA, B.Tech',
    expertise: 'Aviation Industry Expert with 25+ years experience',
    initials: 'AK',
  },
  {
    name: 'Prof. Meera Shetty',
    designation: 'Head - Department of Management',
    qualification: 'PhD in Business Administration, M.Com',
    expertise: 'Corporate Training & Development Specialist',
    initials: 'MS',
  },
  {
    name: 'Dr. Rajesh Patil',
    designation: 'Head - Department of Nursing',
    qualification: 'PhD in Nursing, MSc Nursing, BSc Nursing',
    expertise: 'Healthcare Management & Clinical Practice',
    initials: 'RP',
  },
  {
    name: 'Prof. Kavitha Nair',
    designation: 'Head - Department of Computer Science',
    qualification: 'M.Tech in AI/ML, MCA',
    expertise: 'Artificial Intelligence & Data Science',
    initials: 'KN',
  },
  {
    name: 'Dr. Subramaniam Iyer',
    designation: 'Head - Department of Paramedical',
    qualification: 'MD, MBBS',
    expertise: 'Medical Education & Healthcare Training',
    initials: 'SI',
  },
  {
    name: 'Prof. Deepa Rani',
    designation: 'Head - Hospitality Management',
    qualification: 'MBA in Hotel Management, B.Sc Hospitality',
    expertise: 'International Hotel Operations',
    initials: 'DR',
  },
  {
    name: 'Mr. Karthik Reddy',
    designation: 'Industry Liaison Officer',
    qualification: 'MBA, B.Tech in Aerospace',
    expertise: 'Aviation Industry Partnerships',
    initials: 'KR',
  },
  {
    name: 'Dr. Shanti Bose',
    designation: 'Research Coordinator',
    qualification: 'PhD in Education, M.Ed',
    expertise: 'Educational Research & Curriculum Development',
    initials: 'SB',
  },
];

const AcademicCouncil = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="ecr-section bg-hero-pattern">
        <div className="ecr-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Academic Excellence
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Academic Council
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our distinguished faculty and resource persons dedicated to academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card">
        <div className="ecr-container">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground">150+</div>
              <p className="text-muted-foreground">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground">50+</div>
              <p className="text-muted-foreground">PhD Holders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground">20+</div>
              <p className="text-muted-foreground">Departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Council Members Grid */}
      <section className="ecr-section bg-background">
        <div className="ecr-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Key Resource Persons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {councilMembers.map((member) => (
              <div key={member.name} className="ecr-card text-center group">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center group-hover:from-primary group-hover:to-gold-dark transition-all">
                  <span className="font-display text-2xl font-bold text-foreground group-hover:text-primary-foreground transition-colors">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">{member.designation}</p>
                <p className="text-xs text-muted-foreground mb-3">{member.qualification}</p>
                <p className="text-sm text-muted-foreground italic">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AcademicCouncil;
