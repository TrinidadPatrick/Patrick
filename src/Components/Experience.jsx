import React from "react";
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
    {
      title: "Software Developer",
      company: "Sercomm Philippines INC.",
      period: "July 2024 - April 2025",
      achievements: [
        {
          text: "Developed internal web tools using JavaScript and SQL Server,",
          highlight: "reduced manual processing time",
          suffix: "and improving workflow efficiency"
        },
        {
          text: "Created automated SQL scripts for MES data extraction and performance tracking,",
          highlight: "processing 1000+ daily transactions."
        },
        {
          text: "Built workflow automation system for approvals and service requests,",
          highlight: "decreasing response time from 2 days to 4 hours"
        }
      ]
    },
    {
      title: "Software Engineer",
      company: "Eclaro (SPINS)",
      period: "July 2025 - Present",
      achievements: [
        {
          text: "Implemented core features",
          suffix: "to an existing systems based on user requests"
        },
        {
          text: "Resolved user-reported errors and bugs",
          suffix: "to ensure system stability"
        },
        {
          text: "Proposed and presented feature enhancements",
          suffix: "to improve data workflows across multiple systems"
        },
        {
          text: "Collaborated with different teams to",
          highlight: "gather requirements, present solutions, and ensure smooth feature delivery"
        },
        {
          text: "Able to quickly pick up and work with different technologies such as",
          highlight: "Django, Laravel, Google Cloud Console, AWS, and CI/CD"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen  text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-emerald-500/30 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-400/30 to-transparent transform lg:-translate-x-1/2"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative mb-16 lg:mb-20 ${
                idx % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto lg:text-left'
              } lg:w-1/2`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 lg:left-auto lg:right-auto top-0 transform lg:-translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900 shadow-lg shadow-emerald-400/50"></div>

              {/* Content Card */}
              <div className="ml-8 lg:ml-0 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                {/* Period Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400">{exp.period}</span>
                </div>

                {/* Title and Company */}
                <h3 className="text-xl lg:text-2xl font-bold mb-1 text-white">
                  {exp.title}
                </h3>
                <p className="text-emerald-400 font-medium mb-6">{exp.company}</p>

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm lg:text-base">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="leading-relaxed">
                        {achievement.text}{' '}
                        {achievement.highlight && (
                          <span className="text-emerald-400 font-semibold">
                            {achievement.highlight}
                          </span>
                        )}
                        {achievement.suffix && ` ${achievement.suffix}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Experience