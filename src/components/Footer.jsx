import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faStackOverflow}  from '@fortawesome/free-brands-svg-icons'

import {faHouse, faEnvelope, faPhone} from  '@fortawesome/free-solid-svg-icons'
export default function Footer() {
    return (<div className="container my-5"
    style={{  minWidth: 100 + 'vw'}}>
        <footer
            className="text-center text-lg-start text-dark"
            style={{ backgroundColor: '#8DA7BE'}}
        >
            <section
                className="d-flex justify-content-between p-4 text-white"
                style={{ backgroundColor: '#554640' }}
            >
                <div>
                    <span>Get connected with the developer on social networks:</span>
                </div>

                <div>
                    <a href="https://stackoverflow.com/users/22941884/jonathan-maldonado-guem%c3%a1rez" target="_blank" className="text-white me-4">
                        <FontAwesomeIcon icon={faStackOverflow}/>
                    </a>
                    <a href="https://linkedin.com/in/jonathan-maldonado-guemárez-5176592a0" target="_blank" className="text-white me-4">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="https://github.com/jguemarez" target="_blank" className="text-white me-4">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
            </section>

            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Rutgers University</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: '60px',
                                    backgroundColor: '#707078',
                                    height: '2px'
                                }}
                            />
                            <p>
                                My current alma mater when it comes down to all web-development related things.
                                You can check-out the curriculum for the Full Stack Web Development Bootcamp at:
                                <a href='https://bootcamp.rutgers.edu/coding/' target='_blank' style={{
                                    color: '#CDE6F5'
                                }}><br/>
                                https://bootcamp.rutgers.edu/coding</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: '60px',
                                    backgroundColor: '#707078',
                                    height: '2px'
                                }}
                            />
                            <p><FontAwesomeIcon icon={faHouse}/> 
                            <br/>
                            310 Park Ave., Phillipsburg, NJ</p>
                            <p><FontAwesomeIcon icon={faEnvelope}/> 
                            <br/>
                            cantor.dedekind112358@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone}/>
                            <br/>
                             1 (787) 589 5920</p>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="text-center p-3"
                style={{ backgroundColor: '#87919E' }}
            >
                © 2023 Copyright:  <a className="text-dark" href="https://mdbootstrap.com/"> 
                Jonathan Maldonado Guemarez
                </a>
            </div>
        </footer>
    </div>);
}
