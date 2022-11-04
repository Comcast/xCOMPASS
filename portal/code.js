var actordata = {
    "act-1": 
		{name: "Inside Aggressive (Expert) - Inside Attacker", imglink: "../personacards/raw_cards/act-1.pdf", description: "Mango is a seasoned IT technician at Telco with 10 years of working in the industry. Due to a management conflict, they are wrongfully accused of deleting company information and fired. Mango is an expert developer with years of experience in open-source tools."},
    "act-2": 
		{name: "Inside Neutral (Non-expert) - Employees", imglink: "../personacards/raw_cards/act-4.pdf", description: "Pineapple is an employee in the HR department at Telco who is responsible for processing applications and looking at employee and often customer records. They are very meticulous, so it takes them a long time to sort through applications. Pineapple has a background in literature and financial management and does not need a do a lot of coding due to their other specialties."},
    "act-3": 
		{name: "Inside Neutral (Expert) - Related Entities", imglink: "../personacards/raw_cards/act-3.pdf", description: "Banana is an employee at an identity theft protection company. This rental company usually provides third-party information handling services, and processes requests from other companies if they need to perform background checks, require analytics data for targeted advertisements, or need more information about another person. Banana is proficient in data handling and analytics."},
    "act-4": 
		{name: "Outside Aggressive (Expert) - Private Companies", imglink: "../personacards/raw_cards/act-2.pdf", description: "Dragon fruit is a software developer at a private organization MobileCo. Dragon fruit's job involves a lot of coding, and they frequently look up repositories on Github for referencing. MobileCo happens to be a large competitor in the global market for a lot of technology products."},
    "act-5": 
		{name: "Outside Neutral (Expert) - Researchers", imglink: "../personacards/raw_cards/act-5.pdf", description: "Coconut is a security researcher at Neverland University. Neverland University is Telco's research partner at their headquarters in Hawaii. Coconut specializes in privacy and data protection and looks at how data flows between products and systems, especially when it is customer data."},
    "act-6": 
		{name: "Outside Neutral (Non-expert) - Customers", imglink: "../personacards/raw_cards/act-6.pdf", description: "Jackfruit is an early adopter of technology. They are not an expert developer or work in a related field, but like trying out new products and exploring how they can be used in unconventional ways."},
    "act-7": 
		{name: "Outside Neutral (Expert) - Regulators/Activists", imglink: "../personacards/raw_cards/act-7.pdf", description: "Orange is a privacy advocate and activist working for a newspaper. In their free time, Orange tests websites and reviews publicly available documents to report privacy violations on Twitter."},
    "act-8": 
		{name: "Outside Aggressive (Expert) - Cybercriminals", imglink: "../personacards/raw_cards/act-8.pdf", description: "Watermelon is an experienced hacker affiliated with an identity theft company. This company profits by selling identification documents on the black market after stealing IDs from real people, among other things."},
    "act-9": 
		{name: "Outside Aggressive (Expert) - Individual Hackers", imglink: "../personacards/raw_cards/act-9.pdf", description: "Apple is a hacker who lives in the same neighborhood as the Telco's Chief Information Officer and their family. Apple cracks passwords, likes breaking into unsecure websites for fun, and knowing personal information about people."},
    "act-10": 
		{name: "Outside Aggressive (Expert) - Nation State", imglink: "../personacards/raw_cards/act-10.pdf", description: "Cherry is a hacker on a state-sponsored cyberattack network. Cherry is a network engineer by training and has extensive experience in network traffic surveillance and cyber forensics. They currently monitor email services."}
};

var mechdata = {
    "mech-1": 
		{name: "Identifiability", imglink: "../personacards/raw_cards/mech-1.pdf", description: "being able to gain access to company records which can accurately identify a person by storing their personal and financial information."},
    "mech-2": 
		{name: "Detectability", imglink: "../personacards/raw_cards/mech-2.pdf", description: "the fact that the number of records they accessed were limited, and it was easy to understand who was being mentioned. So, they knew whose records they were processing even if it was de-identified and disclosed it."},
    "mech-3": 
		{name: "Unawareness", imglink: "../personacards/raw_cards/mech-3.pdf", description: "the victim not knowing that their information can be used for a different purpose than what it was meant for. The victim had provided their personal information to request a service but instead their data was used for harm."},
    "mech-4": 
		{name: "Non-compliance", imglink: "../personacards/raw_cards/mech-4.pdf", description: "not following corporate policies. Since the data was not preserved in accordance with company policy and privacy laws determined by the state, the breach happened."},
    "mech-5": 
		{name: "Unanticipated Revelation", imglink: "../personacards/raw_cards/mech-5.pdf", description: "accessing aggregated datasets with a lot of user attributes. Since the dataset contained a lot of information about a person, it was easy to connect two or more attributes about a person and infer about their health, for example."},
    "mech-6": 
		{name: "Linkability", imglink: "../personacards/raw_cards/mech-6.pdf", description: "using identifiers from one data source and matching it to another data source available to them, either external to the application or internal."},
    "mech-7": 
		{name: "Non-repudiation", imglink: "../personacards/raw_cards/mech-7.pdf", description: "using a data source that cannot be updated or maintained but decisions about a person is still being made based on the source."},
    "mech-8": 
		{name: "Disclosure of Information", imglink: "../personacards/raw_cards/mech-8.pdf", description: "using resources available to leak information about individuals that they have gathered, like health information."},
    "mech-9": 
		{name: "Distortion", imglink: "../personacards/raw_cards/mech-9.pdf", description: "posting information about a person that is false or manipulating a data source to input fake information."},
    "mech-10": 
		{name: "Stigmatization", imglink: "../personacards/raw_cards/mech-10.pdf", description: "using a tool that chooses people belonging to certain gender, age, race, culture, disability, or membership groups less frequently than others, no matter if this information is asked for or not."}
};

var impactdata = {
    "imp-1": 
		{name: "Implicit-I - Autonomy", imglink: "../personacards/raw_cards/imp-1.pdf", description: "another person being unable to have control over the information they are sharing."},
    "imp-2": 
		{name: "Explicit-I - Physical", imglink: "../personacards/raw_cards/imp-2.pdf", description: "another person being physical harmed, or on occasion, their property being stolen by the attacker."},
    "imp-3": 
		{name: "Explicit-I - Economic", imglink: "../personacards/raw_cards/imp-3.pdf", description: "the victim having an economic loss since their breached personal information contained financial records."},
    "imp-4": 
		{name: "Implicit-O - Reputational", imglink: "../personacards/raw_cards/imp-4.pdf", description: "loss of public trust and trust of other businesses who are associated with the company."},
    "imp-5": 
		{name: "Explicit-O - Physical", imglink: "../personacards/raw_cards/imp-5.pdf", description: "harm to the company's assets which end up being stolen. These assets (hardware and software) are critical to the company's operations."},
    "imp-6": 
		{name: "Explicit-O - Economic", imglink: "../personacards/raw_cards/imp-6.pdf", description: "the company losing over half a million in gains because customers have moved away from accessing their services."},
    "imp-7": 
		{name: "Implicit-I - Reputational", imglink: "../personacards/raw_cards/imp-7.pdf", description: "a person's reputation in the community being harmed."},
    "imp-8": 
		{name: "Implicit-I - Discrimination", imglink: "../personacards/raw_cards/imp-8.pdf", description: "a person facing inequality in opportunity and not getting the same benefits as others due to their membership in certain demography."},
    "imp-9": 
		{name: "Implicit-I - Relationship", imglink: "../personacards/raw_cards/imp-9.pdf", description: "a person having their connection with loved ones broken due to loss of trust in the person."},
    "imp-10": 
		{name: "Implicit-I - Psychological", imglink: "../personacards/raw_cards/imp-10.pdf", description: "a person being emotionally distressed with anxiety or anguish."}
};
var store = "";
generate = function() {
    if(document.getElementById("actor").value == "none" || document.getElementById("mech").value == "none" || document.getElementById("imp").value == "none")
    {
	alert('Please select an option from each category.');
    }
    document.getElementById("display").style.textAlign = "justify";
    var a = document.getElementById("actor").value;
    var m = document.getElementById("mech").value;
    var i = document.getElementById("imp").value;
    var head = ""; 
    var disp = ""; 
    head = actordata[a]['name'] + ', ' + mechdata[m]['name'] + ', ' + impactdata[i]['name'];
    disp = actordata[a]['description'] + ' They cause a privacy breach by ' + mechdata[m]['description'] + ' This incident leads to ' + impactdata[i]['description'];
    document.getElementById("display").innerText = disp;
    document.getElementById("header").innerText = head;
    store += head + "\n" + disp + "\n";
    document.getElementById("actorlink").contentWindow.location.href = actordata[a]['imglink'];
    document.getElementById("mechlink").contentWindow.location.href = mechdata[m]['imglink'];
    document.getElementById("implink").contentWindow.location.href = impactdata[i]['imglink'];
};

save = function() {
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(store);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'personas.txt';
    hiddenElement.click();
    store = "";
};

reset = function() {
    document.getElementById("header").innerText = " "; 
    document.getElementById("display").style.textAlign = "center";
    document.getElementById("display").innerText = "Persona displayed here";
    document.getElementById("actorlink").contentWindow.location.href = "../personacards/raw_cards/act.pdf";
    document.getElementById("mechlink").contentWindow.location.href = "../personacards/raw_cards/mech.pdf";
    document.getElementById("implink").contentWindow.location.href = "../personacards/raw_cards/imp.pdf";
};