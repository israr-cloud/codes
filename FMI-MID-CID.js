document.addEventListener("DOMContentLoaded", function() {
    // The HTML content to be added
    let htmlContent = ` 
    <style>
  .fault-table-wrapper {
    width: 100%;
    height: 150vh;
    overflow-x: auto;
  }

  .fault-table-wrapper table {
    width: 100%;
    border-collapse: collapse;
    color: #333;
  }

  .fault-table-wrapper td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    font-size: 14px;
  }

  th {
    background-color: #061938;
    font-size: 14px;
    color: white;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    position: sticky;
    top: 0;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  caption {
    caption-side: top;
    text-align: center;
    font-weight: bold;
    padding: 10px;
  }

  /* table scroll bar css*/
  .fault-table-wrapper::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: #e0e0e0;
    border-radius: 250px;
  }

  .fault-table-wrapper::-webkit-scrollbar-thumb {
    background: var(--coral);
    border-radius: 250px;
  }
</style>

<div class="fault-table-wrapper" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th
          id="703706030C0"
          style="width: 208px"
          class="column-headers-background"
        >
          Code Identifier
        </th>
        <th
          id="703706030C1"
          style="width: 478px"
          class="column-headers-background"
        >
          Code Description
        </th>
        <th
          id="703706030C2"
          style="width: 100px"
          class="column-headers-background"
        >
          Count
        </th>
        <th
          id="703706030C3"
          style="width: 100px"
          class="column-headers-background"
        >
          FMI
        </th>
        <th
          id="703706030C4"
          style="width: 288px"
          class="column-headers-background"
        >
          FMI Description
        </th>
        <th
          id="703706030C5"
          style="width: 100px"
          class="column-headers-background"
        >
          MID
        </th>
        <th
          id="703706030C6"
          style="width: 298px"
          class="column-headers-background"
        >
          MID Description
        </th>
        <th
          id="703706030C7"
          style="width: 100px"
          class="column-headers-background"
        >
          CID
        </th>
        <th
          id="703706030C8"
          style="width: 245px"
          class="column-headers-background"
        >
          CID Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style="height: 20px"></tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1275</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">636</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">441</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:5242</td>
        <td class="s5" dir="ltr">TMAC System: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">407</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5242</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:4682</td>
        <td class="s5" dir="ltr">Cellular Antenna: Voltage Above Normal</td>
        <td class="s6" dir="ltr">406</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4682</td>
        <td class="s5" dir="ltr">Cellular Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:2425</td>
        <td class="s5" dir="ltr">Boom Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">396</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2425</td>
        <td class="s5" dir="ltr">Boom &lt;Raise/Lower&gt; Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:669</td>
        <td class="s5" dir="ltr">
          Transmission Input Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">372</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">669</td>
        <td class="s5" dir="ltr">Transmission Input Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">337</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Voltage Below Normal</td>
        <td class="s6" dir="ltr">333</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:400, CID:4682</td>
        <td class="s5" dir="ltr">Cellular Antenna: Voltage Below Normal</td>
        <td class="s6" dir="ltr">316</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4682</td>
        <td class="s5" dir="ltr">Cellular Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:1250</td>
        <td class="s5" dir="ltr">
          Remote Communication Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">314</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1250</td>
        <td class="s5" dir="ltr">Remote Communication Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">298</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:379</td>
        <td class="s5" dir="ltr">
          Machine Auto Lube Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">287</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">379</td>
        <td class="s5" dir="ltr">Machine Auto Lube Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:390, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">284</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">275</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:363, CID:6346</td>
        <td class="s5" dir="ltr">
          Object Detection Rear Camera: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">266</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">363</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6346</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:390, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">240</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:390, CID:669</td>
        <td class="s5" dir="ltr">
          Transmission Input Speed Sensor loss of signal
        </td>
        <td class="s6" dir="ltr">236</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">669</td>
        <td class="s5" dir="ltr">Transmission Input Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:2328</td>
        <td class="s5" dir="ltr">
          Dump Anti Drift Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">234</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2328</td>
        <td class="s5" dir="ltr">Dump Anti Drift Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:264, CID:672</td>
        <td class="s5" dir="ltr">
          Torque Converter Output Speed Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">217</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">672</td>
        <td class="s5" dir="ltr">Torque Converter Output Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3547</td>
        <td class="s5" dir="ltr">
          Water In Fuel System Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">215</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3547</td>
        <td class="s5" dir="ltr">Water in Fuel System Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:357</td>
        <td class="s5" dir="ltr">Rackback Solenoid #1: Current Below Normal</td>
        <td class="s6" dir="ltr">208</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">357</td>
        <td class="s5" dir="ltr">Rackback Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:351</td>
        <td class="s5" dir="ltr">
          Tilt Linkage Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">206</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:376</td>
        <td class="s5" dir="ltr">Travel Alarm: Current Below Normal</td>
        <td class="s6" dir="ltr">192</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">376</td>
        <td class="s5" dir="ltr">Travel Alarm</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">191</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:871</td>
        <td class="s5" dir="ltr">Inclination Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">189</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">871</td>
        <td class="s5" dir="ltr">Inclination Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:3061</td>
        <td class="s5" dir="ltr">
          Quick Coupler Enable Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">187</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3061</td>
        <td class="s5" dir="ltr">Quick Coupler Enable Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:1888</td>
        <td class="s5" dir="ltr">Local GPS Antenna: Voltage Above Normal</td>
        <td class="s6" dir="ltr">179</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1888</td>
        <td class="s5" dir="ltr">Local GPS Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:464, CID:1956</td>
        <td class="s5" dir="ltr">
          Bucket Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">175</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1956</td>
        <td class="s5" dir="ltr">Bucket Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:3694</td>
        <td class="s5" dir="ltr">Blade Slope Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">3694</td>
        <td class="s5" dir="ltr">Blade Slope Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">165</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1530</td>
        <td class="s5" dir="ltr">
          Quick Coupler Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">164</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1530</td>
        <td class="s5" dir="ltr">Quick Coupler Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">155</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3126</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank Heater #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">152</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3126</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 543px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Tank #1 Heater Coolant
            Diverter Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">151</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">146</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:50952, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">140</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:769</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Rod End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">140</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">769</td>
        <td class="s5" dir="ltr">Lift Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:769</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Rod End Pressure Sensor: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">139</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">769</td>
        <td class="s5" dir="ltr">Lift Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:908</td>
        <td class="s5" dir="ltr">
          Blade Rotation Position Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">132</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">908</td>
        <td class="s5" dir="ltr">Blade rotation position sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:299, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Other Failure Mode</td>
        <td class="s6" dir="ltr">123</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:27, CID:718</td>
        <td class="s5" dir="ltr">Transmission System: Other Failure Mode</td>
        <td class="s6" dir="ltr">120</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">718</td>
        <td class="s5" dir="ltr">Transmission System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:4752</td>
        <td class="s5" dir="ltr">
          Quick Coupler Solenoid #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">119</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4752</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:464, CID:2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:298</td>
        <td class="s5" dir="ltr">
          Service Brake Pedal Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">111</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">298</td>
        <td class="s5" dir="ltr">Service Brake Pedal Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:27, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">108</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:263, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">107</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:27, CID:701</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">107</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">701</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">105</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:174</td>
        <td class="s5" dir="ltr">
          Fuel Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">105</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">174</td>
        <td class="s5" dir="ltr">Fuel Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:400, CID:1888</td>
        <td class="s5" dir="ltr">Local GPS Antenna: Voltage Below Normal</td>
        <td class="s6" dir="ltr">104</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1888</td>
        <td class="s5" dir="ltr">Local GPS Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:36, CID:91</td>
        <td class="s5" dir="ltr">
          Throttle Position Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">104</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">91</td>
        <td class="s5" dir="ltr">Throttle Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:1870</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Thumb Rocker Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">101</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1870</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Blade Control Handle Thumb Rocker Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:1639</td>
        <td class="s5" dir="ltr">
          Machine Security System Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">99</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1639</td>
        <td class="s5" dir="ltr">Machine Security System Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:70</td>
        <td class="s5" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">98</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">95</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:264, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">94</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:369, CID:3278</td>
        <td class="s5" dir="ltr">
          Object Detection System Control Module: Special Instruction
        </td>
        <td class="s6" dir="ltr">91</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">369</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3278</td>
        <td class="s5" dir="ltr">Object Detection System Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:50952, CID:450</td>
        <td class="s5" dir="ltr">
          Communication Module Link Fault:Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">91</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">450</td>
        <td class="s5" dir="ltr">Operator Tong Open/Close Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:1529</td>
        <td class="s5" dir="ltr">
          Quick Coupler Switch: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">90</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1529</td>
        <td class="s5" dir="ltr">Quick Coupler Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:3633</td>
        <td class="s5" dir="ltr">
          Swing Priority Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">90</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3633</td>
        <td class="s5" dir="ltr">Swing Priority Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">88</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4651</td>
        <td class="s5" dir="ltr">
          Blade Inertial Measurement Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4651</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3700</td>
        <td class="s5" dir="ltr">
          Loader Bucket Inclinometer Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3700</td>
        <td class="s5" dir="ltr">Loader Bucket Inclinometer Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:113, CID:468</td>
        <td class="s5" dir="ltr">
          Service Brake Pedal Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">85</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">468</td>
        <td class="s5" dir="ltr">Service Brake Pedal Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:379</td>
        <td class="s5" dir="ltr">
          Machine Auto Lube Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">84</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">379</td>
        <td class="s5" dir="ltr">Machine Auto Lube Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:464, CID:2425</td>
        <td class="s5" dir="ltr">Boom Angle Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2425</td>
        <td class="s5" dir="ltr">Boom &lt;Raise/Lower&gt; Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:392, CID:1227</td>
        <td class="s5" dir="ltr">Retarder Lever: Voltage Below Normal</td>
        <td class="s6" dir="ltr">80</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1227</td>
        <td class="s5" dir="ltr">Retarder Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2755</td>
        <td class="s5" dir="ltr">
          Blade Control Mode Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">79</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2755</td>
        <td class="s5" dir="ltr">Blade Control Mode Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">78</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2526</td>
        <td class="s5" dir="ltr">
          Air Inlet Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">74</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2526</td>
        <td class="s5" dir="ltr">Air Inlet Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:30, CID:248</td>
        <td class="s5" dir="ltr">Invalid @CatDatalinkLong@ data</td>
        <td class="s6" dir="ltr">74</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">Caterpillar Monitoring System</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:341, CID:3182</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Fuel Injector #1 Heater: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">71</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3182</td>
        <td class="s5" dir="ltr">Aftertreatment #1 Fuel Injector #1 Heater</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:50952, CID:450</td>
        <td class="s5" dir="ltr">
          Communication Module Link Fault:Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">70</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">450</td>
        <td class="s5" dir="ltr">Operator Tong Open/Close Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:432, CID:3687</td>
        <td class="s5" dir="ltr">
          Directional Heading Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">69</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3687</td>
        <td class="s5" dir="ltr">Directional Heading Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3423</td>
        <td class="s5" dir="ltr">Grade Control System: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">69</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3423</td>
        <td class="s5" dir="ltr">Grade Control System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">69</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:304, CID:5993</td>
        <td class="s5" dir="ltr">
          12 Volt DC Power Supply #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">67</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5993</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:3687</td>
        <td class="s5" dir="ltr">
          Directional Heading Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">67</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3687</td>
        <td class="s5" dir="ltr">Directional Heading Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:3900</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">65</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:304, CID:1426</td>
        <td class="s5" dir="ltr">Rear Warning Lamp: Current Below Normal</td>
        <td class="s6" dir="ltr">63</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1426</td>
        <td class="s5" dir="ltr">Rear Warning Lamp</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:3423</td>
        <td class="s5" dir="ltr">Grade Control System: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">62</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3423</td>
        <td class="s5" dir="ltr">Grade Control System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:2500</td>
        <td class="s5" dir="ltr">
          Powertrain Speed Range Control Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">62</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2500</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Powertrain Speed Range Control position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:2402</td>
        <td class="s5" dir="ltr">Laser Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">61</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2402</td>
        <td class="s5" dir="ltr">Laser Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1658</td>
        <td class="s5" dir="ltr">
          Right Joystick Thumbwheel: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">60</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1658</td>
        <td class="s5" dir="ltr">Right Joystick Thumbwheel</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:390, CID:379</td>
        <td class="s5" dir="ltr">
          Machine Auto Lube Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">60</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">379</td>
        <td class="s5" dir="ltr">Machine Auto Lube Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:392, CID:1227</td>
        <td class="s5" dir="ltr">
          Retarder Lever: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">56</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1227</td>
        <td class="s5" dir="ltr">Retarder Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:291</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">56</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">291</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:2110</td>
        <td class="s5" dir="ltr">
          Machine Pitch Sensor: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">55</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:113, CID:2122</td>
        <td class="s5" dir="ltr">
          Transmission Selector Reverse Direction Switch: Not Responding
          Properly
        </td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">2122</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Selector Reverse Direction Switch
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:36, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage: Low</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:113, CID:2121</td>
        <td class="s5" dir="ltr">
          Transmission Selector Forward Direction Switch: Erratic, Intermittent,
          or Incorrect
        </td>
        <td class="s6" dir="ltr">52</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">2121</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Selector Forward Direction Switch
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3372</td>
        <td class="s5" dir="ltr">
          Engine Charge Air Cooler #1 Outlet Temperature Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">52</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3372</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Charge Air Cooler #1 Outlet Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:389, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">51</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2738</td>
        <td class="s5" dir="ltr">
          Turbocharger #1 Compressor Inlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">50</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2738</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Turbocharger #1 Compressor Inlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5559</td>
        <td class="s5" dir="ltr">
          Loader Lift Linkage Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">50</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5559</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1292</td>
        <td class="s5" dir="ltr">Gear Hold Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">50</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1292</td>
        <td class="s5" dir="ltr">Gear Hold Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:464, CID:1956</td>
        <td class="s5" dir="ltr">
          Bucket Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1956</td>
        <td class="s5" dir="ltr">Bucket Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5558</td>
        <td class="s5" dir="ltr">
          Loader Tilt Linkage Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5558</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">48</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply: Voltage Below Normal</td>
        <td class="s6" dir="ltr">48</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1956</td>
        <td class="s5" dir="ltr">
          Bucket Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">47</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1956</td>
        <td class="s5" dir="ltr">Bucket Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:4651</td>
        <td class="s5" dir="ltr">
          Blade Inertial Measurement Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">47</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4651</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:464, CID:2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor: Voltage Below Normal</td>
        <td class="s6" dir="ltr">46</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:50952, CID:607</td>
        <td class="s5" dir="ltr">
          Wheel Speed Sensor #3:Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">46</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">607</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:464, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">46</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:460</td>
        <td class="s5" dir="ltr">
          Fuel Pressure Sensor - After Fuel Filter: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">45</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">460</td>
        <td class="s5" dir="ltr">Fuel Pressure Sensor ? after fuel filter</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:374</td>
        <td class="s5" dir="ltr">Swing Brake Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">45</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">374</td>
        <td class="s5" dir="ltr">Swing Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:50952, CID:254</td>
        <td class="s5" dir="ltr">Electronic Control Module:Failure</td>
        <td class="s6" dir="ltr">45</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">254</td>
        <td class="s5" dir="ltr">Electronic Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:2529</td>
        <td class="s5" dir="ltr">
          Loader Joystick Thumbwheel Position Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">45</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2529</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Loader Joystick Thumbwheel Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:5805</td>
        <td class="s5" dir="ltr">
          Communication Gateway: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">45</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5805</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:36, CID:617</td>
        <td class="s5" dir="ltr">
          Inlet Air Heater Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">44</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">617</td>
        <td class="s5" dir="ltr">Inlet Air Heater Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:263, CID:3100</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank Fluid Quality Sensor: Failure
        </td>
        <td class="s6" dir="ltr">44</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3100</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Tank Reagent Quality Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2994</td>
        <td class="s5" dir="ltr">
          Direction Selector Position Sensor #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">43</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2994</td>
        <td class="s5" dir="ltr">Direction Selector Position Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:351</td>
        <td class="s5" dir="ltr">
          Tilt Linkage Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">43</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:2606</td>
        <td class="s5" dir="ltr">
          Cylinder #3 Injector Actuator #2: Current Above Normal
        </td>
        <td class="s6" dir="ltr">43</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2606</td>
        <td class="s5" dir="ltr">Cylinder #3 Injector Actuator #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:264, CID:3657</td>
        <td class="s5" dir="ltr">
          Operator In Seat Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">40</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3657</td>
        <td class="s5" dir="ltr">Operator In Seat Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:350</td>
        <td class="s5" dir="ltr">
          Lift Linkage Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">40</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">350</td>
        <td class="s5" dir="ltr">Lift Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">40</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:2994</td>
        <td class="s5" dir="ltr">
          Direction Selector Position Sensor #2: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">40</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2994</td>
        <td class="s5" dir="ltr">Direction Selector Position Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:33, CID:1756</td>
        <td class="s5" dir="ltr">Start Aid Indicator: Current Below Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">1756</td>
        <td class="s5" dir="ltr">Start Aid Indicator</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:91</td>
        <td class="s5" dir="ltr">
          Throttle Position Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">38</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">91</td>
        <td class="s5" dir="ltr">Throttle Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1291</td>
        <td class="s5" dir="ltr">Bail Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">38</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1291</td>
        <td class="s5" dir="ltr">Bail Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:263, CID:3385</td>
        <td class="s5" dir="ltr">
          EGR Intake Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">38</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3385</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust Gas Recirculation Intake Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:341, CID:2490</td>
        <td class="s5" dir="ltr">
          ARD Air Pressure Control Actuator Position Sensor: Voltage Below
          Normal
        </td>
        <td class="s6" dir="ltr">38</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2490</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 543px; left: -1px">
            Aftertreatment Regeneration Device Air Pressure Control Actuator
            Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Special Instruction</td>
        <td class="s6" dir="ltr">38</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:400, CID:2524</td>
        <td class="s5" dir="ltr">Satellite Antenna: Voltage Below Normal</td>
        <td class="s6" dir="ltr">37</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2524</td>
        <td class="s5" dir="ltr">Satellite Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1293</td>
        <td class="s5" dir="ltr">Cushion Hitch Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">37</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1293</td>
        <td class="s5" dir="ltr">Cushion Hitch Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4405</td>
        <td class="s5" dir="ltr">Right Joystick: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4405</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:5856</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #3: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5856</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:3700</td>
        <td class="s5" dir="ltr">
          Loader Bucket Inclinometer Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3700</td>
        <td class="s5" dir="ltr">Loader Bucket Inclinometer Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:110</td>
        <td class="s5" dir="ltr">
          Engine Coolant Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">110</td>
        <td class="s5" dir="ltr">Engine Coolant Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:390, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">35</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:432, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Other Failure Mode</td>
        <td class="s6" dir="ltr">35</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">35</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">35</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:5874</td>
        <td class="s5" dir="ltr">
          Bluetooth Transceiver: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">34</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5874</td>
        <td class="s5" dir="ltr">Bluetooth Transceiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:272, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:39, CID:1870</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Thumb Rocker Position Sensor: Voltage Below
          Normal
        </td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1870</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Blade Control Handle Thumb Rocker Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">32</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3546</td>
        <td class="s5" dir="ltr">
          Stick Cylinder Retract Pilot Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">32</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3546</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Stick Cylinder Retract Pilot Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:5807</td>
        <td class="s5" dir="ltr">
          Communication Gateway #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">32</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5807</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:600</td>
        <td class="s5" dir="ltr">
          Hydraulic Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">32</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">600</td>
        <td class="s5" dir="ltr">Hydraulic Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:1639</td>
        <td class="s5" dir="ltr">
          Machine Security System Module: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">32</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1639</td>
        <td class="s5" dir="ltr">Machine Security System Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:33, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">32</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:3633</td>
        <td class="s5" dir="ltr">
          Swing Priority Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3633</td>
        <td class="s5" dir="ltr">Swing Priority Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:1945</td>
        <td class="s5" dir="ltr">Left GPS Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1945</td>
        <td class="s5" dir="ltr">Left GPS Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:5325</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Directional Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5325</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:36, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1609</td>
        <td class="s5" dir="ltr">
          F2 Type Valve Load Sense Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1609</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            F2 Type Valve Load Sense Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:297, CID:2742</td>
        <td class="s5" dir="ltr">
          Brake Accumulator Charging Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">29</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2742</td>
        <td class="s5" dir="ltr">Brake Accumulator Charging Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1666</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #2 Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">29</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1666</td>
        <td class="s5" dir="ltr">Variable Relief Valve #2 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3821</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Dosing Valve Actuator #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">29</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3821</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 DEF Dosing Valve Actuator #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:341, CID:3100</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank Fluid Quality Sensor: Failure
        </td>
        <td class="s6" dir="ltr">29</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3100</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Tank Reagent Quality Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:1946</td>
        <td class="s5" dir="ltr">Right GPS Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">29</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1946</td>
        <td class="s5" dir="ltr">Right GPS Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:341, CID:5856</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #3: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">29</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5856</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:30, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">29</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">Caterpillar Monitoring System</td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:351</td>
        <td class="s5" dir="ltr">
          Tilt Linkage Position Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">28</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">28</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:264, CID:1403</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 3: Current Below Normal
        </td>
        <td class="s6" dir="ltr">28</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1403</td>
        <td class="s5" dir="ltr">Transmission Solenoid 3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">28</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2532</td>
        <td class="s5" dir="ltr">
          Operator Gear Ratio Set/Recall Switch Position: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">28</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2532</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Operator Gear Ratio Set/Recall Switch Position
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:297, CID:271</td>
        <td class="s5" dir="ltr">Action Alarm: Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">271</td>
        <td class="s5" dir="ltr">Action Alarm</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:369, CID:3900</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">369</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:4404</td>
        <td class="s5" dir="ltr">Left Joystick: Failure</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4404</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:39, CID:544</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">544</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:70</td>
        <td class="s5" dir="ltr">Parking Brake Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:50952, CID:216</td>
        <td class="s5" dir="ltr">
          Machine communication not as expected:Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">216</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3657</td>
        <td class="s5" dir="ltr">
          Operator In Seat Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3657</td>
        <td class="s5" dir="ltr">Operator In Seat Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:600</td>
        <td class="s5" dir="ltr">
          Hydraulic Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">600</td>
        <td class="s5" dir="ltr">Hydraulic Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3385</td>
        <td class="s5" dir="ltr">
          EGR Intake Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3385</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust Gas Recirculation Intake Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1939</td>
        <td class="s5" dir="ltr">
          Auxiliary Hydraulic Boost Flow Supply Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1939</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Auxiliary Hydraulic Boost Flow Supply Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:392, CID:855</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor (Left Rear): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">855</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:432, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:444</td>
        <td class="s5" dir="ltr">Starter Motor Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">26</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">444</td>
        <td class="s5" dir="ltr">Starter Motor Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">25</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1525</td>
        <td class="s5" dir="ltr">
          Straight Travel Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">25</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1525</td>
        <td class="s5" dir="ltr">Straight Travel Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2500</td>
        <td class="s5" dir="ltr">
          Powertrain Speed Range Control Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">25</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2500</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Powertrain Speed Range Control position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:2448</td>
        <td class="s5" dir="ltr">
          Graphical Display Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">25</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2448</td>
        <td class="s5" dir="ltr">Graphical Display Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:34, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">24</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">34</td>
        <td class="s6" dir="ltr">Engine Control #3</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">24</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:1589</td>
        <td class="s5" dir="ltr">
          Turbocharger Inlet Air Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">24</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1589</td>
        <td class="s5" dir="ltr">Turbocharger Inlet Air Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3386</td>
        <td class="s5" dir="ltr">
          EGR Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">23</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3386</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust Gas Recirculation Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:392, CID:1227</td>
        <td class="s5" dir="ltr">Retarder Lever: Voltage Above Normal</td>
        <td class="s6" dir="ltr">23</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1227</td>
        <td class="s5" dir="ltr">Retarder Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:87, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">23</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:800</td>
        <td class="s5" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">23</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">800</td>
        <td class="s5" dir="ltr">VIMS Main Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2688</td>
        <td class="s5" dir="ltr">
          Right Drive Motor Speed Sensor #2: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">23</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2688</td>
        <td class="s5" dir="ltr">Right Drive Motor Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:4576</td>
        <td class="s5" dir="ltr">
          Bucket Angle Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">23</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:116, CID:607</td>
        <td class="s5" dir="ltr">Loss of Left Rear Speed signal</td>
        <td class="s6" dir="ltr">22</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">607</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">22</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:423, CID:5932</td>
        <td class="s5" dir="ltr">
          Tool Oil Cycle Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">22</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">423</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5932</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:113, CID:697</td>
        <td class="s5" dir="ltr">
          Priority Valve Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">22</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">697</td>
        <td class="s5" dir="ltr">Priority Valve Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">22</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:2131</td>
        <td class="s5" dir="ltr">
          5 Volt Sensor DC Power Supply #2: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">21</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2131</td>
        <td class="s5" dir="ltr">5 Volt Sensor DC Power Supply #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:171</td>
        <td class="s5" dir="ltr">
          Ambient Air Temperature Sensor:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">21</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">171</td>
        <td class="s5" dir="ltr">Ambient Air Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2417</td>
        <td class="s5" dir="ltr">
          Ether Injection Control Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">21</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2417</td>
        <td class="s5" dir="ltr">Ether Injection Control Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:305, CID:3900</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">21</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">305</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:432, CID:2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor: Failure</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:1529</td>
        <td class="s5" dir="ltr">Quick Coupler Switch: Voltage Below Normal</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1529</td>
        <td class="s5" dir="ltr">Quick Coupler Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:2524</td>
        <td class="s5" dir="ltr">Satellite Antenna: Voltage Above Normal</td>
        <td class="s6" dir="ltr">20</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2524</td>
        <td class="s5" dir="ltr">Satellite Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">20</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:3561</td>
        <td class="s5" dir="ltr">
          Drive Circuit Forward Pressure Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">20</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3561</td>
        <td class="s5" dir="ltr">Drive Circuit Forward Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2128</td>
        <td class="s5" dir="ltr">
          Right Joystick Thumbwheel Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">20</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2128</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Right Joystick Thumbwheel Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:1871</td>
        <td class="s5" dir="ltr">
          Blade Quick Drop Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">20</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1871</td>
        <td class="s5" dir="ltr">Blade Quick Drop Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:3750</td>
        <td class="s5" dir="ltr">
          Transmission Input #2 Speed Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">20</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3750</td>
        <td class="s5" dir="ltr">Transmission Input #2 Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:854</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor (Right Rear): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">854</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Right Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3724</td>
        <td class="s5" dir="ltr">
          Autonomous Control Module #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3724</td>
        <td class="s5" dir="ltr">Autonomous Control Module #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:6112</td>
        <td class="s5" dir="ltr">
          Friction Steer Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6112</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:50952, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage:Low</td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:81, CID:672</td>
        <td class="s5" dir="ltr">
          Torque Converter Output Speed Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">672</td>
        <td class="s5" dir="ltr">Torque Converter Output Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:4594</td>
        <td class="s5" dir="ltr">
          Electric Fuel Transfer Pump Outlet Pressure Sensor: Voltage Below
          Normal
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4594</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:2854</td>
        <td class="s5" dir="ltr">
          Coolant Temperature Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2854</td>
        <td class="s5" dir="ltr">Coolant Temperature Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:1850</td>
        <td class="s5" dir="ltr">
          Tandem Engine Coupling Oil Pressure Sensor:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1850</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Tandem Engine Coupling Oil Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:21, MID:263, CID:460</td>
        <td class="s5" dir="ltr">
          Fuel Pressure Sensor - After Fuel Filter: Data Drifted Low
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s5" dir="ltr">Data Drifted Low</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">460</td>
        <td class="s5" dir="ltr">Fuel Pressure Sensor ? after fuel filter</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:407, CID:70</td>
        <td class="s5" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">19</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">407</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:3387</td>
        <td class="s5" dir="ltr">
          EGR Differential Pressure Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3387</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Engine Exhaust Gas Recirculation Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:272, CID:2110</td>
        <td class="s5" dir="ltr">
          Machine Pitch Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2477</td>
        <td class="s5" dir="ltr">
          Right Joystick Left/Right Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2477</td>
        <td class="s5" dir="ltr">Right Joystick Left/Right Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:263, CID:3387</td>
        <td class="s5" dir="ltr">
          EGR Differential Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3387</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Engine Exhaust Gas Recirculation Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3791</td>
        <td class="s5" dir="ltr">
          Ground Level Shutdown Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3791</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:267</td>
        <td class="s5" dir="ltr">
          Remote Shutdown Input: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">267</td>
        <td class="s5" dir="ltr">Remote Shutdown Input</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:1962</td>
        <td class="s5" dir="ltr">
          Brake Pump Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1962</td>
        <td class="s5" dir="ltr">Brake Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:2113</td>
        <td class="s5" dir="ltr">
          Operator In Seat Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2113</td>
        <td class="s5" dir="ltr">Operator In Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:702</td>
        <td class="s5" dir="ltr">
          Transmission Gear Lever Selector Sensor (Switch): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:432, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Voltage Below Normal</td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2476</td>
        <td class="s5" dir="ltr">
          Left Joystick Left/Right Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">18</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2476</td>
        <td class="s5" dir="ltr">Left Joystick Left/Right Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:36, CID:1850</td>
        <td class="s5" dir="ltr">
          Tandem Engine Coupling Oil Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1850</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Tandem Engine Coupling Oil Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:3527</td>
        <td class="s5" dir="ltr">Direction Selector: Failure</td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3527</td>
        <td class="s5" dir="ltr">Direction Selector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:50952, CID:2344</td>
        <td class="s5" dir="ltr">
          Brake Cooling Oil Tank Level Switch:Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2344</td>
        <td class="s5" dir="ltr">Brake Cooling Oil Tank Level Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3387</td>
        <td class="s5" dir="ltr">
          EGR Differential Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3387</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Engine Exhaust Gas Recirculation Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:174</td>
        <td class="s5" dir="ltr">
          Fuel Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">174</td>
        <td class="s5" dir="ltr">Fuel Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:297, CID:672</td>
        <td class="s5" dir="ltr">
          Torque Converter Output Speed Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">672</td>
        <td class="s5" dir="ltr">Torque Converter Output Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:356</td>
        <td class="s5" dir="ltr">Dump Solenoid #1: Current Below Normal</td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">356</td>
        <td class="s5" dir="ltr">Dump Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">17</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:94</td>
        <td class="s5" dir="ltr">
          Fuel Delivery Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">94</td>
        <td class="s5" dir="ltr">Fuel Delivery Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:369, CID:145</td>
        <td class="s5" dir="ltr">
          12 Volt DC Power Supply: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">369</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">145</td>
        <td class="s5" dir="ltr">12 Volt DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:21, MID:263, CID:3385</td>
        <td class="s5" dir="ltr">
          EGR Intake Pressure Sensor: Data Drifted Low
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s5" dir="ltr">Data Drifted Low</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3385</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust Gas Recirculation Intake Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:274</td>
        <td class="s5" dir="ltr">
          Atmospheric Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">274</td>
        <td class="s5" dir="ltr">Atmospheric Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:34, CID:254</td>
        <td class="s5" dir="ltr">Electronic Control Module Error</td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">34</td>
        <td class="s6" dir="ltr">Engine Control #3</td>
        <td class="s6" dir="ltr">254</td>
        <td class="s5" dir="ltr">Electronic Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:341, CID:3105</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature Sensor:
            Voltage Below Normal
          </div>
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3105</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Outlet Gas Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:422, CID:5492</td>
        <td class="s5" dir="ltr">
          Drill Depth Encoder Signal #2: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">422</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5492</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2994</td>
        <td class="s5" dir="ltr">
          Direction Selector Position Sensor #2: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2994</td>
        <td class="s5" dir="ltr">Direction Selector Position Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:3857</td>
        <td class="s5" dir="ltr">
          Graphical Display Module #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">3857</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:272, CID:4651</td>
        <td class="s5" dir="ltr">
          Blade Inertial Measurement Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4651</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:272, CID:2262</td>
        <td class="s5" dir="ltr">
          Right Desired Grade Offset Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2262</td>
        <td class="s5" dir="ltr">Right Desired Grade Offset Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:890</td>
        <td class="s5" dir="ltr">Telemetry Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">16</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">890</td>
        <td class="s5" dir="ltr">Telemetry Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:389, CID:2110</td>
        <td class="s5" dir="ltr">
          Machine Pitch Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:464, CID:2402</td>
        <td class="s5" dir="ltr">Laser Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2402</td>
        <td class="s5" dir="ltr">Laser Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:2688</td>
        <td class="s5" dir="ltr">
          Right Drive Motor Speed Sensor #2: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2688</td>
        <td class="s5" dir="ltr">Right Drive Motor Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:297, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:49, CID:841</td>
        <td class="s5" dir="ltr">
          Right Rear Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">841</td>
        <td class="s5" dir="ltr">Right Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:362, CID:3498</td>
        <td class="s5" dir="ltr">
          Bowl Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3498</td>
        <td class="s5" dir="ltr">Bowl Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:458</td>
        <td class="s5" dir="ltr">
          Tilt Cylinder Rod End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">458</td>
        <td class="s5" dir="ltr">Tilt Cylinder Rod Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:708</td>
        <td class="s5" dir="ltr">
          Transmission Gear Actuator Down Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">708</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Actuator Down Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2420</td>
        <td class="s5" dir="ltr">
          Boom Cylinder Extend Limit Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">15</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2420</td>
        <td class="s5" dir="ltr">Boom Cylinder Extend Limit Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2452</td>
        <td class="s5" dir="ltr">
          DPF #1 Intake Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2452</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Intake Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:3700</td>
        <td class="s5" dir="ltr">
          Loader Bucket Inclinometer Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3700</td>
        <td class="s5" dir="ltr">Loader Bucket Inclinometer Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:272, CID:3423</td>
        <td class="s5" dir="ltr">Grade Control System: Special Instruction</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3423</td>
        <td class="s5" dir="ltr">Grade Control System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:2738</td>
        <td class="s5" dir="ltr">
          Turbocharger #1 Compressor Inlet Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2738</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Turbocharger #1 Compressor Inlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:116, CID:608</td>
        <td class="s5" dir="ltr">Loss of Right Rear Speed signal</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">608</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:304, CID:5994</td>
        <td class="s5" dir="ltr">
          12 Volt DC Power Supply #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5994</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:122, CID:1250</td>
        <td class="s5" dir="ltr">
          Remote Communication Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">122</td>
        <td class="s6" dir="ltr">Product Link Module</td>
        <td class="s6" dir="ltr">1250</td>
        <td class="s5" dir="ltr">Remote Communication Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:674</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Transmission Intermediate Speed Sensor #1: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">674</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Intermediate Speed Sensor #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:299, CID:2319</td>
        <td class="s5" dir="ltr">
          Left Front Drive Motor Speed Sensor #1: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2319</td>
        <td class="s5" dir="ltr">Left Front Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:1192</td>
        <td class="s5" dir="ltr">
          Main Implement Valve: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1192</td>
        <td class="s5" dir="ltr">Main Implement Valve</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:49, CID:841</td>
        <td class="s5" dir="ltr">
          Right Rear Strut Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">14</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">841</td>
        <td class="s5" dir="ltr">Right Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:87, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:490</td>
        <td class="s5" dir="ltr">
          Implement Lockout Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">490</td>
        <td class="s5" dir="ltr">Implement Lockout Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2475</td>
        <td class="s5" dir="ltr">
          Right Joystick Forward/Reverse Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2475</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Right Joystick Forward/Reverse Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:3183</td>
        <td class="s5" dir="ltr">
          DPF Regeneration Force Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3183</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Diesel Particulate Filter Regeneration Force Switch
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:263, CID:2458</td>
        <td class="s5" dir="ltr">
          DPF #1 Differential Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2458</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:362, CID:3496</td>
        <td class="s5" dir="ltr">
          Ejector Cylinder Rod End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3496</td>
        <td class="s5" dir="ltr">Ejector Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2474</td>
        <td class="s5" dir="ltr">
          Left Joystick Forward/Reverse Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2474</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Left Joystick Forward/Reverse Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:434, CID:4059</td>
        <td class="s5" dir="ltr">
          Screed Heating Zone #4 Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4059</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Screed Heating Zone #4 Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1657</td>
        <td class="s5" dir="ltr">
          Left Joystick Thumbwheel: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1657</td>
        <td class="s5" dir="ltr">Left Joystick Thumbwheel</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:272, CID:2261</td>
        <td class="s5" dir="ltr">
          Left Desired Grade Offset Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2261</td>
        <td class="s5" dir="ltr">Left Desired Grade Offset Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:2739</td>
        <td class="s5" dir="ltr">
          Turbocharger #2 Compressor Inlet Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2739</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Turbocharger #2 Compressor Inlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2740</td>
        <td class="s5" dir="ltr">
          Turbocharger #3 Compressor Inlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2740</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Turbocharger #3 Compressor Inlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:389, CID:1893</td>
        <td class="s5" dir="ltr">
          Inertial Measurement Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1893</td>
        <td class="s5" dir="ltr">Inertial Measurement Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:263, CID:3464</td>
        <td class="s5" dir="ltr">
          DPF #1 Intake Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3464</td>
        <td class="s5" dir="ltr">DPF #1 Intake Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1160</td>
        <td class="s5" dir="ltr">
          Hydraulic Lock Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1160</td>
        <td class="s5" dir="ltr">Hydraulic Lock Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:1076</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Bypass Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1076</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Bypass Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:1227</td>
        <td class="s5" dir="ltr">Retarder Lever: Voltage Above Normal</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">1227</td>
        <td class="s5" dir="ltr">Retarder Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1190</td>
        <td class="s5" dir="ltr">
          Armrest/Seat Switches: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1190</td>
        <td class="s5" dir="ltr">Armrest/Seat Switches</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:4465</td>
        <td class="s5" dir="ltr">
          Right Screed Remote Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4465</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:389, CID:833</td>
        <td class="s5" dir="ltr">
          Rear Brake Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">833</td>
        <td class="s5" dir="ltr">Rear Brake Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:4550</td>
        <td class="s5" dir="ltr">
          Electric Fuel Transfer Pump Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4550</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:113, CID:622</td>
        <td class="s5" dir="ltr">
          Upshift Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">622</td>
        <td class="s5" dir="ltr">Upshift Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:297, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:1893</td>
        <td class="s5" dir="ltr">
          Inertial Measurement Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1893</td>
        <td class="s5" dir="ltr">Inertial Measurement Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2204</td>
        <td class="s5" dir="ltr">
          Auxiliary Lever #1 Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2204</td>
        <td class="s5" dir="ltr">Auxiliary Lever #1 Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2131</td>
        <td class="s5" dir="ltr">
          5 Volt Sensor DC Power Supply #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2131</td>
        <td class="s5" dir="ltr">5 Volt Sensor DC Power Supply #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:3035</td>
        <td class="s5" dir="ltr">Battery Cable Shield: Voltage Above Normal</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3035</td>
        <td class="s5" dir="ltr">Battery Cable Shield</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:34, CID:6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector: Current Above Normal</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">34</td>
        <td class="s6" dir="ltr">Engine Control #3</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2266</td>
        <td class="s5" dir="ltr">
          Hydraulic Pump #2 Outlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2266</td>
        <td class="s5" dir="ltr">Hydraulic Pump #2 Outlet Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:4552</td>
        <td class="s5" dir="ltr">
          Air Filter Differential Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4552</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1079</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Tilt Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1079</td>
        <td class="s5" dir="ltr">Blade Control Handle Tilt Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:2602</td>
        <td class="s5" dir="ltr">
          Cylinder #1 Injector Actuator #2: Current Above Normal
        </td>
        <td class="s6" dir="ltr">12</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2602</td>
        <td class="s5" dir="ltr">Cylinder #1 Injector Actuator #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:36, CID:261</td>
        <td class="s5" dir="ltr">Engine Timing Offset fault</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">261</td>
        <td class="s5" dir="ltr">Engine Timing Calibration</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:263, CID:3096</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 DEF Temperature #1 Sensor: Abnormal Frequency,
            Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3096</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Dosing Reagent Temperature #1 Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1598</td>
        <td class="s5" dir="ltr">
          Attachment Valve #3 Retract Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1598</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #3 Retract Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:51062, CID:450</td>
        <td class="s5" dir="ltr">
          Communication Module Link Fault:Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">51062</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">450</td>
        <td class="s5" dir="ltr">Operator Tong Open/Close Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:82, CID:351</td>
        <td class="s5" dir="ltr">
          Loss of Tilt Linkage Position Sensor signal
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:5885</td>
        <td class="s5" dir="ltr">
          Blade Lift Arm Inertial Measurement Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5885</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:600</td>
        <td class="s5" dir="ltr">
          Hydraulic Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">600</td>
        <td class="s5" dir="ltr">Hydraulic Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:74, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">74</td>
        <td class="s6" dir="ltr">Payload Control System</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:297, CID:605</td>
        <td class="s5" dir="ltr">Loss of Left Front Speed signal</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">605</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1977</td>
        <td class="s5" dir="ltr">
          Right Travel Backward Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1977</td>
        <td class="s5" dir="ltr">Right Travel Backward Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:54, CID:248</td>
        <td class="s5" dir="ltr">Invalid @CatDatalinkLong@ data</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">54</td>
        <td class="s6" dir="ltr">Caterpillar Monitoring System #2</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:263, CID:342</td>
        <td class="s5" dir="ltr">
          Secondary Engine Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">342</td>
        <td class="s5" dir="ltr">Secondary Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:50952, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage:Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:34, CID:8</td>
        <td class="s5" dir="ltr">Cylinder #8 Injector: Current Above Normal</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">34</td>
        <td class="s6" dir="ltr">Engine Control #3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Cylinder #8 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:392, CID:607</td>
        <td class="s5" dir="ltr">Loss of Left Rear Speed signal</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">607</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:389, CID:672</td>
        <td class="s5" dir="ltr">
          Torque Converter Output Speed Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">672</td>
        <td class="s5" dir="ltr">Torque Converter Output Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:19, MID:263, CID:2349</td>
        <td class="s5" dir="ltr">
          Engine Coolant Pump Outlet Temperature Sensor: Data Error
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">19</td>
        <td class="s5" dir="ltr">Data Error</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2349</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Coolant Pump Outlet Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:27, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage: Low</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:389, CID:1407</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 7: Current Above Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1407</td>
        <td class="s5" dir="ltr">Transmission Solenoid 7</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2741</td>
        <td class="s5" dir="ltr">
          Turbocharger #4 Compressor Inlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2741</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Turbocharger #4 Compressor Inlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1628</td>
        <td class="s5" dir="ltr">
          Armrest Position Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1628</td>
        <td class="s5" dir="ltr">Armrest Position Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:2815</td>
        <td class="s5" dir="ltr">
          Quick Coupler Disengage Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2815</td>
        <td class="s5" dir="ltr">Quick Coupler Disengage Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:732</td>
        <td class="s5" dir="ltr">Fine Swing Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">732</td>
        <td class="s5" dir="ltr">Fine swing solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3999</td>
        <td class="s5" dir="ltr">
          Right Joystick Trigger Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3999</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:36, CID:91</td>
        <td class="s5" dir="ltr">
          Throttle Position Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">91</td>
        <td class="s5" dir="ltr">Throttle Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1079</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Tilt Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1079</td>
        <td class="s5" dir="ltr">Blade Control Handle Tilt Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:81, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1078</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Lift Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1078</td>
        <td class="s5" dir="ltr">Blade Control Handle Lift Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3</td>
        <td class="s5" dir="ltr">Cylinder #3 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Cylinder #3 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1595</td>
        <td class="s5" dir="ltr">
          Attachment Valve #3 Extend Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1595</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #3 Extend Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3182</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Fuel Injector #1 Heater: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3182</td>
        <td class="s5" dir="ltr">Aftertreatment #1 Fuel Injector #1 Heater</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:3574</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Pump #2 Negative Flow Control Pressure Reducer Pressure Sensor:
            Voltage Below Normal
          </div>
        </td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3574</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Pump #2 Negative Flow Control Pressure Reducer Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:2247</td>
        <td class="s5" dir="ltr">
          Fuel Transfer Pump Intake Pressure Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2247</td>
        <td class="s5" dir="ltr">Fuel Transfer Pump Inlet Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:1797</td>
        <td class="s5" dir="ltr">
          Fuel Rail Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1797</td>
        <td class="s5" dir="ltr">Fuel Rail Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:3035</td>
        <td class="s5" dir="ltr">Battery Cable Shield: Voltage Below Normal</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3035</td>
        <td class="s5" dir="ltr">Battery Cable Shield</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:116, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:70</td>
        <td class="s5" dir="ltr">Parking Brake Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:432, CID:2425</td>
        <td class="s5" dir="ltr">Boom Angle Sensor: Special Instruction</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2425</td>
        <td class="s5" dir="ltr">Boom &lt;Raise/Lower&gt; Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2664</td>
        <td class="s5" dir="ltr">
          Boom Float Up Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2664</td>
        <td class="s5" dir="ltr">Boom Float Up Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:2113</td>
        <td class="s5" dir="ltr">
          Operator In Seat Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2113</td>
        <td class="s5" dir="ltr">Operator In Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:3745</td>
        <td class="s5" dir="ltr">
          Left Rear Tire Pressure/Temperature Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3745</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Left Rear Tire Pressure/Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:27, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:3791</td>
        <td class="s5" dir="ltr">
          Ground Level Shutdown Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3791</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:4364</td>
        <td class="s5" dir="ltr">
          Rear Wiper Control Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4364</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:33, CID:254</td>
        <td class="s5" dir="ltr">Electronic Control Module Error</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">254</td>
        <td class="s5" dir="ltr">Electronic Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:116, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:341, CID:3182</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Fuel Injector #1 Heater: Current Above Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3182</td>
        <td class="s5" dir="ltr">Aftertreatment #1 Fuel Injector #1 Heater</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:2</td>
        <td class="s5" dir="ltr">
          Cylinder #2 Injector: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Cylinder #2 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:49, CID:839</td>
        <td class="s5" dir="ltr">
          Right Front Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">839</td>
        <td class="s5" dir="ltr">Right Front Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:389, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:408, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">408</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2113</td>
        <td class="s5" dir="ltr">
          Operator In Seat Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2113</td>
        <td class="s5" dir="ltr">Operator In Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:4464</td>
        <td class="s5" dir="ltr">
          Left Screed Remote Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4464</td>
        <td class="s5" dir="ltr">LeftScreed Remote Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:53, CID:271</td>
        <td class="s5" dir="ltr">Action Alarm: Voltage Above Normal</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">271</td>
        <td class="s5" dir="ltr">Action Alarm</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:49, CID:838</td>
        <td class="s5" dir="ltr">
          Left Front Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">838</td>
        <td class="s5" dir="ltr">Left Front Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Output Oil Temperature Sensor:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:3546</td>
        <td class="s5" dir="ltr">
          Stick Cylinder Retract Pilot Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3546</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Stick Cylinder Retract Pilot Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:87, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:369, CID:3317</td>
        <td class="s5" dir="ltr">
          Medium Range Object Detection Sensor #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">369</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3317</td>
        <td class="s5" dir="ltr">Medium Object Detection Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:53, CID:820</td>
        <td class="s5" dir="ltr">Loss of Keypad Data Link Signal</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">820</td>
        <td class="s5" dir="ltr">Keypad Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:4025</td>
        <td class="s5" dir="ltr">
          Hydraulic Lockout Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4025</td>
        <td class="s5" dir="ltr">Hydraulic Lockout Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply: Voltage Below Normal</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:81, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2465</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Ignition Transformer Primary: Current Below Normal
        </td>
        <td class="s6" dir="ltr">9</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2465</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Ignition Transformer Primary
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:49, CID:840</td>
        <td class="s5" dir="ltr">
          Left Rear Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">840</td>
        <td class="s5" dir="ltr">Left Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:362, CID:3496</td>
        <td class="s5" dir="ltr">
          Ejector Cylinder Rod End Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3496</td>
        <td class="s5" dir="ltr">Ejector Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:582</td>
        <td class="s5" dir="ltr">
          Air Filter Differential Pressure Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">582</td>
        <td class="s5" dir="ltr">Air Filter Differential Pressure Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:432, CID:2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor: Special Instruction</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:161, CID:1250</td>
        <td class="s5" dir="ltr">
          Remote Communication Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">161</td>
        <td class="s6" dir="ltr">Communication Gateway #1</td>
        <td class="s6" dir="ltr">1250</td>
        <td class="s5" dir="ltr">Remote Communication Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:50952, CID:216</td>
        <td class="s5" dir="ltr">
          Machine communication not as expected:Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">216</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:1628</td>
        <td class="s5" dir="ltr">
          Armrest Position Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1628</td>
        <td class="s5" dir="ltr">Armrest Position Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:389, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2687</td>
        <td class="s5" dir="ltr">
          Right Drive Motor Speed Sensor #1: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2687</td>
        <td class="s5" dir="ltr">Right Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:2</td>
        <td class="s5" dir="ltr">
          Cylinder #2 Injector: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Cylinder #2 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:1421</td>
        <td class="s5" dir="ltr">
          (Slave) Rear Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1421</td>
        <td class="s5" dir="ltr">(Slave) Rear Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:432, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Special Instruction</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:800</td>
        <td class="s5" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">800</td>
        <td class="s5" dir="ltr">VIMS Main Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:3820</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Controller #1: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3820</td>
        <td class="s5" dir="ltr">Aftertreatment #1 DEF Controller #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1078</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Lift Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1078</td>
        <td class="s5" dir="ltr">Blade Control Handle Lift Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:272, CID:1834</td>
        <td class="s5" dir="ltr">Ignition Key Switch loss of signal</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1834</td>
        <td class="s5" dir="ltr">Ignition Key Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:297, CID:608</td>
        <td class="s5" dir="ltr">Loss of Right Rear Speed signal</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">608</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2993</td>
        <td class="s5" dir="ltr">
          Direction Selector Position Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">8</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2993</td>
        <td class="s5" dir="ltr">Direction Selector Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:390, CID:1402</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1402</td>
        <td class="s5" dir="ltr">Transmission Solenoid 2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:81, CID:670</td>
        <td class="s5" dir="ltr">
          Torque Converter Pedal Position below normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">670</td>
        <td class="s5" dir="ltr">Left Pedal Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:87, CID:2177</td>
        <td class="s5" dir="ltr">
          Primary Steering Disable Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">2177</td>
        <td class="s5" dir="ltr">Primary Steering Disable Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:364, CID:6346</td>
        <td class="s5" dir="ltr">
          Object Detection Rear Camera: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">364</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6346</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:430</td>
        <td class="s5" dir="ltr">
          Steering Pilot Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">430</td>
        <td class="s5" dir="ltr">Steering Pilot Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:1966</td>
        <td class="s5" dir="ltr">
          Hydraulic System CAN Data Link #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1966</td>
        <td class="s5" dir="ltr">Hydraulic System CAN Data Link #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3956</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 Diesel Oxidation Catalyst Intake Gas Temperature
            Sensor: Voltage Above Normal
          </div>
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3956</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:116, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2415</td>
        <td class="s5" dir="ltr">
          Implement Left Main Valve Supply Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2415</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Implement Left Main Valve Supply Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:297, CID:70</td>
        <td class="s5" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:304, CID:3317</td>
        <td class="s5" dir="ltr">
          Medium Range Object Detection Sensor #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3317</td>
        <td class="s5" dir="ltr">Medium Object Detection Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:422, CID:6411</td>
        <td class="s5" dir="ltr">
          Rotary Head Proximity Detection Switch #2: Special Instruction
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">422</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6411</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:100</td>
        <td class="s5" dir="ltr">
          Engine Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">100</td>
        <td class="s5" dir="ltr">Engine Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:389, CID:833</td>
        <td class="s5" dir="ltr">
          Rear Brake Oil Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">833</td>
        <td class="s5" dir="ltr">Rear Brake Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:2531</td>
        <td class="s5" dir="ltr">
          Hoe Right Joystick Thumbwheel Position Sensor: Erratic, Intermittent,
          or Incorrect
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2531</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hoe Right Joystick Thumbwheel Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:50952, CID:6</td>
        <td class="s5" dir="ltr">Injector Cylinder #6:Current Above Normal</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:586</td>
        <td class="s5" dir="ltr">
          Engine Speed Dial Switch: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">586</td>
        <td class="s5" dir="ltr">Engine Speed Dial Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:116, CID:269</td>
        <td class="s5" dir="ltr">Sensor Power Supply: Low</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">269</td>
        <td class="s5" dir="ltr">Sensor Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:171</td>
        <td class="s5" dir="ltr">
          Ambient Air Temperature Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">171</td>
        <td class="s5" dir="ltr">Ambient Air Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2497</td>
        <td class="s5" dir="ltr">
          ARD Fuel Pressure #2 Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2497</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Purge Air Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:362, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:429</td>
        <td class="s5" dir="ltr">
          Steering Pump Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">429</td>
        <td class="s5" dir="ltr">Steering Pump Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:116, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2416</td>
        <td class="s5" dir="ltr">
          Implement Right Main Valve Supply Pressure Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2416</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Implement Right Main Valve Supply Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:2855</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #1 Solenoid: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2855</td>
        <td class="s5" dir="ltr">Main Hydraulic Pump #1 Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:769</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Rod End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">769</td>
        <td class="s5" dir="ltr">Lift Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:299, CID:374</td>
        <td class="s5" dir="ltr">Swing Brake Solenoid: Other Failure Mode</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">374</td>
        <td class="s5" dir="ltr">Swing Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:4386</td>
        <td class="s5" dir="ltr">
          Auxiliary Lever #8 Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">4386</td>
        <td class="s5" dir="ltr">Auxiliary Lever #8 Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:769</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Rod End Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">769</td>
        <td class="s5" dir="ltr">Lift Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:890</td>
        <td class="s5" dir="ltr">Telemetry Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">890</td>
        <td class="s5" dir="ltr">Telemetry Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:2448</td>
        <td class="s5" dir="ltr">
          Graphical Display Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2448</td>
        <td class="s5" dir="ltr">Graphical Display Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3545</td>
        <td class="s5" dir="ltr">
          Stick Cylinder Extend Pilot Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3545</td>
        <td class="s5" dir="ltr">
          Stick Cylinder Extend Pilot Pressure Sensor
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:50952, CID:8</td>
        <td class="s5" dir="ltr">Injector Cylinder #8:Current Above Normal</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Cylinder #8 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:702</td>
        <td class="s5" dir="ltr">
          Transmission Gear Lever Selector Sensor (Switch): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3110</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Line Heater #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3110</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Line Heater #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:1869</td>
        <td class="s5" dir="ltr">
          Speed And Direction Lever Position Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1869</td>
        <td class="s5" dir="ltr">Speed and Direction Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:5328</td>
        <td class="s5" dir="ltr">Jog Dial Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5328</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:490</td>
        <td class="s5" dir="ltr">
          Implement Lockout Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">490</td>
        <td class="s5" dir="ltr">Implement Lockout Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:4651</td>
        <td class="s5" dir="ltr">Blade Inertial Measurement Sensor: Failure</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4651</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:362, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:2526</td>
        <td class="s5" dir="ltr">
          Air Inlet Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2526</td>
        <td class="s5" dir="ltr">Air Inlet Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:434</td>
        <td class="s5" dir="ltr">
          Hydraulic Pilot Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s5" dir="ltr">Hydraulic Pilot Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:2856</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #2 Solenoid: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2856</td>
        <td class="s5" dir="ltr">Main Hydraulic Pump #2 Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:364</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Head End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">364</td>
        <td class="s5" dir="ltr">Lift Cylinder Head Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:362, CID:3498</td>
        <td class="s5" dir="ltr">
          Bowl Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3498</td>
        <td class="s5" dir="ltr">Bowl Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:81, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1471</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1471</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:27, CID:269</td>
        <td class="s5" dir="ltr">Sensor Power Supply: Low</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">269</td>
        <td class="s5" dir="ltr">Sensor Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:36, CID:290</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Pump Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">7</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">290</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:116, CID:855</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor (Left Rear): Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">855</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1968</td>
        <td class="s5" dir="ltr">
          Boom Cylinder Rod End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1968</td>
        <td class="s5" dir="ltr">Boom Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:113, CID:70</td>
        <td class="s5" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:432, CID:262</td>
        <td class="s5" dir="ltr">
          5 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">262</td>
        <td class="s5" dir="ltr">5 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:1491</td>
        <td class="s5" dir="ltr">
          Right Turbo Turbine Inlet Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1491</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Right Turbo Turbine Inlet Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:5</td>
        <td class="s5" dir="ltr">Cylinder #5 Injector: Current Above Normal</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Cylinder #5 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Below Normal</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:116, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:486, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">486</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:422, CID:5491</td>
        <td class="s5" dir="ltr">
          Drill Depth Encoder Signal #1: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">422</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5491</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:81, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:81, CID:622</td>
        <td class="s5" dir="ltr">Upshift Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">622</td>
        <td class="s5" dir="ltr">Upshift Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:81, CID:626</td>
        <td class="s5" dir="ltr">
          Steering/Transmission Lock Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">626</td>
        <td class="s5" dir="ltr">Steering/Transmission Lock Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:389, CID:833</td>
        <td class="s5" dir="ltr">
          Rear Brake Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">833</td>
        <td class="s5" dir="ltr">Rear Brake Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:263, CID:3619</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Outlet #1 NOx Level Sensor Power Supply: Other
          Failure Mode
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3619</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Outlet #1 NOx Level Sensor Power Supply
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:3130</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank #1 Level Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3130</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Tank #1 Level Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:358</td>
        <td class="s5" dir="ltr">
          Implement Pilot Pressure Supply Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">358</td>
        <td class="s5" dir="ltr">Implement Pilot Pressure Supply Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:27, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:263, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Special Instruction</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:855</td>
        <td class="s5" dir="ltr">
          Left Rear Brake Oil Temperature Sensor:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">855</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:262</td>
        <td class="s5" dir="ltr">
          5 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">262</td>
        <td class="s5" dir="ltr">5 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:4350</td>
        <td class="s5" dir="ltr">
          Screed Heating Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4350</td>
        <td class="s5" dir="ltr">Screed Heating Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:263, CID:3862</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Return Valve Solenoid: Special Instruction
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3862</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 DEF Return Valve Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1427</td>
        <td class="s5" dir="ltr">Machine Lockout Lamp: Current Below Normal</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1427</td>
        <td class="s5" dir="ltr">Machine Lockout Lamp</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2685</td>
        <td class="s5" dir="ltr">
          Left Drive Motor Speed Sensor #1: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2685</td>
        <td class="s5" dir="ltr">Left Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:81, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:855</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor (Left Rear): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">855</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:820</td>
        <td class="s5" dir="ltr">Keypad Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">820</td>
        <td class="s5" dir="ltr">Keypad Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:1470</td>
        <td class="s5" dir="ltr">
          Steering Motor Speed Sensor #2: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1470</td>
        <td class="s5" dir="ltr">Steering Motor Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1006</td>
        <td class="s5" dir="ltr">
          Steering Wheel Stowed Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1006</td>
        <td class="s5" dir="ltr">Steering Wheel Stowed Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3031</td>
        <td class="s5" dir="ltr">
          Intake Manifold #2 Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3031</td>
        <td class="s5" dir="ltr">Intake Manifold #2 Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1593</td>
        <td class="s5" dir="ltr">
          Attachment Valve #1 Extend Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1593</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #1 Extend Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:290</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Pump Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">290</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:81, CID:1427</td>
        <td class="s5" dir="ltr">Machine Lockout Lamp: Voltage Above Normal</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">1427</td>
        <td class="s5" dir="ltr">Machine Lockout Lamp</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4350</td>
        <td class="s5" dir="ltr">
          Screed Heating Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4350</td>
        <td class="s5" dir="ltr">Screed Heating Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:486, CID:3743</td>
        <td class="s5" dir="ltr">
          Engine Aftertreatment Control #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">486</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3743</td>
        <td class="s5" dir="ltr">Engine Aftertreatment Control #2 r</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:27, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:36, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1403</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 3: Current Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1403</td>
        <td class="s5" dir="ltr">Transmission Solenoid 3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:5445</td>
        <td class="s5" dir="ltr">
          Brake Accumulator #3 Gas Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5445</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:5551</td>
        <td class="s5" dir="ltr">
          Loader Quick Coupler Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5551</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:350</td>
        <td class="s5" dir="ltr">
          Lift Linkage Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">350</td>
        <td class="s5" dir="ltr">Lift Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:87, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:110</td>
        <td class="s5" dir="ltr">
          Engine Coolant Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">110</td>
        <td class="s5" dir="ltr">Engine Coolant Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:51062, CID:216</td>
        <td class="s5" dir="ltr">
          Machine communication not as expected:Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">51062</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">216</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3112</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Line Heater #3: Current Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3112</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Line Heater #3
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:390, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:3467</td>
        <td class="s5" dir="ltr">Main Power Relay: Current Above Normal</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3467</td>
        <td class="s5" dir="ltr">Main Power Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:432, CID:2127</td>
        <td class="s5" dir="ltr">
          Left Joystick Thumbwheel Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2127</td>
        <td class="s5" dir="ltr">Left Joystick Thumbwheel Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:263, CID:3548</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment Cooling Fan Control Module: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3548</td>
        <td class="s5" dir="ltr">Aftertreatment Cooling Fan Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:486, CID:1421</td>
        <td class="s5" dir="ltr">
          (Slave) Rear Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">486</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1421</td>
        <td class="s5" dir="ltr">(Slave) Rear Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:81, CID:427</td>
        <td class="s5" dir="ltr">
          Front Axle Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">427</td>
        <td class="s5" dir="ltr">Front Axle Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:840</td>
        <td class="s5" dir="ltr">
          Left Rear Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">840</td>
        <td class="s5" dir="ltr">Left Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:464, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:390, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:75</td>
        <td class="s5" dir="ltr">
          Steering Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s5" dir="ltr">Steering Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:264, CID:2705</td>
        <td class="s5" dir="ltr">Cab Throttle Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2705</td>
        <td class="s5" dir="ltr">Cab Throttle Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:341, CID:3609</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Outlet #1 NOx Level Sensor: Failure
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3609</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Outlet #1 NOx Level Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:4255</td>
        <td class="s5" dir="ltr">
          Telemetry Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4255</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3783</td>
        <td class="s5" dir="ltr">
          Boom Valve #2 Cylinder Extend Limit Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3783</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Boom Valve #2 Cylinder Extend Limit Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:597</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Main Hydraulic Pump Discharge Pressure Sensor: Abnormal Frequency,
            Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">597</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump Discharge Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:588</td>
        <td class="s5" dir="ltr">
          Monitor System Display: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">588</td>
        <td class="s5" dir="ltr">Monitoring System Display</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:3821</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Dosing Valve Actuator #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3821</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 DEF Dosing Valve Actuator #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:1835</td>
        <td class="s5" dir="ltr">Auxiliary Pressure Sensor: Failure</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1835</td>
        <td class="s5" dir="ltr">Auxiliary Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:3657</td>
        <td class="s5" dir="ltr">
          Operator In Seat Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">3657</td>
        <td class="s5" dir="ltr">Operator In Seat Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:841</td>
        <td class="s5" dir="ltr">
          Right Rear Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">841</td>
        <td class="s5" dir="ltr">Right Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:362, CID:3496</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Ejector Cylinder Rod End Pressure Sensor: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3496</td>
        <td class="s5" dir="ltr">Ejector Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:390, CID:457</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">457</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1401</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1401</td>
        <td class="s5" dir="ltr">Transmission Solenoid 1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:39, CID:153</td>
        <td class="s5" dir="ltr">
          Right Drive Motor Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">153</td>
        <td class="s5" dir="ltr">Right Drive Motor Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3002</td>
        <td class="s5" dir="ltr">
          Engine Exhaust NOx Level Sensor: Current Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3002</td>
        <td class="s5" dir="ltr">Engine Exhaust NOx Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:144</td>
        <td class="s5" dir="ltr">Backup Alarm Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">144</td>
        <td class="s5" dir="ltr">Backup Alarm Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:1956</td>
        <td class="s5" dir="ltr">
          Bucket Cylinder Position Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1956</td>
        <td class="s5" dir="ltr">Bucket Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:290</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Pump Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">290</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:113, CID:1482</td>
        <td class="s5" dir="ltr">
          10 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">1482</td>
        <td class="s5" dir="ltr">10 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3926</td>
        <td class="s5" dir="ltr">
          Loader Joystick Thumbwheel Position Signal #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3926</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Loader Joystick Thumbwheel Position Signal #2
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:1796</td>
        <td class="s5" dir="ltr">
          Intake Manifold #2 Air Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1796</td>
        <td class="s5" dir="ltr">Intake Manifold #2 Air Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:389, CID:70</td>
        <td class="s5" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3105</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature Sensor:
            Voltage Above Normal
          </div>
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3105</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Outlet Gas Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector: Current Above Normal</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:263, CID:3609</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Outlet #1 NOx Level Sensor: Failure
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3609</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Outlet #1 NOx Level Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:3685</td>
        <td class="s5" dir="ltr">
          Tilt Bucket Angle Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3685</td>
        <td class="s5" dir="ltr">Tilt Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:263, CID:3002</td>
        <td class="s5" dir="ltr">Engine Exhaust NOx Level Sensor: Failure</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3002</td>
        <td class="s5" dir="ltr">Engine Exhaust NOx Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:432, CID:5237</td>
        <td class="s5" dir="ltr">
          Left Joystick Thumbwheel #1 Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5237</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:341, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:838</td>
        <td class="s5" dir="ltr">
          Left Front Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">838</td>
        <td class="s5" dir="ltr">Left Front Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:82, CID:75</td>
        <td class="s5" dir="ltr">
          Steering Oil Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s5" dir="ltr">Steering Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:82, CID:430</td>
        <td class="s5" dir="ltr">
          Steering Pilot Oil Pressure Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">430</td>
        <td class="s5" dir="ltr">Steering Pilot Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:432, CID:4576</td>
        <td class="s5" dir="ltr">
          Bucket Angle Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:4387</td>
        <td class="s5" dir="ltr">
          Auxiliary Lever #9 Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">4387</td>
        <td class="s5" dir="ltr">Auxiliarty Lever #9 Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:1392</td>
        <td class="s5" dir="ltr">
          Theft Deterrent Output Driver #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1392</td>
        <td class="s5" dir="ltr">Theft Deterrent Output Driver #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:267</td>
        <td class="s5" dir="ltr">
          Remote Shutdown Input: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">267</td>
        <td class="s5" dir="ltr">Remote Shutdown Input</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:163</td>
        <td class="s5" dir="ltr">
          Steering Angle Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">163</td>
        <td class="s5" dir="ltr">Steering Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:392, CID:608</td>
        <td class="s5" dir="ltr">Loss of Right Rear Speed signal</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">608</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:81, CID:2448</td>
        <td class="s5" dir="ltr">
          Graphical Display Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">2448</td>
        <td class="s5" dir="ltr">Graphical Display Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:402, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Special Instruction
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:36, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:75</td>
        <td class="s5" dir="ltr">
          Steering Oil Temperature Sensor:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">75</td>
        <td class="s5" dir="ltr">Steering Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:341, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:6103</td>
        <td class="s5" dir="ltr">
          Right Swing Motor Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">5</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6103</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1658</td>
        <td class="s5" dir="ltr">
          Right Joystick Thumbwheel: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1658</td>
        <td class="s5" dir="ltr">Right Joystick Thumbwheel</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:263, CID:3138</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Outlet NH3 Sensor: Failure
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3138</td>
        <td class="s5" dir="ltr">Aftertreatment #1 Outlet NH3 Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:1421</td>
        <td class="s5" dir="ltr">
          (Slave) Rear Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1421</td>
        <td class="s5" dir="ltr">(Slave) Rear Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:390, CID:4077</td>
        <td class="s5" dir="ltr">
          Auto Lube Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4077</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1665</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #1 Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1665</td>
        <td class="s5" dir="ltr">Variable Relief Valve #1 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:4441</td>
        <td class="s5" dir="ltr">
          Right Rear Wheel Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4441</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2661</td>
        <td class="s5" dir="ltr">
          Cab Air Temperature Control: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2661</td>
        <td class="s5" dir="ltr">Cab Air Temperature Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:87, CID:724</td>
        <td class="s5" dir="ltr">Hoist Raise Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">724</td>
        <td class="s5" dir="ltr">Hoist Raise Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:82, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1403</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 3: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1403</td>
        <td class="s5" dir="ltr">Transmission Solenoid 3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:82, CID:290</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Engine Cooling Fan Pump Pressure Sensor: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">290</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:36, CID:342</td>
        <td class="s5" dir="ltr">
          Secondary Engine Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">342</td>
        <td class="s5" dir="ltr">Secondary Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:297, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:3783</td>
        <td class="s5" dir="ltr">
          Boom Valve #2 Cylinder Extend Limit Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3783</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Boom Valve #2 Cylinder Extend Limit Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2244</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #2 Port A Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2244</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #2 Port A Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:2300</td>
        <td class="s5" dir="ltr">Switch Panel: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2300</td>
        <td class="s5" dir="ltr">Switch Panel</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:2199</td>
        <td class="s5" dir="ltr">
          Secondary Steering Request Signal Line: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2199</td>
        <td class="s5" dir="ltr">Secondary Steering Request Signal Line</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:27, CID:1840</td>
        <td class="s5" dir="ltr">
          Tractor Parking Brake Pressure Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1840</td>
        <td class="s5" dir="ltr">Tractor Parking Brake Pressure Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1678</td>
        <td class="s5" dir="ltr">Solenoid Return #5: Voltage Below Normal</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1678</td>
        <td class="s5" dir="ltr">Solenoid Return #5</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:272, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2114</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Trigger Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2114</td>
        <td class="s5" dir="ltr">Blade Control Handle Trigger Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:1945</td>
        <td class="s5" dir="ltr">Left GPS Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1945</td>
        <td class="s5" dir="ltr">Left GPS Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:116, CID:544</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">544</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:2899</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #1 Displacement Sensor: Failure
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2899</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump #1 Displacement Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:87, CID:1962</td>
        <td class="s5" dir="ltr">
          Brake Pump Pressure Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1962</td>
        <td class="s5" dir="ltr">Brake Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:87, CID:725</td>
        <td class="s5" dir="ltr">Hoist Lower Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">725</td>
        <td class="s5" dir="ltr">Hoist Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:82, CID:429</td>
        <td class="s5" dir="ltr">
          Steering Pump Oil Pressure Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">429</td>
        <td class="s5" dir="ltr">Steering Pump Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2237</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #1 Port B Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2237</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #1 Port B Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:331, CID:2322</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Right Front Drive Motor Speed Sensor #2: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">331</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2322</td>
        <td class="s5" dir="ltr">Right Front Drive Motor Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2242</td>
        <td class="s5" dir="ltr">
          Loader Auxiliary Valve Port A Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2242</td>
        <td class="s5" dir="ltr">Loader Auxiliary Valve Port A Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:5</td>
        <td class="s5" dir="ltr">Cylinder #5 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Cylinder #5 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2243</td>
        <td class="s5" dir="ltr">
          Loader Auxiliary Valve Port B Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2243</td>
        <td class="s5" dir="ltr">Loader Auxiliary Valve Port B Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:880</td>
        <td class="s5" dir="ltr">
          Ripper Raise/Lower Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">880</td>
        <td class="s5" dir="ltr">Ripper Raise/Lower Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:402, CID:1089</td>
        <td class="s5" dir="ltr">
          VIMS Analysis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1089</td>
        <td class="s5" dir="ltr">VIMS Analysis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:87, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:27, CID:702</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch): Abnormal
            Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:4442</td>
        <td class="s5" dir="ltr">
          Left Rear Wheel Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4442</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2245</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #2 Port B Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2245</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #2 Port B Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1007</td>
        <td class="s5" dir="ltr">
          Joystick Mapping Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1007</td>
        <td class="s5" dir="ltr">Joystick Mapping Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:33, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:264, CID:3737</td>
        <td class="s5" dir="ltr">
          Transmission Main Relief Valve Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3737</td>
        <td class="s5" dir="ltr">Transmission Main Relief Valve Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:3100</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank Fluid Quality Sensor: Erratic,
          Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3100</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Tank Reagent Quality Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:299, CID:2687</td>
        <td class="s5" dir="ltr">
          Right Drive Motor Speed Sensor #1: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2687</td>
        <td class="s5" dir="ltr">Right Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:2993</td>
        <td class="s5" dir="ltr">
          Direction Selector Position Sensor #1: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2993</td>
        <td class="s5" dir="ltr">Direction Selector Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:87, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:297, CID:2742</td>
        <td class="s5" dir="ltr">
          Brake Accumulator Charging Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2742</td>
        <td class="s5" dir="ltr">Brake Accumulator Charging Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:428</td>
        <td class="s5" dir="ltr">
          Rear Axle Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">428</td>
        <td class="s5" dir="ltr">Rear Axle Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:1946</td>
        <td class="s5" dir="ltr">Right GPS Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1946</td>
        <td class="s5" dir="ltr">Right GPS Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:116, CID:854</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor (Right Rear): Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">854</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Right Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2460</td>
        <td class="s5" dir="ltr">
          ARD Fuel Pressure #1 Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2460</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment Regeneration Device Fuel Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:116, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:50952, CID:544</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Speed Sensor:Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">544</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:50952, CID:827</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Left Exhaust (Bank) Temperature Sensor:Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">827</td>
        <td class="s5" dir="ltr">Left Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:492</td>
        <td class="s5" dir="ltr">
          3rd Function Rearward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">492</td>
        <td class="s5" dir="ltr">3rd Function Rearward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:3657</td>
        <td class="s5" dir="ltr">
          Operator In Seat Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3657</td>
        <td class="s5" dir="ltr">Operator In Seat Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2236</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #1 Port A Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2236</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #1 Port A Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:272, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2686</td>
        <td class="s5" dir="ltr">
          Left Drive Motor Speed Sensor #2: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2686</td>
        <td class="s5" dir="ltr">Left Drive Motor Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:379</td>
        <td class="s5" dir="ltr">
          Machine Auto Lube Pressure Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">379</td>
        <td class="s5" dir="ltr">Machine Auto Lube Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:87, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:819</td>
        <td class="s5" dir="ltr">Display Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">819</td>
        <td class="s5" dir="ltr">Display Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:27, CID:1482</td>
        <td class="s5" dir="ltr">
          10 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1482</td>
        <td class="s5" dir="ltr">10 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:4550</td>
        <td class="s5" dir="ltr">
          Electric Fuel Transfer Pump Relay: Current Above Normal
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4550</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:1008</td>
        <td class="s5" dir="ltr">
          Rear Facing Position Seat Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1008</td>
        <td class="s5" dir="ltr">Rear Facing Position Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:1120, CID:1435</td>
        <td class="s5" dir="ltr">
          System Master Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">4</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1120</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1435</td>
        <td class="s5" dir="ltr">System Master Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:3886</td>
        <td class="s5" dir="ltr">
          Right Side Plate Front Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3886</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:3835</td>
        <td class="s5" dir="ltr">
          Cushion Hitch Leveling Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">3835</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2731</td>
        <td class="s5" dir="ltr">
          Drive Pump Reverse Control Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2731</td>
        <td class="s5" dir="ltr">Drive Pump Reverse Control Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:26</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">26</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2814</td>
        <td class="s5" dir="ltr">
          Quick Coupler Engage Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2814</td>
        <td class="s5" dir="ltr">Quick Coupler Engage Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:116, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:39, CID:668</td>
        <td class="s5" dir="ltr">
          Transmission Shift Lever: Special Instruction
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">668</td>
        <td class="s5" dir="ltr">Transmission Shift Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2357</td>
        <td class="s5" dir="ltr">
          Air Conditioner Evaporator Coil Temperature Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2357</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Evaporator Coil Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:800</td>
        <td class="s5" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">800</td>
        <td class="s5" dir="ltr">VIMS Main Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:27, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2993</td>
        <td class="s5" dir="ltr">
          Direction Selector Position Sensor #1: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2993</td>
        <td class="s5" dir="ltr">Direction Selector Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3609</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Outlet #1 NOx Level Sensor: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3609</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Outlet #1 NOx Level Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:3105</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature Sensor:
            Voltage Below Normal
          </div>
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3105</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Outlet Gas Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:1558</td>
        <td class="s5" dir="ltr">
          Electronic Implement Control #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1558</td>
        <td class="s5" dir="ltr">Electronic Implement Control #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:3753</td>
        <td class="s5" dir="ltr">
          Winch Supply Boost Accumulator Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3753</td>
        <td class="s5" dir="ltr">Winch Supply Boost Accumulator Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:116, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage: Low</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:87, CID:429</td>
        <td class="s5" dir="ltr">
          Steering Pump Oil Pressure Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">429</td>
        <td class="s5" dir="ltr">Steering Pump Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1195</td>
        <td class="s5" dir="ltr">
          Hydraulic Filter Bypass Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1195</td>
        <td class="s5" dir="ltr">Hydraulic Filter Bypass Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:145, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1529</td>
        <td class="s5" dir="ltr">Quick Coupler Switch: Voltage Below Normal</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1529</td>
        <td class="s5" dir="ltr">Quick Coupler Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3745</td>
        <td class="s5" dir="ltr">
          Left Rear Tire Pressure/Temperature Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3745</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Left Rear Tire Pressure/Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:1009</td>
        <td class="s5" dir="ltr">
          Front Facing Position Seat Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1009</td>
        <td class="s5" dir="ltr">Front Facing Position Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:4651</td>
        <td class="s5" dir="ltr">
          Blade Inertial Measurement Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4651</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:331, CID:2320</td>
        <td class="s5" dir="ltr">
          Left Front Drive Motor Speed Sensor #2: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">331</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2320</td>
        <td class="s5" dir="ltr">Left Front Drive Motor Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:4657</td>
        <td class="s5" dir="ltr">
          Blade Angle Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4657</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3407</td>
        <td class="s5" dir="ltr">
          EGR Valve Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3407</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust Gas Recirculation Valve Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:3082</td>
        <td class="s5" dir="ltr">
          Steering Control Force Feedback Motor: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3082</td>
        <td class="s5" dir="ltr">Steering Control Force Feedback Motor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:2460</td>
        <td class="s5" dir="ltr">
          ARD Fuel Pressure #1 Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2460</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment Regeneration Device Fuel Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2855</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #1 Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2855</td>
        <td class="s5" dir="ltr">Main Hydraulic Pump #1 Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:36, CID:100</td>
        <td class="s5" dir="ltr">
          Engine Oil Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">100</td>
        <td class="s5" dir="ltr">Engine Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:116, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:2687</td>
        <td class="s5" dir="ltr">
          Right Drive Motor Speed Sensor #1: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2687</td>
        <td class="s5" dir="ltr">Right Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:389, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:33, CID:267</td>
        <td class="s5" dir="ltr">
          Remote Shutdown Input: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">267</td>
        <td class="s5" dir="ltr">Remote Shutdown Input</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:1471</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1471</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5603</td>
        <td class="s5" dir="ltr">
          Left Travel Pedal Position Sensor Signal #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5603</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:263, CID:1785</td>
        <td class="s5" dir="ltr">
          Intake Manifold Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1785</td>
        <td class="s5" dir="ltr">Intake Manifold Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:53, CID:271</td>
        <td class="s5" dir="ltr">Action Alarm: Current Below Normal</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">271</td>
        <td class="s5" dir="ltr">Action Alarm</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:82, CID:2415</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Implement Left Main Valve Supply Pressure Sensor: Abnormal
            Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2415</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Implement Left Main Valve Supply Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3405</td>
        <td class="s5" dir="ltr">EGR Valve Control: Current Below Normal</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3405</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust Gas Recirculation Valve Control
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:82, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:87, CID:607</td>
        <td class="s5" dir="ltr">Loss of Left Rear Speed signal</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">607</td>
        <td class="s5" dir="ltr">Wheel Speed Sensor #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:341, CID:3655</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Intake NOx Level Sensor: Failure
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3655</td>
        <td class="s5" dir="ltr">Aftertreatment #1 Intake NOx Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:2402</td>
        <td class="s5" dir="ltr">Laser Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2402</td>
        <td class="s5" dir="ltr">Laser Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:517</td>
        <td class="s5" dir="ltr">
          All Wheel Drive Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">517</td>
        <td class="s5" dir="ltr">All Wheel Drive Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:27, CID:718</td>
        <td class="s5" dir="ltr">Transmission System: Special Instruction</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">718</td>
        <td class="s5" dir="ltr">Transmission System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:623</td>
        <td class="s5" dir="ltr">Directional Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">623</td>
        <td class="s5" dir="ltr">Directional Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:51062, CID:216</td>
        <td class="s5" dir="ltr">
          Machine communication not as expected:Special Instruction
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">51062</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">216</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:430</td>
        <td class="s5" dir="ltr">
          Steering Pilot Oil Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">430</td>
        <td class="s5" dir="ltr">Steering Pilot Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:82, CID:1934</td>
        <td class="s5" dir="ltr">
          Blade Angle Right Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1934</td>
        <td class="s5" dir="ltr">Blade Angle Right Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:432, CID:5237</td>
        <td class="s5" dir="ltr">
          Left Joystick Thumbwheel #1 Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5237</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:116, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3105</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature Sensor:
            Voltage Above Normal
          </div>
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3105</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Outlet Gas Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:5857</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #4: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5857</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:629</td>
        <td class="s5" dir="ltr">Neutralizer Switch short to ground</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">629</td>
        <td class="s5" dir="ltr">Neutralizer Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:27, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:854</td>
        <td class="s5" dir="ltr">
          Right Rear Brake Oil Temperature Sensor:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">854</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Right Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3798</td>
        <td class="s5" dir="ltr">
          Straight Travel Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3798</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:3182</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Fuel Injector #1 Heater: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3182</td>
        <td class="s5" dir="ltr">Aftertreatment #1 Fuel Injector #1 Heater</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:1450</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1450</td>
        <td class="s5" dir="ltr">Main Hydraulic Pump Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2259</td>
        <td class="s5" dir="ltr">
          Right Blade Control Mode Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2259</td>
        <td class="s5" dir="ltr">Right Blade Control Mode Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:3375</td>
        <td class="s5" dir="ltr">
          Direction Selector #1 Position Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3375</td>
        <td class="s5" dir="ltr">Direction Selector #1 Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3485</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Exhaust Gas Temperature #1 Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3485</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Exhaust Gas Temperature #1 Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:33, CID:717</td>
        <td class="s5" dir="ltr">
          Remote Throttle Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">717</td>
        <td class="s5" dir="ltr">Remote Throttle Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:3657</td>
        <td class="s5" dir="ltr">
          Operator In Seat Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3657</td>
        <td class="s5" dir="ltr">Operator In Seat Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:457</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">457</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:1472</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1472</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:598</td>
        <td class="s5" dir="ltr">
          Travel Speed Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">598</td>
        <td class="s5" dir="ltr">Travel Speed Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:357</td>
        <td class="s5" dir="ltr">Rackback Solenoid #1: Current Below Normal</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">357</td>
        <td class="s5" dir="ltr">Rackback Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:49, CID:890</td>
        <td class="s5" dir="ltr">Telemetry Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">890</td>
        <td class="s5" dir="ltr">Telemetry Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:407, CID:6010</td>
        <td class="s5" dir="ltr">
          Battery Cable Shield Input #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">407</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6010</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:272, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:1666</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #2 Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1666</td>
        <td class="s5" dir="ltr">Variable Relief Valve #2 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:586</td>
        <td class="s5" dir="ltr">
          Engine Speed Dial Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">586</td>
        <td class="s5" dir="ltr">Engine Speed Dial Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:27, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:702</td>
        <td class="s5" dir="ltr">
          Transmission Gear Lever Selector Sensor (Switch): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:423, CID:5932</td>
        <td class="s5" dir="ltr">
          Tool Oil Cycle Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">423</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5932</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:17, MID:299, CID:1893</td>
        <td class="s5" dir="ltr">Inertial Measurement Sensor</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">17</td>
        <td class="s5" dir="ltr">Low; least severe</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1893</td>
        <td class="s5" dir="ltr">Inertial Measurement Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:2685</td>
        <td class="s5" dir="ltr">
          Left Drive Motor Speed Sensor #1: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2685</td>
        <td class="s5" dir="ltr">Left Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:87, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:1961</td>
        <td class="s5" dir="ltr">
          Service Brake Accumulator Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1961</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Service Brake Accumulator Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:2452</td>
        <td class="s5" dir="ltr">
          DPF #1 Intake Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2452</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Intake Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:4440</td>
        <td class="s5" dir="ltr">
          Left Center Wheel Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4440</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3413</td>
        <td class="s5" dir="ltr">
          ARD Fuel Flow Diverter Actuator: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3413</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Fuel Flow Diverter Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3900</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor: Special Instruction</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:402, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:1785</td>
        <td class="s5" dir="ltr">
          Intake Manifold Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1785</td>
        <td class="s5" dir="ltr">Intake Manifold Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3838</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Controller Relay #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">3</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3838</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:36, CID:10</td>
        <td class="s5" dir="ltr">
          Cylinder #10 Injector: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s5" dir="ltr">Cylinder #10 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:668</td>
        <td class="s5" dir="ltr">
          Transmission Shift Lever: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">668</td>
        <td class="s5" dir="ltr">Transmission Shift Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:1494</td>
        <td class="s5" dir="ltr">
          Steering Accumulator Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1494</td>
        <td class="s5" dir="ltr">Steering Accumulator Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3556</td>
        <td class="s5" dir="ltr">
          Input/Output Module #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3556</td>
        <td class="s5" dir="ltr">Input/Output Module #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1076</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Bypass Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1076</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Bypass Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:474</td>
        <td class="s5" dir="ltr">
          Programmable Relay Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">474</td>
        <td class="s5" dir="ltr">Programmable Relay Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3474</td>
        <td class="s5" dir="ltr">
          Left Front Tire Pressure/Temperature Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3474</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Left Front Tire Pressure/Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1160</td>
        <td class="s5" dir="ltr">
          Hydraulic Lock Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1160</td>
        <td class="s5" dir="ltr">Hydraulic Lock Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:355</td>
        <td class="s5" dir="ltr">Lower Solenoid #1: Current Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">355</td>
        <td class="s5" dir="ltr">Lower Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:429</td>
        <td class="s5" dir="ltr">
          Steering Pump Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">429</td>
        <td class="s5" dir="ltr">Steering Pump Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:362, CID:4248</td>
        <td class="s5" dir="ltr">
          Bowl Cylinder Head End Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4248</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:264, CID:444</td>
        <td class="s5" dir="ltr">Starter Motor Relay: Current Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">444</td>
        <td class="s5" dir="ltr">Starter Motor Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:4468</td>
        <td class="s5" dir="ltr">
          Left Station Propel Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4468</td>
        <td class="s5" dir="ltr">Left Station Propel Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:4463</td>
        <td class="s5" dir="ltr">Right Screed Keypad: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4463</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:100</td>
        <td class="s5" dir="ltr">
          Engine Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">100</td>
        <td class="s5" dir="ltr">Engine Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:637</td>
        <td class="s5" dir="ltr">Backup Alarm short to ground</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">637</td>
        <td class="s5" dir="ltr">Backup Alarm</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:87, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:600</td>
        <td class="s5" dir="ltr">
          Hydraulic Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">600</td>
        <td class="s5" dir="ltr">Hydraulic Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:36, CID:6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:702</td>
        <td class="s5" dir="ltr">
          Transmission Gear Lever Selector Sensor (Switch): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:362, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:3413</td>
        <td class="s5" dir="ltr">
          ARD Fuel Flow Diverter Actuator: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3413</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Fuel Flow Diverter Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:434, CID:4287</td>
        <td class="s5" dir="ltr">
          Left Emergency Stop Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4287</td>
        <td class="s5" dir="ltr">Left Emergency Stop Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:4470</td>
        <td class="s5" dir="ltr">
          Right Station Hazard Light Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4470</td>
        <td class="s5" dir="ltr">Right Station Hazard Light Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:401, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:351</td>
        <td class="s5" dir="ltr">
          Tilt Linkage Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:2755</td>
        <td class="s5" dir="ltr">
          Blade Control Mode Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">2755</td>
        <td class="s5" dir="ltr">Blade Control Mode Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:27, CID:701</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">701</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2654</td>
        <td class="s5" dir="ltr">
          Screed Right Material Height Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2654</td>
        <td class="s5" dir="ltr">Screed Right Material Height Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:3821</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Dosing Valve Actuator #1: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3821</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 DEF Dosing Valve Actuator #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:263, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Special Instruction</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:145, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2265</td>
        <td class="s5" dir="ltr">
          Hydraulic Pump #1 Outlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2265</td>
        <td class="s5" dir="ltr">Hydraulic Pump #1 Outlet Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:390, CID:674</td>
        <td class="s5" dir="ltr">
          Transmission Intermediate Speed Sensor #1: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">674</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Intermediate Speed Sensor #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1144</td>
        <td class="s5" dir="ltr">Swing Left Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1144</td>
        <td class="s5" dir="ltr">Swing Left Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:598</td>
        <td class="s5" dir="ltr">
          Travel Speed Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">598</td>
        <td class="s5" dir="ltr">Travel Speed Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:331, CID:2319</td>
        <td class="s5" dir="ltr">
          Left Front Drive Motor Speed Sensor #1: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">331</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2319</td>
        <td class="s5" dir="ltr">Left Front Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4466</td>
        <td class="s5" dir="ltr">
          Left Station Hazard Light Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4466</td>
        <td class="s5" dir="ltr">Left Station Hazard Light Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:874</td>
        <td class="s5" dir="ltr">Mode Select Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">874</td>
        <td class="s5" dir="ltr">Mode Select Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:438</td>
        <td class="s5" dir="ltr">
          Hydraulic Control Valve Warm Up Solenoid #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">438</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hydraulic Control Valve Warm Up Solenoid #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:879</td>
        <td class="s5" dir="ltr">
          Ripper Shank In/Out Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">879</td>
        <td class="s5" dir="ltr">Ripper Shank In/Out Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1165</td>
        <td class="s5" dir="ltr">
          Right Travel Forward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1165</td>
        <td class="s5" dir="ltr">Right Travel Forward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3820</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Controller #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3820</td>
        <td class="s5" dir="ltr">Aftertreatment #1 DEF Controller #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:726</td>
        <td class="s5" dir="ltr">
          Right Steering Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">726</td>
        <td class="s5" dir="ltr">Right Steering Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:2471</td>
        <td class="s5" dir="ltr">
          Cab Door Position Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2471</td>
        <td class="s5" dir="ltr">Cab Door Position Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:424, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">424</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:1964</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1964</td>
        <td class="s5" dir="ltr">Lift Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:434, CID:4645</td>
        <td class="s5" dir="ltr">
          Right Extender Control Position Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4645</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4469</td>
        <td class="s5" dir="ltr">
          Right Station Hopper Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4469</td>
        <td class="s5" dir="ltr">Right Station Hopper Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1471</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #1: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1471</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:597</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump Discharge Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">597</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump Discharge Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:39, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage: Low</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:113, CID:299</td>
        <td class="s5" dir="ltr">
          Transmission Lever Position Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">299</td>
        <td class="s5" dir="ltr">Transmission Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:75, CID:2194</td>
        <td class="s5" dir="ltr">
          All Wheel Drive (AWD) Control Dial Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s6" dir="ltr">All-Wheel Drive Control</td>
        <td class="s6" dir="ltr">2194</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            All Wheel Drive (AWD) Control Dial Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3925</td>
        <td class="s5" dir="ltr">
          Loader Joystick Thumbwheel Position Signal #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3925</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Loader Joystick Thumbwheel Position Signal #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:39, CID:626</td>
        <td class="s5" dir="ltr">
          Steering/Transmission Lock Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">626</td>
        <td class="s5" dir="ltr">Steering/Transmission Lock Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:145, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:81, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4472</td>
        <td class="s5" dir="ltr">
          Right Station Propel Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4472</td>
        <td class="s5" dir="ltr">Right Station Propel Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:392, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:36, CID:342</td>
        <td class="s5" dir="ltr">
          Secondary Engine Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">342</td>
        <td class="s5" dir="ltr">Secondary Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:875</td>
        <td class="s5" dir="ltr">Manual Select Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">875</td>
        <td class="s5" dir="ltr">Manual Select Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:116, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:400, CID:1250</td>
        <td class="s5" dir="ltr">
          Remote Communication Module: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1250</td>
        <td class="s5" dir="ltr">Remote Communication Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:1079</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Tilt Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1079</td>
        <td class="s5" dir="ltr">Blade Control Handle Tilt Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:3566</td>
        <td class="s5" dir="ltr">
          Transmission Input #1 Speed #2 Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3566</td>
        <td class="s5" dir="ltr">Transmission Input #1 Speed #2 Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:2458</td>
        <td class="s5" dir="ltr">
          DPF #1 Differential Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2458</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:4287</td>
        <td class="s5" dir="ltr">
          Left Emergency Stop Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4287</td>
        <td class="s5" dir="ltr">Left Emergency Stop Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:50952, CID:216</td>
        <td class="s5" dir="ltr">
          Machine communication not as expected:Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">216</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:4634</td>
        <td class="s5" dir="ltr">
          Accessory Power Inverter #1 Power Feedback Line: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4634</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4467</td>
        <td class="s5" dir="ltr">
          Left Station Material Feed Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4467</td>
        <td class="s5" dir="ltr">Left Station Material Feed Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:358</td>
        <td class="s5" dir="ltr">
          Implement Pilot Pressure Supply Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">358</td>
        <td class="s5" dir="ltr">Implement Pilot Pressure Supply Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1840</td>
        <td class="s5" dir="ltr">
          Tractor Parking Brake Pressure Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1840</td>
        <td class="s5" dir="ltr">Tractor Parking Brake Pressure Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:116, CID:1962</td>
        <td class="s5" dir="ltr">
          Brake Pump Pressure Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">1962</td>
        <td class="s5" dir="ltr">Brake Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:3126</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank Heater #1: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3126</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 543px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Tank #1 Heater Coolant
            Diverter Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:145, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:1393</td>
        <td class="s5" dir="ltr">
          Output Driver Enable Line: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1393</td>
        <td class="s5" dir="ltr">Output Driver Enable Line</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:362, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:264, CID:4400</td>
        <td class="s5" dir="ltr">
          Torque Convertor Stator Clutch Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4400</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:272, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3572</td>
        <td class="s5" dir="ltr">
          Swing Pilot Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3572</td>
        <td class="s5" dir="ltr">Swing Pilot Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:3180</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Ignition Transformer Secondary: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3180</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Ignition Transformer Secondary
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:2490</td>
        <td class="s5" dir="ltr">
          ARD Air Pressure Control Actuator Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2490</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 543px; left: -1px">
            Aftertreatment Regeneration Device Air Pressure Control Actuator
            Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:881</td>
        <td class="s5" dir="ltr">
          Ripper AutoStow Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">881</td>
        <td class="s5" dir="ltr">Ripper AutoStow Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:297, CID:596</td>
        <td class="s5" dir="ltr">Wrong Response from Implement ECM</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:49, CID:2183</td>
        <td class="s5" dir="ltr">
          Payload Monitoring System: Out of Calibration
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">2183</td>
        <td class="s5" dir="ltr">Payload Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:1558</td>
        <td class="s5" dir="ltr">
          Electronic Implement Control #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1558</td>
        <td class="s5" dir="ltr">Electronic Implement Control #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:264, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1406</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 6: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1406</td>
        <td class="s5" dir="ltr">Transmission Solenoid 6</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:39, CID:1870</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Blade Control Handle Thumb Rocker Position Sensor: Abnormal
            Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1870</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Blade Control Handle Thumb Rocker Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:402, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:1977</td>
        <td class="s5" dir="ltr">
          Right Travel Backward Pressure Sensor: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1977</td>
        <td class="s5" dir="ltr">Right Travel Backward Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:4785</td>
        <td class="s5" dir="ltr">
          Implement Pilot Oil Pressure Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4785</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:390, CID:2448</td>
        <td class="s5" dir="ltr">
          Graphical Display Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2448</td>
        <td class="s5" dir="ltr">Graphical Display Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:6015</td>
        <td class="s5" dir="ltr">
          Platform Level Emergency Stop (E-Stop) Switch: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6015</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3134</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank #1 Temperature #1 Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3134</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Tank #1 Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor: Failure</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2113</td>
        <td class="s5" dir="ltr">
          Operator In Seat Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2113</td>
        <td class="s5" dir="ltr">Operator In Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:3724</td>
        <td class="s5" dir="ltr">
          Autonomous Control Module #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3724</td>
        <td class="s5" dir="ltr">Autonomous Control Module #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor:Voltage Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:1893</td>
        <td class="s5" dir="ltr">
          Inertial Measurement Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1893</td>
        <td class="s5" dir="ltr">Inertial Measurement Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:74, CID:841</td>
        <td class="s5" dir="ltr">
          Right Rear Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">74</td>
        <td class="s6" dir="ltr">Payload Control System</td>
        <td class="s6" dir="ltr">841</td>
        <td class="s5" dir="ltr">Right Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor (Lube):Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:460</td>
        <td class="s5" dir="ltr">
          Fuel Pressure Sensor - After Fuel Filter: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">460</td>
        <td class="s5" dir="ltr">Fuel Pressure Sensor ? after fuel filter</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:21, MID:263, CID:1785</td>
        <td class="s5" dir="ltr">
          Intake Manifold Pressure Sensor: Data Drifted Low
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s5" dir="ltr">Data Drifted Low</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1785</td>
        <td class="s5" dir="ltr">Intake Manifold Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1870</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Thumb Rocker Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1870</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Blade Control Handle Thumb Rocker Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:263, CID:3621</td>
        <td class="s5" dir="ltr">
          Engine Exhaust #1 NOx Level Sensor Power Supply: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3621</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust NOxLevel Sensor Power Supply
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:4387</td>
        <td class="s5" dir="ltr">
          Auxiliary Lever #9 Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">4387</td>
        <td class="s5" dir="ltr">Auxiliarty Lever #9 Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:39, CID:668</td>
        <td class="s5" dir="ltr">
          Transmission Shift Lever: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">668</td>
        <td class="s5" dir="ltr">Transmission Shift Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:33, CID:1589</td>
        <td class="s5" dir="ltr">
          Turbocharger Inlet Air Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">1589</td>
        <td class="s5" dir="ltr">Turbocharger Inlet Air Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:87, CID:1406</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 6: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1406</td>
        <td class="s5" dir="ltr">Transmission Solenoid 6</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:36, CID:827</td>
        <td class="s5" dir="ltr">
          Left Exhaust Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">827</td>
        <td class="s5" dir="ltr">Left Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:362, CID:4248</td>
        <td class="s5" dir="ltr">
          Bowl Cylinder Head End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4248</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:4470</td>
        <td class="s5" dir="ltr">
          Right Station Hazard Light Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4470</td>
        <td class="s5" dir="ltr">Right Station Hazard Light Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:297, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:87, CID:1401</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 1: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1401</td>
        <td class="s5" dir="ltr">Transmission Solenoid 1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:3583</td>
        <td class="s5" dir="ltr">Switch Panel #1: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3583</td>
        <td class="s5" dir="ltr">Switch Panel #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:39, CID:70</td>
        <td class="s5" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:402, CID:800</td>
        <td class="s5" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">800</td>
        <td class="s5" dir="ltr">VIMS Main Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:82, CID:350</td>
        <td class="s5" dir="ltr">
          Lift Linkage Position Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">350</td>
        <td class="s5" dir="ltr">Lift Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:4472</td>
        <td class="s5" dir="ltr">
          Right Station Propel Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4472</td>
        <td class="s5" dir="ltr">Right Station Propel Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:4022</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Air Conditioner Compressor Discharge Pressure Sensor: Abnormal
            Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4022</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Discharge Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:31, CID:324</td>
        <td class="s5" dir="ltr">Warning Lamp open/short to ground</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">324</td>
        <td class="s5" dir="ltr">Warning Lamp (Action)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:75, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s6" dir="ltr">All-Wheel Drive Control</td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:389, CID:1404</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 4: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1404</td>
        <td class="s5" dir="ltr">Transmission Solenoid 4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:562</td>
        <td class="s5" dir="ltr">
          Caterpillar Monitor System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:356</td>
        <td class="s5" dir="ltr">Dump Solenoid #1: Current Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">356</td>
        <td class="s5" dir="ltr">Dump Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:1089</td>
        <td class="s5" dir="ltr">
          VIMS Analysis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1089</td>
        <td class="s5" dir="ltr">VIMS Analysis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:297, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1009</td>
        <td class="s5" dir="ltr">
          Front Facing Position Seat Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1009</td>
        <td class="s5" dir="ltr">Front Facing Position Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:145, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:3821</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Dosing Valve Actuator #1: Not Responding
          Properly
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3821</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 DEF Dosing Valve Actuator #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4470</td>
        <td class="s5" dir="ltr">
          Right Station Hazard Light Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4470</td>
        <td class="s5" dir="ltr">Right Station Hazard Light Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:875</td>
        <td class="s5" dir="ltr">Manual Select Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">875</td>
        <td class="s5" dir="ltr">Manual Select Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:1078</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Lift Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1078</td>
        <td class="s5" dir="ltr">Blade Control Handle Lift Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:727</td>
        <td class="s5" dir="ltr">
          Left Steering Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">727</td>
        <td class="s5" dir="ltr">Left Steering Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:400, CID:1391</td>
        <td class="s5" dir="ltr">
          Theft Deterrent Output Driver #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1391</td>
        <td class="s5" dir="ltr">Theft Deterrent Output Driver #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:27, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4471</td>
        <td class="s5" dir="ltr">
          Right Station Material Feed Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4471</td>
        <td class="s5" dir="ltr">Right Station Material Feed Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:27, CID:1251</td>
        <td class="s5" dir="ltr">Alternator R-Terminal Signal: Low</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1251</td>
        <td class="s5" dir="ltr">Alternator R-Terminal Signal</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:39, CID:1666</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #2 Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1666</td>
        <td class="s5" dir="ltr">Variable Relief Valve #2 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:305, CID:3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1: Special Instruction</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">305</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:133</td>
        <td class="s5" dir="ltr">
          Transmission Pilot Pressure Supply Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">133</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Pilot Pressure Supply Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:562</td>
        <td class="s5" dir="ltr">
          Caterpillar Monitor System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:33, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2264</td>
        <td class="s5" dir="ltr">
          Left Travel Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2264</td>
        <td class="s5" dir="ltr">Left Travel Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:1558</td>
        <td class="s5" dir="ltr">
          Electronic Implement Control #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1558</td>
        <td class="s5" dir="ltr">Electronic Implement Control #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1404</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 4: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1404</td>
        <td class="s5" dir="ltr">Transmission Solenoid 4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:27, CID:700</td>
        <td class="s5" dir="ltr">
          Transmission Gear Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">700</td>
        <td class="s5" dir="ltr">Transmission Gear Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:392, CID:835</td>
        <td class="s5" dir="ltr">
          Differential (Axle) Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">835</td>
        <td class="s5" dir="ltr">Differential (axle) Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:6670</td>
        <td class="s5" dir="ltr">
          Auxiliary Relay Module:Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6670</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1471</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1471</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1628</td>
        <td class="s5" dir="ltr">
          Armrest Position Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1628</td>
        <td class="s5" dir="ltr">Armrest Position Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:116, CID:1232</td>
        <td class="s5" dir="ltr">
          Final Drive Oil Bypass Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">1232</td>
        <td class="s5" dir="ltr">Final Drive Oil Bypass Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:374</td>
        <td class="s5" dir="ltr">Swing Brake Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">374</td>
        <td class="s5" dir="ltr">Swing Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2899</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #1 Displacement Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2899</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump #1 Displacement Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:36, CID:4</td>
        <td class="s5" dir="ltr">Cylinder #4 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Cylinder #4 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:87, CID:826</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Torque Converter Oil Temperature Sensor: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:362, CID:572</td>
        <td class="s5" dir="ltr">
          Elevator Reverse Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">572</td>
        <td class="s5" dir="ltr">Elevator Reverse Drive Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:36, CID:298</td>
        <td class="s5" dir="ltr">
          Service Brake Pedal Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">298</td>
        <td class="s5" dir="ltr">Service Brake Pedal Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:674</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Transmission Intermediate Speed Sensor #1: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">674</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Intermediate Speed Sensor #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:289</td>
        <td class="s5" dir="ltr">
          Fuel Pressure Sensor - Before Fuel Filter: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">289</td>
        <td class="s5" dir="ltr">Fuel Pressure Sensor ? before fuel filter</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:87, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:20, MID:263, CID:3090</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Pressure #1 Sensor: Data Drifted High
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">20</td>
        <td class="s5" dir="ltr">Data Drifted High</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3090</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Dosing Reagent Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:113, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:341, CID:262</td>
        <td class="s5" dir="ltr">
          5 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">262</td>
        <td class="s5" dir="ltr">5 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:100</td>
        <td class="s5" dir="ltr">
          Engine Oil Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">100</td>
        <td class="s5" dir="ltr">Engine Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3035</td>
        <td class="s5" dir="ltr">Battery Cable Shield: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3035</td>
        <td class="s5" dir="ltr">Battery Cable Shield</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:297, CID:1404</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 4: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1404</td>
        <td class="s5" dir="ltr">Transmission Solenoid 4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3666</td>
        <td class="s5" dir="ltr">
          Engine Fuel Supply Lift Pump Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3666</td>
        <td class="s5" dir="ltr">Engine Fuel Supply Lift Pump Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:350</td>
        <td class="s5" dir="ltr">
          Lift Linkage Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">350</td>
        <td class="s5" dir="ltr">Lift Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:350</td>
        <td class="s5" dir="ltr">
          Lift Linkage Position Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">350</td>
        <td class="s5" dir="ltr">Lift Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:369, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">369</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:39, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:392, CID:855</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor (Left Rear): Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">855</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:50952, CID:828</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Right Exhaust(Bank) Temperature Sensor:Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">828</td>
        <td class="s5" dir="ltr">Right Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:82, CID:2846</td>
        <td class="s5" dir="ltr">
          Right Main Panel Feeder Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2846</td>
        <td class="s5" dir="ltr">Right Main Panel Feeder Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:362, CID:3495</td>
        <td class="s5" dir="ltr">
          Ejector Cylinder Head End Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3495</td>
        <td class="s5" dir="ltr">Ejector Cylinder Head End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:49, CID:840</td>
        <td class="s5" dir="ltr">
          Left Rear Strut Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">840</td>
        <td class="s5" dir="ltr">Left Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:4466</td>
        <td class="s5" dir="ltr">
          Left Station Hazard Light Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4466</td>
        <td class="s5" dir="ltr">Left Station Hazard Light Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:4462</td>
        <td class="s5" dir="ltr">Left Screed Keypad: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4462</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:4752</td>
        <td class="s5" dir="ltr">
          Quick Coupler Solenoid #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4752</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:1785</td>
        <td class="s5" dir="ltr">
          Intake Manifold Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1785</td>
        <td class="s5" dir="ltr">Intake Manifold Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1525</td>
        <td class="s5" dir="ltr">
          Straight Travel Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1525</td>
        <td class="s5" dir="ltr">Straight Travel Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:10, MID:272, CID:351</td>
        <td class="s5" dir="ltr">
          Tilt Linkage Position Sensor: Abnormal Rate of Change
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">10</td>
        <td class="s5" dir="ltr">Abnormal Rate of Change</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:33, CID:827</td>
        <td class="s5" dir="ltr">
          Left Exhaust Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">827</td>
        <td class="s5" dir="ltr">Left Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:4752</td>
        <td class="s5" dir="ltr">
          Quick Coupler Solenoid #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4752</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:116, CID:719</td>
        <td class="s5" dir="ltr">
          TCS Proportional Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">719</td>
        <td class="s5" dir="ltr">TCS Proportional Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:4466</td>
        <td class="s5" dir="ltr">
          Left Station Hazard Light Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4466</td>
        <td class="s5" dir="ltr">Left Station Hazard Light Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:50952, CID:533</td>
        <td class="s5" dir="ltr">Auto Retarder Control:Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:341, CID:3118</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 DEF Pump Motor Speed Sensor: Abnormal Frequency,
            Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3118</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 543px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Pump Motor Speed Sensor
            (feedback on pump speed)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:297, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2653</td>
        <td class="s5" dir="ltr">
          Screed Left Material Height Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2653</td>
        <td class="s5" dir="ltr">Screed Left Material Height Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:297, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:264, CID:70</td>
        <td class="s5" dir="ltr">Parking Brake Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:1421</td>
        <td class="s5" dir="ltr">
          (Slave) Rear Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1421</td>
        <td class="s5" dir="ltr">(Slave) Rear Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:2466</td>
        <td class="s5" dir="ltr">
          Engine Aftertreatment Control #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2466</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment Regeneration Device Control
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:299, CID:1893</td>
        <td class="s5" dir="ltr">
          Inertial Measurement Sensor: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1893</td>
        <td class="s5" dir="ltr">Inertial Measurement Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:53, CID:1089</td>
        <td class="s5" dir="ltr">
          VIMS Analysis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">1089</td>
        <td class="s5" dir="ltr">VIMS Analysis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:39, CID:590</td>
        <td class="s5" dir="ltr">Engine Control Module Loss of Signal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:1529</td>
        <td class="s5" dir="ltr">
          Quick Coupler Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1529</td>
        <td class="s5" dir="ltr">Quick Coupler Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:297, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:2302</td>
        <td class="s5" dir="ltr">
          Engine Coolant Pump Outlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">2302</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Coolant Pump Outlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:4019</td>
        <td class="s5" dir="ltr">
          Air Conditioner Suction Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4019</td>
        <td class="s5" dir="ltr">Air Conditioner Suction Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:3184</td>
        <td class="s5" dir="ltr">
          DPF Regeneration Inhibit Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3184</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Diesel Particulate Filter Regeneration Inhibit Switch
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:21, MID:263, CID:3397</td>
        <td class="s5" dir="ltr">
          DPF #1 Soot Loading Sensor: Data Drifted Low
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s5" dir="ltr">Data Drifted Low</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3397</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Diesel Particulate Filter #1 Soot Loading Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:113, CID:2122</td>
        <td class="s5" dir="ltr">
          Transmission Selector Reverse Direction Switch: Erratic, Intermittent,
          or Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">2122</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Selector Reverse Direction Switch
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:434, CID:4642</td>
        <td class="s5" dir="ltr">
          Left Extender Control Position Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4642</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:389, CID:41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply: Voltage Below Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4468</td>
        <td class="s5" dir="ltr">
          Left Station Propel Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4468</td>
        <td class="s5" dir="ltr">Left Station Propel Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1472</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #2: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1472</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:113, CID:299</td>
        <td class="s5" dir="ltr">
          Transmission Lever Position Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">299</td>
        <td class="s5" dir="ltr">Transmission Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:434</td>
        <td class="s5" dir="ltr">Implement Pilot Pressure short to ground</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s5" dir="ltr">Hydraulic Pilot Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:490</td>
        <td class="s5" dir="ltr">
          Implement Lockout Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">490</td>
        <td class="s5" dir="ltr">Implement Lockout Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:5705</td>
        <td class="s5" dir="ltr">
          Hydraulic System Bypass Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5705</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:81, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage: Low</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4569</td>
        <td class="s5" dir="ltr">
          Left Station Hopper Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4569</td>
        <td class="s5" dir="ltr">Left Station Hopper Keypad</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:341, CID:3100</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank Fluid Quality Sensor: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3100</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Tank Reagent Quality Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:30, CID:826</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Torque Converter Oil Temperature Sensor: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">Caterpillar Monitoring System</td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:874</td>
        <td class="s5" dir="ltr">Mode Select Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">874</td>
        <td class="s5" dir="ltr">Mode Select Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:5356</td>
        <td class="s5" dir="ltr">
          Emergency Brake Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5356</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:39, CID:1665</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #1 Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1665</td>
        <td class="s5" dir="ltr">Variable Relief Valve #1 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:3096</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Temperature #1 Sensor: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3096</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Dosing Reagent Temperature #1 Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2263</td>
        <td class="s5" dir="ltr">
          Right Travel Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2263</td>
        <td class="s5" dir="ltr">Right Travel Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:368</td>
        <td class="s5" dir="ltr">
          Transmission Auto/Manual Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">368</td>
        <td class="s5" dir="ltr">Transmission Auto/Manual Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:432, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Failure</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:3427</td>
        <td class="s5" dir="ltr">
          Aftertreatment Fuel Pump Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3427</td>
        <td class="s5" dir="ltr">Aftertreatment Fuel Pump Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3012</td>
        <td class="s5" dir="ltr">
          Boom Cylinder Retract Pilot Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3012</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Boom Cylinder Retract Pilot Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3464</td>
        <td class="s5" dir="ltr">
          DPF #1 Intake Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3464</td>
        <td class="s5" dir="ltr">DPF #1 Intake Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:6</td>
        <td class="s5" dir="ltr">
          Cylinder #6 Injector: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:2458</td>
        <td class="s5" dir="ltr">
          DPF #1 Differential Pressure Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2458</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:91</td>
        <td class="s5" dir="ltr">
          Throttle Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">91</td>
        <td class="s5" dir="ltr">Throttle Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:145, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:262</td>
        <td class="s5" dir="ltr">
          5 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">262</td>
        <td class="s5" dir="ltr">5 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1405</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 5: Current Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1405</td>
        <td class="s5" dir="ltr">Transmission Solenoid 5</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:20, MID:299, CID:2425</td>
        <td class="s5" dir="ltr">Boom Angle Sensor: Data Drifted High</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">20</td>
        <td class="s5" dir="ltr">Data Drifted High</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2425</td>
        <td class="s5" dir="ltr">Boom &lt;Raise/Lower&gt; Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:2489</td>
        <td class="s5" dir="ltr">
          ARD Air Pressure Control Actuator: Current Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2489</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Air Pressure Control Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:390, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3130</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank #1 Level Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3130</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Tank #1 Level Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1472</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1472</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:264, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:389, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:2900</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #2 Displacement Sensor: Failure
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2900</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump #2 Displacement Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:1492</td>
        <td class="s5" dir="ltr">
          Left Turbo Turbine Inlet Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1492</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Left Turbo Turbine Inlet Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1870</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Thumb Rocker Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1870</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Blade Control Handle Thumb Rocker Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:50952, CID:826</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Torque Converter Output Oil Temperature Sensor:Abnormal Frequency,
            Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:835</td>
        <td class="s5" dir="ltr">
          Differential(Axle) Oil Temperature Sensor:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">835</td>
        <td class="s5" dir="ltr">Differential (axle) Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:74, CID:840</td>
        <td class="s5" dir="ltr">
          Left Rear Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">74</td>
        <td class="s6" dir="ltr">Payload Control System</td>
        <td class="s6" dir="ltr">840</td>
        <td class="s5" dir="ltr">Left Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:341, CID:3493</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Secondary Air Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3493</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Secondary Air Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:675</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Transmission Intermediate Speed Sensor #2: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">675</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Intermediate Speed Sensor #2
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:422, CID:6305</td>
        <td class="s5" dir="ltr">
          Front Stabilizer Cylinder Head End Pressure Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">422</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6305</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:101</td>
        <td class="s5" dir="ltr">
          Crankcase Air Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">2</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">101</td>
        <td class="s5" dir="ltr">Crankcase Air Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:36, CID:1684</td>
        <td class="s5" dir="ltr">
          Fuel Injection Pump: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1684</td>
        <td class="s5" dir="ltr">Fuel Injection Pump</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:2076</td>
        <td class="s5" dir="ltr">
          Hydraulic System Valve ECM #2 CAN Data Link #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2076</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hydraulic System Valve ECM #2 CAN Data Link #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1683</td>
        <td class="s5" dir="ltr">Refueling Pump Relay: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1683</td>
        <td class="s5" dir="ltr">Refueling Pump Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:2470</td>
        <td class="s5" dir="ltr">
          Primary Steering Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2470</td>
        <td class="s5" dir="ltr">Primary Steering Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1977</td>
        <td class="s5" dir="ltr">
          Right Travel Backward Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1977</td>
        <td class="s5" dir="ltr">Right Travel Backward Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:302, CID:1603</td>
        <td class="s5" dir="ltr">
          Machine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">302</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1603</td>
        <td class="s5" dir="ltr">Machine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:21, MID:263, CID:3528</td>
        <td class="s5" dir="ltr">
          Barometric Pressure Sensor: Data Drifted Low
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s5" dir="ltr">Data Drifted Low</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3528</td>
        <td class="s5" dir="ltr">Barometric Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:1282</td>
        <td class="s5" dir="ltr">
          Apron Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1282</td>
        <td class="s5" dir="ltr">Apron Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:6</td>
        <td class="s5" dir="ltr">
          Cylinder #6 Injector: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:3820</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Controller #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3820</td>
        <td class="s5" dir="ltr">Aftertreatment #1 DEF Controller #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:4022</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Discharge Pressure Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4022</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Discharge Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:50952, CID:267</td>
        <td class="s5" dir="ltr">Remote Engine Shutdown Input:Low</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">267</td>
        <td class="s5" dir="ltr">Remote Shutdown Input</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:422, CID:1603</td>
        <td class="s5" dir="ltr">
          Machine Control Module: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">422</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1603</td>
        <td class="s5" dir="ltr">Machine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3493</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Secondary Air Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3493</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Secondary Air Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1484</td>
        <td class="s5" dir="ltr">Inching Pedal Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1484</td>
        <td class="s5" dir="ltr">Inching Pedal Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:27, CID:1841</td>
        <td class="s5" dir="ltr">
          Scraper Parking Brake Pressure Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1841</td>
        <td class="s5" dir="ltr">Scraper Parking Brake Pressure Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:161, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">161</td>
        <td class="s6" dir="ltr">Communication Gateway #1</td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:390, CID:709</td>
        <td class="s5" dir="ltr">
          Transmission Lockup Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">709</td>
        <td class="s5" dir="ltr">Transmission Lockup Clutch Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:12615, CID:350</td>
        <td class="s5" dir="ltr">
          Lift Linkage Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">12615</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">350</td>
        <td class="s5" dir="ltr">Lift Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:341, CID:3100</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Tank Fluid Quality Sensor: Erratic,
          Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3100</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment #1 SCR Catalyst Tank Reagent Quality Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:888</td>
        <td class="s5" dir="ltr">
          Ripper Shank Lower Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">888</td>
        <td class="s5" dir="ltr">Ripper Shank Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1120</td>
        <td class="s5" dir="ltr">
          Stick Anti Drift Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1120</td>
        <td class="s5" dir="ltr">Stick Anti Drift Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:432, CID:5236</td>
        <td class="s5" dir="ltr">
          Right Joystick Thumbwheel #2 Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5236</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:2899</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #1 Displacement Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2899</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump #1 Displacement Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:3090</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Pressure #1 Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3090</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Dosing Reagent Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:36, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:304, CID:271</td>
        <td class="s5" dir="ltr">Action Alarm: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">271</td>
        <td class="s5" dir="ltr">Action Alarm</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:432, CID:2142</td>
        <td class="s5" dir="ltr">
          Straight Travel Pedal Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2142</td>
        <td class="s5" dir="ltr">Straight Travel Pedal Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:33, CID:828</td>
        <td class="s5" dir="ltr">
          Right Exhaust Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">828</td>
        <td class="s5" dir="ltr">Right Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2530</td>
        <td class="s5" dir="ltr">
          Hoe Left Joystick Thumbwheel Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2530</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hoe Left Joystick Thumbwheel Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:75, CID:1558</td>
        <td class="s5" dir="ltr">
          Electronic Implement Control #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s6" dir="ltr">All-Wheel Drive Control</td>
        <td class="s6" dir="ltr">1558</td>
        <td class="s5" dir="ltr">Electronic Implement Control #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:297, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">872</td>
        <td class="s5" dir="ltr">Pitch Rate Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:4657</td>
        <td class="s5" dir="ltr">
          Blade Angle Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4657</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:1120, CID:3559</td>
        <td class="s5" dir="ltr">
          Input/Output Module #4: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1120</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3559</td>
        <td class="s5" dir="ltr">Input/Output Module #4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2490</td>
        <td class="s5" dir="ltr">
          ARD Air Pressure Control Actuator Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2490</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 543px; left: -1px">
            Aftertreatment Regeneration Device Air Pressure Control Actuator
            Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:134, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">134</td>
        <td class="s6" dir="ltr">Object Detection System</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3391</td>
        <td class="s5" dir="ltr">
          ARD Fuel Pressure #2 Control Actuator: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3391</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Fuel Pressure #2 Control Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:353</td>
        <td class="s5" dir="ltr">Tilt Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">353</td>
        <td class="s5" dir="ltr">Tilt Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:12615, CID:41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply: Voltage Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">12615</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:353</td>
        <td class="s5" dir="ltr">Tilt Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">353</td>
        <td class="s5" dir="ltr">Tilt Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:50952, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor II:Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2319</td>
        <td class="s5" dir="ltr">
          Left Front Drive Motor Speed Sensor #1: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2319</td>
        <td class="s5" dir="ltr">Left Front Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:342, CID:174</td>
        <td class="s5" dir="ltr">
          Fuel Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">342</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">174</td>
        <td class="s5" dir="ltr">Fuel Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1568</td>
        <td class="s5" dir="ltr">
          Implement Pump to Tank Bypass Solenoid #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1568</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Implement Pump to Tank Bypass Solenoid #2
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:1937</td>
        <td class="s5" dir="ltr">
          Engine Coolant Flow Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1937</td>
        <td class="s5" dir="ltr">Engine Coolant Flow Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:75, CID:2320</td>
        <td class="s5" dir="ltr">
          Left Front Drive Motor Speed Sensor #2: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s6" dir="ltr">All-Wheel Drive Control</td>
        <td class="s6" dir="ltr">2320</td>
        <td class="s5" dir="ltr">Left Front Drive Motor Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:304, CID:145</td>
        <td class="s5" dir="ltr">
          12 Volt DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">145</td>
        <td class="s5" dir="ltr">12 Volt DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:362, CID:1276</td>
        <td class="s5" dir="ltr">Bowl Down Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1276</td>
        <td class="s5" dir="ltr">Bowl Down Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:390, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:1</td>
        <td class="s5" dir="ltr">
          Cylinder #1 Injector: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Cylinder #1 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3118</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Pump Motor Speed Sensor: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3118</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 543px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Pump Motor Speed Sensor
            (feedback on pump speed)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:880</td>
        <td class="s5" dir="ltr">
          Ripper Raise/Lower Lever Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">880</td>
        <td class="s5" dir="ltr">Ripper Raise/Lower Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:3901</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #2: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3901</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Failure</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:272, CID:882</td>
        <td class="s5" dir="ltr">
          Implement Lockout Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">882</td>
        <td class="s5" dir="ltr">Implement Lockout Solenoid &lt;switch&gt;</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:297, CID:590</td>
        <td class="s5" dir="ltr">Engine Control Module: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:272, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:362, CID:874</td>
        <td class="s5" dir="ltr">Mode Select Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">874</td>
        <td class="s5" dir="ltr">Mode Select Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:30, CID:600</td>
        <td class="s5" dir="ltr">
          Hydraulic Oil Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">Caterpillar Monitoring System</td>
        <td class="s6" dir="ltr">600</td>
        <td class="s5" dir="ltr">Hydraulic Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:272, CID:1871</td>
        <td class="s5" dir="ltr">
          Blade Quick Drop Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1871</td>
        <td class="s5" dir="ltr">Blade Quick Drop Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:2302</td>
        <td class="s5" dir="ltr">
          Engine Coolant Pump Outlet Pressure Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2302</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Coolant Pump Outlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:427</td>
        <td class="s5" dir="ltr">
          Front Axle Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">427</td>
        <td class="s5" dir="ltr">Front Axle Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:766</td>
        <td class="s5" dir="ltr">
          Differential (Axle) Lube Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">766</td>
        <td class="s5" dir="ltr">Differential (Axle) Lube Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:30, CID:821</td>
        <td class="s5" dir="ltr">Display Power Supply: Voltage Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">Caterpillar Monitoring System</td>
        <td class="s6" dir="ltr">821</td>
        <td class="s5" dir="ltr">Display Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:272, CID:357</td>
        <td class="s5" dir="ltr">Rackback Solenoid #1: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">357</td>
        <td class="s5" dir="ltr">Rackback Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:3556</td>
        <td class="s5" dir="ltr">
          Input/Output Module #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3556</td>
        <td class="s5" dir="ltr">Input/Output Module #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:39, CID:976</td>
        <td class="s5" dir="ltr">
          Left Material Height Paddle Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">976</td>
        <td class="s5" dir="ltr">Left Material Height Paddle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:272, CID:889</td>
        <td class="s5" dir="ltr">
          Ripper Shank Raise Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">889</td>
        <td class="s5" dir="ltr">Ripper Shank Raise Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:116, CID:855</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Brake Oil Temperature Sensor (Left Rear): Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">855</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1401</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1401</td>
        <td class="s5" dir="ltr">Transmission Solenoid 1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:2425</td>
        <td class="s5" dir="ltr">Boom Angle Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">2425</td>
        <td class="s5" dir="ltr">Boom &lt;Raise/Lower&gt; Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:49, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:702</td>
        <td class="s5" dir="ltr">
          Transmission Gear Lever Selector Sensor (Switch): Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:408, CID:1628</td>
        <td class="s5" dir="ltr">
          Armrest Position Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">408</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1628</td>
        <td class="s5" dir="ltr">Armrest Position Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:3583</td>
        <td class="s5" dir="ltr">Switch Panel #1: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3583</td>
        <td class="s5" dir="ltr">Switch Panel #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:113, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:81, CID:621</td>
        <td class="s5" dir="ltr">Downshift Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">621</td>
        <td class="s5" dir="ltr">Downshift Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:145, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:971</td>
        <td class="s5" dir="ltr">
          Interaxle Differential Lock Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">971</td>
        <td class="s5" dir="ltr">Interaxle Differential Lock Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1936</td>
        <td class="s5" dir="ltr">
          Hydraulic System High Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1936</td>
        <td class="s5" dir="ltr">Hydraulic System High Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:50952, CID:41</td>
        <td class="s5" dir="ltr">
          8 Volt Sensor Power Supply:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:81, CID:127</td>
        <td class="s5" dir="ltr">
          Transmission Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">127</td>
        <td class="s5" dir="ltr">Transmission Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1657</td>
        <td class="s5" dir="ltr">
          Left Joystick Thumbwheel: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1657</td>
        <td class="s5" dir="ltr">Left Joystick Thumbwheel</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:1970</td>
        <td class="s5" dir="ltr">
          Bucket Cylinder Rod End Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1970</td>
        <td class="s5" dir="ltr">Bucket Cylinder Rod End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:145, CID:1482</td>
        <td class="s5" dir="ltr">
          10 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">1482</td>
        <td class="s5" dir="ltr">10 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:464, CID:3423</td>
        <td class="s5" dir="ltr">Grade Control System: Out of Calibration</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">464</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3423</td>
        <td class="s5" dir="ltr">Grade Control System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:1665</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #1 Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1665</td>
        <td class="s5" dir="ltr">Variable Relief Valve #1 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:74, CID:838</td>
        <td class="s5" dir="ltr">
          Left Front Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">74</td>
        <td class="s6" dir="ltr">Payload Control System</td>
        <td class="s6" dir="ltr">838</td>
        <td class="s5" dir="ltr">Left Front Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:3</td>
        <td class="s5" dir="ltr">Cylinder #3 Injector: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Cylinder #3 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:331, CID:2321</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Right Front Drive Motor Speed Sensor #1: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">331</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2321</td>
        <td class="s5" dir="ltr">Right Front Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:156, CID:70</td>
        <td class="s5" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:2402</td>
        <td class="s5" dir="ltr">Laser Receiver: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">2402</td>
        <td class="s5" dir="ltr">Laser Receiver</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:423, CID:3901</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #2: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">423</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3901</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:562</td>
        <td class="s5" dir="ltr">
          Caterpillar Monitor System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:1469</td>
        <td class="s5" dir="ltr">
          Steering Motor Speed Sensor #1: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1469</td>
        <td class="s5" dir="ltr">Steering Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:1281</td>
        <td class="s5" dir="ltr">
          Bowl Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1281</td>
        <td class="s5" dir="ltr">Bowl Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:81, CID:674</td>
        <td class="s5" dir="ltr">
          Transmission Intermediate Speed Sensor #1: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">674</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Intermediate Speed Sensor #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:272, CID:1603</td>
        <td class="s5" dir="ltr">
          Machine Control Module: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1603</td>
        <td class="s5" dir="ltr">Machine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:424, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">424</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3642</td>
        <td class="s5" dir="ltr">
          Operator Speed Set/Recall Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3642</td>
        <td class="s5" dir="ltr">Operator Speed Set/Recall Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1401</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1401</td>
        <td class="s5" dir="ltr">Transmission Solenoid 1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:50952, CID:1089</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            VIMS (Vital Information Management System) Analysis Control
            Module:Abnormal Update Rate
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1089</td>
        <td class="s5" dir="ltr">VIMS Analysis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:880</td>
        <td class="s5" dir="ltr">
          Ripper Raise/Lower Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">880</td>
        <td class="s5" dir="ltr">Ripper Raise/Lower Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1164</td>
        <td class="s5" dir="ltr">
          Right Travel Backward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1164</td>
        <td class="s5" dir="ltr">Right Travel Backward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10115, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10115</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:113, CID:588</td>
        <td class="s5" dir="ltr">
          Monitor System Display: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">588</td>
        <td class="s5" dir="ltr">Monitoring System Display</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:134, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">134</td>
        <td class="s6" dir="ltr">Object Detection System</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:82, CID:296</td>
        <td class="s5" dir="ltr">See Service Manual</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1432</td>
        <td class="s5" dir="ltr">
          Tractor Parking Brake Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1432</td>
        <td class="s5" dir="ltr">Tractor Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:145, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:4784</td>
        <td class="s5" dir="ltr">
          Blade Cross Slope Favorite Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">4784</td>
        <td class="s5" dir="ltr">Blade Cross Slope Favorite Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:392, CID:689</td>
        <td class="s5" dir="ltr">Left Brake Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">689</td>
        <td class="s5" dir="ltr">Left Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5334</td>
        <td class="s5" dir="ltr">
          Swing Motor Angle Sensor Signal #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5334</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1197</td>
        <td class="s5" dir="ltr">Blade Lower Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1197</td>
        <td class="s5" dir="ltr">Blade Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:598</td>
        <td class="s5" dir="ltr">
          Travel Speed Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">598</td>
        <td class="s5" dir="ltr">Travel Speed Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:4287</td>
        <td class="s5" dir="ltr">
          Left Emergency Stop Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4287</td>
        <td class="s5" dir="ltr">Left Emergency Stop Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:36, CID:338</td>
        <td class="s5" dir="ltr">
          Engine Pre-Lube Pump Relay: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">338</td>
        <td class="s5" dir="ltr">Engine Pre-lube Pump Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:341, CID:2458</td>
        <td class="s5" dir="ltr">
          DPF #1 Differential Pressure Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2458</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1283</td>
        <td class="s5" dir="ltr">
          Ejector Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1283</td>
        <td class="s5" dir="ltr">Ejector Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:362, CID:3835</td>
        <td class="s5" dir="ltr">
          Cushion Hitch Leveling Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3835</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2236</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #1 Port A Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2236</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #1 Port A Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:156, CID:2552</td>
        <td class="s5" dir="ltr">
          Left Hopper Lower Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">2552</td>
        <td class="s5" dir="ltr">Left Hopper Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:12577, CID:2357</td>
        <td class="s5" dir="ltr">
          Air Conditioner Evaporator Coil Temperature Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">12577</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2357</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Evaporator Coil Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:562</td>
        <td class="s5" dir="ltr">
          Caterpillar Monitor System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:81, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:1780</td>
        <td class="s5" dir="ltr">
          Fuel Rail #2 Pressure Valve Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1780</td>
        <td class="s5" dir="ltr">Fuel Rail #2 Pressure Valve Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:423, CID:5950</td>
        <td class="s5" dir="ltr">Tool Oil Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">423</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5950</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:486, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">486</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:49, CID:267</td>
        <td class="s5" dir="ltr">Remote Shutdown Input: Low</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">267</td>
        <td class="s5" dir="ltr">Remote Shutdown Input</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:3061</td>
        <td class="s5" dir="ltr">
          Quick Coupler Enable Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3061</td>
        <td class="s5" dir="ltr">Quick Coupler Enable Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:272, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1965</td>
        <td class="s5" dir="ltr">
          Tilt Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1965</td>
        <td class="s5" dir="ltr">Tilt Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:4439</td>
        <td class="s5" dir="ltr">
          Right Center Wheel Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4439</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:779</td>
        <td class="s5" dir="ltr">
          Cab Air Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">779</td>
        <td class="s5" dir="ltr">Cab Air Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:299, CID:191</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">191</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:3743</td>
        <td class="s5" dir="ltr">
          Engine Aftertreatment Control #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3743</td>
        <td class="s5" dir="ltr">Engine Aftertreatment Control #2 r</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1405</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 5: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1405</td>
        <td class="s5" dir="ltr">Transmission Solenoid 5</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:33, CID:4</td>
        <td class="s5" dir="ltr">Cylinder #4 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Cylinder #4 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2659</td>
        <td class="s5" dir="ltr">
          Cab Air Temperature Control Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2659</td>
        <td class="s5" dir="ltr">Cab Air Temperature Control Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2429</td>
        <td class="s5" dir="ltr">
          Boom Cylinder Extend Pilot Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2429</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Boom Cylinder Extend Pilot Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:116, CID:853</td>
        <td class="s5" dir="ltr">
          Brake Oil Temperature Sensor (Left Front): Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">853</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Front)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10118, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10118</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3557</td>
        <td class="s5" dir="ltr">
          Input/Output Module #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3557</td>
        <td class="s5" dir="ltr">Input/Output Module #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:12583, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">12583</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:420</td>
        <td class="s5" dir="ltr">
          Secondary Steering Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">420</td>
        <td class="s5" dir="ltr">Secondary Steering Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:4388</td>
        <td class="s5" dir="ltr">
          Accessory Power Inverter #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4388</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:27, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:6016</td>
        <td class="s5" dir="ltr">
          Ground Level Emergency Stop (E-Stop) Switch: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6016</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:1597</td>
        <td class="s5" dir="ltr">
          Attachment Valve #2 Retract Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1597</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #2 Retract Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:145, CID:1473</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #3: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">1473</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:161, CID:2524</td>
        <td class="s5" dir="ltr">Satellite Antenna: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">161</td>
        <td class="s6" dir="ltr">Communication Gateway #1</td>
        <td class="s6" dir="ltr">2524</td>
        <td class="s5" dir="ltr">Satellite Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:3565</td>
        <td class="s5" dir="ltr">
          Transmission Input #1 Speed #1 Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3565</td>
        <td class="s5" dir="ltr">Transmission Input #1 Speed #1 Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2242</td>
        <td class="s5" dir="ltr">
          Loader Auxiliary Valve Port A Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2242</td>
        <td class="s5" dir="ltr">Loader Auxiliary Valve Port A Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:156, CID:975</td>
        <td class="s5" dir="ltr">
          Left Station Left Conveyor Speed Dial: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">975</td>
        <td class="s5" dir="ltr">Left Station Left Conveyor Speed Dial</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:276</td>
        <td class="s5" dir="ltr">
          Left Turbocharger Inlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">276</td>
        <td class="s5" dir="ltr">Left Turbocharger Inlet Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Cylinder #6 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:362, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:6670</td>
        <td class="s5" dir="ltr">
          Auxiliary Relay Module:Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6670</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:3912</td>
        <td class="s5" dir="ltr">Switch Panel #5: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3912</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:341, CID:3862</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Return Valve Solenoid: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3862</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 DEF Return Valve Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:172</td>
        <td class="s5" dir="ltr">
          Intake Manifold Air Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">172</td>
        <td class="s5" dir="ltr">Intake Manifold Air Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:432, CID:2425</td>
        <td class="s5" dir="ltr">Boom Angle Sensor: Failure</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2425</td>
        <td class="s5" dir="ltr">Boom &lt;Raise/Lower&gt; Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:434, CID:4447</td>
        <td class="s5" dir="ltr">
          Screed Right End Gate Lower Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4447</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:3285</td>
        <td class="s5" dir="ltr">
          Primary Steering System Steer Right Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3285</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Primary Steering System Steer Right Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:351</td>
        <td class="s5" dir="ltr">
          Tilt Linkage Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:432, CID:4751</td>
        <td class="s5" dir="ltr">
          Quick Coupler Solenoid #1: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4751</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:368</td>
        <td class="s5" dir="ltr">
          Transmission Auto/Manual Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">368</td>
        <td class="s5" dir="ltr">Transmission Auto/Manual Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:16</td>
        <td class="s5" dir="ltr">
          Cylinder #16 Injector: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">16</td>
        <td class="s5" dir="ltr">Cylinder #16 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2771</td>
        <td class="s5" dir="ltr">
          Throttle Lock Set/Accel Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2771</td>
        <td class="s5" dir="ltr">Throttle Lock Resume/Decel Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:392, CID:855</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Brake Oil Temperature Sensor (Left Rear): Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">855</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Left Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10120, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10120</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:134, CID:3319</td>
        <td class="s5" dir="ltr">
          Medium Range Object Detection Sensor #3: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">134</td>
        <td class="s6" dir="ltr">Object Detection System</td>
        <td class="s6" dir="ltr">3319</td>
        <td class="s5" dir="ltr">Medium Object Detection Sensor #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3900</td>
        <td class="s5" dir="ltr">Ethernet Data Link #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:87, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1707</td>
        <td class="s5" dir="ltr">
          Left Drive Motor Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1707</td>
        <td class="s5" dir="ltr">Left Drive Motor Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:2988</td>
        <td class="s5" dir="ltr">
          Brake Charge Pressure Sensor #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2988</td>
        <td class="s5" dir="ltr">Brake Charge Pressure Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2795</td>
        <td class="s5" dir="ltr">
          Accelerator Pedal Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2795</td>
        <td class="s5" dir="ltr">Accelerator Pedal Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:156, CID:1727</td>
        <td class="s5" dir="ltr">
          Left Station Steering Wheel Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">1727</td>
        <td class="s5" dir="ltr">Left Station Steering Wheel Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:1283</td>
        <td class="s5" dir="ltr">
          Ejector Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1283</td>
        <td class="s5" dir="ltr">Ejector Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2679</td>
        <td class="s5" dir="ltr">Blade Shake Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2679</td>
        <td class="s5" dir="ltr">Blade Shake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:873</td>
        <td class="s5" dir="ltr">
          Tilt Hydraulic Pump Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">873</td>
        <td class="s5" dir="ltr">Tilt Hydraulic Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3513</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Engine Exhaust Back Pressure Regulator Valve Position Sensor:
            Voltage Above Normal
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3513</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Engine Exhaust Back Pressure Regulator Valve Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:263, CID:10</td>
        <td class="s5" dir="ltr">
          Cylinder #10 Injector: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">10</td>
        <td class="s5" dir="ltr">Cylinder #10 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3901</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3901</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:87, CID:669</td>
        <td class="s5" dir="ltr">
          Transmission Input Speed Sensor loss of signal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">669</td>
        <td class="s5" dir="ltr">Transmission Input Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:4688</td>
        <td class="s5" dir="ltr">
          Ground Level Rear Right Station Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4688</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10116, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10116</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:724</td>
        <td class="s5" dir="ltr">Hoist Raise Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">724</td>
        <td class="s5" dir="ltr">Hoist Raise Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:615</td>
        <td class="s5" dir="ltr">
          Machine Articulation Angle Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">615</td>
        <td class="s5" dir="ltr">Machine Articulation Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:87, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:389, CID:2976</td>
        <td class="s5" dir="ltr">
          Parking Brake Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2976</td>
        <td class="s5" dir="ltr">Parking Brake Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:549</td>
        <td class="s5" dir="ltr">
          Throttle Lock Enable Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">549</td>
        <td class="s5" dir="ltr">Throttle Lock Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2245</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #2 Port B Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2245</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #2 Port B Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:116, CID:854</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Brake Oil Temperature Sensor (Right Rear): Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">854</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Right Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:434, CID:4448</td>
        <td class="s5" dir="ltr">
          Screed Left End Gate Raise Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4448</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:390, CID:3544</td>
        <td class="s5" dir="ltr">
          Interaxle Lock Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3544</td>
        <td class="s5" dir="ltr">Interaxle Lock Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:2075</td>
        <td class="s5" dir="ltr">
          Hydraulic System Valve ECM #1 CAN Data Link #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2075</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hydraulic System Valve ECM #1 CAN Data Link #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:887</td>
        <td class="s5" dir="ltr">
          Ripper Shank Out Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">887</td>
        <td class="s5" dir="ltr">Ripper Shank Out Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:30, CID:601</td>
        <td class="s5" dir="ltr">
          Brake Air Pressure Sensor: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">30</td>
        <td class="s6" dir="ltr">Caterpillar Monitoring System</td>
        <td class="s6" dir="ltr">601</td>
        <td class="s5" dir="ltr">Brake Air Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:3744</td>
        <td class="s5" dir="ltr">
          Winch Control Handle Brake/Free Spool Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3744</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Winch Control Handle Brake/Free Spool Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2110</td>
        <td class="s5" dir="ltr">Machine Pitch Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:2976</td>
        <td class="s5" dir="ltr">
          Parking Brake Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2976</td>
        <td class="s5" dir="ltr">Parking Brake Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1597</td>
        <td class="s5" dir="ltr">
          Attachment Valve #2 Retract Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1597</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #2 Retract Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:1198</td>
        <td class="s5" dir="ltr">Blade Raise Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1198</td>
        <td class="s5" dir="ltr">Blade Raise Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:2466</td>
        <td class="s5" dir="ltr">
          Engine Aftertreatment Control #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2466</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment Regeneration Device Control
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:827</td>
        <td class="s5" dir="ltr">
          Left Exhaust Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">827</td>
        <td class="s5" dir="ltr">Left Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3409</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Engine Exhaust Manifold Bank #1 Flow Balance Valve Solenoid: Current
            Below Normal
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3409</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Engine Exhaust Manifold Bank #1 Flow Balance Valve Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Output Oil Temperature Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:50952, CID:1013</td>
        <td class="s5" dir="ltr">
          Front Brake Proportional Solenoid:Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1013</td>
        <td class="s5" dir="ltr">Front Brake Proportional Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5542</td>
        <td class="s5" dir="ltr">
          Left Stabilizer Lever Position Signal #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5542</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:800</td>
        <td class="s5" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">800</td>
        <td class="s5" dir="ltr">VIMS Main Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:389, CID:3630</td>
        <td class="s5" dir="ltr">
          Rear Engine Start Enable Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3630</td>
        <td class="s5" dir="ltr">Rear Engine Start Enable Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2150</td>
        <td class="s5" dir="ltr">
          Blade Left Lift Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2150</td>
        <td class="s5" dir="ltr">Blade Left Lift Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:2465</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Ignition Transformer Primary: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2465</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Ignition Transformer Primary
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:263, CID:5856</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #3: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5856</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:161, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">161</td>
        <td class="s6" dir="ltr">Communication Gateway #1</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2770</td>
        <td class="s5" dir="ltr">
          Throttle Lock Resume/Decel Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2770</td>
        <td class="s5" dir="ltr">Throttle Lock Resume/Decel Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:161, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">161</td>
        <td class="s6" dir="ltr">Communication Gateway #1</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:2496</td>
        <td class="s5" dir="ltr">
          Cylinder #20 Injector: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2496</td>
        <td class="s5" dir="ltr">Cylinder #20 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3577</td>
        <td class="s5" dir="ltr">
          Attachment Pedal #1 Pilot Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3577</td>
        <td class="s5" dir="ltr">Attachment Pedal #1 Pilot Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:581</td>
        <td class="s5" dir="ltr">Power Shift Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">581</td>
        <td class="s5" dir="ltr">Power Shift Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:1962</td>
        <td class="s5" dir="ltr">
          Brake Pump Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">1962</td>
        <td class="s5" dir="ltr">Brake Pump Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:302, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">302</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1678</td>
        <td class="s5" dir="ltr">Solenoid Return #5: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1678</td>
        <td class="s5" dir="ltr">Solenoid Return #5</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:358</td>
        <td class="s5" dir="ltr">
          Implement Pilot Pressure Supply Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">358</td>
        <td class="s5" dir="ltr">Implement Pilot Pressure Supply Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:341, CID:3464</td>
        <td class="s5" dir="ltr">
          DPF #1 Intake Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3464</td>
        <td class="s5" dir="ltr">DPF #1 Intake Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:172</td>
        <td class="s5" dir="ltr">
          Intake Manifold Air Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">172</td>
        <td class="s5" dir="ltr">Intake Manifold Air Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:4019</td>
        <td class="s5" dir="ltr">
          Air Conditioner Suction Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4019</td>
        <td class="s5" dir="ltr">Air Conditioner Suction Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:422, CID:3901</td>
        <td class="s5" dir="ltr">
          Ethernet Data Link #2: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">422</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3901</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:474</td>
        <td class="s5" dir="ltr">
          Programmable Relay Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">474</td>
        <td class="s5" dir="ltr">Programmable Relay Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1627</td>
        <td class="s5" dir="ltr">Fuel Pump Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1627</td>
        <td class="s5" dir="ltr">Fuel Pump Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:854</td>
        <td class="s5" dir="ltr">
          Right Rear Brake Oil Temperature Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">854</td>
        <td class="s5" dir="ltr">Brake Oil Temperature Sensor (Right Rear)</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2489</td>
        <td class="s5" dir="ltr">
          ARD Air Pressure Control Actuator: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2489</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Air Pressure Control Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:1421</td>
        <td class="s5" dir="ltr">
          (Slave) Rear Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">1421</td>
        <td class="s5" dir="ltr">(Slave) Rear Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:12615, CID:3700</td>
        <td class="s5" dir="ltr">
          Loader Bucket Inclinometer Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">12615</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3700</td>
        <td class="s5" dir="ltr">Loader Bucket Inclinometer Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:5995</td>
        <td class="s5" dir="ltr">
          Hoist Assist Enable Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5995</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:392, CID:713</td>
        <td class="s5" dir="ltr">
          Auto Retarder On/Off Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">713</td>
        <td class="s5" dir="ltr">Auto Retarder ON/OFF Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1119</td>
        <td class="s5" dir="ltr">
          Boom Anti Drift Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1119</td>
        <td class="s5" dir="ltr">Boom Anti Drift Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:39, CID:590</td>
        <td class="s5" dir="ltr">Engine Control Module: Failure</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1166</td>
        <td class="s5" dir="ltr">
          Left Travel Forward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1166</td>
        <td class="s5" dir="ltr">Left Travel Forward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:1603</td>
        <td class="s5" dir="ltr">
          Machine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1603</td>
        <td class="s5" dir="ltr">Machine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:432, CID:5238</td>
        <td class="s5" dir="ltr">
          Left Joystick Thumbwheel #2 Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5238</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:588</td>
        <td class="s5" dir="ltr">
          Monitor System Display: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">588</td>
        <td class="s5" dir="ltr">Monitoring System Display</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:1422</td>
        <td class="s5" dir="ltr">
          (Slave) Front Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1422</td>
        <td class="s5" dir="ltr">(Slave) Front Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:362, CID:3603</td>
        <td class="s5" dir="ltr">Auto/Manual Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3603</td>
        <td class="s5" dir="ltr">Auto/Manual Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:116, CID:835</td>
        <td class="s5" dir="ltr">
          Differential (Axle) Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">835</td>
        <td class="s5" dir="ltr">Differential (axle) Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:262</td>
        <td class="s5" dir="ltr">
          5 Volt Sensor DC Power Supply: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">262</td>
        <td class="s5" dir="ltr">5 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2531</td>
        <td class="s5" dir="ltr">
          Hoe Right Joystick Thumbwheel Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2531</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hoe Right Joystick Thumbwheel Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:3563</td>
        <td class="s5" dir="ltr">
          Drive Motor #1 Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3563</td>
        <td class="s5" dir="ltr">Drive Motor #1 Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:87, CID:1227</td>
        <td class="s5" dir="ltr">Retarder Lever: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1227</td>
        <td class="s5" dir="ltr">Retarder Lever</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3472</td>
        <td class="s5" dir="ltr">
          ARD Air Pressure Control System: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3472</td>
        <td class="s5" dir="ltr">ARD Air Pressure Control System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:49, CID:2606</td>
        <td class="s5" dir="ltr">
          Cylinder #3 Injector Actuator #2: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">2606</td>
        <td class="s5" dir="ltr">Cylinder #3 Injector Actuator #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:362, CID:3495</td>
        <td class="s5" dir="ltr">
          Ejector Cylinder Head End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3495</td>
        <td class="s5" dir="ltr">Ejector Cylinder Head End Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:362, CID:358</td>
        <td class="s5" dir="ltr">
          Implement Pilot Pressure Supply Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">358</td>
        <td class="s5" dir="ltr">Implement Pilot Pressure Supply Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:841</td>
        <td class="s5" dir="ltr">
          Right Rear Suspension Cylinder Pressure Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">841</td>
        <td class="s5" dir="ltr">Right Rear Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2461</td>
        <td class="s5" dir="ltr">
          ARD Fuel Pressure #1 Control: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2461</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Fuel Pressure Control Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:4752</td>
        <td class="s5" dir="ltr">
          Quick Coupler Solenoid #2: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4752</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:12615, CID:1076</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Bypass Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">12615</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1076</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Bypass Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:2204</td>
        <td class="s5" dir="ltr">
          Auxiliary Lever #1 Position Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2204</td>
        <td class="s5" dir="ltr">Auxiliary Lever #1 Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:352</td>
        <td class="s5" dir="ltr">Lift Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">352</td>
        <td class="s5" dir="ltr">Lift Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:36, CID:3387</td>
        <td class="s5" dir="ltr">
          EGR Differential Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">3387</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Engine Exhaust Gas Recirculation Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:5604</td>
        <td class="s5" dir="ltr">
          Right Travel Pedal Position Sensor Signal #1: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5604</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:342, CID:289</td>
        <td class="s5" dir="ltr">
          Fuel Pressure Sensor - Before Fuel Filter: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">342</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">289</td>
        <td class="s5" dir="ltr">Fuel Pressure Sensor ? before fuel filter</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2272</td>
        <td class="s5" dir="ltr">
          Combining Valve Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2272</td>
        <td class="s5" dir="ltr">Combining Valve Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:369, CID:3317</td>
        <td class="s5" dir="ltr">
          Medium Range Object Detection Sensor #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">369</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3317</td>
        <td class="s5" dir="ltr">Medium Object Detection Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:1076</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Bypass Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1076</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Bypass Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:75, CID:2319</td>
        <td class="s5" dir="ltr">
          Left Front Drive Motor Speed Sensor #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s6" dir="ltr">All-Wheel Drive Control</td>
        <td class="s6" dir="ltr">2319</td>
        <td class="s5" dir="ltr">Left Front Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:6078</td>
        <td class="s5" dir="ltr">
          Fuel/Water Separator Level Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6078</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:39, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:145, CID:75</td>
        <td class="s5" dir="ltr">
          Steering Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s5" dir="ltr">Steering Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:2452</td>
        <td class="s5" dir="ltr">
          DPF #1 Intake Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2452</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Intake Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:362, CID:1279</td>
        <td class="s5" dir="ltr">
          Ejector Forward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1279</td>
        <td class="s5" dir="ltr">Ejector Forward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:390, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:390, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1473</td>
        <td class="s5" dir="ltr">
          Steering Control Position Sensor #3: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1473</td>
        <td class="s5" dir="ltr">Steering Control Position Sensor #3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3111</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Line Heater #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3111</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Line Heater #2
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:374, CID:3111</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Line Heater #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">374</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3111</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Line Heater #2
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:81, CID:269</td>
        <td class="s5" dir="ltr">Sensor Power Supply: Voltage Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">269</td>
        <td class="s5" dir="ltr">Sensor Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:299, CID:562</td>
        <td class="s5" dir="ltr">
          Caterpillar Monitor System: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:87, CID:2448</td>
        <td class="s5" dir="ltr">
          Graphical Display Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">2448</td>
        <td class="s5" dir="ltr">Graphical Display Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:33, CID:562</td>
        <td class="s5" dir="ltr">
          Caterpillar Monitor System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:2683</td>
        <td class="s5" dir="ltr">
          Secondary Brake Pedal Position Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2683</td>
        <td class="s5" dir="ltr">Secondary Brake Pedal Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1143</td>
        <td class="s5" dir="ltr">Swing Right Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1143</td>
        <td class="s5" dir="ltr">Swing Right Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:623</td>
        <td class="s5" dir="ltr">Directional Switch: Failure</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">623</td>
        <td class="s5" dir="ltr">Directional Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:81, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:874</td>
        <td class="s5" dir="ltr">Mode Select Switch: Voltage Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">874</td>
        <td class="s5" dir="ltr">Mode Select Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:2813</td>
        <td class="s5" dir="ltr">
          Secondary Brake Accumulator Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">2813</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Secondary Brake Accumulator Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:487</td>
        <td class="s5" dir="ltr">
          3rd Lever Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">487</td>
        <td class="s5" dir="ltr">3rd Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:53, CID:96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">96</td>
        <td class="s5" dir="ltr">Fuel Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2156</td>
        <td class="s5" dir="ltr">
          Circle Sideshift Control Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2156</td>
        <td class="s5" dir="ltr">Circle Sideshift Control Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:39, CID:990</td>
        <td class="s5" dir="ltr">
          Right Material Height Paddle Sensor: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">990</td>
        <td class="s5" dir="ltr">Right Material Height Paddle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:34, CID:827</td>
        <td class="s5" dir="ltr">
          Left Exhaust Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">34</td>
        <td class="s6" dir="ltr">Engine Control #3</td>
        <td class="s6" dir="ltr">827</td>
        <td class="s5" dir="ltr">Left Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:1164</td>
        <td class="s5" dir="ltr">
          Right Travel Backward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1164</td>
        <td class="s5" dir="ltr">Right Travel Backward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">2426</td>
        <td class="s5" dir="ltr">Stick Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:406, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">406</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:588</td>
        <td class="s5" dir="ltr">
          Monitor System Display: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">588</td>
        <td class="s5" dir="ltr">Monitoring System Display</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:341, CID:2461</td>
        <td class="s5" dir="ltr">
          ARD Fuel Pressure #1 Control: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2461</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Fuel Pressure Control Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:263, CID:3002</td>
        <td class="s5" dir="ltr">
          Engine Exhaust NOx Level Sensor: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3002</td>
        <td class="s5" dir="ltr">Engine Exhaust NOx Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:407, CID:1628</td>
        <td class="s5" dir="ltr">
          Armrest Position Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">407</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1628</td>
        <td class="s5" dir="ltr">Armrest Position Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:297, CID:41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply: Voltage Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">41</td>
        <td class="s5" dir="ltr">8 Volt DC Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:263, CID:3548</td>
        <td class="s5" dir="ltr">
          Aftertreatment Cooling Fan Control Module: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3548</td>
        <td class="s5" dir="ltr">Aftertreatment Cooling Fan Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:3068</td>
        <td class="s5" dir="ltr">Beacon Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3068</td>
        <td class="s5" dir="ltr">Beacon Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2739</td>
        <td class="s5" dir="ltr">
          Turbocharger #2 Compressor Inlet Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2739</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Turbocharger #2 Compressor Inlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:444</td>
        <td class="s5" dir="ltr">Starter Motor Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">444</td>
        <td class="s5" dir="ltr">Starter Motor Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1163</td>
        <td class="s5" dir="ltr">
          Left Travel Backward Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1163</td>
        <td class="s5" dir="ltr">Left Travel Backward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:2075</td>
        <td class="s5" dir="ltr">
          Hydraulic System Valve ECM #1 CAN Data Link #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2075</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hydraulic System Valve ECM #1 CAN Data Link #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">773</td>
        <td class="s5" dir="ltr">Hoist Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:390, CID:3533</td>
        <td class="s5" dir="ltr">
          Rear Differential Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3533</td>
        <td class="s5" dir="ltr">Rear Differential Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:27, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1248</td>
        <td class="s5" dir="ltr">Retarder Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1248</td>
        <td class="s5" dir="ltr">Retarder Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:404, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">404</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:27, CID:1407</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 7: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1407</td>
        <td class="s5" dir="ltr">Transmission Solenoid 7</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:127</td>
        <td class="s5" dir="ltr">
          Transmission Oil Pressure Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">127</td>
        <td class="s5" dir="ltr">Transmission Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:36, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:462, CID:3242</td>
        <td class="s5" dir="ltr">
          Hazardous Voltage Indicator: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">462</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3242</td>
        <td class="s5" dir="ltr">High Voltage System Energized Indicator</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:39, CID:154</td>
        <td class="s5" dir="ltr">
          Left Drive Motor Speed Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">154</td>
        <td class="s5" dir="ltr">Left Drive Motor Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:91</td>
        <td class="s5" dir="ltr">
          Throttle Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">91</td>
        <td class="s5" dir="ltr">Throttle Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:1627</td>
        <td class="s5" dir="ltr">Fuel Pump Relay: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1627</td>
        <td class="s5" dir="ltr">Fuel Pump Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:392, CID:690</td>
        <td class="s5" dir="ltr">Right Brake Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">690</td>
        <td class="s5" dir="ltr">Right Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:113, CID:722</td>
        <td class="s5" dir="ltr">
          Secondary Brake Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">722</td>
        <td class="s5" dir="ltr">Secondary Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:1593</td>
        <td class="s5" dir="ltr">
          Attachment Valve #1 Extend Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1593</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #1 Extend Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1282</td>
        <td class="s5" dir="ltr">
          Apron Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1282</td>
        <td class="s5" dir="ltr">Apron Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:156, CID:1763</td>
        <td class="s5" dir="ltr">
          Operator Station Selector Switch loss of signal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">1763</td>
        <td class="s5" dir="ltr">Operator Station Selector Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:1120, CID:3556</td>
        <td class="s5" dir="ltr">
          Input/Output Module #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1120</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3556</td>
        <td class="s5" dir="ltr">Input/Output Module #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:2461</td>
        <td class="s5" dir="ltr">
          ARD Fuel Pressure #1 Control: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2461</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Aftertreatment Regeneration Device Fuel Pressure Control Actuator
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:369, CID:145</td>
        <td class="s5" dir="ltr">
          12 Volt DC Power Supply: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">369</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">145</td>
        <td class="s5" dir="ltr">12 Volt DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:967</td>
        <td class="s5" dir="ltr">Machine Application: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">967</td>
        <td class="s5" dir="ltr">Machine Application</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:707</td>
        <td class="s5" dir="ltr">
          Transmission Gear Actuator Up Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">707</td>
        <td class="s5" dir="ltr">Transmission Gear Actuator Up Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:3397</td>
        <td class="s5" dir="ltr">
          DPF #1 Soot Loading Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3397</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Diesel Particulate Filter #1 Soot Loading Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:781</td>
        <td class="s5" dir="ltr">Lighting Relay: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">781</td>
        <td class="s5" dir="ltr">Lighting Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:444</td>
        <td class="s5" dir="ltr">Starter Motor Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">444</td>
        <td class="s5" dir="ltr">Starter Motor Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:390, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:362, CID:1421</td>
        <td class="s5" dir="ltr">
          (Slave) Rear Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1421</td>
        <td class="s5" dir="ltr">(Slave) Rear Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:2321</td>
        <td class="s5" dir="ltr">
          Right Front Drive Motor Speed Sensor #1: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2321</td>
        <td class="s5" dir="ltr">Right Front Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1402</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1402</td>
        <td class="s5" dir="ltr">Transmission Solenoid 2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10113, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10113</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:113, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:2415</td>
        <td class="s5" dir="ltr">
          Implement Left Main Valve Supply Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2415</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Implement Left Main Valve Supply Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:389, CID:2976</td>
        <td class="s5" dir="ltr">
          Parking Brake Oil Pressure Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2976</td>
        <td class="s5" dir="ltr">Parking Brake Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:82, CID:562</td>
        <td class="s5" dir="ltr">Wrong Response from Cat Monitoring System</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5333</td>
        <td class="s5" dir="ltr">
          Swing Motor Angle Sensor Signal #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5333</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2155</td>
        <td class="s5" dir="ltr">
          Circle Drive Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2155</td>
        <td class="s5" dir="ltr">Circle Drive Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:36, CID:5</td>
        <td class="s5" dir="ltr">Cylinder #5 Injector: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Cylinder #5 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1281</td>
        <td class="s5" dir="ltr">
          Bowl Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1281</td>
        <td class="s5" dir="ltr">Bowl Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:87, CID:420</td>
        <td class="s5" dir="ltr">
          Secondary Steering Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">420</td>
        <td class="s5" dir="ltr">Secondary Steering Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:362, CID:1289</td>
        <td class="s5" dir="ltr">
          Cushion Hitch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1289</td>
        <td class="s5" dir="ltr">Cushion Hitch Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:156, CID:3599</td>
        <td class="s5" dir="ltr">
          Operator Station Steering Select Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">3599</td>
        <td class="s5" dir="ltr">Operator Station Steering Select Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:145, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:82, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage: Low</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:4328</td>
        <td class="s5" dir="ltr">
          Bidirectional Autoshift Selector Dial: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4328</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2</td>
        <td class="s5" dir="ltr">Cylinder #2 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Cylinder #2 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:87, CID:168</td>
        <td class="s5" dir="ltr">Electrical System Voltage: Low</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:342, CID:91</td>
        <td class="s5" dir="ltr">
          Throttle Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">342</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">91</td>
        <td class="s5" dir="ltr">Throttle Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:354</td>
        <td class="s5" dir="ltr">Raise Solenoid #1: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">354</td>
        <td class="s5" dir="ltr">Raise Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:2814</td>
        <td class="s5" dir="ltr">
          Quick Coupler Engage Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2814</td>
        <td class="s5" dir="ltr">Quick Coupler Engage Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:18</td>
        <td class="s5" dir="ltr">Fuel Control Valve: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">18</td>
        <td class="s5" dir="ltr">Fuel Control Valve</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:622</td>
        <td class="s5" dir="ltr">Upshift Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">622</td>
        <td class="s5" dir="ltr">Upshift Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2319</td>
        <td class="s5" dir="ltr">
          Left Front Drive Motor Speed Sensor #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2319</td>
        <td class="s5" dir="ltr">Left Front Drive Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:3284</td>
        <td class="s5" dir="ltr">
          Primary Steering System Steer Left Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3284</td>
        <td class="s5" dir="ltr">Primary Steering Sytem Steer Left Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2471</td>
        <td class="s5" dir="ltr">
          Cab Door Position Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2471</td>
        <td class="s5" dir="ltr">Cab Door Position Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:1421</td>
        <td class="s5" dir="ltr">
          (Slave) Rear Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1421</td>
        <td class="s5" dir="ltr">(Slave) Rear Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:709</td>
        <td class="s5" dir="ltr">
          Transmission Lockup Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">709</td>
        <td class="s5" dir="ltr">Transmission Lockup Clutch Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:341, CID:3112</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Line Heater #3: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3112</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Line Heater #3
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:81, CID:1484</td>
        <td class="s5" dir="ltr">
          Inching Pedal Switch: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">1484</td>
        <td class="s5" dir="ltr">Inching Pedal Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10112, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10112</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:134, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">134</td>
        <td class="s6" dir="ltr">Object Detection System</td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3559</td>
        <td class="s5" dir="ltr">
          Input/Output Module #4: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3559</td>
        <td class="s5" dir="ltr">Input/Output Module #4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:432, CID:1666</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #2 Pressure Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1666</td>
        <td class="s5" dir="ltr">Variable Relief Valve #2 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:3467</td>
        <td class="s5" dir="ltr">Main Power Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3467</td>
        <td class="s5" dir="ltr">Main Power Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:87, CID:1675</td>
        <td class="s5" dir="ltr">Solenoid Return #2: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1675</td>
        <td class="s5" dir="ltr">Solenoid Return #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:156, CID:989</td>
        <td class="s5" dir="ltr">
          Left Station Right Conveyor Speed Dial: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">989</td>
        <td class="s5" dir="ltr">Left Station Right Conveyor Speed Dial</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:364</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Head End Pressure Sensor: Abnormal Frequency, Pulse
          Width, or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">364</td>
        <td class="s5" dir="ltr">Lift Cylinder Head Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:1</td>
        <td class="s5" dir="ltr">Cylinder #1 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Cylinder #1 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1699</td>
        <td class="s5" dir="ltr">
          Joystick Forward/Reverse Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1699</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Joystick Forward/ Reverse Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1609</td>
        <td class="s5" dir="ltr">
          F2 Type Valve Load Sense Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1609</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            F2 Type Valve Load Sense Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:299, CID:2899</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #1 Displacement Sensor: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2899</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump #1 Displacement Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:1197</td>
        <td class="s5" dir="ltr">Blade Lower Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1197</td>
        <td class="s5" dir="ltr">Blade Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:870</td>
        <td class="s5" dir="ltr">
          Left Lift Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">870</td>
        <td class="s5" dir="ltr">Left Lift Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:113, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:351</td>
        <td class="s5" dir="ltr">
          Tilt Linkage Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">351</td>
        <td class="s5" dir="ltr">Tilt Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:2661</td>
        <td class="s5" dir="ltr">
          Cab Air Temperature Control: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2661</td>
        <td class="s5" dir="ltr">Cab Air Temperature Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:299, CID:2142</td>
        <td class="s5" dir="ltr">
          Straight Travel Pedal Position Sensor: Failure
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2142</td>
        <td class="s5" dir="ltr">Straight Travel Pedal Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4770</td>
        <td class="s5" dir="ltr">
          Input/Output Module #5: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4770</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:402, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:297, CID:3415</td>
        <td class="s5" dir="ltr">
          Direction Selector #1: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3415</td>
        <td class="s5" dir="ltr">Direction Selector #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:162, CID:800</td>
        <td class="s5" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">162</td>
        <td class="s6" dir="ltr">Communication Gateway #2</td>
        <td class="s6" dir="ltr">800</td>
        <td class="s5" dir="ltr">VIMS Main Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:4686</td>
        <td class="s5" dir="ltr">
          Ground Level Front Right Station Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4686</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:434, CID:4344</td>
        <td class="s5" dir="ltr">
          Screed Heating Zone #11 Element: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4344</td>
        <td class="s5" dir="ltr">Screed Heating Zone #11 Element</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10119, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10119</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:590</td>
        <td class="s5" dir="ltr">Engine Control Module: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:33, CID:1422</td>
        <td class="s5" dir="ltr">
          (Slave) Front Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">33</td>
        <td class="s6" dir="ltr">Engine Control #2</td>
        <td class="s6" dir="ltr">1422</td>
        <td class="s5" dir="ltr">(Slave) Front Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1197</td>
        <td class="s5" dir="ltr">Blade Lower Solenoid: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1197</td>
        <td class="s5" dir="ltr">Blade Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:2987</td>
        <td class="s5" dir="ltr">
          Brake Charge Pressure Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2987</td>
        <td class="s5" dir="ltr">Brake Charge Pressure Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:768, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">768</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:156, CID:1733</td>
        <td class="s5" dir="ltr">
          Propel Mode Shift Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">1733</td>
        <td class="s5" dir="ltr">Propel Mode Shift Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:3557</td>
        <td class="s5" dir="ltr">
          Input/Output Module #2: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3557</td>
        <td class="s5" dir="ltr">Input/Output Module #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:434, CID:4446</td>
        <td class="s5" dir="ltr">
          Screed Left End Gate Lower Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4446</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3631</td>
        <td class="s5" dir="ltr">
          Joystick Heater Internal Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3631</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Joystick Heater Internal Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:885</td>
        <td class="s5" dir="ltr">
          Pressure Compensation Override Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">885</td>
        <td class="s5" dir="ltr">Pressure Compensation Override Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3528</td>
        <td class="s5" dir="ltr">
          Barometric Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3528</td>
        <td class="s5" dir="ltr">Barometric Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1881</td>
        <td class="s5" dir="ltr">
          Winch Control Handle Spool In/Out Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1881</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Winch Control Handle Spool In/Out Position Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:2740</td>
        <td class="s5" dir="ltr">
          Turbocharger #3 Compressor Inlet Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2740</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Turbocharger #3 Compressor Inlet Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:6039</td>
        <td class="s5" dir="ltr">
          Air Compressor Inlet Valve Position Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6039</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:402, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:3405</td>
        <td class="s5" dir="ltr">EGR Valve Control: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3405</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Exhaust Gas Recirculation Valve Control
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:389, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5543</td>
        <td class="s5" dir="ltr">
          Right Stabilizer Lever Position Signal #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5543</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:116, CID:714</td>
        <td class="s5" dir="ltr">
          Auto Retarder Pressure Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">714</td>
        <td class="s5" dir="ltr">Auto Retarder Pressure Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:6643</td>
        <td class="s5" dir="ltr">
          Machine Inertial Measurement Sensor:Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6643</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:725</td>
        <td class="s5" dir="ltr">Hoist Lower Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">725</td>
        <td class="s5" dir="ltr">Hoist Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:2199</td>
        <td class="s5" dir="ltr">
          Secondary Steering Request Signal Line: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2199</td>
        <td class="s5" dir="ltr">Secondary Steering Request Signal Line</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:389, CID:2988</td>
        <td class="s5" dir="ltr">
          Brake Charge Pressure Sensor #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2988</td>
        <td class="s5" dir="ltr">Brake Charge Pressure Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3573</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Pump #1 Negative Flow Control Pressure Reducer Pressure Sensor:
            Voltage Above Normal
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3573</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 443px; left: -1px">
            Pump #1 Negative Flow Control Pressure Reducer Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:297, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:4363</td>
        <td class="s5" dir="ltr">
          Interaxle Lock Supply Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4363</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:19, MID:299, CID:246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link: Data Error</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">19</td>
        <td class="s5" dir="ltr">Data Error</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:888</td>
        <td class="s5" dir="ltr">
          Ripper Shank Lower Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">888</td>
        <td class="s5" dir="ltr">Ripper Shank Lower Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2976</td>
        <td class="s5" dir="ltr">
          Parking Brake Oil Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2976</td>
        <td class="s5" dir="ltr">Parking Brake Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:3655</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 Intake NOx Level Sensor: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3655</td>
        <td class="s5" dir="ltr">Aftertreatment #1 Intake NOx Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:2987</td>
        <td class="s5" dir="ltr">
          Brake Charge Pressure Sensor #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2987</td>
        <td class="s5" dir="ltr">Brake Charge Pressure Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2856</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump #2 Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2856</td>
        <td class="s5" dir="ltr">Main Hydraulic Pump #2 Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:36, CID:1937</td>
        <td class="s5" dir="ltr">
          Engine Coolant Flow Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">1937</td>
        <td class="s5" dir="ltr">Engine Coolant Flow Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:390, CID:420</td>
        <td class="s5" dir="ltr">
          Secondary Steering Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">420</td>
        <td class="s5" dir="ltr">Secondary Steering Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:3657</td>
        <td class="s5" dir="ltr">
          Operator In Seat Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">3657</td>
        <td class="s5" dir="ltr">Operator In Seat Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:2350</td>
        <td class="s5" dir="ltr">
          Left Exhaust #2 Temperature: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">2350</td>
        <td class="s5" dir="ltr">Left Exhaust #2 Temperature</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:434, CID:246</td>
        <td class="s5" dir="ltr">
          Proprietary CAN Data Link: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">246</td>
        <td class="s5" dir="ltr">Proprietary CAN Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:390, CID:2904</td>
        <td class="s5" dir="ltr">
          Front Wiper Control Position Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2904</td>
        <td class="s5" dir="ltr">Front Wiper Control Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2114</td>
        <td class="s5" dir="ltr">
          Blade Control Handle Trigger Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2114</td>
        <td class="s5" dir="ltr">Blade Control Handle Trigger Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:87, CID:1402</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 2: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">1402</td>
        <td class="s5" dir="ltr">Transmission Solenoid 2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:3268</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Supply Input: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3268</td>
        <td class="s5" dir="ltr">Air Conditioner Compressor Supply Input</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5541</td>
        <td class="s5" dir="ltr">
          Left Stabilizer Lever Position Signal #1: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5541</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:304, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:81, CID:177</td>
        <td class="s5" dir="ltr">
          Transmission Oil Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">177</td>
        <td class="s5" dir="ltr">Transmission Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2152</td>
        <td class="s5" dir="ltr">
          Wheel Lean Control Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2152</td>
        <td class="s5" dir="ltr">Wheel Lean Control Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1579</td>
        <td class="s5" dir="ltr">
          Transmission Lube Flow Valve Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1579</td>
        <td class="s5" dir="ltr">Transmission Lube Flow Valve Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:13, MID:341, CID:2458</td>
        <td class="s5" dir="ltr">
          DPF #1 Differential Pressure Sensor: Out of Calibration
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">13</td>
        <td class="s5" dir="ltr">Out of Calibration</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2458</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:2458</td>
        <td class="s5" dir="ltr">
          DPF #1 Differential Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2458</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:161, CID:1273</td>
        <td class="s5" dir="ltr">
          Chassis Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">161</td>
        <td class="s6" dir="ltr">Communication Gateway #1</td>
        <td class="s6" dir="ltr">1273</td>
        <td class="s5" dir="ltr">Chassis Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">811</td>
        <td class="s5" dir="ltr">Gauge Cluster #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:19, MID:299, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Data Error</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">19</td>
        <td class="s5" dir="ltr">Data Error</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:27, CID:1403</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 3: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1403</td>
        <td class="s5" dir="ltr">Transmission Solenoid 3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:82, CID:2252</td>
        <td class="s5" dir="ltr">
          Machine Articulation Angle Sensor #2: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2252</td>
        <td class="s5" dir="ltr">Machine Articulation Angle Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:597</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump Discharge Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">597</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump Discharge Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:149, CID:2458</td>
        <td class="s5" dir="ltr">
          DPF #1 Differential Pressure Sensor: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">149</td>
        <td class="s6" dir="ltr">Engine Aftertreatment Control #1</td>
        <td class="s6" dir="ltr">2458</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Particulate Trap #1 Differential Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:75, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s6" dir="ltr">All-Wheel Drive Control</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:113, CID:1403</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 3: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">1403</td>
        <td class="s5" dir="ltr">Transmission Solenoid 3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:1120, CID:3557</td>
        <td class="s5" dir="ltr">
          Input/Output Module #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1120</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3557</td>
        <td class="s5" dir="ltr">Input/Output Module #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3090</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Pressure #1 Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3090</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Dosing Reagent Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:2200</td>
        <td class="s5" dir="ltr">
          Left Steering Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2200</td>
        <td class="s5" dir="ltr">Left Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3427</td>
        <td class="s5" dir="ltr">
          Aftertreatment Fuel Pump Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3427</td>
        <td class="s5" dir="ltr">Aftertreatment Fuel Pump Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:352</td>
        <td class="s5" dir="ltr">Lift Lever Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">352</td>
        <td class="s5" dir="ltr">Lift Lever Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:12615, CID:458</td>
        <td class="s5" dir="ltr">
          Tilt Cylinder Rod End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">12615</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">458</td>
        <td class="s5" dir="ltr">Tilt Cylinder Rod Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:50952, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor 1:Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:342, CID:460</td>
        <td class="s5" dir="ltr">
          Fuel Pressure Sensor - After Fuel Filter: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">342</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">460</td>
        <td class="s5" dir="ltr">Fuel Pressure Sensor ? after fuel filter</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1567</td>
        <td class="s5" dir="ltr">
          Implement Pump to Tank Bypass Solenoid #1: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1567</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Implement Pump to Tank Bypass Solenoid #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:779</td>
        <td class="s5" dir="ltr">
          Cab Air Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">779</td>
        <td class="s5" dir="ltr">Cab Air Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1163</td>
        <td class="s5" dir="ltr">
          Left Travel Backward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1163</td>
        <td class="s5" dir="ltr">Left Travel Backward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:1603</td>
        <td class="s5" dir="ltr">
          Machine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1603</td>
        <td class="s5" dir="ltr">Machine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:432, CID:4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4576</td>
        <td class="s5" dir="ltr">Bucket Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:350</td>
        <td class="s5" dir="ltr">
          Lift Linkage Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">350</td>
        <td class="s5" dir="ltr">Lift Linkage Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:3564</td>
        <td class="s5" dir="ltr">
          Drive Motor #2 Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3564</td>
        <td class="s5" dir="ltr">Drive Motor #2 Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:1, MID:113, CID:1469</td>
        <td class="s5" dir="ltr">Steering Motor Speed Sensor #1: Low</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s5" dir="ltr">Low; most severe</td>
        <td class="s6" dir="ltr">113</td>
        <td class="s6" dir="ltr">
          Track Type Tractor (TTT) Transmission Control
        </td>
        <td class="s6" dir="ltr">1469</td>
        <td class="s5" dir="ltr">Steering Motor Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:1965</td>
        <td class="s5" dir="ltr">
          Tilt Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1965</td>
        <td class="s5" dir="ltr">Tilt Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:21, MID:49, CID:460</td>
        <td class="s5" dir="ltr">
          Fuel Pressure Sensor - After Fuel Filter: Data Drifted Low
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">21</td>
        <td class="s5" dir="ltr">Data Drifted Low</td>
        <td class="s6" dir="ltr">49</td>
        <td class="s6" dir="ltr">VIMS Main Module</td>
        <td class="s6" dir="ltr">460</td>
        <td class="s5" dir="ltr">Fuel Pressure Sensor ? after fuel filter</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:36, CID:828</td>
        <td class="s5" dir="ltr">
          Right Exhaust Temperature Sensor: Abnormal Frequency, Pulse Width, or
          Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">828</td>
        <td class="s5" dir="ltr">Right Exhaust Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:3585</td>
        <td class="s5" dir="ltr">Switch Panel #4: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3585</td>
        <td class="s5" dir="ltr">Switch Panel #4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:362, CID:4249</td>
        <td class="s5" dir="ltr">
          Bowl Cylinder Rod End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4249</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:362, CID:1275</td>
        <td class="s5" dir="ltr">Bowl Up Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1275</td>
        <td class="s5" dir="ltr">Bowl Up Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:702</td>
        <td class="s5" dir="ltr">
          Transmission Gear Lever Selector Sensor (Switch): Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3548</td>
        <td class="s5" dir="ltr">
          Aftertreatment Cooling Fan Control Module: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3548</td>
        <td class="s5" dir="ltr">Aftertreatment Cooling Fan Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:3862</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Return Valve Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3862</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 DEF Return Valve Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:879</td>
        <td class="s5" dir="ltr">
          Ripper Shank In/Out Lever Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">879</td>
        <td class="s5" dir="ltr">Ripper Shank In/Out Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:87, CID:379</td>
        <td class="s5" dir="ltr">
          Machine Auto Lube Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">379</td>
        <td class="s5" dir="ltr">Machine Auto Lube Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:299, CID:3565</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Transmission Input #1 Speed #1 Sensor: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3565</td>
        <td class="s5" dir="ltr">Transmission Input #1 Speed #1 Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:439</td>
        <td class="s5" dir="ltr">
          Hydraulic Control Valve Warm Up Solenoid #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">439</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hydraulic Control Valve Warm Up Solenoid #2
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:263, CID:3372</td>
        <td class="s5" dir="ltr">
          Engine Charge Air Cooler #1 Outlet Temperature Sensor: Voltage Below
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3372</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Engine Charge Air Cooler #1 Outlet Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:36, CID:291</td>
        <td class="s5" dir="ltr">
          Engine Cooling Fan Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">291</td>
        <td class="s5" dir="ltr">Engine Cooling Fan Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:2466</td>
        <td class="s5" dir="ltr">
          Engine Aftertreatment Control #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2466</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment Regeneration Device Control
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:304, CID:145</td>
        <td class="s5" dir="ltr">
          12 Volt DC Power Supply: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">304</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">145</td>
        <td class="s5" dir="ltr">12 Volt DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:145, CID:2113</td>
        <td class="s5" dir="ltr">
          Operator In Seat Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">2113</td>
        <td class="s5" dir="ltr">Operator In Seat Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:2815</td>
        <td class="s5" dir="ltr">
          Quick Coupler Disengage Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2815</td>
        <td class="s5" dir="ltr">Quick Coupler Disengage Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:420</td>
        <td class="s5" dir="ltr">
          Secondary Steering Relay: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">420</td>
        <td class="s5" dir="ltr">Secondary Steering Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:4019</td>
        <td class="s5" dir="ltr">
          Air Conditioner Suction Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4019</td>
        <td class="s5" dir="ltr">Air Conditioner Suction Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:36, CID:248</td>
        <td class="s5" dir="ltr">@CatDatalinkLong@ not communicating</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:362, CID:1280</td>
        <td class="s5" dir="ltr">
          Ejector Reverse Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1280</td>
        <td class="s5" dir="ltr">Ejector Reverse Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:263, CID:248</td>
        <td class="s5" dir="ltr">CAT Data Link: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">248</td>
        <td class="s5" dir="ltr">CAT Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:1163</td>
        <td class="s5" dir="ltr">
          Left Travel Backward Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1163</td>
        <td class="s5" dir="ltr">Left Travel Backward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:39, CID:1956</td>
        <td class="s5" dir="ltr">
          Bucket Cylinder Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1956</td>
        <td class="s5" dir="ltr">Bucket Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2246</td>
        <td class="s5" dir="ltr">
          Glow Plug Start Aid Relay: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2246</td>
        <td class="s5" dir="ltr">Glow Plug Start Aid Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:264, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:50952, CID:468</td>
        <td class="s5" dir="ltr">
          Service Brake Pedal Position Sensor:Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">468</td>
        <td class="s5" dir="ltr">Service Brake Pedal Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:389, CID:70</td>
        <td class="s5" dir="ltr">Parking Brake Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:81, CID:673</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #2: Abnormal Frequency, Pulse Width,
          or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">673</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:3472</td>
        <td class="s5" dir="ltr">
          ARD Air Pressure Control System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3472</td>
        <td class="s5" dir="ltr">ARD Air Pressure Control System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1165</td>
        <td class="s5" dir="ltr">
          Right Travel Forward Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1165</td>
        <td class="s5" dir="ltr">Right Travel Forward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:272, CID:490</td>
        <td class="s5" dir="ltr">
          Implement Lockout Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">490</td>
        <td class="s5" dir="ltr">Implement Lockout Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1100</td>
        <td class="s5" dir="ltr">
          Cross Axle Lock Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1100</td>
        <td class="s5" dir="ltr">Cross Axle Lock Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:487</td>
        <td class="s5" dir="ltr">
          3rd Lever Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">487</td>
        <td class="s5" dir="ltr">3rd Lever Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:272, CID:1593</td>
        <td class="s5" dir="ltr">
          Attachment Valve #1 Extend Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1593</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #1 Extend Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:82, CID:800</td>
        <td class="s5" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">800</td>
        <td class="s5" dir="ltr">VIMS Main Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:341, CID:3820</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Controller #1: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">341</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3820</td>
        <td class="s5" dir="ltr">Aftertreatment #1 DEF Controller #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:2153</td>
        <td class="s5" dir="ltr">
          Blade Pitch Control Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2153</td>
        <td class="s5" dir="ltr">Blade Pitch Control Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:390, CID:2663</td>
        <td class="s5" dir="ltr">
          Cab Ventilation Duct Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2663</td>
        <td class="s5" dir="ltr">Cab Ventilation Duct Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1403</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 3: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1403</td>
        <td class="s5" dir="ltr">Transmission Solenoid 3</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:156, CID:1725</td>
        <td class="s5" dir="ltr">
          Left Station Decelerator Pedal Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">1725</td>
        <td class="s5" dir="ltr">Left Station Decelerator Pedal Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:39, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:423, CID:1603</td>
        <td class="s5" dir="ltr">
          Machine Control Module: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">423</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1603</td>
        <td class="s5" dir="ltr">Machine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:10</td>
        <td class="s5" dir="ltr">
          Cylinder #10 Injector: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">10</td>
        <td class="s5" dir="ltr">Cylinder #10 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:263, CID:3468</td>
        <td class="s5 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 475px; left: -1px">
            Aftertreatment #1 Identification Number Module: Abnormal Frequency,
            Pulse Width, or Period
          </div>
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3468</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 Identification Number Module
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:1427</td>
        <td class="s5" dir="ltr">Machine Lockout Lamp: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1427</td>
        <td class="s5" dir="ltr">Machine Lockout Lamp</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:81, CID:190</td>
        <td class="s5" dir="ltr">
          Engine Speed Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:263, CID:3548</td>
        <td class="s5" dir="ltr">
          Aftertreatment Cooling Fan Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3548</td>
        <td class="s5" dir="ltr">Aftertreatment Cooling Fan Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:82, CID:597</td>
        <td class="s5" dir="ltr">
          Main Hydraulic Pump Discharge Pressure Sensor: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">597</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Main Hydraulic Pump Discharge Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:1166</td>
        <td class="s5" dir="ltr">
          Left Travel Forward Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1166</td>
        <td class="s5" dir="ltr">Left Travel Forward Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:39, CID:629</td>
        <td class="s5" dir="ltr">Neutralizer Switch short to ground</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">39</td>
        <td class="s6" dir="ltr">Machine Control Module</td>
        <td class="s6" dir="ltr">629</td>
        <td class="s5" dir="ltr">Neutralizer Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:2076</td>
        <td class="s5" dir="ltr">
          Hydraulic System Valve ECM #2 CAN Data Link #1: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2076</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Hydraulic System Valve ECM #2 CAN Data Link #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:144</td>
        <td class="s5" dir="ltr">Backup Alarm Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">144</td>
        <td class="s5" dir="ltr">Backup Alarm Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:11, MID:36, CID:164</td>
        <td class="s5" dir="ltr">
          Injector Actuation Pressure: Other Failure Mode
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">11</td>
        <td class="s5" dir="ltr">Other Failure Mode</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">164</td>
        <td class="s5" dir="ltr">Injector Actuation Pressure</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:267</td>
        <td class="s5" dir="ltr">
          Remote Shutdown Input: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">267</td>
        <td class="s5" dir="ltr">Remote Shutdown Input</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:36, CID:190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">190</td>
        <td class="s5" dir="ltr">Engine Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:735</td>
        <td class="s5" dir="ltr">Heavy Lift Solenoid: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">735</td>
        <td class="s5" dir="ltr">Heavy lift solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:84</td>
        <td class="s5" dir="ltr">Ground Speed Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">84</td>
        <td class="s5" dir="ltr">Ground Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:420, CID:3994</td>
        <td class="s5" dir="ltr">
          Drill Feed Down Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">420</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3994</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:134, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">134</td>
        <td class="s6" dir="ltr">Object Detection System</td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:53, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">53</td>
        <td class="s6" dir="ltr">Graphical Display Module</td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:429</td>
        <td class="s5" dir="ltr">
          Steering Pump Oil Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">429</td>
        <td class="s5" dir="ltr">Steering Pump Oil Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:50952, CID:702</td>
        <td class="s5" dir="ltr">
          Transmission Gear Lever Selector Sensor (Switch):Erratic,
          Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">702</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Gear Lever Selector Sensor (Switch)
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:392, CID:1017</td>
        <td class="s5" dir="ltr">
          Rear Brake Supply Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">392</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1017</td>
        <td class="s5" dir="ltr">Rear Brake Supply Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1708</td>
        <td class="s5" dir="ltr">
          Right Drive Motor Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1708</td>
        <td class="s5" dir="ltr">Right Drive Motor Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:87, CID:378</td>
        <td class="s5" dir="ltr">
          Machine Auto Lube Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">378</td>
        <td class="s5" dir="ltr">Machine Auto Lube Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:432, CID:1594</td>
        <td class="s5" dir="ltr">
          Attachment Valve #2 Extend Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1594</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #2 Extend Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:2183</td>
        <td class="s5" dir="ltr">
          Payload Monitoring System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2183</td>
        <td class="s5" dir="ltr">Payload Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:156, CID:2551</td>
        <td class="s5" dir="ltr">
          Left Hopper Raise Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">2551</td>
        <td class="s5" dir="ltr">Left Hopper Raise Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:31, CID:596</td>
        <td class="s5" dir="ltr">Implement Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">31</td>
        <td class="s6" dir="ltr">Electronic Scraper Transmission Control</td>
        <td class="s6" dir="ltr">596</td>
        <td class="s5" dir="ltr">Implement Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:87, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:1779</td>
        <td class="s5" dir="ltr">
          Fuel Rail #1 Pressure Valve Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1779</td>
        <td class="s5" dir="ltr">Fuel Rail Pressure Valve Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:81, CID:585</td>
        <td class="s5" dir="ltr">
          Transmission Output Speed Sensor #1: Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">585</td>
        <td class="s5" dir="ltr">Transmission Output Speed Sensor #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:2, MID:82, CID:1952</td>
        <td class="s5" dir="ltr">
          Chassis Angle Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">2</td>
        <td class="s5" dir="ltr">Erratic, Intermittent, or Incorrect</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:272, CID:247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">247</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:82, CID:489</td>
        <td class="s5" dir="ltr">
          Implement Function Select Switch: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">489</td>
        <td class="s5" dir="ltr">Implement Function Select Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:299, CID:3634</td>
        <td class="s5" dir="ltr">Boom Light Relay: Current Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3634</td>
        <td class="s5" dir="ltr">Boom Light Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:389, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:1404</td>
        <td class="s5" dir="ltr">
          Transmission Solenoid 4: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">1404</td>
        <td class="s5" dir="ltr">Transmission Solenoid 4</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2624</td>
        <td class="s5" dir="ltr">
          Cylinder #12 Injector Actuator #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2624</td>
        <td class="s5" dir="ltr">Cylinder #12 Injector Actuator #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:50952, CID:4</td>
        <td class="s5" dir="ltr">Injector Cylinder #4:Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Cylinder #4 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:8, MID:36, CID:264</td>
        <td class="s5" dir="ltr">
          Deceleration Throttle: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">8</td>
        <td class="s5" dir="ltr">Abnormal Frequency, Pulse Width, or Period</td>
        <td class="s6" dir="ltr">36</td>
        <td class="s6" dir="ltr">Engine Control #1</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s5" dir="ltr">Deceleration Throttle</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:1609</td>
        <td class="s5" dir="ltr">
          F2 Type Valve Load Sense Pressure Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1609</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            F2 Type Valve Load Sense Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:82, CID:296</td>
        <td class="s5" dir="ltr">Transmission Control: Special Instruction</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">296</td>
        <td class="s5" dir="ltr">Transmission Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10117, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10117</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:82, CID:2416</td>
        <td class="s5" dir="ltr">
          Implement Right Main Valve Supply Pressure Sensor: Voltage Below
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">2416</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Implement Right Main Valve Supply Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:12, MID:82, CID:590</td>
        <td class="s5" dir="ltr">Engine Control Module: Failure</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">12</td>
        <td class="s5" dir="ltr">Failure</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:98</td>
        <td class="s5" dir="ltr">
          Engine Oil Level Sensor: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">98</td>
        <td class="s5" dir="ltr">Engine Oil Level Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:3428</td>
        <td class="s5" dir="ltr">
          Generator Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3428</td>
        <td class="s5" dir="ltr">Generator Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:3383</td>
        <td class="s5" dir="ltr">Autoshift Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3383</td>
        <td class="s5" dir="ltr">Autoshift Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:145, CID:2203</td>
        <td class="s5" dir="ltr">
          Primary Steering Valve Spool Displacement Signal Line: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">2203</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Steering Valve Control Module Spool Position Signal Lines
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:161, CID:1888</td>
        <td class="s5" dir="ltr">Local GPS Antenna: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">161</td>
        <td class="s6" dir="ltr">Communication Gateway #1</td>
        <td class="s6" dir="ltr">1888</td>
        <td class="s5" dir="ltr">Local GPS Antenna</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:87, CID:558</td>
        <td class="s5" dir="ltr">Auto Lube Relay: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">87</td>
        <td class="s6" dir="ltr">Chassis Control Module</td>
        <td class="s6" dir="ltr">558</td>
        <td class="s5" dir="ltr">Auto Lube Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:389, CID:826</td>
        <td class="s5" dir="ltr">
          Torque Converter Oil Temperature Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">389</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">826</td>
        <td class="s5" dir="ltr">Torque Converter Oil Temperature Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2237</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #1 Port B Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2237</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #1 Port B Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:156, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:145, CID:2466</td>
        <td class="s5" dir="ltr">
          Engine Aftertreatment Control #1: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">145</td>
        <td class="s6" dir="ltr">Electronic Implement Control #2</td>
        <td class="s6" dir="ltr">2466</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment Regeneration Device Control
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:322</td>
        <td class="s5" dir="ltr">Shutdown Relay open/short to ground</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">322</td>
        <td class="s5" dir="ltr">Engine Shutdown Relay</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:4</td>
        <td class="s5" dir="ltr">Cylinder #4 Injector: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Cylinder #4 Injector</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:342, CID:91</td>
        <td class="s5" dir="ltr">
          Throttle Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">342</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">91</td>
        <td class="s5" dir="ltr">Throttle Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:355</td>
        <td class="s5" dir="ltr">Lower Solenoid #1: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">355</td>
        <td class="s5" dir="ltr">Lower Solenoid #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:263, CID:3090</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Pressure #1 Sensor: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3090</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Dosing Reagent Pressure Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:485</td>
        <td class="s5" dir="ltr">
          Engine Fan Reversing Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">485</td>
        <td class="s5" dir="ltr">Engine Fan Reversing Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:362, CID:1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1952</td>
        <td class="s5" dir="ltr">Chassis Angle Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:1674</td>
        <td class="s5" dir="ltr">Solenoid Return #1: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1674</td>
        <td class="s5" dir="ltr">Solenoid Return #1</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:74, CID:839</td>
        <td class="s5" dir="ltr">
          Right Front Strut Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">74</td>
        <td class="s6" dir="ltr">Payload Control System</td>
        <td class="s6" dir="ltr">839</td>
        <td class="s5" dir="ltr">Right Front Strut Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:362, CID:84</td>
        <td class="s5" dir="ltr">Ground Speed Sensor: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">362</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">84</td>
        <td class="s5" dir="ltr">Ground Speed Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:390, CID:2811</td>
        <td class="s5" dir="ltr">
          Cab Blower Speed Control: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2811</td>
        <td class="s5" dir="ltr">Cab Blower Speed Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:434, CID:4060</td>
        <td class="s5" dir="ltr">
          Screed Heating Zone #5 Temperature Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4060</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10121, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10121</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:134, CID:3318</td>
        <td class="s5" dir="ltr">
          Medium Range Object Detection Sensor #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">134</td>
        <td class="s6" dir="ltr">Object Detection System</td>
        <td class="s6" dir="ltr">3318</td>
        <td class="s5" dir="ltr">Medium Object Detection Sensor #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:264, CID:3797</td>
        <td class="s5" dir="ltr">
          Operator Seat Belt Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">264</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3797</td>
        <td class="s5" dir="ltr">Operator Seat Belt Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2811</td>
        <td class="s5" dir="ltr">
          Cab Blower Speed Control: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2811</td>
        <td class="s5" dir="ltr">Cab Blower Speed Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:50952, CID:3444</td>
        <td class="s5" dir="ltr">
          Rear Brake Cooling Oil Diverter Solenoid:Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">50952</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3444</td>
        <td class="s5" dir="ltr">Rear Brake Cooling Oil Diverter Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:432, CID:1665</td>
        <td class="s5" dir="ltr">
          Variable Relief Valve #1 Pressure Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">432</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1665</td>
        <td class="s5" dir="ltr">Variable Relief Valve #1 Pressure Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:272, CID:1884</td>
        <td class="s5" dir="ltr">
          Winch Spool In Solenoid: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1884</td>
        <td class="s5" dir="ltr">Winch Spool In Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2243</td>
        <td class="s5" dir="ltr">
          Loader Auxiliary Valve Port B Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2243</td>
        <td class="s5" dir="ltr">Loader Auxiliary Valve Port B Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:156, CID:1723</td>
        <td class="s5" dir="ltr">
          Left Station Propel Speed Dial Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">156</td>
        <td class="s6" dir="ltr">Operator Station #1 Module</td>
        <td class="s6" dir="ltr">1723</td>
        <td class="s5" dir="ltr">Left Station Propel Speed Dial Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:364</td>
        <td class="s5" dir="ltr">
          Lift Cylinder Head End Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">364</td>
        <td class="s5" dir="ltr">Lift Cylinder Head Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:263, CID:2606</td>
        <td class="s5" dir="ltr">
          Cylinder #3 Injector Actuator #2: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2606</td>
        <td class="s5" dir="ltr">Cylinder #3 Injector Actuator #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:75, CID:517</td>
        <td class="s5" dir="ltr">
          All Wheel Drive Switch: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">75</td>
        <td class="s6" dir="ltr">All-Wheel Drive Control</td>
        <td class="s6" dir="ltr">517</td>
        <td class="s5" dir="ltr">All Wheel Drive Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:1700</td>
        <td class="s5" dir="ltr">
          Joystick Left/Right Position Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1700</td>
        <td class="s5" dir="ltr">Joystick Left/ Right Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:497</td>
        <td class="s5" dir="ltr">Tilt Right Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">497</td>
        <td class="s5" dir="ltr">Tilt Right Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:272, CID:1482</td>
        <td class="s5" dir="ltr">
          10 Volt Sensor DC Power Supply: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1482</td>
        <td class="s5" dir="ltr">10 Volt Sensor DC Power Supply</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:1797</td>
        <td class="s5" dir="ltr">
          Fuel Rail Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1797</td>
        <td class="s5" dir="ltr">Fuel Rail Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:81, CID:70</td>
        <td class="s5" dir="ltr">Parking Brake Switch: Voltage Above Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">81</td>
        <td class="s6" dir="ltr">Transmission Control</td>
        <td class="s6" dir="ltr">70</td>
        <td class="s5" dir="ltr">Parking Brake Switch</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:299, CID:562</td>
        <td class="s5" dir="ltr">
          Caterpillar Monitor System: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">562</td>
        <td class="s5" dir="ltr">Caterpillar Monitoring System</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:402, CID:533</td>
        <td class="s5" dir="ltr">Brake Control: Abnormal Update Rate</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">402</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">533</td>
        <td class="s5" dir="ltr">Brake Control</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:400, CID:1891</td>
        <td class="s5" dir="ltr">
          Theft Deterrent Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">400</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1891</td>
        <td class="s5" dir="ltr">Theft Deterrent Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:4482</td>
        <td class="s5" dir="ltr">
          Bucket Cylinder Extend Pilot Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4482</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:297, CID:4686</td>
        <td class="s5" dir="ltr">
          Ground Level Front Right Station Keypad: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4686</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:10114, CID:215</td>
        <td class="s5" dir="ltr">
          Communication with machine could not be established:Abnormal Update
          Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">10114</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">215</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1198</td>
        <td class="s5" dir="ltr">Blade Raise Solenoid: Current Below Normal</td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1198</td>
        <td class="s5" dir="ltr">Blade Raise Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:272, CID:2671</td>
        <td class="s5" dir="ltr">
          Air Conditioner Compressor Clutch Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2671</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Air Conditioner Compressor Clutch Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:7, MID:297, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Not Responding Properly
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">7</td>
        <td class="s5" dir="ltr">Not Responding Properly</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:2244</td>
        <td class="s5" dir="ltr">
          Hoe Auxiliary Valve #2 Port A Solenoid: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2244</td>
        <td class="s5" dir="ltr">Hoe Auxiliary Valve #2 Port A Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:297, CID:6187</td>
        <td class="s5" dir="ltr">
          Cab Air Heater Engine Coolant Valve Position Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">6187</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:299, CID:3653</td>
        <td class="s5" dir="ltr">
          Steering Pump Oil Pressure #2 Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3653</td>
        <td class="s5" dir="ltr">Steering Pump Oil Pressure #2 Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:390, CID:5804</td>
        <td class="s5" dir="ltr">
          Output Transfer Gear Lube Oil Relief Valve Solenoid: Current Below
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">390</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5804</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:886</td>
        <td class="s5" dir="ltr">
          Ripper Shank In Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">886</td>
        <td class="s5" dir="ltr">Ripper Shank In Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:272, CID:2348</td>
        <td class="s5" dir="ltr">
          SAE J1939 Data Link #2: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">272</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">2348</td>
        <td class="s5" dir="ltr">SAE J1939 Data Link #2</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:434, CID:4449</td>
        <td class="s5" dir="ltr">
          Screed Right End Gate Raise Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">434</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">4449</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:6, MID:263, CID:3110</td>
        <td class="s5" dir="ltr">
          Aftertreatment #1 DEF Line Heater #1: Current Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">6</td>
        <td class="s5" dir="ltr">Current Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3110</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Aftertreatment #1 SCR Catalyst Reagent Line Heater #1
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:116, CID:1013</td>
        <td class="s5" dir="ltr">
          Front Brake Proportional Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">116</td>
        <td class="s6" dir="ltr">Integrated Brake Control</td>
        <td class="s6" dir="ltr">1013</td>
        <td class="s5" dir="ltr">Front Brake Proportional Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:9, MID:401, CID:590</td>
        <td class="s5" dir="ltr">
          Engine Control Module: Abnormal Update Rate
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">9</td>
        <td class="s5" dir="ltr">Abnormal Update Rate</td>
        <td class="s6" dir="ltr">401</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">590</td>
        <td class="s5" dir="ltr">Engine Control Module</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:299, CID:5544</td>
        <td class="s5" dir="ltr">
          Right Stabilizer Lever Position Signal #2: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">5544</td>
        <td class="s5"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:27, CID:2707</td>
        <td class="s5" dir="ltr">
          Output Transfer Gear (OTG) Oil Temperature Sensor: Voltage Above
          Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2707</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Output Transfer Gear (OTG) Oil Temperature Sensor
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:27, CID:2201</td>
        <td class="s5" dir="ltr">
          Right Steering Cylinder Position Sensor: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2201</td>
        <td class="s5" dir="ltr">Right Steering Cylinder Position Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:4, MID:462, CID:168</td>
        <td class="s5" dir="ltr">
          Electrical System Voltage: Voltage Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">4</td>
        <td class="s5" dir="ltr">Voltage Below Normal</td>
        <td class="s6" dir="ltr">462</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">168</td>
        <td class="s5" dir="ltr">Electrical System Voltage</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:3, MID:263, CID:3464</td>
        <td class="s5" dir="ltr">
          DPF #1 Intake Pressure Sensor: Voltage Above Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">3</td>
        <td class="s5" dir="ltr">Voltage Above Normal</td>
        <td class="s6" dir="ltr">263</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">3464</td>
        <td class="s5" dir="ltr">DPF #1 Intake Pressure Sensor</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:27, CID:2742</td>
        <td class="s5" dir="ltr">
          Brake Accumulator Charging Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">27</td>
        <td class="s6" dir="ltr">Transmission/Chassis Control</td>
        <td class="s6" dir="ltr">2742</td>
        <td class="s5" dir="ltr">Brake Accumulator Charging Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:14, MID:299, CID:362</td>
        <td class="s5" dir="ltr">
          Engine Fan Speed Control Solenoid: Special Instruction
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">14</td>
        <td class="s5" dir="ltr">Special Instruction</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">362</td>
        <td class="s5" dir="ltr">Engine Fan Speed Control Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:133</td>
        <td class="s5" dir="ltr">
          Transmission Pilot Pressure Supply Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">133</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Transmission Pilot Pressure Supply Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:297, CID:681</td>
        <td class="s5" dir="ltr">
          Parking Brake Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">297</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">681</td>
        <td class="s5" dir="ltr">Parking Brake Solenoid</td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:299, CID:1594</td>
        <td class="s5" dir="ltr">
          Attachment Valve #2 Extend Pressure Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">299</td>
        <td class="s6"></td>
        <td class="s6" dir="ltr">1594</td>
        <td class="s7 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 343px; left: -1px">
            Attachment Valve #2 Extend Pressure Solenoid
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s5" dir="ltr">FMI:5, MID:82, CID:889</td>
        <td class="s5" dir="ltr">
          Ripper Shank Raise Solenoid: Current Below Normal
        </td>
        <td class="s6" dir="ltr">1</td>
        <td class="s6" dir="ltr">5</td>
        <td class="s5" dir="ltr">Current Below Normal</td>
        <td class="s6" dir="ltr">82</td>
        <td class="s6" dir="ltr">Electronic Implement Control</td>
        <td class="s6" dir="ltr">889</td>
        <td class="s5" dir="ltr">Ripper Shank Raise Solenoid</td>
      </tr>
    </tbody>
  </table>
</div>
 `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});