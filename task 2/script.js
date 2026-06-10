const API = "http://localhost:5000/api/leads";

document
.getElementById("leadForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const lead = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        source: document.getElementById("source").value
    };

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(lead)
    });

    loadLeads();
});

async function loadLeads() {

    const res = await fetch(API);
    const data = await res.json();

    const table = document.getElementById("leadTable");

    table.innerHTML = "";

    data.forEach(lead => {

        table.innerHTML += `
        <tr>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.source}</td>
            <td>${lead.status}</td>
        </tr>`;
    });
}

loadLeads();