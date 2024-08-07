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

However, if you have other ideas, albeit simple, please do not hesitate to connect with us.
