console.log("SCRIPT START");

(function () {
  const url = "http://localhost:8080";

  async function getAll() {
    try {
      const data = await axios.get(url + "/getAll/");
      console.log("returned data: ");
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  getAll();

  // const testPerson = {
  //   fullName: "Joe Joeson",
  //   oldNess: 44,
  //   occupation: "Chief Joe Officer",
  //   notNiNumber: "CHIEF0000",
  // };

  // async function createTestPerson() {
  //   try {
  //     await axios.post(url + "/create", testPerson);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  createTestPerson();
})();

console.log("SCRIPT END");
