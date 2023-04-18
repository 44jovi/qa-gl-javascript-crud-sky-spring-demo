console.log("SCRIPT START");

(function () {
  const displayPersons = document.getElementById("displayPersons");
  const url = "http://localhost:8080";

  // async function getAll() {
  //   try {
  //     const data = await axios.get(url + "/getAll/");
  //     console.log("returned data: ");
  //     console.log(data);
  //     return data.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function getPersons() {
    try {
      displayPersons.innerHTML = "";
      const res = await axios.get(url + "/getAll");
      res.data.forEach((person) => renderPerson(person));
    } catch (error) {
      console.error(error);
    }
  }
  // TODO: check if these variable names have to match with data returned
  // Order does not seem to matter, as long as variable name matches
  function renderPerson({ fullName, oldNess, occupation, notNiNumber, id }) {
    const person = document.createElement("div");

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

    person.appendChild(personID);
    person.appendChild(personFullName);
    person.appendChild(personOldNess);
    person.appendChild(personOccupation);
    person.appendChild(personNotNiNumber);

    displayPersons.appendChild(person);
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
      } catch (error) {
        console.error(error);
      }
    });

  getPersons();
})();

console.log("SCRIPT END");
