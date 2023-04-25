import React from 'react'
import web from "./images/m1.webp";
import Common from './Common';
export default function Home() {
    return (
        <>
          <Common name='Grow your Bussiness with ' imgsrc={web} visit="/service" btname="Get Started" />
        </>
    )
}
