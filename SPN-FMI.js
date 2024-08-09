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

  .fault-table-wrapper td .softmerge-inner {
    width: 100% !important;
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

  /* tr:nth-child(even) {
                background-color: #f2f2f2;
              } */

  .highlight-even {
    background-color: #f2f2f2 !important;
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
          style="width: 200px"
          class="column-headers-background"
        >
          Code Identifier
        </th>
        <th
          id="2021308707C1"
          style="width: 100px"
          class="column-headers-background"
        >
          Code Description
        </th>
        <th
          id="2021308707C2"
          style="width: 100px"
          class="column-headers-background"
        >
          SPN
        </th>
        <th
          id="2021308707C3"
          style="width: 100px"
          class="column-headers-background"
        >
          SPN Description
        </th>
        <th
          id="2021308707C4"
          style="width: 100px"
          class="column-headers-background"
        >
          FMI
        </th>
        <th
          id="2021308707C5"
          style="width: 100px"
          class="column-headers-background"
        >
          FMI Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 791, FMI: 1</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 2 Left, Low‚Äîmost severe
          </div>
        </td>
        <td class="s2" dir="ltr">791</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 2 Left
          </div>
        </td>
        <td class="s2" dir="ltr">1</td>
        <td class="s1" dir="ltr">Low; most severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 791, FMI: 10</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 2 Left, Abnormal Rate of Change
          </div>
        </td>
        <td class="s2" dir="ltr">791</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 2 Left
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 6597, FMI: 9</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Network Connection 1, Abnormal Update Rate
          </div>
        </td>
        <td class="s2" dir="ltr">6597</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">9</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Update Rate
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 2003, FMI: 31</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Source Address 3
          </div>
        </td>
        <td class="s2" dir="ltr">2003</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Source Address 3
          </div>
        </td>
        <td class="s2" dir="ltr">31</td>
        <td class="s1" dir="ltr">Unknown</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 789, FMI: 10</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left, Abnormal Rate of Change
          </div>
        </td>
        <td class="s2" dir="ltr">789</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 789, FMI: 7</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left, Not Responding Properly
          </div>
        </td>
        <td class="s2" dir="ltr">789</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left
          </div>
        </td>
        <td class="s2" dir="ltr">7</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Not Responding Properly
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 751, FMI: 9</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Transmission Primary Shift Selector, Abnormal Update Rate
          </div>
        </td>
        <td class="s2" dir="ltr">751</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Transmission Primary Shift Selector
          </div>
        </td>
        <td class="s2" dir="ltr">9</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Update Rate
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 789, FMI: 9</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left, Abnormal Update Rate
          </div>
        </td>
        <td class="s2" dir="ltr">789</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left
          </div>
        </td>
        <td class="s2" dir="ltr">9</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Update Rate
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 97, FMI: 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Water In Fuel Indicator 1, Voltage Above Normal
          </div>
        </td>
        <td class="s2" dir="ltr">97</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Water In Fuel Indicator
          </div>
        </td>
        <td class="s2" dir="ltr">3</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Voltage Above Normal
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 3556, FMI: 1</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Hydrocarbon Doser 1, Low‚Äîmost severe
          </div>
        </td>
        <td class="s2" dir="ltr">3556</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment Fuel Injector #1
          </div>
        </td>
        <td class="s2" dir="ltr">1</td>
        <td class="s1" dir="ltr">Low; most severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 1481, FMI: 9</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Source Address of Controlling Device for Brake Control, Abnormal
            Update Rate
          </div>
        </td>
        <td class="s2" dir="ltr">1481</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Source Address of Controlling Device for Brake Control
          </div>
        </td>
        <td class="s2" dir="ltr">9</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Update Rate
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 5443, FMI: 16</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Hydrocarbon Dosing System, High‚Äîmoderate severity
          </div>
        </td>
        <td class="s2" dir="ltr">5443</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">16</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            High; moderate severity
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 5443, FMI: 15</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Hydrocarbon Dosing System, High‚Äîleast severe
          </div>
        </td>
        <td class="s2" dir="ltr">5443</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">15</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            High; least severe
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 3719, FMI: 31</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter Soot Load Percent
          </div>
        </td>
        <td class="s2" dir="ltr">3719</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Particulate Trap #1 Soot Load Percent
          </div>
        </td>
        <td class="s2" dir="ltr">31</td>
        <td class="s1" dir="ltr">Unknown</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 50353</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            High‚Äîmost severe
          </div>
        </td>
        <td class="s2" dir="ltr">50353</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">0</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 3719</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter Soot Load Percent,
            High‚Äîmost severe
          </div>
        </td>
        <td class="s2" dir="ltr">3719</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Particulate Trap #1 Soot Load Percent
          </div>
        </td>
        <td class="s2" dir="ltr">0</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 5443</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Hydrocarbon Dosing System, High‚Äîmost severe
          </div>
        </td>
        <td class="s2" dir="ltr">5443</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">0</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 4364, FMI: 17</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 SCR Conversion Efficiency, Low‚Äîleast severe
          </div>
        </td>
        <td class="s2" dir="ltr">4364</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 SCR Catalyst Conversion Efficiency
          </div>
        </td>
        <td class="s2" dir="ltr">17</td>
        <td class="s1" dir="ltr">Low; least severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 36017</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            High‚Äîmost severe
          </div>
        </td>
        <td class="s2" dir="ltr">36017</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">0</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">FMI:9, CID:800</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            VIMS Main Module: Abnormal Update Rate
          </div>
        </td>
        <td class="s2" dir="ltr">0</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">9</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Update Rate
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 1761, FMI: 31</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Volume
          </div>
        </td>
        <td class="s2" dir="ltr">1761</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Diesel Exhaust Fluid Tank Level
          </div>
        </td>
        <td class="s2" dir="ltr">31</td>
        <td class="s1" dir="ltr">Unknown</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 789, FMI: 1</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left, Low‚Äîmost severe
          </div>
        </td>
        <td class="s2" dir="ltr">789</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Wheel Sensor ABS Axle 1 Left
          </div>
        </td>
        <td class="s2" dir="ltr">1</td>
        <td class="s1" dir="ltr">Low; most severe</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 3719, FMI: 15</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter Soot Load Percent,
            High‚Äîleast severe
          </div>
        </td>
        <td class="s2" dir="ltr">3719</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Particulate Trap #1 Soot Load Percent
          </div>
        </td>
        <td class="s2" dir="ltr">15</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            High; least severe
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9E2135</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9A0EC3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Control module performance
          </div>
        </td>
        <td class="s2" dir="ltr">1543</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            ECU Power Supply Voltage #3
          </div>
        </td>
        <td class="s2" dir="ltr">0</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D25D6</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            General vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D273D</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9E5EEB</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 639, FMI: 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            J1939 Network #1 Primary Vehicle Network, Erratic, Intermittent, or
            Incorrect
          </div>
        </td>
        <td class="s2" dir="ltr">639</td>
        <td class="s1" dir="ltr">J1939 Network #1</td>
        <td class="s2" dir="ltr">2</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Erratic, Intermittent, or Incorrect
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9CD7A5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            General vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D2FEA</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            General vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b98BCE3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine crankcase pressure 1
          </div>
        </td>
        <td class="s2" dir="ltr">101</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Crankcase Pressure
          </div>
        </td>
        <td class="s2" dir="ltr">15</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            High; least severe
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9A0EC5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            General vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 3719, FMI: 16</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter Soot Load Percent,
            High‚Äîmoderate severity
          </div>
        </td>
        <td class="s2" dir="ltr">3719</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Particulate Trap #1 Soot Load Percent
          </div>
        </td>
        <td class="s2" dir="ltr">16</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            High; moderate severity
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9A1561</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine crankcase pressure 1
          </div>
        </td>
        <td class="s2" dir="ltr">101</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Crankcase Pressure
          </div>
        </td>
        <td class="s2" dir="ltr">15</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            High; least severe
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN: 237 FMI: 11</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            OTHER JDL 000237.11
          </div>
        </td>
        <td class="s2" dir="ltr">237</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Vehicle Identification Number
          </div>
        </td>
        <td class="s2" dir="ltr">11</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Other Failure Mode
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D25C7</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            General vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9E5DD2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D25DB</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9CD70D</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            General vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9CD7A9</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9E2134</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D2FF0</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9A0EC4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Intake air heater system performance
          </div>
        </td>
        <td class="s2" dir="ltr">9737</td>
        <td class="s1"></td>
        <td class="s2" dir="ltr">0</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D25C8</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9E5DD3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9D2738</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            General vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9E5ED7</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Vehicle warning light is on
          </div>
        </td>
        <td class="s2" dir="ltr">168</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Battery Potential / Power Input #1
          </div>
        </td>
        <td class="s1" dir="ltr">NULL</td>
        <td class="s1"></td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">b9CD71D</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 outlet NOx 1
          </div>
        </td>
        <td class="s2" dir="ltr">3226</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Outlet NOx
          </div>
        </td>
        <td class="s2" dir="ltr">10</td>
        <td class="s3 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 198px; left: -1px">
            Abnormal Rate of Change
          </div>
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 101 FMI 16</td>
        <td class="s1" dir="ltr">
          Crankcase Pressure, Moderately Severe Level
        </td>
        <td class="s1" dir="ltr">SPN 101</td>
        <td class="s1" dir="ltr">Crankcase Pressure</td>
        <td class="s1" dir="ltr">FMI 16</td>
        <td class="s1" dir="ltr">
          Data Valid But Above Normal Operating Range - Moderately Severe Level
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 411 FMI 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Exhaust Gas Recirculation (EGR) Differential Pressure, Data Erratic,
            Intermittent, or Incorrect
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 411</td>
        <td class="s1" dir="ltr">
          Exhaust Gas Recirculation (EGR) Differential Pressure
        </td>
        <td class="s1" dir="ltr">FMI 2</td>
        <td class="s1" dir="ltr">Data Erratic, Intermittent, or Incorrect</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 190 FMI 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Speed Sensor,Data Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 190</td>
        <td class="s1" dir="ltr">Engine Speed Sensor</td>
        <td class="s1" dir="ltr">FMI 2</td>
        <td class="s1" dir="ltr">Data Erratic, Intermittent, or Incorrect</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3509 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            5V Sensor Supply Bank 1, Voltage Below Normal or Shorted to Low
            Source
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 3509</td>
        <td class="s1" dir="ltr">SPN 3509: 5V Sensor Supply Bank 1</td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 4334 FMI 18</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            DEF Pressure Sensor, Data Valid but Below Normal Operating Range -
            Moderately Severe Level
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 4334</td>
        <td class="s1" dir="ltr">SPN 4334: DEF Pressure Sensor</td>
        <td class="s1" dir="ltr">FMI 18</td>
        <td class="s1" dir="ltr">
          FMI 18: Data Valid but Below Normal Operating Range - Moderately
          Severe Level
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 168 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Battery Potential / Power Input, Voltage Below Normal or Shorted to
            Low Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 168</td>
        <td class="s1" dir="ltr">SPN 168: Battery Potential / Power Input</td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 723 FMI 8</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Transmission Output Shaft Speed, Abnormal Frequency, Pulse Width, or
            Period
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 723</td>
        <td class="s1" dir="ltr">SPN 723: Transmission Output Shaft Speed</td>
        <td class="s1" dir="ltr">FMI 8</td>
        <td class="s1" dir="ltr">
          FMI 8: Abnormal Frequency, Pulse Width, or Period
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 108 FMI 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Barometric Pressure ,Voltage Above Normal, or Shorted to High Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 108</td>
        <td class="s1" dir="ltr">SPN 108: Barometric Pressure</td>
        <td class="s1" dir="ltr">FMI 3</td>
        <td class="s1" dir="ltr">
          FMI 3: Voltage Above Normal, or Shorted to High Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3480 FMI 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            EGR Valve Position , Data Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 3480</td>
        <td class="s1" dir="ltr">SPN 3480: EGR Valve Position</td>
        <td class="s1" dir="ltr">FMI 2</td>
        <td class="s1" dir="ltr">
          FMI 2: Data Erratic, Intermittent, or Incorrect
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 111 FMI 17</td>
        <td class="s1" dir="ltr">Engine Coolant Level, Low</td>
        <td class="s2" dir="ltr">SPN 111</td>
        <td class="s1" dir="ltr">SPN 111: Engine Coolant Level</td>
        <td class="s1" dir="ltr">FMI 17</td>
        <td class="s1" dir="ltr">FMI 17: Low</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 4077 FMI 14</td>
        <td class="s1" dir="ltr">
          Engine Protection System , Special Instruction
        </td>
        <td class="s1" dir="ltr">SPN 4077</td>
        <td class="s1" dir="ltr">SPN 4077: Engine Protection System</td>
        <td class="s1" dir="ltr">FMI 14</td>
        <td class="s1" dir="ltr">FMI 14: Special Instruction</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 101 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Crankcase Pressure ,Voltage Below Normal or Shorted to Low Source
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 101</td>
        <td class="s1" dir="ltr">SPN 101: Crankcase Pressure</td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 110 FMI 15</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Coolant Temperature ,High - Moderately Severe Level
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 110</td>
        <td class="s1" dir="ltr">SPN 110: Engine Coolant Temperature</td>
        <td class="s1" dir="ltr">FMI 15</td>
        <td class="s1" dir="ltr">FMI 15: High - Moderately Severe Level</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3242 FMI 18</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Intake NOx ,Data Valid but Below Normal Operating
            Range - Moderately Severe Level
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 3242</td>
        <td class="s1" dir="ltr">SPN 3242: Aftertreatment 1 Intake NOx</td>
        <td class="s1" dir="ltr">FMI 18</td>
        <td class="s1" dir="ltr">
          FMI 18: Data Valid but Below Normal Operating Range - Moderately
          Severe Level
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 101 FMI 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Crankcase Pressure , Data Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 101</td>
        <td class="s1" dir="ltr">SPN 101: Crankcase Pressure</td>
        <td class="s1" dir="ltr">FMI 2</td>
        <td class="s1" dir="ltr">
          FMI 2: Data Erratic, Intermittent, or Incorrect
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 168 FMI 18</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Battery Potential / Power Input ,Data Valid but Below Normal
            Operating Range - Moderately Severe Level
          </div>
        </td>
        <td class="s1" dir="ltr">SPN 168</td>
        <td class="s1" dir="ltr">SPN 168: Battery Potential / Power Input</td>
        <td class="s1" dir="ltr">FMI 18</td>
        <td class="s1" dir="ltr">
          FMI 18: Data Valid but Below Normal Operating Range - Moderately
          Severe Level
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3360 FMI 9</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Exhaust Temperature ,Abnormal Update Rate
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3360</td>
        <td class="s2" dir="ltr">
          SPN 3360: Aftertreatment 1 Exhaust Temperature
        </td>
        <td class="s2" dir="ltr">FMI 9</td>
        <td class="s1" dir="ltr">FMI 9: Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 1235 FMI 9</td>
        <td class="s1" dir="ltr">Turbocharger 1 Speed ,Abnormal Update Rate</td>
        <td class="s2" dir="ltr">SPN 1235</td>
        <td class="s1" dir="ltr">SPN 1235: Turbocharger 1 Speed</td>
        <td class="s1" dir="ltr">FMI 9</td>
        <td class="s2" dir="ltr">FMI 9: Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 84 FMI 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Wheel-Based Vehicle Speed , Data Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 84</td>
        <td class="s1" dir="ltr">SPN 84: Wheel-Based Vehicle Speed</td>
        <td class="s1" dir="ltr">FMI 2</td>
        <td class="s1" dir="ltr">
          FMI 2: Data Erratic, Intermittent, or Incorrect
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 110 FMI 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Coolant Temperature, Voltage Above Normal or Shorted to High
            Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 110</td>
        <td class="s1" dir="ltr">SPN 110: Engine Coolant Temperature</td>
        <td class="s1" dir="ltr">FMI 3</td>
        <td class="s1" dir="ltr">
          FMI 3: Voltage Above Normal or Shorted to High Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 630 FMI 13</td>
        <td class="s1" dir="ltr">
          Engine Crankcase Pressure, Out of Calibration
        </td>
        <td class="s2" dir="ltr">SPN 630</td>
        <td class="s1" dir="ltr">SPN 630: Engine Crankcase Pressure</td>
        <td class="s1" dir="ltr">FMI 13</td>
        <td class="s1" dir="ltr">FMI 13: Out of Calibration</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3563 FMI 21</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Particulate Matter Sensor, Data Drifted High
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3563</td>
        <td class="s1" dir="ltr">
          SPN 3563: Aftertreatment 1 Particulate Matter Sensor
        </td>
        <td class="s1" dir="ltr">FMI 21</td>
        <td class="s1" dir="ltr">FMI 21: Data Drifted High</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 172 FMI 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Fuel Temperature, Voltage Above Normal or Shorted to High
            Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 172</td>
        <td class="s1" dir="ltr">SPN 172: Engine Fuel Temperature</td>
        <td class="s1" dir="ltr">FMI 3</td>
        <td class="s1" dir="ltr">
          FMI 3: Voltage Above Normal or Shorted to High Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3563 FMI 16</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Particulate Matter Sensor, Parameter Not Available
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3563</td>
        <td class="s1" dir="ltr">
          SPN 3563: Aftertreatment 1 Particulate Matter Sensor
        </td>
        <td class="s1" dir="ltr">FMI 16</td>
        <td class="s1" dir="ltr">FMI 16: Parameter Not Available</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 723 FMI 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Transmission Range Position ,Data Erratic, Intermittent, or
            Incorrect
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 723</td>
        <td class="s1" dir="ltr">SPN 723: Transmission Range Position</td>
        <td class="s1" dir="ltr">FMI 2</td>
        <td class="s1" dir="ltr">
          FMI 2: Data Erratic, Intermittent, or Incorrect
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 1072 FMI 5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Ambient Air Temperature ,Current Below Normal or Open Circuit
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 1072</td>
        <td class="s1" dir="ltr">SPN 1072: Ambient Air Temperature</td>
        <td class="s1" dir="ltr">FMI 5</td>
        <td class="s1" dir="ltr">
          FMI 5: Current Below Normal or Open Circuit
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 729 FMI 5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Transmission Range Position ,Current Below Normal or Open Circuit
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 729</td>
        <td class="s1" dir="ltr">SPN 729: Transmission Range Position</td>
        <td class="s1" dir="ltr">FMI 5</td>
        <td class="s1" dir="ltr">
          FMI 5: Current Below Normal or Open Circuit
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 639 FMI 9</td>
        <td class="s1" dir="ltr">ECM , Abnormal Update Rate</td>
        <td class="s2" dir="ltr">SPN 639</td>
        <td class="s1" dir="ltr">SPN 639: ECM</td>
        <td class="s1" dir="ltr">FMI 9</td>
        <td class="s2" dir="ltr">FMI 9: Abnormal Update Rate</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 190 FMI 14</td>
        <td class="s1" dir="ltr">Engine Speed ,Special Instruction</td>
        <td class="s2" dir="ltr">SPN 190</td>
        <td class="s1" dir="ltr">SPN 190: Engine Speed</td>
        <td class="s1" dir="ltr">FMI 14</td>
        <td class="s1" dir="ltr">FMI 14: Special Instruction</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 411 FMI 13</td>
        <td class="s1" dir="ltr">
          EGR Differential Pressure , Out of Calibration
        </td>
        <td class="s2" dir="ltr">SPN 411</td>
        <td class="s2" dir="ltr">SPN 411: EGR Differential Pressure</td>
        <td class="s2" dir="ltr">FMI 13</td>
        <td class="s1" dir="ltr">FMI 13: Out of Calibration</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3242 FMI 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Intake NOx, Voltage Above Normal or Shorted to High
            Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3242</td>
        <td class="s1" dir="ltr">SPN 3242: Aftertreatment 1 Intake NOx</td>
        <td class="s1" dir="ltr">FMI 3</td>
        <td class="s1" dir="ltr">
          FMI 3: Voltage Above Normal or Shorted to High Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3362 FMI 31</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Fuel Temperature , Not Responding Properly
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3362</td>
        <td class="s1" dir="ltr">
          SPN 3362: Aftertreatment 1 Fuel Temperature
        </td>
        <td class="s1" dir="ltr">FMI 31</td>
        <td class="s1" dir="ltr">FMI 31: Not Responding Properly</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 94 FMI 15</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Fuel Delivery Pressure, High - Moderately Severe Level
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 94</td>
        <td class="s1" dir="ltr">SPN 94: Fuel Delivery Pressure</td>
        <td class="s1" dir="ltr">FMI 15</td>
        <td class="s1" dir="ltr">FMI 15: High - Moderately Severe Level</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 164 FMI 16</td>
        <td class="s1" dir="ltr">Boost Pressure , Parameter Not Available</td>
        <td class="s2" dir="ltr">SPN 164</td>
        <td class="s1" dir="ltr">SPN 164: Boost Pressure</td>
        <td class="s1" dir="ltr">FMI 16</td>
        <td class="s1" dir="ltr">FMI 16: Parameter Not Available</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3696 FMI 13</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter (DPF) , Out of
            Calibration
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3696</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 362px; left: -1px">
            SPN 3696: Aftertreatment 1 Diesel Particulate Filter (DPF)
          </div>
        </td>
        <td class="s1" dir="ltr">FMI 13</td>
        <td class="s1" dir="ltr">FMI 13: Out of Calibration</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 412 FMI 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            EGR Temperature, Voltage Above Normal or Shorted to High Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 412</td>
        <td class="s1" dir="ltr">SPN 412: EGR Temperature</td>
        <td class="s1" dir="ltr">FMI 3</td>
        <td class="s1" dir="ltr">
          FMI 3: Voltage Above Normal or Shorted to High Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 174 FMI 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Fuel Temperature, Voltage Above Normal or Shorted to High Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 174</td>
        <td class="s1" dir="ltr">SPN 174: Fuel Temperature</td>
        <td class="s1" dir="ltr">FMI 3</td>
        <td class="s1" dir="ltr">
          FMI 3: Voltage Above Normal or Shorted to High Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3660 FMI 5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Protection System, Current Below Normal or Open Circuit
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3660</td>
        <td class="s1" dir="ltr">SPN 3660: Engine Protection System</td>
        <td class="s1" dir="ltr">FMI 5</td>
        <td class="s1" dir="ltr">
          FMI 5: Current Below Normal or Open Circuit
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 1110 FMI 31</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Diesel Oxidation Catalyst Temperature, Not Responding Properly
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 1110</td>
        <td class="s1" dir="ltr">
          SPN 1110: Diesel Oxidation Catalyst Temperature
        </td>
        <td class="s1" dir="ltr">FMI 31</td>
        <td class="s1" dir="ltr">FMI 31: Not Responding Properly</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 630 FMI 12</td>
        <td class="s1" dir="ltr">
          Engine Crankcase Pressure, Device or Component
        </td>
        <td class="s2" dir="ltr">SPN 630</td>
        <td class="s1" dir="ltr">SPN 630: Engine Crankcase Pressure</td>
        <td class="s1" dir="ltr">FMI 12</td>
        <td class="s1" dir="ltr">FMI 12: Device or Component</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 108 FMI 13</td>
        <td class="s1" dir="ltr">Barometric Pressure, Out of Calibration</td>
        <td class="s2" dir="ltr">SPN 108</td>
        <td class="s1" dir="ltr">SPN 108: Barometric Pressure</td>
        <td class="s1" dir="ltr">FMI 13</td>
        <td class="s1" dir="ltr">FMI 13: Out of Calibration</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 411 FMI 5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            EGR Differential Pressure, Current Below Normal or Open Circuit
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 411</td>
        <td class="s1" dir="ltr">SPN 411: EGR Differential Pressure</td>
        <td class="s1" dir="ltr">FMI 5</td>
        <td class="s1" dir="ltr">
          FMI 5: Current Below Normal or Open Circuit
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3662 FMI 5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Fuel Temperature, Current Below Normal or Open
            Circuit
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3662</td>
        <td class="s1" dir="ltr">
          SPN 3662: Aftertreatment 1 Fuel Temperature
        </td>
        <td class="s1" dir="ltr">FMI 5</td>
        <td class="s1" dir="ltr">
          FMI 5: Current Below Normal or Open Circuit
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 101 FMI 0</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Crankcase Pressure, Data Valid But Above Normal Operating Range
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 101</td>
        <td class="s3" dir="ltr">SPN 101: Crankcase Pressure</td>
        <td class="s3" dir="ltr">FMI 0</td>
        <td class="s1" dir="ltr">
          FMI 0: Data Valid But Above Normal Operating Range
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 174 FMI 0</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Fuel Temperature, Data Valid But Above Normal Operating Range
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 174</td>
        <td class="s1" dir="ltr">SPN 174: Fuel Temperature</td>
        <td class="s1" dir="ltr">FMI 0</td>
        <td class="s1" dir="ltr">
          FMI 0: Data Valid But Above Normal Operating Range
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 637 FMI 8</td>
        <td class="s1" dir="ltr">
          ECM, Abnormal Frequency, Pulse Width, or Period
        </td>
        <td class="s2" dir="ltr">SPN 637</td>
        <td class="s1" dir="ltr">SPN 637: ECM</td>
        <td class="s1" dir="ltr">FMI 8</td>
        <td class="s1" dir="ltr">
          FMI 8: Abnormal Frequency, Pulse Width, or Period
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3609 FMI 12</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter , Device or Component
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3609</td>
        <td class="s1" dir="ltr">
          SPN 3609: Aftertreatment 1 Diesel Particulate Filter
        </td>
        <td class="s1" dir="ltr">FMI 12</td>
        <td class="s1" dir="ltr">FMI 12: Device or Component</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 4354 FMI 5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter , Current Below Normal or
            Open Circuit
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 4354</td>
        <td class="s1" dir="ltr">
          SPN 4354: Aftertreatment 1 Diesel Particulate Filter
        </td>
        <td class="s1" dir="ltr">FMI 5</td>
        <td class="s1" dir="ltr">
          FMI 5: Current Below Normal or Open Circuit
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3659 FMI 5</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter, Current Below Normal or
            Open Circuit
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3659</td>
        <td class="s1" dir="ltr">
          SPN 3659: Aftertreatment 1 Diesel Particulate Filter
        </td>
        <td class="s1" dir="ltr">FMI 5</td>
        <td class="s1" dir="ltr">
          FMI 5: Current Below Normal or Open Circuit
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 729 FMI 3</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Transmission Range Position, Voltage Above Normal or Shorted to High
            Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 729</td>
        <td class="s1" dir="ltr">SPN 729: Transmission Range Position</td>
        <td class="s1" dir="ltr">FMI 3</td>
        <td class="s1" dir="ltr">
          FMI 3: Voltage Above Normal or Shorted to High Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 4077 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Protection System , Voltage Below Normal or Shorted to Low
            Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 4077</td>
        <td class="s1" dir="ltr">SPN 4077: Engine Protection System</td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 729 FMI 18</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Transmission Range Position, Data Valid but Below Normal Operating
            Range - Moderately Severe Level
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 729</td>
        <td class="s1" dir="ltr">SPN 729: Transmission Range Position</td>
        <td class="s1" dir="ltr">FMI 18</td>
        <td class="s2" dir="ltr">
          FMI 18: Data Valid but Below Normal Operating Range - Moderately
          Severe Level
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 411 FMI 7</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            EGR Differential Pressure , Mechanical System Not Responding or Out
            of Adjustment
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 411</td>
        <td class="s1" dir="ltr">SPN 411: EGR Differential Pressure</td>
        <td class="s1" dir="ltr">FMI 7</td>
        <td class="s1" dir="ltr">
          FMI 7: Mechanical System Not Responding or Out of Adjustment
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 100 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Oil Pressure , Voltage Below Normal or Shorted to Low Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 100</td>
        <td class="s1" dir="ltr">SPN 100: Engine Oil Pressure</td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 412 FMI 2</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            EGR Temperature, Data Erratic, Intermittent, or Incorrect
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 412</td>
        <td class="s1" dir="ltr">SPN 412: EGR Temperature</td>
        <td class="s1" dir="ltr">FMI 2</td>
        <td class="s1" dir="ltr">
          FMI 2: Data Erratic, Intermittent, or Incorrect
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3609 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter, Voltage Below Normal or
            Shorted to Low Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3609</td>
        <td class="s1" dir="ltr">
          SPN 3609: Aftertreatment 1 Diesel Particulate Filter
        </td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 110 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Engine Coolant Temperature, Voltage Below Normal or Shorted to Low
            Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 110</td>
        <td class="s1" dir="ltr">SPN 110: Engine Coolant Temperature</td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 91 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Accelerator Pedal Position, Voltage Below Normal or Shorted to Low
            Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 91</td>
        <td class="s1" dir="ltr">SPN 91: Accelerator Pedal Position</td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 190 FMI 15</td>
        <td class="s1" dir="ltr">
          Engine Speed , High - Moderately Severe Level
        </td>
        <td class="s2" dir="ltr">SPN 190</td>
        <td class="s1" dir="ltr">SPN 190: Engine Speed</td>
        <td class="s1" dir="ltr">FMI 15</td>
        <td class="s1" dir="ltr">FMI 15: High - Moderately Severe Level</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 3563 FMI 4</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Particulate Matter Sensor, Voltage Below Normal or
            Shorted to Low Source
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 3563</td>
        <td class="s1" dir="ltr">
          SPN 3563: Aftertreatment 1 Particulate Matter Sensor
        </td>
        <td class="s1" dir="ltr">FMI 4</td>
        <td class="s1" dir="ltr">
          FMI 4: Voltage Below Normal or Shorted to Low Source
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 652 FMI 7</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Ignition Timing, Mechanical System Not Responding or Out of
            Adjustment
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 652</td>
        <td class="s1" dir="ltr">SPN 652: Ignition Timing</td>
        <td class="s1" dir="ltr">FMI 7</td>
        <td class="s1" dir="ltr">
          FMI 7: Mechanical System Not Responding or Out of Adjustment
        </td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN 5246 FMI 15</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 329px; left: -1px">
            Aftertreatment 1 Diesel Particulate Filter ,High - Moderately Severe
            Level
          </div>
        </td>
        <td class="s2" dir="ltr">SPN 5246</td>
        <td class="s1" dir="ltr">
          SPN 5246: Aftertreatment 1 Diesel Particulate Filter
        </td>
        <td class="s1" dir="ltr">FMI 15</td>
        <td class="s1" dir="ltr">FMI 15: High - Moderately Severe Level</td>
      </tr>
    </tbody>
  </table>
</div>
 `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
