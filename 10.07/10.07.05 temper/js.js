var _http_ = require("http");
var NAME = "KrasnowEvgen";
var SSID = "BillGilbert";
var PASSWORD = "WasHere!!!!";

var temp = require("@amperka/thermometer").connect(A2);
var dweet = require("@amperka/dweetio").connect(NAME);

function run() {
  setInterval(function () {
    _http_.get(
      "http://dweet.io/dweet/for/" + NAME + "?temperature=" + temp.read("C"),
      function (res) {
        res.on("data", function (data) {
          console.log("HTTP> " + data);
        });
        res.on("close", function (data) {
          console.log("Connection closed");
        });
      }
    );
  }, 2000);
}

var wifi = require("@amperka/wifi").setup(function (err) {
  wifi.connect(SSID, PASSWORD, function (err) {
    print("Click this link", dweet.follow());
    run();
  });
});
