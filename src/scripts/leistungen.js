document.addEventListener("DOMContentLoaded", function () {
  const cityFilter = document.getElementById("cityFilter");
  const serviceFilter = document.getElementById("serviceFilter");
  const serviceList = document.querySelectorAll(".service-list li");

  function filterServices() {
    const selectedCity = cityFilter.value;
    const selectedService = serviceFilter.value;

    serviceList.forEach((item) => {
      const cityMatch =
        selectedCity === "" || item.dataset.city === selectedCity;
      const serviceMatch =
        selectedService === "" || item.dataset.service === selectedService;

      item.style.display = cityMatch && serviceMatch ? "block" : "none";
    });
  }

  cityFilter.addEventListener("change", filterServices);
  serviceFilter.addEventListener("change", filterServices);

  serviceList.forEach((item) => {
    item.addEventListener("click", function () {
      const info = this.querySelector(".company-info");
      if (info.style.display === "block") {
        info.style.display = "none";
      } else {
        document
          .querySelectorAll(".company-info")
          .forEach((div) => (div.style.display = "none"));
        info.style.display = "block";
      }
    });
  });
});
