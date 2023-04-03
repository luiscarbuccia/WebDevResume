import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "May 2015 - Aug 2023",
      title: "Manifest Solutions",
      place: "Columbus, OH",
      desc: "Intense 3 month bootcamp preparing students to do software development at an enterprise level.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "May 2022 - Jan 20",
      title: "Senior Web Developer",
      place: "Discover Financial (Contractor)",
      desc: "Collaborated with cross-functional teams to conjure the successful integration of new features and technologies into existing applications."
      +      "Rewrote front end UI with REACT.js, to better conform to technologies being used today"
      +      "Served as a magical mentor to junior developers, teaching them the ways of Java development and unlocking their full potential."
      +      "Conjured up RESTful APIs using Spring Boot, Hibernate, and MySQL, resulting in lightning fast response times. ",
    },
    {
      yearRange: "Oct 2021 - May 2022",
      title: "Senior Analyst/Software Engineer",
      place: "NetJets",
      desc: "Maintained and supported 60+ projects and resolved open defect tickets."
            + "Teamed up with current clients to understand needs for improved functionality, and communicated with engineers and clients to develop enhancements that boosted client satisfaction"
            + "Diagnosed error tickets for Java Microservices and .Net applications.",
    },
    {
      yearRange: "Mar 2017 - Oct 2021",
      title: "Software Engineer",
      place: "JPMorgan Chase",
      desc: "Part of a rebel squad of 3 other developers who worked under the supervision of a senior software engineer to bring to life a fresh, greenfield app with a VUE.js front end and a SpringBoot back end."
            + "Received more coaching and support than a child actor on a movie set, gaining practical experience in Java with Spring Boot and React.js"
            + "Studied data structures to recommend changes in algorithms, which made the code simpler than a 5-year-old's coloring book "
            + "Worked on Android tablet application from branches using MVVM pattern. RESTful API (JAVA backend) for webapp (Angular, VUE.js) and Android apps. "
            + "Worked on internal app. a champion of TDD (JUnit/Jasmine testing) like a gladiator in the arena, pushing your team to maintain at least 70% coverage."
            + "Used a Spring Webflow framework with open source tools (Eclipse Neon IDE, Tomcat, Apache Maven), RactiveJS, and proprietary frameworks. "
            + "Started buildout of Microservices which are now replacing monolith legacy apps built on older tech stack.",
    },
    {
          yearRange: "May 2015 - Mar 2017",
          title: "Software Engineer",
          place: "Manifest Solutions (Contracting at Nationwide)",
          desc: "Practiced test driven development on various customer-facing applications. Worked on JS front-ends with mostly IBM tooled backends (WebSphere, RAD, etc.) in the Java EE stack. Contributed to digitizing proof of insurance while using Angular.js Practiced and participated in all Agile scrum ceremonies.",
        },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Vue.js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
    {
      name: "Java",
      percent: 80,
    },
    {
      name: "Spring Framework",
      percent: 80,
    },
    {
      name: "Struts",
      percent: 60,
    },
    {
      name: "JSPs",
      percent: 60,
    },
    {
      name: "RESTful APIs",
      percent: 75,
    },
    {
      name: "Kafka",
      percent: 70,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
