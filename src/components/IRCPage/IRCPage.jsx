import React from "react";
import styles from "./ircpage.module.scss";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { HeadAnimation } from "../Header/Motion/Motion.jsx";

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import IRC from "../competitions/IRC/IRC.jsx";
import Footer from "../Footer/Footer";
import InfoContainer from "./InfoContainer/InfoContainer.jsx";

const infoData = [
  {
    heading: "ABOUT IRC",
    para1:
      "Started in the year 2017, the International Rover Challenge (formerly Indian Rover Challenge) held its first edition in January of the following year. Over the years, IRC has established itself as one of the leading space robotics competitions.",
    para2:
      "In IRC 2025, there will be an increased emphasis on creating awareness about the best practices and methods of systems engineering. The main focus is to highlight the benefits of an approach covering the whole project life cycle of developing a Mars Rover.",
    para3: null,
    para4: null,
  },
  {
    heading: "COMPETITION OVERVIEW",
    para1:
      "SPROS IRC is a robotics competition focused on space exploration. It invites university students to imagine, design, build, and operate a next-generation astronaut-assistive space rover, capable of performing tasks under Mars-like simulated conditions.",
    para2:
      "The competition aims to give students hands-on, interdisciplinary engineering experience. It emphasizes the integration of technical skills with soft skills such as project management and business planning, preparing participants for real-world challenges.",
    para3: null,
    para4: null,
  },
  {
    heading: "TEAMS AND PARTICIPATION",
    para1:
      "Teams intending to participate must declare their intent and complete registration within the designated timeframe. Registration involves providing team details and applying for the International Rover Design Challenge (IRDC), which serves as both a competition and a critical review phase. The IRDC features its own awards and certifications. As part of the process, teams are required to submit a System Design and Development Review (SDDR) package. This package highlights both the technical and managerial aspects of rover development, including team organization, resource allocation, project planning, budgeting, sponsorships, recruitment strategies, outreach efforts, and technical details such as the rover's design and testing methodology.",
    para2:
      "During the qualifiers, all teams undergo a rigorous review and selection process. Only the top 26 teams meeting all milestones will advance to the on-site Finals. Deadlines and submission guidelines will be shared on the SPROS and IRC websites, and officials may reach out with follow-up questions at any stage. Unlike the International Rover Challenge, there is no elimination process for the International Space Drone Challenge. Teams qualifying for the IRC Finals automatically gain entry to the drone category. Of the 26 finalists, three wildcard spots are reserved for non-Asian teams, which must present their rover to the judges live by November 20, 2023. There is no limit to the number of students per team participating in the Finals.",
    para3: null,
    para4: null,
  },
  {
    heading: "COMPETITION MISSIONS",
    para1:
      "The Finals are divided into three mission categories: Expeditions, Operations, and Assessments. Expeditions include tasks such as the Astrobiology Expedition (ABEx), which requires the rover to function as a mobile scientific laboratory, and the Reconnaissance & Delivery Operation (RDO), which focuses on retrieving and delivering specific items. Another key expedition is the Autonomous Expedition (AutEx), designed to evaluate the rover's ability to navigate independently.",
    para2:
      "Operations include the Instrument Deployment & Maintenance Operation (IDMO), which tests the rover's precision in performing maintenance and deployment tasks. The Assessments involve activities like the Project Implementation & Management Assessment (PIMA) and the Business Plan Presentation (BPP), which emphasize project management and strategic business planning.",
    para3: null,
    para4: null,
  },
  {
    heading: "SYSTEM DESIGN AND DEVELOPMENT REVIEW (SDDR)",
    para1:
      "Teams must submit a System Design and Development Review (SDDR) package by November 10, 2024. The SDDR focuses on both the technical and project management aspects of rover development and includes both a written report and a video presentation. The report should detail the team's organizational structure, resource allocation, project timeline (represented with a PERT chart), initial budget, fundraising strategies, sponsorships, recruitment process, and educational and public outreach efforts.",
    para2:
      "Teams should provide an overview of the current state of rover development, including prototypes, overall system design, science objectives, and the testing strategy for prototypes. The video component, limited to 5 minutes, must highlight the key features of the rover's design and demonstrate its readiness for competition.",
    para3: "The top 26 teams will be selected for the on-site Finals based on their normalized scores from the IRDC and SDDR evaluations. Qualified teams must confirm their participation by December 5, 2024, at the Finals, held at BITS Pilani K. K. Birla Goa Campus, Goa, India. If a team cannot participate, their spot will be allocated to the highest-ranked team on the reserve list.",
    para4: null,
  },
  {
    heading: "Competition Missions (Finals)",
    para1:
      "The IRC Finals are divided into three categories - Expeditions, Operations, and Assessments.",
    para2:
      "Missions investigatory in nature with both dynamic and static components. Teams present findings and results to judges after mission completion. Missions with only dynamic components where the rover performs specific tasks in the field. Static missions like Project Implementation and Management Assessment (PIMA) and Business and Partnership Plan (BPP). Teams have a maximum of 30 minutes to complete a field mission. If completed in less than 20 minutes, the team receives a 20% bonus.",
    para3: "If a rover doesn't cross the starting line within the first 10 minutes, the mission is aborted. Teams scoring more than 20% points in the first 20 minutes can utilize the entire 30-minute mission time; otherwise, they must stop after 20 minutes. All penalties are additive; e.g., penalties of 10% and 20% result in a score of 70%. All missions are scored independently, and a score less than zero is not possible. Teams get 10 minutes of setup time before the mission and 10 minutes after completing the mission to disassemble all equipment at the base station. The rover configuration can change throughout the competition based on mission requirements. Teams can make modifications and repairs between missions.",
    para4: null,
  },
  {
    heading: "PROJECT IMPLEMENTATION AND MANAGEMENT ASSESSMENT (PIMA)",
    para1:
      "The goal of the Project Implementation and Management Assessment (PIMA) is to evaluate and review the overall project and the final rover design. PIMA involves a one-on-one interaction between each team and the judges. During this session, teams are required to deliver a presentation outlining their rover development process.",
    para2:
      "The presentation should highlight key lessons learned throughout the entire lifecycle of the rover project, emphasizing systems engineering and management aspects. This includes everything from initial project planning to the manufacturing and testing of the rover. Teams are also encouraged to showcase any spin-offs or innovations that emerged from their project. Additionally, the presentation provides judges with an opportunity to ask targeted questions for further clarification and discussion.",
    para3: null,
    para4: null,
  },
  {
    heading: "BUSINESS AND PARTNERSHIP PLAN (BPP)",
    para1:
      "The purpose of the Business Plan Presentation (BPP) is to assess the team’s capability to cultivate strong business skills and foster collaborations with industry and academic institutions. These partnerships are intended to support and enhance the development of their project.",
    para2: null,
    para3: null,
    para4: null,
  }
];

export default function IRCPage() {
  return (
    <>
      <Helmet>
        <title>Criss Robotics | IRC</title>
      </Helmet>
      <TransitionEffect></TransitionEffect>
      <header>
        <Navbar color="#00275B" />
      </header>
      <main className={styles.ircpage}>
        <IRC />
      </main>
      <div className={styles.infoSection}>
        {infoData.map((data, index) => (
          <motion.div {...HeadAnimation( index % 2 === 0 ? "right" : "left" , 0.1)}>
            <InfoContainer
              key={data.index}
              heading={data.heading}
              para1={data.para1}
              para2={data.para2}
              para3={data.para3}
              para4={data.para4}
            />
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
}
