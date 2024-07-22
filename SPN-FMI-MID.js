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
          id="1644077200C0"
          style="width: 174px"
          class="column-headers-background"
        >
          Code Identifier
        </th>
        <th
          id="1644077200C1"
          style="width: 385px"
          class="column-headers-background"
        >
          Code Description
        </th>
        <th
          id="1644077200C2"
          style="width: 100px"
          class="column-headers-background"
        >
          Count
        </th>
        <th
          id="1644077200C3"
          style="width: 100px"
          class="column-headers-background"
        >
          SPN
        </th>
        <th
          id="1644077200C4"
          style="width: 238px"
          class="column-headers-background"
        >
          SPN Description
        </th>
        <th
          id="1644077200C5"
          style="width: 100px"
          class="column-headers-background"
        >
          FMI
        </th>
        <th
          id="1644077200C6"
          style="width: 163px"
          class="column-headers-background"
        >
          FMI Description
        </th>
        <th
          id="1644077200C7"
          style="width: 100px"
          class="column-headers-background"
        >
          MID
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style="height: 20px"></tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4976, FMI:9, MID:299</td>
        <td class="s4" dir="ltr">
          Pitch Angle (Extended Range):Abnormal Update Rate
        </td>
        <td class="s5" dir="ltr">402</td>
        <td class="s5" dir="ltr">4976</td>
        <td class="s4" dir="ltr">Pitch Angle Extended Range</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:96, FMI:15, MID:12778</td>
        <td class="s4" dir="ltr">Fuel Level: High - least severe (1)</td>
        <td class="s5" dir="ltr">277</td>
        <td class="s5" dir="ltr">96</td>
        <td class="s4" dir="ltr">Fuel Level</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4976, FMI:7, MID:299</td>
        <td class="s4" dir="ltr">
          Pitch Angle (Extended Range):Not Responding Properly
        </td>
        <td class="s5" dir="ltr">271</td>
        <td class="s5" dir="ltr">4976</td>
        <td class="s4" dir="ltr">Pitch Angle Extended Range</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6870, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 8: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">269</td>
        <td class="s5" dir="ltr">6870</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6869, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 7: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">262</td>
        <td class="s5" dir="ltr">6869</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6865, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 3: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">259</td>
        <td class="s5" dir="ltr">6865</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6866, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 4: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">249</td>
        <td class="s5" dir="ltr">6866</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4006, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">Engine in Cooldown</td>
        <td class="s5" dir="ltr">248</td>
        <td class="s5" dir="ltr">4006</td>
        <td class="s4" dir="ltr">Engine in Cooldown</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:970, FMI:31, MID:263</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">157</td>
        <td class="s5" dir="ltr">970</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:100, FMI:1, MID:263</td>
        <td class="s4" dir="ltr">Engine Oil Pressure: Low - most severe (3)</td>
        <td class="s5" dir="ltr">121</td>
        <td class="s5" dir="ltr">100</td>
        <td class="s4" dir="ltr">Engine Oil Pressure</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:107, FMI:3, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Air Filter 1 Differential Pressure: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">110</td>
        <td class="s5" dir="ltr">107</td>
        <td class="s4" dir="ltr">Engine Air Filter 1 Differential Pressure</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:676, FMI:5, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Glow Plug Relay: Current Below Normal
        </td>
        <td class="s5" dir="ltr">93</td>
        <td class="s5" dir="ltr">676</td>
        <td class="s4" dir="ltr">Engine Glow Plug Relay</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6867, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 5: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">87</td>
        <td class="s5" dir="ltr">6867</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6868, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 6: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">84</td>
        <td class="s5" dir="ltr">6868</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6863, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 1: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">84</td>
        <td class="s5" dir="ltr">6863</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6864, FMI:9, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 2: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">82</td>
        <td class="s5" dir="ltr">6864</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4158, FMI:3, MID:325</td>
        <td class="s4" dir="ltr">
          Auxiliary I/O Channel #3: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">77</td>
        <td class="s5" dir="ltr">4158</td>
        <td class="s4" dir="ltr">Auxiliary I/O Channel #3</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:97, FMI:3, MID:263</td>
        <td class="s4" dir="ltr">
          Water In Fuel Indicator: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">71</td>
        <td class="s5" dir="ltr">97</td>
        <td class="s4" dir="ltr">Water In Fuel Indicator</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6863, FMI:13, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 1: Out of Calibration</td>
        <td class="s5" dir="ltr">69</td>
        <td class="s5" dir="ltr">6863</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">13</td>
        <td class="s4" dir="ltr">Out of Calibration</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2448, FMI:15, MID:12778</td>
        <td class="s4" dir="ltr">
          Generator Average AC RMS Current: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">68</td>
        <td class="s5" dir="ltr">2448</td>
        <td class="s4" dir="ltr">Generator Average AC RMS Current</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:521761, FMI:31, MID:314</td>
        <td class="s4" dir="ltr">Seat Position Sensor</td>
        <td class="s5" dir="ltr">67</td>
        <td class="s5" dir="ltr">521761</td>
        <td class="s4" dir="ltr">-</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">314</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6868, FMI:13, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 6: Out of Calibration</td>
        <td class="s5" dir="ltr">60</td>
        <td class="s5" dir="ltr">6868</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">13</td>
        <td class="s4" dir="ltr">Out of Calibration</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6867, FMI:13, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 5: Out of Calibration</td>
        <td class="s5" dir="ltr">59</td>
        <td class="s5" dir="ltr">6867</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">13</td>
        <td class="s4" dir="ltr">Out of Calibration</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4765, FMI:3, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 Diesel Oxidation Catalyst Intake Gas Temperature:
            Voltage Above Normal
          </div>
        </td>
        <td class="s5" dir="ltr">57</td>
        <td class="s5" dir="ltr">4765</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 Diesel Oxidation Catalyst Intake Gas Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6864, FMI:13, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight 2: Out of Calibration</td>
        <td class="s5" dir="ltr">55</td>
        <td class="s5" dir="ltr">6864</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">13</td>
        <td class="s4" dir="ltr">Out of Calibration</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:444, FMI:1, MID:12595</td>
        <td class="s4" dir="ltr">
          Battery Potential / Power Input #2: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">54</td>
        <td class="s5" dir="ltr">444</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #2</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12595</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4244, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Engine Run Relay</td>
        <td class="s5" dir="ltr">45</td>
        <td class="s5" dir="ltr">4244</td>
        <td class="s4" dir="ltr">Engine Run Relay</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:107, FMI:15, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Air Filter 1 Differential Pressure: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">40</td>
        <td class="s5" dir="ltr">107</td>
        <td class="s4" dir="ltr">Engine Air Filter 1 Differential Pressure</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5246, FMI:15, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity: High - least severe
            (1)
          </div>
        </td>
        <td class="s5" dir="ltr">38</td>
        <td class="s5" dir="ltr">5246</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity
          </div>
        </td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:102, FMI:18, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Intake Manifold #1 Pressure: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">38</td>
        <td class="s5" dir="ltr">102</td>
        <td class="s4" dir="ltr">Engine Intake Manifold #1 Pressure</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3464, FMI:7, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Throttle Actuator 1 Control Command: Not Responding Properly
          </div>
        </td>
        <td class="s5" dir="ltr">37</td>
        <td class="s5" dir="ltr">3464</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Throttle Actuator 1 Control Command
          </div>
        </td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3568, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">
          Generator Not Ready to Automatically Parallel State
        </td>
        <td class="s5" dir="ltr">35</td>
        <td class="s5" dir="ltr">3568</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Generator Not Ready to Automatically Parallel State
          </div>
        </td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:107, FMI:16, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Air Filter 1 Differential Pressure: High - moderate severity
          (2)
        </td>
        <td class="s5" dir="ltr">34</td>
        <td class="s5" dir="ltr">107</td>
        <td class="s4" dir="ltr">Engine Air Filter 1 Differential Pressure</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4007, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">Gen Control Not in Auto Warning</td>
        <td class="s5" dir="ltr">34</td>
        <td class="s5" dir="ltr">4007</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Generator Control Not in Automatic Start State
          </div>
        </td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1196, FMI:14, MID:263</td>
        <td class="s4" dir="ltr">
          Anti-theft Component Status States: Special Instruction
        </td>
        <td class="s5" dir="ltr">34</td>
        <td class="s5" dir="ltr">1196</td>
        <td class="s4" dir="ltr">Anti-theft Component Status States</td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:96, FMI:15, MID:325</td>
        <td class="s4" dir="ltr">Fuel Level: High - least severe (1)</td>
        <td class="s5" dir="ltr">33</td>
        <td class="s5" dir="ltr">96</td>
        <td class="s4" dir="ltr">Fuel Level</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, FMI:17, MID:325</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">30</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6728, FMI:8, MID:299</td>
        <td class="s4" dir="ltr">
          Vibration Sensor 1:Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s5" dir="ltr">30</td>
        <td class="s5" dir="ltr">6728</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1347, FMI:5, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Fuel Pump Pressurizing Assembly #1: Current Below Normal
        </td>
        <td class="s5" dir="ltr">28</td>
        <td class="s5" dir="ltr">1347</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Fuel Pump Pressurizing Assembly #1
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1231, FMI:9, MID:299</td>
        <td class="s4" dir="ltr">J1939 Network #2: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">28</td>
        <td class="s5" dir="ltr">1231</td>
        <td class="s4" dir="ltr">J1939 Network #2</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3362, FMI:14, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Dosing Unit Input Lines: Special Instruction
        </td>
        <td class="s5" dir="ltr">27</td>
        <td class="s5" dir="ltr">3362</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Dosing Unit Input Lines
          </div>
        </td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:625, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">Proprietary Data Link</td>
        <td class="s5" dir="ltr">26</td>
        <td class="s5" dir="ltr">625</td>
        <td class="s4" dir="ltr">Proprietary Data Link</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4783, FMI:9, MID:263</td>
        <td class="s4" dir="ltr">
          DPF #1 Mean Soot Signal: Abnormal Update Rate
        </td>
        <td class="s5" dir="ltr">24</td>
        <td class="s5" dir="ltr">4783</td>
        <td class="s4" dir="ltr">DPF #1 Mean Soot Signal</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2448, FMI:15, MID:325</td>
        <td class="s4" dir="ltr">
          Generator Average AC RMS Current: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">24</td>
        <td class="s5" dir="ltr">2448</td>
        <td class="s4" dir="ltr">Generator Average AC RMS Current</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1569, FMI:31, MID:12544</td>
        <td class="s4" dir="ltr">Engine Protection Torque Derate</td>
        <td class="s5" dir="ltr">24</td>
        <td class="s5" dir="ltr">1569</td>
        <td class="s4" dir="ltr">Engine Protection Torque Derate</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:111, FMI:1, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Coolant Level: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">23</td>
        <td class="s5" dir="ltr">111</td>
        <td class="s4" dir="ltr">Engine Coolant Level</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3664, FMI:5, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Injector Cylinder #6 Actuator #2: Current Below Normal
        </td>
        <td class="s5" dir="ltr">23</td>
        <td class="s5" dir="ltr">3664</td>
        <td class="s4" dir="ltr">Engine Injector Cylinder #6 Actuator #2</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1713, FMI:17, MID:299</td>
        <td class="s4" dir="ltr">
          Hydraulic Oil Filter Restriction Switch: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">22</td>
        <td class="s5" dir="ltr">1713</td>
        <td class="s4" dir="ltr">Hydraulic Oil Filter Restriction Switch</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:677, FMI:5, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Starter Motor Relay: Current Below Normal
        </td>
        <td class="s5" dir="ltr">22</td>
        <td class="s5" dir="ltr">677</td>
        <td class="s4" dir="ltr">Engine Starter Motor Relay</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:174, FMI:4, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Fuel Temperature 1: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">20</td>
        <td class="s5" dir="ltr">174</td>
        <td class="s4" dir="ltr">Engine Fuel Temperature 1</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1235, FMI:9, MID:263</td>
        <td class="s4" dir="ltr">J1939 Network #3: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">20</td>
        <td class="s5" dir="ltr">1235</td>
        <td class="s4" dir="ltr">J1939 Network #3</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4244, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">Engine Run Relay</td>
        <td class="s5" dir="ltr">19</td>
        <td class="s5" dir="ltr">4244</td>
        <td class="s4" dir="ltr">Engine Run Relay</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:157, FMI:18, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Injector Metering Rail #1 Pressure: Low - moderate severity
            (2)
          </div>
        </td>
        <td class="s5" dir="ltr">19</td>
        <td class="s5" dir="ltr">157</td>
        <td class="s4" dir="ltr">Engine Injector Metering Rail #1 Pressure</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:97, FMI:15, MID:263</td>
        <td class="s4" dir="ltr">
          Water In Fuel Indicator: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s5" dir="ltr">97</td>
        <td class="s4" dir="ltr">Water In Fuel Indicator</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5246, FMI:16, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity: High - moderate
            severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s5" dir="ltr">5246</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2448, FMI:15, MID:277</td>
        <td class="s4" dir="ltr">
          Generator Average AC RMS Current: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s5" dir="ltr">2448</td>
        <td class="s4" dir="ltr">Generator Average AC RMS Current</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:929, FMI:12, MID:12595</td>
        <td class="s4" dir="ltr">Tire Location: Failure</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s5" dir="ltr">929</td>
        <td class="s4" dir="ltr">Tire Location</td>
        <td class="s5" dir="ltr">12</td>
        <td class="s4" dir="ltr">Failure</td>
        <td class="s5" dir="ltr">12595</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4212, FMI:5, MID:263</td>
        <td class="s4" dir="ltr">
          Fan Drive Bypass Command Status: Current Below Normal
        </td>
        <td class="s5" dir="ltr">14</td>
        <td class="s5" dir="ltr">4212</td>
        <td class="s4" dir="ltr">Fan Drive Bypass Command Status</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:241, FMI:18, MID:12595</td>
        <td class="s4" dir="ltr">Tire Pressure: Low - moderate severity (2)</td>
        <td class="s5" dir="ltr">14</td>
        <td class="s5" dir="ltr">241</td>
        <td class="s4" dir="ltr">Tire Pressure</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">12595</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:516671, FMI:3, MID:299</td>
        <td class="s4" dir="ltr">
          Unexpected Drive Motor Forward Speed Detected
        </td>
        <td class="s5" dir="ltr">14</td>
        <td class="s5" dir="ltr">516671</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Unexpected Drive Motor Forward Speed Detected
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:241, FMI:1, MID:12595</td>
        <td class="s4" dir="ltr">Tire Pressure: Low - most severe (3)</td>
        <td class="s5" dir="ltr">14</td>
        <td class="s5" dir="ltr">241</td>
        <td class="s4" dir="ltr">Tire Pressure</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12595</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:167, FMI:17, MID:12778</td>
        <td class="s4" dir="ltr">
          Charging System Potential: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">14</td>
        <td class="s5" dir="ltr">167</td>
        <td class="s4" dir="ltr">Charging System Potential</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:70, FMI:2, MID:299</td>
        <td class="s4" dir="ltr">
          Parking Brake Switch: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">13</td>
        <td class="s5" dir="ltr">70</td>
        <td class="s4" dir="ltr">Parking Brake Switch</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4006, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Engine in Cooldown</td>
        <td class="s5" dir="ltr">13</td>
        <td class="s5" dir="ltr">4006</td>
        <td class="s4" dir="ltr">Engine in Cooldown</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1761, FMI:17, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Tank Volume #1: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">13</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4006, FMI:31, MID:277</td>
        <td class="s4" dir="ltr">Engine in Cooldown</td>
        <td class="s5" dir="ltr">13</td>
        <td class="s5" dir="ltr">4006</td>
        <td class="s4" dir="ltr">Engine in Cooldown</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:723, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Speed Sensor #2: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">12</td>
        <td class="s5" dir="ltr">723</td>
        <td class="s4" dir="ltr">Engine Speed Sensor #2</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5276, FMI:5, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Exhaust Manifold Bank #1 Flow Balance Valve Actuator Control:
            Current Below Normal
          </div>
        </td>
        <td class="s5" dir="ltr">12</td>
        <td class="s5" dir="ltr">5276</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Exhaust Manifold Bank #1 Flow Balance Valve Actuator Control
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523548, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">12</td>
        <td class="s5" dir="ltr">523548</td>
        <td class="s4" dir="ltr">CAN Data Link</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3360, FMI:9, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Controller: Abnormal Update Rate
        </td>
        <td class="s5" dir="ltr">12</td>
        <td class="s5" dir="ltr">3360</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Controller
          </div>
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1209, FMI:4, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Exhaust Gas Pressure: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">11</td>
        <td class="s5" dir="ltr">1209</td>
        <td class="s4" dir="ltr">Engine Exhaust Gas Pressure</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1856, FMI:31, MID:299</td>
        <td class="s4" dir="ltr">Seat Belt Switch</td>
        <td class="s5" dir="ltr">11</td>
        <td class="s5" dir="ltr">1856</td>
        <td class="s4" dir="ltr">Seat Belt Switch</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:516215, FMI:1, MID:299</td>
        <td class="s4" dir="ltr">Low Fuel Level</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s5" dir="ltr">516215</td>
        <td class="s4" dir="ltr">Low Fuel Level</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3361, FMI:5, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Dosing Unit: Current Below Normal
        </td>
        <td class="s5" dir="ltr">10</td>
        <td class="s5" dir="ltr">3361</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Dosing Unit
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5826, FMI:16, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Emission Control System Operator Inducement Severity: High -
            moderate severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">5826</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Emission Control System Operator Inducement Severity
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:107, FMI:2, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Air Filter 1 Differential Pressure: Erratic, Intermittent, or
            Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">107</td>
        <td class="s4" dir="ltr">Engine Air Filter 1 Differential Pressure</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:7440, FMI:31, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment Active Regeneration Inhibited Due to Low Exhaust
            Pressure
          </div>
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">7440</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:96, FMI:4, MID:299</td>
        <td class="s4" dir="ltr">Fuel Level: Voltage Below Normal</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">96</td>
        <td class="s4" dir="ltr">Fuel Level</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1746, FMI:19, MID:1024</td>
        <td class="s4" dir="ltr">Security Device: Data Error</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">1746</td>
        <td class="s4" dir="ltr">Security Device</td>
        <td class="s5" dir="ltr">19</td>
        <td class="s4" dir="ltr">Data Error</td>
        <td class="s5" dir="ltr">1024</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5246, FMI:15, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity: High - least severe
            (1)
          </div>
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">5246</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity
          </div>
        </td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5826, FMI:15, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Emission Control System Operator Inducement Severity: High - least
            severe (1)
          </div>
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">5826</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Emission Control System Operator Inducement Severity
          </div>
        </td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4376, FMI:14, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Return Valve: Special Instruction
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">4376</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Return Valve
          </div>
        </td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:190, FMI:15, MID:263</td>
        <td class="s4" dir="ltr">Engine Speed: High - least severe (1)</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">190</td>
        <td class="s4" dir="ltr">Engine Speed</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3363, FMI:6, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Tank Heater: Current Above Normal
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">3363</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Heater
          </div>
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1239, FMI:1, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Fuel Leakage 1: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">1239</td>
        <td class="s4" dir="ltr">Engine Fuel Leakage 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:157, FMI:16, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Injector Metering Rail #1 Pressure: High - moderate severity
            (2)
          </div>
        </td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">157</td>
        <td class="s4" dir="ltr">Engine Injector Metering Rail #1 Pressure</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523591, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">523591</td>
        <td class="s4" dir="ltr">CAN Data Link</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2648, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Maintenance Lamp</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">2648</td>
        <td class="s4" dir="ltr">Maintenance Lamp</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523603, FMI:15, MID:263</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">523603</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:241, FMI:16, MID:12595</td>
        <td class="s4" dir="ltr">
          Tire Pressure: High - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">241</td>
        <td class="s4" dir="ltr">Tire Pressure</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">12595</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:524086, FMI:8, MID:299</td>
        <td class="s4" dir="ltr">Front Drum Vibratory Speed Sensor</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">524086</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5246, FMI:16, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity: High - moderate
            severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">5246</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2251, FMI:9, MID:12577</td>
        <td class="s4" dir="ltr">Source Address 251: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">2251</td>
        <td class="s4" dir="ltr">Source Address 251</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">12577</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:522880, FMI:8, MID:299</td>
        <td class="s4" dir="ltr">Right Drive Motor Speed Sensor #2</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s5" dir="ltr">522880</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:639, FMI:8, MID:299</td>
        <td class="s4" dir="ltr">
          J1939 Network #1: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s5" dir="ltr">7</td>
        <td class="s5" dir="ltr">639</td>
        <td class="s4" dir="ltr">J1939 Network #1</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523592, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">6</td>
        <td class="s5" dir="ltr">523592</td>
        <td class="s4" dir="ltr">CAN Data Link</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4374, FMI:8, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF Pump #1 Motor Speed: Abnormal Frequency, Pulse
            Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s5" dir="ltr">4374</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Pump Motor Speed
          </div>
        </td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1713, FMI:18, MID:299</td>
        <td class="s4" dir="ltr">
          Hydraulic Oil Filter Restriction Switch: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s5" dir="ltr">1713</td>
        <td class="s4" dir="ltr">Hydraulic Oil Filter Restriction Switch</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:521891, FMI:8, MID:299</td>
        <td class="s4" dir="ltr">Joystick Forward/Reverse Position Sensor</td>
        <td class="s5" dir="ltr">6</td>
        <td class="s5" dir="ltr">521891</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1761, FMI:18, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Tank Volume #1: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:970, FMI:31, MID:299</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">970</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4009, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Generator Breaker Failure to Open</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">4009</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:412, FMI:15, MID:263</td>
        <td class="s4" dir="ltr">EGR Temperature: High - least severe (1)</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">412</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Exhaust Gas Recirculation Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1221, FMI:2, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Continuously Monitored Systems Support/Status: Erratic,
            Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">1221</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Continuously Monitored Systems Support/Status
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, FMI:15, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3362, FMI:14, MID:341</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Dosing Unit Input Lines: Special Instruction
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">3362</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Dosing Unit Input Lines
          </div>
        </td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">341</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2474, FMI:17, MID:12778</td>
        <td class="s4" dir="ltr">
          Utility Average Line-Line AC RMS Voltage: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">2474</td>
        <td class="s4" dir="ltr">Utility Average Line-Line AC RMS Voltage</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1761, FMI:2, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF Tank Volume #1: Erratic, Intermittent, or
            Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:111, FMI:17, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Coolant Level: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">111</td>
        <td class="s4" dir="ltr">Engine Coolant Level</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:157, FMI:18, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Injector Metering Rail #1 Pressure: Low - moderate severity
            (2)
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">157</td>
        <td class="s4" dir="ltr">Engine Injector Metering Rail #1 Pressure</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2840, FMI:12, MID:12544</td>
        <td class="s4" dir="ltr">ECU Instance: Failure</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">2840</td>
        <td class="s4" dir="ltr">ECU Instance</td>
        <td class="s5" dir="ltr">12</td>
        <td class="s4" dir="ltr">Failure</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3644, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Engine Derate Request</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">3644</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1761, FMI:1, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Tank Volume #1: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4383, FMI:5, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 Outlet NH3 Gas sensor heater control: Current
            Below Normal
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">4383</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Outlet NH3 Gas Sensor Heater Control
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:639, FMI:9, MID:263</td>
        <td class="s4" dir="ltr">J1939 Network #1: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">639</td>
        <td class="s4" dir="ltr">J1939 Network #1</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:111, FMI:18, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Coolant Level: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">111</td>
        <td class="s4" dir="ltr">Engine Coolant Level</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:111, FMI:1, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Coolant Level: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">111</td>
        <td class="s4" dir="ltr">Engine Coolant Level</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:107, FMI:15, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Air Filter 1 Differential Pressure: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">107</td>
        <td class="s4" dir="ltr">Engine Air Filter 1 Differential Pressure</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:970, FMI:3, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Auxiliary Engine Shutdown Switch: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">970</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:190, FMI:1, MID:277</td>
        <td class="s4" dir="ltr">Engine Speed: Low - most severe (3)</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">190</td>
        <td class="s4" dir="ltr">Engine Speed</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5523, FMI:7, MID:12684</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">5523</td>
        <td class="s4" dir="ltr">Lubrication Pump Outlet Line 2 Pressure</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">12684</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3644, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">Engine Derate Request</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">3644</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:91, FMI:2, MID:12544</td>
        <td class="s4" dir="ltr">
          Accelerator Pedal Position #1: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">91</td>
        <td class="s4" dir="ltr">Accelerator Pedal Position #1</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4360, FMI:4, MID:339</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature: Voltage Below
            Normal
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">4360</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">339</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:96, FMI:3, MID:299</td>
        <td class="s4" dir="ltr">Fuel Level: Voltage Above Normal</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">96</td>
        <td class="s4" dir="ltr">Fuel Level</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2791, FMI:7, MID:263</td>
        <td class="s4" dir="ltr">EGR Valve Control: Not Responding Properly</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">2791</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Exhaust Gas Recirculation (EGR) Valve Control
          </div>
        </td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:247, FMI:9, MID:12795</td>
        <td class="s4" dir="ltr">
          Engine Total Hours of Operation: Abnormal Update Rate
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">247</td>
        <td class="s4" dir="ltr">Engine Total Hours of Operation</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">12795</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1761, FMI:19, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Tank Volume #1: Data Error
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s5" dir="ltr">19</td>
        <td class="s4" dir="ltr">Data Error</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2251, FMI:9, MID:12567</td>
        <td class="s4" dir="ltr">Source Address 251: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">2251</td>
        <td class="s4" dir="ltr">Source Address 251</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">12567</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:636, FMI:7, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Position Sensor: Not Responding Properly
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">636</td>
        <td class="s4" dir="ltr">Engine Position Sensor</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, FMI:15, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:168, FMI:17, MID:12778</td>
        <td class="s4" dir="ltr">
          Battery Potential / Power Input #1: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4193, FMI:4, MID:12692</td>
        <td class="s4" dir="ltr">
          Engine Coolant Pump Outlet Temperature: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">4193</td>
        <td class="s4" dir="ltr">Engine Coolant Pump Outlet Temperature</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">12692</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5245, FMI:15, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment Selective Catalytic Reduction Operator Inducement
            Active: High - least severe (1)
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">5245</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 DEF Tank Low Level Indicator
          </div>
        </td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1761, FMI:17, MID:339</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Tank Volume #1: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">339</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5392, FMI:31, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Dosing Unit #1 Loss of Prime
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">5392</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Dosing Unit Loss of Prime
          </div>
        </td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3521, FMI:19, MID:12544</td>
        <td class="s4" dir="ltr">Aftertreatment #1 DEF Property: Data Error</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">3521</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Property
          </div>
        </td>
        <td class="s5" dir="ltr">19</td>
        <td class="s4" dir="ltr">Data Error</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2456, FMI:15, MID:12778</td>
        <td class="s4" dir="ltr">
          Generator Total Reactive Power: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">2456</td>
        <td class="s4" dir="ltr">Generator Total Reactive Power</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:970, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">970</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4056, FMI:14, MID:299</td>
        <td class="s4" dir="ltr">
          Two Speed Axle Actuator: Special Instruction
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">4056</td>
        <td class="s4" dir="ltr">Two Speed Axle Actuator</td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:97, FMI:15, MID:12544</td>
        <td class="s4" dir="ltr">
          Water In Fuel Indicator: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">97</td>
        <td class="s4" dir="ltr">Water In Fuel Indicator</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3360, FMI:4, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Controller: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">3360</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Controller
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:516672, FMI:3, MID:299</td>
        <td class="s4" dir="ltr">
          Unexpected Drive Motor Rearward Speed Detected
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">516672</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Unexpected Drive Motor Rearward Speed Detected
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:522511, FMI:8, MID:299</td>
        <td class="s4" dir="ltr">Left Front Drive Motor Speed Sensor #1</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">522511</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:636, FMI:8, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Position Sensor: Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">636</td>
        <td class="s4" dir="ltr">Engine Position Sensor</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2880, FMI:2, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Operator Primary Intermediate Speed Select: Erratic,
            Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">2880</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Operator Primary Intermediate Speed Select
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:111, FMI:18, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Coolant Level: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">111</td>
        <td class="s4" dir="ltr">Engine Coolant Level</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, FMI:15, MID:277</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:168, FMI:17, MID:299</td>
        <td class="s4" dir="ltr">
          Battery Potential / Power Input #1: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, FMI:16, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:970, FMI:14, MID:325</td>
        <td class="s4" dir="ltr">
          Engine Auxiliary Engine Shutdown Switch: Special Instruction
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">970</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:157, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Injector Metering Rail #1 Pressure: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">157</td>
        <td class="s4" dir="ltr">Engine Injector Metering Rail #1 Pressure</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4007, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Gen Control Not in Auto Warning</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">4007</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Generator Control Not in Automatic Start State
          </div>
        </td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4377, FMI:12, MID:263</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NH3: Failure</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">4377</td>
        <td class="s4" dir="ltr">Aftertreatment 1 Outlet NH3</td>
        <td class="s5" dir="ltr">12</td>
        <td class="s4" dir="ltr">Failure</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2436, FMI:17, MID:277</td>
        <td class="s4" dir="ltr">
          Generator Average AC Frequency: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">2436</td>
        <td class="s4" dir="ltr">Generator Average AC Frequency</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:521761, FMI:31, MID:12598</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">521761</td>
        <td class="s4" dir="ltr">-</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12598</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1592, FMI:5, MID:299</td>
        <td class="s4" dir="ltr">
          Front Axle, Left Wheel Speed: Current Below Normal
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">1592</td>
        <td class="s4" dir="ltr">Front Axle, Left Wheel Speed</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1611, FMI:7, MID:299</td>
        <td class="s4" dir="ltr">Drive recognize: Not Responding Properly</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">1611</td>
        <td class="s4" dir="ltr">Drive recognize</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:639, FMI:8, MID:304</td>
        <td class="s4" dir="ltr">
          J1939 Network #1: Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">639</td>
        <td class="s4" dir="ltr">J1939 Network #1</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">304</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:175, FMI:15, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Oil Temperature 1: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">175</td>
        <td class="s4" dir="ltr">Engine Oil Temperature 1</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:167, FMI:17, MID:325</td>
        <td class="s4" dir="ltr">
          Charging System Potential: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">167</td>
        <td class="s4" dir="ltr">Charging System Potential</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:594, FMI:31, MID:12544</td>
        <td class="s4" dir="ltr">Engine Idle Shutdown Driver Alert Mode</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">594</td>
        <td class="s4" dir="ltr">Engine Idle Shutdown Driver Alert Mode</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:100, FMI:17, MID:12583</td>
        <td class="s4" dir="ltr">
          Engine Oil Pressure: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">100</td>
        <td class="s4" dir="ltr">Engine Oil Pressure</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12583</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:593, FMI:31, MID:12544</td>
        <td class="s4" dir="ltr">Engine Idle Shutdown has Shutdown Engine</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">593</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Idle Shutdown has Shutdown Engine
          </div>
        </td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2440, FMI:1, MID:277</td>
        <td class="s4" dir="ltr">
          Generator Average Line-Line AC RMS Voltage: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">2440</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Generator Average Line-Line AC RMS Voltage
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5245, FMI:16, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment Selective Catalytic Reduction Operator Inducement
            Active: High - moderate severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">5245</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 DEF Tank Low Level Indicator
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:639, FMI:9, MID:12544</td>
        <td class="s4" dir="ltr">J1939 Network #1: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">639</td>
        <td class="s4" dir="ltr">J1939 Network #1</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 171px; left: -1px">
            SPN:521379, FMI:17, MID:12577
          </div>
        </td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">521379</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12577</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:168, FMI:4, MID:12692</td>
        <td class="s4" dir="ltr">
          Battery Potential / Power Input #1: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">12692</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5435, FMI:7, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Pump State: Not Responding Properly
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">5435</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Pump State
          </div>
        </td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4364, FMI:17, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 SCR Catalyst Conversion Efficiency: Low - least
            severe (1)
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">4364</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 SCR Catalyst Conversion Efficiency
          </div>
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1231, FMI:9, MID:341</td>
        <td class="s4" dir="ltr">J1939 Network #2: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">1231</td>
        <td class="s4" dir="ltr">J1939 Network #2</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">341</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:970, FMI:31, MID:277</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">970</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4364, FMI:2, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 SCR Catalyst Conversion Efficiency: Erratic,
            Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">4364</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 SCR Catalyst Conversion Efficiency
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2440, FMI:17, MID:277</td>
        <td class="s4" dir="ltr">
          Generator Average Line-Line AC RMS Voltage: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">2440</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Generator Average Line-Line AC RMS Voltage
          </div>
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1762, FMI:17, MID:12583</td>
        <td class="s4" dir="ltr">Hydraulic Pressure: Low - least severe (1)</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">1762</td>
        <td class="s4" dir="ltr">Hydraulic Pressure</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12583</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4976, FMI:9, MID:12583</td>
        <td class="s4" dir="ltr">
          Pitch Angle (Extended Range):Abnormal Update Rate
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">4976</td>
        <td class="s4" dir="ltr">Pitch Angle Extended Range</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">12583</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:625, FMI:31, MID:325</td>
        <td class="s4" dir="ltr">Proprietary Data Link</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">625</td>
        <td class="s4" dir="ltr">Proprietary Data Link</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:520288, FMI:3, MID:299</td>
        <td class="s4" dir="ltr">Fuel Level Sensor</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">520288</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:107, FMI:16, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Air Filter 1 Differential Pressure: High - moderate severity
          (2)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">107</td>
        <td class="s4" dir="ltr">Engine Air Filter 1 Differential Pressure</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1592, FMI:11, MID:299</td>
        <td class="s4" dir="ltr">
          Front Axle, Left Wheel Speed: Other Failure Mode
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">1592</td>
        <td class="s4" dir="ltr">Front Axle, Left Wheel Speed</td>
        <td class="s5" dir="ltr">11</td>
        <td class="s4" dir="ltr">Other Failure Mode</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3516, FMI:2, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF Concentration: Erratic, Intermittent, or
            Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">3516</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Concentration
          </div>
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4765, FMI:3, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 Diesel Oxidation Catalyst Intake Gas Temperature:
            Voltage Above Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4765</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 Diesel Oxidation Catalyst Intake Gas Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4334, FMI:18, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF #1 Pressure (absolute): Low - moderate
            severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4334</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Doser Absolute Pressure
          </div>
        </td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2529, FMI:17, MID:12778</td>
        <td class="s4" dir="ltr">
          Bus #1/Generator In Sync: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2529</td>
        <td class="s4" dir="ltr">Bus #1/Generator In Sync</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3362, FMI:7, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF Dosing Unit Input Lines: Not Responding
            Properly
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3362</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Dosing Unit Input Lines
          </div>
        </td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:522512, FMI:5, MID:299</td>
        <td class="s4" dir="ltr">Left Front Drive Motor Speed Sensor #2</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">522512</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:168, FMI:4, MID:339</td>
        <td class="s4" dir="ltr">
          Battery Potential / Power Input #1: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">339</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2456, FMI:1, MID:12778</td>
        <td class="s4" dir="ltr">
          Generator Total Reactive Power: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2456</td>
        <td class="s4" dir="ltr">Generator Total Reactive Power</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3227, FMI:16, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 Outlet O2: High - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3227</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet O2</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:636, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Position Sensor: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">636</td>
        <td class="s4" dir="ltr">Engine Position Sensor</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2436, FMI:1, MID:277</td>
        <td class="s4" dir="ltr">
          Generator Average AC Frequency: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2436</td>
        <td class="s4" dir="ltr">Generator Average AC Frequency</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3563, FMI:4, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Intake Manifold #1 Absolute Pressure: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3563</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Intake Manifold #1 Absolute Pressure
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4360, FMI:16, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature: High -
            moderate severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4360</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:633, FMI:7, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Fuel Actuator 1 Control Command: Not Responding Properly
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">633</td>
        <td class="s4" dir="ltr">Engine Fuel Actuator 1 Control Command</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:111, FMI:11, MID:12544</td>
        <td class="s4" dir="ltr">Engine Coolant Level: Other Failure Mode</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">111</td>
        <td class="s4" dir="ltr">Engine Coolant Level</td>
        <td class="s5" dir="ltr">11</td>
        <td class="s4" dir="ltr">Other Failure Mode</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3563, FMI:21, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Intake Manifold #1 Absolute Pressure: Data Drifted Low
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3563</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Intake Manifold #1 Absolute Pressure
          </div>
        </td>
        <td class="s5" dir="ltr">21</td>
        <td class="s4" dir="ltr">Data Drifted Low</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3511, FMI:2, MID:12544</td>
        <td class="s4" dir="ltr">
          Sensor Supply Voltage 3: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3511</td>
        <td class="s4" dir="ltr">Sensor Supply Voltage 3</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5798, FMI:10, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF Dosing Unit Heater Temperature: Abnormal Rate
            of Change
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5798</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Dosing Unit Heater Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4334, FMI:16, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF #1 Pressure (absolute): High - moderate
            severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4334</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Doser Absolute Pressure
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:27, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          EGR #1 Valve Position: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">27</td>
        <td class="s4" dir="ltr">EGR #1 Valve Position</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:105, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Intake Manifold #1 Temperature: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">105</td>
        <td class="s4" dir="ltr">Engine Intake Manifold #1 Temperature</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1761, FMI:1, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Tank Volume #1: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5491, FMI:4, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Line Heater Relay: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5491</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Line Heater Relay
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4212, FMI:6, MID:263</td>
        <td class="s4" dir="ltr">
          Fan Drive Bypass Command Status: Current Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4212</td>
        <td class="s4" dir="ltr">Fan Drive Bypass Command Status</td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:111, FMI:1, MID:277</td>
        <td class="s4" dir="ltr">
          Engine Coolant Level: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">111</td>
        <td class="s4" dir="ltr">Engine Coolant Level</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2791, FMI:5, MID:12544</td>
        <td class="s4" dir="ltr">EGR Valve Control: Current Below Normal</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2791</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Exhaust Gas Recirculation (EGR) Valve Control
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1638, FMI:16, MID:263</td>
        <td class="s4" dir="ltr">
          Hydraulic Temperature: High - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1638</td>
        <td class="s4" dir="ltr">Hydraulic Temperature</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:152, FMI:2, MID:12544</td>
        <td class="s4" dir="ltr">
          Number Of ECU Resets: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">152</td>
        <td class="s4" dir="ltr">Number Of ECU Resets</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:109, FMI:1, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Coolant Pressure: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">109</td>
        <td class="s4" dir="ltr">Engine Coolant Pressure</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1856, FMI:14, MID:316</td>
        <td class="s4" dir="ltr">Seat Belt Switch: Special Instruction</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1856</td>
        <td class="s4" dir="ltr">Seat Belt Switch</td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">316</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523523, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">523523</td>
        <td class="s4" dir="ltr">
          Engine Injector Cylinder #1 and Cylinder #4
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5580, FMI:17, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Filtered Fuel Delivery Absolute Pressure: Low - least severe
            (1)
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5580</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Filtered Fuel Delivery Absolute Pressure
          </div>
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:522879, FMI:8, MID:299</td>
        <td class="s4" dir="ltr">Right Drive Motor Speed Sensor #1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">522879</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3509, FMI:4, MID:299</td>
        <td class="s4" dir="ltr">
          Sensor Supply Voltage 1: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3509</td>
        <td class="s4" dir="ltr">Sensor Supply Voltage 1</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:652, FMI:3, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Injector Cylinder #02: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">652</td>
        <td class="s4" dir="ltr">Engine Injector Cylinder #02</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1076, FMI:5, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Fuel Injection Pump Fuel Control Valve: Current Below Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1076</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Fuel Injection Pump Fuel Control Valve
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4976, FMI:7, MID:12583</td>
        <td class="s4" dir="ltr">
          Pitch Angle (Extended Range):Not Responding Properly
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4976</td>
        <td class="s4" dir="ltr">Pitch Angle Extended Range</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">12583</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2452, FMI:17, MID:12778</td>
        <td class="s4" dir="ltr">
          Generator Total Real Power: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2452</td>
        <td class="s4" dir="ltr">Generator Total Real Power</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3516, FMI:12, MID:341</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Concentration: Failure
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3516</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Concentration
          </div>
        </td>
        <td class="s5" dir="ltr">12</td>
        <td class="s4" dir="ltr">Failure</td>
        <td class="s5" dir="ltr">341</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4356, FMI:6, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Line Heater #3: Current Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4356</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Line Heater 3
          </div>
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1595, FMI:11, MID:299</td>
        <td class="s4" dir="ltr">
          Rear axle, right wheel speed: Other Failure Mode
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1595</td>
        <td class="s4" dir="ltr">Rear axle, right wheel speed</td>
        <td class="s5" dir="ltr">11</td>
        <td class="s4" dir="ltr">Other Failure Mode</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523540, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">Fuel Pump Pressure</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">523540</td>
        <td class="s4" dir="ltr">Fuel Pump Pressure</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4363, FMI:3, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 SCR Catalyst Outlet Gas Temperature: Voltage Above
            Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4363</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 SCR Catalyst Outlet Gas Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:172, FMI:3, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Air Inlet Temperature: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">172</td>
        <td class="s4" dir="ltr">Engine Air Inlet Temperature</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1188, FMI:5, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Turbocharger #1 Wastegate Drive: Current Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1188</td>
        <td class="s4" dir="ltr">Engine Turbocharger 1 Wastegate Drive</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:96, FMI:3, MID:263</td>
        <td class="s4" dir="ltr">Fuel Level: Voltage Above Normal</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">96</td>
        <td class="s4" dir="ltr">Fuel Level</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5519, FMI:18, MID:12684</td>
        <td class="s4" dir="ltr">
          Lubrication Reservoir Level: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5519</td>
        <td class="s4" dir="ltr">Lubrication Reservoir Level</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">12684</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, FMI:16, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:51, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Throttle Position: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">51</td>
        <td class="s4" dir="ltr">Engine Throttle Position</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3837, FMI:17, MID:341</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 Secondary Air Pressure: Low - least severe (1)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3837</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Secondary Air Pressure</td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
        <td class="s5" dir="ltr">341</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:174, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Fuel Temperature 1: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">174</td>
        <td class="s4" dir="ltr">Engine Fuel Temperature 1</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2648, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">Maintenance Lamp</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2648</td>
        <td class="s4" dir="ltr">Maintenance Lamp</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1638, FMI:15, MID:299</td>
        <td class="s4" dir="ltr">
          Hydraulic Temperature: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1638</td>
        <td class="s4" dir="ltr">Hydraulic Temperature</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3516, FMI:12, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Concentration: Failure
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3516</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Concentration
          </div>
        </td>
        <td class="s5" dir="ltr">12</td>
        <td class="s4" dir="ltr">Failure</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3361, FMI:6, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Dosing Unit: Current Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3361</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Dosing Unit
          </div>
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4360, FMI:3, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature: Voltage Above
            Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4360</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 SCR Catalyst Intake Gas Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:970, FMI:31, MID:12778</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">970</td>
        <td class="s4" dir="ltr">Engine Auxiliary Engine Shutdown Switch</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:100, FMI:2, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Oil Pressure: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">100</td>
        <td class="s4" dir="ltr">Engine Oil Pressure</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3581, FMI:11, MID:325</td>
        <td class="s4" dir="ltr">Modbus Data Link: Other Failure Mode</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3581</td>
        <td class="s4" dir="ltr">SCADA Data Link</td>
        <td class="s5" dir="ltr">11</td>
        <td class="s4" dir="ltr">Other Failure Mode</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:713, FMI:6, MID:277</td>
        <td class="s4" dir="ltr">Auxiliary I/O #13: Current Above Normal</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">713</td>
        <td class="s4" dir="ltr">Auxiliary I/O #13</td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1188, FMI:6, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Turbocharger #1 Wastegate Drive: Current Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1188</td>
        <td class="s4" dir="ltr">Engine Turbocharger 1 Wastegate Drive</td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3473, FMI:12, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 Failed to Ignite: Failure
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3473</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Failed to Ignite</td>
        <td class="s5" dir="ltr">12</td>
        <td class="s4" dir="ltr">Failure</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5580, FMI:18, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Filtered Fuel Delivery Absolute Pressure: Low - moderate
            severity (2)
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5580</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Filtered Fuel Delivery Absolute Pressure
          </div>
        </td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1075, FMI:5, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Electric Lift Pump for Engine Fuel Supply: Current Below
            Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1075</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Electric Lift Pump for Engine Fuel Supply
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1595, FMI:5, MID:299</td>
        <td class="s4" dir="ltr">
          Rear axle, right wheel speed: Current Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1595</td>
        <td class="s4" dir="ltr">Rear axle, right wheel speed</td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3516, FMI:16, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DEF Concentration: High - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3516</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Concentration
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1076, FMI:6, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Fuel Injection Pump Fuel Control Valve: Current Above Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1076</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Fuel Injection Pump Fuel Control Valve
          </div>
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:522411, FMI:5, MID:12547</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">522411</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">12547</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:520225, FMI:5, MID:12615</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">520225</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">12615</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4215, FMI:31, MID:12544</td>
        <td class="s4" dir="ltr">Ground-Level Shutdown Activated</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">4215</td>
        <td class="s4" dir="ltr">Ground-Level Shutdown Activated</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2452, FMI:1, MID:12778</td>
        <td class="s4" dir="ltr">
          Generator Total Real Power: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2452</td>
        <td class="s4" dir="ltr">Generator Total Real Power</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12778</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:168, FMI:1, MID:12544</td>
        <td class="s4" dir="ltr">
          Battery Potential / Power Input #1: Low - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3509, FMI:4, MID:263</td>
        <td class="s4" dir="ltr">
          Sensor Supply Voltage 1: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3509</td>
        <td class="s4" dir="ltr">Sensor Supply Voltage 1</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 171px; left: -1px">
            SPN:524287, FMI:31, MID:12544
          </div>
        </td>
        <td class="s4" dir="ltr">Rear Drum Vibratory Speed Sensor #2</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">524287</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:168, FMI:15, MID:263</td>
        <td class="s4" dir="ltr">
          Battery Potential / Power Input #1: High - least severe (1)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1076, FMI:5, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Fuel Injection Pump Fuel Control Valve: Current Below Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1076</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Fuel Injection Pump Fuel Control Valve
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1231, FMI:9, MID:263</td>
        <td class="s4" dir="ltr">J1939 Network #2: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1231</td>
        <td class="s4" dir="ltr">J1939 Network #2</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:412, FMI:16, MID:263</td>
        <td class="s4" dir="ltr">
          EGR Temperature: High - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">412</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Exhaust Gas Recirculation Temperature
          </div>
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:102, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Intake Manifold #1 Pressure: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">102</td>
        <td class="s4" dir="ltr">Engine Intake Manifold #1 Pressure</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1383, FMI:11, MID:325</td>
        <td class="s4" dir="ltr">
          Engine was Shut Down Hot: Other Failure Mode
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1383</td>
        <td class="s4" dir="ltr">Engine was Shut Down Hot</td>
        <td class="s5" dir="ltr">11</td>
        <td class="s4" dir="ltr">Other Failure Mode</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:6851, FMI:13, MID:317</td>
        <td class="s4" dir="ltr">Payload Weight: Out of Calibration</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">6851</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">13</td>
        <td class="s4" dir="ltr">Out of Calibration</td>
        <td class="s5" dir="ltr">317</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:723, FMI:8, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Engine Speed Sensor #2: Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">723</td>
        <td class="s4" dir="ltr">Engine Speed Sensor #2</td>
        <td class="s5" dir="ltr">8</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Abnormal Frequency, Pulse Width, or Period
          </div>
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5965, FMI:5, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 DEF Control Module Relay Control: Current Below
            Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5965</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Control Module Relay Control
          </div>
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s4" dir="ltr">Current Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:733, FMI:3, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Rack Position Sensor: Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">733</td>
        <td class="s4" dir="ltr">Engine Rack Position Sensor</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5759, FMI:11, MID:263</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 Outlet Gas Sensor Power Supply: Other Failure Mode
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5759</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">11</td>
        <td class="s4" dir="ltr">Other Failure Mode</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1188, FMI:7, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Turbocharger #1 Wastegate Drive: Not Responding Properly
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1188</td>
        <td class="s4" dir="ltr">Engine Turbocharger 1 Wastegate Drive</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523280, FMI:6, MID:299</td>
        <td class="s4" dir="ltr">Reverse Rotation Vibratory Solenoid</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">523280</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">6</td>
        <td class="s4" dir="ltr">Current Above Normal</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2587, FMI:18, MID:299</td>
        <td class="s4" dir="ltr">
          Tire Pressure Threshold Detection: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">2587</td>
        <td class="s4" dir="ltr">Tire Pressure Threshold Detection</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 171px; left: -1px">
            SPN:521379, FMI:31, MID:12577
          </div>
        </td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">521379</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">12577</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:639, FMI:14, MID:12544</td>
        <td class="s4" dir="ltr">J1939 Network #1: Special Instruction</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">639</td>
        <td class="s4" dir="ltr">J1939 Network #1</td>
        <td class="s5" dir="ltr">14</td>
        <td class="s4" dir="ltr">Special Instruction</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:521, FMI:2, MID:299</td>
        <td class="s4" dir="ltr">
          Brake Pedal Position: Erratic, Intermittent, or Incorrect
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">521</td>
        <td class="s4" dir="ltr">Brake Pedal Position</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 160px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1347, FMI:4, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Fuel Pump Pressurizing Assembly #1: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1347</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Engine Fuel Pump Pressurizing Assembly #1
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1856, FMI:31, MID:316</td>
        <td class="s4" dir="ltr">Seat Belt Switch</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1856</td>
        <td class="s4" dir="ltr">Seat Belt Switch</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
        <td class="s5" dir="ltr">316</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3222, FMI:4, MID:12544</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 382px; left: -1px">
            Aftertreatment #1 Intake Gas Sensor Heater Preliminary FMI: Voltage
            Below Normal
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3222</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 235px; left: -1px">
            Aftertreatment #1 Intake Gas Sensor Heater
          </div>
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:102, FMI:4, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Intake Manifold #1 Pressure: Voltage Below Normal
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">102</td>
        <td class="s4" dir="ltr">Engine Intake Manifold #1 Pressure</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s4" dir="ltr">Voltage Below Normal</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3480, FMI:18, MID:341</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 Fuel Pressure #1: Low - moderate severity (2)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3480</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Fuel Pressure #1</td>
        <td class="s5" dir="ltr">18</td>
        <td class="s4" dir="ltr">Low; moderate severity</td>
        <td class="s5" dir="ltr">341</td>
      </tr>
    </tbody>
  </table>
</div>
 `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
