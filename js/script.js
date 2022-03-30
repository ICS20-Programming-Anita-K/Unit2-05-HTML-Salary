// Copyright (c) 2022 Anita Kay All rights reserved
//
// Created by: Anita Kay
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates pay and how much the government takes.
 */
function calculate () {
  // input
  const hours = parseFloat(document.getElementById('number-of-hours-worked').value)
  const rate = parseFloat(document.getElementById('hourly-rate').value)

  // process
  const pay = (rate * hours) - (((rate * hours) / 100) * 18.05);
  const tax = ((rate * hours) / 100) * 18.05;

  // output
  document.getElementById('user-pay').innerHTML = 'Your pay will be $' + pay.toFixed(2) + '.'
  document.getElementById('user-tax').innerHTML = 'The government will take $' + tax.toFixed(2) + '.'
}
