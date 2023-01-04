window.fetchSomething = function () {
  fetch("https://www.google.com/", {
    headers: {
      thisIsFine: "1337",
      thisThrowsError: 1337,
    },
  }).then(
    (response) => alert(response.status),
    (e) => alert("Error: " + e)
  );
};
