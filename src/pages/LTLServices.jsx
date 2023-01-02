import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesLTL from "../components/LTLPage/AboutServicesLTL"
import ServicesPageLTL from "../components/LTLPage/ServicesPageLTL"
import TestimonialsLTL from "../components/LTLPage/TestimonialsLTL"
import BlogLTL from "../components/LTLPage/BlogLTL"
import ContactServicesLTL from "../components/LTLPage/ContactServiceLTL"
import '../components/serviceFolder/ServicesTest.css'


export const LTLServices = () => {
  return (
    <>
      <AboutServicesLTL />
      {/* <ServicesPageLTL /> */}
      {/* <Counter />
      <Portfolio /> */}
      <TestimonialsLTL />
      <BlogLTL />
      <ContactServicesLTL />
    </>
  )
}

export default LTLServices;