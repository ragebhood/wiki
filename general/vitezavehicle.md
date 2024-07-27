<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Calculator de Viteză pentru Mașini</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: center;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <h1>Calculator de Viteză pentru Mașini</h1>
    <p>Acest document conține o listă de mașini și vitezele lor la diferite stadii de modificare.</p>

    <h2>Formula</h2>
    <ol>
        <li><strong>Viteză Stock (km/h)</strong>: Viteza inițială a mașinii.</li>
        <li><strong>Stage 1</strong>: Crește viteza stock cu 10%.</li>
        <li><strong>Stage 2</strong>: Crește viteza rezultată din stage 1 cu încă 10%.</li>
        <li><strong>Stage 3</strong>: Crește viteza rezultată din stage 2 cu încă 10%.</li>
        <li><strong>Stage 4</strong>: Crește viteza rezultată din stage 3 cu încă 10%.</li>
    </ol>

    <h2>Tabel cu Viteze</h2>
    <table>
        <thead>
            <tr>
                <th>Mașină</th>
                <th>Viteza Stock</th>
                <th>Stage 1</th>
                <th>Stage 2</th>
                <th>Stage 3</th>
                <th>Stage 4</th>
            </tr>
        </thead>
        <tbody id="car-speeds">
            <!-- Rândurile vor fi populate automat -->
        </tbody>
    </table>

    <script>
        function calculateSpeeds(stockSpeed) {
            let stage1 = stockSpeed + 10.0;
            let stage2 = stage1 + 25.0;
            let stage3 = stage2 + 50;
            let stage4 = stage3;
            return [stage1, stage2, stage3, stage4];
        }

        function populateTable() {
            // Datele vehiculului
            const data = [
               { name: "Cheetah2", stockSpeed: 182 },
                { name: "Bmx", stockSpeed: 58 },
                { name: "Cruiser", stockSpeed: 58 },
                { name: "Scorcher", stockSpeed: 61 },
                { name: "Faggio", stockSpeed: 125 },
                { name: "Manchez", stockSpeed: 175 },
                { name: "Zombieb", stockSpeed: 165 },
                { name: "Double", stockSpeed: 172 },
                { name: "Bati2", stockSpeed: 189 },
                { name: "Neon", stockSpeed: 170 },
                { name: "Bati", stockSpeed: 189 },
                { name: "Dubsta", stockSpeed: 155 },
                { name: "Blazer", stockSpeed: 149 },
                { name: "Rancherxl", stockSpeed: 151 },
                { name: "Bfinjection", stockSpeed: 170 },
                { name: "Asbo", stockSpeed: 145 },
                { name: "Praire", stockSpeed: 154 },
                { name: "Primo", stockSpeed: 160 },
                { name: "Warrener", stockSpeed: 155 },
                { name: "Tailgater", stockSpeed: 160 },
                { name: "Premier", stockSpeed: 155 },
                { name: "Asea", stockSpeed: 160 },
                { name: "Stratum", stockSpeed: 160 },
                { name: "Intruder", stockSpeed: 162 },
                { name: "Glendale", stockSpeed: 160 },
                { name: "Mesa", stockSpeed: 147 },
                { name: "Baller", stockSpeed: 155 },
                { name: "Landstalker", stockSpeed: 155 },
                { name: "Habanero", stockSpeed: 158 },
                { name: "Huntley", stockSpeed: 166 },
                { name: "Toros", stockSpeed: 190 },
                { name: "Voodoo", stockSpeed: 152 },
                { name: "Buccaneer", stockSpeed: 173 },
                { name: "Blade", stockSpeed: 170 },
                { name: "Hustler", stockSpeed: 168 },
                { name: "Stalion", stockSpeed: 168 },
                { name: "Impaler", stockSpeed: 179 },
                { name: "Gauntlet", stockSpeed: 175 },
                { name: "Dominator", stockSpeed: 184 },
                { name: "Banshee2", stockSpeed: 178 },
                { name: "Sc1", stockSpeed: 185 },
                { name: "Infernus", stockSpeed: 185 },
                { name: "Cheetah", stockSpeed: 190 },
                { name: "Reaper", stockSpeed: 185 },
                { name: "Bullet", stockSpeed: 185 },
                { name: "Furia", stockSpeed: 186 },
                { name: "Cyclone", stockSpeed: 183 },
                { name: "Tempesta", stockSpeed: 185 },
                { name: "Osiris", stockSpeed: 185 },
                { name: "Zentorno", stockSpeed: 188 },
     	        { name: "Vacca", stockSpeed: 185 },
           		{ name: "Nero", stockSpeed: 192 },
           		{ name: "Adder", stockSpeed: 202 },
            	{ name: "Casco", stockSpeed: 180 },
            	{ name: "Monroe", stockSpeed: 190 },
            	{ name: "Buffalo", stockSpeed: 172 },
            	{ name: "Coquette", stockSpeed: 186 },
            	{ name: "Banshee", stockSpeed: 175 },
            	{ name: "Alpha", stockSpeed: 180 },
            	{ name: "Turismo2", stockSpeed: 195 },
            	{ name: "Pariah", stockSpeed: 184 },
            	{ name: "Carbonizzare", stockSpeed: 182 },
            	{ name: "Drafter", stockSpeed: 179 },
            	{ name: "Specter", stockSpeed: 190 },
            	{ name: "Seven70", stockSpeed: 190 },
           		{ name: "Lynx", stockSpeed: 190 },
            	{ name: "Surano", stockSpeed: 190 },
            	{ name: "Elegy", stockSpeed: 185 },
            	{ name: "Hotring", stockSpeed: 185 },
            	{ name: "Jugular", stockSpeed: 200 },
            	{ name: "Bf400", stockSpeed: 195 },
            	{ name: "Enduro", stockSpeed: 158 },
            	{ name: "Shotaro", stockSpeed: 185 },
            	{ name: "Everon", stockSpeed: 160 },
            	{ name: "Freecrawler", stockSpeed: 148 },
            	{ name: "Blista", stockSpeed: 157 },
            	{ name: "Novak", stockSpeed: 180 },
            	{ name: "Xls", stockSpeed: 160 },
            	{ name: "Dominator3", stockSpeed: 164 },
            	{ name: "Gaunlet2", stockSpeed: 175 },
            	{ name: "Emerus", stockSpeed: 190 },
            	{ name: "Nero2", stockSpeed: 190 },
            	{ name: "Tezeract", stockSpeed: 202 },
            	{ name: "Flashgt", stockSpeed: 170 },
            	{ name: "Imorgon", stockSpeed: 167 },
            	{ name: "Neo", stockSpeed: 190 },
            	{ name: "Jester2", stockSpeed: 180 },
            	{ name: "Vortex", stockSpeed: 170 },
           		{ name: "Zombiea", stockSpeed: 165 },
            	{ name: "Blazer4", stockSpeed: 140 },
            	{ name: "Bhatonmartvantage", stockSpeed: 245 },
            	{ name: "Bhwx6mf96", stockSpeed: 230 },
            	{ name: "Bhwasakinjh2", stockSpeed: 240 },
            	{ name: "Bhudirs5", stockSpeed: 210 },
            	{ name: "Bhlaren765lt", stockSpeed: 255 },
            	{ name: "Bhwm2g87", stockSpeed: 215 },
            	{ name: "Bhrrarifxxkevo", stockSpeed: 255 },
            	{ name: "Bhagenmk6", stockSpeed: 190 },
            	{ name: "Bhinijrgp", stockSpeed: 187 },
            	{ name: "Bhndas2000", stockSpeed: 200 },
                { name: "Bhazdarxspirit", stockSpeed: 205 },
                { name: "Bhishileix", stockSpeed: 200 },
                { name: "Bhugeotcc307", stockSpeed: 173 },
                { name: "Bhenzc63amg", stockSpeed: 220 },
                { name: "Bhorschetaytrs", stockSpeed: 230 },
                { name: "Bhwf10xd", stockSpeed: 205 },
                { name: "Bhws7lexdrv", stockSpeed: 220 },
                { name: "Bhertsclass500", stockSpeed: 227 },
                { name: "Bheslamsplaid", stockSpeed: 200 },
                { name: "Bhorscemacpr", stockSpeed: 211 },
                { name: "Bhodasuperb", stockSpeed: 188 },
                { name: "Schlagen", stockSpeed: 190 },
                { name: "Rebla", stockSpeed: 195 },
                { name: "Panto", stockSpeed: 140 },
                { name: "Growler", stockSpeed: 170 },
                { name: "Visione", stockSpeed: 188 },
                { name: "Bhws1000rr", stockSpeed: 215 },
                { name: "Vstr", stockSpeed: 190 },
                { name: "Tyrant", stockSpeed: 205 },
                { name: "Hakuchou", stockSpeed: 185 },
                { name: "Hakuchou2", stockSpeed: 185 },
                { name: "Cliffhanger", stockSpeed: 182 },
                { name: "Gargoyle", stockSpeed: 180 },
                { name: "Baller3", stockSpeed: 168 },
                { name: "T20", stockSpeed: 190 },
                { name: "Brawler", stockSpeed: 173 },
                { name: "Mesa2", stockSpeed: 130 },
                { name: "Sentinel3", stockSpeed: 160 },
                { name: "Bhuster", stockSpeed: 155 },
                { name: "Bhcamry", stockSpeed: 180 },
                { name: "Bhodgearger", stockSpeed: 225 },
                { name: "Bhwi8", stockSpeed: 215 },
                { name: "Bhertsgt63s", stockSpeed: 235 },
                { name: "Sa_infernus", stockSpeed: 195 },
                { name: "Nrg500sa", stockSpeed: 190 },
                { name: "Sultansa", stockSpeed: 160 },
                { name: "Bholetcorvettec7", stockSpeed: 230 },
                { name: "Jester3", stockSpeed: 175 },
                { name: "Bholf4", stockSpeed: 165 },
                { name: "Bholos60", stockSpeed: 187 },
                { name: "Bhert45", stockSpeed: 177 },
                { name: "Bhstanggt", stockSpeed: 200 },
                { name: "Bhudiq8", stockSpeed: 220 },
                { name: "Bhudisbrs3", stockSpeed: 215 },
                { name: "Bhchetbs", stockSpeed: 225 },
                { name: "Comet5", stockSpeed: 190 },
                { name: "Bhnaultrs", stockSpeed: 178 },
                { name: "Bhordfocusrs", stockSpeed: 185 },
                { name: "Bhwe46", stockSpeed: 190 },
                { name: "Bhupra", stockSpeed: 195 },
                { name: "Bhswagenps", stockSpeed: 165 },
                { name: "Bhwx6", stockSpeed: 160 },
                { name: "Raiden", stockSpeed: 177 },
                { name: "Slamvan3", stockSpeed: 156 },
                { name: "Bhishievox", stockSpeed: 200 },
                { name: "Omnis", stockSpeed: 175 },
                { name: "Ellie", stockSpeed: 160 },
                { name: "Bhahawork", stockSpeed: 161 },
                { name: "Bhbuswork", stockSpeed: 109 },
                { name: "Bhertwork", stockSpeed: 132 },
                { name: "Bhlumberwork", stockSpeed: 176 },
                { name: "Bhtrashwork", stockSpeed: 140 },
                { name: "Bhtractorwork", stockSpeed: 79 },
                { name: "Bhiniaventadorlp700", stockSpeed: 248 },
                { name: "Bagger", stockSpeed: 130 },
                { name: "Brioso", stockSpeed: 165 },
                { name: "Bhfaromeogiulia21", stockSpeed: 225 },
                { name: "Bhsakizx10r", stockSpeed: 220 },
                { name: "Bhssangtr17", stockSpeed: 230 },
                { name: "Bhwm4competition21", stockSpeed: 225 },
                { name: "Krieger", stockSpeed: 178 },
                { name: "Khamelion", stockSpeed: 155 },
                { name: "Paragon", stockSpeed: 161 },
                { name: "Bhinioopers", stockSpeed: 177 },
                { name: "Bhondacivictyper", stockSpeed: 200 },
                { name: "Bhenzegle53c", stockSpeed: 215 },
                { name: "Bhudirs6c8", stockSpeed: 235 },
                { name: "Thrax", stockSpeed: 192 },
                { name: "Prototipo", stockSpeed: 192 },
                { name: "Longfin", stockSpeed: 190 },
                { name: "Bhatonmartdb11", stockSpeed: 210 },
                { name: "Sheava", stockSpeed: 180 },
                { name: "Taipan", stockSpeed: 190 },
                { name: "Fmj", stockSpeed: 190 },
                { name: "Locust", stockSpeed: 180 },
                { name: "Italigto", stockSpeed: 191 },
                { name: "Vectre", stockSpeed: 170 },
                { name: "Coquette4", stockSpeed: 191 },
                { name: "Bhguarftyper22", stockSpeed: 220 },
                { name: "Ruston", stockSpeed: 171 },
                { name: "Bhyacht3b", stockSpeed: 110 },
                { name: "Sheva", stockSpeed: 173 },
                { name: "Bhwm4g83", stockSpeed: 220 },
                { name: "Bhagenroccor", stockSpeed: 180 },
                { name: "Bhota4rnpro", stockSpeed: 192 },
                { name: "Bhstang63", stockSpeed: 205 },
                { name: "Bhntleycontgt", stockSpeed: 240 },
                { name: "Bhenzeg63amg", stockSpeed: 220 },
                { name: "Bhlx570", stockSpeed: 205 },
                { name: "Bhudirs7rabt", stockSpeed: 240 },
                { name: "Bhwm8", stockSpeed: 235 },
                { name: "Zorrusso", stockSpeed: 178 },
                { name: "Bhundaisantafe", stockSpeed: 165 },
                { name: "Bhswagenregr50", stockSpeed: 180 },
                { name: "Bhotalandcruhat200", stockSpeed: 189 },
                { name: "Bhmmerevgmc", stockSpeed: 210 },
                { name: "Bhoversvrs", stockSpeed: 215 },
                { name: "Bhentleybentayst", stockSpeed: 230 },
                { name: "Bhupraformvz5", stockSpeed: 210 },
                { name: "Bherts63cmatic", stockSpeed: 245 },
                { name: "Bhurusperf23", stockSpeed: 245 },
                { name: "Bhudir820", stockSpeed: 245 },
                { name: "Bhotatacoma24", stockSpeed: 200 },
                { name: "Bhotasupra", stockSpeed: 240 },
                { name: "Bholvoxc90", stockSpeed: 205 },
                { name: "Bhodgechallengersrt", stockSpeed: 230 },
                { name: "bhssanskylinegtr", stockSpeed: 235 },
                { name: "bhertcls63samg15", stockSpeed: 232 },
                { name: "bhudia8lh22", stockSpeed: 220 },
                { name: "bhorschegt2rs17", stockSpeed: 250 },
                { name: "bhubaruwrxsti12", stockSpeed: 225 },
                { name: "bhchevocam19", stockSpeed: 226 },
                { name: "bhwm5e39", stockSpeed: 212 },
                { name: "bhwm5cs22", stockSpeed: 235 },
                { name: "bhwm3e30", stockSpeed: 223 },
                { name: "bhswagenpassatb8", stockSpeed: 205 },
                { name: "bhdillacct4vbw22", stockSpeed: 225 },
                { name: "bhwm5e60v2", stockSpeed: 173 },
                { name: "bhorschecayennegt22", stockSpeed: 230 },
                { name: "bhcatipanigalev4", stockSpeed: 260 },
                { name: "bhmcjavelinamx", stockSpeed: 233 },
                { name: "bhntleybatur24", stockSpeed: 245 },
                { name: "bhordgtmk2", stockSpeed: 255 },
                { name: "bhrleydavfb", stockSpeed: 215 },
                { name: "bhwx7g07", stockSpeed: 220 },
                { name: "bheslaroadster20", stockSpeed: 230 },
                { name: "bhswagengolfrmk75", stockSpeed: 223 },
                { name: "bhertgtr22", stockSpeed: 245 },
                { name: "bhotarav4pxse21", stockSpeed: 165 },
                { name: "bhudietrongt", stockSpeed: 230 },
                { name: "bhw760ig7024", stockSpeed: 230 },
                { name: "bhertglsbrabus800", stockSpeed: 230 },
                { name: "bhinihuracanperf18", stockSpeed: 250 },
                { name: "bhrrariportofino18", stockSpeed: 243 },
                { name: "bhotusevoragt430", stockSpeed: 234 },
                { name: "bhseratileventemansory", stockSpeed: 233 },
                { name: "bhwx7g0722", stockSpeed: 220 },
                { name: "bherte63sbrabus800", stockSpeed: 233 },
                { name: "bhordgtmk2", stockSpeed: 246 },
                { name: "bhntleybatur24", stockSpeed: 243 },
                { name: "bhcatipanigale43", stockSpeed: 240 },
                { name: "bhmcajavelinamx", stockSpeed: 240 },
                { name: "bhwx7g07", stockSpeed: 225 },
                { name: "bhrleydavfb", stockSpeed: 220 },
                { name: "bhgattiveyronvt", stockSpeed: 270 },
                { name: "bholarisrzrxpesp", stockSpeed: 200 },
                { name: "bhorschecarrera4sc911", stockSpeed: 240 },
                { name: "Futo", stockSpeed: 175 },
                { name: "Bhudirsq821", stockSpeed: 240 },
                { name: "Bhbarubrz2ts24", stockSpeed: 220 },
                { name: "Bhwm6e64c26", stockSpeed: 215 },
                { name: "Bhotaprius24", stockSpeed: 180 },
                { name: "Bhatonmartvalour24", stockSpeed: 247 },
                { name: "Bhahayzfr1m20", stockSpeed: 235 },
                { name: "Bhcidairsapphire23", stockSpeed: 227 },
                { name: "Bhseratimc202", stockSpeed: 250 },
                { name: "Bhoblem50022", stockSpeed: 245 },
                { name: "Bhatonmartdbx70723", stockSpeed: 240 },
                { name: "Bhuransxts22", stockSpeed: 230 },
                { name: "bhuscher16", stockSpeed: 225 },
                { name: "bhlxlfanur11", stockSpeed: 243 },
                { name: "bhodgeviper17", stockSpeed: 243 },
                { name: "bhwx5m", stockSpeed: 225 },
                { name: "bheepgrandchtr418", stockSpeed: 225 },
                { name: "bhesseyvenomgtsfe16", stockSpeed: 260 },
                { name: "bhondaciviceg6kev95", stockSpeed: 230 },
                { name: "bhordmustangbb24", stockSpeed: 238 },
                { name: "bhotasupragr20", stockSpeed: 240 },
                { name: "bhw330i20", stockSpeed: 235 }


            ];

            const tableBody = document.getElementById("car-speeds");
            data.forEach(car => {
                const speeds = calculateSpeeds(car.stockSpeed);
                const row = document.createElement("tr");

                const nameCell = document.createElement("td");
                nameCell.textContent = car.name;
                row.appendChild(nameCell);

                const stockSpeedCell = document.createElement("td");
                stockSpeedCell.textContent = `${car.stockSpeed} km/h`;
                row.appendChild(stockSpeedCell);

                speeds.forEach(speed => {
                    const cell = document.createElement("td");
                    cell.textContent = `${speed.toFixed(2)} km/h`;
                    row.appendChild(cell);
                });

                tableBody.appendChild(row);
            });
        }

        window.onload = populateTable;
    </script>
</body>
</html>
