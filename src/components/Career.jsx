import React, { useState } from 'react';
import { jobOpenings } from '../data/career';
import { MapPin, Clock3, Users, X } from "lucide-react";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const visibleJobs = showAllJobs ? jobOpenings : jobOpenings.slice(0, 8);

  const openModal = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <section id="career" className="py-16 md:py-24 md:px-4">
      <div className="max-w-full mx-auto px-0">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="bg-blue inline text-white text-center px-4 py-1 rounded-full text-sm mb-4">Careers</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Join Our Team</h2>
          <p className="text-gray-600 text-lg">
            Explore exciting career opportunities at FAI and be part of a team that's transforming corporate services.
          </p>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {visibleJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg border border-gray hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-blue font-semibold">{job.department}</p>
              </div>
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex items-center">
                  {/* Location */}
                  <MapPin className="mr-2 w-5 h-5 text-blue font-bold" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  {/* Type */}
                  <Clock3 className="mr-2 w-5 h-5 text-blue font-bold" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  {/* Vacancies */}
                  <Users className="mr-2 w-5 h-5 text-blue font-bold" />
                  <span>{job.vacancies} {job.vacancies === 1 ? "Vacancy" : "Vacancies"}</span>
                </div>
              </div>
              <button
                onClick={() => openModal(job)}
                className="inline-block px-4 py-2 border border-blue-500 text-blue rounded-md transition-colors"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* View All */}
       {jobOpenings.length > 8 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllJobs(!showAllJobs)}
            className="px-4 py-2 bg-blue text-white rounded hover:bg-blue-700 transition"
          >
            {showAllJobs ? 'Show Less' : 'View All Openings'}
          </button>
        </div>
      )}
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
            <p className="text-lg text-blue mb-2">{selectedJob.department}</p>
            <div className='flex gap-20 py-5'>
              <div className="flex items-center">
                {/* Location */}
                <MapPin className="mr-2 w-5 h-5 text-blue font-bold" />
                <span>{selectedJob.location}</span>
              </div>
              <div className="flex items-center">
                {/* Type */}
                <Clock3 className="mr-2 w-5 h-5 text-blue font-bold" />
                <span>{selectedJob.type}</span>
              </div>
              <div className="flex items-center">
                {/* Vacancies */}
                <Users className="mr-2 w-5 h-5 text-blue font-bold" />
                <span>{selectedJob.vacancies} {selectedJob.vacancies === 1 ? "Vacancy" : "Vacancies"}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2"><strong>Description</strong> <br /> {selectedJob.description}</p>
            <div className='mt-4'>
              <p className="text-gray-600 mb-0"><strong>Responsibilities</strong></p>
              <ul className="list-disc pl-6">
                {selectedJob?.responsibilities?.map((item, index) => (
                  <li key={index} className="text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-4'>
              <p className="text-gray-600 mb-0"><strong>Requirements</strong></p>
              <ul className="list-disc pl-6">
                {selectedJob?.responsibilities?.map((item, index) => (
                  <li key={index} className="text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className='mt-4'>
              <a
                href={selectedJob.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </a>
            </button>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-lg"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Career;
