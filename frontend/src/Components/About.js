import React from 'react'
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="">
    <h1 className="header">About Us</h1>
    <div className="d-flex flex-wrap justify-content-around">
      <div className="col-md-12 col-lg-5 m-2 col-sm-12 ">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur?
        </p>
      </div>
      <div className="col-md-12 col-lg-6 col-sm-12 ml-0">
        <img
          src="https://www.nfhs.org/media/3609795/volunteering.jpg"
          alt="dummy"
        />
      </div>
    </div>
  </Container>
  )
}

export default About