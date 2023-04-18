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

  async function getPeople() {
    try {
      displayPersons.innerHTML = "";
      const res = await axios.get(url + "getAll");

      res.data.forEach((person) => renderPerson(person));
    } catch (error) {
      console.error(error);
    }
  }

  document
    .getElementById("personForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      // target each input element of the "personForm"
      const { pName, age, job, NINum } = this;

      // keys MUST match what the API is expecting
      const newPerson = {
        fullName: pName.value,
        oldNess: age.value,
        occupation: job.value,
        notNiNumber: NINum.value,
      };

      this.reset();

      try {
        const res = await axios.post(url + "/create", newPerson);
      } catch (error) {
        console.error(error);
      }
    });
})();

console.log("SCRIPT END");
