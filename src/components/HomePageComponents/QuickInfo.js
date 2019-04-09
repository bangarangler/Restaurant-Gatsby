import React from "react"
import { Section } from "../../utils/Section.js"
import SectionTitle from "../../utils/SectionTitle.js"
import { SectionButton } from "../../utils/Button.js"
import { Link } from "gatsby"
import QuickInfoWrapper from "../../utils/QuickInfoWrapper.js"

export default class QuickInfo extends React.Component {
  render() {
    return (
      <Section>
        <SectionTitle message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <React.Fragment>
            {" "}
            Sit quod iure ab aliquid eius Totam eius iste impedit exercitationem
            eveniet. Distinctio maxime cum magni doloribus et Harum natus
            facilis itaque nam nam labore. Consectetur obcaecati amet
            auteexpedita quaerat? Distinctio aspernatur recusandae provident
            harum autem. Accusamus culpa ab nemo ipsam sunt Nostrum sit
            quibusdam explicabo debitis facere
          </React.Fragment>
          <Link to="/about" style={{ textDecoration: `none` }}>
            <SectionButton>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}
