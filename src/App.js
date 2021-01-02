import React from 'react';
import Section from "./components/Section";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Projects.css";
import "./styles/Contact.css";
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import WebIcon from '@material-ui/icons/Web';
import CloudIcon from '@material-ui/icons/Cloud';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import GalleryElement from './components/GalleryElement'
import ProfilePicture from './statics/images/profile3.jpg'
// import Slide from "./components/Slide";
// import ArrowForward from '@material-ui/icons/ChevronLeft';
// import ArrowBack from '@material-ui/icons/ChevronRight';

class App extends React.Component {

  state = {
    selectedOption: "home",
    menuMode: "menu__dark",
    fontMenuMode: "main_white",
  }

  constructor(props) {
    super(props);
    this.handlerClickOnMenuOption = this.handlerClickOnMenuOption.bind(this);
    this.handlerClickOnCVButton = this.handlerClickOnCVButton.bind(this);
    this.handleClickOnContactLink = this.handleClickOnContactLink.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlerScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handlerScroll = e => {

    let scroll = window.scrollY;

    if (scroll > 550) {
      this.setState({
        menuMode: "menu__light",
        fontMenuMode: "main_black"
      });
    } else {
      this.setState({
        menuMode: "menu__dark",
        fontMenuMode: "main_white"
      });
    }
  }

  handlerClickOnMenuOption = option => {
    this.setState({ selectedOption: option });
  }

  handlerClickOnCVButton = e => {
    // e.preventDefault();
    window.open("https://drive.google.com/file/d/180g0kZkv7wVmwuiGwi1C_iGVsLrBvVdr/view?usp=sharing");
  }

  handleClickOnContactLink = e => {
    e.preventDefault();
    window.open(e.target.href);
  }

  render() {
    return (

      <React.Fragment>

        <NavigationBar
          clickOnMenuOption={this.handlerClickOnMenuOption}
          selectedOption={this.state.selectedOption}
          menuMode={this.state.menuMode}
          fontMenuMode={this.state.fontMenuMode}
        />

        <Section id="Home">
          <div className="home__cover_page">

            <div id="home__mid_div">
              <span className="home__main_title main_white">
                <span className="main_red">Hi</span> there!</span>
              <br />
              <span className="home__mini_title main_white">
                Let's <span className="main_orange">create</span>
              </span>
            </div>

            <div id="home__footer">
              <span className="home__animation_title main_white">
                I'm <span className="main_red">N</span>ancy <span className="main_red">B</span>ernal_</span>
            </div>

          </div>
        </Section>
        <Section id="About">
          <div className="about__info">

            <div className="about__extract_box">

              <p className="about__extract text">
                <span className="section_title">About <span className="main_red">Me</span></span>
                <br />
                <span className="about__catching_Line">I’m a Full Stack Developer.
                I have more than 3 years of experience working on IT projects.</span> <br />
                I like living new experiences even the bad ones I always learn from them.
                I work hard to achieve my aims and do my best in any activity.
                I learn fast and I adapt to unexpected situations.
              </p>

            </div>

          </div>
          <div className="about__section_box about__edu">

            <span className="about__mini_section_title">Education</span>

            <div className="about__edu_box_info">

              <div>
                <p className="main_text"><span className="main_red">CETI</span><span> - Software Developer
                                    Engineer </span></p>
                <p><span className="about__sec_text">2016 - <span className="about__deco_text">GDL, Jal Mexico</span></span></p>
              </div>

              <div>
                <p className="main_text"><span className="main_red">CETI</span><span> - Computer Technologist
                                </span></p>
                <p><span className="about__sec_text">2012 - <span className="about__deco_text">GDL, Jal Mexico</span></span></p>
              </div>

              <div>
                <p className="main_text"><span><span className="main_red">CEC</span> - English Student </span></p>
                <p><span className="about__sec_text">2020 - <span className="about__deco_text">Cork, Ireland</span></span></p>
              </div>

            </div>

          </div>
          <div className="about__section_box about__skills">

            <div className="about__skills_box_info about__mid_tittle">
              <span className="about__mid_section_title">What can I <span className="main_red">do?</span></span>
            </div>

            <div className="about__skills_box_info">
              <div className="about__skill_icon_box about__icons">
                <CodeIcon /><span className="text">Backend</span>
              </div>
              <div className="about__skill_icon_box about__icons">
                <StorageIcon /><span className="text"> Databases</span>
              </div>
              <div className="about__skill_icon_box about__icons">
                <ImportantDevicesIcon /><span className="text"> Web API's</span>
              </div>
            </div>

            <div className="about__skills_box_info ">
              <div className="about__skill_icon_box about__icons">
                <WebIcon /><span className="main_white text"> Frontend</span>
              </div>
              <div className="about__skill_icon_box about__icons">
                <PhoneAndroidIcon /><span className="text"> Mobile Apps</span>
              </div>
              <div className="about__skill_icon_box about__icons">
                <CloudIcon /><span className="text"> SaaS</span>
              </div>
            </div>

          </div>
        </Section>
        <Section id="Projects">
          {/* <span class="section_title">Projects</span> */}

          <div className="projecs__gallery">
            <div className="projecs__inner_gallery">
              <GalleryElement />
              <GalleryElement />
              <GalleryElement />
              <GalleryElement />
              <GalleryElement />
              <GalleryElement />
              <GalleryElement />
              <GalleryElement />

              {/* <GalleryElement />
              <GalleryElement />
              <GalleryElement /> */}
            </div>

          </div>
          {/* <span class="section_title">Projects</span> */}
          {/* <div className="gallery">
            <button className="gallery__left_button"><ArrowForward style={{ fontSize: 50 }} /></button>
            <Slide slideTitle="Type10" />


            <button className="gallery__right_button"><ArrowBack style={{ fontSize: 50 }} /></button>
          </div> */}

        </Section>
        <Section id="Contact">

          <div className="contact__box banner">
            <div className="contact__profile_pic_box">
              <img src={ProfilePicture} alt="profile pic" className="contact__profile_picture" />
            </div>
            <span className="contact__msg">Get in touch</span>
            <span className="contact__msg_2">I want to hear from you</span>
          </div>
          <div className="contact__box">

            <div className="contact__info_box">
              <span className="contact__info"><MailIcon /> |nancy.bsun@outlook </span>
              <span className="contact__info"><LinkedInIcon /> | <a href="http://www.linkedin.com/in/nancy-bsun" onClick={this.handleClickOnContactLink}>  Nancy Bernal</a></span>
              <span className="contact__info"><GitHubIcon /> | <a href="https://github.com/nyx-6" onClick={this.handleClickOnContactLink}>  nyx-6</a></span>
              <span className="contact__info"><TwitterIcon /> | <a href="https://twitter.com/_nyx6_" onClick={this.handleClickOnContactLink}>  @_nyx6_</a></span>
            </div>

            <div className="contact__button_box">
              <button className="contact__download_button" onClick={this.handlerClickOnCVButton}>Download CV</button>
            </div>

          </div>

        </Section>

      </React.Fragment>

    );
  }
}

export default App;
