import React, { useContext, useEffect } from 'react';
import Datas from '../data/help-area/help-area.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/homeContact.js";
import {LangContext} from "./common/contexts/LangContext";

function HelpArea() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        const form = document.getElementById("form1");
        const name = document.getElementById("name1");
        const email = document.getElementById("email1");
        const subject = document.getElementById("subject1");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const subjectValue = subject.value.trim();

            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }

            if (subjectValue === "") {
                setError(subject, "Subject can't be blank");
            } else {
                setSuccess(subject);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".input-msg1");
            formControl.className = "form-control error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });

    return (
        <Styles>
            {/* Help Area */}
            <section className="home-contact-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                {lang === "ar"?(<h4>{Datas.secTitleArabic}</h4>):(<h4>{Datas.secTitle}</h4>)}
                                
                            </div>
                        </Col>
                        <Col md="12">
                            <form id="form1" className="form">
                                <Row>
                                    <Col md="4">
                                        <p className="form-control">
                                            {lang === "ar"?(<input type="text" placeholder="أكتب اسمك" id="name1" />):( <input type="text" placeholder="Enter your Name" id="name1" />)}
                                           
                                            <span className="input-msg1"></span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                        {lang === "ar"?(<input type="email" placeholder="أكتب ايميلك" id="email1" />):(<input type="email" placeholder="Enter your Email" id="email1" />)}
                                            
                                            <span className="input-msg1"></span>
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <p className="form-control">
                                        {lang === "ar"?(  <input type="number" placeholder="أكتب رقمك" id="subject1" />):(  <input type="number" placeholder="Enter Your Number" id="subject1" />)}
                                          
                                            <span className="input-msg1"></span>
                                        </p>
                                    </Col>
                                    <Col md="12" className="text-center">
                                    {lang === "ar"?(<button>ارسال</button>):(<button>Send Request</button>)}
                                        
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    );
}

export default HelpArea
