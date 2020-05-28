// var request = require("request");

// document
//   .getElementById("search-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     var options = {
//       method: "GET",
//       url:
//         "https://api.spotify.com/v1/search?query=%22doom%22&type=playlist&offset=0&limit=20",
//       headers: {
//         "content-type": "application/json",
//         authorization: "Bearer access_token",
//       },
//     };

//     request(options, function (error, response, body) {
//       if (error) throw new Error(error);

//       console.log(body);
//     });
//   });

document
  .getElementById("search-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getCall = async () => {
      const response = await fetch(
        "https://api.spotify.com/v1/search?query=%22doom%22&type=playlist&offset=0&limit=20",
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: "Bearer access_token",
          },
        }
      );
      const myJson = await response.json(); //extract JSON from the http response
      // do something with myJson
    };
  });
