// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesVolume from "../components/VolumeServices/AboutServicesVolume"
import ServicesPageVolume from "../components/VolumeServices/ServicesPageVolume"
import TestimonialsVolume from "../components/VolumeServices/TestimonialsVolume"
import BlogVolume from "../components/VolumeServices/BlogVolume"
import ContactServicesVolume from "../components/VolumeServices/ContactServiceVolume"
import '../components/serviceFolder/ServicesTest.css'
// import PagesVolume from "../components/VolumeServices/PagesVolume"


export const VolumesServices = () => {
  return (
    <>
      <AboutServicesVolume />
      <ServicesPageVolume />
      {/* <Counter />
      <Portfolio /> */}
      {/* <PagesVolume /> */}
      <TestimonialsVolume />
      <BlogVolume />
      <ContactServicesVolume />
    </>
  )
}

export default VolumesServices;