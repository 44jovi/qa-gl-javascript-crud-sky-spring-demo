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
})();

console.log("SCRIPT END");
