import React from 'react'
import Heading1 from '../Packeges/Heading1'
import Card2 from '../Packeges/Card2'
import '../index.css'

function Review() {
    return (
        <>
            <div className='review'>
                <div className='container'>
                    <Heading1 text='Customer Reviews' />
                    <div className='Flex'>
                        <div className='flexcolumn'>
                            <Card2 textcontent1='Love it, unique design and easy to manage! great job!! :-)' textcontent2='beatneuhaus' textcontent3='Themeforest Customer' />
                            <Card2 textcontent1='This is a beautiful theme that has helped me create my portfolio in a professional and sleek manner. The customer support is out this world and very prompt. I highly recommend this theme to anyone.' textcontent2='Matth1991' textcontent3='Themeforest Customer' />
                            <Card2 textcontent1='The best theme which I could find. Fast and clear customers service. Thank you!' textcontent2='andrey_gap' textcontent3='Themeforest Customer' />
                            <Card2 textcontent1='Clean, Easy to understand even if you have 0 knowledge! and most important - SUPERB support.' textcontent2='ybalas1' textcontent3='Themeforest Customer' />
                        </div>
                        <div className='flexcolumn'>
                            <Card2 textcontent1="I wasn't able to select the main reason for my rating... As I give 5 stars for all mentioned in the drop-down menu! Customizability, Code Quality and most important... Awesome Customer Support! Simply WOW! I would recommend this template to all developers, and I will make sure that all my clients choose a CV/Portfolio from LMPixels when it comes to customizing their websites! Thanks again for the great and extremely quick support!!!!!!" textcontent2='atomoum' textcontent3='Themeforest Customer' />
                            <Card2 textcontent1='This Theme is a very powerful Portfolio, CV and Resume theme. It has all the features a young professional needs. The customer service is fantastic and I can really recommend buying this. My website looks fantastic and much more expensive, than it actually was. 5/5!' textcontent2='vpate' textcontent3='Themeforest Customer' />
                            <Card2 textcontent1="Very quick and helpful support. Seriously the best I've worked with. Ever." textcontent2='defweezard' textcontent3='Themeforest Customer' />
                        </div>
                        <div className='flexcolumn'>
                            <Card2 textcontent1="The theme was as described and imaged, and the customer support has been fantastic! Linar has answered some very mundane and some more technical questions very promptly for me, and I am a very satisfied customer. I only wish there was the option to 'tip' so I could buy him a beer." textcontent2='atomoum' textcontent3='Themeforest Customer' textcontent4='Thanks again and looking forward to keep working with you on this and other projects!' />
                            <Card2 textcontent1='I am really happy about my decision to purchase this theme. There is really nothing I could complain about. Both design and code quality is excellent. Thanks LMPixels' textcontent2='julimeier' textcontent3='Themeforest Customer' />
                            <Card2 textcontent1='I have bought many WordPress themes over the years. The thought and care put into to this great theme make it the best I have ever purchased. In addition, the customer service/support is also the best. It is responsive, fast and caring. Kudos!' textcontent2='nickp' textcontent3='Themeforest Customer' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
