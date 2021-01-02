import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "cloud services (AWS)",
    text: [`ECS`, `SQS`, `S3`, `EMR`, `SNS`, `Elasticsearch`, `Redshift`],
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "languages",
    text: [`TypeScript`, `Javascript`, `Python`, `C#`, `Java`, `SQL`, `HTML5`, `CSS`],
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "technologies/frameworks",
    text: [`React.js`, `Node.js`, `Redux`, `Express.js`, `ASP.NET Core`, `Flask`, `Elasticsearch`],
  },
]
