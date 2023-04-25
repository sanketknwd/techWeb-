import React from 'react'
import web from "./images/ab.jpg";
import Common from './Common'
export default function About() {
  return (
    <>
        <Common name='Welcome to About Page' imgsrc={web} visit="/contact" btname="Contact Now" />
    </>
  )
}
