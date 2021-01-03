import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";

const About = ({
  data: {
    allStrapiAbout: { nodes: about },
  },
}) => {
  const { title, info, stack, image } = about[0];
  return (
    <Layout>
      <section className='about-page'>
        <div className='section-center about-center'>
          <Image fluid={image.childImageSharp.fluid} className='about-img'/>
          <artcile className='about-text'>
            <Title title={title}/>
            <p>{info}</p>
            <div className='about-stack'>
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </artcile>
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export default About;
