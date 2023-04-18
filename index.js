console.log("SCRIPT START");

(function () {
  const displayPersons = document.getElementById("displayPersons");
  const url = "http://localhost:8080";

  async function getPersons() {
    try {
      displayPersons.innerHTML = "";
      const res = await axios.get(url + "/getAll");
      res.data.forEach((person) => renderPerson(person));
    } catch (error) {
      console.error(error);
    }
  }
  // Variables order does not seem to matter, as long as names match
  function renderPerson({ fullName, oldNess, occupation, notNiNumber, id }) {
    const personCard = document.createElement("div");
    personCard.id = "personCard";
    const personCardBody = document.createElement("div");
    personCardBody.id = "personCardBody";

    const personFullName = document.createElement("p");
    personFullName.innerHTML = `Name: ${fullName}`;

    const personOldNess = document.createElement("p");
    personOldNess.innerHTML = `Age: ${oldNess}`;

    const personOccupation = document.createElement("p");
    personOccupation.innerHTML = `Job: ${occupation}`;

    const personNotNiNumber = document.createElement("p");
    personNotNiNumber.innerHTML = `NI Number: none of your business`;

    const personID = document.createElement("p");
    personID.innerHTML = `ID: ${id}`;

    personCardBody.appendChild(personID);
    personCardBody.appendChild(personFullName);
    personCardBody.appendChild(personOldNess);
    personCardBody.appendChild(personOccupation);
    personCardBody.appendChild(personNotNiNumber);

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteButton";
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", () => deletePerson(id));
    personCard.appendChild(deleteBtn);
    personCard.appendChild(personCardBody);

    personCard.appendChild(personCardBody);
    displayPersons.appendChild(personCard);
  }

  async function deletePerson(id) {
    const res = await axios.delete(url + "/remove/" + id);
    getPersons();
  }

  document
    .getElementById("personForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      // target each input element of the "personForm"
      const { fullName, oldNess, occupation, notNiNumber } = this;

      // keys MUST match what the API is expecting
      const newPerson = {
        fullName: fullName.value,
        oldNess: oldNess.value,
        occupation: occupation.value,
        notNiNumber: notNiNumber.value,
      };

      this.reset();

      try {
        const res = await axios.post(url + "/create", newPerson);
        getPersons();
      } catch (error) {
        console.error(error);
      }
    });

  getPersons();
})();

console.log("SCRIPT END");
