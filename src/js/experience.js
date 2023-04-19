document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "42 Lisboa",
            "position": "technical support team",
            "duration": "May 2022 - August 2022",
            "technologies": [
                "MySQL",
                "Python",
                "GitHub Actions",
                "JavaScript",
                "Jira",
                "REST APIs"
            ],
            "details": [
                "Troubleshooting technical issues with hardware and software",
				"Providing technical assistance for various applications and systems",
				"Responding to help desk tickets and support requests",
				"Installing and configuring software and hardware",
				"Performing maintenance and upgrades on systems and equipment",
				"Collaborating with other teams to resolve complex technical problems",
				"Documenting technical solutions and updating knowledge base articles",
				"Providing training and guidance to new users on the use of the company's infrastructure"
            ]
        },
        {
            "org": "Gagicrc",
            "position": "Junior Software Developer trainee",
            "duration": "Jan 2022 - April 2022",
            "technologies": [
                "C#",
                "ASP.NET Core MVC",
                "SQL",
                "Java",
				"JavaScript",
				"HTML",
				"CSS",
				"Bootstrap",
				"JQuery",
				"Jira",
				"REST APIs",
				"Git"
            ],
            "details": [
                "Object-Oriented Programming (OOP) Model-View-Controller (MVC) architecture",
				"Database design and management",
				"Web application development and deployment",
				"System requirements gathering and analysis",
				"Problem-solving and algorithm implementation",
				"Agile software development methodologies",
				"Cross-functional collaboration and teamwork",
				"Strong debugging and troubleshooting skills",
				"Knowledge of web development technologies and tools."
            ]
        },
        {
            "org": "DXC",
            "position": "Junior cloud Engineer trainee",
            "duration": "Sep 2022 - Jan 2023",
            "technologies": [
                "Terraform",
                "Cloud Azure",
                "AWS",
                "GCP",
				"Python",
				"Nginx",
				"Jenkins",
				"Git",
				"Jira",
				"REST APIs",
				"BitBucket"
            ],
            "details": [
                "Knowledge of cloud computing platforms such as AWS, Azure, and Google Cloud",
				"Experience with cloud infrastructure design and deployment",
				"Familiarity with virtualization and containerization technologies",
				"Ability to manage and monitor cloud-based systems and applications",
				"Experience with scripting and automation tools for cloud deployment and management",
				"Knowledge of security best practices for cloud computing",
				"Experience with cloud migration and data transfer",
				"Work with clients to understand and implement their cloud requirements",
				"Collaboration and communication skills with both technical and non-technical teams",
				"Continual learning and staying up-to-date with new cloud technologies and trends."
            ]
        },
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}