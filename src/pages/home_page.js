import React from 'react'
import NavBar from '../components/nav_bar';
import HeroSection from '../components/hero_section';
import CodeInLanguage from '../components/code_in_language';
import CodeExtensions from '../components/code_with_extensions';
import CodeWithCopilot from '../components/code_with_copilot';
import CodeFullyCustomized from '../components/fully_customized';
import CodeAnywhere from '../components/code_anywhere';
import Footer from '../components/footer';
import CodeWithRichFeatures from '../components/rich_features';

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CodeInLanguage />
      <CodeExtensions />
      <CodeWithCopilot />
      <CodeFullyCustomized />
      <CodeAnywhere />
      <CodeWithRichFeatures />
      <Footer />
    </div>
  )
}

export default HomePage