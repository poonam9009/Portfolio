import React, { Component } from 'react'
import bgImg from './images/bg.jpg'
import bgImg2 from './images/bg111.jpg'
import bgImg3 from './images/bg333.jpg'
export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            {/* <div id="colorlib-counter" class="colorlib-counters" 
            style="background-image: url(images/cover_bg_1.jpg);" ></div> */}
            {/* <li className="authorImg" style={{backgroundImage : {bgImg}}}> */}
              {/* <img src = {bgImg} alt ="bg1"/> */}
              <li>
              <div className = "authorImg  " >
                <view>
                  <img src = {bgImg} alt = "poonam"/>
                </view>
              </div>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />Poonam here(^_^)</h1>
                          <p><a className="btn btn-primary btn-learn" href  target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: {bgImg2}}}> */}
              <li>
              <div className = "authorImg  " >
                <view>
                  <img src = {bgImg2} alt = "poonam"/>
                </view>
              </div>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building<br /> THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/poonam9009" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: {bgImg}}}> */}
              <li>
              <div className = "authorImg  " >
                <view>
                  <img src = {bgImg3} alt = "poonam"/>
                </view>
              </div>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Sleep ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://medium.com/@poonam_11720025" target="_blank" rel="noopener noreferrer">View Medium <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
