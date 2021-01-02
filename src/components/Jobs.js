import React, { useState } from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        desc {
          id
          name
        }
        position
      }
    }
  }
`;

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query);
  const uniqueJobs = [...new Set(jobs.map((jobs) => jobs.company))];

  const [value, setValue] = useState(0);
  const { company, date } = jobs[value];

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {uniqueJobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item}
              </button>
            );
          })}
        </div>
        {/* job description */}
        <div>
          {jobs.map((job) => {
            if (job.company === company) {
              return (
                <article kye={job.id} className="job-info">
                  <h3>{job.position}</h3>
                  <h4>{job.company}</h4>
                  <p className="job-date">{job.date}</p>
                  {job.desc.map((item) => {
                    return (
                      <div key={item.id} className="job-desc">
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{item.name}</p>
                      </div>
                    );
                  })}
                </article>
              );
            }
          })}
        </div>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  );
};

export default Jobs;
