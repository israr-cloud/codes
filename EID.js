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
              id="1472681691C0"
              style="width: 292px"
              class="column-headers-background"
            >
              Code
            </th>
            <th
              id="1472681691C1"
              style="width: 825px"
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
            <td class="s1">1</td>
            <td class="s0">Engine Oil Filter Restriction Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10</td>
            <td class="s0">High Altitude Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">100</td>
            <td class="s0">Low Engine Oil Pressure Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1000</td>
            <td class="s0">High Left Intake Manifold Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10000</td>
            <td class="s0">Engineering Data Gathering Condition Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10001</td>
            <td class="s0">Engineering Data Gathering Condition #1 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10002</td>
            <td class="s0">Engineering Data Gathering Condition #2 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10003</td>
            <td class="s0">Engineering Data Gathering Condition #3 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10004</td>
            <td class="s0">Engineering Data Gathering Condition #4 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10005</td>
            <td class="s0">Engineering Data Gathering Condition #5 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10006</td>
            <td class="s0">Engineering Data Gathering Condition #6 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10007</td>
            <td class="s0">Engineering Data Gathering Condition #7 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10008</td>
            <td class="s0">Engineering Data Gathering Condition #8 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10009</td>
            <td class="s0">Engineering Data Gathering Condition #9 Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1001</td>
            <td class="s0">High Right Intake Manifold Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10010</td>
            <td class="s0">
              Engineering Data Gathering Condition #10 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10011</td>
            <td class="s0">
              Engineering Data Gathering Condition #11 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10012</td>
            <td class="s0">
              Engineering Data Gathering Condition #12 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10013</td>
            <td class="s0">
              Engineering Data Gathering Condition #13 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10014</td>
            <td class="s0">
              Engineering Data Gathering Condition #14 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10015</td>
            <td class="s0">
              Engineering Data Gathering Condition #15 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10016</td>
            <td class="s0">
              Engineering Data Gathering Condition #16 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10017</td>
            <td class="s0">
              Engineering Data Gathering Condition #17 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10018</td>
            <td class="s0">
              Engineering Data Gathering Condition #18 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10019</td>
            <td class="s0">
              Engineering Data Gathering Condition #19 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1002</td>
            <td class="s0">Low Shift Rail Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10020</td>
            <td class="s0">
              Engineering Data Gathering Condition #20 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10021</td>
            <td class="s0">
              Engineering Data Gathering Condition #21 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10022</td>
            <td class="s0">
              Engineering Data Gathering Condition #22 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10023</td>
            <td class="s0">
              Engineering Data Gathering Condition #23 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10024</td>
            <td class="s0">
              Engineering Data Gathering Condition #24 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10025</td>
            <td class="s0">
              Engineering Data Gathering Condition #25 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10026</td>
            <td class="s0">
              Engineering Data Gathering Condition #26 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10027</td>
            <td class="s0">
              Engineering Data Gathering Condition #27 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10028</td>
            <td class="s0">
              Engineering Data Gathering Condition #28 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10029</td>
            <td class="s0">
              Engineering Data Gathering Condition #29 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1003</td>
            <td class="s0">High Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10030</td>
            <td class="s0">
              Engineering Data Gathering Condition #30 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10031</td>
            <td class="s0">
              Engineering Data Gathering Condition #31 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10032</td>
            <td class="s0">
              Engineering Data Gathering Condition #32 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10033</td>
            <td class="s0">
              Engineering Data Gathering Condition #33 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10034</td>
            <td class="s0">
              Engineering Data Gathering Condition #34 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10035</td>
            <td class="s0">
              Engineering Data Gathering Condition #35 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10036</td>
            <td class="s0">
              Engineering Data Gathering Condition #36 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10037</td>
            <td class="s0">
              Engineering Data Gathering Condition #37 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10038</td>
            <td class="s0">
              Engineering Data Gathering Condition #38 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10039</td>
            <td class="s0">
              Engineering Data Gathering Condition #39 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1004</td>
            <td class="s0">Brake Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10040</td>
            <td class="s0">
              Engineering Data Gathering Condition #40 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10041</td>
            <td class="s0">
              Engineering Data Gathering Condition #41 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10042</td>
            <td class="s0">
              Engineering Data Gathering Condition #42 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10043</td>
            <td class="s0">
              Engineering Data Gathering Condition #43 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10044</td>
            <td class="s0">
              Engineering Data Gathering Condition #44 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10045</td>
            <td class="s0">
              Engineering Data Gathering Condition #45 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10046</td>
            <td class="s0">
              Engineering Data Gathering Condition #46 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10047</td>
            <td class="s0">
              Engineering Data Gathering Condition #47 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10048</td>
            <td class="s0">
              Engineering Data Gathering Condition #48 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10049</td>
            <td class="s0">
              Engineering Data Gathering Condition #49 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1005</td>
            <td class="s0">Main Pump High Pressure Screen Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">10050</td>
            <td class="s0">
              Engineering Data Gathering Condition #50 Occurred
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1006</td>
            <td class="s0">Tilt Pump High Pressure Screen Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1007</td>
            <td class="s0">Fan Pump High Pressure Screen Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1008</td>
            <td class="s0">High Particulate Trap #1 Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1009</td>
            <td class="s0">
              High Particulate Trap #1 Intermediate Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">101</td>
            <td class="s0">High Crankcase Pressure Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1010</td>
            <td class="s0">High Particulate Trap #1 Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1011</td>
            <td class="s0">High Particulate Trap #2 Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1012</td>
            <td class="s0">
              High Particulate Trap #2 Intermediate Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1013</td>
            <td class="s0">High Particulate Trap #2 Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1014</td>
            <td class="s0">Low Particulate Trap #1 Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1015</td>
            <td class="s0">Low Particulate Trap #1 Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1016</td>
            <td class="s0">Low Particulate Trap #2 Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1017</td>
            <td class="s0">Low Particulate Trap #2 Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1018</td>
            <td class="s0">High Particulate Trap #1 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1019</td>
            <td class="s0">High Particulate Trap #2 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">102</td>
            <td class="s0">Module Internal Under Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1020</td>
            <td class="s0">Low Particulate Trap #1 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1021</td>
            <td class="s0">Low Particulate Trap #2 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1022</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Fuel Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1023</td>
            <td class="s0">Ejector Blade Not Responding To Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1024</td>
            <td class="s0">Manual Differential Locks Activated Too Long</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1025</td>
            <td class="s0">
              Excessive Aftertreatment Regeneration Device Ignition Failure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1026</td>
            <td class="s0">
              Excessive Aftertreatment Regeneration Device Loss of Ignition
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1027</td>
            <td class="s0">Lift Performed Too Slowly To Weigh Payload</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1028</td>
            <td class="s0">Lift Stopped During Weigh</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1029</td>
            <td class="s0">
              High Aftertreatment Regeneration Device Intake Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">103</td>
            <td class="s0">Module Internal Over Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1030</td>
            <td class="s0">
              High Aftertreatment Regeneration Device Intermediate Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1031</td>
            <td class="s0">
              High Aftertreatment Regeneration Device Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1032</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Intake Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1033</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Intermediate Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1034</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1035</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Purge Air Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1036</td>
            <td class="s0">High Crankcase Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1037</td>
            <td class="s0">Conflicting Seat Position Switch Information</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1038</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Supply Air Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">104</td>
            <td class="s0">CMRs from GPS Reference</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1040</td>
            <td class="s0">
              Aftertreatment Regeneration Device Manually Disabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1041</td>
            <td class="s0">
              Aftertreatment Regeneration Device Air Pressure Control Actuator
              Not Responding To Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1042</td>
            <td class="s0">Average Lift Speed Inconsistent To Weigh Payload</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1043</td>
            <td class="s0">
              Lift Speed Rate of Change Too High To Weigh Payload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1044</td>
            <td class="s0">High Intake Manifold Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1045</td>
            <td class="s0">Low Intake Manifold Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1046</td>
            <td class="s0">High Work Tool Hydraulic Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1047</td>
            <td class="s0">Blade Tilt Limit Reached</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1048</td>
            <td class="s0">Blade Tilt Limit Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1049</td>
            <td class="s0">High Particulate Trip Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">105</td>
            <td class="s0">Turbo Turbine Inlet Air Temperature High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1050</td>
            <td class="s0">High Aftertreatment #1 Fuel Pressure #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1051</td>
            <td class="s0">High Aftertreatment #1 Fuel Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1052</td>
            <td class="s0">Low Aftertreatment #1 Fuel Pressure #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1053</td>
            <td class="s0">Low Aftertreatment #1 Fuel Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1054</td>
            <td class="s0">High Aftertreatment #2 Fuel Pressure #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1055</td>
            <td class="s0">High Aftertreatment #2 Fuel Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1056</td>
            <td class="s0">Low Aftertreatment #2 Fuel Pressure #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1057</td>
            <td class="s0">Low Aftertreatment #2 Fuel Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1058</td>
            <td class="s0">Fire Suppression Switch Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1059</td>
            <td class="s0">Ground Level Engine Shutdown Switch Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">106</td>
            <td class="s0">High Front Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1060</td>
            <td class="s0">Cab Engine Shutdown Switch Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1061</td>
            <td class="s0">Engine Shutdown Due to Primary Console</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1062</td>
            <td class="s0">Engine Shutdown Due to Secondary Console</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1063</td>
            <td class="s0">High Water Pump Control Module Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1064</td>
            <td class="s0">Low Water Pump Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1065</td>
            <td class="s0">Water Pump Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1066</td>
            <td class="s0">Water Pump System AC Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1067</td>
            <td class="s0">High Drive Motor Winding #1 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1068</td>
            <td class="s0">High Drive Motor Winding #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1069</td>
            <td class="s0">Fuel Rail #1 Pressure Not Responding</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">107</td>
            <td class="s0">High Rear Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1070</td>
            <td class="s0">Aftertreatment Fuel Injector #1 Not Responding</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1071</td>
            <td class="s0">Accessory Power Converter Cannot be Enabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1072</td>
            <td class="s0">High Air Compressor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1073</td>
            <td class="s0">
              Power Generation Assembly #1 Disabled Due To System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1074</td>
            <td class="s0">
              Power Generation Assembly #2 Disabled Due To System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1075</td>
            <td class="s0">
              Power Generation Assembly #3 Disabled Due To System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1076</td>
            <td class="s0">
              Electric Retarding Grid Fan Power Converter Phase Current
              Imbalance
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1077</td>
            <td class="s0">
              High Electric Retarding Grid Fan Power Converter Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1078</td>
            <td class="s0">Air Conditioner System AC Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1079</td>
            <td class="s0">
              High Engine Charge Air Cooler #1 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">108</td>
            <td class="s0">Machine Upshift To Prevent Engine Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1080</td>
            <td class="s0">
              High Engine Charge Air Cooler #2 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1081</td>
            <td class="s0">High Center Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1082</td>
            <td class="s0">
              High Electric Retarding Grid #1 Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1083</td>
            <td class="s0">
              High Electric Retarding Grid #2 Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1084</td>
            <td class="s0">Generator Current Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1085</td>
            <td class="s0">Generator Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1086</td>
            <td class="s0">Low Output Transfer Gear (OTG) Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1087</td>
            <td class="s0">Trend Data Storage Memory Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1088</td>
            <td class="s0">Trend Data Storage Memory Full</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1089</td>
            <td class="s0">
              Low Engine Exhaust Gas Recirculation Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">109</td>
            <td class="s0">Draft Setpoint Switch Depressed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1090</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1091</td>
            <td class="s0">Low Engine Exhaust Gas Recirculation Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1092</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1093</td>
            <td class="s0">
              Low Engine Exhaust Gas Recirculation Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1094</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1095</td>
            <td class="s0">
              Low Engine Exhaust Gas Recirculation Mass Flow Rate
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1096</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation Mass Flow Rate
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1097</td>
            <td class="s0">
              High Aftertreatment Regeneration Device Supply Air Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1098</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Fuel Pressure #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1099</td>
            <td class="s0">
              High Crankcase Ventilation Filter Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">11</td>
            <td class="s0">High Altitude Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">110</td>
            <td class="s0">Invalid Event</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1100</td>
            <td class="s0">
              Low Crankcase Ventilation Filter Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1101</td>
            <td class="s0">
              Intake Valve Actuation System Oil Pressure #1 Not Responding To
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1102</td>
            <td class="s0">
              Intake Valve Actuation System Oil Pressure #2 Not Responding To
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1103</td>
            <td class="s0">
              Low Intake Valve Actuation System Oil Pressure #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1104</td>
            <td class="s0">
              Low Intake Valve Actuation System Oil Pressure #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1105</td>
            <td class="s0">High Intake Manifold #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1106</td>
            <td class="s0">High Fuel Rail Pump Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1107</td>
            <td class="s0">
              Low Engine Charge Air Cooler #1 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1108</td>
            <td class="s0">
              Low Engine Charge Air Cooler #2 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1109</td>
            <td class="s0">
              Low Engine Charge Air Cooler #3 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">111</td>
            <td class="s0">Metal Particle Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1110</td>
            <td class="s0">
              Low Engine Charge Air Cooler #4 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1111</td>
            <td class="s0">
              High Engine Charge Air Cooler #3 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1112</td>
            <td class="s0">
              High Engine Charge Air Cooler #4 Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1113</td>
            <td class="s0">
              Low Engine Exhaust Gas Recirculation #2 Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1114</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation #2 Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1115</td>
            <td class="s0">
              Low Engine Exhaust Gas Recirculation #2 Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1116</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation #2 Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1117</td>
            <td class="s0">
              Low Engine Exhaust Gas Recirculation #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1118</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1119</td>
            <td class="s0">
              Low Engine Exhaust Gas Recirculation #2 Mass Flow Rate
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">112</td>
            <td class="s0">Metal Particle Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1120</td>
            <td class="s0">
              High Engine Exhaust Gas Recirculation #2 Mass Flow Rate
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1121</td>
            <td class="s0">
              Engine Exhaust Gas Recirculation Valve Control Not Responding to
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1122</td>
            <td class="s0">
              Engine Exhaust Gas Recirculation #2 Valve Control Not Responding
              to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1123</td>
            <td class="s0">
              Engine Exhaust Manifold Bank #1 Flow Balance Valve Actuator Not
              Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1124</td>
            <td class="s0">
              Engine Exhaust Manifold Bank #2 Flow Balance Valve Actuator Not
              Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1125</td>
            <td class="s0">
              Aftertreatment Regeneration Device Fuel Flow Diverter Actuator Not
              Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1126</td>
            <td class="s0">DC Power Bus Voltage Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1127</td>
            <td class="s0">Low Fuel Filter (Suction Side) Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1128</td>
            <td class="s0">High Fuel Filter (Suction Side) Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1129</td>
            <td class="s0">Fuel Filter (Suction Side) Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">113</td>
            <td class="s0">High Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1130</td>
            <td class="s0">High Intake Manifold #2 Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1131</td>
            <td class="s0">Low Intake Manifold #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1132</td>
            <td class="s0">Inconsistent Configuration Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1133</td>
            <td class="s0">Fuel Pump Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1134</td>
            <td class="s0">
              Aftertreatment Fuel Pump Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1135</td>
            <td class="s0">Generator Voltage Out of Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1136</td>
            <td class="s0">
              Accessory Power Converter Ground Fault Detection Disabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1137</td>
            <td class="s0">
              Remote Control System Shutdown Due to Signal Interference
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1138</td>
            <td class="s0">
              Remote Control System Shutdown Due to Low Signal Strength
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1139</td>
            <td class="s0">
              Short Range Object Detection Sensor #1 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">114</td>
            <td class="s0">
              Aftertreatment #1 DEF Dosing Unit #1 Input Lines Not Purged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1140</td>
            <td class="s0">
              Short Range Object Detection Sensor #2 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1141</td>
            <td class="s0">
              Short Range Object Detection Sensor #3 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1142</td>
            <td class="s0">
              Short Range Object Detection Sensor #4 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1143</td>
            <td class="s0">
              Medium Range Object Detection Sensor #1 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1144</td>
            <td class="s0">
              Medium Range Object Detection Sensor #2 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1145</td>
            <td class="s0">
              Medium Range Object Detection Sensor #3 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1146</td>
            <td class="s0">
              Medium Range Object Detection Sensor #4 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1147</td>
            <td class="s0">
              Medium Range Object Detection Sensor #5 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1148</td>
            <td class="s0">
              Medium Range Object Detection Sensor #6 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1149</td>
            <td class="s0">
              Medium Range Object Detection Sensor #7 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1150</td>
            <td class="s0">
              Medium Range Object Detection Sensor #8 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1151</td>
            <td class="s0">Generator Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1152</td>
            <td class="s0">Armrest Raised while Machine in Motion</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1153</td>
            <td class="s0">
              Autonomous Steering Enable Valve Not Responding to Commands
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1154</td>
            <td class="s0">Low DPF #1 Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1155</td>
            <td class="s0">Low DPF #2 Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1156</td>
            <td class="s0">High DPF #1 Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1157</td>
            <td class="s0">High DPF #2 Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1158</td>
            <td class="s0">Low Secondary Steering Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1159</td>
            <td class="s0">Low Brake Cooling Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">116</td>
            <td class="s0">Powertrain Filter Bypass Switch Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1160</td>
            <td class="s0">
              Secondary Brake Pressure Not Responding to Commands
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1161</td>
            <td class="s0">
              Front Service Brake Pressure Not Responding to Commands
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1162</td>
            <td class="s0">
              Rear Service Brake Pressure Not Responding to Commands
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1163</td>
            <td class="s0">
              High Aftertreatment #1 Exhaust Gas Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1164</td>
            <td class="s0">
              High Aftertreatment #1 Exhaust Gas Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1165</td>
            <td class="s0">
              High Aftertreatment #1 Exhaust Gas Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1166</td>
            <td class="s0">Low Aftertreatment #1 Exhaust Gas Temperature #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1167</td>
            <td class="s0">Low Aftertreatment #1 Exhaust Gas Temperature #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1168</td>
            <td class="s0">Low Aftertreatment #1 Exhaust Gas Temperature #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1169</td>
            <td class="s0">High Aftertreatment #1 Secondary Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">117</td>
            <td class="s0">High Main Hydraulic Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1170</td>
            <td class="s0">Low Aftertreatment #1 Secondary Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1171</td>
            <td class="s0">Engine Idle Shutdown Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1172</td>
            <td class="s0">Engine Idle Shutdown Pending</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1173</td>
            <td class="s0">High Engine Injector Metering Rail #1 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1174</td>
            <td class="s0">Low Engine Injector Metering Rail #1 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1175</td>
            <td class="s0">High Engine Injector Metering Rail #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1176</td>
            <td class="s0">Low Engine Injector Metering Rail #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1177</td>
            <td class="s0">Elevator Charge Pump Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1178</td>
            <td class="s0">Elevator Motor Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1179</td>
            <td class="s0">Elevator Pump Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">118</td>
            <td class="s0">High Tilt Hydraulic Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1180</td>
            <td class="s0">Engine #2 Failure to Start</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1181</td>
            <td class="s0">Engine #3 Failure to Start</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1182</td>
            <td class="s0">Drive Motor #1 Manually Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1183</td>
            <td class="s0">Drive Motor #2 Manually Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1184</td>
            <td class="s0">AC Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1185</td>
            <td class="s0">Fan Pump/Motor Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1186</td>
            <td class="s0">Implement Pilot Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1187</td>
            <td class="s0">
              Engine Exhaust Manifold Bank #1 Flow Balance Valve Stuck Closed
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1188</td>
            <td class="s0">
              Engine Exhaust Manifold Bank #1 Flow Balance Valve Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1189</td>
            <td class="s0">File System Memory Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">119</td>
            <td class="s0">Low Fuel Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1190</td>
            <td class="s0">Low Aftertreatment Cooling Fan Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1191</td>
            <td class="s0">
              High Traction Alternator #1 Rectifier Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1192</td>
            <td class="s0">
              High Traction Alternator #2 Rectifier Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1193</td>
            <td class="s0">
              High Traction Alternator #3 Rectifier Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1194</td>
            <td class="s0">
              High Companion Alternator #1 Rectifier Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1195</td>
            <td class="s0">
              High Companion Alternator #2 Rectifier Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1196</td>
            <td class="s0">
              High Companion Alternator #3 Rectifier Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1197</td>
            <td class="s0">Test Flash File Installed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1198</td>
            <td class="s0">Steering/Brake Pump Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1199</td>
            <td class="s0">High Companion Alternator #1 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">12</td>
            <td class="s0">High Crankcase Pressure Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">120</td>
            <td class="s0">Jacket Water Temperature High Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1200</td>
            <td class="s0">High Companion Alternator #2 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1201</td>
            <td class="s0">High Companion Alternator #3 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1202</td>
            <td class="s0">High Traction Alternator #1 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1203</td>
            <td class="s0">High Traction Alternator #2 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1204</td>
            <td class="s0">High Traction Alternator #3 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1205</td>
            <td class="s0">Low Left Front Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1206</td>
            <td class="s0">Low Right Front Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1207</td>
            <td class="s0">Low Left Rear Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1208</td>
            <td class="s0">Low Left Rear Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1209</td>
            <td class="s0">Low Right Rear Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">121</td>
            <td class="s0">Jacket Water Temperature High Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1210</td>
            <td class="s0">Low Right Rear Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1211</td>
            <td class="s0">High Left Front Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1212</td>
            <td class="s0">High Right Front Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1213</td>
            <td class="s0">High Left Rear Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1214</td>
            <td class="s0">High Left Rear Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1215</td>
            <td class="s0">High Right Rear Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1216</td>
            <td class="s0">High Right Rear Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1217</td>
            <td class="s0">Delayed Engine Shutdown Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1218</td>
            <td class="s0">High Unfiltered Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1219</td>
            <td class="s0">Low Unfiltered Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">122</td>
            <td class="s0">Jacket Water Temperature High Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1220</td>
            <td class="s0">Low Cranking Fuel Rail Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1221</td>
            <td class="s0">Low Cranking Fuel Rail #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1222</td>
            <td class="s0">
              Low Cranking Engine Injector Metering Rail #1 Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1223</td>
            <td class="s0">Front Brake Cooling Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1224</td>
            <td class="s0">Rear Brake Cooling Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1225</td>
            <td class="s0">Brake Charge Pump Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1226</td>
            <td class="s0">
              Low Cranking Engine Injector Metering Rail #2 Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1227</td>
            <td class="s0">Generator Speed Not Responding to Commands</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1228</td>
            <td class="s0">
              High Intake Manifold Air Differential Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1229</td>
            <td class="s0">Unable to Load in Traction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">123</td>
            <td class="s0">
              Jacket Water to Engine Oil Temperature Low Warning
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1230</td>
            <td class="s0">Unable to Load Electric Retarding Grid</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1231</td>
            <td class="s0">
              Long Range Object Detection Sensor #1 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1232</td>
            <td class="s0">
              Long Range Object Detection Sensor #2 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1233</td>
            <td class="s0">
              Long Range Object Detection Sensor #3 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1234</td>
            <td class="s0">
              Long Range Object Detection Sensor #4 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1235</td>
            <td class="s0">
              Long Range Object Detection Sensor #5 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1236</td>
            <td class="s0">
              Long Range Object Detection Sensor #6 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1237</td>
            <td class="s0">
              Long Range Object Detection Sensor #7 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1238</td>
            <td class="s0">
              Long Range Object Detection Sensor #8 Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1239</td>
            <td class="s0">
              DPF #1 Conditions Not Met for Active Regeneration
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">124</td>
            <td class="s0">
              Jacket Water to Engine Oil Temperature Low Shutdown
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1240</td>
            <td class="s0">Machine Operation With Rear Engine Stopped</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1241</td>
            <td class="s0">
              Long Range Object Detection Sensor #1 Rotational Speed Not
              Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1242</td>
            <td class="s0">High Interaxle Lock Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1243</td>
            <td class="s0">Center Implement Pump Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1244</td>
            <td class="s0">
              Left Front Implement Pump Case Drain Filter Plugged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1245</td>
            <td class="s0">
              Left Rear Implement Pump Case Drain Filter Plugged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1246</td>
            <td class="s0">Right Implement Pump Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1247</td>
            <td class="s0">Predictive Analysis Data Stored</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1248</td>
            <td class="s0">Front Cross Axle Lock Speed Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1249</td>
            <td class="s0">Center Cross Axle Lock Speed Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">125</td>
            <td class="s0">Engine Oil Pressure High Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1250</td>
            <td class="s0">Rear Cross Axle Lock Speed Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1251</td>
            <td class="s0">Interaxle Lock Speed Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1252</td>
            <td class="s0">Low Machine Position Accuracy</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1253</td>
            <td class="s0">High Gear Box #1 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1254</td>
            <td class="s0">High Gear Box #2 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1255</td>
            <td class="s0">High Gear Box #3 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1256</td>
            <td class="s0">Key Input Off While Machine in Operation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1257</td>
            <td class="s0">Winch Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1258</td>
            <td class="s0">Low Interaxle Lock Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1259</td>
            <td class="s0">Low Main Air Reservoir #1 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">126</td>
            <td class="s0">Engine Oil Pressure High Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1260</td>
            <td class="s0">Low Main Air Reservoir #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1261</td>
            <td class="s0">
              Cushion Hitch and Implement Pilot Supply Filter Plugged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1262</td>
            <td class="s0">
              Engine Throttle Actuator Not Responding to Commands
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1263</td>
            <td class="s0">
              Engine Exhaust Back Pressure Regulator Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1264</td>
            <td class="s0">
              High Pressure Common Rail Fuel Pressure Relief Valve Active
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1265</td>
            <td class="s0">
              DPF Active Regeneration Inhibited Due to Low Exhaust Gas Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1266</td>
            <td class="s0">DPF Active Regeneration Usage High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1267</td>
            <td class="s0">Hydraulic Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1268</td>
            <td class="s0">High Left Front Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1269</td>
            <td class="s0">High Right Front Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">127</td>
            <td class="s0">
              Engine Oil Filter Differential Pressure Low Warning
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1270</td>
            <td class="s0">High Left Rear Inner Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1271</td>
            <td class="s0">High Left Rear Outer Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1272</td>
            <td class="s0">High Right Rear Inner Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1273</td>
            <td class="s0">High Right Rear Outer Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1274</td>
            <td class="s0">High DC Power Bus Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1275</td>
            <td class="s0">Low DC Power Bus Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1276</td>
            <td class="s0">High Phase Module A Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1277</td>
            <td class="s0">High Phase Module B Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1278</td>
            <td class="s0">High Phase Module C Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1279</td>
            <td class="s0">Phase Module A Positive Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">128</td>
            <td class="s0">
              Engine Oil Filter Differential Pressure Low Shutdown
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1280</td>
            <td class="s0">Phase Module B Negative Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1281</td>
            <td class="s0">Phase Module C Positive Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1282</td>
            <td class="s0">Phase Module A Negative Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1283</td>
            <td class="s0">Phase Module B Positive Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1284</td>
            <td class="s0">Phase Module C Negative Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1285</td>
            <td class="s0">Chopper Module Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1286</td>
            <td class="s0">Fire Suppression System Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1287</td>
            <td class="s0">
              High Transmission Hydrostatic Oil Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1288</td>
            <td class="s0">High Transmission Charge Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1289</td>
            <td class="s0">Transmission Failed to Engage Synchronizer #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">129</td>
            <td class="s0">
              Engine Oil Filter Differential Pressure High Warning
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1290</td>
            <td class="s0">Transmission Failed to Engage Synchronizer #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1291</td>
            <td class="s0">Transmission Failed to Engage Synchronizer #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1292</td>
            <td class="s0">Transmission System Failed to Synchronize</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1293</td>
            <td class="s0">Transmission Internal Component Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1294</td>
            <td class="s0">Lockup Clutch Failed to Engage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1295</td>
            <td class="s0">Hydraulic Cooling Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1296</td>
            <td class="s0">Steering Cooling Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1297</td>
            <td class="s0">Left Steering Pump Case Drain Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1298</td>
            <td class="s0">
              Right Steering Pump Case Drain Oil Filter Plugged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1299</td>
            <td class="s0">High Chopper Module Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">13</td>
            <td class="s0">High Crankcase Pressure Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">130</td>
            <td class="s0">
              Engine Oil Filter Differential Pressure High Shutdown
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1300</td>
            <td class="s0">
              Aftertreatment Regeneration Cannot Start Due to Low Engine
              Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1301</td>
            <td class="s0">
              Aftertreatment Regeneration Cannot Start Due to System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1302</td>
            <td class="s0">
              Aftertreatment Regeneration Cannot Start Due to Conditions Not Met
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1303</td>
            <td class="s0">
              Excessive Machine Speed with Cold Transmission Oil
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1304</td>
            <td class="s0">Secondary Steering Pump Automatic Test Bypassed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1305</td>
            <td class="s0">
              Initial Assembly Aftertreatment #1 Regeneration Required
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1306</td>
            <td class="s0">
              Initial Assembly Aftertreatment #2 Regeneration Required
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1307</td>
            <td class="s0">
              High Aftertreatment #1 SCR Dosing Atomization Air Assist Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1308</td>
            <td class="s0">
              High Aftertreatment #2 SCR Dosing Atomization Air Assist Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1309</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Conversion Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">131</td>
            <td class="s0">Jacket Water Level Low Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1310</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Conversion Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1311</td>
            <td class="s0">
              Low DC Power Bus Voltage Detected During Drivetrain System Test
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1312</td>
            <td class="s0">
              High Generator Phase Current Detected During Drivetrain System
              Test
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1313</td>
            <td class="s0">
              High DC Power Bus Current Detected During Drivetrain System Test
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1314</td>
            <td class="s0">High Auxiliary Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1315</td>
            <td class="s0">Low Auxiliary Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1316</td>
            <td class="s0">Linkage Elevation Boundary Violation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1317</td>
            <td class="s0">Avoidance System Override Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1318</td>
            <td class="s0">Drive Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1319</td>
            <td class="s0">EGR Mass Flow Rate Not Responding</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">132</td>
            <td class="s0">Jacket Water Level Low Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1320</td>
            <td class="s0">Real Time Clock Incorrect</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1325</td>
            <td class="s0">Incident Recorder Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1326</td>
            <td class="s0">Incorrect Engine Rotation Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1327</td>
            <td class="s0">High Engine Speed Shift</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1328</td>
            <td class="s0">Transmission Neutral Coast Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1329</td>
            <td class="s0">High Axle Lock Clutch Accumulated Thermal Energy</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">133</td>
            <td class="s0">Low Jacket Water Pressure Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1330</td>
            <td class="s0">High Autonomous Cabinet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1331</td>
            <td class="s0">
              Wheel Speed versus Transmission Output Speed Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1332</td>
            <td class="s0">Hydraulic Case Drain Left Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1333</td>
            <td class="s0">Hydraulic Case Drain Right Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1334</td>
            <td class="s0">Implement Left Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1335</td>
            <td class="s0">Implement Right Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1336</td>
            <td class="s0">Access Ladder Lowered With Park Brake Disengaged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1337</td>
            <td class="s0">Access Ladder Lowered</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1338</td>
            <td class="s0">Low Left Rear Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1339</td>
            <td class="s0">Low Right Rear Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">134</td>
            <td class="s0">Low Jacket Water Pressure Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1340</td>
            <td class="s0">High Left Rear Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1341</td>
            <td class="s0">High Right Rear Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1342</td>
            <td class="s0">High Left Rear Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1343</td>
            <td class="s0">High Right Rear Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1344</td>
            <td class="s0">Emergency Fuel Limit Override Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1345</td>
            <td class="s0">Steering Pump Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1346</td>
            <td class="s0">
              Position of Other Equipment Within Proximity Is Undetermined
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1347</td>
            <td class="s0">High Separate Circuit Coolant Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1348</td>
            <td class="s0">Machine Performance Monitor Memory Full</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1349</td>
            <td class="s0">Machine Performance Monitor Memory Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">135</td>
            <td class="s0">Low Jacket Water Pressure Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1350</td>
            <td class="s0">Low Starting System #1 Cranking Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1351</td>
            <td class="s0">Low Starting System #2 Cranking Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1352</td>
            <td class="s0">High Aftertreatment Cooling Fan Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1353</td>
            <td class="s0">Drive Motor #1 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1354</td>
            <td class="s0">Drive Motor #2 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1355</td>
            <td class="s0">Low Drive Circuit Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1356</td>
            <td class="s0">High Drive Circuit Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1357</td>
            <td class="s0">Direction Selector Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1358</td>
            <td class="s0">
              Direction Selector #1 Disabled Due to System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1359</td>
            <td class="s0">
              Direction Selector #2 Disabled Due to System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">136</td>
            <td class="s0">No GPS Position Data</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1360</td>
            <td class="s0">Speed Limited Due to Cold Final Drive Oil</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1361</td>
            <td class="s0">
              Low Drive Circuit Pressure Detected During Service Brake Test
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1362</td>
            <td class="s0">
              Low Drive Circuit Pressure Detected During Park Brake Test
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1363</td>
            <td class="s0">Low Engine Cooling Fan Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1364</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Tank Reagent Concentration
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1365</td>
            <td class="s0">
              High Aftertreatment #1 SCR Catalyst Tank Reagent Concentration
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1366</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Tank Reagent Concentration
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1367</td>
            <td class="s0">
              High Aftertreatment #2 SCR Catalyst Tank Reagent Concentration
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1368</td>
            <td class="s0">
              Incorrect Aftertreatment #1 SCR Catalyst Tank Reagent Fluid
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1369</td>
            <td class="s0">
              Incorrect Aftertreatment #2 SCR Catalyst Tank Reagent Fluid
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">137</td>
            <td class="s0">Left Extender Lost Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1370</td>
            <td class="s0">
              Aftertreatment #1 Diesel Exhaust Fluid Dosing Unit Loss of Prime
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1371</td>
            <td class="s0">
              Aftertreatment #2 Diesel Exhaust Fluid Dosing Unit Loss of Prime
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1372</td>
            <td class="s0">Machine Speed Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1373</td>
            <td class="s0">
              Transmission Neutral Lock Applied While Shift Lever Not in Neutral
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1374</td>
            <td class="s0">Steering Valve Spool Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1375</td>
            <td class="s0">
              Unexpected Steering Valve Spool Movement Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1376</td>
            <td class="s0">Service Brake Abuse Due to Coasting in Neutral</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1377</td>
            <td class="s0">Machine Disable Pending Due to Machine Security</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1378</td>
            <td class="s0">High ECM Power Input Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1379</td>
            <td class="s0">Low ECM Power Input Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">138</td>
            <td class="s0">Left Extender No Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1380</td>
            <td class="s0">
              Engine Exhaust NOx Level Sensor #1 Operating Temperature Not
              Reached
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1381</td>
            <td class="s0">
              Engine Exhaust NOx Level Sensor #2 Operating Temperature Not
              Reached
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1382</td>
            <td class="s0">Parallel Lift Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1383</td>
            <td class="s0">
              Parallel Lift Disabled Due to Low Hydraulic Oil Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1384</td>
            <td class="s0">Aftertreatment Cooling Fan Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1385</td>
            <td class="s0">Service Brake Pedal Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1386</td>
            <td class="s0">Park Brake Control Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1387</td>
            <td class="s0">
              Operator Seat Belt Unfastened While Machine is Idle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1388</td>
            <td class="s0">
              Operator Seat Belt Unfastened While Machine is Not Idle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1389</td>
            <td class="s0">Aftertreatment #1 SCR Operator Inducement</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">139</td>
            <td class="s0">Left Extender Failure to Reach Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1390</td>
            <td class="s0">
              Aftertreatment #1 SCR Monitoring System Malfunction
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1391</td>
            <td class="s0">High Generator Excitation Field Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1392</td>
            <td class="s0">High Winch Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1393</td>
            <td class="s0">Machine Sliding</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1394</td>
            <td class="s0">Unacceptable Machine Orientation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1395</td>
            <td class="s0">Lift Linkage Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1396</td>
            <td class="s0">Tilt Linkage Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1397</td>
            <td class="s0">
              Access Ladder Lowered with Blade Movement Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1398</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Reagent Tank #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1399</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Reagent Tank #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">140</td>
            <td class="s0">Left Extender Unexpected Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1400</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Reagent Tank #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1401</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Reagent Tank #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1402</td>
            <td class="s0">Low Hoist Cylinder Rod End Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1403</td>
            <td class="s0">Seat Belt Unfastened with Park Brake Disengaged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1404</td>
            <td class="s0">
              Powertrain Speed Range Limited Due to Cold Transmission Oil
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1405</td>
            <td class="s0">Coupled Engine Speed Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1407</td>
            <td class="s0">High Aftertreatment #1 Intake O2 Concentration</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1408</td>
            <td class="s0">High Aftertreatment #1 Outlet O2 Concentration</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1409</td>
            <td class="s0">Low Motor Power Factor</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">141</td>
            <td class="s0">Left Main Lost Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1410</td>
            <td class="s0">
              Invalid Aftertreatment #1 SCR Conversion Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1411</td>
            <td class="s0">
              Invalid Aftertreatment #2 SCR Conversion Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1412</td>
            <td class="s0">High Phase Module #1 A/B Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1413</td>
            <td class="s0">High Phase Module #2 A/B Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1414</td>
            <td class="s0">High Trolley Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1415</td>
            <td class="s0">Low Trolley Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1416</td>
            <td class="s0">High Trolley Input Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1417</td>
            <td class="s0">Low Trolley Input Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1418</td>
            <td class="s0">Trolley Contactor #1 Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1419</td>
            <td class="s0">Trolley Contactor #2 Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">142</td>
            <td class="s0">Left Main No Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1420</td>
            <td class="s0">Pantograph #1 Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1421</td>
            <td class="s0">Pantograph #2 Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1422</td>
            <td class="s0">High Trolley Cabinet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1423</td>
            <td class="s0">Hydraulic Charge Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1424</td>
            <td class="s0">Drive Motor Speed Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1425</td>
            <td class="s0">Left Drive Motor Speed Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1426</td>
            <td class="s0">
              Right Drive Motor Speed Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1427</td>
            <td class="s0">
              Aftertreatment #1 SCR Dosing Pump Temperature Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1428</td>
            <td class="s0">
              Generator Excitation Field Regulator Current Not Responding to
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1429</td>
            <td class="s0">High Water in Fuel</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">143</td>
            <td class="s0">Left Main Failure to Reach Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1430</td>
            <td class="s0">
              High Aftertreatment #1 Diesel Exhaust Fluid Controller Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1431</td>
            <td class="s0">Invalid Aftertreatment #1 Intake NOx Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1432</td>
            <td class="s0">Invalid Aftertreatment #1 Outlet #1 NOx Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1433</td>
            <td class="s0">
              Steering Lever Has Not Been Aligned to Machine Articulation Angle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1434</td>
            <td class="s0">Operator Seat Belt Unfastened</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1435</td>
            <td class="s0">High Swing Accumulator #1 Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1436</td>
            <td class="s0">High Swing Accumulator #2 Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1437</td>
            <td class="s0">Low Swing Accumulator #1 Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1438</td>
            <td class="s0">Low Swing Accumulator #2 Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1439</td>
            <td class="s0">Tire Pressure System Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">144</td>
            <td class="s0">Left Main Unexpected Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1440</td>
            <td class="s0">Low Separate Circuit Coolant Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1441</td>
            <td class="s0">
              Aftertreatment #1 Diesel Exhaust Fluid Tank Temperature Not
              Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1442</td>
            <td class="s0">
              Stabilizers Not Fully Stowed While Transmission in Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1443</td>
            <td class="s0">Excessive Brake Pump Charge Cycling</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1444</td>
            <td class="s0">Manual Configuration Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1445</td>
            <td class="s0">
              Left Front Service Brake Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1446</td>
            <td class="s0">
              Right Front Service Brake Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1447</td>
            <td class="s0">
              Left Rear Service Brake Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1448</td>
            <td class="s0">
              Right Rear Service Brake Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1449</td>
            <td class="s0">Low Brake Accumulator Precharge Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">145</td>
            <td class="s0">Right Extender Lost Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1450</td>
            <td class="s0">
              Low Front Brake Accumulator Precharge Gas Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1451</td>
            <td class="s0">
              Low Rear Brake Accumulator Precharge Gas Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1452</td>
            <td class="s0">
              Low Secondary Brake Accumulator Precharge Gas Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1453</td>
            <td class="s0">High Drill Steel Blow Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1454</td>
            <td class="s0">High Air Compressor Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1455</td>
            <td class="s0">High Drill Feed Down Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1456</td>
            <td class="s0">Low Return Hydraulic Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1457</td>
            <td class="s0">High Hammer Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1458</td>
            <td class="s0">Water Tank Not Stowed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1459</td>
            <td class="s0">High Turbocharger #1 Turbine Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">146</td>
            <td class="s0">Right Extender No Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1460</td>
            <td class="s0">High Turbocharger #2 Turbine Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1461</td>
            <td class="s0">High Aftertreatment #2 Intake O2 Concentration</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1462</td>
            <td class="s0">High Aftertreatment #2 Outlet O2 Concentration</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1463</td>
            <td class="s0">Invalid Aftertreatment #2 Intake NOx Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1464</td>
            <td class="s0">High Transmission Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1465</td>
            <td class="s0">Aftertreatment #1 SCR Desulfation Too Frequent</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1466</td>
            <td class="s0">
              Operator Forced Shutdown with High Exhaust Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1467</td>
            <td class="s0">Fuel Rail #2 Pressure Not Responding</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1468</td>
            <td class="s0">High Machine Auto Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1469</td>
            <td class="s0">Low Machine Auto Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">147</td>
            <td class="s0">Right Extender Failure to Reach Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1470</td>
            <td class="s0">High Hammer Auto Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1471</td>
            <td class="s0">Low Hammer Auto Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1472</td>
            <td class="s0">
              Starter Disabled Due to Stored Compressor Air Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1473</td>
            <td class="s0">Feed Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1474</td>
            <td class="s0">Low Aftertreatment #1 DEF Dosing Quantity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1475</td>
            <td class="s0">High Aftertreatment #1 DEF Dosing Quantity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1476</td>
            <td class="s0">
              High Aftertreatment #1 SCR Catalyst Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1477</td>
            <td class="s0">
              High Aftertreatment #2 SCR Catalyst Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1478</td>
            <td class="s0">
              Remote Control System Disabled Due to Park Brake Not Engaged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1479</td>
            <td class="s0">High Front Brake/Transmission Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">148</td>
            <td class="s0">Right Extender Unexpected Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1480</td>
            <td class="s0">
              GPS Receiver Antenna Separation Distance Out of Range
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1481</td>
            <td class="s0">Operator Input Detected While in Autonomous Mode</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1482</td>
            <td class="s0">Invalid Path Data from Autonomous Control Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1483</td>
            <td class="s0">Low Autonomous Cabinet Fan Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1484</td>
            <td class="s0">Secondary Steering Automatic Test Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1485</td>
            <td class="s0">
              Autonomous Stop Receiver Radio Not Receiving Radio Signals
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1486</td>
            <td class="s0">Autonomous Mass Storage Drive Not Accessible</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1487</td>
            <td class="s0">High Autonomous Control Module Core Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1488</td>
            <td class="s0">Autonomous Machine Not in Autonomous Zone</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1489</td>
            <td class="s0">Aggressive Brake System Response</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">149</td>
            <td class="s0">Right Main Lost Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1490</td>
            <td class="s0">Reduced Brake System Response</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1491</td>
            <td class="s0">Aggressive Steering System Response</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1492</td>
            <td class="s0">Reduced Steering System Response</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1493</td>
            <td class="s0">Aggressive Machine Speed Control System Response</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1494</td>
            <td class="s0">Reduced Machine Speed Control System Response</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1495</td>
            <td class="s0">Machine Not Obeying Speed Limit</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1496</td>
            <td class="s0">Machine Stability Limits Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1497</td>
            <td class="s0">Unacceptable Machine Trajectory Prediction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1498</td>
            <td class="s0">
              Aftertreatment #1 DPF Monitoring System Malfunction
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1499</td>
            <td class="s0">High Voltage Bus Interlock Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">15</td>
            <td class="s0">High Engine Coolant Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">150</td>
            <td class="s0">Right Main No Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1500</td>
            <td class="s0">Low Generator Lube Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1501</td>
            <td class="s0">High Interaxle Lock Supply Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1502</td>
            <td class="s0">Low Interaxle Lock Supply Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1503</td>
            <td class="s0">Unexpected Hook Raise Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1504</td>
            <td class="s0">Unexpected Hook Lower Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1505</td>
            <td class="s0">Armrest Raised While Steering Lock Switch Is Off</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1506</td>
            <td class="s0">Hydraulic Pump Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1507</td>
            <td class="s0">Real Time Clock Master Not Secured</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1508</td>
            <td class="s0">
              Front Parking Brake Pressure Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1509</td>
            <td class="s0">
              High Long Range Object Detection Sensor #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">151</td>
            <td class="s0">Right Main Failure to Reach Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1510</td>
            <td class="s0">
              Low Long Range Object Detection Sensor #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1511</td>
            <td class="s0">Turbocharger #3 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1512</td>
            <td class="s0">Turbocharger #4 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1513</td>
            <td class="s0">Turbocharger #3 Underspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1514</td>
            <td class="s0">Turbocharger #4 Underspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1516</td>
            <td class="s0">Swing Movement Detected While Swing Locked</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1517</td>
            <td class="s0">
              Power Inverter Cooling Fan Speed Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1518</td>
            <td class="s0">
              Power Inverter Priming Power Supply Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1519</td>
            <td class="s0">Spray System Hydraulic Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">152</td>
            <td class="s0">Right Main Unexpected Flame Detection</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1520</td>
            <td class="s0">High Generator Lube Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1521</td>
            <td class="s0">Generator Lube Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1522</td>
            <td class="s0">
              Primary Steering Not Available Due to Low Engine Speed
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1523</td>
            <td class="s0">Low Front Differential (Axle) Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1524</td>
            <td class="s0">Low Rear Differential (Axle) Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1525</td>
            <td class="s0">Front Differential (Axle) Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1526</td>
            <td class="s0">Rear Differential (Axle) Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1527</td>
            <td class="s0">Cab Door Open While Machine In Motion</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1528</td>
            <td class="s0">Accumulator Gas Pressure Test Overdue</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1529</td>
            <td class="s0">Unexpected Boom Raise Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">153</td>
            <td class="s0">High Speed Directional Shift</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1530</td>
            <td class="s0">Unexpected Boom Lower Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1531</td>
            <td class="s0">High Generator Lube Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1532</td>
            <td class="s0">Unacceptable Machine Front Roll Angle</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1533</td>
            <td class="s0">Unacceptable Machine Rear Roll Angle</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1534</td>
            <td class="s0">Unacceptable Hoisting Condition</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1535</td>
            <td class="s0">
              High Main Hydraulic Pump #1 Pressure During Automatic Warm Up
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1536</td>
            <td class="s0">
              Autonomous Control Module Not Receiving GPS Correction
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1537</td>
            <td class="s0">Excessive Wheel Slip Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1538</td>
            <td class="s0">
              Excessive Interaxle Lock Accumulator Charge Cycling
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1539</td>
            <td class="s0">
              High Electric Energy Storage System Power Converter Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">154</td>
            <td class="s0">Low Torque Converter Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1540</td>
            <td class="s0">Unexpected Machine Rollback Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1541</td>
            <td class="s0">High Electric Energy Storage Device Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1542</td>
            <td class="s0">Low Electric Energy Storage Device Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1543</td>
            <td class="s0">
              High Electric Energy Storage Device Charge Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1544</td>
            <td class="s0">
              High Electric Energy Storage Device Discharge Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1545</td>
            <td class="s0">High Electric Energy Storage Device Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1546</td>
            <td class="s0">High Air Filter Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1547</td>
            <td class="s0">
              High Main Hydraulic Pump #2 Pressure During Automatic Warm Up
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1548</td>
            <td class="s0">Manual Override Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1549</td>
            <td class="s0">Remote Control Fire Suppression System Commanded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">155</td>
            <td class="s0">High Torque Converter Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1550</td>
            <td class="s0">Remote Control Gateway Not Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1551</td>
            <td class="s0">Operator Inactive</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1552</td>
            <td class="s0">Loss of Video Feedback</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1553</td>
            <td class="s0">Remote Operator Not Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1554</td>
            <td class="s0">Avoidance System Configuration File Invalid</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1555</td>
            <td class="s0">Avoidance System Design File Invalid</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1556</td>
            <td class="s0">
              Avoidance System Configuration File Bounding Boxes Invalid
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1557</td>
            <td class="s0">Mobile Object Detected Within Machine Proximity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1558</td>
            <td class="s0">Control Arm Switch Overridden</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1559</td>
            <td class="s0">Outrigger Sensors Overridden</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">156</td>
            <td class="s0">Excessive Sustained Third Gear Operation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1560</td>
            <td class="s0">Low Brake Pressure Due to Low Engine Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1561</td>
            <td class="s0">Low Brake Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1562</td>
            <td class="s0">Low Swing Drive Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1563</td>
            <td class="s0">Main Pump High Pressure Screen #1 Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1564</td>
            <td class="s0">Main Pump High Pressure Screen #2 Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1565</td>
            <td class="s0">Swing Accumulator Gas Pressure Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1566</td>
            <td class="s0">Excessive Swing Energy Reduction Valve Leakage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1567</td>
            <td class="s0">GPS Accuracy Insufficient</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1568</td>
            <td class="s0">Perception Based Position Accuracy Insufficient</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1569</td>
            <td class="s0">Low Electric Fuel Transfer Pump Outlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">157</td>
            <td class="s0">Engine Failure to Start</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1570</td>
            <td class="s0">Boom Sensors Overridden</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1571</td>
            <td class="s0">Cab Lift Sensors Overridden</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1572</td>
            <td class="s0">
              Unexpected Left Front Motor Forward Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1573</td>
            <td class="s0">
              Unexpected Left Front Motor Reverse Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1574</td>
            <td class="s0">
              Unexpected Right Front Motor Forward Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1575</td>
            <td class="s0">
              Unexpected Right Front Motor Reverse Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1576</td>
            <td class="s0">
              Unexpected Left Rear Motor Forward Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1577</td>
            <td class="s0">
              Unexpected Left Rear Motor Reverse Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1578</td>
            <td class="s0">
              Unexpected Right Rear Motor Forward Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1579</td>
            <td class="s0">
              Unexpected Right Rear Motor Reverse Speed Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">158</td>
            <td class="s0">Low Gas Pressure Start Inhibit</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1580</td>
            <td class="s0">Low Engine Speed for Rotor Drive</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1581</td>
            <td class="s0">Low Emulsion Spray Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1582</td>
            <td class="s0">Low Water Spray Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1583</td>
            <td class="s0">High Emulsion Spray Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1584</td>
            <td class="s0">High Water Spray Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1585</td>
            <td class="s0">
              Aftertreatment #1 Inconsistent Configuration Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1586</td>
            <td class="s0">
              Aftertreatment #2 Inconsistent Configuration Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1587</td>
            <td class="s0">
              Incorrect Antenna Detected by Cellular Radio Module
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1588</td>
            <td class="s0">
              Incorrect Antenna Detected by Satellite Radio Module
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1589</td>
            <td class="s0">
              Aftertreatment #1 DEF Tank Refill Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">159</td>
            <td class="s0">Closed Circuit Breather</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1590</td>
            <td class="s0">
              Implement Cooling Fan Pump Case Drain Filter Plugged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1591</td>
            <td class="s0">Service Brake Automatic Test Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1592</td>
            <td class="s0">Maximum Left Screed Extension Width Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1593</td>
            <td class="s0">Maximum Right Screed Extension Width Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1594</td>
            <td class="s0">Screed Heating Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1595</td>
            <td class="s0">High Display Module Internal Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1596</td>
            <td class="s0">Unexpected Wheel Motion Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1597</td>
            <td class="s0">
              Engine Emissions Operator Inducement Emergency Override Activated
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1598</td>
            <td class="s0">
              Engine Emissions Operator Inducement Emergency Override Renewal
              Required
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1599</td>
            <td class="s0">Low Engine Coolant Pump Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">16</td>
            <td class="s0">High Engine Coolant Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">160</td>
            <td class="s0">Low Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1600</td>
            <td class="s0">Low Engine Coolant Pump Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1601</td>
            <td class="s0">High Engine Coolant Pump Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1602</td>
            <td class="s0">
              Low Left Station Input/Output Module Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1603</td>
            <td class="s0">
              High Left Station Input/Output Module Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1604</td>
            <td class="s0">
              Low Right Station Input/Output Module Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1605</td>
            <td class="s0">
              High Right Station Input/Output Module Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1606</td>
            <td class="s0">Ground Fault Detection Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1607</td>
            <td class="s0">
              Aftertreatment #1 DEF Control Module Circuit Breaker Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1608</td>
            <td class="s0">All Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1609</td>
            <td class="s0">Unable to Stay on Path</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">161</td>
            <td class="s0">High Intake Manifold Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1610</td>
            <td class="s0">Not Aligned to Path</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1611</td>
            <td class="s0">Office Site Management System Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1612</td>
            <td class="s0">Office Site Management System Pause Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1613</td>
            <td class="s0">
              Office Site Management System Communications Lost
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1614</td>
            <td class="s0">Autonomous Assignment Timeout</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1615</td>
            <td class="s0">Unexpected End of Path Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1616</td>
            <td class="s0">Terrain Not Mapped for Current Trajectory</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1617</td>
            <td class="s0">High Auxiliary AC Phase A to Neutral Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1618</td>
            <td class="s0">High Auxiliary AC Phase B to Neutral Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1619</td>
            <td class="s0">High Auxiliary AC Phase C to Neutral Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">162</td>
            <td class="s0">High Boost Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1620</td>
            <td class="s0">Low Auxiliary AC Phase A to Neutral Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1621</td>
            <td class="s0">Low Auxiliary AC Phase B to Neutral Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1622</td>
            <td class="s0">Low Auxiliary AC Phase C to Neutral Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1623</td>
            <td class="s0">High Auxiliary AC Phase A-B Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1624</td>
            <td class="s0">High Auxiliary AC Phase B-C Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1625</td>
            <td class="s0">Low Auxiliary AC Phase A-B Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1626</td>
            <td class="s0">Low Auxiliary AC Phase B-C Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1627</td>
            <td class="s0">High Auxiliary AC Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1628</td>
            <td class="s0">High Auxiliary AC Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1629</td>
            <td class="s0">High Auxiliary AC Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">163</td>
            <td class="s0">Engine Spitback</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1630</td>
            <td class="s0">High Auxiliary AC Neutral RMS Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1631</td>
            <td class="s0">Swing Pump Charge Filter Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1632</td>
            <td class="s0">Hydraulic Reservoir Breather Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1633</td>
            <td class="s0">Front Wheel Speed to Machine Speed Crosscheck</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1634</td>
            <td class="s0">Refueling Pump Screen Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1635</td>
            <td class="s0">Refueling Pump Running Dry</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1636</td>
            <td class="s0">Aftertreatment System Manually Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1637</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1638</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Intake Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1639</td>
            <td class="s0">
              Low Engine Fuel #2 Injector Metering Rail Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">164</td>
            <td class="s0">High Injector Actuation Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1640</td>
            <td class="s0">
              High Engine Fuel #2 Injector Metering Rail Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1641</td>
            <td class="s0">
              Low Engine Fuel #2 Injector Metering Rail Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1642</td>
            <td class="s0">
              High Engine Fuel #2 Injector Metering Rail Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1643</td>
            <td class="s0">Low Engine Fuel #2 Hydraulic Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1644</td>
            <td class="s0">High Engine Fuel #2 Hydraulic Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1645</td>
            <td class="s0">
              Aftertreatment Active Regeneration Inhibited Due to Low Exhaust
              Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1646</td>
            <td class="s0">
              Engine Turbocharger #1 Speed Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1647</td>
            <td class="s0">
              Engine Turbocharger #2 Speed Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1648</td>
            <td class="s0">Implement Pump Discharge Screen Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1649</td>
            <td class="s0">Implement Tank Case Drain Filter #1 Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">165</td>
            <td class="s0">Injector Actuation Pressure System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1650</td>
            <td class="s0">Implement Tank Case Drain Filter #2 Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1651</td>
            <td class="s0">Brake Cooling Pump Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1652</td>
            <td class="s0">High Well Stimulation Pump Rod Loading</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1653</td>
            <td class="s0">Low Well Stimulation Pump Intake Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1654</td>
            <td class="s0">All Wheel Drive (AWD) Charge Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1655</td>
            <td class="s0">
              Torque Converter Stator Clutch Locked Condition Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1656</td>
            <td class="s0">
              High Aftertreatment #1 DEF Controller #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1657</td>
            <td class="s0">
              High Aftertreatment #2 DEF Controller #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1658</td>
            <td class="s0">
              High Aftertreatment #2 DEF Controller #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1659</td>
            <td class="s0">Machine Inactive Without Brake Engaged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">166</td>
            <td class="s0">
              Radiator Cleanout Door Opened with Engine Running
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1660</td>
            <td class="s0">
              Low Engine Fuel #2 Vaporizer Discharge Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1661</td>
            <td class="s0">
              High Engine Fuel #2 Vaporizer Discharge Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1662</td>
            <td class="s0">Low Rotor Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1663</td>
            <td class="s0">
              Aftertreatment #1 DEF Dosing Unit #2 Input Lines Not Purged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1664</td>
            <td class="s0">
              Aftertreatment #2 DEF Dosing Unit #1 Input Lines Not Purged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1665</td>
            <td class="s0">
              Aftertreatment #2 DEF Dosing Unit #2 Input Lines Not Purged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1666</td>
            <td class="s0">
              Aftertreatment #1 DEF Dosing Unit #2 Loss of Prime
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1667</td>
            <td class="s0">
              Aftertreatment #2 DEF Dosing Unit #2 Loss of Prime
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1668</td>
            <td class="s0">High Center Axle Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1669</td>
            <td class="s0">
              High Front Inertial Measurement Sensor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">167</td>
            <td class="s0">Machine Driven with Rear Axle Pivot Locked</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1670</td>
            <td class="s0">
              Low Front Inertial Measurement Sensor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1671</td>
            <td class="s0">
              Excessive Inertial Measurement Sensor Acceleration Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1672</td>
            <td class="s0">Progress Monitor Stop</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1673</td>
            <td class="s0">
              Machine Travel Seat Swivel Lock Disabled Due to System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1674</td>
            <td class="s0">Low Implement System Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1675</td>
            <td class="s0">Low Engine Fuel #2 Tank #1 Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1676</td>
            <td class="s0">
              High Interaxle Lock Clutch Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1677</td>
            <td class="s0">
              High Center Cross Axle Lock Clutch Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1678</td>
            <td class="s0">
              High Front Cross Axle Lock Clutch Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1679</td>
            <td class="s0">
              High Rear Cross Axle Lock Clutch Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">168</td>
            <td class="s0">Invalid Event</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1680</td>
            <td class="s0">Gaseous Fuel Leakage Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1681</td>
            <td class="s0">High Turbocharger #3 Turbine Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1682</td>
            <td class="s0">High Turbocharger #4 Turbine Intake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1683</td>
            <td class="s0">Leg Swing Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1684</td>
            <td class="s0">Moldboard Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1685</td>
            <td class="s0">
              Primary Steering Disable System Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1686</td>
            <td class="s0">Mine Site Power Phase Sequence Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1687</td>
            <td class="s0">Dead Front Panel Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1688</td>
            <td class="s0">High Left Hydraulic Pump Motor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1689</td>
            <td class="s0">High Right Hydraulic Pump Motor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">169</td>
            <td class="s0">Engine Oil Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1690</td>
            <td class="s0">Low Intake Manifold Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1691</td>
            <td class="s0">Low Exhaust Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1692</td>
            <td class="s0">High Main Transformer Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1693</td>
            <td class="s0">Proximity Detection Override Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1694</td>
            <td class="s0">Low Operator Remote Control Battery</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1695</td>
            <td class="s0">Low Transmission Main Relief Valve Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1696</td>
            <td class="s0">High Aftertreatment #1 DEF Tank Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1697</td>
            <td class="s0">Low Aftertreatment #1 DEF Tank Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1698</td>
            <td class="s0">High Aftertreatment #2 DEF Tank Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1699</td>
            <td class="s0">Low Aftertreatment #2 DEF Tank Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">17</td>
            <td class="s0">High Engine Coolant Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">170</td>
            <td class="s0">Fuel Filter Change Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1700</td>
            <td class="s0">
              Aftertreatment #1 DEF Dosing Unit #2 Temperature Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1701</td>
            <td class="s0">
              Aftertreatment #2 DEF Dosing Unit #1 Temperature Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1702</td>
            <td class="s0">
              Aftertreatment #2 DEF Dosing Unit #2 Temperature Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1703</td>
            <td class="s0">
              Inertial Measurement Sensor Accuracy Insufficient
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1704</td>
            <td class="s0">
              High Transmission Clutch Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1705</td>
            <td class="s0">High Aftertreatment #1 DEF Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1706</td>
            <td class="s0">Low Aftertreatment #1 DEF Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1707</td>
            <td class="s0">High Aftertreatment #2 DEF Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1708</td>
            <td class="s0">Low Aftertreatment #2 DEF Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1709</td>
            <td class="s0">Unexpected Hook Motor Pressure Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">171</td>
            <td class="s0">Low Engine Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1710</td>
            <td class="s0">Unexpected Boom Motor Pressure Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1711</td>
            <td class="s0">High Electric Energy Storage Device #1 Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1712</td>
            <td class="s0">High Electric Energy Storage Device #2 Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1713</td>
            <td class="s0">High Electric Energy Storage Device #3 Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1714</td>
            <td class="s0">
              High Electric Energy Storage Device #1 Charging Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1715</td>
            <td class="s0">
              High Electric Energy Storage Device #2 Charging Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1716</td>
            <td class="s0">
              High Electric Energy Storage Device #3 Charging Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1717</td>
            <td class="s0">
              High Electric Energy Storage Device #1 Discharging Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1718</td>
            <td class="s0">
              High Electric Energy Storage Device #2 Discharging Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1719</td>
            <td class="s0">
              High Electric Energy Storage Device #3 Discharging Current
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">172</td>
            <td class="s0">High Air Filter Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1720</td>
            <td class="s0">
              Electric Energy Storage Device #1 Circuit Breaker Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1721</td>
            <td class="s0">
              Electric Energy Storage Device #2 Circuit Breaker Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1722</td>
            <td class="s0">
              Electric Energy Storage Device #3 Circuit Breaker Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1723</td>
            <td class="s0">
              Aftertreatment #1 DEF Doser #1 Pressure Not Responding To Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1724</td>
            <td class="s0">
              Aftertreatment #2 DEF Doser #1 Pressure Not Responding To Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1725</td>
            <td class="s0">
              Aftertreatment #1 DEF Doser #2 Pressure Not Responding To Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1726</td>
            <td class="s0">
              Aftertreatment #2 DEF Doser #2 Pressure Not Responding To Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1727</td>
            <td class="s0">Low Cab Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1728</td>
            <td class="s0">Maximum Left Track Link Wear Level Reached</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1729</td>
            <td class="s0">Maximum Right Track Link Wear Level Reached</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">173</td>
            <td class="s0">High Exhaust Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1730</td>
            <td class="s0">Electric Energy Storage Device #1 Not Charging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1731</td>
            <td class="s0">Electric Energy Storage Device #2 Not Charging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1732</td>
            <td class="s0">Electric Energy Storage Device #3 Not Charging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1733</td>
            <td class="s0">
              Electric Energy Storage Device #1 Circuit Breaker Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1734</td>
            <td class="s0">
              Electric Energy Storage Device #2 Circuit Breaker Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1735</td>
            <td class="s0">
              Electric Energy Storage Device #3 Circuit Breaker Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1736</td>
            <td class="s0">High Service Brake Accumulated Thermal Energy</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1737</td>
            <td class="s0">Low Swing Charge Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1738</td>
            <td class="s0">
              High Aftertreatment #1 SCR System Sulfation Level
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1739</td>
            <td class="s0">
              High Aftertreatment #2 SCR System Sulfation Level
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">174</td>
            <td class="s0">Low Expansion Tank Fluid Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1740</td>
            <td class="s0">Low Aftertreatment #1 DEF Average Consumption</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1741</td>
            <td class="s0">
              Aftertreatment #1 DEF Tank Temperature #2 Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1742</td>
            <td class="s0">
              Aftertreatment #2 DEF Tank Temperature #1 Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1743</td>
            <td class="s0">
              Aftertreatment #2 DEF Tank Temperature #2 Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1744</td>
            <td class="s0">Low Water Supply Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1745</td>
            <td class="s0">Low Separate Circuit Coolant Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1746</td>
            <td class="s0">High Seawater Outlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1747</td>
            <td class="s0">
              Low Engine Cylinder #1 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1748</td>
            <td class="s0">
              Low Engine Cylinder #2 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1749</td>
            <td class="s0">
              Low Engine Cylinder #3 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">175</td>
            <td class="s0">External Derate Requested</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1750</td>
            <td class="s0">
              Low Engine Cylinder #4 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1751</td>
            <td class="s0">
              Low Engine Cylinder #5 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1752</td>
            <td class="s0">
              Low Engine Cylinder #6 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1753</td>
            <td class="s0">
              Low Engine Cylinder #7 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1754</td>
            <td class="s0">
              Low Engine Cylinder #8 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1755</td>
            <td class="s0">
              Low Engine Cylinder #9 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1756</td>
            <td class="s0">
              Low Engine Cylinder #10 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1757</td>
            <td class="s0">
              Low Engine Cylinder #11 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1758</td>
            <td class="s0">
              Low Engine Cylinder #12 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1759</td>
            <td class="s0">
              Low Engine Cylinder #13 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">176</td>
            <td class="s0">High Starting Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1760</td>
            <td class="s0">
              Low Engine Cylinder #14 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1761</td>
            <td class="s0">
              Low Engine Cylinder #15 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1762</td>
            <td class="s0">
              Low Engine Cylinder #16 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1763</td>
            <td class="s0">
              Low Engine Cylinder #17 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1764</td>
            <td class="s0">
              Low Engine Cylinder #18 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1765</td>
            <td class="s0">
              Low Engine Cylinder #19 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1766</td>
            <td class="s0">
              Low Engine Cylinder #20 Indicated Mean Effective Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1767</td>
            <td class="s0">Low Powertrain Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1768</td>
            <td class="s0">Operator Input Detected While in Unmanned Mode</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1769</td>
            <td class="s0">High Hydraulic Pump #1 Case Drain Flow Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">177</td>
            <td class="s0">Low Starting Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1770</td>
            <td class="s0">High Hydraulic Pump #2 Case Drain Flow Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1771</td>
            <td class="s0">High Hydraulic Pump #3 Case Drain Flow Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1772</td>
            <td class="s0">High Hydraulic Pump #4 Case Drain Flow Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1773</td>
            <td class="s0">High Hydraulic Pump #5 Case Drain Flow Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1774</td>
            <td class="s0">High Hydraulic Pump #6 Case Drain Flow Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1775</td>
            <td class="s0">Low Hydraulic Pump #1 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1776</td>
            <td class="s0">Low Hydraulic Pump #2 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1777</td>
            <td class="s0">Low Hydraulic Pump #3 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1778</td>
            <td class="s0">Low Hydraulic Pump #4 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1779</td>
            <td class="s0">Low Hydraulic Pump #5 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">178</td>
            <td class="s0">Low Fuel Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1780</td>
            <td class="s0">Low Hydraulic Pump #6 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1781</td>
            <td class="s0">
              Motor Control Center DC Power Supply #2 Circuit Breaker Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1782</td>
            <td class="s0">Auxiliary AC Contactor Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1783</td>
            <td class="s0">Air Compressor Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1784</td>
            <td class="s0">High Pressure Wash Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1785</td>
            <td class="s0">Water Boost Pump Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1786</td>
            <td class="s0">
              Motor Control Center DC Power Supply #2 Contactor Mode Switch Not
              in Auto Position
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1787</td>
            <td class="s0">ECM #1 Interface Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1788</td>
            <td class="s0">ECM #2 Interface Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1789</td>
            <td class="s0">Low Air Tank Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">179</td>
            <td class="s0">Alternator Not Charging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1790</td>
            <td class="s0">High Air Tank Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1791</td>
            <td class="s0">Powertrain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1792</td>
            <td class="s0">
              Auxiliary AC Contactor Mode Switch Not in Auto Position
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1793</td>
            <td class="s0">
              Air Compressor Contactor Mode Switch Not in Auto Position
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1794</td>
            <td class="s0">
              High Pressure Wash Contactor Mode Switch Not in Auto Position
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1795</td>
            <td class="s0">
              Water Boost Pump Contactor Mode Switch Not in Auto Position
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1796</td>
            <td class="s0">
              Motor Control Center DC Power Supply #2 Phase Current Imbalance
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1797</td>
            <td class="s0">Auxiliary AC Contactor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1798</td>
            <td class="s0">Air Compressor Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1799</td>
            <td class="s0">High Pressure Wash Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">18</td>
            <td class="s0">High Engine Oil Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">180</td>
            <td class="s0">Auto Lube Distribution Line Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1800</td>
            <td class="s0">Water Boost Pump Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1801</td>
            <td class="s0">High Engine Cylinder #1 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1802</td>
            <td class="s0">High Engine Cylinder #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1803</td>
            <td class="s0">High Engine Cylinder #3 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1804</td>
            <td class="s0">High Engine Cylinder #4 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1805</td>
            <td class="s0">High Engine Cylinder #5 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1806</td>
            <td class="s0">High Engine Cylinder #6 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1807</td>
            <td class="s0">High Engine Cylinder #7 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1808</td>
            <td class="s0">High Engine Cylinder #8 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1809</td>
            <td class="s0">High Engine Cylinder #9 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">181</td>
            <td class="s0">Limited Mobility Mode</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1810</td>
            <td class="s0">High Engine Cylinder #10 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1811</td>
            <td class="s0">High Engine Cylinder #11 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1812</td>
            <td class="s0">High Engine Cylinder #12 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1813</td>
            <td class="s0">High Engine Cylinder #13 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1814</td>
            <td class="s0">High Engine Cylinder #14 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1815</td>
            <td class="s0">High Engine Cylinder #15 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1816</td>
            <td class="s0">High Engine Cylinder #16 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1817</td>
            <td class="s0">High Engine Cylinder #17 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1818</td>
            <td class="s0">High Engine Cylinder #18 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1819</td>
            <td class="s0">High Engine Cylinder #19 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">182</td>
            <td class="s0">Suction Valve Off</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1820</td>
            <td class="s0">High Engine Cylinder #20 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1821</td>
            <td class="s0">
              Incorrect Motor Control Center DC Power Supply #2 Breaker
              Installed
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1822</td>
            <td class="s0">Incorrect Auxiliary AC Breaker Installed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1823</td>
            <td class="s0">Incorrect Air Compressor Breaker Installed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1824</td>
            <td class="s0">Incorrect High Pressure Wash Breaker Installed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1825</td>
            <td class="s0">Incorrect Water Boost Pump Breaker Installed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1826</td>
            <td class="s0">
              Incorrect Motor Control Center DC Power Supply #2 Breaker Trip
              Setting
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1827</td>
            <td class="s0">
              Incorrect Auxiliary AC Contactor Breaker Trip Setting
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1828</td>
            <td class="s0">Incorrect Air Compressor Breaker Trip Setting</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1829</td>
            <td class="s0">High Traction Power Converter DC Bus Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">183</td>
            <td class="s0">High Pressure Oil Line Broken</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1830</td>
            <td class="s0">
              High Left Traction Motor Controller DC Bus Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1831</td>
            <td class="s0">
              High Right Traction Motor Controller DC Bus Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1832</td>
            <td class="s0">Low Traction Power Converter DC Bus Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1833</td>
            <td class="s0">
              Low Left Traction Motor Controller DC Bus Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1834</td>
            <td class="s0">
              Low Right Traction Motor Controller DC Bus Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1835</td>
            <td class="s0">Low Traction Power Converter Supply Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1836</td>
            <td class="s0">
              Traction Power Converter Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1837</td>
            <td class="s0">Traction Power Converter Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1838</td>
            <td class="s0">
              High Traction Power Converter Transistor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1839</td>
            <td class="s0">High Traction Power Converter Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">184</td>
            <td class="s0">High Pressure Fuel Line Broken</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1840</td>
            <td class="s0">
              Traction Dynamic Braking Thermal Capacity Exceeded
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1841</td>
            <td class="s0">Conveyor Motor Load Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1842</td>
            <td class="s0">
              Left Conveyor Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1843</td>
            <td class="s0">Left Conveyor Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1844</td>
            <td class="s0">
              Left Conveyor Motor Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1845</td>
            <td class="s0">Left Conveyor Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1846</td>
            <td class="s0">
              Right Conveyor Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1847</td>
            <td class="s0">Right Conveyor Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1848</td>
            <td class="s0">
              Right Conveyor Motor Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1849</td>
            <td class="s0">Right Conveyor Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">185</td>
            <td class="s0">Low Seawater Outlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1850</td>
            <td class="s0">Cutter Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1851</td>
            <td class="s0">Cutter Motor Load Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1852</td>
            <td class="s0">
              Left Cutter Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1853</td>
            <td class="s0">Left Cutter Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1854</td>
            <td class="s0">Left Cutter Motor Instantaneous Current Overload</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1855</td>
            <td class="s0">Left Cutter Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1856</td>
            <td class="s0">
              Right Cutter Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1857</td>
            <td class="s0">Right Cutter Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1858</td>
            <td class="s0">
              Right Cutter Motor Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1859</td>
            <td class="s0">Right Cutter Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">186</td>
            <td class="s0">Low Inlet Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1860</td>
            <td class="s0">Fan Motor Current Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1861</td>
            <td class="s0">Fan Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1862</td>
            <td class="s0">Fan Motor Instantaneous Current Overload</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1863</td>
            <td class="s0">Fan Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1864</td>
            <td class="s0">Gathering Motor Load Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1865</td>
            <td class="s0">
              Left Gathering Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1866</td>
            <td class="s0">Left Gathering Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1867</td>
            <td class="s0">
              Left Gathering Motor Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1868</td>
            <td class="s0">Left Gathering Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1869</td>
            <td class="s0">
              Right Gathering Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">187</td>
            <td class="s0">Diagnostic Event</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1870</td>
            <td class="s0">Right Gathering Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1871</td>
            <td class="s0">
              Right Gathering Motor Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1872</td>
            <td class="s0">Right Gathering Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1873</td>
            <td class="s0">High Machine Supply Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1874</td>
            <td class="s0">Intermediate Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1875</td>
            <td class="s0">Low Machine Supply Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1876</td>
            <td class="s0">Main Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1877</td>
            <td class="s0">Power Center Trip Relay Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1878</td>
            <td class="s0">Pump Motor Current Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1879</td>
            <td class="s0">Pump Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">188</td>
            <td class="s0">
              Parking Brake not actuated by Service Brake Pedal
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1880</td>
            <td class="s0">Pump Motor Instantaneous Current Overload</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1881</td>
            <td class="s0">Pump Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1882</td>
            <td class="s0">
              Left Traction Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1883</td>
            <td class="s0">Left Traction Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1884</td>
            <td class="s0">
              Left Traction Motor Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1885</td>
            <td class="s0">Left Traction Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1886</td>
            <td class="s0">
              Right Traction Motor Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1887</td>
            <td class="s0">Right Traction Motor Current without Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1888</td>
            <td class="s0">
              Right Traction Motor Instantaneous Current Overload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1889</td>
            <td class="s0">Right Traction Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">189</td>
            <td class="s0">Excess Oil Mist in Crankcase</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1890</td>
            <td class="s0">Traction Circuit Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1891</td>
            <td class="s0">
              Conveyor Left/Right Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1892</td>
            <td class="s0">
              Conveyor Raise/Lower Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1893</td>
            <td class="s0">
              Cutter Drum Extend/Retract Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1894</td>
            <td class="s0">
              Cutter Head Raise/Lower Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1895</td>
            <td class="s0">
              Gathering Head Raise/Lower Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1896</td>
            <td class="s0">
              Gathering Wing Extend/Retract Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1897</td>
            <td class="s0">Emergency Stop Override Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1898</td>
            <td class="s0">Emergency Stop Relay Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1899</td>
            <td class="s0">External Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">19</td>
            <td class="s0">High Engine Oil Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">190</td>
            <td class="s0">Engine Overspeed Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1900</td>
            <td class="s0">High Voltage Enclosure Door Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1901</td>
            <td class="s0">Invalid Operator Remote Control Channel</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1902</td>
            <td class="s0">Left Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1903</td>
            <td class="s0">Low Machine Supply Water Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1904</td>
            <td class="s0">Low Machine Supply Water Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1905</td>
            <td class="s0">Machine Current Detected With Machine Inactive</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1906</td>
            <td class="s0">Machine Off Key Switch Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1907</td>
            <td class="s0">
              Machine Operation Attempted Without Cab Operation Foot Switch
              Depressed
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1908</td>
            <td class="s0">Machine Shutdown Due To Inactivity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1909</td>
            <td class="s0">
              Multiple Operator Remote Control Signals Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">191</td>
            <td class="s0">
              Boom Raise Limit Reached Due to Machine In Motion
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1910</td>
            <td class="s0">
              Operator Remote Control Disabled Due to Stuck Switch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1911</td>
            <td class="s0">Operator Remote Control Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1912</td>
            <td class="s0">Operator Remote Control Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1913</td>
            <td class="s0">Right Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1914</td>
            <td class="s0">Methane Detection System Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1915</td>
            <td class="s0">Methane Detection System Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1916</td>
            <td class="s0">Personnel Detected Within Machine Proximity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1917</td>
            <td class="s0">
              Temporary Roof Support Raise/Lower Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1918</td>
            <td class="s0">
              Stabilizer Raise/Lower Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1919</td>
            <td class="s0">
              Sump Frame Extend/Retract Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">192</td>
            <td class="s0">Steering System Malfunction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1920</td>
            <td class="s0">
              Left Track Brake Pressure Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1921</td>
            <td class="s0">Left Traction Motor Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1922</td>
            <td class="s0">
              Right Track Brake Pressure Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1923</td>
            <td class="s0">Right Traction Motor Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1924</td>
            <td class="s0">
              Speed Limited Due to Traction Motor Speed Signal Loss
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1925</td>
            <td class="s0">High Left Conveyor Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1926</td>
            <td class="s0">High Left Conveyor Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1927</td>
            <td class="s0">High Left Conveyor Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1928</td>
            <td class="s0">High Right Conveyor Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1929</td>
            <td class="s0">High Right Conveyor Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">193</td>
            <td class="s0">
              Boom Raise Limit Reached Due to Park Brake Not Engaged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1930</td>
            <td class="s0">High Right Conveyor Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1931</td>
            <td class="s0">Left Conveyor Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1932</td>
            <td class="s0">Right Conveyor Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1933</td>
            <td class="s0">High Left Cutter Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1934</td>
            <td class="s0">High Left Cutter Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1935</td>
            <td class="s0">High Left Cutter Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1936</td>
            <td class="s0">High Right Cutter Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1937</td>
            <td class="s0">High Right Cutter Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1938</td>
            <td class="s0">High Right Cutter Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1939</td>
            <td class="s0">Left Cutter Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">194</td>
            <td class="s0">High Exhaust Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1940</td>
            <td class="s0">Right Cutter Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1941</td>
            <td class="s0">Fan Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1942</td>
            <td class="s0">High Fan Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1943</td>
            <td class="s0">High Fan Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1944</td>
            <td class="s0">High Fan Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1945</td>
            <td class="s0">High Left Gathering Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1946</td>
            <td class="s0">High Left Gathering Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1947</td>
            <td class="s0">High Left Gathering Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1948</td>
            <td class="s0">High Right Gathering Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1949</td>
            <td class="s0">High Right Gathering Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">195</td>
            <td class="s0">Conflicting Travel Pedal Switches Information</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1950</td>
            <td class="s0">High Right Gathering Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1951</td>
            <td class="s0">Left Gathering Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1952</td>
            <td class="s0">Right Gathering Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1953</td>
            <td class="s0">High Pump Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1954</td>
            <td class="s0">High Pump Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1955</td>
            <td class="s0">High Pump Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1956</td>
            <td class="s0">Pump Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1957</td>
            <td class="s0">High Left Traction Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1958</td>
            <td class="s0">High Left Traction Motor Controller Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1959</td>
            <td class="s0">High Left Traction Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">196</td>
            <td class="s0">
              Conflicting Attachment Pedal Switches Information
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1960</td>
            <td class="s0">High Left Traction Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1961</td>
            <td class="s0">High Right Traction Motor Bearing Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1962</td>
            <td class="s0">High Right Traction Motor Controller Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1963</td>
            <td class="s0">High Right Traction Motor Frame Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1964</td>
            <td class="s0">High Right Traction Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1965</td>
            <td class="s0">High Traction Transformer Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1966</td>
            <td class="s0">Left Traction Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">1967</td>
            <td class="s0">Right Traction Motor Thermal Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">197</td>
            <td class="s0">High Engine Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">198</td>
            <td class="s0">Low Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">199</td>
            <td class="s0">Low Coolant Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2</td>
            <td class="s0">Engine Oil Filter Restriction Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">20</td>
            <td class="s0">High Engine Oil Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">200</td>
            <td class="s0">Continuous Cylinder Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2000</td>
            <td class="s0">
              Pump to Bucket Rod End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2001</td>
            <td class="s0">
              Pump to Bucket Head End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2002</td>
            <td class="s0">
              Pump to Boom Rod End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2003</td>
            <td class="s0">
              Pump to Boom Head End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2004</td>
            <td class="s0">
              Pump to Stick Rod End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2005</td>
            <td class="s0">
              Pump to Stick Head End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2006</td>
            <td class="s0">
              Pump to Swing Motor Left Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2007</td>
            <td class="s0">
              Pump to Swing Motor Right Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2008</td>
            <td class="s0">
              Pump to Right Travel Forward Motor Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2009</td>
            <td class="s0">
              Pump to Right Travel Backward Motor Spool Not Responding to
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">201</td>
            <td class="s0">Cylinder #1 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2010</td>
            <td class="s0">
              Pump to Left Travel Forward Motor Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2011</td>
            <td class="s0">
              Pump to Left Travel Backward Motor Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2012</td>
            <td class="s0">
              Pump to Attachment #1 Rod End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2013</td>
            <td class="s0">
              Pump to Attachment #1 Head End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2014</td>
            <td class="s0">
              Pump to Attachment #2 Rod End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2015</td>
            <td class="s0">
              Pump to Attachment #2 Head End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2016</td>
            <td class="s0">
              Pump to Attachment #3 Rod End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2017</td>
            <td class="s0">
              Pump to Attachment #3 Head End Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2018</td>
            <td class="s0">
              Bucket Rod End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2019</td>
            <td class="s0">
              Bucket Head End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">202</td>
            <td class="s0">Cylinder #2 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2020</td>
            <td class="s0">
              Boom Rod End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2021</td>
            <td class="s0">
              Boom Head End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2022</td>
            <td class="s0">
              Stick Rod End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2023</td>
            <td class="s0">
              Stick Head End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2024</td>
            <td class="s0">
              Swing Motor Left to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2025</td>
            <td class="s0">
              Swing Motor Right to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2026</td>
            <td class="s0">
              Right Travel Forward Motor to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2027</td>
            <td class="s0">
              Right Travel Backward Motor to Tank Spool Not Responding to
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2028</td>
            <td class="s0">
              Left Travel Forward Motor to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2029</td>
            <td class="s0">
              Left Travel Backward Motor to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">203</td>
            <td class="s0">Cylinder #3 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2030</td>
            <td class="s0">
              Attachment #1 Rod End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2031</td>
            <td class="s0">
              Attachment #1 Head End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2032</td>
            <td class="s0">
              Attachment #2 Rod End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2033</td>
            <td class="s0">
              Attachment #2 Head End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2034</td>
            <td class="s0">
              Attachment #3 Rod End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2035</td>
            <td class="s0">
              Attachment #3 Head End to Tank Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2036</td>
            <td class="s0">Pump to Bucket Rod End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2037</td>
            <td class="s0">Pump to Bucket Head End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2038</td>
            <td class="s0">Pump to Boom Rod End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2039</td>
            <td class="s0">Pump to Boom Head End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">204</td>
            <td class="s0">Cylinder #4 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2040</td>
            <td class="s0">Pump to Stick Rod End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2041</td>
            <td class="s0">Pump to Stick Head End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2042</td>
            <td class="s0">Pump to Swing Motor Left Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2043</td>
            <td class="s0">Pump to Swing Motor Right Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2044</td>
            <td class="s0">
              Pump to Right Travel Forward Motor Spool Sticking
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2045</td>
            <td class="s0">
              Pump to Right Travel Backward Motor Spool Sticking
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2046</td>
            <td class="s0">Pump to Left Travel Forward Motor Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2047</td>
            <td class="s0">
              Pump to Left Travel Backward Motor Spool Sticking
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2048</td>
            <td class="s0">Pump to Attachment #1 Rod End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2049</td>
            <td class="s0">Pump to Attachment #1 Head End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">205</td>
            <td class="s0">Cylinder #5 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2050</td>
            <td class="s0">Pump to Attachment #2 Rod End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2051</td>
            <td class="s0">Pump to Attachment #2 Head End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2052</td>
            <td class="s0">Pump to Attachment #3 Rod End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2053</td>
            <td class="s0">Pump to Attachment #3 Head End Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2054</td>
            <td class="s0">Bucket Rod End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2055</td>
            <td class="s0">Bucket Head End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2056</td>
            <td class="s0">Boom Rod End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2057</td>
            <td class="s0">Boom Head End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2058</td>
            <td class="s0">Stick Rod End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2059</td>
            <td class="s0">Stick Head End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">206</td>
            <td class="s0">Cylinder #6 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2060</td>
            <td class="s0">Swing Motor Left to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2061</td>
            <td class="s0">Swing Motor Right to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2062</td>
            <td class="s0">
              Right Travel Forward Motor to Tank Spool Sticking
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2063</td>
            <td class="s0">
              Right Travel Backward Motor to Tank Spool Sticking
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2064</td>
            <td class="s0">Left Travel Forward Motor to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2065</td>
            <td class="s0">
              Left Travel Backward Motor to Tank Spool Sticking
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2066</td>
            <td class="s0">Attachment #1 Rod End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2067</td>
            <td class="s0">Attachment #1 Head End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2068</td>
            <td class="s0">Attachment #2 Rod End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2069</td>
            <td class="s0">Attachment #2 Head End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">207</td>
            <td class="s0">Cylinder #7 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2070</td>
            <td class="s0">Attachment #3 Rod End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2071</td>
            <td class="s0">Attachment #3 Head End to Tank Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2072</td>
            <td class="s0">
              Screed Left Material Height Sensor Signal Out of Range
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2073</td>
            <td class="s0">
              Screed Right Material Height Sensor Signal Out of Range
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2074</td>
            <td class="s0">Engine Shutdown Due to Diagnostic</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2075</td>
            <td class="s0">
              Winch Low Speed Lock Switch Depressed At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2076</td>
            <td class="s0">
              Auto Blade Assist Switch Depressed at Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2077</td>
            <td class="s0">
              Auto Carry Switch Depressed at Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2078</td>
            <td class="s0">
              Steering Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2079</td>
            <td class="s0">Low Left Front Suspension Cylinder Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">208</td>
            <td class="s0">Cylinder #8 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2080</td>
            <td class="s0">Low Right Front Suspension Cylinder Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2081</td>
            <td class="s0">Low Left Rear Suspension Cylinder Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2082</td>
            <td class="s0">Low Right Rear Suspension Cylinder Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2083</td>
            <td class="s0">Payload Memory Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2085</td>
            <td class="s0">Invalid Articulation Response Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2086</td>
            <td class="s0">Hydraulic Fan Return Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2087</td>
            <td class="s0">Air Intake Shutoff Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2088</td>
            <td class="s0">
              Air Intake Shutoff Detection Circuit Detected but Not Installed
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2089</td>
            <td class="s0">Oil Renewal System Cannot Operate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">209</td>
            <td class="s0">Cylinder #9 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2090</td>
            <td class="s0">
              Machine Motion Restricted While Steering Wheel is in Stowed
              Position
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2091</td>
            <td class="s0">Steering Wheel Stowed While Machine is in Motion</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2092</td>
            <td class="s0">Auto Blade Assist Disabled due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2093</td>
            <td class="s0">Moisture Detected In Fuel</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2094</td>
            <td class="s0">AutoReturn Disabled due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2095</td>
            <td class="s0">AutoSpread Disabled due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2096</td>
            <td class="s0">Low Engine Oil Refill Tank Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2097</td>
            <td class="s0">Swing Motor Spool Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2098</td>
            <td class="s0">
              Right Travel Motor Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2099</td>
            <td class="s0">
              Left Travel Motor Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">21</td>
            <td class="s0">High Exhaust Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">210</td>
            <td class="s0">Cylinder #10 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2100</td>
            <td class="s0">
              Hydraulic Pump #1 Control Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2101</td>
            <td class="s0">
              Hydraulic Pump #2 Control Spool Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2102</td>
            <td class="s0">Combining Spool Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2103</td>
            <td class="s0">Swing Motor Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2104</td>
            <td class="s0">Right Travel Motor Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2105</td>
            <td class="s0">Left Travel Motor Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2106</td>
            <td class="s0">Hydraulic Pump #1 Control Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2107</td>
            <td class="s0">Hydraulic Pump #2 Control Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2108</td>
            <td class="s0">Combining Spool Sticking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2109</td>
            <td class="s0">Secondary ECM Took Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">211</td>
            <td class="s0">Cylinder #11 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2110</td>
            <td class="s0">Left Front Charge Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2111</td>
            <td class="s0">Right Front Charge Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2112</td>
            <td class="s0">Low Engine Coolant Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2113</td>
            <td class="s0">Low Aftercooler Coolant Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2114</td>
            <td class="s0">Swing Angle Out of Normal Operating Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2115</td>
            <td class="s0">Implements Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2116</td>
            <td class="s0">High Implement Pilot Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2117</td>
            <td class="s0">Low Implement Pilot Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2118</td>
            <td class="s0">High Steering Pilot Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2119</td>
            <td class="s0">Low Steering Pilot Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">212</td>
            <td class="s0">Cylinder #12 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2120</td>
            <td class="s0">Steering Tank Case Drain Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2121</td>
            <td class="s0">Steering Pilot Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2122</td>
            <td class="s0">Transmission Left Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2123</td>
            <td class="s0">Transmission Right Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2124</td>
            <td class="s0">Low Front Brake Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2125</td>
            <td class="s0">Low Rear Brake Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2126</td>
            <td class="s0">Payload Overload Limit Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2127</td>
            <td class="s0">Left Air Filter Restricted</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2128</td>
            <td class="s0">Right Air Filter Restricted</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2129</td>
            <td class="s0">High Front Axle Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">213</td>
            <td class="s0">Cylinder #13 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2130</td>
            <td class="s0">High Rear Axle Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2131</td>
            <td class="s0">Geographical Inclusive Zone Boundary Violation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2132</td>
            <td class="s0">Geographical Exclusive Zone Boundary Violation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2133</td>
            <td class="s0">Operation Time Boundary Violation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2134</td>
            <td class="s0">Low Primary Steering Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2135</td>
            <td class="s0">Parameter Translation File Invalid</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2136</td>
            <td class="s0">AutoCarry Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2137</td>
            <td class="s0">AutoCarry Inhibited Due To Low Engine Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2138</td>
            <td class="s0">Payload Memory Full</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2139</td>
            <td class="s0">Snapshot Memory Full</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">214</td>
            <td class="s0">Cylinder #14 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2140</td>
            <td class="s0">Powertrain Limited Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2141</td>
            <td class="s0">Low Steering Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2142</td>
            <td class="s0">High Steering Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2143</td>
            <td class="s0">Low Engine Coolant Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2144</td>
            <td class="s0">Low Front Brake Lube Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2145</td>
            <td class="s0">Low Rear Brake Lube Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2146</td>
            <td class="s0">Implement Tank Return Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2147</td>
            <td class="s0">Implement Tank Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2148</td>
            <td class="s0">High Lift Cylinder Head End Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2149</td>
            <td class="s0">High Tilt Cylinder Head End Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">215</td>
            <td class="s0">Cylinder #15 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2150</td>
            <td class="s0">Low Windshield Washer Fluid Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2151</td>
            <td class="s0">Downshift Inhibited</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2152</td>
            <td class="s0">Lockup Clutch Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2153</td>
            <td class="s0">Auto Lube Inhibited Due To Engine Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2154</td>
            <td class="s0">
              Transmission Neutralized Due to Parking Brake Applied
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2155</td>
            <td class="s0">Incorrect Gear for AutoCarry</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2156</td>
            <td class="s0">AccuGrade Disabled Due To System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2157</td>
            <td class="s0">
              Starter Disabled Due to Transmission Not in Neutral
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2158</td>
            <td class="s0">Starter Disabled Due to High System Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2159</td>
            <td class="s0">High Generator Power Converter Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">216</td>
            <td class="s0">Cylinder #16 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2160</td>
            <td class="s0">
              Machine Operation Attempted Outside Security Bypass Period
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2161</td>
            <td class="s0">Low Left Steering Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2162</td>
            <td class="s0">Low Center Steering Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2163</td>
            <td class="s0">
              High Turbocharger Turbine Intake Differential Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2164</td>
            <td class="s0">Invalid Aftertreatment #2 Outlet #1 NOx Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2165</td>
            <td class="s0">
              Low Aftertreatment #1 Diesel Oxidation Catalyst #1 Intake Gas
              Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2166</td>
            <td class="s0">
              Low Aftertreatment #1 Diesel Oxidation Catalyst #2 Intake Gas
              Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2167</td>
            <td class="s0">Lift Kickout Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2168</td>
            <td class="s0">Tilt Kickout Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2169</td>
            <td class="s0">Powertrain Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">217</td>
            <td class="s0">Low Diesel Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2170</td>
            <td class="s0">Implement Limited Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2171</td>
            <td class="s0">High Engine Coolant Pump Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2172</td>
            <td class="s0">Low Fuel Transfer Pump Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2173</td>
            <td class="s0">Transmission Not In Neutral at Startup</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2174</td>
            <td class="s0">Parking Brake Switch Off At Inappropriate Time</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2175</td>
            <td class="s0">Low Urea Injection Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2176</td>
            <td class="s0">Low Urea Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2177</td>
            <td class="s0">High Catalyst Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2178</td>
            <td class="s0">
              Low Aftertreatment #2 Diesel Oxidation Catalyst #1 Intake Gas
              Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2179</td>
            <td class="s0">
              Low Aftertreatment #2 Diesel Oxidation Catalyst #2 Intake Gas
              Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">218</td>
            <td class="s0">High Diesel Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2180</td>
            <td class="s0">
              Low Aftertreatment #1 Diesel Oxidation Catalyst #1 Conversion
              Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2181</td>
            <td class="s0">
              Low Aftertreatment #1 Diesel Oxidation Catalyst #2 Conversion
              Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2182</td>
            <td class="s0">
              Low Aftertreatment #2 Diesel Oxidation Catalyst #1 Conversion
              Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2183</td>
            <td class="s0">
              Low Aftertreatment #2 Diesel Oxidation Catalyst #2 Conversion
              Efficiency
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2184</td>
            <td class="s0">High Filter Capacitor Phase A-B Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2185</td>
            <td class="s0">High Filter Capacitor Phase B-C Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2186</td>
            <td class="s0">High Auxiliary AC Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2187</td>
            <td class="s0">Low Auxiliary AC Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2188</td>
            <td class="s0">
              Incorrect High Pressure Wash Breaker Trip Setting
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2189</td>
            <td class="s0">Incorrect Water Boost Pump Breaker Trip Setting</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">219</td>
            <td class="s0">Low Diesel Fuel Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2190</td>
            <td class="s0">
              Incorrect Motor Control Center DC Power Supply #2 Breaker Trip
              Class
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2191</td>
            <td class="s0">Incorrect Auxiliary AC Breaker Trip Class</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2192</td>
            <td class="s0">Incorrect Air Compressor Breaker Trip Class</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2193</td>
            <td class="s0">Incorrect High Pressure Wash Breaker Trip Class</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2194</td>
            <td class="s0">Incorrect Water Boost Pump Breaker Trip Class</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2195</td>
            <td class="s0">Motor Control Center Enclosure Door Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2196</td>
            <td class="s0">
              Motor Control Center Enclosure Heater Circuit Breaker Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2197</td>
            <td class="s0">High Motor Control Center Enclosure Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2198</td>
            <td class="s0">
              High Auxiliary AC Contactor Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2199</td>
            <td class="s0">
              High Air Compressor Motor Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">22</td>
            <td class="s0">High Exhaust Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">220</td>
            <td class="s0">High Diesel Fuel Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2200</td>
            <td class="s0">
              Torque Converter Lockup Clutch Slip Detected in Direct Drive
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2201</td>
            <td class="s0">Transmission Slip Detected in First Forward Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2202</td>
            <td class="s0">
              Transmission Slip Detected in Second Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2203</td>
            <td class="s0">Transmission Slip Detected in Third Forward Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2204</td>
            <td class="s0">
              Transmission Slip Detected in Fourth Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2205</td>
            <td class="s0">Transmission Slip Detected in Fifth Forward Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2206</td>
            <td class="s0">Transmission Slip Detected in Sixth Forward Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2207</td>
            <td class="s0">
              Transmission Slip Detected in Seventh Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2208</td>
            <td class="s0">
              Transmission Slip Detected in Eighth Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2209</td>
            <td class="s0">Transmission Slip Detected in Ninth Forward Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">221</td>
            <td class="s0">Low Gas Supply Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2210</td>
            <td class="s0">Transmission Slip Detected in Tenth Forward Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2211</td>
            <td class="s0">
              Transmission Slip Detected in Eleventh Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2212</td>
            <td class="s0">
              Transmission Slip Detected in Twelfth Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2213</td>
            <td class="s0">
              Transmission Slip Detected in Thirteenth Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2214</td>
            <td class="s0">
              Transmission Slip Detected in Fourteenth Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2215</td>
            <td class="s0">
              Transmission Slip Detected in Fifteenth Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2216</td>
            <td class="s0">
              Transmission Slip Detected in Sixteenth Forward Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2217</td>
            <td class="s0">
              High Pressure Wash Motor Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2218</td>
            <td class="s0">
              High Water Boost Pump Motor Accumulated Thermal Energy
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2219</td>
            <td class="s0">
              Left Hydraulic Pump Motor Contactor Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">222</td>
            <td class="s0">High Gas Supply Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2220</td>
            <td class="s0">
              Right Hydraulic Pump Motor Contactor Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2221</td>
            <td class="s0">
              High Left Hydraulic Pump Motor Control Pole A Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2222</td>
            <td class="s0">
              High Left Hydraulic Pump Motor Control Pole B Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2223</td>
            <td class="s0">
              High Left Hydraulic Pump Motor Control Pole C Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2224</td>
            <td class="s0">
              High Right Hydraulic Pump Motor Control Pole A Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2225</td>
            <td class="s0">
              High Right Hydraulic Pump Motor Control Pole B Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2226</td>
            <td class="s0">
              High Right Hydraulic Pump Motor Control Pole C Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2227</td>
            <td class="s0">
              High Left Hydraulic Pump Motor Gateway Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2228</td>
            <td class="s0">
              Low Left Hydraulic Pump Motor Gateway Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2229</td>
            <td class="s0">
              High Right Hydraulic Pump Motor Gateway Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">223</td>
            <td class="s0">High Gas Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2230</td>
            <td class="s0">
              Low Right Hydraulic Pump Motor Gateway Power Input Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2231</td>
            <td class="s0">
              High Left Hydraulic Pump Motor Gateway Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2232</td>
            <td class="s0">
              High Right Hydraulic Pump Motor Gateway Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2233</td>
            <td class="s0">
              Left Hydraulic Pump Motor Gateway IP Setting Incorrect
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2234</td>
            <td class="s0">
              Right Hydraulic Pump Motor Gateway IP Setting Incorrect
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2235</td>
            <td class="s0">
              Cab Air Electric Heater #1 Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2236</td>
            <td class="s0">
              Cab Air Electric Heater #2 Current Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2237</td>
            <td class="s0">Tiltrotator System Voltage High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2238</td>
            <td class="s0">Tiltrotator System Voltage Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2239</td>
            <td class="s0">Transformer #1 Input Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">224</td>
            <td class="s0">High Jacket Water Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2240</td>
            <td class="s0">Transformer #2 Input Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2241</td>
            <td class="s0">Transformer #1 Output Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2242</td>
            <td class="s0">Transformer #2 Output Breaker Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2243</td>
            <td class="s0">
              Motor Control Center DC Power Supply #2 Contactor Stuck Closed
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2244</td>
            <td class="s0">
              Motor Control Center DC Power Supply #2 Contactor Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2245</td>
            <td class="s0">Auxiliary AC Contactor Stuck Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2246</td>
            <td class="s0">Auxiliary AC Contactor Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2247</td>
            <td class="s0">Air Compressor Contactor Stuck Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2248</td>
            <td class="s0">Air Compressor Contactor Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2249</td>
            <td class="s0">High Pressure Wash Contactor Stuck Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">225</td>
            <td class="s0">Engine Overcrank</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2250</td>
            <td class="s0">High Pressure Wash Contactor Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2251</td>
            <td class="s0">Water Boost Pump Contactor Stuck Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2252</td>
            <td class="s0">Water Boost Pump Contactor Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2253</td>
            <td class="s0">Auxiliary AC Ground Continuity Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2254</td>
            <td class="s0">Invalid Aftertreatment #1 Intake NOx Level #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2255</td>
            <td class="s0">Invalid Aftertreatment #1 Outlet NOx Level #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2256</td>
            <td class="s0">
              High Aftertreatment #1 Intake O2 Concentration #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2257</td>
            <td class="s0">
              High Aftertreatment #1 Outlet O2 Concentration #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2258</td>
            <td class="s0">High Left Front Inner Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2259</td>
            <td class="s0">High Left Front Outer Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">226</td>
            <td class="s0">Driven Equipment Not Ready</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2260</td>
            <td class="s0">High Right Front Inner Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2261</td>
            <td class="s0">High Right Front Outer Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2262</td>
            <td class="s0">High Left Front Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2263</td>
            <td class="s0">Low Left Front Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2264</td>
            <td class="s0">High Right Front Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2265</td>
            <td class="s0">Low Right Front Outer Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2266</td>
            <td class="s0">High Left Front Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2267</td>
            <td class="s0">Low Left Front Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2268</td>
            <td class="s0">Low Right Front Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2269</td>
            <td class="s0">Low Steering Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">227</td>
            <td class="s0">Insufficient Boost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2270</td>
            <td class="s0">High Right Front Inner Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2271</td>
            <td class="s0">High Machine Coolant Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2272</td>
            <td class="s0">Low Machine Coolant Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2273</td>
            <td class="s0">High Cutter Gearbox Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2274</td>
            <td class="s0">Low Air Supply Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2276</td>
            <td class="s0">Front Left Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2277</td>
            <td class="s0">Front Right Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2278</td>
            <td class="s0">Rear Left Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2279</td>
            <td class="s0">Rear Right Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">228</td>
            <td class="s0">Low Jacket Water Outlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2280</td>
            <td class="s0">Rear Conveyor Left Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2281</td>
            <td class="s0">Rear Conveyor Right Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2282</td>
            <td class="s0">Oxygen Detection System Warning Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2283</td>
            <td class="s0">Oxygen Detection System Shutdown Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2284</td>
            <td class="s0">
              Roof Bolter Remote Control Emergency Stop Activated
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2285</td>
            <td class="s0">
              Mesh Handler Remote Control Emergency Stop Activated
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2286</td>
            <td class="s0">Machine Remote Control Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2287</td>
            <td class="s0">High Engine Turbocharger Differential Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2288</td>
            <td class="s0">High High-Pressure Fuel Pump Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2289</td>
            <td class="s0">Low High-Pressure Fuel Pump Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">229</td>
            <td class="s0">Fuel Energy Content Setting Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2290</td>
            <td class="s0">GPS #1 Accuracy Insufficient</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2291</td>
            <td class="s0">GPS #2 Accuracy Insufficient</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2292</td>
            <td class="s0">High Air Conditioner Discharge Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2293</td>
            <td class="s0">Low Air Conditioner Suction Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2294</td>
            <td class="s0">Fuel Injection Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2295</td>
            <td class="s0">Hydraulic Pilot Supply #1 Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2296</td>
            <td class="s0">Hydraulic Pilot Supply #2 Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2297</td>
            <td class="s0">High Main Hydraulic Pump #1 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2298</td>
            <td class="s0">High Main Hydraulic Pump #2 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2299</td>
            <td class="s0">High Main Hydraulic Pump #3 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">23</td>
            <td class="s0">High Hydraulic Oil Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">230</td>
            <td class="s0">Fuel Energy Content Setting High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2300</td>
            <td class="s0">High Main Hydraulic Pump #4 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2301</td>
            <td class="s0">Transmission Slip Detected in First Reverse Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2302</td>
            <td class="s0">
              Transmission Slip Detected in Second Reverse Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2303</td>
            <td class="s0">Transmission Slip Detected in Third Reverse Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2304</td>
            <td class="s0">
              Transmission Slip Detected in Fourth Reverse Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2305</td>
            <td class="s0">Transmission Slip Detected in Fifth Reverse Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2306</td>
            <td class="s0">Transmission Slip Detected in Sixth Reverse Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2307</td>
            <td class="s0">High Main Hydraulic Pump #5 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2308</td>
            <td class="s0">High Main Hydraulic Pump #6 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2309</td>
            <td class="s0">High Main Hydraulic Pump #7 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">231</td>
            <td class="s0">Fuel Quality Out of Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2310</td>
            <td class="s0">High Main Hydraulic Pump #8 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2311</td>
            <td class="s0">
              Main Hydraulic Pump #1 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2312</td>
            <td class="s0">
              Main Hydraulic Pump #2 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2313</td>
            <td class="s0">
              Main Hydraulic Pump #3 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2314</td>
            <td class="s0">
              Main Hydraulic Pump #4 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2315</td>
            <td class="s0">
              Main Hydraulic Pump #5 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2316</td>
            <td class="s0">
              Main Hydraulic Pump #6 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2317</td>
            <td class="s0">
              Main Hydraulic Pump #7 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2318</td>
            <td class="s0">
              Main Hydraulic Pump #8 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2319</td>
            <td class="s0">
              Left Implement Pump Oil Supply Shutoff Valve Closed With Pump
              Running
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">232</td>
            <td class="s0">High Fuel/Water Separator Water Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2320</td>
            <td class="s0">High PTO (Power Takeoff) #1 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2321</td>
            <td class="s0">High PTO (Power Takeoff) #2 Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2322</td>
            <td class="s0">Low PTO (Power Takeoff) #1 Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2323</td>
            <td class="s0">Low PTO (Power Takeoff) #2 Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2324</td>
            <td class="s0">Low PTO (Power Takeoff) #1 Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2325</td>
            <td class="s0">Low PTO (Power Takeoff) #2 Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2326</td>
            <td class="s0">High Swing Drive Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2327</td>
            <td class="s0">Low Swing Drive #1 Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2328</td>
            <td class="s0">Low Swing Drive #2 Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2329</td>
            <td class="s0">Low Swing Drive #3 Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">233</td>
            <td class="s0">Low Engine Pre-Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2330</td>
            <td class="s0">Low Swing Drive #4 Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2331</td>
            <td class="s0">Swing Drive #1 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2332</td>
            <td class="s0">Swing Drive #2 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2333</td>
            <td class="s0">Swing Drive #3 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2334</td>
            <td class="s0">Swing Drive #4 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2335</td>
            <td class="s0">High Swing Pump #1 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2336</td>
            <td class="s0">High Swing Pump #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2337</td>
            <td class="s0">High Swing Pump #3 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2338</td>
            <td class="s0">High Swing Pump #4 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2339</td>
            <td class="s0">Swing Pump #1 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">234</td>
            <td class="s0">Low Auto Lube Grease Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2340</td>
            <td class="s0">Swing Pump #2 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2341</td>
            <td class="s0">Swing Pump #3 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2342</td>
            <td class="s0">Swing Pump #4 Metal Contamination Present</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2343</td>
            <td class="s0">Service Station Lowered</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2344</td>
            <td class="s0">Park Brake Engaged While Shift Lever Not in Park</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2345</td>
            <td class="s0">Low Brake Accumulator #1 Precharge Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2346</td>
            <td class="s0">Low Brake Accumulator #2 Precharge Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2347</td>
            <td class="s0">Low Brake Accumulator #3 Precharge Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2348</td>
            <td class="s0">Low Brake Accumulator #4 Precharge Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2349</td>
            <td class="s0">Low Brake Accumulator #5 Precharge Gas Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">235</td>
            <td class="s0">Low Hydraulic Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2350</td>
            <td class="s0">Brake Master Cylinder Overstroked</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2351</td>
            <td class="s0">Roof Bolter Not Stowed When Not Roof Bolting</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2352</td>
            <td class="s0">Mesh Handler Not Stowed When Not Mesh Handling</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2353</td>
            <td class="s0">Dedusting Fan System Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2354</td>
            <td class="s0">Dedusting Fan System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2355</td>
            <td class="s0">Dust Suppression Spray Not Active During Cutting</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2356</td>
            <td class="s0">
              Operation Inhibited Due to Machine Supply Water Flow Not Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2357</td>
            <td class="s0">Cutter Clutch Slip Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2358</td>
            <td class="s0">Machine Remote Control Signal Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2359</td>
            <td class="s0">Machine Remote Control Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">236</td>
            <td class="s0">Return Hydraulic Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2360</td>
            <td class="s0">
              Machine Remote Control Fire Suppression System Commanded
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2361</td>
            <td class="s0">Auto Cutting Shutdown Due to Operator Inactivity</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2362</td>
            <td class="s0">Cutting Inhibited Due to Stabilizer Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2363</td>
            <td class="s0">Travel Inhibited Due to Stabilizer Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2364</td>
            <td class="s0">Cutting Inhibited Due to Cutter Boom Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2365</td>
            <td class="s0">Cutting Inhibited Due to Machine Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2366</td>
            <td class="s0">Cutting Inhibited Due to Gathering Head Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2367</td>
            <td class="s0">Travel Inhibited Due to Loading Shield Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2368</td>
            <td class="s0">
              Cutter Boom and Gathering Head Limited Due to Proximity
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2369</td>
            <td class="s0">
              Gathering Head and Front Stabilizer Limited Due to Proximity
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">237</td>
            <td class="s0">Machine Overloaded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2370</td>
            <td class="s0">Low Cutter Gearbox Pump #1 Suction Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2371</td>
            <td class="s0">Low Cutter Gearbox Pump #2 Suction Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2372</td>
            <td class="s0">Low Cutter Gearbox Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2373</td>
            <td class="s0">High Cutter Gearbox Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2374</td>
            <td class="s0">Cutter Gearbox Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2375</td>
            <td class="s0">Dedusting Fan System Not Active During Cutting</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2376</td>
            <td class="s0">Low Pivot Shaft Lube Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2377</td>
            <td class="s0">Access Ladder Lowered While Machine in Motion</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2378</td>
            <td class="s0">
              High Air Compressor Air Filter Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2379</td>
            <td class="s0">
              Trolley Cabinet Cooling Fan Speed Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">238</td>
            <td class="s0">Low Jacket Water Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2380</td>
            <td class="s0">Pantograph Failed to Lower</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2381</td>
            <td class="s0">Manual Gear Too High for Operating Conditions</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2382</td>
            <td class="s0">
              Low Secondary Steering Accumulator Precharge Gas Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2383</td>
            <td class="s0">
              Idle Elevated for Aftertreatment Thermal Management
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2384</td>
            <td class="s0">
              Aftertreatment #2 DEF Control Module Breaker Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2385</td>
            <td class="s0">Turbocharger Wastegate Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2386</td>
            <td class="s0">High Engine Turbocharger #1 Differential Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2387</td>
            <td class="s0">High Engine Turbocharger #2 Differential Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2388</td>
            <td class="s0">High Engine Turbocharger #3 Differential Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2389</td>
            <td class="s0">High Engine Turbocharger #4 Differential Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">239</td>
            <td class="s0">Left Rear Parking Brake Dragging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2390</td>
            <td class="s0">
              High Engine Turbocharger #1 Turbine Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2391</td>
            <td class="s0">
              High Engine Turbocharger #2 Turbine Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2392</td>
            <td class="s0">
              High Engine Turbocharger #3 Turbine Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2393</td>
            <td class="s0">
              High Engine Turbocharger #4 Turbine Outlet Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2394</td>
            <td class="s0">High Saw Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2395</td>
            <td class="s0">Low Air Conditioner Evaporator Coil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2396</td>
            <td class="s0">High Machine Cooling Fan Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2397</td>
            <td class="s0">Low Engine Turbocharger #1 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2398</td>
            <td class="s0">Low Engine Turbocharger #2 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2399</td>
            <td class="s0">Low Engine Turbocharger #3 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">24</td>
            <td class="s0">High Hydraulic Oil Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">240</td>
            <td class="s0">Right Rear Parking Brake Dragging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2400</td>
            <td class="s0">Low Engine Turbocharger #4 Efficiency</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2401</td>
            <td class="s0">High Service Brake Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2402</td>
            <td class="s0">High Port Inboard Transmission Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2403</td>
            <td class="s0">
              High Starboard Inboard Transmission Oil Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2404</td>
            <td class="s0">High Port Transmission Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2405</td>
            <td class="s0">High Starboard Transmission Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2406</td>
            <td class="s0">High Port Inboard Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2407</td>
            <td class="s0">Low Port Inboard Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2408</td>
            <td class="s0">High Port Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2409</td>
            <td class="s0">Low Port Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">241</td>
            <td class="s0">Abnormal Engine Fan System Operation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2410</td>
            <td class="s0">High Starboard Inboard Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2411</td>
            <td class="s0">Low Starboard Inboard Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2412</td>
            <td class="s0">High Starboard Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2413</td>
            <td class="s0">Low Starboard Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2414</td>
            <td class="s0">
              High Port Inboard Pod Steering Motor Internal Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2415</td>
            <td class="s0">
              Low Port Inboard Pod Steering Motor Internal Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2416</td>
            <td class="s0">
              High Port Pod Steering Motor Internal Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2417</td>
            <td class="s0">Low Port Pod Steering Motor Internal Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2418</td>
            <td class="s0">
              High Starboard Inboard Pod Steering Motor Internal Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2419</td>
            <td class="s0">
              Low Starboard Inboard Pod Steering Motor Internal Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">242</td>
            <td class="s0">Engine Overload</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2420</td>
            <td class="s0">
              High Starboard Pod Steering Motor Internal Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2421</td>
            <td class="s0">
              Low Starboard Pod Steering Motor Internal Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2422</td>
            <td class="s0">
              High Port Inboard Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2423</td>
            <td class="s0">
              Low Port Inboard Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2424</td>
            <td class="s0">
              High Port Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2425</td>
            <td class="s0">
              Low Port Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2426</td>
            <td class="s0">
              High Starboard Inboard Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2427</td>
            <td class="s0">
              Low Starboard Inboard Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2428</td>
            <td class="s0">
              High Starboard Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2429</td>
            <td class="s0">
              Low Starboard Pod Steering Motor Control Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">243</td>
            <td class="s0">High Left Turbo Turbine Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2430</td>
            <td class="s0">Hydrostatic Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2431</td>
            <td class="s0">Air Compressor Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2432</td>
            <td class="s0">Left Gathering Jammed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2433</td>
            <td class="s0">Right Gathering Jammed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2434</td>
            <td class="s0">Hook Free Fall Clutch Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2435</td>
            <td class="s0">High Generator Phase Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2436</td>
            <td class="s0">High Drive Motor Phase Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2437</td>
            <td class="s0">
              Generator Power Inverter Transistor Desaturation Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2438</td>
            <td class="s0">
              Drive Motor Power Inverter Transistor Desaturation Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2439</td>
            <td class="s0">
              Low Generator Power Inverter Transistor Gate Drive Power Supply
              Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">244</td>
            <td class="s0">High Right Turbo Turbine Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2440</td>
            <td class="s0">
              Low Drive Motor Power Inverter Transistor Gate Drive Power Supply
              Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2441</td>
            <td class="s0">
              Low Generator Power Inverter Main Power Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2442</td>
            <td class="s0">
              Low Drive Motor Power Inverter Main Power Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2443</td>
            <td class="s0">DC Bus Power Port Cannot be Enabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2444</td>
            <td class="s0">High DC Bus Power Port Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2445</td>
            <td class="s0">High DC Bus Power Port Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2446</td>
            <td class="s0">Power Inverter Revision Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2447</td>
            <td class="s0">Air Compressor Oil Separator Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2448</td>
            <td class="s0">High Air Compressor Interstage Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2449</td>
            <td class="s0">Air Compressor Air Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">245</td>
            <td class="s0">High Right Turbo Turbine Inlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2450</td>
            <td class="s0">Low Air Compressor Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2451</td>
            <td class="s0">Unexpected Drill Clockwise Rotation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2452</td>
            <td class="s0">Unexpected Drill Counterclockwise Rotation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2453</td>
            <td class="s0">Unexpected Drill Feed Retract Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2454</td>
            <td class="s0">Unexpected Drill Feed Extend Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2455</td>
            <td class="s0">Low Park Brake Disengage Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2456</td>
            <td class="s0">High Motor Power Inverter Transistor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2457</td>
            <td class="s0">
              High Generator Power Inverter Transistor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2458</td>
            <td class="s0">Cab Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2459</td>
            <td class="s0">Generator Rotor Position Unknown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">246</td>
            <td class="s0">High Left Turbo Turbine Inlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2460</td>
            <td class="s0">Drive Motor Rotor Position Unknown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2461</td>
            <td class="s0">Low Drive Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2462</td>
            <td class="s0">Low Drive Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2463</td>
            <td class="s0">Low Drive Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2464</td>
            <td class="s0">Low Generator Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2465</td>
            <td class="s0">Low Generator Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2466</td>
            <td class="s0">Low Generator Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2467</td>
            <td class="s0">
              Unexpected Spool Movement Detected with No Command Given While
              Steering System #1 Enabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2468</td>
            <td class="s0">
              Unexpected Spool Movement Detected with No Command Given While
              Steering System #2 Enabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2469</td>
            <td class="s0">
              Unexpected Spool Movement Detected From Steering System #1
              Commands While Steering System #2 Enabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">247</td>
            <td class="s0">Low Left Turbo Turbine Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2470</td>
            <td class="s0">
              Unexpected Spool Movement Detected From Steering System #2
              Commands While Steering System #1 Enabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2471</td>
            <td class="s0">
              Unexpected Spool Direction Detected for Steering System #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2472</td>
            <td class="s0">
              Unexpected Spool Direction Detected for Steering System #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2473</td>
            <td class="s0">Excessive Spool Movement for Steering System #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2474</td>
            <td class="s0">Excessive Spool Movement for Steering System #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2475</td>
            <td class="s0">
              Insufficient Spool Movement for Steering System #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2476</td>
            <td class="s0">
              Insufficient Spool Movement for Steering System #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2477</td>
            <td class="s0">High Engine Exhaust #1 O2 Concentration</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2478</td>
            <td class="s0">High Engine Exhaust #2 O2 Concentration</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2479</td>
            <td class="s0">
              Steering System Functional Test Maximum Time Exceeded
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">248</td>
            <td class="s0">Low Right Turbo Turbine Outlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2480</td>
            <td class="s0">Left Service Brake Pedal Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2481</td>
            <td class="s0">Right Service Brake Pedal Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2482</td>
            <td class="s0">High Cutter Motor Rectifier Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2483</td>
            <td class="s0">High Cutter Motor Rectifier Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2484</td>
            <td class="s0">High Cutter Motor Rectifier Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2485</td>
            <td class="s0">Cutter Motor Contactor Stuck Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2486</td>
            <td class="s0">Cutter Motor Contactor Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2487</td>
            <td class="s0">Cutter Motor System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2488</td>
            <td class="s0">Cutter Breaker Tripped</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2489</td>
            <td class="s0">High Cutter Motor Supply Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">249</td>
            <td class="s0">Low Right Turbo Turbine Inlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2490</td>
            <td class="s0">Low Cutter Motor Supply Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2491</td>
            <td class="s0">Cutter Motor Speed Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2492</td>
            <td class="s0">High Right Conveyor Motor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2493</td>
            <td class="s0">High Left Conveyor Motor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2494</td>
            <td class="s0">High Rear Conveyor Motor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2495</td>
            <td class="s0">Cutter Motor Pre-Charge Contactor Stuck Closed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2496</td>
            <td class="s0">Cutter Motor Pre-Charge Contactor Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2497</td>
            <td class="s0">
              Cutter Motor Pre-Charge Circuit Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2498</td>
            <td class="s0">
              Machine Working Automatic Service Brake Failure to Engage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2499</td>
            <td class="s0">Drive Motor Winding Temperature Signals Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">25</td>
            <td class="s0">High Inlet Air Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">250</td>
            <td class="s0">Low Left Turbo Turbine Inlet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2500</td>
            <td class="s0">Main Breaker Tripped</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2501</td>
            <td class="s0">Machine Supply Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2502</td>
            <td class="s0">Cutter Motor Supply Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2503</td>
            <td class="s0">Transformer Secondary Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2504</td>
            <td class="s0">
              High Motor Control Center DC Power Supply #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2505</td>
            <td class="s0">Left Hydraulic Pump Motor System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2506</td>
            <td class="s0">Right Hydraulic Pump Motor System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2507</td>
            <td class="s0">Left Conveyor Motor System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2508</td>
            <td class="s0">Right Conveyor Motor System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2509</td>
            <td class="s0">Rear Conveyor Motor System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">251</td>
            <td class="s0">High Raw Water Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2510</td>
            <td class="s0">Motor Control Center System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2511</td>
            <td class="s0">Low Water Tank Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2512</td>
            <td class="s0">
              Low Aftertreatment #1 Diesel Oxidation Catalyst #1 Outlet Gas
              Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2513</td>
            <td class="s0">High Engine Coolant Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2514</td>
            <td class="s0">
              High Aftertreatment #1 Hydrocarbon Doser Intake Fuel Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2515</td>
            <td class="s0">
              Low Aftertreatment #1 Hydrocarbon Doser Intake Fuel Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2516</td>
            <td class="s0">Low Tool Oil Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2517</td>
            <td class="s0">
              High Engine Variable Geometry Turbocharger Actuator Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2518</td>
            <td class="s0">Low Secondary Steering Pilot Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2519</td>
            <td class="s0">
              High Auto Lube Pressure During Line #1 Lubrication
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">252</td>
            <td class="s0">Loss of Key Table Information</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2520</td>
            <td class="s0">
              High Auto Lube Pressure During Line #2 Lubrication
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2521</td>
            <td class="s0">
              Low Auto Lube Pressure During Line #1 Lubrication
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2522</td>
            <td class="s0">
              Low Auto Lube Pressure During Line #2 Lubrication
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2523</td>
            <td class="s0">
              PTO (Power Takeoff) #1 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2524</td>
            <td class="s0">
              PTO (Power Takeoff) #2 Metal Contamination Present
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2525</td>
            <td class="s0">
              High Air Conditioner #1 Compressor Discharge Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2526</td>
            <td class="s0">
              High Air Conditioner #2 Compressor Discharge Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2527</td>
            <td class="s0">
              Low Air Conditioner #1 Compressor Suction Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2528</td>
            <td class="s0">
              Low Air Conditioner #2 Compressor Suction Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2529</td>
            <td class="s0">
              Auto Lube Distributor Injector Position #1 Not Responding to
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">253</td>
            <td class="s0">Detonation Derate Requested</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2530</td>
            <td class="s0">
              Auto Lube Distributor Injector Position #2 Not Responding to
              Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2531</td>
            <td class="s0">Engine Torque Limiting Clutch Slip Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2532</td>
            <td class="s0">
              Unexpected Hydraulic Valve Bank Spool Centered Pressure Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2533</td>
            <td class="s0">Low Left Center Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2534</td>
            <td class="s0">Low Right Center Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2535</td>
            <td class="s0">High Left Center Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2536</td>
            <td class="s0">High Right Center Tire Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2537</td>
            <td class="s0">High Left Center Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2538</td>
            <td class="s0">High Right Center Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2539</td>
            <td class="s0">High Return Hydraulic Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">254</td>
            <td class="s0">No Detonation Derate Action Taken</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2540</td>
            <td class="s0">Implement Cooling Return Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2541</td>
            <td class="s0">Steering Cooling Return Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2542</td>
            <td class="s0">High Swing Left Pilot Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2543</td>
            <td class="s0">High Swing Right Pilot Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2544</td>
            <td class="s0">
              Secondary Steering Pump #1 Pressure Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2545</td>
            <td class="s0">
              Secondary Steering Pump #2 Pressure Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2546</td>
            <td class="s0">ECU #3 Interface Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2547</td>
            <td class="s0">Engine Oil Quality Out of Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2548</td>
            <td class="s0">Transmission Oil Quality Out of Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2549</td>
            <td class="s0">Hydraulic Oil Quality Out of Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">255</td>
            <td class="s0">Diagnostic Reset</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2550</td>
            <td class="s0">
              Left Low Beam Headlight Not Responding to On Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2551</td>
            <td class="s0">
              Right Low Beam Headlight Not Responding to On Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2552</td>
            <td class="s0">
              Left High Beam Headlight Not Responding to On Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2553</td>
            <td class="s0">
              Right High Beam Headlight Not Responding to On Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2554</td>
            <td class="s0">
              Left Clearance/Turn Signal Light Not Responding to On Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2555</td>
            <td class="s0">
              Right Clearance/Turn Signal Light Not Responding to On Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2556</td>
            <td class="s0">Horn Not Responding to On Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2557</td>
            <td class="s0">
              Aftertreatment #1 DEF Pump Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2558</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #1 Suction Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2559</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #2 Suction Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">256</td>
            <td class="s0">Steering Output Detected in Wrong Direction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2560</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #3 Suction Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2561</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #4 Suction Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2562</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #5 Suction Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2563</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #1 Discharge Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2564</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #2 Discharge Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2565</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #3 Discharge Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2566</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #4 Discharge Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2567</td>
            <td class="s0">
              Well Stimulation Pump Fluid End Cylinder #5 Discharge Valve Leak
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2568</td>
            <td class="s0">High Rotor Drivetrain Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2569</td>
            <td class="s0">Transmission Clutch Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">257</td>
            <td class="s0">Steering Output Detected with No Command Given</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2570</td>
            <td class="s0">Drive Motor #2 Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2571</td>
            <td class="s0">
              High Aftertreatment #1 Diesel Oxidation Catalyst #1 Outlet Gas
              Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2572</td>
            <td class="s0">High Machine Cooling Fan #1 Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2573</td>
            <td class="s0">High Machine Cooling Fan #2 Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2574</td>
            <td class="s0">High Machine Cooling Fan #3 Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2575</td>
            <td class="s0">High Machine Cooling Fan #4 Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2576</td>
            <td class="s0">High Left Drive Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2577</td>
            <td class="s0">High Right Drive Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2578</td>
            <td class="s0">High Left Drive Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2579</td>
            <td class="s0">High Left Drive Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">258</td>
            <td class="s0">No steering detected with command given</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2580</td>
            <td class="s0">High Left Drive Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2581</td>
            <td class="s0">High Right Drive Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2582</td>
            <td class="s0">High Right Drive Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2583</td>
            <td class="s0">High Right Drive Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2584</td>
            <td class="s0">Low Left Drive Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2585</td>
            <td class="s0">Low Left Drive Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2586</td>
            <td class="s0">Low Left Drive Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2587</td>
            <td class="s0">Low Right Drive Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2588</td>
            <td class="s0">Low Right Drive Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2589</td>
            <td class="s0">Low Right Drive Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">259</td>
            <td class="s0">Excessive steering system command Error</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2590</td>
            <td class="s0">Left Drive Motor Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2591</td>
            <td class="s0">Right Drive Motor Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2592</td>
            <td class="s0">Left Drive Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2593</td>
            <td class="s0">Right Drive Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2594</td>
            <td class="s0">High Left Drive Motor Phase Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2595</td>
            <td class="s0">High Right Drive Motor Phase Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2596</td>
            <td class="s0">High Pump Motor Phase Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2597</td>
            <td class="s0">High Pump Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2598</td>
            <td class="s0">High Pump Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2599</td>
            <td class="s0">High Pump Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">26</td>
            <td class="s0">High Inlet Air Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">260</td>
            <td class="s0">High Boom Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2600</td>
            <td class="s0">Low Pump Motor Phase Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2601</td>
            <td class="s0">Low Pump Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2602</td>
            <td class="s0">Low Pump Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2603</td>
            <td class="s0">Low Pump Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2604</td>
            <td class="s0">Pump Motor Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2605</td>
            <td class="s0">
              Pump Motor Inverter Transistor Desaturation Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2606</td>
            <td class="s0">
              Low Pump Motor Power Inverter Transistor Gate Drive Power Supply
              Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2607</td>
            <td class="s0">
              Low Pump Motor Power Inverter Main Power Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2608</td>
            <td class="s0">Pump Motor Rotor Position Unknown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2609</td>
            <td class="s0">
              Left Drive Motor Inverter Transistor Desaturation Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">261</td>
            <td class="s0">High Quick Coupler Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2610</td>
            <td class="s0">
              Right Drive Motor Inverter Transistor Desaturation Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2611</td>
            <td class="s0">
              Low Left Drive Motor Power Inverter Transistor Gate Drive Power
              Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2612</td>
            <td class="s0">
              Low Right Drive Motor Power Inverter Transistor Gate Drive Power
              Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2613</td>
            <td class="s0">
              Low Left Drive Motor Power Inverter Main Power Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2614</td>
            <td class="s0">
              Low Right Drive Motor Power Inverter Main Power Supply Voltage
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2615</td>
            <td class="s0">Left Drive Motor Rotor Position Unknown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2616</td>
            <td class="s0">Right Drive Motor Rotor Position Unknown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2617</td>
            <td class="s0">Low Rotor Drivetrain Oil Pump Outlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2618</td>
            <td class="s0">High Rotor Drivetrain Oil Pump Outlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2619</td>
            <td class="s0">Low Turbocharger #5 Compressor Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">262</td>
            <td class="s0">Low Quick Coupler Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2620</td>
            <td class="s0">Low Turbocharger #6 Compressor Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2621</td>
            <td class="s0">Turbocharger #5 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2622</td>
            <td class="s0">Turbocharger #6 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2623</td>
            <td class="s0">
              High Left Drive Motor Power Inverter Transistor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2624</td>
            <td class="s0">
              High Right Drive Motor Power Inverter Transistor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2625</td>
            <td class="s0">
              High Pump Motor Power Inverter Transistor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2626</td>
            <td class="s0">High Machine Speed While in Winch Freespool Mode</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2627</td>
            <td class="s0">
              High Machine Speed While in Winch Drive Away Mode
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2628</td>
            <td class="s0">High Ether Actuation Attempts</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2629</td>
            <td class="s0">
              Leg Swing Inhibited Due to Operator Station Slid Out
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">263</td>
            <td class="s0">Low Main Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2630</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #1 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2631</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #2 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2632</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #3 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2633</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #4 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2634</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #5 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2635</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #6 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2636</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #7 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2637</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #8 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2638</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #9 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2639</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #10 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">264</td>
            <td class="s0">Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2640</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #11 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2641</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #12 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2642</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #13 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2643</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #14 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2644</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #15 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2645</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #16 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2646</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #17 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2647</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #18 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2648</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #19 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2649</td>
            <td class="s0">
              Engine Gaseous Fuel Valve #20 Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">265</td>
            <td class="s0">User Defined Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2650</td>
            <td class="s0">High Left Service Brake Plate Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2651</td>
            <td class="s0">High Right Service Brake Plate Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2652</td>
            <td class="s0">High Powertrain Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2653</td>
            <td class="s0">Port Engine Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2654</td>
            <td class="s0">Starboard Engine Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2655</td>
            <td class="s0">Port Transmission Gear Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2656</td>
            <td class="s0">Starboard Transmission Gear Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2657</td>
            <td class="s0">Low Supply Brake Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2658</td>
            <td class="s0">
              Low Aftertreatment #1 Intake NOx Sensor Protection Air Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2659</td>
            <td class="s0">
              Low Aftertreatment #1 Outlet NOx Sensor Protection Air Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">266</td>
            <td class="s0">Low Hydrax Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2660</td>
            <td class="s0">Incorrect Fuel Type</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2661</td>
            <td class="s0">Object Detection Rear Camera Blockage Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2662</td>
            <td class="s0">
              Object Detection Left Side Camera Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2663</td>
            <td class="s0">Object Detection Front Camera Blockage Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">2664</td>
            <td class="s0">
              Object Detection Right Side Camera Blockage Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">267</td>
            <td class="s0">High Gas Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">268</td>
            <td class="s0">Unexpected Engine Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">269</td>
            <td class="s0">Customer Shutdown Requested</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">27</td>
            <td class="s0">High Inlet Air Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">270</td>
            <td class="s0">Driven Equipment Shutdown Requested</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">271</td>
            <td class="s0">User Defined Switch Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">272</td>
            <td class="s0">Inlet Air Restriction Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">273</td>
            <td class="s0">Machine operation attempted using an invalid key</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">274</td>
            <td class="s0">Security override used</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">275</td>
            <td class="s0">Engine #2 (Slave) Not Running</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">276</td>
            <td class="s0">
              Engine #2 (Slave) Runing with Engine #1 (Master) Not Running
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">277</td>
            <td class="s0">Engine-to-Engine Power Balance Not Achieved</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">278</td>
            <td class="s0">High Exhaust Differential Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">279</td>
            <td class="s0">High Aftercooler Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">28</td>
            <td class="s0">High Transmission Oil Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">280</td>
            <td class="s0">Engine Control Switch (ECS) Not in Automatic</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">281</td>
            <td class="s0">Steering Hydraulic Oil Filter Restricted</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">282</td>
            <td class="s0">Implement Hydraulic Oil Filter Restricted</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">283</td>
            <td class="s0">Low Hydraulic Charge Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">284</td>
            <td class="s0">Low Brake Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">285</td>
            <td class="s0">Low Left Track Tension Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">286</td>
            <td class="s0">Low Right Track Tension Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">287</td>
            <td class="s0">High Left Track Tension Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">288</td>
            <td class="s0">High Right Track Tension Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">289</td>
            <td class="s0">Low System Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">29</td>
            <td class="s0">High Transmission Oil Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">290</td>
            <td class="s0">High System Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">291</td>
            <td class="s0">Shifted into Park at High Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">292</td>
            <td class="s0">Rear Power Take Off (PTO) Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">293</td>
            <td class="s0">Low Steering Oil Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">294</td>
            <td class="s0">Impending Brake Application</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">295</td>
            <td class="s0">Plugged Auger Filter</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">296</td>
            <td class="s0">Implement Controls Not in Neutral Position</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">297</td>
            <td class="s0">Blade Float Hydraulic System Failure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">298</td>
            <td class="s0">Work Lights On With Key Switch Off</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">299</td>
            <td class="s0">Road Lights On With Key Switch Off</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3</td>
            <td class="s0">Engine Overspeed Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">30</td>
            <td class="s0">High Transmission Oil Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">300</td>
            <td class="s0">Machine Operated with Auto Lube Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3000</td>
            <td class="s0">Propulsion System Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3001</td>
            <td class="s0">High Propulsion System Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3002</td>
            <td class="s0">No Retard / No Propel Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3003</td>
            <td class="s0">No Propel Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3004</td>
            <td class="s0">Drive System Reduced Propulsion</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3005</td>
            <td class="s0">Dynamic Retarder Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3006</td>
            <td class="s0">
              AC Drive System Not Responding to Energize Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3007</td>
            <td class="s0">
              AC Drive System Not Responding to Deenergize Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3008</td>
            <td class="s0">Engine Shutdown Requested</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3009</td>
            <td class="s0">High Vehicle Interface Cabinet Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">301</td>
            <td class="s0">Cylinder #1 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3010</td>
            <td class="s0">System/Component Failure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3011</td>
            <td class="s0">Maintenance Monitor Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3012</td>
            <td class="s0">Proximity Detection System Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3013</td>
            <td class="s0">Low Brake System Backup Battery Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3014</td>
            <td class="s0">Brake System Backup Battery Capacity Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3015</td>
            <td class="s0">Fire Suppression System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">302</td>
            <td class="s0">Cylinder #2 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">303</td>
            <td class="s0">Cylinder #3 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">304</td>
            <td class="s0">Cylinder #4 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">305</td>
            <td class="s0">Cylinder #5 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">306</td>
            <td class="s0">Cylinder #6 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">307</td>
            <td class="s0">Cylinder #7 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">308</td>
            <td class="s0">Cylinder #8 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">309</td>
            <td class="s0">Cylinder #9 Gas Admission Valve (GAV) Stuck Open</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">31</td>
            <td class="s0">Inlet Air Restriction Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">310</td>
            <td class="s0">
              Cylinder #10 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">311</td>
            <td class="s0">
              Cylinder #11 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">312</td>
            <td class="s0">
              Cylinder #12 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">313</td>
            <td class="s0">
              Cylinder #13 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">314</td>
            <td class="s0">
              Cylinder #14 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">315</td>
            <td class="s0">
              Cylinder #15 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">316</td>
            <td class="s0">
              Cylinder #16 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">317</td>
            <td class="s0">
              Cylinder #17 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">318</td>
            <td class="s0">
              Cylinder #18 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">319</td>
            <td class="s0">
              Cylinder #19 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">32</td>
            <td class="s0">Inlet Air Restriction Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">320</td>
            <td class="s0">
              Cylinder #20 Gas Admission Valve (GAV) Stuck Open
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">321</td>
            <td class="s0">High Right Exhaust Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">322</td>
            <td class="s0">High Left Exhaust Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">323</td>
            <td class="s0">Low Left Exhaust Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">324</td>
            <td class="s0">Low Right Exhaust Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">325</td>
            <td class="s0">High Exhaust Stack Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">326</td>
            <td class="s0">Low Transmission Latching Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">327</td>
            <td class="s0">Low Output Transfer Gear &lt;(OTG)&gt; Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">328</td>
            <td class="s0">
              Output Transfer Gear &lt;(OTG)&gt; Filter Plugged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3287</td>
            <td class="s0">High Left Final Drive Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">3288</td>
            <td class="s0">High Right Final Drive Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">329</td>
            <td class="s0">Transmission Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">33</td>
            <td class="s0">Loss of Coolant Flow Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">330</td>
            <td class="s0">Transmission Output Speed Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">331</td>
            <td class="s0">Manual Transmission Override Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">332</td>
            <td class="s0">Excess Water in the intake air manifold</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">333</td>
            <td class="s0">High Auto Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">334</td>
            <td class="s0">Low Auto Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">335</td>
            <td class="s0">Low Swing Brake Pilot Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">336</td>
            <td class="s0">Low Travel Brake Pilot Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">337</td>
            <td class="s0">
              High Engine Oil to Engine Coolant Differential Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">338</td>
            <td class="s0">Swing Requested with Swing Brake On</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">339</td>
            <td class="s0">Travel Requested with Travel Brake On</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">34</td>
            <td class="s0">Loss of Coolant Flow Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">340</td>
            <td class="s0">
              Implement Lever Movement aborted the autodig cycle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">341</td>
            <td class="s0">
              Low lift cylinder pressure aborted the autodig cycle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">342</td>
            <td class="s0">
              Low Torque converter output torque aborted autodig cycle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">343</td>
            <td class="s0">High Ground Speed aborted the autodig cycle</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">344</td>
            <td class="s0">Maximum autodig cycle time exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">345</td>
            <td class="s0">
              Lift Function Lever not in hold position on startup
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">346</td>
            <td class="s0">
              Tilt Function Lever not in hold position on startup
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">347</td>
            <td class="s0">
              3rd Function Lever not in hold position on startup
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">348</td>
            <td class="s0">
              4th Function Lever not in hold position on startup
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">349</td>
            <td class="s0">
              Lift linkage movement detected with no command given
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">35</td>
            <td class="s0">Loss of Coolant Flow Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">350</td>
            <td class="s0">
              Tilt linkage movement detected with no command given
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">351</td>
            <td class="s0">
              Lift linkage movement detected in wrong direction
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">352</td>
            <td class="s0">
              Tilt linkage movement detected in wrong direction
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">353</td>
            <td class="s0">Machine Configuration Changed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">354</td>
            <td class="s0">Low Fan Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">355</td>
            <td class="s0">High Left Turbine Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">356</td>
            <td class="s0">High Inlet Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">357</td>
            <td class="s0">Low Inlet Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">358</td>
            <td class="s0">Engine Underspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">359</td>
            <td class="s0">Maximum Blade Tilt Position Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">36</td>
            <td class="s0">Low Coolant Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">360</td>
            <td class="s0">Low Engine Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">361</td>
            <td class="s0">High Engine Coolant Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">362</td>
            <td class="s0">Engine Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">363</td>
            <td class="s0">High Fuel Supply Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">364</td>
            <td class="s0">Low Prechamber Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">365</td>
            <td class="s0">High Prechamber Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">366</td>
            <td class="s0">Low Main Chamber Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">367</td>
            <td class="s0">High Main Chamber Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">368</td>
            <td class="s0">High Inlet Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">369</td>
            <td class="s0">Engine Stall Condition</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">37</td>
            <td class="s0">Low Coolant Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">370</td>
            <td class="s0">
              Screed Material Height Sensor Changed during Operation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">371</td>
            <td class="s0">
              Operator Station Selection Changed while Machine in Motion
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">372</td>
            <td class="s0">Machine Operating in Open Loop</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">373</td>
            <td class="s0">Machine Not Stopped in Allotted Time</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">374</td>
            <td class="s0">Feeder Switches in Manual Position at Start Up</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">375</td>
            <td class="s0">Prohibited Maneuver</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">376</td>
            <td class="s0">Gear Change with Propel Lever Not in Neutral</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">377</td>
            <td class="s0">250 Hour Maintenance Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">378</td>
            <td class="s0">500 Hour Maintenance Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">379</td>
            <td class="s0">1000 Hour Maintenance Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">38</td>
            <td class="s0">Low Coolant Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">380</td>
            <td class="s0">2000 Hour Maintenance Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">381</td>
            <td class="s0">3000 Hour Maintenance Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">382</td>
            <td class="s0">6000 Hour Maintenance Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">383</td>
            <td class="s0">User Defined Maintenance Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">384</td>
            <td class="s0">Left Air Inlet Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">385</td>
            <td class="s0">Right Air Inlet Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">386</td>
            <td class="s0">Low Engine Coolant or Engine Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">387</td>
            <td class="s0">Excessive Track Slip</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">388</td>
            <td class="s0">Access Platform Not Compatible</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">389</td>
            <td class="s0">Plugged Elevator Oil Filter</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">39</td>
            <td class="s0">Low Engine Oil Pressure Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">390</td>
            <td class="s0">Fuel Filter Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">391</td>
            <td class="s0">Inlet Air Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">392</td>
            <td class="s0">Downshift Suspended</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">393</td>
            <td class="s0">High Inlet #2 Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">394</td>
            <td class="s0">High Boost Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">395</td>
            <td class="s0">Transmission Stall Condition</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">396</td>
            <td class="s0">High Fuel Rail Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">397</td>
            <td class="s0">High Fuel Rail #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">398</td>
            <td class="s0">Low Fuel Rail Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">399</td>
            <td class="s0">Low Fuel Rail #2 Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">4</td>
            <td class="s0">Engine Overspeed Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">40</td>
            <td class="s0">Low Engine Oil Pressure Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">400</td>
            <td class="s0">Ground Speed Too High for Park Brake Engagement</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">401</td>
            <td class="s0">Cylinder #1 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">402</td>
            <td class="s0">Cylinder #2 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">403</td>
            <td class="s0">Cylinder #3 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">404</td>
            <td class="s0">Cylinder #4 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">405</td>
            <td class="s0">Cylinder #5 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">406</td>
            <td class="s0">Cylinder #6 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">407</td>
            <td class="s0">Cylinder #7 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">408</td>
            <td class="s0">Cylinder #8 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">409</td>
            <td class="s0">Cylinder #9 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">41</td>
            <td class="s0">Low System Voltage Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">410</td>
            <td class="s0">Cylinder #10 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">411</td>
            <td class="s0">Cylinder #11 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">412</td>
            <td class="s0">Cylinder #12 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">413</td>
            <td class="s0">Cylinder #13 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">414</td>
            <td class="s0">Cylinder #14 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">415</td>
            <td class="s0">Cylinder #15 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">416</td>
            <td class="s0">Cylinder #16 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">417</td>
            <td class="s0">Cylinder #17 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">418</td>
            <td class="s0">Cylinder #18 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">419</td>
            <td class="s0">Cylinder #19 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">42</td>
            <td class="s0">Low System Voltage Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">420</td>
            <td class="s0">Cylinder #20 Detonation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">421</td>
            <td class="s0">Cylinder #1 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">422</td>
            <td class="s0">Cylinder #2 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">423</td>
            <td class="s0">Cylinder #3 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">424</td>
            <td class="s0">Cylinder #4 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">425</td>
            <td class="s0">Cylinder #5 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">426</td>
            <td class="s0">Cylinder #6 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">427</td>
            <td class="s0">Cylinder #7 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">428</td>
            <td class="s0">Cylinder #8 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">429</td>
            <td class="s0">Cylinder #9 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">43</td>
            <td class="s0">Low System Voltage Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">430</td>
            <td class="s0">Cylinder #10 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">431</td>
            <td class="s0">Cylinder #11 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">432</td>
            <td class="s0">Cylinder #12 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">433</td>
            <td class="s0">Cylinder #13 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">434</td>
            <td class="s0">Cylinder #14 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">435</td>
            <td class="s0">Cylinder #15 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">436</td>
            <td class="s0">Cylinder #16 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">437</td>
            <td class="s0">Cylinder #17 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">438</td>
            <td class="s0">Cylinder #18 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">439</td>
            <td class="s0">Cylinder #19 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">44</td>
            <td class="s0">Low Transmission Oil Pressure Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">440</td>
            <td class="s0">Cylinder #20 Detonation Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">441</td>
            <td class="s0">Idle Elevated to Increase Battery Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">442</td>
            <td class="s0">Engine Failed to Stop with No Fuel Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">443</td>
            <td class="s0">High Auxiliary Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">444</td>
            <td class="s0">Low Auxiliary Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">445</td>
            <td class="s0">High Auxiliary Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">446</td>
            <td class="s0">Low Auxiliary Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">447</td>
            <td class="s0">Park Brake Not Engaged With No Operator In Seat</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">448</td>
            <td class="s0">PTO Is Engaged With No Operator In Seat</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">449</td>
            <td class="s0">
              Implement Not in Hold State With No Operator In Seat
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">45</td>
            <td class="s0">Low Transmission Oil Pressure Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">450</td>
            <td class="s0">PTO Not Engaged Because Hitch Not Centered</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">451</td>
            <td class="s0">
              PTO Engage Attempted With Remote Rear PTO Switch While Tractor Not
              In Park
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">452</td>
            <td class="s0">Excessive Inching Mode Operation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">453</td>
            <td class="s0">Desired Gear Prohibited for Machine Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">454</td>
            <td class="s0">Hydraulic Case Drain Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">455</td>
            <td class="s0">Hydraulic Pilot Supply Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">456</td>
            <td class="s0">Maintenance Due Soon</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">457</td>
            <td class="s0">Maintenance Past Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">458</td>
            <td class="s0">High Right Turbine Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">459</td>
            <td class="s0">Engine Rated Horsepower Output Changed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">46</td>
            <td class="s0">Low Transmission Oil Pressure Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">460</td>
            <td class="s0">Machine Tip Condition Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">461</td>
            <td class="s0">Ripper Autostow Timed Out</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">462</td>
            <td class="s0">Local GPS Receiver Internal Temperature High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">463</td>
            <td class="s0">
              Base (Remote) GPS Receiver Internal Temperature High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">464</td>
            <td class="s0">
              Inertial Measurement Unit Internal Temperature High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">465</td>
            <td class="s0">Unexpected Guidance System Deactivation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">466</td>
            <td class="s0">Feature Mismatch With ECM Swap</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">467</td>
            <td class="s0">
              Blade Lift Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">468</td>
            <td class="s0">
              Blade Tilt Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">469</td>
            <td class="s0">
              Blade Pitch Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">47</td>
            <td class="s0">Transmission Abuse Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">470</td>
            <td class="s0">
              Mode Select Switch Depressed At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">471</td>
            <td class="s0">
              Manual Select Switch Depressed At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">472</td>
            <td class="s0">
              Ripper In/Out Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">473</td>
            <td class="s0">
              Ripper Lift Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">474</td>
            <td class="s0">
              Ripper Autostow Switch Depressed At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">475</td>
            <td class="s0">
              Winch Spool In/Out Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">476</td>
            <td class="s0">
              Winch Drum Release Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">477</td>
            <td class="s0">Local GPS Receiver L1 Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">478</td>
            <td class="s0">Local GPS Receiver L2 Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">479</td>
            <td class="s0">Base (Remote) GPS Receiver L1 Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">48</td>
            <td class="s0">Backup ECM Took Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">480</td>
            <td class="s0">Base (Remote) GPS Receiver L2 Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">481</td>
            <td class="s0">DGPS Correction Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">482</td>
            <td class="s0">Unexpected Left Track Forward Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">483</td>
            <td class="s0">Unexpected Right Track Forward Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">484</td>
            <td class="s0">Unexpected Left Track Reverse Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">485</td>
            <td class="s0">Unexpected Right Track Reverse Movement Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">486</td>
            <td class="s0">Multiple Security System Master ECMs Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">487</td>
            <td class="s0">No Security System Master ECM Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">488</td>
            <td class="s0">Low Intake Valve Actuation Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">489</td>
            <td class="s0">Intake Valve Actuation Pressure System Failure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">49</td>
            <td class="s0">Coasting in Neutral Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">490</td>
            <td class="s0">
              Park Brake Applied While Shift Lever Not In Neutral
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">491</td>
            <td class="s0">Incorrect Number of Valve ECMs Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">492</td>
            <td class="s0">Low Engine Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">493</td>
            <td class="s0">Low Boost Pressure #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">494</td>
            <td class="s0">
              Speed Inappropriate for Automatic Guidance System Operation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">495</td>
            <td class="s0">
              Unexpected Guidance System Deactivation Due to GPS Hardware
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">496</td>
            <td class="s0">
              Unexpected Guidance System Deactivation Due to Inertial
              Measurement Sensor
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">497</td>
            <td class="s0">
              Unexpected Guidance System Deactivation Due to Steering System
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">498</td>
            <td class="s0">Fuel Pressure Present During Initial Cranking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">499</td>
            <td class="s0">Fuel Rail #1 Pressure Leak</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">5</td>
            <td class="s0">Fuel Filter Restriction Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">50</td>
            <td class="s0">High System Voltage Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">500</td>
            <td class="s0">Fuel Rail #2 Pressure Leak</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">501</td>
            <td class="s0">Cylinder #1 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">502</td>
            <td class="s0">Cylinder #2 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">503</td>
            <td class="s0">Cylinder #3 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">504</td>
            <td class="s0">Cylinder #4 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">505</td>
            <td class="s0">Cylinder #5 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">506</td>
            <td class="s0">Cylinder #6 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">507</td>
            <td class="s0">Cylinder #7 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">508</td>
            <td class="s0">Cylinder #8 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">509</td>
            <td class="s0">Cylinder #9 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">51</td>
            <td class="s0">Low Fuel Pressure Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">510</td>
            <td class="s0">Cylinder #10 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">511</td>
            <td class="s0">Cylinder #11 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">512</td>
            <td class="s0">Cylinder #12 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">513</td>
            <td class="s0">Cylinder #13 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">514</td>
            <td class="s0">Cylinder #14 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">515</td>
            <td class="s0">Cylinder #15 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">516</td>
            <td class="s0">Cylinder #16 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">517</td>
            <td class="s0">Cylinder #17 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">518</td>
            <td class="s0">Cylinder #18 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">519</td>
            <td class="s0">Cylinder #19 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">52</td>
            <td class="s0">Low Fuel Pressure Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">520</td>
            <td class="s0">Cylinder #20 Spark Plug Maintenance Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">521</td>
            <td class="s0">Autolube Pressure Not Decreasing After Cycle</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">522</td>
            <td class="s0">
              Blade Angle Control Not In Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">523</td>
            <td class="s0">
              Unable to Determine Rotation Direction of Left Drive Motor
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">524</td>
            <td class="s0">
              Unable to Determine Rotation Direction of Right Drive Motor
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">525</td>
            <td class="s0">High Brake Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">526</td>
            <td class="s0">Brake Pump Pressure Not Responding to Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">527</td>
            <td class="s0">High Brake Pump Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">528</td>
            <td class="s0">
              Service Brake Accumulator Pressure Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">529</td>
            <td class="s0">Operator High Engine Coolant Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">53</td>
            <td class="s0">Low Fuel Pressure Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">530</td>
            <td class="s0">Engine Oil Evacuation Occurred</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">531</td>
            <td class="s0">Low Transmission Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">532</td>
            <td class="s0">Service Brake Abuse While Gear Too High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">533</td>
            <td class="s0">
              Service Brake Abuse Due to Torque Converter Pedal Misuse
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">534</td>
            <td class="s0">Swing Movement Detected With No Command Given</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">535</td>
            <td class="s0">Boom Movement Detected With No Command Given</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">536</td>
            <td class="s0">Stick Movement Detected With No Command Given</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">537</td>
            <td class="s0">
              Extendable Stick Movement Detected With No Command Given
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">538</td>
            <td class="s0">Bucket Movement Detected With No Command Given</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">539</td>
            <td class="s0">High Intake Manifold Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">54</td>
            <td class="s0">High Fuel Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">540</td>
            <td class="s0">Low Engine Oil Refill Tank Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">541</td>
            <td class="s0">Low Steering Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">542</td>
            <td class="s0">Low Steering Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">543</td>
            <td class="s0">High Steering Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">544</td>
            <td class="s0">
              Blade Left Lift Lever Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">545</td>
            <td class="s0">
              Blade Right Lift Lever Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">546</td>
            <td class="s0">
              Articulation Lever Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">547</td>
            <td class="s0">
              Blade Sideshift Lever Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">548</td>
            <td class="s0">
              Circle Drive Lever Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">549</td>
            <td class="s0">
              Blade Pitch Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">55</td>
            <td class="s0">High Fuel Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">550</td>
            <td class="s0">
              Wheel Lean Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">551</td>
            <td class="s0">
              Circle Sideshift Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">552</td>
            <td class="s0">Low Aftercooler Coolant Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">553</td>
            <td class="s0">Low Tractor System Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">554</td>
            <td class="s0">Low Scraper System Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">555</td>
            <td class="s0">Low Pilot System Air Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">556</td>
            <td class="s0">Low Brake Pump Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">557</td>
            <td class="s0">Low Boost Pressure #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">558</td>
            <td class="s0">Snapshot Stored</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">559</td>
            <td class="s0">Event List Memory Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">56</td>
            <td class="s0">High Fuel Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">560</td>
            <td class="s0">
              Secondary Steering Pump Pressure Not Responding to Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">561</td>
            <td class="s0">Low Hydraulic Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">562</td>
            <td class="s0">
              Steering Lever Has Not Been Aligned To Wheel Steering Angle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">563</td>
            <td class="s0">Low Engine Coolant Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">564</td>
            <td class="s0">Transmission Slip Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">565</td>
            <td class="s0">
              Compression Brake Inhibited Due to Lockup Clutch Disengaged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">566</td>
            <td class="s0">
              Compression Brake Inhibited Due to Impeller Clutch Active
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">567</td>
            <td class="s0">
              Impeller Clutch Inhibited Due to Compression Brake Active
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">568</td>
            <td class="s0">Unexpected Left Motor Forward Speed Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">569</td>
            <td class="s0">Unexpected Left Motor Reverse Speed Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">57</td>
            <td class="s0">Low Engine Coolant Level Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">570</td>
            <td class="s0">Unexpected Right Motor Forward Speed Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">571</td>
            <td class="s0">Unexpected Right Motor Reverse Speed Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">572</td>
            <td class="s0">Brake Engaged Due to Cold Transmission Oil</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">573</td>
            <td class="s0">High Output Transfer Gear (OTG) Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">574</td>
            <td class="s0">Parking Brake Dragging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">575</td>
            <td class="s0">Unexpected Drive Motor Forward Speed Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">576</td>
            <td class="s0">Unexpected Drive Motor Rearward Speed Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">577</td>
            <td class="s0">
              Engine Ramp Rate Limited Due to Cold Hydraulic Oil
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">578</td>
            <td class="s0">Auxiliary System Requested Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">579</td>
            <td class="s0">
              5th Function Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">58</td>
            <td class="s0">Low Engine Coolant Level Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">580</td>
            <td class="s0">
              6th Function Control Out Of Neutral At Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">581</td>
            <td class="s0">Excessive Park Brake Wear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">582</td>
            <td class="s0">Low Differential (Axle) Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">583</td>
            <td class="s0">High Air Inlet #1 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">584</td>
            <td class="s0">High Air Inlet #2 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">585</td>
            <td class="s0">High Air Inlet #3 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">586</td>
            <td class="s0">High Air Inlet #4 Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">587</td>
            <td class="s0">Low Turbocharger #1 Compressor Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">588</td>
            <td class="s0">Low Turbocharger #2 Compressor Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">589</td>
            <td class="s0">Low Turbocharger #3 Compressor Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">59</td>
            <td class="s0">Low Engine Coolant Level Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">590</td>
            <td class="s0">Low Turbocharger #4 Compressor Inlet Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">591</td>
            <td class="s0">Transmission Front Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">592</td>
            <td class="s0">Transmission Rear Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">593</td>
            <td class="s0">
              Aftertreatment Insufficient Temperature to Complete Regeneration
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">594</td>
            <td class="s0">High Transmission Lube Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">595</td>
            <td class="s0">Case Drain Hydraulic Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">596</td>
            <td class="s0">Return Hydraulic Oil Filter #2 Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">597</td>
            <td class="s0">Unexpected Winch Motor Pressure Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">598</td>
            <td class="s0">Steering Limited Due to Cold Hydraulic Oil</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">599</td>
            <td class="s0">Gear Too High for Steering with Cold Oil</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">6</td>
            <td class="s0">Fuel Filter Restriction Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60</td>
            <td class="s0">Hydrocarbon Filter Change Due</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">600</td>
            <td class="s0">High Hydraulic Oil Temperature Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60000</td>
            <td class="s0">
              Hydraulic Operated Breakout Wrench (HOBO) Not Parked Interlock
              Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60001</td>
            <td class="s0">Ladder Not Stowed Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60002</td>
            <td class="s0">
              Machine Stability Limits Exceeded Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60003</td>
            <td class="s0">
              Drill Mast Not Locked or Stowed Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60004</td>
            <td class="s0">Pipe in Hole Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60005</td>
            <td class="s0">
              Rotary Head Not Above Carousel Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60006</td>
            <td class="s0">
              Hydraulic Operated Bit Basket (HOBB) Not Stowed Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60007</td>
            <td class="s0">Low Foam Tank Level Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60008</td>
            <td class="s0">Deck Wrench Not Stowed Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60009</td>
            <td class="s0">
              Pipe Positioner Aligned With Rotary Head Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60010</td>
            <td class="s0">
              Carousel Not Completely Engaged or Disengaged Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60011</td>
            <td class="s0">
              Pipe Retaining Safety Arm Not Engaged Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60012</td>
            <td class="s0">
              Carousel or Deck Wrench Engaged Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60013</td>
            <td class="s0">
              Rear Jacks Exceed Minimum Pressure Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60014</td>
            <td class="s0">Low Tool Oil Tank Level Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60015</td>
            <td class="s0">Winch Cable Not Retracted Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60016</td>
            <td class="s0">
              Drill Mast Locking Pins Not Retracted Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60017</td>
            <td class="s0">
              Machine Not Lifted and Leveled Interlock Override
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60018</td>
            <td class="s0">Stabilizers Not Fully Stowed Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60019</td>
            <td class="s0">Dust Curtain Not Raised Interlock Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60020</td>
            <td class="s0">Service Brake Misuse</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60021</td>
            <td class="s0">Emission Control System Operator Inducement</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60022</td>
            <td class="s0">Cab Seat Swivel Lock Not Engaged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60023</td>
            <td class="s0">Machine Shipping Mode Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60024</td>
            <td class="s0">Ground Level Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60025</td>
            <td class="s0">Platform Level Emergency Stop Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60026</td>
            <td class="s0">Load Interference with Bucket</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60027</td>
            <td class="s0">Boom Overextended in Crane Mode</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60028</td>
            <td class="s0">
              Engine Start Inhibited Due to Park Brake Not Engaged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60029</td>
            <td class="s0">
              Engine Start Inhibited Due to Gear Lever Not in Neutral
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60030</td>
            <td class="s0">
              Engine Start Inhibited Due to Hydraulic Lockout Switch Not Locked
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60031</td>
            <td class="s0">Engine Start Inhibited Due to Engine Cranking</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60032</td>
            <td class="s0">Engine Speed Limited Due to Cold Engine</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60033</td>
            <td class="s0">
              Unacceptable Operator Remote Control Console Orientation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60034</td>
            <td class="s0">Swing Brake Applied While Swinging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">601</td>
            <td class="s0">Cylinder #1 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">602</td>
            <td class="s0">Cylinder #2 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">603</td>
            <td class="s0">Cylinder #3 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">604</td>
            <td class="s0">Cylinder #4 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">605</td>
            <td class="s0">Cylinder #5 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">606</td>
            <td class="s0">Cylinder #6 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">607</td>
            <td class="s0">Cylinder #7 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">608</td>
            <td class="s0">Cylinder #8 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">609</td>
            <td class="s0">Cylinder #9 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">61</td>
            <td class="s0">Hydrocarbon Filter Change 100 Hours Overdue</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">610</td>
            <td class="s0">Cylinder #10 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">611</td>
            <td class="s0">Cylinder #11 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">612</td>
            <td class="s0">Cylinder #12 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">613</td>
            <td class="s0">Cylinder #13 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">614</td>
            <td class="s0">Cylinder #14 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">615</td>
            <td class="s0">Cylinder #15 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">616</td>
            <td class="s0">Cylinder #16 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">617</td>
            <td class="s0">Machine Lockout Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">618</td>
            <td class="s0">Park Brake Lockout Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">619</td>
            <td class="s0">Transmission Lockout Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">62</td>
            <td class="s0">Low Hydrocarbon Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">620</td>
            <td class="s0">Starter Lockout Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">621</td>
            <td class="s0">Body Up</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">622</td>
            <td class="s0">Hoist System Not In Float</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">623</td>
            <td class="s0">
              Low Left Track Forward &lt;Travel&gt; Steering Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">624</td>
            <td class="s0">
              Low Left Track Reverse &lt;Travel&gt; Steering Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">625</td>
            <td class="s0">
              Low Right Track Forward &lt;Travel&gt; Steering Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">626</td>
            <td class="s0">
              Low Right Track Reverse &lt;Travel&gt; Steering Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">627</td>
            <td class="s0">Parking Brake Applied With Machine In Motion</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">628</td>
            <td class="s0">Unrecognized User Command</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">629</td>
            <td class="s0">Harness Disconnect Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63</td>
            <td class="s0">Out of Hydrocarbon</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">630</td>
            <td class="s0">Switched Sensor #1 Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63000</td>
            <td class="s0">
              Machine Motion Inhibited Due to Park Brake Engaged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63001</td>
            <td class="s0">
              Implement Motion Inhibited Due to Implements Locked
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63002</td>
            <td class="s0">Auto Inhibited Due to Park Brake Engaged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63003</td>
            <td class="s0">Auto Inhibited Due to Implements Locked</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63004</td>
            <td class="s0">Auto Inhibited Due to Machine Not in Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63005</td>
            <td class="s0">Auto Inhibited Due to Requested Speed Incorrect</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63006</td>
            <td class="s0">Auto Inhibited Due to Requested Speed Too High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63007</td>
            <td class="s0">Auto Inhibited Due to Gear Not Forward</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63008</td>
            <td class="s0">Auto Inhibited Due to Engine Speed Out of Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63009</td>
            <td class="s0">
              Auto Inhibited Due to Controls Not in Neutral Position
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63010</td>
            <td class="s0">Auto Inhibited Due to Blade Float Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63011</td>
            <td class="s0">Auto Inhibited Due to GPS Signal Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63012</td>
            <td class="s0">Grade Control System Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63013</td>
            <td class="s0">
              Engine Speed Elevated Due to Transmission System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63014</td>
            <td class="s0">Low Fuel Tank #1 Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63015</td>
            <td class="s0">Low Fuel Tank #2 Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63016</td>
            <td class="s0">Bucket Lockout Pending</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63017</td>
            <td class="s0">Bucket Lockout Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63018</td>
            <td class="s0">Low Foam Injection Tank Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63019</td>
            <td class="s0">Low Tool Oil Tank Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63020</td>
            <td class="s0">Operator Station Avoidance Feature Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63021</td>
            <td class="s0">High Crane Load</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63022</td>
            <td class="s0">Crane Overload</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63023</td>
            <td class="s0">Crane Mode Inhibited Due to Bucket Not Racked</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63024</td>
            <td class="s0">Collision Avoidance Motion Inhibit Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63025</td>
            <td class="s0">Collision Avoidance Emergency Stop Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63026</td>
            <td class="s0">Collision Avoidance Controlled Stop Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63027</td>
            <td class="s0">
              Long Range Object Detection Sensor #1 Power Disabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63028</td>
            <td class="s0">Machine Derate Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63029</td>
            <td class="s0">Wireless Disable Switch Engaged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63030</td>
            <td class="s0">
              Operator Station Avoidance Function Disabled Due to System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63031</td>
            <td class="s0">
              Shovel Crane Function Disabled Due to System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63032</td>
            <td class="s0">Collision Avoidance Slow Down Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63033</td>
            <td class="s0">Collision Avoidance System Override Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63034</td>
            <td class="s0">Perception Coverage Lost</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63035</td>
            <td class="s0">Remote Disable Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63036</td>
            <td class="s0">Tamper Disable Active</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63037</td>
            <td class="s0">Tool Oil Injection Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63038</td>
            <td class="s0">Tip-Off Assist Disarmed Due to Time Out</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63039</td>
            <td class="s0">
              Tip-Off Assist Disarmed Due to Payload Not Achievable
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63040</td>
            <td class="s0">Tip-Off Assist Disarmed Due to Tilt Lever Racked</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63041</td>
            <td class="s0">
              Tip-Off Assist Disarmed Due to Not in Pile Tip-Off Mode
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63042</td>
            <td class="s0">
              Tip-Off Assist Disarmed Due to Truck Target Not Set
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63043</td>
            <td class="s0">
              Tip-Off Assist Disarmed Due to Tilt Lever Released
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63044</td>
            <td class="s0">Tip-Off Assist Disarmed Due to End of Travel</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63045</td>
            <td class="s0">Tip-Off Assist Armed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63046</td>
            <td class="s0">Tip-Off Assist Complete</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63047</td>
            <td class="s0">Body Height Limit Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63048</td>
            <td class="s0">Port Throttle Lever Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63049</td>
            <td class="s0">Starboard Throttle Lever Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63050</td>
            <td class="s0">Port Gear Lever Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63051</td>
            <td class="s0">Starboard Gear Lever Position Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63052</td>
            <td class="s0">Glow Plugs Active Wait to Start</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63053</td>
            <td class="s0">Rotor Gear Shift Inhibited Due to Rotor Drive On</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63054</td>
            <td class="s0">Rotor Drive Inhibited Due to Rotor Height Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">63074</td>
            <td class="s0">
              Operator seat belt unfastened while the hydraulics are not locked
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">631</td>
            <td class="s0">Switched Sensor #2 Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">632</td>
            <td class="s0">Switched Sensor #3 Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">633</td>
            <td class="s0">Switched Sensor #4 Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">636</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Secondary Air Differential
              Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">637</td>
            <td class="s0">
              High Aftertreatment Regeneration Device Secondary Air Differential
              Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">638</td>
            <td class="s0">
              Low Aftertreatment Regeneration Device Secondary Air Gas Mass Flow
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">639</td>
            <td class="s0">
              High Aftertreatment Regeneration Device Secondary Air Gas Mass
              Flow
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">64</td>
            <td class="s0">Low Hydrocarbon Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">640</td>
            <td class="s0">Water Spray Activation Time Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">64000</td>
            <td class="s0">Steering System Functional Test Bypassed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">64001</td>
            <td class="s0">Cutter Motor Stall Condition</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">64002</td>
            <td class="s0">Emergency Stop Cooldown Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">64003</td>
            <td class="s0">Aftertreatment DEF Doser Not Ready</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">64004</td>
            <td class="s0">
              Rotor Disengaged Due to Rotor Exposed with Machine in Reverse
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">641</td>
            <td class="s0">
              Vibratory System Manual Mode Time Exceeded While Machine
              Stationary
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">642</td>
            <td class="s0">Display Button Pressed Too Long</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">643</td>
            <td class="s0">Payload Control System Not Zeroed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">644</td>
            <td class="s0">Low Transmission Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">645</td>
            <td class="s0">Differential (axle) Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">646</td>
            <td class="s0">Differential (Final Drive) Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">647</td>
            <td class="s0">Right Brake Cooling Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">648</td>
            <td class="s0">Left Brake Cooling Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">649</td>
            <td class="s0">Engine Cooling Fan Drive Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">65</td>
            <td class="s0">High Hydrocarbon Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">650</td>
            <td class="s0">High Differential (Axle) Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">651</td>
            <td class="s0">Low Differential (Final Drive) Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">652</td>
            <td class="s0">Low Service Brake Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">653</td>
            <td class="s0">Low Secondary Brake Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">654</td>
            <td class="s0">High Generator Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">655</td>
            <td class="s0">High DC Power Bus Voltage #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">656</td>
            <td class="s0">High DC Power Bus Voltage #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">657</td>
            <td class="s0">High Generator Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">658</td>
            <td class="s0">High Power Inverter #1 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">659</td>
            <td class="s0">High Power Inverter #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">66</td>
            <td class="s0">Hydrocarbon Leak</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">660</td>
            <td class="s0">
              Secondary Brake Accumulator Pressure Not Responding
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">661</td>
            <td class="s0">High Brake Cooling Pump Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">662</td>
            <td class="s0">High Engine Cooling Fan Speed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">663</td>
            <td class="s0">Body Up While Machine In Motion</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">664</td>
            <td class="s0">Low Differential (axle) Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">665</td>
            <td class="s0">Hydraulic Hoist Screen Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">666</td>
            <td class="s0">Low Oil Filter Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">667</td>
            <td class="s0">Machine Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">668</td>
            <td class="s0">High Drive Motor Phase A Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">669</td>
            <td class="s0">High Drive Motor Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">67</td>
            <td class="s0">Plugged Hydrocarbon Injector</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">670</td>
            <td class="s0">High Drive Motor Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">671</td>
            <td class="s0">High Drive Motor #1 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">672</td>
            <td class="s0">High Drive Motor #2 Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">673</td>
            <td class="s0">Low DC Power Bus Voltage #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">674</td>
            <td class="s0">Low DC Power Bus Voltage #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">675</td>
            <td class="s0">High Generator Phase B Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">676</td>
            <td class="s0">High Generator Phase C Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">677</td>
            <td class="s0">High Steering Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">678</td>
            <td class="s0">Ground Level Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">679</td>
            <td class="s0">
              Idle Elevated To Increase Engine Coolant Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">68</td>
            <td class="s0">High Catalyst Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">680</td>
            <td class="s0">Access Ladder Lowered With Transmission In Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">681</td>
            <td class="s0">Payload Above Target Weight</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">682</td>
            <td class="s0">Engine Above Top Engine Speed Limit</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">683</td>
            <td class="s0">High Engine Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">684</td>
            <td class="s0">High Catalyst Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">685</td>
            <td class="s0">Laser Receiver Signal Interference</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">686</td>
            <td class="s0">
              All Wheel Drive (AWD) Limited Due to Cold Hydraulic Oil
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">687</td>
            <td class="s0">Fuel Filter #1 Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">688</td>
            <td class="s0">Fuel Filter #2 Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">689</td>
            <td class="s0">High Front Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">69</td>
            <td class="s0">Insufficient Hydrocarbon Injected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">690</td>
            <td class="s0">High Rear Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">691</td>
            <td class="s0">Speed Limited Due to High Tire Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">692</td>
            <td class="s0">High Powertrain Oil Tank Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">693</td>
            <td class="s0">High Powertrain Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">694</td>
            <td class="s0">Drive Motor Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">695</td>
            <td class="s0">Unexpected Motor Speed Detection Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">696</td>
            <td class="s0">Opposite Machine Movement Commands Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">697</td>
            <td class="s0">Negative High Peak Frame Bias</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">698</td>
            <td class="s0">Positive High Peak Frame Rack</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">699</td>
            <td class="s0">Negative High Peak Frame Rack</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">7</td>
            <td class="s0">High Aftercooler Temperature Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">70</td>
            <td class="s0">Incorrect Number of Hydrocarbon Injectors</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">700</td>
            <td class="s0">Negative High Peak Frame Pitch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">701</td>
            <td class="s0">Invalid Event</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">702</td>
            <td class="s0">High Left Track Steering Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">703</td>
            <td class="s0">High Right Track Steering Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">704</td>
            <td class="s0">
              Automatic Engine Speed Control (AESC) Disabled Due to System Fault
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">705</td>
            <td class="s0">Power Cable Reel Out of Cable</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">706</td>
            <td class="s0">Park Brake Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">707</td>
            <td class="s0">Transmission Failed to Engage Desired Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">708</td>
            <td class="s0">High Air Conditioner Compressor Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">709</td>
            <td class="s0">High Air Conditioner Compressor Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">71</td>
            <td class="s0">Oil Level Add Mark</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">710</td>
            <td class="s0">Low Air Conditioner Compressor Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">711</td>
            <td class="s0">High Accessory Power Converter Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">712</td>
            <td class="s0">High Accessory Power Converter Output Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">713</td>
            <td class="s0">Low Accessory Power Converter Output Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">714</td>
            <td class="s0">High Battery Charger Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">715</td>
            <td class="s0">Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">716</td>
            <td class="s0">Conflicting Brake Pressure Information</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">717</td>
            <td class="s0">
              Engine Exhaust NOx Level Sensor Operating Temperature Not Reached
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">718</td>
            <td class="s0">
              Screed Height Adjustment Switch Not In Hold Position At
              Inappropriate Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">719</td>
            <td class="s0">High Drive Motor Winding Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">72</td>
            <td class="s0">Oil Level Low Mark</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">720</td>
            <td class="s0">High Drive Motor Bearing #1 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">721</td>
            <td class="s0">
              Automatic Engine Speed Control (AESC) Speed Change Locked Out
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">722</td>
            <td class="s0">Low Powertrain Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">723</td>
            <td class="s0">
              Implement System Limited Due to Cold Hydraulic Oil
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">724</td>
            <td class="s0">High Generator Bearing #1 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">725</td>
            <td class="s0">High Generator Bearing #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">726</td>
            <td class="s0">High Drive Motor Bearing #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">727</td>
            <td class="s0">
              Engine Exhaust Emissions Feedback Feature Manually Disabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">728</td>
            <td class="s0">Parking Brake Retract Motor Activated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">729</td>
            <td class="s0">Left Final Drive Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">73</td>
            <td class="s0">High Oil Filter Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">730</td>
            <td class="s0">Right Final Drive Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">731</td>
            <td class="s0">Low Left Final Drive Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">732</td>
            <td class="s0">Low Right Final Drive Lube Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">733</td>
            <td class="s0">High Left Final Drive Lube Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">734</td>
            <td class="s0">High Right Final Drive Lube Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">735</td>
            <td class="s0">
              Transmission Gear Limited Due To Cold Transmission Oil
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">736</td>
            <td class="s0">Torque Converter Screen Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">737</td>
            <td class="s0">Inching Control Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">738</td>
            <td class="s0">High Generator Winding #1 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">739</td>
            <td class="s0">High Generator Winding #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">74</td>
            <td class="s0">Oil Filter Differential Pressure Very High</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">740</td>
            <td class="s0">Unexpected Machine Movement Detection Disabled</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">741</td>
            <td class="s0">High Power Inverter Temperature #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">742</td>
            <td class="s0">High Power Inverter Temperature #4</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">743</td>
            <td class="s0">High Power Inverter Temperature #5</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">744</td>
            <td class="s0">High Power Inverter Temperature #6</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">745</td>
            <td class="s0">High Power Inverter Temperature #7</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">746</td>
            <td class="s0">Low Secondary Steering Oil Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">747</td>
            <td class="s0">Cylinder #17 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">748</td>
            <td class="s0">Cylinder #18 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">749</td>
            <td class="s0">Cylinder #19 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">75</td>
            <td class="s0">Hydrocarbon Pump Motor Overheated</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">750</td>
            <td class="s0">Cylinder #20 Continuous Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">751</td>
            <td class="s0">Cylinder #17 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">752</td>
            <td class="s0">Cylinder #18 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">753</td>
            <td class="s0">Cylinder #19 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">754</td>
            <td class="s0">Cylinder #20 Intermittent Misfire</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">755</td>
            <td class="s0">Low Ride Control Accumulator Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">756</td>
            <td class="s0">Low Generator Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">757</td>
            <td class="s0">
              Overvoltage Control Rectifier Failure to Activate
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">758</td>
            <td class="s0">
              Unexpected Overvoltage Control Rectifier Activation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">759</td>
            <td class="s0">High Electric Retarding Grid #1 Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">76</td>
            <td class="s0">Rotor Height Not Attained</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">760</td>
            <td class="s0">High Electric Retarding Grid #2 Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">761</td>
            <td class="s0">Drive Motor Phase Current Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">762</td>
            <td class="s0">Machine Driven with Cold Transmission</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">763</td>
            <td class="s0">Trip Data Memory Low</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">764</td>
            <td class="s0">Trip Data Memory Full</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">765</td>
            <td class="s0">Transmission Charge Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">766</td>
            <td class="s0">Torque Converter Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">767</td>
            <td class="s0">Lockup Clutch Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">768</td>
            <td class="s0">Engine Shutdown Due to Loss of Machine Lockout</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">769</td>
            <td class="s0">Low Catalyst Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">77</td>
            <td class="s0">Differential (axle) Filter Restriction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">770</td>
            <td class="s0">High Fuel Rail Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">771</td>
            <td class="s0">High Aftercooler Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">772</td>
            <td class="s0">
              Conveyor Material Height Sensor Changed During Operation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">773</td>
            <td class="s0">
              Left Conveyor Material Height Sensor Signal Out of Range
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">774</td>
            <td class="s0">
              Right Conveyor Material Height Sensor Signal Out of Range
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">775</td>
            <td class="s0">High Left Exhaust #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">776</td>
            <td class="s0">High Right Exhaust #2 Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">777</td>
            <td class="s0">Positive High Peak Frame Bias</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">778</td>
            <td class="s0">High Peak Frame Rack</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">779</td>
            <td class="s0">Positive High Peak Frame Pitch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">78</td>
            <td class="s0">Blade Pitch not Zeroed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">780</td>
            <td class="s0">
              Conflicting Transmission Selector Position Information
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">781</td>
            <td class="s0">Low Injector Actuation Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">782</td>
            <td class="s0">
              Lift Pressure Rate of Change Too High to Weigh Payload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">783</td>
            <td class="s0">
              Insufficient Bucket Rack or Excessive Machine Pitch to Weigh
              Payload
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">784</td>
            <td class="s0">Payload Weight Too Heavy to Zero</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">785</td>
            <td class="s0">
              Access Platform Lowered With Transmission In Gear
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">786</td>
            <td class="s0">
              Access Platform Lowered With Park Brake Disengaged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">787</td>
            <td class="s0">
              Transmission Neutralized Due to Access Platform Lowered
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">788</td>
            <td class="s0">
              Auxiliary Hydraulics #1 Control Out Of Neutral At Inappropriate
              Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">789</td>
            <td class="s0">
              Auxiliary Hydraulics #2 Control Out Of Neutral At Inappropriate
              Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">79</td>
            <td class="s0">Low Machine Speed for Cruise Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">790</td>
            <td class="s0">
              Auxiliary Hydraulics #3 Control Out Of Neutral At Inappropriate
              Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">791</td>
            <td class="s0">
              Excessive Air Conditioning Refrigerant Monitoring Circuit Open
              Time
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">792</td>
            <td class="s0">High Air Conditioning Clutch Cycle Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">793</td>
            <td class="s0">
              Cab Air Heater Engine Coolant Valve Not Responding To Command
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">794</td>
            <td class="s0">Steering Systems Not Synchronized</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">795</td>
            <td class="s0">
              Machine Speed Excessive for Machine Articulation Angle
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">796</td>
            <td class="s0">
              Machine Articulation Angle Limited Due to Machine Speed
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">797</td>
            <td class="s0">Low Brake Boost Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">798</td>
            <td class="s0">Low Brake Fluid Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">799</td>
            <td class="s0">
              Center Implement Pump Oil Supply Shutoff Valve Closed With Pump
              Running
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">8</td>
            <td class="s0">High Aftercooler Temperature Shutdown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">80</td>
            <td class="s0">Low Engine Speed for Cruise Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">800</td>
            <td class="s0">
              Right Implement Pump Oil Supply Shutoff Valve Closed With Pump
              Running
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">801</td>
            <td class="s0">Cylinder #1 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">802</td>
            <td class="s0">Cylinder #2 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">803</td>
            <td class="s0">Cylinder #3 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">804</td>
            <td class="s0">Cylinder #4 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">805</td>
            <td class="s0">Cylinder #5 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">806</td>
            <td class="s0">Cylinder #6 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">807</td>
            <td class="s0">Cylinder #7 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">808</td>
            <td class="s0">Cylinder #8 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">809</td>
            <td class="s0">Cylinder #9 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">81</td>
            <td class="s0">Incorrect Gear for Cruise Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">810</td>
            <td class="s0">Cylinder #10 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">811</td>
            <td class="s0">Cylinder #11 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">812</td>
            <td class="s0">Cylinder #12 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">813</td>
            <td class="s0">Cylinder #13 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">814</td>
            <td class="s0">Cylinder #14 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">815</td>
            <td class="s0">Cylinder #15 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">816</td>
            <td class="s0">Cylinder #16 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">817</td>
            <td class="s0">Cylinder #17 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">818</td>
            <td class="s0">Cylinder #18 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">819</td>
            <td class="s0">Cylinder #19 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">82</td>
            <td class="s0">Operator Shift Settings Not Saved</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">820</td>
            <td class="s0">Cylinder #20 High Exhaust Port Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">821</td>
            <td class="s0">
              Cylinder #1 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">822</td>
            <td class="s0">
              Cylinder #2 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">823</td>
            <td class="s0">
              Cylinder #3 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">824</td>
            <td class="s0">
              Cylinder #4 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">825</td>
            <td class="s0">
              Cylinder #5 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">826</td>
            <td class="s0">
              Cylinder #6 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">827</td>
            <td class="s0">
              Cylinder #7 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">828</td>
            <td class="s0">
              Cylinder #8 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">829</td>
            <td class="s0">
              Cylinder #9 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">83</td>
            <td class="s0">Transmission Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">830</td>
            <td class="s0">
              Cylinder #10 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">831</td>
            <td class="s0">
              Cylinder #11 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">832</td>
            <td class="s0">
              Cylinder #12 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">833</td>
            <td class="s0">
              Cylinder #13 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">834</td>
            <td class="s0">
              Cylinder #14 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">835</td>
            <td class="s0">
              Cylinder #15 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">836</td>
            <td class="s0">
              Cylinder #16 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">837</td>
            <td class="s0">
              Cylinder #17 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">838</td>
            <td class="s0">
              Cylinder #18 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">839</td>
            <td class="s0">
              Cylinder #19 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">84</td>
            <td class="s0">Machine Overspeed Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">840</td>
            <td class="s0">
              Cylinder #20 Exhaust Port Temperature Deviating High
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">841</td>
            <td class="s0">
              Cylinder #1 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">842</td>
            <td class="s0">
              Cylinder #2 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">843</td>
            <td class="s0">
              Cylinder #3 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">844</td>
            <td class="s0">
              Cylinder #4 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">845</td>
            <td class="s0">
              Cylinder #5 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">846</td>
            <td class="s0">
              Cylinder #6 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">847</td>
            <td class="s0">
              Cylinder #7 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">848</td>
            <td class="s0">
              Cylinder #8 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">849</td>
            <td class="s0">
              Cylinder #9 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">85</td>
            <td class="s0">Engine Shutdown Overridden</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">850</td>
            <td class="s0">
              Cylinder #10 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">851</td>
            <td class="s0">
              Cylinder #11 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">852</td>
            <td class="s0">
              Cylinder #12 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">853</td>
            <td class="s0">
              Cylinder #13 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">854</td>
            <td class="s0">
              Cylinder #14 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">855</td>
            <td class="s0">
              Cylinder #15 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">856</td>
            <td class="s0">
              Cylinder #16 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">857</td>
            <td class="s0">
              Cylinder #17 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">858</td>
            <td class="s0">
              Cylinder #18 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">859</td>
            <td class="s0">
              Cylinder #19 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">86</td>
            <td class="s0">High Left Front Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">860</td>
            <td class="s0">
              Cylinder #20 Exhaust Port Temperature Deviating Low
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">861</td>
            <td class="s0">Clock Manual Alignment Required</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">862</td>
            <td class="s0">Attachment Hydraulic Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">863</td>
            <td class="s0">Abnormal Machine Auto Lube System Operation</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">864</td>
            <td class="s0">Low Gas Fuel Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">865</td>
            <td class="s0">High Gas Fuel Differential Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">866</td>
            <td class="s0">Low Gas Fuel Flow Rate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">867</td>
            <td class="s0">Improper Gas Flow Control Valve Response</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">868</td>
            <td class="s0">Gas Flow Control Valve Malfunction</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">869</td>
            <td class="s0">Unstable Gas Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">87</td>
            <td class="s0">High Right Front Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">870</td>
            <td class="s0">High Turbo Turbine Inlet Air Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">871</td>
            <td class="s0">
              Geographical Exclusive Zone #1 Boundary Violation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">872</td>
            <td class="s0">
              Geographical Exclusive Zone #2 Boundary Violation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">873</td>
            <td class="s0">
              Geographical Exclusive Zone #3 Boundary Violation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">874</td>
            <td class="s0">
              Geographical Exclusive Zone #4 Boundary Violation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">875</td>
            <td class="s0">Low System Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">876</td>
            <td class="s0">High System Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">877</td>
            <td class="s0">High Transmission Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">878</td>
            <td class="s0">High Hydraulic Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">879</td>
            <td class="s0">Hydraulic Tank Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">88</td>
            <td class="s0">High Left Rear Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">880</td>
            <td class="s0">E/H (Implement Pilot Supply) Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">881</td>
            <td class="s0">Multiple Stations on Master Control Data Link</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">882</td>
            <td class="s0">Low Brake Oil Cooler Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">883</td>
            <td class="s0">
              Engine Failed To Stop When Fuel Solenoid Disengaged
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">884</td>
            <td class="s0">Fuel Correction Factor Upper Limit Reached</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">885</td>
            <td class="s0">Fuel Correction Factor Lower Limit Reached</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">886</td>
            <td class="s0">Compression Brake System Failure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">887</td>
            <td class="s0">Blade Function Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">888</td>
            <td class="s0">Ripper Function Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">889</td>
            <td class="s0">Winch Function Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">89</td>
            <td class="s0">High Right Rear Brake Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">890</td>
            <td class="s0">Auto Lube System Cannot Operate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">891</td>
            <td class="s0">
              Geographical Exclusive Zone #5 Boundary Violation
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">892</td>
            <td class="s0">Blade Tilt Limiting Disabled Due to System Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">893</td>
            <td class="s0">High Engine Oil Level</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">894</td>
            <td class="s0">Power Inverter Control #1 Signal Enable Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">895</td>
            <td class="s0">Power Inverter Control #2 Signal Enable Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">896</td>
            <td class="s0">Inverter Interface Module Enable Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">897</td>
            <td class="s0">
              Electric Retarding Grid #2 Contactor Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">898</td>
            <td class="s0">High DC Power Bus Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">899</td>
            <td class="s0">Power Transistor Wiring Incorrect</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">9</td>
            <td class="s0">High Altitude Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">90</td>
            <td class="s0">High Differential (axle) Oil Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">900</td>
            <td class="s0">
              Drive Motor Phase A Power Transistor #1 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">901</td>
            <td class="s0">
              Drive Motor Phase A Power Transistor #2 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">902</td>
            <td class="s0">
              Drive Motor Phase B Power Transistor #1 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">903</td>
            <td class="s0">
              Drive Motor Phase B Power Transistor #2 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">904</td>
            <td class="s0">
              Drive Motor Phase C Power Transistor #1 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">905</td>
            <td class="s0">
              Drive Motor Phase C Power Transistor #2 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">906</td>
            <td class="s0">Drive Motor Speed Signal Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">907</td>
            <td class="s0">Low Electric Retarding Grid #1 Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">908</td>
            <td class="s0">Low Electric Retarding Grid #2 Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">909</td>
            <td class="s0">Low DC Power Bus #1 Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">91</td>
            <td class="s0">High Differential (axle) Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">910</td>
            <td class="s0">Low DC Power Bus #2 Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">911</td>
            <td class="s0">
              Unexpected Electric Retarding Grid #1 Current Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">912</td>
            <td class="s0">
              Unexpected Electric Retarding Grid #2 Current Detected
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">913</td>
            <td class="s0">Low Power Inverter Capacitance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">914</td>
            <td class="s0">DC Power Bus #1 Voltage Mismatch</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">915</td>
            <td class="s0">Primary Retarding Capacity Exceeded</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">916</td>
            <td class="s0">High Power Converter Temperature #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">917</td>
            <td class="s0">High Power Converter Temperature #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">918</td>
            <td class="s0">
              Electric Retarding Grid #2 Power Transistor Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">919</td>
            <td class="s0">Quick Coupler Desired State Unknown</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">92</td>
            <td class="s0">Boost Pressure Above Normal Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">920</td>
            <td class="s0">
              High Steering Control Force Feedback Motor Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">921</td>
            <td class="s0">
              Aftertreatment Diesel Particulate Filter System Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">922</td>
            <td class="s0">Low Generator Phase A-B Voltage</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">923</td>
            <td class="s0">
              Generator Phase A Power Transistor #1 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">924</td>
            <td class="s0">
              Generator Phase A Power Transistor #2 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">925</td>
            <td class="s0">
              Generator Phase B Power Transistor #1 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">926</td>
            <td class="s0">
              Generator Phase B Power Transistor #2 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">927</td>
            <td class="s0">
              Generator Phase C Power Transistor #1 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">928</td>
            <td class="s0">
              Generator Phase C Power Transistor #2 Signal Mismatch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">929</td>
            <td class="s0">Battery Charging System Not Charging</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">93</td>
            <td class="s0">Boost Pressure Below Normal Range</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">930</td>
            <td class="s0">
              High Aftertreatment #1 SCR Dosing Reagent Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">931</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Dosing Reagent Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">932</td>
            <td class="s0">
              High Aftertreatment #2 SCR Dosing Reagent Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">933</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Dosing Reagent Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">934</td>
            <td class="s0">
              High Aftertreatment #1 SCR Dosing Reagent Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">935</td>
            <td class="s0">
              High Aftertreatment #1 SCR Dosing Reagent Temperature #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">936</td>
            <td class="s0">
              High Aftertreatment #1 SCR Dosing Reagent Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">937</td>
            <td class="s0">
              High Aftertreatment #1SCR Dosing Reagent Temperature #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">938</td>
            <td class="s0">
              High Aftertreatment #2 SCR Dosing Reagent Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">939</td>
            <td class="s0">
              High Aftertreatment #2 SCR Dosing Reagent Temperature #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">94</td>
            <td class="s0">Axle Protection Derate</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">940</td>
            <td class="s0">
              High Aftertreatment #2 SCR Dosing Reagent Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">941</td>
            <td class="s0">
              High Aftertreatment #2 SCR Dosing Reagent Temperature #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">942</td>
            <td class="s0">
              High Aftertreatment #1 SCR Catalyst Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">943</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">944</td>
            <td class="s0">
              High Aftertreatment #2 SCR Catalyst Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">945</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Differential Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">946</td>
            <td class="s0">
              High Aftertreatment #1 SCR Catalyst Intake Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">947</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Intake Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">948</td>
            <td class="s0">
              High Aftertreatment #2 SCR Catalyst Intake Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">949</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Intake Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">95</td>
            <td class="s0">Fuel Filter Restriction Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">950</td>
            <td class="s0">
              High Aftertreatment #1 SCR Catalyst Oulet Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">951</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Oulet Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">952</td>
            <td class="s0">
              High Aftertreatment #2 SCR Catalyst Oulet Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">953</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Oulet Gas Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">954</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Reagent Tank #1 Level
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">955</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Catalyst Reagent Tank #2 Level
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">956</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Reagent Tank #1 Level
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">957</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Catalyst Reagent Tank #2 Level
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">958</td>
            <td class="s0">Low Clean Gas Induction System #1 Temperature #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">959</td>
            <td class="s0">
              High Clean Gas Induction System #1 Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">96</td>
            <td class="s0">High Fuel Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">960</td>
            <td class="s0">
              High Aftertreatment #1 SCR Catalyst Reagent Tank #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">961</td>
            <td class="s0">
              High Aftertreatment #1 SCR Catalyst Reagent Tank #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">962</td>
            <td class="s0">
              High Aftertreatment #2 SCR Catalyst Reagent Tank #1 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">963</td>
            <td class="s0">
              High Aftertreatment #2 SCR Catalyst Reagent Tank #2 Temperature
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">964</td>
            <td class="s0">
              Low Aftertreatment #1 SCR Dosing Atomization Air Assist Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">965</td>
            <td class="s0">
              Low Aftertreatment #2 SCR Dosing Atomization Air Assist Pressure
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">966</td>
            <td class="s0">High Aftertreatment #1 Outlet NH3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">967</td>
            <td class="s0">High Aftertreatment #2 Outlet NH3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">968</td>
            <td class="s0">Low Exhaust Valve Actuation System Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">969</td>
            <td class="s0">High Exhaust Valve Actuation System Oil Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">97</td>
            <td class="s0">Engine Derate Overridden</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">970</td>
            <td class="s0">Low Clean Gas Induction System #2 Temperature #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">971</td>
            <td class="s0">
              High Clean Gas Induction System #2 Temperature #1
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">972</td>
            <td class="s0">Low Clean Gas Induction System #1 Mass Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">973</td>
            <td class="s0">High Clean Gas Induction System #1 Mass Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">974</td>
            <td class="s0">Low Clean Gas Induction System #2 Mass Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">975</td>
            <td class="s0">High Clean Gas Induction System #2 Mass Flow</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">976</td>
            <td class="s0">Unexpected Drive Pump Signal Pressure Detected</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">977</td>
            <td class="s0">
              Unexpected Drive Pump Signal Pressure Detection Disabled
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">978</td>
            <td class="s0">Generator Phase Imbalance</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">979</td>
            <td class="s0">Stabilizer Raised While Transmission In Gear</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">98</td>
            <td class="s0">Engine Pre-lube Override</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">980</td>
            <td class="s0">Turbocharger #1 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">981</td>
            <td class="s0">Turbocharger #1 Underspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">982</td>
            <td class="s0">Turbocharger #2 Overspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">983</td>
            <td class="s0">Turbocharger #2 Underspeed</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">984</td>
            <td class="s0">Turbocharger Correction Factor Limit Reached</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">985</td>
            <td class="s0">High Generator Position Sensing Offset</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">986</td>
            <td class="s0">Transmission Dropbox Oil Filter Plugged</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">987</td>
            <td class="s0">High Battery Charger Temperature</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">988</td>
            <td class="s0">DC Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">989</td>
            <td class="s0">Drive Motor System AC Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">99</td>
            <td class="s0">Engine Oil Filter Restriction Warning</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">990</td>
            <td class="s0">High Accessory Bus Current</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">991</td>
            <td class="s0">
              DPF Active Regeneration Inhibited Due to Permanent System Lockout
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">992</td>
            <td class="s0">
              DPF Active Regeneration Inhibited Due to Temporary System Lockout
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">993</td>
            <td class="s0">
              DPF Active Regeneration Inhibited Due to Inhibit Switch
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">994</td>
            <td class="s0">Low Crankcase Pressure</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">995</td>
            <td class="s0">High DPF #1 Soot Loading</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">996</td>
            <td class="s0">High DPF #2 Soot Loading</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">997</td>
            <td class="s0">High DPF #1 Ash Loading</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">998</td>
            <td class="s0">High DPF #2 Ash Loading</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">999</td>
            <td class="s0">Generator System AC Ground Fault</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">9997</td>
            <td class="s0">No description available</td>
          </tr>
        </tbody>
      </table>
    </div> `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
