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
          id="1475988513C0"
          style="width: 151px"
          class="column-headers-background"
        >
          Code Identifier
        </th>
        <th
          id="1475988513C1"
          style="width: 100px"
          class="column-headers-background"
        >
          Code Description
        </th>
        <th
          id="1475988513C2"
          style="width: 100px"
          class="column-headers-background"
        >
          SPN
        </th>
        <th
          id="1475988513C3"
          style="width: 100px"
          class="column-headers-background"
        >
          SPN Description
        </th>
        <th
          id="1475988513C4"
          style="width: 100px"
          class="column-headers-background"
        >
          MID
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:1614, MID:299</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Overspeed: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">1614</td>
        <td class="s1" dir="ltr">Overspeed</td>
        <td class="s2" dir="ltr">299</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:96, MID:325</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Fuel Level: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">96</td>
        <td class="s1" dir="ltr">Fuel Level</td>
        <td class="s2" dir="ltr">325</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:523602, MID:263</td>
        <td class="s1" dir="ltr">UNKNOWN</td>
        <td class="s2" dir="ltr">523602</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment Regeneration Frequency
          </div>
        </td>
        <td class="s2" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:2448, MID:277</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Generator Average AC RMS Current: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">2448</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Generator Average AC RMS Current
          </div>
        </td>
        <td class="s2" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:5246, MID:12544</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity: High - most severe
            (3)
          </div>
        </td>
        <td class="s2" dir="ltr">5246</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity
          </div>
        </td>
        <td class="s2" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:5246, MID:263</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity: High - most severe
            (3)
          </div>
        </td>
        <td class="s2" dir="ltr">5246</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment SCR Operator Inducement Severity
          </div>
        </td>
        <td class="s2" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:190, MID:263</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Speed: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">190</td>
        <td class="s1" dir="ltr">Engine Speed</td>
        <td class="s2" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:110, MID:263</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">110</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature
          </div>
        </td>
        <td class="s2" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:110, MID:277</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">110</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature
          </div>
        </td>
        <td class="s2" dir="ltr">277</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:4193, MID:12692</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Pump Outlet Temperature: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">4193</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Pump Outlet Temperature
          </div>
        </td>
        <td class="s2" dir="ltr">12692</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:174, MID:263</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Fuel Temperature 1: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">174</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Fuel Temperature 1
          </div>
        </td>
        <td class="s2" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:5571, MID:263</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            High Pressure Common Rail Fuel Pressure Relief Valve: High - most
            severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">5571</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            High Pressure Common Rail Fuel Pressure Relief Valve
          </div>
        </td>
        <td class="s2" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:127, MID:12547</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Transmission Oil Pressure: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">127</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Transmission Oil Pressure
          </div>
        </td>
        <td class="s2" dir="ltr">12547</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:110, MID:12615</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">110</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature
          </div>
        </td>
        <td class="s2" dir="ltr">12615</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:523600, MID:263</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Fuel Pump Calibration Not Completed
          </div>
        </td>
        <td class="s2" dir="ltr">523600</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Fuel Pump Calibration Not Completed
          </div>
        </td>
        <td class="s2" dir="ltr">263</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:5245, MID:12544</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment Selective Catalytic Reduction Operator Inducement
            Active: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">5245</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment 1 DEF Tank Low Level Indicator
          </div>
        </td>
        <td class="s2" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:110, MID:12544</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">110</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Engine Coolant Temperature
          </div>
        </td>
        <td class="s2" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:3242, MID:12544</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 DPF Intake Temperature: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">3242</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 DPF Intake Gas Temperature
          </div>
        </td>
        <td class="s2" dir="ltr">12544</td>
      </tr>
      <tr style="height: 20px">
        <td class="s1" dir="ltr">SPN:3484, MID:12544</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Ignition: High - most severe (3)
          </div>
        </td>
        <td class="s2" dir="ltr">3484</td>
        <td class="s1 softmerge" dir="ltr">
          <div class="softmerge-inner" style="width: 97px; left: -1px">
            Aftertreatment #1 Ignition
          </div>
        </td>
        <td class="s2" dir="ltr">12544</td>
      </tr>
    </tbody>
  </table>
</div>
 `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
