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
          id="1475988513C0"
          style="width: 151px"
          class="column-headers-background"
        >
          Code Identifier
        </th>
        <th
          id="1475988513C1"
          style="width: 555px"
          class="column-headers-background"
        >
          Code Description
        </th>
        <th
          id="1475988513C2"
          style="width: 100px"
          class="column-headers-background"
        >
          Count
        </th>
        <th
          id="1475988513C3"
          style="width: 100px"
          class="column-headers-background"
        >
          SPN
        </th>
        <th
          id="1475988513C4"
          style="width: 326px"
          class="column-headers-background"
        >
          SPN Description
        </th>
        <th
          id="1475988513C5"
          style="width: 100px"
          class="column-headers-background"
        >
          MID
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:1614, MID:299</td>
        <td class="s4" dir="ltr">Overspeed: High - most severe (3)</td>
        <td class="s5" dir="ltr">60</td>
        <td class="s5" dir="ltr">1614</td>
        <td class="s4" dir="ltr">Overspeed</td>
        <td class="s5" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:96, MID:325</td>
        <td class="s4" dir="ltr">Fuel Level: High - most severe (3)</td>
        <td class="s5" dir="ltr">13</td>
        <td class="s5" dir="ltr">96</td>
        <td class="s4" dir="ltr">Fuel Level</td>
        <td class="s5" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523602, MID:263</td>
        <td class="s4" dir="ltr">UNKNOWN</td>
        <td class="s5" dir="ltr">12</td>
        <td class="s5" dir="ltr">523602</td>
        <td class="s4" dir="ltr">Aftertreatment Regeneration Frequency</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:2448, MID:277</td>
        <td class="s4" dir="ltr">
          Generator Average AC RMS Current: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">9</td>
        <td class="s5" dir="ltr">2448</td>
        <td class="s4" dir="ltr">Generator Average AC RMS Current</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5246, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment SCR Operator Inducement Severity: High - most severe
          (3)
        </td>
        <td class="s5" dir="ltr">8</td>
        <td class="s5" dir="ltr">5246</td>
        <td class="s4" dir="ltr">
          Aftertreatment SCR Operator Inducement Severity
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5246, MID:263</td>
        <td class="s4" dir="ltr">
          Aftertreatment SCR Operator Inducement Severity: High - most severe
          (3)
        </td>
        <td class="s5" dir="ltr">6</td>
        <td class="s5" dir="ltr">5246</td>
        <td class="s4" dir="ltr">
          Aftertreatment SCR Operator Inducement Severity
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:190, MID:263</td>
        <td class="s4" dir="ltr">Engine Speed: High - most severe (3)</td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">190</td>
        <td class="s4" dir="ltr">Engine Speed</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">4</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, MID:277</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:4193, MID:12692</td>
        <td class="s4" dir="ltr">
          Engine Coolant Pump Outlet Temperature: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">3</td>
        <td class="s5" dir="ltr">4193</td>
        <td class="s4" dir="ltr">Engine Coolant Pump Outlet Temperature</td>
        <td class="s5" dir="ltr">12692</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:174, MID:263</td>
        <td class="s4" dir="ltr">
          Engine Fuel Temperature 1: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">174</td>
        <td class="s4" dir="ltr">Engine Fuel Temperature 1</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5571, MID:263</td>
        <td class="s4" dir="ltr">
          High Pressure Common Rail Fuel Pressure Relief Valve: High - most
          severe (3)
        </td>
        <td class="s5" dir="ltr">2</td>
        <td class="s5" dir="ltr">5571</td>
        <td class="s4" dir="ltr">
          High Pressure Common Rail Fuel Pressure Relief Valve
        </td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:127, MID:12547</td>
        <td class="s4" dir="ltr">
          Transmission Oil Pressure: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">127</td>
        <td class="s4" dir="ltr">Transmission Oil Pressure</td>
        <td class="s5" dir="ltr">12547</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, MID:12615</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">12615</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:523600, MID:263</td>
        <td class="s4" dir="ltr">Fuel Pump Calibration Not Completed</td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">523600</td>
        <td class="s4" dir="ltr">Fuel Pump Calibration Not Completed</td>
        <td class="s5" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:5245, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment Selective Catalytic Reduction Operator Inducement
          Active: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">5245</td>
        <td class="s4" dir="ltr">
          Aftertreatment 1 DEF Tank Low Level Indicator
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:110, MID:12544</td>
        <td class="s4" dir="ltr">
          Engine Coolant Temperature: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">110</td>
        <td class="s4" dir="ltr">Engine Coolant Temperature</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3242, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DPF Intake Temperature: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3242</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 DPF Intake Gas Temperature
        </td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s4" dir="ltr">SPN:3484, MID:12544</td>
        <td class="s4" dir="ltr">
          Aftertreatment #1 Ignition: High - most severe (3)
        </td>
        <td class="s5" dir="ltr">1</td>
        <td class="s5" dir="ltr">3484</td>
        <td class="s4" dir="ltr">Aftertreatment #1 Ignition</td>
        <td class="s5" dir="ltr">12544</td>
      </tr>
    </tbody>
  </table>
</div>
 `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
