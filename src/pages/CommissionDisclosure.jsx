import React, { useState, useMemo } from "react";

// ── Embedded Data (processed from GST sales invoices) ──────────────────────
const RAW_DATA = {"FY 2021-22":{"aum":{"Apr":577460819,"May":620208438,"Jun":639524097,"Jul":704985185,"Aug":753516953,"Sep":788990625,"Oct":806388123,"Nov":791309023,"Dec":812741737,"Jan":839998965,"Feb":822401020,"Mar":860817511},"commission":{"Franklin Templeton Mutual Fund":{"Apr":10928.18,"May":9995.95,"Jun":10716.92,"Jul":10849.07,"Aug":11647.41,"Sep":14654.46,"Oct":13503.94,"Nov":16368.96,"Dec":16138.58,"Jan":16839.97,"Feb":17391.52,"Mar":15750.51},"IDFC Mutual Fund":{"Apr":42006.96,"May":40523.91,"Jun":44369.27,"Jul":45870.73,"Aug":49400.66,"Sep":52567.9,"Oct":53983.69,"Nov":59829.63,"Dec":58191.49,"Jan":61971.81,"Feb":65276.67,"Mar":58018.17},"ICICI Prudential Mutual Fund":{"Apr":50669.14,"May":49017.26,"Jun":53649.93,"Jul":54738.42,"Aug":62392.25,"Sep":77454.06,"Oct":82392.96,"Nov":86210.97,"Dec":83845.98,"Jan":84640.64,"Feb":86305.61,"Mar":76486.34},"Tata Mutual Fund":{"Apr":17938.78,"May":17406.56,"Jun":18694.9,"Jul":23239.29,"Aug":21105.28,"Sep":25289.05,"Oct":27738.81,"Nov":28131.78,"Dec":27485.48,"Jan":27696.33,"Feb":28757.85,"Mar":25508.16},"Nippon India Mutual Fund":{"Apr":72984.58,"May":69970.08,"Jun":74717.25,"Jul":76406.69,"Aug":82210.66,"Sep":88186.49,"Oct":92349.31,"Nov":98306.22,"Dec":94936.93,"Jan":96288.3,"Feb":99084.69,"Mar":87397.03},"Invesco Mutual Fund":{"Apr":47666.53,"May":48654.43,"Jun":52305.28,"Jul":55348.77,"Aug":63589.02,"Sep":70216.26,"Oct":75163.63,"Nov":85133.48,"Dec":85130.19,"Jan":87825.67,"Feb":92086.14,"Mar":84166.5},"Axis Mutual Fund":{"Apr":8984.39,"May":9041.87,"Jun":10035.06,"Jul":10684.57,"Aug":14147.15,"Sep":15703.87,"Oct":17523.85,"Nov":19302.81,"Dec":19042.7,"Jan":20587.32,"Feb":24246.38,"Mar":20378.35},"HDFC Mutual Fund":{"Apr":30023.61,"May":28957.53,"Jun":31648.8,"Jul":31612.79,"Aug":40132.86,"Sep":45822.74,"Oct":49388.91,"Nov":54351.46,"Dec":53572.85,"Jan":55612.63,"Feb":58965.76,"Mar":53701.24},"Aditya Birla Sun Life Mutual Fund":{"Apr":51375.26,"May":49650.75,"Jun":53043.38,"Jul":52321.47,"Aug":57638.15,"Sep":62379.24,"Oct":67736.8,"Nov":74304.03,"Dec":72151.84,"Jan":73408.5,"Feb":77819.16,"Mar":72592.75},"DSP Mutual Fund":{"Apr":9458.27,"May":9070.9,"Jun":9842.84,"Jul":10084.28,"Aug":11265.44,"Sep":13101.25,"Oct":13305.46,"Nov":14870.42,"Dec":14354.34,"Jan":14322.99,"Feb":15316.95,"Mar":16717.71},"Mirae Asset Mutual Fund":{"Apr":10235.59,"May":10054.81,"Jun":11245.92,"Jul":11983.37,"Aug":13114.68,"Sep":14361.8,"Oct":15180.31,"Nov":16912.52,"Dec":16819.31,"Jan":16995.42,"Feb":18647.46,"Mar":17954.35},"Principal Mutual Fund":{"Apr":1612.39,"May":1480.9,"Jun":1288.74,"Jul":1344.5,"Aug":1438.21,"Sep":1474.69,"Oct":1525.47,"Nov":1647.47,"Dec":1579.35,"Jan":1592.09},"PPFAS Mutual Fund":{"Apr":13.0,"May":19.07,"Jun":44.24,"Jul":60.81,"Aug":167.41,"Sep":296.52,"Oct":406.44,"Nov":535.09,"Dec":602.92,"Jan":709.37,"Feb":787.39,"Mar":721.27},"SBI Mutual Fund":{"Apr":148.25,"May":112.43,"Jun":120.25,"Jul":122.67,"Aug":131.16,"Sep":134.43,"Oct":246.99,"Nov":249.78,"Dec":228.44,"Jan":232.92,"Feb":233.47,"Mar":208.44},"Sundaram Mutual Fund":{"Feb":653.57,"Mar":297.2}}},"FY 2022-23":{"aum":{"Apr":855964356,"May":839006770,"Jun":817705456,"Jul":885050033,"Aug":931203921,"Sep":934224254,"Oct":981106991,"Nov":1011557700,"Dec":999621402,"Jan":995828660,"Feb":995056337,"Mar":1007496208},"commission":{"Franklin Templeton Mutual Fund":{"Apr":17272.8,"May":18498.69,"Jun":19182.85,"Jul":18814.71,"Aug":21615.4,"Sep":23424.32,"Oct":29309.65,"Nov":33059.81,"Dec":34141.54,"Jan":36858.92,"Feb":37695.4,"Mar":39565.42},"IDFC Mutual Fund":{"Apr":64611.01,"May":67937.12,"Jun":66913.3,"Jul":64851.23,"Aug":71594.06,"Sep":78807.56,"Oct":82104.42,"Nov":86590.61,"Dec":86855.62,"Jan":91750.59,"Feb":91578.69,"Mar":83375.0},"ICICI Prudential Mutual Fund":{"Apr":83523.47,"May":85604.52,"Jun":87116.53,"Jul":83862.42,"Aug":90222.25,"Sep":95290.93,"Oct":104565.96,"Nov":101619.94,"Dec":101715.57,"Jan":105951.74,"Feb":104805.07,"Mar":94085.61},"Tata Mutual Fund":{"Apr":28429.83,"May":28943.88,"Jun":29149.67,"Jul":28400.79,"Aug":31226.71,"Sep":34005.89,"Oct":37547.38,"Nov":61935.01,"Dec":40581.89,"Jan":43285.09,"Feb":43431.14,"Mar":44514.2},"Nippon India Mutual Fund":{"Apr":94319.04,"May":95172.45,"Jun":91789.01,"Jul":87561.79,"Aug":94586.86,"Sep":101891.97,"Oct":101995.43,"Nov":105107.43,"Dec":104504.85,"Jan":109646.88,"Feb":108409.05,"Mar":97592.22},"Invesco Mutual Fund":{"Apr":96376.99,"May":99033.83,"Jun":97297.23,"Jul":94188.89,"Aug":103115.2,"Sep":110573.64,"Oct":110012.49,"Nov":117062.12,"Dec":116035.39,"Jan":122055.8,"Feb":121691.78,"Mar":109139.57},"Axis Mutual Fund":{"Apr":22762.49,"May":23082.11,"Jun":22457.25,"Jul":21749.76,"Aug":23654.02,"Sep":25831.09,"Oct":26098.87,"Nov":27426.62,"Dec":27082.09,"Jan":28172.51,"Feb":28104.33,"Mar":26163.36},"HDFC Mutual Fund":{"Apr":60202.72,"May":62552.75,"Jun":62413.71,"Jul":60894.8,"Aug":66103.76,"Sep":71710.14,"Oct":71544.11,"Nov":73987.91,"Dec":75574.05,"Jan":80271.36,"Feb":80122.81,"Mar":66499.2},"Aditya Birla Sun Life Mutual Fund":{"Apr":80708.7,"May":81332.41,"Jun":78663.75,"Jul":74568.24,"Aug":79775.95,"Sep":84109.66,"Oct":82969.56,"Nov":85540.02,"Dec":85352.33,"Jan":89433.08,"Feb":88408.61,"Mar":78184.53},"DSP Mutual Fund":{"Apr":19247.22,"May":19531.07,"Jun":19166.53,"Jul":17943.5,"Aug":19303.32,"Sep":20453.34,"Oct":20182.42,"Nov":20798.6,"Dec":20730.68,"Jan":21741.14,"Feb":21727.44,"Mar":19859.83},"Mirae Asset Mutual Fund":{"Apr":19605.66,"May":19725.11,"Jun":18338.51,"Jul":17839.55,"Aug":19832.86,"Sep":21814.89,"Oct":21409.46,"Nov":23032.44,"Dec":24546.98,"Jan":26040.04,"Feb":25886.92,"Mar":23323.86},"Sundaram Mutual Fund":{"Apr":338.73,"Dec":117.72},"PPFAS Mutual Fund":{"Apr":846.29,"May":892.58,"Jun":1090.1,"Jul":903.54,"Aug":994.16,"Sep":1053.33,"Oct":1029.67,"Nov":1066.35,"Dec":1047.63,"Jan":1089.54,"Feb":1113.41,"Mar":1039.13},"SBI Mutual Fund":{"Apr":221.4,"May":193.19,"Jun":102.8,"Aug":87.71,"Oct":90.73,"Dec":87.21}}},"FY 2023-24":{"aum":{"Apr":1045216019,"May":1096468011,"Jun":1156069442,"Jul":1200860537,"Aug":1216518768,"Sep":1257278159,"Oct":1241785317,"Nov":1335514983,"Dec":1429410537,"Jan":1486817972,"Feb":1537545692,"Mar":1558708267},"commission":{"Franklin Templeton Mutual Fund":{"Apr":38265.36,"May":38219.02,"Jun":42769.11,"Jul":43350.7,"Aug":46126.08,"Sep":53028.83,"Oct":50103.04,"Nov":50562.71,"Dec":51425.5,"Jan":58080.5,"Feb":61702.05,"Mar":62765.93},"Bandhan Mutual Fund":{"Apr":90882.5,"May":100743.38,"Jun":93592.71,"Jul":101629.47,"Aug":103915.65,"Sep":105039.98,"Oct":104696.3,"Nov":107837.75,"Dec":104885.17,"Jan":116979.7,"Feb":121036.7,"Mar":118889.36},"ICICI Prudential Mutual Fund":{"Apr":102621.1,"May":103139.3,"Jun":110260.69,"Jul":111076.54,"Aug":115710.8,"Sep":109293.05,"Oct":108745.2,"Nov":111411.88,"Dec":110191.45,"Jan":122219.0,"Feb":125077.25,"Mar":120874.21},"Tata Mutual Fund":{"Apr":48300.47,"May":47696.71,"Jun":52258.98,"Jul":53520.69,"Aug":56252.67,"Sep":58273.2,"Oct":57826.18,"Nov":61350.85,"Dec":66091.93,"Jan":73825.06,"Feb":77995.12,"Mar":77168.94},"Nippon India Mutual Fund":{"Apr":108889.27,"May":106655.94,"Jun":115346.58,"Jul":117040.75,"Aug":124778.4,"Sep":127442.07,"Oct":128257.39,"Nov":132147.14,"Dec":128869.59,"Jan":140223.92,"Feb":146164.69,"Mar":140487.65},"Invesco Mutual Fund":{"Apr":118684.94,"May":114116.55,"Jun":121918.73,"Jul":122354.97,"Aug":125243.67,"Sep":126105.25,"Oct":125677.53,"Nov":129354.61,"Dec":130718.79,"Jan":153780.81,"Feb":151643.07,"Mar":147918.97},"Axis Mutual Fund":{"Apr":28453.66,"May":27846.95,"Jun":29246.93,"Jul":30505.82,"Aug":31773.03,"Sep":31681.0,"Oct":31920.51,"Nov":32714.24,"Dec":32797.75,"Jan":35667.19,"Feb":37293.21,"Mar":36943.5},"HDFC Mutual Fund":{"Apr":87035.05,"May":89435.91,"Jun":87262.22,"Jul":88359.48,"Aug":92933.58,"Sep":92081.25,"Oct":104661.16,"Nov":114225.87,"Dec":115226.28,"Jan":132343.5,"Feb":133444.4,"Mar":129226.81},"Aditya Birla Sun Life Mutual Fund":{"Apr":92597.62,"May":90687.29,"Jun":98155.87,"Jul":101115.33,"Aug":106755.16,"Sep":109425.03,"Oct":109236.81,"Nov":112161.23,"Dec":110945.0,"Jan":125983.46,"Feb":124968.11,"Mar":126765.31},"DSP Mutual Fund":{"Apr":21573.91,"May":21292.21,"Jun":27858.69,"Jul":24004.15,"Aug":24483.84,"Sep":26367.89,"Oct":25695.92,"Nov":25342.81,"Dec":25361.8,"Jan":30877.51,"Feb":29797.82,"Mar":29053.25},"Mirae Asset Mutual Fund":{"Apr":26085.88,"May":25182.99,"Jun":27280.95,"Jul":28602.37,"Aug":30312.59,"Sep":31074.42,"Oct":31188.51,"Nov":33186.04,"Dec":33953.86,"Jan":39093.06,"Feb":42861.2,"Mar":40198.16},"PPFAS Mutual Fund":{"Apr":1153.6,"May":1019.58,"Jun":1298.54,"Jul":1563.51,"Aug":1999.62,"Sep":2409.53,"Oct":2544.49,"Nov":2910.92,"Dec":3128.48,"Jan":3563.33,"Feb":3979.67,"Mar":4118.24},"SBI Mutual Fund":{"Apr":224.63,"May":464.36,"Jun":792.03,"Jul":1174.91,"Aug":1739.94,"Sep":2019.23,"Oct":3695.82,"Nov":4246.04,"Dec":5159.18,"Jan":6182.59,"Feb":7112.19,"Mar":7661.22},"Edelweiss Mutual Fund":{"Sep":164.44,"Oct":276.39,"Nov":901.8,"Dec":2757.53,"Jan":3598.38,"Feb":3892.84,"Mar":3813.43},"Quant Mutual Fund":{"Nov":17.64,"Dec":141.4,"Jan":385.78,"Feb":436.14,"Mar":456.19},"Motilal Oswal Mutual Fund":{"Dec":117.26,"Feb":186.79,"Mar":804.06},"UTI Mutual Fund":{"Dec":101.76,"Jan":128.21,"Feb":144.89,"Mar":140.5},"Sundaram Mutual Fund":{"Jan":281.26,"Feb":364.63,"Mar":338.53},"Kotak Mahindra Mutual Fund":{"Mar":2.94}}},"FY 2024-25":{"aum":{"Apr":1627747805,"May":1677523223,"Jun":1814393792,"Jul":1928244796,"Aug":1979576061,"Sep":2032414606,"Oct":1977527189,"Nov":2011740754,"Dec":2030886055,"Jan":1954584332,"Feb":1824123896,"Mar":1950437963},"commission":{"Franklin Templeton Mutual Fund":{"Apr":67546.35,"May":68280.71,"Jun":74243.57,"Jul":82955.02,"Aug":85771.33,"Sep":90791.07,"Oct":91695.96,"Nov":95062.75,"Dec":89281.36,"Jan":95948.96,"Feb":93589.46,"Mar":81770.78},"Bandhan Mutual Fund":{"Apr":125699.47,"May":127216.16,"Jun":136024.87,"Jul":143300.19,"Aug":151689.6,"Sep":153537.28,"Oct":156418.3,"Nov":160178.1,"Dec":151909.32,"Jan":162825.38,"Feb":156063.55,"Mar":134591.11},"ICICI Prudential Mutual Fund":{"Apr":129703.54,"May":127749.46,"Jun":136278.79,"Jul":136885.33,"Aug":154001.34,"Sep":172522.53,"Oct":172583.34,"Nov":173409.03,"Dec":162487.53,"Jan":169396.88,"Feb":163728.87,"Mar":148155.31},"Tata Mutual Fund":{"Apr":84161.46,"May":85202.23,"Jun":152191.67,"Jul":103913.69,"Aug":106689.85,"Sep":109501.34,"Oct":111824.91,"Nov":116274.52,"Dec":112409.87,"Jan":129078.85,"Feb":124056.7,"Mar":108108.47},"Nippon India Mutual Fund":{"Apr":152551.3,"May":150366.7,"Jun":167166.36,"Jul":183291.27,"Aug":183834.12,"Sep":185327.55,"Oct":330539.39,"Nov":48839.52,"Dec":184295.01,"Jan":193423.31,"Feb":186222.25,"Mar":160940.94},"Invesco Mutual Fund":{"Apr":157514.64,"May":193587.19,"Jun":180981.17,"Jul":180294.28,"Aug":195063.1,"Sep":199206.74,"Oct":201855.46,"Nov":203585.23,"Dec":191860.79,"Jan":206178.14,"Feb":195474.42,"Mar":166347.46},"Axis Mutual Fund":{"Apr":40265.68,"May":40655.82,"Jun":45502.26,"Jul":46207.25,"Aug":48955.92,"Sep":48645.55,"Oct":55675.63,"Nov":61851.08,"Dec":58841.43,"Jan":67417.58,"Feb":67436.34,"Mar":59081.86},"HDFC Mutual Fund":{"Apr":137963.8,"May":134474.91,"Jun":158392.53,"Jul":182772.75,"Aug":179419.28,"Sep":174292.61,"Oct":173773.81,"Nov":177405.92,"Dec":168772.45,"Jan":178702.99,"Feb":171034.99,"Mar":149674.16},"Aditya Birla Sun Life Mutual Fund":{"Apr":137964.5,"May":137395.68,"Jun":147555.58,"Jul":163847.74,"Aug":166579.17,"Sep":168772.92,"Oct":165508.7,"Nov":169796.46,"Dec":159789.66,"Jan":168806.53,"Feb":162537.73,"Mar":140042.99},"DSP Mutual Fund":{"Apr":30921.4,"May":30899.31,"Jun":33166.51,"Jul":34653.05,"Aug":37135.76,"Sep":37051.5,"Oct":32485.84,"Nov":33508.84,"Dec":31823.82,"Jan":35903.69,"Feb":37119.68,"Mar":32628.19},"Mirae Asset Mutual Fund":{"Apr":43450.55,"May":43940.83,"Jun":47154.79,"Jul":49323.69,"Aug":54623.84,"Sep":57847.63,"Oct":57101.08,"Nov":59005.47,"Dec":56183.48,"Jan":60049.94,"Feb":58317.27,"Mar":53141.44},"PPFAS Mutual Fund":{"Apr":4772.32,"May":4544.16,"Jun":5195.7,"Jul":5180.64,"Aug":5696.43,"Sep":6448.87,"Oct":7079.98,"Nov":8212.61,"Dec":8498.95,"Jan":9507.78,"Feb":9700.56,"Mar":9004.27},"SBI Mutual Fund":{"Apr":8740.75,"May":8634.06,"Jun":9462.33,"Jul":11679.41,"Aug":14393.4,"Sep":18071.41,"Oct":22535.45,"Nov":25101.75,"Dec":25601.15,"Jan":28864.42,"Feb":29906.56,"Mar":26266.86},"Edelweiss Mutual Fund":{"Apr":5095.36,"May":5339.67,"Jun":5765.98,"Jul":6095.5,"Aug":6808.86,"Sep":13218.48,"Oct":13003.45,"Nov":14181.78,"Dec":13583.67,"Jan":14710.95,"Feb":13979.9,"Mar":12761.82},"Quant Mutual Fund":{"Apr":509.61,"May":535.05,"Jun":627.19,"Jul":919.77,"Aug":1019.22,"Sep":1040.53,"Oct":1043.15,"Nov":1064.46,"Dec":1006.14,"Jan":1065.08,"Feb":1048.86,"Mar":929.45},"UTI Mutual Fund":{"Apr":174.78,"May":224.26,"Jun":237.82,"Jul":247.8,"Aug":276.55,"Sep":284.92,"Oct":291.9,"Nov":350.89,"Dec":334.38,"Jan":363.15,"Feb":354.44,"Mar":310.29},"Sundaram Mutual Fund":{"Apr":362.0,"May":360.29,"Jun":379.59,"Jul":388.59,"Aug":423.39,"Sep":437.86,"Oct":450.93,"Nov":454.35,"Dec":418.48,"Jan":442.81,"Feb":428.28,"Mar":372.14},"Motilal Oswal Mutual Fund":{"Apr":1061.13,"May":1151.97,"Jun":1244.53,"Jul":1309.15,"Aug":1484.14,"Sep":2164.02,"Oct":3119.58,"Nov":3330.65,"Dec":3275.96,"Jan":3750.16,"Feb":3661.34,"Mar":3224.16},"Kotak Mahindra Mutual Fund":{"Apr":23.37,"May":57.52,"Jun":56.06,"Jul":189.63,"Aug":289.46,"Sep":329.78,"Oct":378.19,"Nov":407.85,"Dec":893.05,"Jan":1539.13,"Feb":1630.77,"Mar":1454.16},"PGIM India Mutual Fund":{"Sep":123.85,"Oct":219.38,"Dec":144.29,"Jan":132.59,"Feb":128.31,"Mar":110.62},"HSBC Mutual Fund":{"Oct":1497.14,"Nov":7064.0,"Dec":7053.47,"Jan":7621.91,"Feb":7238.98,"Mar":6207.95}}},"FY 2025-26":{"aum":{"Apr":2019749119,"May":2114737804,"Jun":2185305064,"Jul":2170065813,"Aug":2159677802,"Sep":2195412865,"Oct":2295050579,"Nov":2320684771,"Dec":2321006464,"Jan":2279616500,"Feb":2330675028,"Mar":2111101673},"commission":{"Franklin Templeton Mutual Fund":{"Apr":89972.82,"May":91692.73,"Jun":100672.69,"Jul":100195.17,"Aug":103309.29,"Sep":101971.93,"Oct":101121.68,"Nov":106691.27,"Dec":103923.87,"Jan":115096.29,"Feb":114799.35,"Mar":104847.86},"Bandhan Mutual Fund":{"Apr":146715.2,"May":146050.8,"Jun":158498.74,"Jul":159221.66,"Aug":165079.12,"Sep":163354.87,"Oct":159624.98,"Nov":167636.09,"Dec":164124.49,"Jan":169643.56,"Feb":166492.15,"Mar":151581.91},"ICICI Prudential Mutual Fund":{"Apr":163382.92,"May":163675.06,"Jun":175490.85,"Jul":174467.72,"Aug":180382.73,"Sep":178691.07,"Oct":177174.93,"Nov":185324.34,"Dec":181514.34,"Jan":187572.44,"Feb":185374.35,"Mar":169486.94},"Tata Mutual Fund":{"Apr":119010.21,"May":119474.41,"Jun":231763.36,"Jul":130784.91,"Aug":138590.59,"Sep":137862.1,"Oct":136619.96,"Nov":143916.47,"Dec":141233.48,"Jan":148033.08,"Feb":147453.5,"Mar":134753.44},"Nippon India Mutual Fund":{"Apr":179261.93,"May":181285.69,"Jun":198182.58,"Jul":198637.13,"Aug":202864.88,"Sep":202129.03,"Oct":201474.94,"Nov":212358.69,"Dec":209490.16,"Jan":216760.93,"Feb":212995.36,"Mar":196748.09},"Invesco Mutual Fund":{"Apr":179245.85,"May":179278.08,"Jun":196165.01,"Jul":198810.58,"Aug":207611.25,"Sep":203673.66,"Oct":198982.98,"Nov":208213.01,"Dec":201852.92,"Jan":205799.64,"Feb":199570.92,"Mar":181307.14},"Axis Mutual Fund":{"Apr":65319.6,"May":66171.95,"Jun":72401.78,"Jul":72659.25,"Aug":77428.59,"Sep":83182.32,"Oct":83525.57,"Nov":88923.15,"Dec":86563.5,"Jan":89535.08,"Feb":89136.47,"Mar":82046.62},"HDFC Mutual Fund":{"Apr":164452.75,"May":160593.43,"Jun":172916.58,"Jul":170753.08,"Aug":175246.6,"Sep":169588.45,"Oct":166636.33,"Nov":177012.56,"Dec":173048.41,"Jan":177893.83,"Feb":176356.48,"Mar":159349.08},"Aditya Birla Sun Life Mutual Fund":{"Apr":153483.6,"May":158422.73,"Jun":167760.25,"Jul":166110.77,"Aug":173778.84,"Sep":170166.42,"Oct":166551.16,"Nov":172535.35,"Dec":168725.3,"Jan":173500.49,"Feb":172170.69,"Mar":154729.51},"DSP Mutual Fund":{"Apr":36337.58,"May":36204.35,"Jun":41377.79,"Jul":41764.89,"Aug":47269.82,"Sep":48625.97,"Oct":49673.31,"Nov":55614.76,"Dec":58743.16,"Jan":62873.49,"Feb":65177.86,"Mar":61116.64},"Mirae Asset Mutual Fund":{"Apr":58431.49,"May":59934.43,"Jun":66954.48,"Jul":67572.43,"Aug":71643.17,"Sep":71552.31,"Oct":70943.31,"Nov":75165.33,"Dec":76580.1,"Jan":79612.34,"Feb":79906.85,"Mar":73458.01},"PPFAS Mutual Fund":{"Apr":10074.92,"May":9467.95,"Jun":10429.49,"Jul":9757.2,"Aug":10165.61,"Sep":10389.13,"Oct":10383.33,"Nov":11754.49,"Dec":11825.88,"Jan":12674.18,"Feb":12926.75,"Mar":12219.01},"SBI Mutual Fund":{"Apr":28394.33,"May":28014.75,"Jun":31006.57,"Jul":33070.88,"Aug":35779.87,"Sep":35649.51,"Oct":34625.98,"Nov":35615.98,"Dec":34848.03,"Jan":36166.96,"Feb":36100.06,"Mar":33219.77},"Edelweiss Mutual Fund":{"Apr":15896.95,"May":16232.31,"Jun":18041.41,"Jul":17825.68,"Aug":18049.72,"Sep":17910.58,"Oct":17599.57,"Nov":19389.26,"Dec":19622.48,"Jan":20586.29,"Feb":20535.1,"Mar":19937.86},"Quant Mutual Fund":{"Apr":1044.28,"May":1059.26,"Jun":1170.32,"Jul":1133.02,"Aug":956.11,"Sep":911.78,"Oct":908.25,"Nov":1032.36,"Dec":994.97,"Jan":1043.09,"Feb":1035.47,"Mar":905.26},"UTI Mutual Fund":{"Apr":343.47,"May":339.62,"Jun":347.53,"Jul":359.61,"Aug":387.34,"Sep":387.26,"Oct":390.0,"Nov":415.29,"Dec":414.24,"Jan":434.28,"Feb":436.11,"Mar":402.52},"Sundaram Mutual Fund":{"Apr":394.89,"May":399.71,"Jun":429.75,"Jul":422.32,"Aug":440.84,"Sep":440.73,"Oct":437.86,"Nov":452.9,"Dec":438.77,"Jan":442.29,"Feb":426.03,"Mar":380.47},"Motilal Oswal Mutual Fund":{"Apr":3719.03,"May":3738.25,"Jun":4127.55,"Jul":4220.28,"Aug":4533.14,"Sep":4562.31,"Oct":4599.61,"Nov":5988.68,"Dec":8660.68,"Jan":9000.82,"Feb":8794.6,"Mar":7916.55},"Kotak Mahindra Mutual Fund":{"Apr":1629.62,"May":2025.17,"Jun":3640.58,"Jul":3657.51,"Aug":4224.96,"Sep":5061.17,"Oct":5620.29,"Nov":6030.51,"Dec":5998.23,"Jan":6202.21,"Feb":6140.14,"Mar":5749.81},"HSBC Mutual Fund":{"Apr":7612.21,"May":7851.42,"Jun":9047.64,"Jul":9278.7,"Aug":9795.31,"Sep":9659.97,"Oct":9709.51,"Nov":10677.77,"Dec":11338.32,"Jan":12451.61,"Feb":13614.85,"Mar":13654.12},"PGIM India Mutual Fund":{"Apr":123.36,"May":127.22,"Jun":141.47,"Jul":147.65,"Aug":161.85,"Sep":163.3,"Oct":163.41,"Nov":172.66,"Dec":169.0,"Jan":174.3,"Feb":172.64,"Mar":159.94}}},"FY 2026-27":{"aum":{"Apr":2366169042,"May":2401387271,"Jun":2494586089,"Jul":2560557507},"commission":{"Axis Mutual Fund":{"Apr":86268.79,"May":84279.44,"Jun":91096.79},"Mirae Asset Mutual Fund":{"Apr":76489.74,"May":75555.3,"Jun":80298.02},"PGIM India Mutual Fund":{"Apr":170.0,"May":175.1,"Jun":194.36},"UTI Mutual Fund":{"Apr":380.45,"May":319.79,"Jun":350.79},"Aditya Birla Sun Life Mutual Fund":{"Apr":161708.75,"May":158642.78,"Jun":169946.18},"HSBC Mutual Fund":{"Apr":14705.93,"May":15614.69,"Jun":17636.11},"Invesco Mutual Fund":{"Apr":187307.18,"May":183449.03,"Jun":197057.83},"Nippon India Mutual Fund":{"Apr":206392.47,"May":199858.46,"Jun":216753.52},"Quant Mutual Fund":{"Apr":941.32,"May":942.07,"Jun":733.35},"Sundaram Mutual Fund":{"Apr":385.97,"May":374.85,"Jun":394.55},"Bandhan Mutual Fund":{"Apr":158195.88,"May":160088.07,"Jun":173121.34},"DSP Mutual Fund":{"Apr":65061.83,"May":65810.93,"Jun":72504.68},"Edelweiss Mutual Fund":{"Apr":21005.29,"May":20364.31,"Jun":21851.56},"HDFC Mutual Fund":{"Apr":163636.65,"May":151255.03,"Jun":159249.44},"ICICI Prudential Mutual Fund":{"Apr":176309.78,"May":167106.26,"Jun":176624.33},"PPFAS Mutual Fund":{"Apr":12696.98,"May":12343.37,"Jun":13527.09},"Motilal Oswal Mutual Fund":{"Apr":8238.43,"May":8408.28,"Jun":9100.64},"Tata Mutual Fund":{"Apr":139926.69,"May":142024.94,"Jun":241461.78},"SBI Mutual Fund":{"Apr":34655.16,"May":33715.3,"Jun":35716.57},"Franklin Templeton Mutual Fund":{"Apr":109690.77,"May":108623.49,"Jun":118132.59},"Kotak Mahindra Mutual Fund":{"Apr":6262.49,"May":7194.31,"Jun":7953.78}}}};

const FY_MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const FY_KEYS = Object.keys(RAW_DATA).sort();

const fmt = (num) => {
  if (num == null || num === 0) return "–";
  return "₹" + num.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const fmtCr = (num) => {
  if (num == null) return "–";
  return "₹" + (num / 10000000).toFixed(2) + " Cr";
};

const fmtLakh = (num) => {
  if (num == null || num === 0) return "–";
  if (num >= 100000) return "₹" + (num / 100000).toFixed(2) + "L";
  return "₹" + num.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const CommissionDisclosure = () => {
  const [activeFY, setActiveFY] = useState(FY_KEYS[FY_KEYS.length - 1]);
  const [search, setSearch] = useState("");

  const fyData = RAW_DATA[activeFY];
  const hasCommission = fyData.commission && Object.keys(fyData.commission).length > 0;

  // Sort AMCs by total descending
  const sortedAMCs = useMemo(() => {
    if (!hasCommission) return [];
    return Object.entries(fyData.commission)
      .map(([name, months]) => ({
        name,
        months,
        total: Object.values(months).reduce((s, v) => s + v, 0),
      }))
      .sort((a, b) => b.total - a.total);
  }, [activeFY, hasCommission]);

  const filteredAMCs = useMemo(() => {
    if (!search.trim()) return sortedAMCs;
    const q = search.toLowerCase();
    return sortedAMCs.filter((a) => a.name.toLowerCase().includes(q));
  }, [sortedAMCs, search]);

  // Monthly totals
  const monthlyTotals = useMemo(() => {
    const totals = {};
    FY_MONTHS.forEach((m) => {
      totals[m] = filteredAMCs.reduce((s, a) => s + (a.months[m] || 0), 0);
    });
    totals.grand = filteredAMCs.reduce((s, a) => s + a.total, 0);
    return totals;
  }, [filteredAMCs]);

  return (
    <section className="bg-background text-text min-h-screen py-16 px-4 md:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Commission Disclosure
        </h1>
        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-8">
          All mutual fund investments facilitated through Maurya Shares and Stock Brokers Pvt. Ltd. are processed under 
          <span className="text-white font-medium"> Regular Plan</span>, which involves payment of trail commission by the 
          respective AMC to the distributor. The details of trail commission received (before GST) from each AMC are disclosed 
          below, as mandated under AMFI Code of Conduct for Mutual Fund Distributors.
        </p>

        {/* FY Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {FY_KEYS.map((fy) => (
            <button
              key={fy}
              onClick={() => { setActiveFY(fy); setSearch(""); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFY === fy
                  ? "bg-primary text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {fy}
            </button>
          ))}
        </div>

        {/* AUM Summary Bar */}
        {fyData.aum && Object.keys(fyData.aum).length > 0 && (
          <div className="mb-6 bg-gray-900 rounded-lg p-4 border border-gray-800">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 tracking-wide uppercase">
              Assets Under Management (AUM) — {activeFY}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {FY_MONTHS.map((m) => (
                      <th key={m} className={`px-2 py-1 text-center font-medium ${fyData.aum[m] != null ? "text-gray-300" : "text-gray-600"}`}>
                        {m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {FY_MONTHS.map((m) => (
                      <td key={m} className="px-2 py-1 text-center text-primary font-semibold whitespace-nowrap">
                        {fyData.aum[m] != null ? fmtCr(fyData.aum[m]) : "–"}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Commission Table or No-Data State */}
        {hasCommission ? (
          <>
            {/* Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search AMC..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg text-sm w-full max-w-xs focus:outline-none focus:border-primary"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-800">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left px-3 py-3 text-gray-300 font-semibold sticky left-0 bg-gray-900 z-10 min-w-[200px]">
                      AMC Name
                    </th>
                    {FY_MONTHS.map((m) => (
                      <th key={m} className="px-2 py-3 text-right text-gray-400 font-medium min-w-[90px]">
                        {m}
                      </th>
                    ))}
                    <th className="px-3 py-3 text-right text-primary font-semibold min-w-[100px]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAMCs.map((amc, idx) => (
                    <tr
                      key={amc.name}
                      className={`border-t border-gray-800 ${idx % 2 === 0 ? "bg-black" : "bg-gray-950"} hover:bg-gray-900 transition-colors`}
                    >
                      <td className="px-3 py-2.5 text-white font-medium sticky left-0 z-10" style={{ backgroundColor: idx % 2 === 0 ? "#000" : "rgb(2,6,23)" }}>
                        {amc.name}
                      </td>
                      {FY_MONTHS.map((m) => (
                        <td key={m} className="px-2 py-2.5 text-right text-gray-300 whitespace-nowrap tabular-nums">
                          {amc.months[m] ? fmtLakh(amc.months[m]) : "–"}
                        </td>
                      ))}
                      <td className="px-3 py-2.5 text-right text-primary font-semibold whitespace-nowrap tabular-nums">
                        {fmtLakh(amc.total)}
                      </td>
                    </tr>
                  ))}

                  {/* Monthly Total Row */}
                  <tr className="border-t-2 border-primary bg-gray-900">
                    <td className="px-3 py-3 text-primary font-bold sticky left-0 bg-gray-900 z-10">
                      Monthly Total
                    </td>
                    {FY_MONTHS.map((m) => (
                      <td key={m} className="px-2 py-3 text-right text-primary font-bold whitespace-nowrap tabular-nums">
                        {monthlyTotals[m] > 0 ? fmtLakh(monthlyTotals[m]) : "–"}
                      </td>
                    ))}
                    <td className="px-3 py-3 text-right text-primary font-bold whitespace-nowrap tabular-nums">
                      {fmtLakh(monthlyTotals.grand)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              All amounts are in Indian Rupees (₹) and represent trail commission received before GST. 
              "L" denotes Lakhs. Source: GST sales invoices raised to respective AMCs.
              {activeFY === "FY 2026-27" && " Data is partial — only available months are shown."}
            </p>
          </>
        ) : (
          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
            <p className="text-gray-400 text-lg">
              Commission data for {activeFY} is not yet available on this page.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              AUM data is shown above. Commission details will be updated shortly.
            </p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed">
            Maurya Shares and Stock Brokers Private Limited is an AMFI-registered Mutual Fund Distributor (ARN-112272). 
            Commission is received in the form of trail commission only, as per SEBI regulations. No upfront commission or 
            incentive in any form other than trail commission is received. Mutual Fund investments are subject to market risks. 
            Read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommissionDisclosure;
