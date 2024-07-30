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
          CodeIdentifier
        </th>
        <th
          id="2021308707C1"
          style="width: 100px"
          class="column-headers-background"
        >
          CodeDescription
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
        <td class="s0" dir="ltr">CodeIdentifier</td>
        <td class="s0 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            CodeDescription
          </div>
        </td>
        <td class="s0" dir="ltr">SPN</td>
        <td class="s0 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            SPN Description
          </div>
        </td>
        <td class="s0" dir="ltr">FMI</td>
        <td class="s0" dir="ltr">FMI Description</td>
      </tr>
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
    </tbody>
  </table>
</div>
 `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
