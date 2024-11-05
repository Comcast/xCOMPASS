[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/Comcast/xCompass/badge)](https://securityscorecards.dev/viewer/?uri=github.com/Comcast/xCompass)

# xCOMPASS (COMcast Privacy ASSistant)

<img align="right" style="width:20%" src="https://github.com/Comcast/xCOMPASS/blob/main/personas/figures/compass-logo-png.png">
<div align="justify">xCOMPASS is a <a href='https://github.com/Comcast/xCOMPASS/tree/main/questionnaire'>questionnaire</a> developed from <a href='https://github.com/Comcast/xCOMPASS/tree/main/personas'>Models of Applied Privacy (MAP)</a> personas. It consists of a set of questions, each requiring a "Yes" or "No" answer. If the questionnaire is filled out according to the design and specifications of an application, it can help identify privacy engineering requirements specific to the application. </div><br>

# Quickstart

To learn more, please follow these links:

- [xCOMPASS questionnaire](https://github.com/Comcast/xCOMPASS/tree/main/questionnaire)
- [MAP personas](https://github.com/Comcast/xCOMPASS/tree/main/personas)

In this repository, you can also find [an Excel spreadsheet (xCOMPASS Spreadsheet v1.0.xlsx)](https://github.com/Comcast/xCOMPASS/blob/main/xCOMPASS%20Spreadsheet%20v1.0.xlsx) containing xCOMPASS questionnaire that you can use to identify privacy engineering requirements for your application. It uses simple Excel spreadsheet formulas to automatically evaluate your answers. Please watch the following 42-second video for a demo of the spreadsheet.

https://github.com/user-attachments/assets/d2b5592d-6909-4dd8-976c-a2b79b95a586

# Why Do We Need It

Privacy Threat Modeling (PTM) is part of software development lifecycle (SDL) along with the increasing awareness of data privacy. Unfortunately, PTM comes with the following limitations. 

1. It mostly involves human experts (i.e., threat modelers) with much manual effort.
2. It is usually performed later in the SDL pipeline, during which much development work has been finished.
3. App developers are usually not familiar with privacy principles (e.g., privacy laws) that can guide the development process.

To address these limitations, we created xCOMPASS, an open-sourced framework that presents a solution that does not require much expertise/training in privacy domain to identify privacy engineering requirements during PTM. 

1. xCOMPASS presents a lightweight questionnaire (i.e., yes-no questions).
2. It identifies privacy requirements based on the answers.
3. It maps the requirements to privacy principles (e.g., privacy laws) and mitigation strategies (e.g., de-identification).

# Who Can Benefit

We designed xCOMPASS for people who are not privacy experts. It can benefit people in the following roles:

- Application developers
- Product designers
- Managers and organization leaders

Meanwhile, it certainly can also benefit privacy experts, such as:

- Security and privacy engineers
- Data protection engineers
- Data governance engineers

and others that work with an application and would like to identify privacy engineering requirements for the application.

# What I Can Do with It

xCOMPASS can be used in (but not limited to) the following use cases:

- A developer or a team of developers that create a new application that collects personal information.
- A developer or a team of developers that maintains applications that collect and store personal information.
- A privacy engineer that analyzes and maintains privacy engineering requirements for systems and applications.
- A data protection/governance engineer that works on protocols for data collection and usage in an organization.

# Contribution

We welcome all kinds of contributions to this repository! Please have a look at [CONTRIBUTING.md](https://github.com/Comcast/xCompass/blob/main/CONTRIBUTING.md) for further information and guidelines.

# Maintainers

The list of maintainers of this GitHub repository is available in [MAINTAINERS.md](https://github.com/Comcast/xCOMPASS/blob/main/MAINTAINERS.md). Please consider becoming a maintainer! :smiley:

# Roadmap

Roadmap information is available in [ROADMAP.md](https://github.com/Comcast/xCOMPASS/blob/main/ROADMAP.md).

# List of Publications

Jayati Dev, Bahman Rashidi, Vaibhav Garg. [Models of Applied Privacy (MAP): A Persona Based Approach to Threat Modeling.](https://dl.acm.org/doi/fullHtml/10.1145/3544548.3581484) In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23).

# List of Talks

- Rahmadi Trimananda. [The Golden xCOMPASS: The Compass You Need to Navigate through the App-Privacy Universe!](https://www.usenix.org/conference/soups2024/technical-sessions) USENIX SOUPS 2024 Lightning Talks.
- Rahmadi Trimananda. [The Golden xCOMPASS: The Compass You Need to Navigate through the App-Privacy Universe!](https://digitalprivacy.ieee.org/events/digital-privacy-workshop) IEEE Digital Privacy Workshop 2024.
- Rahmadi Trimananda. [The Golden xCOMPASS: The Compass You Need to Navigate through the App-Privacy Universe!](https://lascon.org/speakers/) OWASP LASCON 2024.

# Visibility on Other Websites

xCOMPASS has been proudly listed as an open-sourced privacy engineering requirements identification tool on various websites including:

- [NIST Privacy Risk Assessment Tools](https://www.nist.gov/itl/applied-cybersecurity/privacy-engineering/collaboration-space/privacy-risk-assessment/tools)
- [CISA Free Cybersecurity Services and Tools](https://www.cisa.gov/resources-tools/services/xcompass)
- [OWASP Free for Open Source Application Security Tools](https://owasp.org/www-community/Free_for_Open_Source_Application_Security_Tools)

# License
   
Licensed under [Apache 2.0](https://github.com/Comcast/MAP/blob/main/LICENSE-Apache-2.0).
