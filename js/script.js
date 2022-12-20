// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-6-04-extra/sw.js", {
    scope: "/ICS2O-6-04-extra/",
  })
}

function start() {
  const params = new URLSearchParams(document.location.search)
  const fahrenheit = params.get("f")

  document.getElementById("fahrenheit").innerHTML =
    "The temperature in fahrenheit is: " + fahrenheit + "℉."

  const celsius = ((fahrenheit - 32) * 5) / 9
  document.getElementById("celsius").innerHTML =
    "The temperature in celsius is: " + celsius.toFixed(2) + "℃."
}
