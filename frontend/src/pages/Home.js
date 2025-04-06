
import React from 'react'
import MatchasHero from '../components/MatchasHero'
import MatchasHomeFeatures from '../components/MatchasHomeFeatures'
import MatchasMenuHighlights from '../components/MatchasMenuHighlights'
import MatchasAboutBlurb from '../components/MatchasAboutBlurb'
import MatchasTestimonials from '../components/MatchasTestimonials'
import MatchasContactHours from '../components/MatchasContactHours'

export default function Home() {
  return (
    <>
      <MatchasHero />
      <MatchasHomeFeatures />
      <MatchasMenuHighlights />
      <MatchasAboutBlurb />
      <MatchasTestimonials />
      <MatchasContactHours />
    </>
  )
}