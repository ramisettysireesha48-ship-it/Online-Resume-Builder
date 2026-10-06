function generateResume() {

    // Get values from form

    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;

    let objective = document.getElementById("objective").value;

    let degree = document.getElementById("degree").value;
    let college = document.getElementById("college").value;
    let year = document.getElementById("year").value;

    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;


    // Display values in resume

    document.getElementById("r-name").innerText =
        name || "Your Name";

    document.getElementById("r-job").innerText =
        job || "Your Job Title";

    document.getElementById("r-email").innerText =
        email || "email@example.com";

    document.getElementById("r-phone").innerText =
        phone || "+91 0000000000";

    document.getElementById("r-location").innerText =
        location || "Your Location";


    document.getElementById("r-objective").innerText =
        objective || "Your career objective will appear here.";


    document.getElementById("r-degree").innerText =
        degree || "Your Degree";

    document.getElementById("r-college").innerText =
        college || "Your College";

    document.getElementById("r-year").innerText =
        year || "Year";


    document.getElementById("r-skills").innerText =
        skills || "Your skills";


    document.getElementById("r-experience").innerText =
        experience || "Your experience will appear here.";


    document.getElementById("r-projects").innerText =
        projects || "Your projects will appear here.";
}


// Clear form

function clearForm() {

    document.querySelectorAll("input, textarea").forEach(function(element) {
        element.value = "";
    });

    generateResume();
}


// Print / Download

function printResume() {
    window.print();
}