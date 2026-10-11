import React from 'react'
import Heading1 from '../Packeges/Heading1'
import Card1 from '../Packeges/Card1'

function Service() {
  return (
    <>
      <div className='service'>
        <div className='container'>
        <Heading1 text='Powerful Theme For Your Promotion'/>
            <div className='cardpart'>
            <Card1 src='src/assets/service.png' text='Fully ' text2 ='Responsive' textcontent='Unique ready to look stunning on any device – from a widescreen monitor to a mobile phone.'/>
            <Card1 src='src/assets/service2.png' text='Drag & Drop' text2 =' Page Builder' textcontent='Unique comes with a full fledged drag & drop page builder that let you create countless pages using the content and media shortcodes.'/>
            <Card1 src='src/assets/service3.png' text='1 Click  ' text2 ='Demo Installer' textcontent='Unique comes with a built in Content Demo Installer. You will be able to install theme content as it is displayed on our theme demo site.'/>
            <Card1 src='src/assets/service4.png' text='Easy ' text2 ='Customizable' textcontent='Easier to create professional websites in no time, even without knowledge of HTML/CSS/PHP, without involvement of developers.'/>
            <Card1 src='src/assets/service5.png' text='Advanced  ' text2 ='Resume' textcontent='Unique clearly communicates your job history, work experience, accomplishments, and education – in the order you desire.'/>
            <Card1 src='src/assets/service6.png' text='Powerful' text2 =' Portfolio' textcontent='Your works or products will have noticed by your visitors. Unique offers a great range of choices for creating your portfolio or a gallery.'/>
            <Card1 src='src/assets/service7.png' text='35+ ' text2 ='Shortcodes' textcontent='Unique contains pre-made pages and shortcodes helps you build your WordPress websites, with its clean and unique design.'/>
            <Card1 src='src/assets/service8.png' text='24/7 ' text2 ='Support' textcontent='You will receive 24/7 support from our dedicated Support Team, which is at the 5 star level in case any assistance is required.'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service
