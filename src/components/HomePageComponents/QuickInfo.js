import React from "react"
import { Section } from "../../utils/Section.js"
import SectionTitle from "../../utils/SectionTitle.js"

export default class QuickInfo extends React.Component {
  render() {
    return (
      <Section>
        <SectionTitle message="let us tell you" title="our mission" />
      </Section>
    )
  }
}
