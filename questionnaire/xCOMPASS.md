
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

<h2> COMPASS Questionnaire </h2>
The questions are categorized by <a href="https://www.fpc.gov/resources/fipps/">FIPPs (Fair Information Practice Principles)</a>, the principles which guide privacy regulation. This makes it easy to understand which category a question falls under. Each question has a persona linked - please learn more about personas <a href="personas.md">here</a>.

<h3 id="-accountability-and-auditing-"> Accountability and Auditing </h3>

<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3"><a href="personas.md#p2">Inside Aggressive,<br>Non-compliance</a><br><br><br></td>
    <td>Are changes to application code attributed and logged? <br /> <i>Answer "Yes" if the updates and changes to the source code of the app are attributed/logged. The source code can be stored on GitHub, AWS, Databricks, or any other platform.</i> </td>
    <td rowspan="2">Non-compliance with privacy standards and best practices (Nc.4)</td>
    <td rowspan="5">Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td>Are changes to application components, like databases, servers, etc., attributed and logged? <br /> <i>Answer "Yes" if there are changes to at least one app component are attributed and logged (e.g., configuration changes on servers or databases).</i></td>
  </tr>
  <tr>
    <td>Is access to any personal information across your application logged? <br /> <i>Answer "Yes" if there is any logging for any access to personal information, e.g., developer's accessing the collected names of customers.</i></td>
    <td>Involved parties (DD.4.1)</td>
  </tr>
  <tr>
    <td><a href="personas.md#p5">Inside Neutral, <br>Non-compliance</a></td>
    <td>Is there a way to download data out of the application? <br /> <i>Answer "Yes" if the app has a feature for the user to download data containing personal information, e.g., a feature to download the collected data locally to a laptop or mobile device.</i><br /><br /> If yes, do we have logs to track the same? <br /> <i>Answer "Yes" if the app logs and tracks the data download activity (e.g., every download attempt/occurence is recorded/logged).</i></td>
    <td>Propagation (DD.3.2)</td>
  </tr>
  <tr>
    <td><a href="personas.md#p13">Outside Neutral,<br>Identifiability</a></td>
    <td>Can we track who is viewing any personal information on your application's interface? <br /> <i>Answer "Yes" if app tracks every time someone accesses and views any personal information on the app's UI (e.g., developer's viewing the collected names of customers through the UI).</i></td>
    <td>Involved parties (DD.4.1)</td>
  </tr>
</tbody>
</table>

<h3 id="-data-quality-and-integrity"> Data Quality and Integrity</h3>

<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="personas.md#p9">Inside Neutral,<br>Detectability</a></td>
    <td>Does your application combine customer data across different platforms (mobile, television, laptop, etc.)? <br /> <i>Answer "Yes" if the app collects and combines data across different platforms (e.g., data collected from the mobile app are stored together/combined with data collected from the PC app).</i></td>
    <td>Propagation (DD.3.2)</td>
    <td>Data Separation</td>
  </tr>
  <tr>
    <td rowspan="2"><a href="personas.md#p8">Inside Neutral,<br>Non-compliance</a></td>
    <td>Do you check the quality of personal data used by your application (for errors, mistakes, incomplete information, etc.)? <br /> <i>Answer "Yes" if the app checks the quality of personal information collected (e.g., checking the correctness through input validation and error checking).</i></td>
    <td>Improper personal data management (Nc.2)</td>
    <td rowspan="2">Transparency and Disclosure, Consumer Control, Data Separation</td>
  </tr>
  <tr>
    <td>Does your application make inferences about a customer that can result in a negative impact, such as denial of service? <br /> <i>Answer "Yes" if the app makes inferences about a customer and it affects the customer negatively. For example, your application makes inferences that can deny a user access to a service or negatively impact their experience with a service.</i></td>
    <td>Through profiling, derivation, or inference (L.2.2)</td>
  </tr>
</tbody>
</table>

<h3 id="use-limitation">Use Limitation</h3>

<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="personas.md#p10">Outside Neutral,<br>Detectability</a></td>
    <td>Does your application collect location data or other proxies for location that can be linked to a user/group in any way? <br /> <i>Answer "Yes" if your app collects location data/proxies. <a href="https://www.washingtonpost.com/national-security/2023/05/19/fbi-digital-surveillance-misuse-jan6-blm/">Such location data collected from a user can be used (or even misused) to identify the same user</a>.</i></td>
    <td rowspan=2>Quasi-identifier combining data of a single individual (L.2.1.1)</td>
    <td>Data De-identification</td>
  </tr>
  <tr>
    <td><a href="personas.md#p9">Inside Neutral, <br>Detectability</a></td>
    <td>Do you collect customer's behavioral data (like websites they visit, number of clicks, likes, engagement, etc.) that can reveal user patterns? <br /> <i>Answer "Yes" if your app collects customer's behavioral data that can reveal their patterns (e.g., behavioral data like browsing history, number of clicks, likes, and engagement are self-identifying).</i></td>
    <td>Data Separation</td>
  </tr>
</tbody>
</table>

<h3 id="data-minimization">Data Minimization</h3>
<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="personas.md#p11">Outside Neutral,<br>Non-compliance</a></td>
    <td>Is your application collecting only the minimum data necessary for the app to function? <br /> <i>Answer "Yes" if your app collects only the minimum amount of data necessary for app to deliver the core functionalities and services.</i><br /><br />If not, have you documented the reason for collecting additional information? <br /> <i>Answer "Yes" if you have documented the reason for collection additional data (e.g., you should have a valid reason to collect additional data, and this has to be properly documented).</i><br /><br />Is data disposal done for data that is no longer required by the application? <br /> <i>Answer "Yes" if data disposal is done for data no longer required by the app or the retention time has reached.</i></td>
    <td>Violation of data minimization principle (Nc.1.1.2), Duration/retention (DD.3.4)</td>
    <td>Data Reduction</td>
  </tr>
  <tr>
    <td><a href="personas.md#p13">Outside Neutral,<br>Identifiability</a></td>
    <td>If the application is customer-facing, is the information that a customer can view provided on a need to know basis? <br /> <i>Answer "Yes" if your app is customer-facing and there is access control in place for customers when viewing personal information (e.g., a customer should not have access to other customers' data).</i></td>
    <td rowspan=2>Involved parties (DD.4.1)</td>
    <td>Data Separation, Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td><a href="personas.md#p8">Inside Neutral,<br>Non-compliance</a></td>
    <td>Is the information that a developer/owner of the application can view provided on a need to know basis? <br /> <i>Answer "Yes" if there is access control for app owner/developer when viewing personal information (e.g., a developer, depending on their role, may or may not view user/customer data).</i><br /><br /> Is access regularly updated if change in role occurs? <br /> <i>Answer "Yes" if policies for access control are updated accordingly for every role/organizational change (e.g., a developer that transitions to a different project/department should no longer have access).</i></td>
    <td>Privacy Logging and Reporting, Encryption, Access Control</td>
  </tr>
  <tr>
    <td><a href="personas.md#p6">Inside Neutral,<br>Identifiability</a></td>
    <td>Does any component in your application contain links? <br /> <i>Answer "Yes" if your app or any of its components contains links (e.g., URL).</i><br /><br /> Do these links redirect to any personal information without requiring authentication? <br /> <i>Answer "Yes" if there is no authentication before the redirection occurs (e.g., user does not have to sign in before getting redirected).</i></td>
    <td>Insufficient cybersecurity risk management (Nc.3)</td>
    <td>Data De-identification, Access Control</td>
  </tr>
</tbody>
</table>

<h3 id="transparency">Transparency</h3>
<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="personas.md#p7">Inside Neutral,<br>Unawareness</a></td>
    <td>Can a user request a copy of their data for download? <br/> <i>Answer "Yes" if your app allows a user to download a copy of their data (e.g., user can download the data collected by the app locally to their laptop or mobile device).</i><br/><br/> Are organizational retention policies followed for storing user data? <br /> <i>Answer "Yes" if your app follows organization policies on data retention (e.g., data have to be deleted at the end of the retention period).</i></td>
    <td>Access (U.2.2), Rectification/erasure (U.2.3)</td>
    <td>Consumer Control</td>
  </tr>
  <tr>
    <td><a href="personas.md#p16">Outside Neutral,<br>Unawareness</a></td>
    <td>Do you provide markers/indicators when collecting user data? <br /> <i>Answer "Yes" if your app provides indicators when collecting data. These can be in the form of LED lights, cookie banners, pop-ups, etc. that is relevant for your application. </i></td>
    <td rowspan=2>Unawareness as data subject (U.1.1)</td>
    <td>Transparency and Disclosure, Consumer Control</td>
  </tr>
  <tr>
    <td><a href="personas.md#p15">Outside Neutral,<br>Unanticipated Revelation</a></td>
    <td>Does the output of your application present one users information to another without notifying (even in an aggregate or de-identified form)? <br /> <i>Answer "Yes" if your app shares personal information of a user to another user without notifying the first user that owns that PI. For example, a notification may be two beeps or a different beep for an event when their data is being shared. Note that organization cannot disclose consumers' electronic communications (e.g., phone calls, email, Internet transmissions) to anyone other than the intended recipient.</i></td>
    <td>Data De-identification, Access Control</td>
  </tr>
</tbody>
</table>

<h3 id="security">Security</h3>
<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="personas.md#p2">Inside Aggressive,<br>Non-compliance</a></td>
    <td>Are personal information records backed up in case of accidental deletion? <br /> <i>Answer "Yes" if your app backs up personal information records. This can be in the form of a secondary backup database/storage.</i></td>
    <td>Improper personal data management (Nc.2)</td>
    <td>Privacy Logging and Reporting, Backup</td>
  </tr>
  <tr>
    <td rowspan="5"><a href="personas.md#p13">Outside Neutral,<br>Identifiability</a></td>
    <td>Can the customer add a second factor to allow for stronger authentication on their account? <br /> <i>Answer "Yes" if your app allows users to configure multi-factor authentication. Internal systems that allow access to personal information must have multi-factor authentication in place by default to meet this condition. </i></td>
    <td rowspan=8>Insufficient cybersecurity risk management (Nc.3)</td>
    <td rowspan="5">Data Separation, Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td>Does your application have any defenses to prevent brute force attacks to retrieve personal information? <br /> <i>Answer "Yes" if your app defends against brute force attacks to retrieve personal information (e.g., you may lock a customer's account after three incorrect attempts).</i></td>
  </tr>
  <tr>
    <td>Does the customer need to provide additional authentication to change sensitive data on the account? <br /> <i>Answer "Yes" if your app authenticates users that want to change sensitive data on the account (e.g., users have to provide their credentials/sign in again before being allowed to change sensitive data).</i></td>
  </tr>
  <tr>
    <td>Does the customer need to provide additional authentication to access sensitive data on the account? <br /> <i>Answer "Yes" if your app authenticates users that want to access sensitive data on the account (e.g., users have to provide their credentials/sign in again before being allowed to access sensitive data).</i></td>
  </tr>
  <tr>
    <td>Does your application notify the customer if there is any unusual behavior (like after a certain number of incorrect logins, logging in from an unusual location,etc.)? <br /> <i>Answer "Yes" if your app notifies users of suspicious behaviors (e.g., the customer may receive a text message when three or more unsuccessful login attempts are made).</i></td>
  </tr>
  <tr>
    <td><a href="personas.md#p1">Inside Aggressive,<br>Identifiability</a></td>
    <td>Would an unauthorized employee be able to access identifiable data of other users through your application? <br /> <i>Answer "Yes" if the app allows an unauthorized employee to access collected data (e.g., anyone who does not a have a job-related purpose for viewing user data).</i></td>
    <td>Access Control</td>
  </tr>
  <tr>
    <td><a href="personas.md#p5">Inside Neutral,<br>Non-compliance</a></td>
    <td>Is personal information stored in plaintext in any part of your application? <br /> <i>Answer "Yes" if your app stores personal information in plaintext. This includes FIPPS standards for both encryption at rest and in transit. Datastores containing Social Security Numbers must meet or exceed organization encryption standards. More information about encryption design patterns can be found <a href="https://www.cs.ru.nl/~jhh/publications/pds-booklet.pdf">here</a>. </i><br /><br /> Do you employ the recommended encryption approaches throughout your application compliant with organization policy? <br /> <i>Answer "Yes" if your app employs the recommended encryption approaches and it is compliant with organization policy. This includes FIPPS standards for both encryption at rest and in transit. Datastores containing Social Security Numbers must meet or exceed organization encryption standards. More information about encryption design patterns can be found <a href="https://www.cs.ru.nl/~jhh/publications/pds-booklet.pdf">here</a>.</i>
    <td>Encryption</td>
  </tr>
  <tr>
    <td><a href="personas.md#p6">Inside Neutral, <br>Identifiability</a></td>
    <td>Do you share the data over a secure channel? <br /> <i>Answer "Yes" if your app shares data over a secure channel (e.g., encrypted channel).</i><br /><br /> If yes, is there authentication in place for who can access this information? <br /> <i>Answer "Yes" if your app authenticates users/developers that access the shared data (e.g., users/developers have to sign in before they can access the data).</i></td>
    <td>Data Reduction</td>
  </tr>
  <tr>
    <td><a href="personas.md#p15">Outside Neutral,<br>Unanticipated Revelation</a></td>
    <td>If the application is customer-facing, can it be authenticated using information that is publicly available? <br /> <i>Answer "Yes" if the app is customer-facing and it authenticates using publicly available information (e.g., social media, public records, etc.).</i></td>
    <td>Preferences (U.2.1)</td>
    <td>Data Separation</td>
  </tr>
</tbody>
</table>

<h3 id="purpose-specification">Purpose Specification</h3>
<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="personas.md#p14">Outside Neutral,<br>Non-compliance</a></td>
    <td>Is personal information provided used for a secondary purpose by the application? <br /> <i>Answer "Yes" if collected personal information is used for a secondary purpose (e.g., data might have been collected to provide services, but is now also used for advertising purposes).</i><br /><br /> Have customers consented to this secondary usage? <br /> <i>Answer "Yes" if your app asks for user consent and they indicate consent before the app uses the PI for secondary usage (i.e., the app asks for consent twice, namely before collecting the data and when it is going to use the data for secondary usage).</i><br /><br /> Can they opt-out of secondary usage of their data? <br /> <i>Answer "Yes" if your app allows users to opt out of secondary usage (i.e., user can refuse to consent when asked about the secondary usage for their data).</i><br /><br /> If a customer has opted out, do you ensure that such customer data is filtered out from secondary usage? <br /> <i>Answer "Yes" if your app filters user data from secondary usage if they have opted out (i.e., user data are excluded completely from secondary usage).</i>
    <td>Preferences (U.2.1)</td>
    <td>Data Reduction, Transparency and Disclosure</td>
  </tr>
  <tr>
    <td><a href="personas.md#p12">Outside Neutral,<br>Unanticipated Revelation</a></td>
    <td>Would the data from your application be otherwise made available publicly? <br /> <i>Answer "Yes" if your app makes the collected data available publicly.</i></td>
    <td>Availability/accessibility (DD.4.2)</td>
    <td>Data Separation</td>
  </tr>
  <tr>
    <td><a href="personas.md#p16">Outside Neutral,<br>Unawareness</a></td>
    <td>Do individuals who have provided personal information know about its usage by this application? <br /> <i>Answer "Yes" if your app collects data from users and they are informed about the purpose. Apps that process user data should provide information to users about this usage and purpose.</i></td>
    <td>Unawareness as data subject (U.1.1)</td>
    <td>Transparency and Disclosure</td>
  </tr>
</tbody>
</table>

<h3 id="individual-participation">Individual Participation</h3>

<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2"><a href="personas.md#p16">Outside Neutral,<br>Unawareness</a></td>
    <td>Is there a way for individuals to opt out of the collection/processing of their data? <br /> <i>Answer "Yes" if your app allows users to opt out of data collection/processing. This requirement is fully satisfied only if the language to opt out must be easy to understand and the opt out request is fully implemented by restricting processing of the specified data. Opt out should not be harder than opt in. If this is out of scope for your application, please indicate the dataset and the team responsible in the comments.</i></td>
    <td rowspan=2>Preferences (U.2.1)</td>
    <td rowspan="3">Consumer Control</td>
  </tr>
  <tr>
    <td>Can the application potentially collect information from users who are not the primary customer without consent? <br /> <i>Answer "Yes" if your app does not get consent from users that are not primary users (e.g., a video app could collect viewing history from multiple users using the same television).</i></td>
  </tr>
  <tr>
    <td><a href="personas.md#p7">Inside Neutral,<br>Unawareness</a></td>
    <td>If there is a personal data deletion or modification request, would it be possible to implement it across the application? <br /> <i>Answer "Yes" if your app accomodates deletion/modification request for collected data. For example, when there is deletion request, the application can automatically remove records from all databases, servers, and other containers, including third party transfers. There should be clear description of how to request a deletion or modification.</i></td>
    <td>Rectification/erasure (U.2.3)</td>
  </tr>
  <tr>
    <td><a href="personas.md#p11">Outside Neutral,<br>Non-compliance</a></td>
    <td>Does your application automatically pull information from the user or their device without consent? <br /> <i>Answer "Yes" if your app automatically collects data from users without asking for consent. Note that for "full informed consent", it should be (a) clearly indicated by a user by performing an action, like checking a box or clicking a button, (b) have specific details on what is being collected and who will be receiving the information, and (b) be freely given without coercion.</i><br /><br /> Is it possible that this automatic collection may include data that is not needed for the functionality of your application? <br /> <i>Answer "Yes" if your app also automatically collect data other than for functionality. Note that for "full informed consent", it should be (a) clearly indicated by a user by performing an action, like checking a box or clicking a button, (b) have specific details on what is being collected and who will be receiving the information, and (b) be freely given without coercion.</i></td>
    <td>Preferences (U.2.1)</td>
    <td>Data Reduction, Transparency and Disclosure</td>
  </tr>
</tbody>
</table>

<h3 id="third-party-sharing">Third-party Sharing</h3>
<table>
<thead>
  <tr>
    <th>Threat Persona</th>
    <th>Control Questions</th>
    <th>LINDDUN Categories</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="personas.md#p8">Inside Neutral,<br>Non-compliance</a></td>
    <td>If the application sends data to third parties, do you have a data loss prevention (DLP) control mechanism in place? <br /> <i>Answer "Yes" if your app sends data to third parties and it deploys a DLP mechanism. A DLP mechanism, like an email filter for example, prevents unexpected and uncontrolled loss of internal data.</i></td>
    <td>Predetermined set of parties (DD.4.1.1), Improper personal data management (Nc.2)</td>
    <td>Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td rowspan="6"><a href="personas.md#p7">Inside Neutral,<br>Unawareness</a></td>
    <td>If the application sends data to third parties, do customers know about this in their privacy policy? <br /> <i>Answer "Yes" if your app collects data from users and sends them to third parties, and its privacy policy informs the users appropriately. To satisfy "customer knowledge", clarify the (a) type of third-party (which industry category), (b) clear purpose of transfer, and (c) frequency of transfer, (d) all personal information categories transferred either to or from a third-party, and (e) general source of the personal information obtained. Privacy Policy must be presented as a conspicuous link.</i><br /><br /> Have they consented to this extended use? <br /> <i>Answer "Yes" if your app asks for user consent for the extended use. To satisfy "customer knowledge", clarify the (a) type of third-party (which industry category), (b) clear purpose of transfer, and (c) frequency of transfer, (d) all personal information categories transferred either to or from a third-party, and (e) general source of the personal information obtained. Privacy Policy must be presented as a conspicuous link.</i></td>
    <td>Unawareness as data subject (U.1.1)</td>
    <td rowspan="6">Transparency and Disclosure, Consumer Control</td>
  </tr>
  <tr>
    <td>Can customers limit their data from being shared by vendors to other applications? <br /> <i>Answer "Yes" if your app allows users to limit the sharing of their collected data (e.g., the app has a feature that allows users to refuse data sharing).</i></td>
    <td>Preferences (U.2.1)</td>
  </tr>
  <tr>
    <td>Are customers able to access/modify their data that is sent to vendors? <br /> <i>Answer "Yes" if your app allows users to access/modify their collected data that are sent to vendors. There should be a clear description of how to request a deletion or modification.</i></td>
    <td>Access (U.2.2)</td>
  </tr>
  <tr>
    <td>Does your application share data with third parties? <br /> <i>Answer "Yes" if your app shares data with third parties. Customers cannot be refused service by organization if they restrict names and addresses from being used by third-parties for mailing list subscriptions.</i><br /><br /> Have they been approved through a third party security assessment? <br /> <i>Answer "Yes" if your app shares data with third parties that have gone through a third-party security assessment.</i><br /><br /> Have they gone through the de-identification process? <br /> <i>Answer "Yes" if your app shares data with third parties that have gone through de-identification process (i.e., you have consulted with a de-identification expert and completed the de-identification process).</i><br /><br /> If not, do they have measures in place to handle PI according to stipulated retention policies? <br /> <i>Answer "Yes" if your app shares data with third parties that have measures to handle personal information based on organization retention policies (e.g., PI-related data are deleted at the end of the retention period, also by the third parties).</i>
    <td>Involved parties (DD.4.1), Insufficient cybersecurity risk management (Nc.3), Improper personal data management (Nc.2), Identifier (I.2.1.1)</td>
  </tr>
  <tr>
    <td>Is all of the shared data required for the third party to provide the required functionality? <br /> <i>Answer "Yes" if your app shares data with third parties and the data are used to provide the required functionality. Unnecessary data can also include user data who are no longer customers. Such data should not be collected. </i><br /><br /> If not, do you remove unnecessary data elements before sending them to the third-party? <br /> <i>Answer "Yes" if your app shares data (to provide other functionality) with third parties and unnecessary data elements have been removed prior to sending the data. Unnecessary data can also include user data who are no longer customers. Such data should not be collected.</i></td>
    <td>Data type sensitivity (DD.1.1), Data type granularity (DD.1.2)</td>
  </tr>
  <tr>
    <td>Does this application use personal data from third parties? <br /> <i>Answer "Yes" if your app uses personal information from third parties (e.g., you obtain users' PI from a third party).</i><br /><br /> Do owners of the personal data (all users, including employees) know about the source of the data? <br /> <i>Answer "Yes" if your app informs users of the source of the data (i.e., the third party involved).</i><br /><br /> Do you validate the correctness of the data received from the third party? <br /> <i>Answer "Yes" if your app validates the correctness of the data (i.e., specifically checks for errors/mistakes in the data) received from the third party.</i></td>
    <td>Unawareness as data subject (U.1.1), Rectification/erasure (U.2.3)</td>
  </tr>
</tbody>
</table>

For additional information on privacy design strategies:
[1] Jaap-Henk Hoepman, [Privacy Design Strategies](https://www.cs.ru.nl/~jhh/publications/pds-booklet.pdf). 2022. 
