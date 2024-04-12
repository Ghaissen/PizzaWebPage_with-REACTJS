import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedinIcon />
                <p>&copy;2024 pedrotechpizza.com</p>
            </div>

        </div>
    )
}

export default Footer
