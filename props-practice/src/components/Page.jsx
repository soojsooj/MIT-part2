import React from 'react'
//Page component는 세개의 childeren을 갖고있음. Header, Content, Footer.
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Page = ({isDark, setIsDark}) => {
  return (
    <div className='page'>
        <Header isDark={isDark} />
        <Content isDark={isDark} />
        <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default Page