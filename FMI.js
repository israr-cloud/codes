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
              id="1457991532C0"
              style="width: 150px"
              class="column-headers-background"
            >
              Code
            </th>
            <th
              id="1457991532C1"
              style="width: 329px"
              class="column-headers-background"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="freezebar-cell"></td>
            <td class="freezebar-cell"></td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">0</td>
            <td class="s0">High; most severe</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1</td>
            <td class="s0">Low; most severe</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2</td>
            <td class="s0">Erratic, Intermittent, or Incorrect</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3</td>
            <td class="s0">Voltage Above Normal</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">4</td>
            <td class="s0">Voltage Below Normal</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">5</td>
            <td class="s0">Current Below Normal</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">6</td>
            <td class="s0">Current Above Normal</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">7</td>
            <td class="s0">Not Responding Properly</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">8</td>
            <td class="s0">Abnormal Frequency, Pulse Width, or Period</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">9</td>
            <td class="s0">Abnormal Update Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10</td>
            <td class="s0">Abnormal Rate of Change</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">11</td>
            <td class="s0">Other Failure Mode</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">12</td>
            <td class="s0">Failure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">13</td>
            <td class="s0">Out of Calibration</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">14</td>
            <td class="s0">Special Instruction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">15</td>
            <td class="s0">High; least severe</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">16</td>
            <td class="s0">High; moderate severity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">17</td>
            <td class="s0">Low; least severe</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">18</td>
            <td class="s0">Low; moderate severity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">19</td>
            <td class="s0">Data Error</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">20</td>
            <td class="s0">Data Drifted High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">21</td>
            <td class="s0">Data Drifted Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">31</td>
            <td class="s0">Unknown</td>
          </tr>
        </tbody>
      </table>
    </div> `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
