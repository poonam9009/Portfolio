import React, { Component } from 'react'
//import bgImg from './images/about.JPEG'
export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at SolutionTech Hr <span>2020-present</span></h2>
                        <p>I recently have joined the SolutionTech Hr as a Software Developer-Intern.
                           My major part of the work is Requirement gathering, User research and Planing for MVP , 
                           Developing model portfolio for investor by analysing NIFTY historical prices , 
                           Credit cards statement parsing and analysis.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at IIIT Sonepat<span>2017-2021</span></h2>
                        <p>I am pursuing my under-graduation studies in Computer Science. I have taken courses like DSA, OOPs, Computer Networks, Web-Data Management, Data Mining, OS, Java , Android 
                          till now and have better understanding of these subjects. I have participated in many online coding contests on codeforces(max. specialist, 1461), codechef(max. 3*, 1760), hackerearth etc .
                          I have also been part of Drama CLub (AAHWAN) and performed in nukkad natak and skit on social issues since my first year of college.
                          I have also been part of Bhangra Crew (NBC-NIT's Bhagra Crew) and performed bhangra in my 2nd year of college.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2004-2016</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & 
                          Maths with 82% and secondary education with 92%. (^_^) </p>       
                      </div>  
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Interest <span>since 2000</span></h2>
                        <p>I have interest in solving maths problem ,chess,solving rubic's cube,writing,bedminton, reading books ,watching TV series and sleeping etc.
                           besides of technology i love to explore new places (specially mountains and historical places) and food (^_^) </p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
