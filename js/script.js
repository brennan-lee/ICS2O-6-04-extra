// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
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
