// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A collection of backend, infrastructure, home-lab, and DevOps projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-coursework",
          title: "Coursework",
          description: "This page summarizes the courses I&#39;ve taken at Ajou University as part of my undergraduate studies in Software and Electronic Engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Coursework/";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "This page shows the photos I have captured over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "awardcertification-engineer-information-processing",
          title: 'Engineer Information Processing',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/EngineerInformationProcessing/";
            },},{id: "awardcertification-kepco-kdn-innovation-idea-contest",
          title: 'KEPCO KDN Innovation Idea Contest',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2021_KDN/";
            },},{id: "awardcertification-national-park-visitor-service-idea-contest",
          title: 'National Park Visitor Service Idea Contest',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2021_nationalPark/";
            },},{id: "awardcertification-practical-coding-with-riot-games",
          title: 'Practical Coding with Riot Games',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2021_riot_games_seminar/";
            },},{id: "awardcertification-sejong-big-data-analysis-idea-contest",
          title: 'Sejong Big Data Analysis Idea Contest',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2024_sejong_bigdata/";
            },},{id: "awardcertification-aws-technical-essentials-25-09-27",
          title: 'AWS Technical Essentials (25.09.27)',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2025_aws_09_27/";
            },},{id: "awardcertification-security-engineering-on-aws-1-25-09-28",
          title: 'Security Engineering on AWS - 1 (25.09.28)',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2025_aws_09_28/";
            },},{id: "awardcertification-security-engineering-on-aws-2-25-11-01-25-11-02",
          title: 'Security Engineering on AWS - 2 (25.11.01 ~ 25.11.02)',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2025_aws_11_01_11_02/";
            },},{id: "awardcertification-future-mobility-lecture-series-e2e-autonomous-driving-technology",
          title: 'Future Mobility Lecture Series:E2E Autonomous Driving Technology',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2025_e2e_seminar/";
            },},{id: "awardcertification-regional-startup-solverthon-competition",
          title: 'Regional Startup Solverthon Competition',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/2026_regional_startup_solverthon/";
            },},{id: "awardcertification-advanced-data-analytics-semi-professional-adsp",
          title: 'Advanced Data Analytics Semi-Professional (ADsP)',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/ADsP/";
            },},{id: "awardcertification-sql-developer-sqld",
          title: 'SQL Developer (SQLD)',
          description: "",
          section: "Awardcertification",handler: () => {
              window.location.href = "/awardcertification/SQLD/";
            },},{id: "photos-sejong-data-hackerton",
          title: 'Sejong Data Hackerton',
          description: "",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2024_Sejong_data/";
            },},{id: "photos-2025-apo-concert",
          title: '2025 APO Concert',
          description: "",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025_APO_Concert/";
            },},{id: "photos-2026-regional-startup-solverthon-competition",
          title: '2026 Regional Startup Solverthon Competition',
          description: "",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2026_Regional_Startup_Solverthon_Competition/";
            },},{id: "projects-2025-여름-plc-이론-amp-실습-프로그램",
          title: '2025 여름 PLC 이론 &amp;amp; 실습 프로그램',
          description: "OMRON PLC 기반 이차전지 설비 제어 PLC 이론 / 실습 프로그램",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/omron-plc-2025/";
            },},{id: "projects-2025-summer-plc-theory-amp-practice-program",
          title: '2025 Summer PLC Theory &amp;amp; Practice Program',
          description: "Secondary Battery Equipment Control PLC Theory &amp; Practice Program with OMRON",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_summer_omron_plc/";
            },},{id: "projects-fpga-worldclock",
          title: 'FPGA WorldClock',
          description: "7-Segment &amp; Keypad 기반 FPGA 디지털 세계시계",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/fpga-worldclock/";
            },},{id: "projects-fpga-worldclock",
          title: 'FPGA WorldClock',
          description: "FPGA-based Digital World Clock with 7-Segment &amp; Keypad",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fpga-worldclock/";
            },},{id: "projects-홈-서버-인프라-개요",
          title: '홈 서버 인프라 개요',
          description: "개인 분산 서버 클러스터(Athena, Hades, Daedalus) 전체 구조 개요",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/home-server-overview/";
            },},{id: "projects-home-server-infrastructure-overview",
          title: 'Home Server Infrastructure Overview',
          description: "Overview of the personal distributed server cluster (Athena, Hades, Daedalus)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Home%20Server%20Overview/";
            },},{id: "projects-node-athena",
          title: 'Node - Athena',
          description: "Lenovo System X3650 기반 개인 홈 서버 (AI / 데이터 사이언스 노드)",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/node-athena/";
            },},{id: "projects-node-athena",
          title: 'Node - Athena',
          description: "Personal home server (Node - Athena) built on a Lenovo System X3650 server",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Node%20-%20Athena/";
            },},{id: "projects-node-daedalus",
          title: 'Node - Daedalus',
          description: "FPGA 시스템 테스트 전용 노드",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/node-daedalus/";
            },},{id: "projects-node-daedalus",
          title: 'Node - Daedalus',
          description: "Node - Daedalus, dedicated to FPGA system testing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Node%20-%20Daedalus/";
            },},{id: "projects-node-hades",
          title: 'Node - Hades',
          description: "HPE MicroServer Gen10 Plus 기반 개인 홈 서버 (스토리지 · 가상화 허브)",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/node-hades/";
            },},{id: "projects-node-hades",
          title: 'Node - Hades',
          description: "Personal home server (Node - Hades) built on a HPE MicroServer Gen10 Plus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Node%20-%20Hades/";
            },},{id: "projects-node-raspberrypi",
          title: 'Node - RaspberryPi',
          description: "Raspberry Pi 보드로 구성했던 과거 NAS 서버 프로젝트",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/node-raspberrypi/";
            },},{id: "projects-node-raspberrypi",
          title: 'Node - RaspberryPi',
          description: "Node - RaspberryPi, a past server project built with Raspberry Pi boards.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Node%20-%20RaspberryPi(past)/";
            },},{id: "projects-ros-project-morai-시뮬레이터",
          title: 'ROS Project (MORAI 시뮬레이터)',
          description: "MORAI 시뮬레이터 기반 ROS 자율주행 프로젝트",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/ros-morai/";
            },},{id: "projects-ros-project-with-morai-simulator",
          title: 'ROS Project with MORAI Simulator',
          description: "ROS-based autonomous driving project conducted with the MORAI simulation platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ROS%20Project%20-%201/";
            },},{id: "projects-세종시-데이터-기반-혁신-챌린지",
          title: '세종시 데이터 기반 혁신 챌린지',
          description: "축제 접근성 향상을 위한 대중교통 데이터 분석",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/sejong-data/";
            },},{id: "projects-sejong-city-data-driven-innovation-challenge",
          title: 'Sejong City Data-Driven Innovation Challenge',
          description: "Public Transport Data Analysis for Festival Accessibility",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Sejong%20City%20Data/";
            },},{id: "projects-moisam",
          title: 'Moisam',
          description: "기숙사 공동구매 플랫폼",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/moisam/";
            },},{id: "projects-moisam",
          title: 'Moisam',
          description: "Dormitory group purchasing platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/moisam/";
            },},{id: "projects-tactix",
          title: 'TACTIX',
          description: "RAG 기반 항공기 정비 지원 시스템",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/tactix/";
            },},{id: "projects-tactix",
          title: 'TACTIX',
          description: "RAG-based Aircraft Maintenance Support System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tactix/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%6F%73%79%6C@%61%6A%6F%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JihyeonJeong129", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jihyeon-jeong-a04223244", "_blank");
        },
      },];
