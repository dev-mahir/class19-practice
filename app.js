const skills = document.getElementById("skill");

// load skills from api

const load_skills = () => {
    axios.get("http://localhost:5050/skill").then((data) => {
        
        let skill_item = "";
        data.data.map((skill) => {
            skill_item += `<option value="${skill.id}">${skill.name}</option>`;
        });

        skills.insertAdjacentHTML("beforeend", skill_item);
    });
};

load_skills();
