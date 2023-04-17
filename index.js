console.log("SCRIPT START");

(function () {
  // WIP

  const url = "http://localhost:8080";

  async function getData() {
    try {
      const data = await axios.get(url + "/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getData();
})();

console.log("SCRIPT END");
