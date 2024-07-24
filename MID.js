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
              id="1211551419C0"
              style="width: 273px"
              class="column-headers-background"
            >
              Code
            </th>
            <th
              id="1211551419C1"
              style="width: 521px"
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
            <td class="s1">10</td>
            <td class="s0">Digital Diagnostic Tool</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">100</td>
            <td class="s0">Engine Vision Display</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">101</td>
            <td class="s0">Engine Vision Interface Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">102</td>
            <td class="s0">Customer Communication Module #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">103</td>
            <td class="s0">Remote Display #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">104</td>
            <td class="s0">Group ID for ICSM</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">105</td>
            <td class="s0">Hydraulic Pump Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">106</td>
            <td class="s0">Electro-hydraulic Control Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">107</td>
            <td class="s0">
              Integrated Temperature Sensing Module #2/Engine Sensing Module #2
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">108</td>
            <td class="s0">Versatile Control Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">109</td>
            <td class="s0">Integrated Combustion Sensing Module #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">11</td>
            <td class="s0">Communication Adapter</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">110</td>
            <td class="s0">Integrated Combustion Sensing Module #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">111</td>
            <td class="s0">
              Integrated Temperature Sensing Module/Engine Sensing Module
            </td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">113</td>
            <td class="s0">Track Type Tractor (TTT) Transmission Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">114</td>
            <td class="s0">Grade Slope Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">115</td>
            <td class="s0">Slope Sensor Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">116</td>
            <td class="s0">Integrated Brake Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">117</td>
            <td class="s0">Transmission Shift Lever Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">118</td>
            <td class="s0">Paver Burner Control #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">119</td>
            <td class="s0">Paver Burner Control #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">12</td>
            <td class="s0">Electronic Control Analyzer Programmer</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">121</td>
            <td class="s0">Computer Aided Earthmoving System (CAES)</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">122</td>
            <td class="s0">Product Link Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">123</td>
            <td class="s0">Data Link Translation Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">124</td>
            <td class="s0">Theft Deterrent Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">125</td>
            <td class="s0">Caterpillar Monitoring System #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">126</td>
            <td class="s0">System Master Control Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">127</td>
            <td class="s0">Data Link Translation Module #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">129</td>
            <td class="s0">Training Aid #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">13</td>
            <td class="s0">CAT Electronic Technician</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">130</td>
            <td class="s0">Training Aid #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">131</td>
            <td class="s0">Test Cell Computer</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">132</td>
            <td class="s0">Wireless Transceiver</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">133</td>
            <td class="s0">Security System Key Reader</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">134</td>
            <td class="s0">Object Detection System</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">137</td>
            <td class="s0">Grade Slope Display #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">138</td>
            <td class="s0">Grade Slope Display #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">139</td>
            <td class="s0">Grade Slope Display #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">14</td>
            <td class="s0">Electronic Ignition System</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">140</td>
            <td class="s0">Grade Slope Display #4</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">141</td>
            <td class="s0">Grade Slope Display #5</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">142</td>
            <td class="s0">Grade Slope Display #6</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">145</td>
            <td class="s0">Electronic Implement Control #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">146</td>
            <td class="s0">Transmission Control #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">147</td>
            <td class="s0">Electronic Implement Control #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">148</td>
            <td class="s0">Particulate Matter Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">149</td>
            <td class="s0">Engine Aftertreatment Control #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">15</td>
            <td class="s0">Spark Ignited Engine Timing Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">150</td>
            <td class="s0">Steering</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">153</td>
            <td class="s0">Alarm Control #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">154</td>
            <td class="s0">Alarm Control #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">155</td>
            <td class="s0">Alarm Control #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">156</td>
            <td class="s0">Operator Station #1 Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">157</td>
            <td class="s0">Operator Station #2 Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">161</td>
            <td class="s0">Communication Gateway #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">162</td>
            <td class="s0">Communication Gateway #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">163</td>
            <td class="s0">Communication Gateway #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">169</td>
            <td class="s0">Power Converter #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">17</td>
            <td class="s0">34XX SI Engine Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">170</td>
            <td class="s0">Power Converter #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">18</td>
            <td class="s0">35XX SI Engine Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">19</td>
            <td class="s0">36XX SI Engine Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">20</td>
            <td class="s0">Torsional Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">21</td>
            <td class="s0">G3600 I/O Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">22</td>
            <td class="s0">G3600 Pressure Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">23</td>
            <td class="s0">Detonation Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">25</td>
            <td class="s0">Ether Aid Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">254</td>
            <td class="s0">Flashing ECM</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">255</td>
            <td class="s0">Blank ECM</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">26</td>
            <td class="s0">CMS</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">27</td>
            <td class="s0">Transmission/Chassis Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">28</td>
            <td class="s0">Traction Aid Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">29</td>
            <td class="s0">Computerized Profiler Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">30</td>
            <td class="s0">Caterpillar Monitoring System</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">31</td>
            <td class="s0">Electronic Scraper Transmission Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">33</td>
            <td class="s0">Engine Control #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">34</td>
            <td class="s0">Engine Control #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">35</td>
            <td class="s0">Engine Control #4</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">36</td>
            <td class="s0">Engine Control #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">37</td>
            <td class="s0">Engine Control #5</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">38</td>
            <td class="s0">Engine Control #6</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">39</td>
            <td class="s0">Machine Control Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">40</td>
            <td class="s0">Engine Control #7</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">41</td>
            <td class="s0">Engine Control #8</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">42</td>
            <td class="s0">Engine Control #9</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">43</td>
            <td class="s0">Engine Control #10</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">47</td>
            <td class="s0">Backup Engine Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">49</td>
            <td class="s0">VIMS Main Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">50</td>
            <td class="s0">VIMS Analysis Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">51</td>
            <td class="s0">VIDS Main Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">52</td>
            <td class="s0">Graphical Display Module #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">53</td>
            <td class="s0">Graphical Display Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">54</td>
            <td class="s0">Caterpillar Monitoring System #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">57</td>
            <td class="s0">Interface Module #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">58</td>
            <td class="s0">Interface Module #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">59</td>
            <td class="s0">Interface Module #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">60</td>
            <td class="s0">Interface Module #4</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">61</td>
            <td class="s0">Data Acquisition Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">65</td>
            <td class="s0">Interface Module #5</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">66</td>
            <td class="s0">Interface Module #6</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">67</td>
            <td class="s0">Interface Module #7</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">68</td>
            <td class="s0">Interface Module #8</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">73</td>
            <td class="s0">Auto Ride/2-speed Fan Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">74</td>
            <td class="s0">Payload Control System</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">75</td>
            <td class="s0">All-Wheel Drive Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">76</td>
            <td class="s0">DeNOx Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">77</td>
            <td class="s0">DeNOx Display</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">78</td>
            <td class="s0">Hitch Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">79</td>
            <td class="s0">Hydrostatic Transmission Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">81</td>
            <td class="s0">Transmission Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">82</td>
            <td class="s0">Electronic Implement Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">83</td>
            <td class="s0">Automatic Retarder Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">84</td>
            <td class="s0">Paver Burner Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">85</td>
            <td class="s0">Engine Fan Control</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">86</td>
            <td class="s0">Global Positioning System Interface Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">87</td>
            <td class="s0">Chassis Control Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">88</td>
            <td class="s0">Generator Set Control #1</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">89</td>
            <td class="s0">Generator Set Control #2</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">9</td>
            <td class="s0">Handheld Service Tool</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">90</td>
            <td class="s0">Generator Set Control #3</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">91</td>
            <td class="s0">Generator Set Control #4</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">92</td>
            <td class="s0">Generator Set Control #5</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">93</td>
            <td class="s0">Generator Set Control #6</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">94</td>
            <td class="s0">Generator Set Control #7</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">95</td>
            <td class="s0">Generator Set Control #8</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">97</td>
            <td class="s0">Customer Communication Module</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">98</td>
            <td class="s0">Customer Communication Module Special</td>
          </tr>
          <tr style="height: 19px">
            <td class="s1">99</td>
            <td class="s0">Programmable Relay Control Module</td>
          </tr>
        </tbody>
      </table>
    </div> `;

 // Select the div with the class .fault-container
    let targetDiv = document.querySelector('.fault-container');

    targetDiv.innerHTML += htmlContent;
});
