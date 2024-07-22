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
          id="2021308707C0"
          style="width: 161px"
          class="column-headers-background"
        >
          Code Identifier
        </th>
        <th
          id="2021308707C1"
          style="width: 470px"
          class="column-headers-background"
        >
          Code Description
        </th>
        <th
          id="2021308707C2"
          style="width: 100px"
          class="column-headers-background"
        >
          Count
        </th>
        <th
          id="2021308707C3"
          style="width: 100px"
          class="column-headers-background"
        >
          SPN
        </th>
        <th
          id="2021308707C4"
          style="width: 328px"
          class="column-headers-background"
        >
          SPN Description
        </th>
        <th
          id="2021308707C5"
          style="width: 100px"
          class="column-headers-background"
        >
          FMI
        </th>
        <th
          id="2021308707C6"
          style="width: 176px"
          class="column-headers-background"
        >
          FMI Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style="height: 20px"></tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 791, FMI: 1</td>
        <td class="s4" dir="ltr">
          Wheel Sensor ABS Axle 2 Left, Low‚Äîmost severe
        </td>
        <td class="s5" dir="ltr">133</td>
        <td class="s5" dir="ltr">791</td>
        <td class="s4" dir="ltr">Wheel Sensor ABS Axle 2 Left</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 791, FMI: 10</td>
        <td class="s4" dir="ltr">
          Wheel Sensor ABS Axle 2 Left, Abnormal Rate of Change
        </td>
        <td class="s5" dir="ltr">130</td>
        <td class="s5" dir="ltr">791</td>
        <td class="s4" dir="ltr">Wheel Sensor ABS Axle 2 Left</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 6597, FMI: 9</td>
        <td class="s4" dir="ltr">Network Connection 1, Abnormal Update Rate</td>
        <td class="s5" dir="ltr">109</td>
        <td class="s5" dir="ltr">6597</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 2003, FMI: 31</td>
        <td class="s4" dir="ltr">Source Address 3</td>
        <td class="s5" dir="ltr">77</td>
        <td class="s5" dir="ltr">2003</td>
        <td class="s4" dir="ltr">Source Address 3</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 789, FMI: 10</td>
        <td class="s4" dir="ltr">
          Wheel Sensor ABS Axle 1 Left, Abnormal Rate of Change
        </td>
        <td class="s5" dir="ltr">75</td>
        <td class="s5" dir="ltr">789</td>
        <td class="s4" dir="ltr">Wheel Sensor ABS Axle 1 Left</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 789, FMI: 7</td>
        <td class="s4" dir="ltr">
          Wheel Sensor ABS Axle 1 Left, Not Responding Properly
        </td>
        <td class="s5" dir="ltr">64</td>
        <td class="s5" dir="ltr">789</td>
        <td class="s4" dir="ltr">Wheel Sensor ABS Axle 1 Left</td>
        <td class="s5" dir="ltr">7</td>
        <td class="s4" dir="ltr">Not Responding Properly</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 751, FMI: 9</td>
        <td class="s4" dir="ltr">
          Transmission Primary Shift Selector, Abnormal Update Rate
        </td>
        <td class="s5" dir="ltr">57</td>
        <td class="s5" dir="ltr">751</td>
        <td class="s4" dir="ltr">Transmission Primary Shift Selector</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 789, FMI: 9</td>
        <td class="s4" dir="ltr">
          Wheel Sensor ABS Axle 1 Left, Abnormal Update Rate
        </td>
        <td class="s5" dir="ltr">41</td>
        <td class="s5" dir="ltr">789</td>
        <td class="s4" dir="ltr">Wheel Sensor ABS Axle 1 Left</td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 97, FMI: 3</td>
        <td class="s4" dir="ltr">
          Water In Fuel Indicator 1, Voltage Above Normal
        </td>
        <td class="s5" dir="ltr">40</td>
        <td class="s5" dir="ltr">97</td>
        <td class="s4" dir="ltr">Water In Fuel Indicator</td>
        <td class="s5" dir="ltr">3</td>
        <td class="s4" dir="ltr">Voltage Above Normal</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 3556, FMI: 1</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 Hydrocarbon Doser 1, Low‚Äîmost severe
        </td>
        <td class="s5" dir="ltr">25</td>
        <td class="s5" dir="ltr">3556</td>
        <td class="s4" dir="ltr">Aftertreatment Fuel Injector #1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 1481, FMI: 9</td>
        <td class="s4" dir="ltr">
          Source Address of Controlling Device for Brake Control, Abnormal
          Update Rate
        </td>
        <td class="s5" dir="ltr">22</td>
        <td class="s5" dir="ltr">1481</td>
        <td class="s4" dir="ltr">
          Source Address of Controlling Device for Brake Control
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 5443, FMI: 16</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 Hydrocarbon Dosing System, High‚Äîmoderate severity
        </td>
        <td class="s5" dir="ltr">16</td>
        <td class="s5" dir="ltr">5443</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 5443, FMI: 15</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 Hydrocarbon Dosing System, High‚Äîleast severe
        </td>
        <td class="s5" dir="ltr">12</td>
        <td class="s5" dir="ltr">5443</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 3719, FMI: 31</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 Diesel Particulate Filter Soot Load Percent
        </td>
        <td class="s5" dir="ltr">7</td>
        <td class="s5" dir="ltr">3719</td>
        <td class="s4" dir="ltr">Particulate Trap #1 Soot Load Percent</td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 4364, FMI: 17</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 SCR Conversion Efficiency, Low‚Äîleast severe
        </td>
        <td class="s5" dir="ltr">5</td>
        <td class="s5" dir="ltr">4364</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 SCR Catalyst Conversion Efficiency
        </td>
        <td class="s5" dir="ltr">17</td>
        <td class="s4" dir="ltr">Low; least severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">FMI:9, CID:800</td>
        <td class="s4" dir="ltr">VIMS Main Module: Abnormal Update Rate</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">0</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">9</td>
        <td class="s4" dir="ltr">Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 1761, FMI: 31</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 Diesel Exhaust Fluid Tank Volume
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">1761</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 Diesel Exhaust Fluid Tank Level
        </td>
        <td class="s5" dir="ltr">31</td>
        <td class="s4" dir="ltr">Unknown</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 789, FMI: 1</td>
        <td class="s4" dir="ltr">
          Wheel Sensor ABS Axle 1 Left, Low‚Äîmost severe
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">789</td>
        <td class="s4" dir="ltr">Wheel Sensor ABS Axle 1 Left</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s4" dir="ltr">Low; most severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 3719, FMI: 15</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 Diesel Particulate Filter Soot Load Percent,
          High‚Äîleast severe
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">3719</td>
        <td class="s4" dir="ltr">Particulate Trap #1 Soot Load Percent</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 237 FMI: 11</td>
        <td class="s4" dir="ltr">OTHER JDL 000237.11</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">237</td>
        <td class="s4" dir="ltr">Vehicle Identification Number</td>
        <td class="s5" dir="ltr">11</td>
        <td class="s4" dir="ltr">Other Failure Mode</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 3719, FMI: 16</td>
        <td class="s4 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 467px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter Soot Load Percent,
            High‚Äîmoderate severity
          </div>
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3719</td>
        <td class="s4" dir="ltr">Particulate Trap #1 Soot Load Percent</td>
        <td class="s5" dir="ltr">16</td>
        <td class="s4" dir="ltr">High; moderate severity</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN: 639, FMI: 2</td>
        <td class="s4" dir="ltr">
          J1939 Network #1 Primary Vehicle Network, Erratic, Intermittent, or
          Incorrect
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">639</td>
        <td class="s4" dir="ltr">J1939 Network #1</td>
        <td class="s5" dir="ltr">2</td>
        <td class="s6 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 274px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s7"></td>
        <td class="s7"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9CD7A5</td>
        <td class="s4" dir="ltr">General vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D2FEA</td>
        <td class="s4" dir="ltr">General vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b98BCE3</td>
        <td class="s4" dir="ltr">Engine crankcase pressure 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">101</td>
        <td class="s4" dir="ltr">Engine Crankcase Pressure</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9A0EC5</td>
        <td class="s4" dir="ltr">General vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9A1561</td>
        <td class="s4" dir="ltr">Engine crankcase pressure 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">101</td>
        <td class="s4" dir="ltr">Engine Crankcase Pressure</td>
        <td class="s5" dir="ltr">15</td>
        <td class="s4" dir="ltr">High; least severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D25C7</td>
        <td class="s4" dir="ltr">General vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9E5DD2</td>
        <td class="s4" dir="ltr">Vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D25DB</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9CD70D</td>
        <td class="s4" dir="ltr">General vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9CD7A9</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9E2134</td>
        <td class="s4" dir="ltr">Vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D2FF0</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9A0EC4</td>
        <td class="s4" dir="ltr">Intake air heater system performance</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">9737</td>
        <td class="s4"></td>
        <td class="s5" dir="ltr">0</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D25C8</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9E5DD3</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D2738</td>
        <td class="s4" dir="ltr">General vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9E5ED7</td>
        <td class="s4" dir="ltr">Vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9CD71D</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9E2135</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9A0EC3</td>
        <td class="s4" dir="ltr">Control module performance</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">1543</td>
        <td class="s4" dir="ltr">ECU Power Supply Voltage #3</td>
        <td class="s5" dir="ltr">0</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D25D6</td>
        <td class="s4" dir="ltr">General vehicle warning light is on</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">168</td>
        <td class="s4" dir="ltr">Battery Potential / Power Input #1</td>
        <td class="s5" dir="ltr">NULL</td>
        <td class="s4"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9D273D</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">b9E5EEB</td>
        <td class="s4" dir="ltr">Aftertreatment 1 outlet NOx 1</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3226</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Outlet NOx</td>
        <td class="s5" dir="ltr">10</td>
        <td class="s4" dir="ltr">Abnormal Rate of Change</td>
      </tr>
    </tbody>
  </table>
</div>
 `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
