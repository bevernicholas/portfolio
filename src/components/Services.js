import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import services from "../constants/services";
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Expertise"/>
      <div className="section-center services-center">
        {services.map((service) => {
          const {id, icon, title, text} = service;
          return (
          <article key={id} className={"service"}>
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <div>
              {text.map((item, index) => {
                return (
                  <div key={index} className='services-desc'>
                    <FaAngleDoubleRight className='services-icon'></FaAngleDoubleRight>
                    <p>{item}</p>
                  </div>
                )
              })}
            </div>
            {/* <p>{text}</p> */}
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
