COMPASS is a questionnaire developed from MAP personas so that threat modelers can ask specific, targeted questions. Each question is linked to a persona. Before diving into privacy threats, the following scoping questions might be helpful during a threat modeling session. This is because the existence of personal information must be known, even if it is managed and is not a threat. Team must ensure that these are properly handled when they exist, and reviews are done for special categories of such information.

| Scoping Questions | 
|---|
| Does the   application code contain personal information?  |
| Do any   databases used by the application contain personal information? If the   application has personal information, has it been de-deidentified?  |
| Do any   application logs contain personal information?   |


| Special categories of PI | 
|---|
| **Biometric   data**: Does the application collect biometric data?  General guidelines: Biometric data   (fingerprints, retina scans, etc.) require explicit notice and written   consent from customers before collection. Such data can also not be sent to   third-parties, monetized, or retained without consent.  |
|  **Children   data**: Does the application collect data from youth   under 16? General guidelines: Data collected from children   require explicit notice and written consent from parents/guardians (for users   under 13 years) or children (for users between 13-16 years).  Such data can also not be sent to   third-parties, monetized, or retained without consent. Privacy settings   should be easy to understand for children. If the child is being tracked by   an adult through the application, the child should be notified (for example,   a green LED light can indicate that a camera is switched on). |
| **CPNI**: Does the application contain CPNI data?  General guidelines: The use of CPNI data is   limited to specific purposes. It cannot be used for marketing that a customer   has not opted into.  |
|  **Voice and   Video**: Does the application collect voice or video   data?      General guidelines: Voice data cannot be used   for advertisement purposes, even if collected by or for a third-party   partner. Organization must have an individual’s prior, written permission before   collecting or recording any audiovisual or other sensor data from within   their dwelling. For both video and voice data, specific consent obligations  must be met. |

<h2> COMPASS Questionnaire </h2>
The threats are categorized by FIPS (Fair Information Practice Principles), the principles which guide privacy regulation, developed in 1974. This makes it easy to understand which threat category a question falls under. 
<table>
<thead>
  <tr>
    <th class="tg-npuh"><span style="font-weight:var(--base-text-weight-semibold, 600)">FIPS Category</span></th>
    <th class="tg-8jfr"><span style="font-weight:var(--base-text-weight-semibold, 600)">MAP Persona</span></th>
    <th class="tg-npuh"><span style="font-weight:var(--base-text-weight-semibold, 600)">Question</span></th>
    <th class="tg-npuh"><span style="font-weight:var(--base-text-weight-semibold, 600)">Privacy Design Strategies for Mitigation</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-76ga" rowspan="5">Accountability and auditing</td>
    <td class="tg-hx86" rowspan="3">P3</td>
    <td class="tg-76ga">Are changes to application code attributed and logged? This code can be present on GitHub, AWS, Databricks, or any other platform.</td>
    <td class="tg-76ga" rowspan="5">Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td class="tg-76ga">Are changes to application components, like databases, servers, etc., attributed and logged?</td>
  </tr>
  <tr>
    <td class="tg-76ga">Is access to any personal information across your application logged?</td>
  </tr>
  <tr>
    <td class="tg-hx86">P9</td>
    <td class="tg-76ga">Is there a way to download data out of the application? If yes, do we have logs to track the same?</td>
  </tr>
  <tr>
    <td class="tg-hx86">P14</td>
    <td class="tg-76ga">Can we track who is viewing any personal information on your application's interface?</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="3">Data quality and integrity</td>
    <td class="tg-hx86">P10</td>
    <td class="tg-76ga">Does your application combine customer data across different platforms (mobile, television, laptop, etc.)?</td>
    <td class="tg-76ga">Data Separation</td>
  </tr>
  <tr>
    <td class="tg-hx86" rowspan="2">P6</td>
    <td class="tg-76ga">Do you check the quality of personal data used by your application (for errors, mistakes, incomplete information, etc.)?</td>
    <td class="tg-76ga" rowspan="2">Transparency and Disclosure, Consumer Control, Data Separation</td>
  </tr>
  <tr>
    <td class="tg-76ga">Does your application make inferences about a customer that can result in a negative impact, such as denial of service?</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="2">Use limitation</td>
    <td class="tg-hx86">P11</td>
    <td class="tg-76ga">Does your application collect location data or other proxies for location that can be linked to a user/group in any way?</td>
    <td class="tg-76ga">Data De-identification</td>
  </tr>
  <tr>
    <td class="tg-hx86">P10</td>
    <td class="tg-76ga">Do you collect customer's behavioral data (like websites they visit, number of clicks, likes, engagement, etc.) that can reveal user patterns?</td>
    <td class="tg-76ga">Data Separation</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="4">Data minimization</td>
    <td class="tg-hx86">P12</td>
    <td class="tg-76ga">Is your application collecting only the minimum data necessary for the app to function? If not, have you documented the reason for collecting additional information? Is data disposal done for data that is no longer required by the application?</td>
    <td class="tg-76ga">Data Reduction</td>
  </tr>
  <tr>
    <td class="tg-hx86">P14</td>
    <td class="tg-76ga">If the application is customer-facing, is the information that a customer can view provided on a need to know basis?</td>
    <td class="tg-76ga">Data Separation, Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td class="tg-hx86">P9</td>
    <td class="tg-76ga">Is the information that a developer/owner of the application can view provided on a need to know basis? Is access regularly updated if change in role occurs?</td>
    <td class="tg-76ga">Privacy Logging and Reporting, (Encryption), (Access Control)</td>
  </tr>
  <tr>
    <td class="tg-hx86">P7</td>
    <td class="tg-76ga">Does any component in your application contain links? Do these links redirect to any personal information without requiring authentication?</td>
    <td class="tg-76ga">Data De-identification, (Access Control)</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="3">Transparency</td>
    <td class="tg-hx86">P8</td>
    <td class="tg-76ga">Can a user request a copy of their data for download? Are organizational retention policies followed for storing user data?</td>
    <td class="tg-76ga">Consumer Control</td>
  </tr>
  <tr>
    <td class="tg-hx86">P17</td>
    <td class="tg-76ga">Do you provide markers/indicators when collecting user data? These can be in the form of LED lights, cookie banners, pop-ups, etc. that is relevant for your application.</td>
    <td class="tg-76ga">Transparency and Disclosure, Consumer Control</td>
  </tr>
  <tr>
    <td class="tg-hx86">P16</td>
    <td class="tg-76ga">Does the output of your application present one users information to another without notifying (even in an aggregate or de-identified form)? For example, a notification may be two beeps or a different beep for an event when their data is being shared. Note that organization cannot disclose consumers' electronic communications (e.g., phone calls, email, Internet transmissions) to anyone other than the intended recipient.</td>
    <td class="tg-76ga">Data De-identification, (Access Control)</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="10">Security</td>
    <td class="tg-hx86">P3</td>
    <td class="tg-76ga">Are personal information records backed up in case of accidental deletion?</td>
    <td class="tg-76ga">Privacy Logging and Reporting (Backup)</td>
  </tr>
  <tr>
    <td class="tg-hx86" rowspan="5">P14</td>
    <td class="tg-76ga">Can the customer add a second factor to allow for stronger authentication on their account? Internal systems that allow access to personal information must have multi-factor authentication in place by default to meet this condition.</td>
    <td class="tg-76ga" rowspan="5">Data Separation, Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td class="tg-76ga">Does you application have any defenses to prevent brute force attacks to retrieve personal information? For example, you may lock a customers' account after three incorrect attempts.</td>
  </tr>
  <tr>
    <td class="tg-76ga">Does the customer need to provide additional authentication to change sensitive data on the account?</td>
  </tr>
  <tr>
    <td class="tg-76ga">Does the customer need to provide additional authentication to access sensitive data on the account?</td>
  </tr>
  <tr>
    <td class="tg-76ga">Does you application notify the customer if there is any unusual behavior (like after a certain number of incorrect logins, logging in from an unusual location,etc.)? For example, the customer may receive a text message when three or more unsuccessful login attempts are made.</td>
  </tr>
  <tr>
    <td class="tg-hx86">P2</td>
    <td class="tg-76ga">Would an unauthorized employee be able to access identifiable data of other users through your application? Unauthorized employee could be anyone who does not a have a job-related purpose for viewing user data.</td>
    <td class="tg-76ga">(Access Control)</td>
  </tr>
  <tr>
    <td class="tg-hx86">P9</td>
    <td class="tg-76ga">Is personal information stored in plaintext in any part of your application? Do you employ the recommended encryption approaches throughout your application compliant with organization policy? This includes FIPS standards for both encryption at rest and in transit. Datastores containing Social Security Numbers must meet or exceed organization's encryption standards.</td>
    <td class="tg-76ga">(Encryption)</td>
  </tr>
  <tr>
    <td class="tg-hx86">P4</td>
    <td class="tg-76ga">Do you share the data over a secure channel? If yes, is there authentication in place for who can access this information?</td>
    <td class="tg-76ga">Data Reduction</td>
  </tr>
  <tr>
    <td class="tg-hx86">P13</td>
    <td class="tg-76ga">If the application is customer-facing, can it be authenticated using information that is publicly available? For example, a homeowner's home address information in USA is often publicly available on a county's website.</td>
    <td class="tg-76ga">Data Separation</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="3">Purpose specification</td>
    <td class="tg-hx86">P15</td>
    <td class="tg-76ga">Is personal information provided used for a secondary purpose by the application? Have customers consented to this secondary usage? Can they opt-out of secondary usage of their data? If a customer has opted out, do you ensure that such customer data is filtered out from secondary usage? For example, data might have been collected to provide services, but is now also used to provide ads.</td>
    <td class="tg-76ga">Data Reduction, Transparency and Disclosure</td>
  </tr>
  <tr>
    <td class="tg-hx86">P13</td>
    <td class="tg-76ga">Would the data from your application be otherwise made available publicly?</td>
    <td class="tg-76ga">Data Separation</td>
  </tr>
  <tr>
    <td class="tg-hx86">P17</td>
    <td class="tg-76ga">Do individuals who have provided personal information know about its usage by this application? Applications which process user data should provide information to users about this usage and purpose.</td>
    <td class="tg-76ga">Transparency and Disclosure</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="4">Individual participation</td>
    <td class="tg-hx86" rowspan="2">P17</td>
    <td class="tg-76ga">Is there a way for individuals to opt out of the collection/processing of their data? This requirement is fully satisfied only if the language to opt out must be easy to understand and the opt out request is fully implemented by restricting processing of the specified data. Opt out should not be harder than opt in. If this is out of scope for your application, please indicate the dataset and the team responsible in the comments.</td>
    <td class="tg-76ga" rowspan="3">Consumer Control</td>
  </tr>
  <tr>
    <td class="tg-76ga">Can the application potentially collect information from users who are not the primary customer without consent? For example, a video app could collect viewing history from multiple users using the same television.</td>
  </tr>
  <tr>
    <td class="tg-hx86">P8</td>
    <td class="tg-76ga">If there is a personal data deletion or modification request, would it be possible to implement it across the application? For example, when there is deletion request, the application can automatically remove records from all databases, servers, and other containers, including third party transfers. There should be clear description of how to request a deletion or modification.</td>
  </tr>
  <tr>
    <td class="tg-hx86">P15</td>
    <td class="tg-76ga">Does your application automatically pull information from the user or their device without consent? is it possible that this automatic collection may include data that is not needed for the functionality of your application? Note that for "full informed consent", it should be (a) clearly indicated by a user by performing an action, like checking a box or clicking a button, (b) have specific details on what is being collected and who will be receiving the information, and (b) be freely given without coercion.</td>
    <td class="tg-76ga">Data Reduction, Transparency and Disclosure</td>
  </tr>
  <tr>
    <td class="tg-76ga" rowspan="7">Third-party sharing</td>
    <td class="tg-hx86">P9</td>
    <td class="tg-76ga">If the application sends data to third parties, do you have a data loss prevention (DLP) control mechanism in place? A DLP mechanism, like an email filter for example, prevents unexpected and uncontrolled loss of internal data.</td>
    <td class="tg-76ga">Privacy Logging and Reporting</td>
  </tr>
  <tr>
    <td class="tg-hx86" rowspan="6">P5</td>
    <td class="tg-76ga">If the application sends data to third parties, do customers know about this in their privacy policy? Have they consented to this extended use? To satisfy "customer knowledge", clarify the (a) type of third-party (which industry category), (b) clear purpose of transfer, and (c) frequency of transfer, (d) all personal information categories transferred either to or from a third-party, and (e) general source of the personal information obtained. Privacy Policy must be presented as a conspicuous link. For additional details on how to implement, please refer to 2.2 (18) of the Global Privacy Tool.</td>
    <td class="tg-76ga" rowspan="6">Transparency and Disclosure, Consumer Control</td>
  </tr>
  <tr>
    <td class="tg-76ga">Can customers limit their data from being shared by vendors to other applications?</td>
  </tr>
  <tr>
    <td class="tg-76ga">Are customers able to access/modify their data that is sent to vendors? There should be clear description of how to request a deletion or modification.</td>
  </tr>
  <tr>
    <td class="tg-76ga">Does your application share data with third parties? Have they been approved through a third party security assessment? Have they gone through the de-identification process? If not, do they have measures in place to handle PI according to stipulated retention policies? Customers cannot be refused service by organization if they restrict names and addresses from being used by third-parties for mailing list subscriptions.</td>
  </tr>
  <tr>
    <td class="tg-76ga">Is all of the shared data required for the third party to provide the required functionality? If not, do you remove unnecessary data elements before sending them to the third-party? Unnecessary data can also include user data who are no longer customers. Such data should not be collected.</td>
  </tr>
  <tr>
    <td class="tg-76ga">Does this application use personal data from third parties? Do owners of the personal data (all users, including employees) know about the source of the data? Do you validate the correctness of the data received from the third party?</td>
  </tr>
</tbody>
</table>
