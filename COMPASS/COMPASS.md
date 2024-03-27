COMPASS is a questionnaire developed from MAP personas so that threat modelers can ask specific and targeted questions covering a range of privacy threats. Each question is linked to a persona. Before diving into privacy threats, the following scoping questions might be helpful during a threat modeling session. This is because the existence of personal information must be known, even if it is managed and is not an active threat. Team must ensure that these are properly handled when they exist, and reviews are done for special categories of such information.

| Scoping Questions | 
|---|
| Does the   application code contain personal information?  |
| Do any   databases used by the application contain personal information? If the   application has personal information, has it been de-deidentified?  |
| Do any   application logs contain personal information?   |

The following categories of information often come with special legislative protections.
| Special categories of Personal Information | 
|---|
| **Biometric   data**: Does the application collect biometric data?  |
|  **Children   data**: Does the application collect data from youth   under 16? |
| **CPNI**: Does the application contain CPNI data?  _CPNI or Customer Proprietary Network Information, is the data collected by telecommunications companies about subscribers._  |
|  **Voice and   Video**: Does the application collect voice or video  data? |

<h2> COMPASS Questionnaire </h2>
The threats are categorized by <a href="https://www.fpc.gov/resources/fipps/">FIPPs (Fair Information Practice Principles)</a>, the principles which guide privacy regulation. This makes it easy to understand which threat category a question falls under. Each question has a persona linked - if you would like to see an example persona for each combination listed here, use <a href="personas.md">this</a> link.

<h3> Accountability and Auditing </h3>

<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Inside Aggressive,<br>Non-compliance<br><br><br></td>
    <td>Are changes to application code attributed and logged? This code can be present on GitHub, AWS, Databricks, or any other platform.</td>
    <td rowspan="5">Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td>Are changes to application components, like databases, servers, etc., attributed and logged?</td>
  </tr>
  <tr>
    <td>Is access to any personal information across your application logged?</td>
  </tr>
  <tr>
    <td>Inside Neutral, <br>Non-compliance</td>
    <td>Is there a way to download data out of the application? If yes, do we have logs to track the same?</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Identifiability</td>
    <td>Can we track who is viewing any personal information on your application's interface?</td>
  </tr>
</tbody>
</table>

<h3> Data Quality and Integrity</h3>

<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral,<br>Detectability</td>
    <td>Does your application combine customer data across different platforms (mobile, television, laptop, etc.)?</td>
    <td>Data Separation</td>
  </tr>
  <tr>
    <td rowspan="2">Inside Neutral,<br>Non-compliance</td>
    <td>Do you check the quality of personal data used by your application (for errors, mistakes, incomplete information, etc.)?</td>
    <td rowspan="2">Transparency and Disclosure, Consumer Control, Data Separation</td>
  </tr>
  <tr>
    <td>Does your application make inferences about a customer that can result in a negative impact, such as denial of service?</td>
  </tr>
</tbody>
</table>

<h3>Use Limitation</h3>

<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Outside Neutral,<br>Detectability</td>
    <td>Does your application collect location data or other proxies for location that can be linked to a user/group in any way?</td>
    <td>Data De-identification</td>
  </tr>
  <tr>
    <td>Inside Neutral, <br>Detectability</td>
    <td>Do you collect customer's behavioral data (like websites they visit, number of clicks, likes, engagement, etc.) that can reveal user patterns?</td>
    <td>Data Separation</td>
  </tr>
</tbody>
</table>

<h3>Data Minimization</h3>
<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Outside Neutral,<br>Non-compliance</td>
    <td>Is your application collecting only the minimum data necessary for the app to function? If not, have you documented the reason for collecting additional information? Is data disposal done for data that is no longer required by the application?</td>
    <td>Data Reduction</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Identifiability</td>
    <td>If the application is customer-facing, is the information that a customer can view provided on a need to know basis?</td>
    <td>Data Separation, Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td>Inside Neutral,<br>Non-compliance</td>
    <td>Is the information that a developer/owner of the application can view provided on a need to know basis? Is access regularly updated if change in role occurs?</td>
    <td>Privacy Logging and Reporting, (Encryption), (Access Control)</td>
  </tr>
  <tr>
    <td>Inside Neutral,<br>Identifiability</td>
    <td>Does any component in your application contain links? Do these links redirect to any personal information without requiring authentication?</td>
    <td>Data De-identification, (Access Control)</td>
  </tr>
</tbody>
</table>

<h3>Transparency</h3>
<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral,<br>Unawareness</td>
    <td>Can a user request a copy of their data for download? Are organizational retention policies followed for storing user data?</td>
    <td>Consumer Control</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Unawareness</td>
    <td>Do you provide markers/indicators when collecting user data? These can be in the form of LED lights, cookie banners, pop-ups, etc. that is relevant for your application.</td>
    <td>Transparency and Disclosure, Consumer Control</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Unanticipated Revelation</td>
    <td>Does the output of your application present one users information to another without notifying (even in an aggregate or de-identified form)? For example, a notification may be two beeps or a different beep for an event when their data is being shared. Note that organization cannot disclose consumers' electronic communications (e.g., phone calls, email, Internet transmissions) to anyone other than the intended recipient.</td>
    <td>Data De-identification, (Access Control)</td>
  </tr>
</tbody>
</table>

<h3>Security</h3>
<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Aggressive,<br>Non-compliance</td>
    <td>Are personal information records backed up in case of accidental deletion?</td>
    <td>Privacy Logging and Reporting (Backup)</td>
  </tr>
  <tr>
    <td rowspan="5">Outside Neutral,<br>Identifiability</td>
    <td>Can the customer add a second factor to allow for stronger authentication on their account? Internal systems that allow access to personal information must have multi-factor authentication in place by default to meet this condition.</td>
    <td rowspan="5">Data Separation, Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td>Does you application have any defenses to prevent brute force attacks to retrieve personal information? For example, you may lock a customers' account after three incorrect attempts.</td>
  </tr>
  <tr>
    <td>Does the customer need to provide additional authentication to change sensitive data on the account?</td>
  </tr>
  <tr>
    <td>Does the customer need to provide additional authentication to access sensitive data on the account?</td>
  </tr>
  <tr>
    <td>Does you application notify the customer if there is any unusual behavior (like after a certain number of incorrect logins, logging in from an unusual location,etc.)? For example, the customer may receive a text message when three or more unsuccessful login attempts are made.</td>
  </tr>
  <tr>
    <td>Inside Aggressive,<br>Identifiability</td>
    <td>Would an unauthorized employee be able to access identifiable data of other users through your application? Unauthorized employee could be anyone who does not a have a job-related purpose for viewing user data.</td>
    <td>(Access Control)</td>
  </tr>
  <tr>
    <td>Inside Neutral,<br>Non-compliance</td>
    <td>Is personal information stored in plaintext in any part of your application? Do you employ the recommended encryption approaches throughout your application compliant with organization policy? This includes FIPS standards for both encryption at rest and in transit. Datastores containing Social Security Numbers must meet or exceed organization's encryption standards.</td>
    <td>(Encryption)</td>
  </tr>
  <tr>
    <td>Inside Neutral, <br>Identifiability</td>
    <td>Do you share the data over a secure channel? If yes, is there authentication in place for who can access this information?</td>
    <td>Data Reduction</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Unanticipated Revelation</td>
    <td>If the application is customer-facing, can it be authenticated using information that is publicly available? For example, a homeowner's home address information in USA is often publicly available on a county's website.</td>
    <td>Data Separation</td>
  </tr>
</tbody>
</table>

<h3>Purpose Specification</h3>
<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Outside Neutral,<br>Non-compliance</td>
    <td>Is personal information provided used for a secondary purpose by the application? Have customers consented to this secondary usage? Can they opt-out of secondary usage of their data? If a customer has opted out, do you ensure that such customer data is filtered out from secondary usage? For example, data might have been collected to provide services, but is now also used to provide ads.</td>
    <td>Data Reduction, Transparency and Disclosure</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Unanticipated Revelation</td>
    <td>Would the data from your application be otherwise made available publicly?</td>
    <td>Data Separation</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Unawareness</td>
    <td>Do individuals who have provided personal information know about its usage by this application? Applications which process user data should provide information to users about this usage and purpose.</td>
    <td>Transparency and Disclosure</td>
  </tr>
</tbody>
</table>

<h3>Individual Participation</h3>

<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Outside Neutral,<br>Unawareness</td>
    <td>Is there a way for individuals to opt out of the collection/processing of their data? This requirement is fully satisfied only if the language to opt out must be easy to understand and the opt out request is fully implemented by restricting processing of the specified data. Opt out should not be harder than opt in. If this is out of scope for your application, please indicate the dataset and the team responsible in the comments.</td>
    <td rowspan="3">Consumer Control</td>
  </tr>
  <tr>
    <td>Can the application potentially collect information from users who are not the primary customer without consent? For example, a video app could collect viewing history from multiple users using the same television.</td>
  </tr>
  <tr>
    <td>Inside Neutral,<br>Unawareness</td>
    <td>If there is a personal data deletion or modification request, would it be possible to implement it across the application? For example, when there is deletion request, the application can automatically remove records from all databases, servers, and other containers, including third party transfers. There should be clear description of how to request a deletion or modification.</td>
  </tr>
  <tr>
    <td>Outside Neutral,<br>Non-compliance</td>
    <td>Does your application automatically pull information from the user or their device without consent? is it possible that this automatic collection may include data that is not needed for the functionality of your application? Note that for "full informed consent", it should be (a) clearly indicated by a user by performing an action, like checking a box or clicking a button, (b) have specific details on what is being collected and who will be receiving the information, and (b) be freely given without coercion.</td>
    <td>Data Reduction, Transparency and Disclosure</td>
  </tr>
</tbody>
</table>

<h3>Third-party Sharing</h3>
<table>
<thead>
  <tr>
    <th>Persona</th>
    <th>Question</th>
    <th>Privacy Design Strategies for Mitigation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral,<br>Non-compliance</td>
    <td>If the application sends data to third parties, do you have a data loss prevention (DLP) control mechanism in place? A DLP mechanism, like an email filter for example, prevents unexpected and uncontrolled loss of internal data.</td>
    <td>Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td rowspan="6">Inside Neutral,<br>Unawareness</td>
    <td>If the application sends data to third parties, do customers know about this in their privacy policy? Have they consented to this extended use? To satisfy "customer knowledge", clarify the (a) type of third-party (which industry category), (b) clear purpose of transfer, and (c) frequency of transfer, (d) all personal information categories transferred either to or from a third-party, and (e) general source of the personal information obtained. Privacy Policy must be presented as a conspicuous link. For additional details on how to implement, please refer to 2.2 (18) of the Global Privacy Tool.</td>
    <td rowspan="6">Transparency and Disclosure, Consumer Control</td>
  </tr>
  <tr>
    <td>Can customers limit their data from being shared by vendors to other applications?</td>
  </tr>
  <tr>
    <td>Are customers able to access/modify their data that is sent to vendors? There should be clear description of how to request a deletion or modification.</td>
  </tr>
  <tr>
    <td>Does your application share data with third parties? Have they been approved through a third party security assessment? Have they gone through the de-identification process? If not, do they have measures in place to handle PI according to stipulated retention policies? Customers cannot be refused service by organization if they restrict names and addresses from being used by third-parties for mailing list subscriptions.</td>
  </tr>
  <tr>
    <td>Is all of the shared data required for the third party to provide the required functionality? If not, do you remove unnecessary data elements before sending them to the third-party? Unnecessary data can also include user data who are no longer customers. Such data should not be collected.</td>
  </tr>
  <tr>
    <td>Does this application use personal data from third parties? Do owners of the personal data (all users, including employees) know about the source of the data? Do you validate the correctness of the data received from the third party?</td>
  </tr>
</tbody>
</table>

For additional information on privacy design strategies:
[1] Jaap-Henk Hoepman, [Privacy Design Strategies](https://www.cs.ru.nl/~jhh/publications/pds-booklet.pdf). 2022. 
