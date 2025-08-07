function getProject() {
  console.log("get data");
  fetch("dist/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      const sortData = data["result"].reverse();
      sortData.forEach(function (item) {
        output += `
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img src="${item.imageUrl}" alt="${item.name}" width="w-full" />
            </div>
            <a
              href="${item.projectUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3
                class="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white"
              >
                ${item.name}
              </h3>
            </a>
            <p class="text-base font-medium text-secondary">
                ${item.description}
            </p>
          </div>
        `;
      });
      document.getElementById("projectId").innerHTML = output;
    })
    .catch((e) => {
      console.log(`error get data from json: ${e}`);
      document.getElementById(
        "projectId"
      ).innerHTML = `<p class="text-base font-medium text-secondary">Error get data ${e}</p>`;
    });
}

getProject();
