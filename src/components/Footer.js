import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMapMarkerAlt, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'reactstrap'

function Footer() {
    return (
        <Container>
        <FooterContainer className="main-footer">

            <div className="footer-middle">
                <div className="container">
                    <div className="row">

                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>NepWork</h4>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon icon ={faMapMarkerAlt} /> &nbsp;Baneshwor, KTM</li>
                                <li><FontAwesomeIcon icon ={faEnvelope} /> &nbsp;abc@work.com</li>
                                <li><FontAwesomeIcon icon ={faMobile} /> &nbsp;9813928383838</li>
                                
                            </ul>
                        </div>


                     


                        {/* Column 2 */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
 
                                <li><a href="/">Home</a></li>
                    
                                <li><a href="/About">About</a></li>
                                <li><a href="/Registration">Registration</a></li>
                                
                            </ul>
                        </div>

                        {/* Column 3 */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Get in touch</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Instagram</a></li>
                    
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Snapchat</a></li>
                                
                            </ul>
                        </div>



                        {/* Column 4 */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Our Partners</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Sangam Inc.</a></li>
                                <li><a href="/">CG Group</a></li>
                    
                                <li><a href="/">Big 3</a></li>
                                <li><a href="/">DocSity</a></li>
                                
                            </ul>
                        </div>

                    </div>

                    {/* Footer Bottom */}

                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} DocApp all right reserved
                    </p>
                    </div>

                </div>
            </div>
        </FooterContainer>
        </Container>
    );
}

export default Footer;

const FooterContainer = styled.footer`

.footer-middle{

    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-topo: 3rem;
    padding-bottom: 2rem;
}

ul li a{
    color: var(--mainGrey);
    text-decoration: none;
}

ul li a:hover{
    color: var(--mainLightGrey);
}
`;