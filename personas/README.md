  <h1> Models of Applied Privacy (MAP) </h1> 

Existing privacy threat modeling frameworks rely on partial asset-centric threats, can be time-consuming to implement due to their expansive nature, and need domain-knowledge expertise. We draw from prior literature to create a privacy threat modeling persona framework that developers can use to test and document privacy threats from their overall application. This tool, in addition to privacy impact assessments, can find edge cases of privacy harm. This framework can be used either as a table-top card game for privacy threat modeling. 
<h3> Learn more about privacy threat personas</h3>
The cards for the card game, with instructions, is available here: <a href="personacards/">Persona Cards</a>.

  <h1> Personas Help with Threat Analysis </h1> 
As we try to reach privacy maturity, we need to think about high-level, systematic threats to an application that goes beyond privacy compliance. Privacy personas can be a team-exercise to think about overall threats after completing a privacy impact assessment, and before moving into the main threat modeling process. Personas help by contextualizing the threat - since <a href="https://dl.acm.org/doi/fullHtml/10.1145/3544548.3581484">over 80% privacy threats come from non-malicious sources<a>, we need to have a persona-specific approach to identifying threats. 

  <h1> Framework Structure </h1>
  
In terms of structure, the framework has three main components: (1) Threat Actor (characteristics and expertise), (2) Threat Mechanism, and (3) Threat Impact. The overall framework structure is shown below. The categories have been developed by combining existing frameworks like <a href="https://www.linddun.org/linddun">LINDDUN</a>, <a href="https://www.nist.gov/privacy-framework/nist-pram">NIST Risk Assessment Methodology<a>, and <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3782222">Privacy Harm Taxonomy</a>. 

![Overall Threat Model](https://github.com/Comcast/xCOMPASS/blob/main/personas/figures/Threat-Framework.jpeg)

  <h1> Features </h1>
  
**Flexible:** The framework outline makes it easier to add and delete categories as required. For example, if there is a need to add an expert sub-type to a threat actor category, it is easy to create. Similarly, if there are sub-types in threat mechanisms that are not applicable, for example, disclosure of information, since it may be covered under security threat mechanisms, it can be removed with changing the structure of the framework. 

**Scalable:** The components of the framework form a piece-wise architecture. Thus, it is easy for developers to pick a sub-type from each category and create a persona. If a template is created based on each category, a developer can select one item from each category to automatically generate a persona if desired. 

**Customizable:** The framework is independent of industry type and scale. This makes the generated personas easy to customize. For instance, if a developer or a threat modeler selects one item from each of the three component categories, they can customize the resulting persona based on their industry requirements. 

**Moving away from an attacker-only approach:** Literature on security personas have majorly focused on adversarial personas since a majority of security threats originate from attackers. However, there are both malicious and benign threat actors who might cause privacy breaches. This framework addresses both kinds of threat actors across different scenarios. 
