<table>
<thead>
  <tr style="width:40%">
    <td><img src="../figures/compass-logo-png.png" alt="compass logo"></td>
    <td>xCOMPASS is a questionnaire developed from MAP personas so that threat modelers can ask specific and targeted questions covering a range of privacy threats. Each question is linked to a persona. Before diving into privacy threats, the following scoping questions might be helpful during a threat modeling session. This is because the existence of personal information must be known, even if it is managed and is not an active threat. Team must ensure that these are properly handled when they exist, and reviews are done for special categories of such information.</td>
  </tr>
</thead>
</table>

| Scoping Questions | 
|---|
| Does the  application code contain personal information? <br /> *Answer "Yes" if the source code of the app itself contains personal information. Additional information on what constitutes PI can be found [here](https://en.wikipedia.org/wiki/Personal_data).*|
| Do any  databases used by the application contain personal information? <br /> *Answer "Yes" if the app uses any databases that contain personal information. Additional information on what constitutes personal information can be found [here](https://en.wikipedia.org/wiki/Personal_data).* <br /><br /> If the  application has personal information, has it been de-deidentified? <br /> *Answer "Yes" if the PI in the app has not gone through de-identification process. Additional information on what constitutes personal information can be found [here](https://en.wikipedia.org/wiki/Personal_data).* |
| Do any application logs contain personal information? <br /> *Answer "Yes" if the app creates any log files that contain personal information. Additional information on what constitutes personal information can be found [here](https://en.wikipedia.org/wiki/Personal_data).* |

The following categories of information often come with special legislative protections.
| Special categories of Personal Information | 
|---|
| **Biometric   data**: Does the application collect biometric data? <br /> *Answer "Yes" if the app collects biometric data. Generally, biometric data (e.g., fingerprints, retina scans, etc.) require explicit notice and written consent from customers before collection. Such data can also not be sent to third-parties, monetized, or retained without consent.* |
| **Children   data**: Does the application collect data from youth under 16? <br /> *Answer "Yes" if the app collects children data. Generally, data collected from children require explicit notice and written consent from parents/guardians (for users under 13 years) or children (for users between 13-16 years). Such data can also not be sent to third-parties, monetized, or retained without consent. Privacy settings should be easy to understand for children. If the child is being tracked by an adult through the app, the child should be notified (e.g., a green LED light can indicate that a camera is switched on).* |
| **CPNI**: Does the application contain CPNI data? <br /> *Answer "Yes" if the app collects/contains CPNI (Customer Proprietary Network Information), e.g., IP/MAC address. Generally, the use of CPNI data is limited to specific purposes. It cannot be used for marketing that a customer has not opted into.* |
| **Voice and Video**: Does the application collect voice or video data? <br /> *Answer "Yes" if the app collects voice/video data. Generally, voice data cannot be used for advertisement purposes, even if collected by or for a third-party partner. Organization must have an individual’s prior, written permission before collecting or recording any audio/visual or other sensor data from within their dwelling. For both video and voice data, specific consent obligations must be met. Please consult Privacy Legal for additional information.*|

<h2> xCOMPASS Questionnaire </h2>
The threats are categorized by <a href="https://www.fpc.gov/resources/fipps/">FIPPs (Fair Information Practice Principles)</a>, the principles which guide privacy regulation. This makes it easy to understand which threat category a question falls under. 

The categories defined in xCOMPASS are the following:

1. <a href="xCOMPASS.md#-accountability-and-auditing-">Accountability and Auditing</a>
2. <a href="xCOMPASS.md#-data-quality-and-integrity">Data Quality and Integrity</a>
3. <a href="xCOMPASS.md#use-limitation">Use Limitation</a>
4. <a href="xCOMPASS.md#data-minimization">Data Minimization</a>
5. <a href="xCOMPASS.md#transparency">Transparency</a>
6. <a href="xCOMPASS.md#security">Security</a>
7. <a href="xCOMPASS.md#purpose-specification">Purpose Specification</a>
8. <a href="xCOMPASS.md#individual-participation">Individual Participation</a>
9. <a href="xCOMPASS.md#third-party-sharing">Third-party Sharing</a>

The full questionnaire is available <a href="xCOMPASS.md"> here</a>. Each question has a persona linked - if you would like to see an example persona for each combination listed here, use <a href="personas.md">this</a> link.

<h2> How to contribute? </h2>
We welcome all kinds of contributions to xCOMPASS questionnaire, especially: 

- Changes to xCOMPASS questions, language, typos, fixes, etc.
- Deeper dive into privacy design strategies.
- Linking to other principles beyond FIPPS.

However, if you have other ideas, albeit simple, please do not hesitate to connect with us. Please also have a look at more instructions to commit your contribution in [CONTRIBUTING.md](https://github.com/Comcast/xCompass/blob/main/CONTRIBUTING.md).