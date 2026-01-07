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
      period: "July 2025 - November 28, 2025",
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
    <div id="experience" className="px-6 py-16 text-white ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border rounded-full border-white/10 bg-white/5">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-sm white">Professional Journey</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Work <span className="white">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-0 w-px transform bg-white/20 lg:left-1/2"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative mb-16 lg:mb-20 ${
                idx % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto lg:text-left'
              } lg:w-1/2`}
            >

              {/* Content Card */}
              <div className="p-6 ml-8 transition-all duration-300 border lg:ml-0 bg-slate-800/40 backdrop-blur-sm border-gray-100/20 rounded-xl hover:border-white hover:shadow-lg hover:shadow-gray-500/10">
                {/* Period Badge */}
                <div className={`flex flex-col ${idx % 2 === 0 ? 'items-end' : 'items-start'} py-3 border-b border-slate-700`}>
                  <div className="flex items-center gap-2 mb-4 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  
                  <h1 className="mb-2 text-4xl font-bold text-white">
                  {exp.title}
                  </h1>
                  <p className="text-xl text-slate-300">{exp.company}</p>
                </div>

                {/* Achievements */}
                <div className="flex flex-col mt-3 space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-200 lg:text-base">
                      {
                        idx % 2 !== 0 && (<div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>)
                      }
                      <p className="leading-relaxed">
                        {achievement.text}{' '}
                        {achievement.highlight && (
                          <span className="font-bold text-gray-100">
                            {achievement.highlight}
                          </span>
                        )}
                        {achievement.suffix && ` ${achievement.suffix}`}
                      </p>
                      {
                        idx % 2 === 0 && (<div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>)
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default Experience