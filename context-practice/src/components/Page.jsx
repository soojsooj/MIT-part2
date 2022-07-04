import React from 'react'
//Page는 세개의 자녀 component를 갖고 있음.
import Content from './Content'
import Header from './Header'
import Footer from './Footer'


const Page = () => {
  return (
    <div className='page'>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default Page 