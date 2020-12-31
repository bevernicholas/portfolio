import React, {useState} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
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
`

const Jobs = () => {
  const {
    allStrapiJobs: { nodes:jobs },
  } = useStaticQuery(query);
  const uniqueJobs = [...new Set(jobs.map(jobs => jobs.company))];

  const [value, setValue] = useState(0);
  const {company, position, date, desc} = jobs[value];

  return <section className="section jobs">
    <Title title="experience" />
    <div className = "jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {uniqueJobs.map((item, index) => {
          return <button key={index}>{item}</button>
        })}
      </div>
    </div>
  </section>
}

export default Jobs
