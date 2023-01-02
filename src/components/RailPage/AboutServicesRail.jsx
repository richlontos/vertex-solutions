import React from "react"
import { Heading } from "../common/Heading"
import { aboutRail } from "../data/dummydata"

export const AboutServicesRail = () => {
  return (
    <>
      <section className='aboutSection'>
        <div className='containerService flex'>
          {aboutRail.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='RAIL' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
              </div>
              
            </>
          ))}
        </div>
      </section>
    </>
  )
}


export default AboutServicesRail;