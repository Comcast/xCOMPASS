<h2>COMPASS Personas Reference</h2>
This is a mapping from personas to different impact and mitigation categories for reference. 

<h3>P1</h3>

<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Aggressive (Expert) - Inside Attacker</td>
    <td>Identifiability</td>
    <td>Pineapple is an employee who has an ex-spouse who is also a customer of the company. Pineapple is able to access internal company records to find their partner's information, including their new address. Pineapple is now able to stalk their ex-spouse using this information.<br><br>Consider this persona for your application.<br><br>Real-world breach: <a href="https://slate.com/technology/2013/09/loveint-how-nsa-spies-snooped-on-girlfriends-lovers-and-first-dates.html">https://slate.com/technology/2013/09/loveint-how-nsa-spies-snooped-on-girlfriends-lovers-and-first-dates.html</a> </td>
    <td>1. Autonomy (Individuals): Unable to make choices free from influence.<br>2. Physical (Individuals): Suffer bodily harm<br>3. Reputational (Organization): Loss of consumer trust or standing in community </td>
  </tr>
</tbody>
</table>

<h3>P2</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Aggressive (Expert) - Inside Attacker</td>
    <td>Non-compliance</td>
    <td>Due to a management conflict with company ABC, Mango, an employee, decides to leave. However, frustrated by this experience, they delete customer records from one of the applications they had access to, in violation of policy set by ABC. This application contained sensitive personal information as well as transaction information to enable customer service. <br><br>Consider this persona for your application.<br><br>Real-world breach:<br><a href="http://www.hipaajournal.com/16k-childrens-medical-records-potentially-stolen-in-east-texas-8178">http://www.hipaajournal.com/16k-childrens-medical-records-potentially-stolen-in-east-texas-8178</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community.<br>2. Autonomy (Individuals): Unable to make choices free from influence.<br>3. Economic (Organization): Experience direct revenue loss</td>
  </tr>
</tbody>
</table>

<h3>P3</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral (Expert) - Related Entities</td>
    <td>Identifiability</td>
    <td>Banana is a third-party vendor who work with insurance companies to provide health related benefits to a cable company. Due to a software error, Banana sends employee information from the cable company to a different one. This results in a breach of the cable company employees' personal, medical, and financial information.<br><br>Consider this persona for your application.<br><br>Real-world breach: <a href="https://www.nbcbayarea.com/news/local/private-health-info-lost-law-provides-no-recourse/105783/">https://www.nbcbayarea.com/news/local/private-health-info-lost-law-provides-no-recourse/105783/</a>  </td>
    <td>1. Autonomy (Individuals): Unable to make choices free from influence.<br>2. Reputational (Organization): Loss of consumer trust or standing in community </td>
  </tr>
</tbody>
</table>
  
  <h3>P4</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral (Expert) - Related Entities</td>
    <td>Unawareness</td>
    <td>Mango provides identity verification services as a vendor for social media platform ABC. During a breach at ABC, Mango requests personal information from ABC's customers in order to verify their account. However, Mango also sends this data to a marketing company who is now able to target advertisements to customers based on this new information. This purpose was not disclosed to customers, and it may cause a privacy issue. <br><br>Consider this persona for your application.<br><br>Real-world Breach: <a href="https://www.ftc.gov/business-guidance/blog/2022/05/twitter-pay-150-million-penalty-allegedly-breaking-its-privacy-promises-again">https://www.ftc.gov/business-guidance/blog/2022/05/twitter-pay-150-million-penalty-allegedly-breaking-its-privacy-promises-again</a></td>
    <td>1.Autonomy (Individuals): Unable to make choices free from influence.<br>2. Reputational (Organization): Loss of consumer trust or standing in community<br>3. Economic (Organization): Experience direct revenue loss</td>
  </tr>
</tbody>
</table>
    
 <h3>P5</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral (Expert) - Related Entities</td>
    <td>Non-compliance</td>
    <td>PastDig is a third-party background verification service for new employees of company ABC. PastDig's policy prohibits downloading and sending personal information of customers to company ABC unless it is for the specific employee. Banana works at PastDig. One day, while verifying an employee, Banana accidentally retrieves background records of a different person with the same name and sends it to ABC. ABC then retracts the employment offer based on this spurious information.<br><br>Consider this persona for your application.<br><br>Real-world breach: <a href="https://epic.org/documents/smith-v-lexisnexis-screening-solutions/">https://epic.org/documents/smith-v-lexisnexis-screening-solutions/</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community<br>2. Autonomy (Individuals): Unable to make choices free from influence.<br>3. Economic (Individuals): Experience individual monetary loss<br><br></td>
  </tr>
</tbody>
</table>

<h3>P6</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral (Non-expert) - Employees</td>
    <td>Identifiability</td>
    <td>Avocado is a developer at a learning solution provider ABC. They maintain a public database of student information which is de-identified and does not contain personal information directly. However, one of the columns in the database contain links and when someone clicks on these links, it redirects to personal documents stored elsewhere, like passport scans, application forms, visas, emails, and even medical information.<br><br>Consider this persona for your application.<br><br>Real-world breach: <a href="https://www.infosecurity-magazine.com/news/education-nonprofit-leaks-data/">https://www.infosecurity-magazine.com/news/education-nonprofit-leaks-data/</a></td>
    <td>1. Economic (Individuals): Experience individual monetary loss<br>2. Autonomy (Individuals): Unable to make choices free from influence.<br>3. Reputational (Organization): Loss of consumer trust or standing in community </td>
  </tr>
</tbody>
</table>


 <h3>P7</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral (Non-expert) - Employees</td>
    <td>Unawareness</td>
    <td>Pineapple is a data analyst who uses user data from customers of company ABC to help train voice assistants. As Pineapple trains these voice assistants, copies of customer data are inadvertently stored in the application logs. When customers request their information to be deleted, these copies of their information are retained without anyone’s knowledge.<br><br>Consider this persona for your application.<br><br>Real-world breach: <a href="https://www.pbs.org/newshour/politics/amazon-to-pay-31-million-in-fines-for-alexa-voice-assistant-and-ring-camera-privacy-violations">https://www.pbs.org/newshour/politics/amazon-to-pay-31-million-in-fines-for-alexa-voice-assistant-and-ring-camera-privacy-violations</a></td>
    <td>1.Autonomy (Individuals): Unable to make choices free from influence.<br>2. Economic (Organization): Experience direct revenue loss<br>3. Reputational (Organization): Loss of consumer trust or standing in community </td>
  </tr>
</tbody>
</table>


 <h3>P8</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral (Non-expert) - Employees</td>
    <td>Non-compliance</td>
    <td>Papaya is an HR employee who manages personal and health information that other employees have provided through an application during the course of their employment. Papaya runs into a technical error in the application and decides to share a snippet of this database with a colleague from a different organization so that they might be able to debug. Since this was personal data shared over unencrypted email, it was a privacy threat.<br><br>Consider this persona for your application.<br><br>Real-world breach: <a href="https://calgaryherald.com/news/local-news/class-action-lawsuit-claims-city-leaked-personal-information-of-3700-employees">https://calgaryherald.com/news/local-news/class-action-lawsuit-claims-city-leaked-personal-information-of-3700-employees</a></td>
    <td>1.Autonomy (Individuals): Unable to make choices free from influence.<br>2. Reputational (Organization): Loss of consumer trust or standing in community<br>3. Economic (Organization): Experience direct revenue loss<br>4.  Economic (Individuals): Experience individual monetary loss</td>
  </tr>
</tbody>
</table>

   <h3>P9</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Inside Neutral (Non-expert) - Employees</td>
    <td>Detectability</td>
    <td>Coconut is a data scientist working on a new behavioral advertisement algorithm. The algorithm collects viewing history of customers on their OTT and other video-based apps. It then sends targeted advertisements on television based on this viewing history across platforms. For a specific customer, Coconut's algorithm retrieves private viewing history and recommends "novel vitamins" to prevent drug addiction. Everyone in the customer's household is able to view these ads and they get to know that the customer was looking for specific healthcare supplements, which they did not want to disclose.<br><br>Consider this persona for your application.<br><br>Real-world breach:<br><a href="https://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/?sh=460acc166668">https://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/?sh=460acc166668</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community.<br>2. Autonomy (Individuals): Unable to make choices free from influence.</td>
  </tr>
</tbody>
</table>


<h3>P10</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Outside Neutral (Expert) - Researchers</td>
    <td>Detectability</td>
    <td> ABC is a competitive fitness app that releases users' aggregated route information. ABC is also a government contractor who provides this fitness app to the military. Pear is a privacy researcher who finds that by observing a heat map of the routes in the app for a specific area, anyone on the web can potentially locate military bases, which has a high density of such data due to the contract.<br><br>Consider this persona for your application.<br><br>Real-world breach: <a href="https://www.forbes.com/sites/abrambrown/2022/06/20/strava-fitness-app-israeli-mossad-data-breach-security-hack-segments/?sh=51e5589268d7">https://www.forbes.com/sites/abrambrown/2022/06/20/strava-fitness-app-israeli-mossad-data-breach-security-hack-segments/?sh=51e5589268d7</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community.<br>2. Autonomy (Individuals): Unable to make choices free from influence.<br>3. Economic (Individuals): Experience individual monetary loss</td>
  </tr>
</tbody>
</table>


<h3>P11</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Outside Neutral (Expert) - Researchers</td>
    <td>Non-compliance</td>
    <td>Kiwi is a researcher who recently found company ABC's user data in a large breach. Interestingly, on further investigation, Kiwi found that the types of data released in the breach was a lot more than what ABC had said they collect from users.<br><br>Consider this persona for your application.<br><br>Real-World breach: <a href="https://www.ftc.gov/news-events/news/press-releases/2017/08/uber-settles-ftc-allegations-it-made-deceptive-privacy-data-security-claims">https://www.ftc.gov/news-events/news/press-releases/2017/08/uber-settles-ftc-allegations-it-made-deceptive-privacy-data-security-claims</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community<br>2. Economic (Organization): Experience direct revenue loss<br>3. Economic (Individuals): Experience individual monetary loss</td>
  </tr>
</tbody>
</table>


<h3>P12</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Outside Neutral (Expert) - Researchers</td>
    <td>Unanticipated Revelation</td>
    <td>Company Y released a de-identified dataset of movies watched by users. Quince is a privacy researcher participating in a coding challenge using this dataset that would help make better movie recommendations. However, Quince soon finds that by correlating the released dataset with IMDB movie reviews by users, they were able to re-identify a substantial number of users and the movies they watched.<br><br>Consider this persona in the context of your application. <br> <br>Real-World Breach: <a href="https://www.forbes.com/sites/firewall/2010/03/12/netflix-settles-privacy-suit-cancels-netflix-prize-two-sequel/?sh=3558a24d951e">https://www.forbes.com/sites/firewall/2010/03/12/netflix-settles-privacy-suit-cancels-netflix-prize-two-sequel/?sh=3558a24d951e</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community.<br>2. Autonomy (Individuals): Unable to make choices free from influence.<br>3. Economic (Individuals): Experience individual monetary loss</td>
  </tr>
</tbody>
</table>

  

<h3>P13</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
   <tr>
    <td>Outside Neutral (Expert) - Researchers</td>
    <td>Identifiability</td>
    <td>Researcher Plum scans a telecom provider's website and finds that in order to log into the provider's customer accounts, they need only the account number and street number of the customer. Plum is able to try multiple combinations of the account number and use the street number of a person they already know, and get full access to their account, including name, address, and SSID credentials. They are also able to lock a customer out of their WiFi by changing the SSID password.<br><br>Consider this persona for your application.<br><br>Real-world breach:<br><a href="https://threatpost.com/comcast-patches-router-bug-that-leaked-some-wi-fi-passwords/132183/">https://threatpost.com/comcast-patches-router-bug-that-leaked-some-wi-fi-passwords/132183/</a><br><a href="https://www.tomsguide.com/news/home-gateway-geolocation-bh21">https://www.tomsguide.com/news/home-gateway-geolocation-bh21</a> </td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community.<br>2. Economic (Organization): Experience direct revenue loss<br>3. Economic (Individuals): Experience individual monetary loss</td>
  </tr>
</tbody>
</table>


<h3>P14</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
    <tr>
    <td>Outside Neutral (Non-expert) - Customers</td>
    <td>Non-compliance</td>
    <td>Strawberry is a customer using a messaging application that collects and processes phonebook information. Strawberry's phonebook contains phone numbers of people not on the app. This can be a privacy threat as the app is collecting more information than is needed for its functionality.<br><br>Consider this persona in the context of your application. <br><br><br>Real-world Breach: <a href="https://www.bbc.com/news/technology-58422465">https://www.bbc.com/news/technology-58422465</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community.<br>2. Autonomy (Individuals): Unable to make choices free from influence.<br>3. Economic (Individuals): Experience individual monetary loss</td>
  </tr>
</tbody>
</table>

<h3>P15</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
    <tr>
    <td>Outside Neutral (Non-expert) - Customers</td>
    <td>Unanticipated Revelation</td>
    <td>Watermelon is a customer of a COVID tracking app, which provides the age and approximate location of people who have been affected so that users know if there are COVID cases in their vicinity. However, Watermelon can view this information for his small neighborhood of 10-12 houses and easily identify which of his neighbors have COVID.<br><br>Consider this persona in the context of your application. Can users of your application derive information about other users that they shouldn't be privy to?<br><br>Real-world breach: <a href="https://www.ft.com/content/7cfad020-78c4-11ea-9840-1b8019d9a987">https://www.ft.com/content/7cfad020-78c4-11ea-9840-1b8019d9a987</a> </td>
    <td>1. Autonomy (Individuals): Unable to make choices free from influence.<br>2. Reputational (Organization): Loss of consumer trust or standing in community </td>
  </tr>
</tbody>
</table>
 

<h3>P16</h3>
<table>
<thead>
  <tr>
    <th>Actor</th>
    <th>Mechanism</th>
    <th>Example Persona</th>
    <th>Potential Impact</th>
  </tr>
</thead>
<tbody>
    <tr>
    <td>Outside Neutral (Non-expert) - Customers</td>
    <td>Unawareness</td>
    <td>Company ABC builds home security products like smart doorbells. One of their algorithms identifies only anomalous events so that the customer at home is recorded but only notified when there may be an issue with the doorbell and not for every door opening event. Cherry, a customer, is then able use this to keep more accurate tabs on their spouse because their spouse is not notified about this continuous recording.<br><br>Consider this persona for your application.<br><br>Real-world breach:<br><a href="https://consumer.ftc.gov/consumer-alerts/2023/05/rings-privacy-failures-led-spying-and-harassment-through-home-security-cameras">https://consumer.ftc.gov/consumer-alerts/2023/05/rings-privacy-failures-led-spying-and-harassment-through-home-security-cameras</a></td>
    <td>1. Reputational (Organization): Loss of consumer trust or standing in community.<br>2. Autonomy (Individuals): Unable to make choices free from influence.</td>
  </tr>
</tbody>
</table>
 
