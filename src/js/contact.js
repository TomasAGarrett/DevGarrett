document.addEventListener("DOMContentLoaded", function () {
    mapContactDetails();
    currentDate();
});

function mapContactDetails() {
    let contactInfo = [
        {
            "icon": "fa fa-phone",
            "label": "+351 913 699 105",
            "link": "https://wa.me/351913699105"
        },
        {
            "icon": "fa fa-envelope",
            "label": "tomas.ca.garrett@gmail.com",
            "link": "mailto:tomas.ca.garrett@gmail.com"
        },
        {
            "icon": "images/svgs/upwork.svg",
            "label": "Hire Me",
            "link": "https://www.linkedin.com/in/tom%C3%A1s-almeida-garrett-83461a183/"
        }
    ];

    for (var i = 0; i < contactInfo.length; i++) {
        var c = contactInfo[i];
        var icon = c.icon;
        var label = c.label;
        var link = c.link;

        var card = document.createElement("a");
        card.className = "contact-card";

        card.href = link;
        card.target = "_blank";

        var iconDiv = label == "Hire Me" ? document.createElement("img") : document.createElement("i");
        if (label != "Hire Me") {
            iconDiv.className = icon;
        } else {
            iconDiv.src = icon;
            iconDiv.style.height = "24px";
        }
        iconDiv.id = "mail-icon";

        var labelDiv = document.createElement("span");
        labelDiv.className = "body2 contact-label";
        labelDiv.innerHTML = label;

        var chevDiv = document.createElement("i");
        chevDiv.id = "chevron-icon";
        chevDiv.className = "fa fa-chevron-right";

        card.appendChild(iconDiv);
        card.appendChild(labelDiv);
        card.appendChild(chevDiv);

        var contactInfoDiv = document.getElementById("contact-info-div");
        contactInfoDiv.insertBefore(card, contactInfoDiv.firstChild);
    }
}

function onMeetClick() {
    window.open("https://calendly.com/tomas-ca-garrett", '_blank');
}

function currentDate() {
    const current = new Date();
    let monthName = current.toLocaleDateString('en-PT', {
        month: "long",
    });

    let date = current.getDate();

    let dayName = current.toLocaleDateString('en-PT', {
        weekday: "long",
    });

    var monthText = document.getElementById("month");
    monthText.innerHTML = monthName;

    var dayText = document.getElementById("date");
    dayText.innerHTML = date;

    var weekDayText = document.getElementById("day");
    weekDayText.innerText = dayName;
}