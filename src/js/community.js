document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {

    let communities = [
        {
            "name": "Game development Club",
            "role": "Founder",
            "session": "June 2022 - Present",
            "logo": "images/community/logoDTsemfundo.png",
            "details": "As the founder of a game development club, I had the pleasure of guiding 42 school students through the intricacies of the industry. We developed games together, held informative talks, and had a lot of fun along the way!."
        },
        {
            "name": "42 School",
            "role": "Lifeguard",
            "session": "may 2022 - Aug 2022",
            "logo": "images/community/42_Logo.svg.png",
            "link": "https://www.42lisboa.com/",
            "details": "As technical staff at 42 school, I had the opportunity to help countless students with various technologies, organizing events, and providing support whenever necessary. It was a fulfilling and challenging experience."
        },
        {
            "name": "Microsoft Az900 Certification",
            "role": "Student Ambassador",
            "session": "Feb 2021 - Feb 2022",
            "logo": "images/community/image.png",
            "link": "https://www.linkedin.com/posts/tom%C3%A1s-almeida-garrett-83461a183_microsoft-certified-azure-fundamentals-was-activity-6968302191375736832-NAdp?utm_source=share&utm_medium=member_desktop",
            "details": "Achieving my Azure900 certification was a proud moment for me. It demonstrated my knowledge and expertise in Azure fundamentals and gave me a valuable edge in the tech industry."
        }
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        var card = document.createElement("a");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        card.href = link;
        card.target = "_blank";

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}