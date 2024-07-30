function calculateSpeeds(stockSpeed) {
            console.log("calculateSpeeds a fost verificată.");
            let stage1 = stockSpeed * 1.10;
            let stage2 = stage1 * 1.10;
            let stage3 = stage2 * 1.10;
            let stage4 = stage3 * 1.10;
            return [stage1, stage2, stage3, stage4];
        }

        function populateTable() {
            console.log("Funcția populateTable a fost verificată.");
            const data = [
                { name: "Cheetah2", stockSpeed: 192 },
                { name: "Bmx", stockSpeed: 58 },
                { name: "Cruiser", stockSpeed: 58 },
                { name: "Scorcher", stockSpeed: 61 },
                { name: "Faggio", stockSpeed: 111 },
                { name: "Manchez", stockSpeed: 173 },
                { name: "Zombieb", stockSpeed: 168 },
                { name: "Double", stockSpeed: 183 },
                { name: "Bati2", stockSpeed: 189 },
                { name: "Neon", stockSpeed: 184 },
                { name: "Bati", stockSpeed: 185 },
                { name: "Dubsta", stockSpeed: 167 },
                { name: "Blazer", stockSpeed: 142 },
                { name: "Rancherxl", stockSpeed: 150 },
                { name: "Bfinjection", stockSpeed: 155 },
                { name: "Asbo", stockSpeed: 155 },
                { name: "Praire", stockSpeed: 167 },
                { name: "Primo", stockSpeed: 166 },
                { name: "Warrener", stockSpeed: 167 },
                { name: "Tailgater", stockSpeed: 168 },
                { name: "Premier", stockSpeed: 168 },
                { name: "Asea", stockSpeed: 169 },
                { name: "Stratum", stockSpeed: 169 },
                { name: "Intruder", stockSpeed: 171 },
                { name: "Glendale", stockSpeed: 171 },
                { name: "Mesa", stockSpeed: 154 },
                { name: "Baller", stockSpeed: 176 },
                { name: "Landstalker", stockSpeed: 158 },
                { name: "Habanero", stockSpeed: 156 },
                { name: "Huntley", stockSpeed: 175 },
                { name: "deity" ,stockSpeed: 173 },
                { name: "Toros", stockSpeed: 203 },
                { name: "torero2" ,stockSpeed: 214 },
                { name: "Voodoo", stockSpeed: 163 },
                { name: "Buccaneer", stockSpeed: 183 },
                { name: "Blade", stockSpeed: 180 },
                { name: "Hustler", stockSpeed: 200 },
                { name: "Stalion", stockSpeed: 182 },
                { name: "Impaler", stockSpeed: 186 },
                { name: "Gauntlet", stockSpeed: 204 },
                { name: "Gauntlet2" ,stockSpeed: 174 },
                { name: "Dominator", stockSpeed: 196 },
                { name: "Banshee2", stockSpeed: 176 },
                { name: "Sc1", stockSpeed: 195 },
                { name: "Infernus", stockSpeed: 187 },
                { name: "infernus2" ,stockSpeed: 197 },
                { name: "Cheetah", stockSpeed: 194 },
                { name: "Reaper", stockSpeed: 187 },
                { name: "Bullet", stockSpeed: 193 },
                { name: "Furia", stockSpeed: 197 },
                { name: "Cyclone", stockSpeed: 188 },
                { name: "Tempesta", stockSpeed: 193 },
                { name: "Osiris", stockSpeed: 200 },
                { name: "Zentorno", stockSpeed: 197 },
                { name: "Vacca", stockSpeed: 194 },
                { name: "Nero", stockSpeed: 203},
                { name: "Adder", stockSpeed: 203 },
                { name: "Casco", stockSpeed: 194 },
                { name: "Monroe", stockSpeed: 196 },
                { name: "Buffalo", stockSpeed: 171 },
                { name: "deviant" ,stockSpeed: 175 },
                { name: "buffalo4" ,stockSpeed: 202 },
                { name: "Coquette", stockSpeed: 190 },
                { name: "envisage" ,stockSpeed: 195 },
                { name: "Banshee", stockSpeed: 175 },
                { name: "Alpha", stockSpeed: 185},
                { name: "cypher" ,stockSpeed: 183 },
                { name: "Turismo2", stockSpeed: 196 },
                { name: "turismo3" ,stockSpeed: 200 },
                { name: "Pariah", stockSpeed: 206 },
                { name: "zion3" ,stockSpeed: 182 },
                { name: "Carbonizzare", stockSpeed: 190 },
                { name: "Drafter", stockSpeed: 200 },
                { name: "Specter", stockSpeed: 191 },
                { name: "Seven70", stockSpeed: 201 },
                { name: "Lynx", stockSpeed: 198 },
                { name: "Surano", stockSpeed: 188 },
                { name: "Elegy", stockSpeed: 182 },
                { name: "elegy2" ,stockSpeed: 190 },
                { name: "Hotring", stockSpeed: 187 },
                { name: "Jugular", stockSpeed: 201 },
                { name: "Bf400", stockSpeed: 168 },
                { name: "Enduro", stockSpeed: 144 },
                { name: "Shotaro", stockSpeed: 194 },
                { name: "Everon", stockSpeed: 176 },
                { name: "everon2" ,stockSpeed: 200 },
                { name: "Freecrawler", stockSpeed: 157 },
                { name: "Blista", stockSpeed: 167 },
                { name: "Novak", stockSpeed: 199 },
                { name: "Xls", stockSpeed: 169 },
                { name: "Dominator3", stockSpeed: 174 },
                { name: "r300" ,stockSpeed: 194 },
                { name: "dominator8" ,stockSpeed: 188 },
                { name: "dominator9" ,stockSpeed: 200 },
                { name: "dominator7" ,stockSpeed: 195 },
                { name: "Gaunlet2", stockSpeed: 175 },
                { name: "Emerus", stockSpeed: 210 },
                { name: "Nero2", stockSpeed: 203 },
                { name: "Tezeract", stockSpeed: 202 },
                { name: "Flashgt", stockSpeed: 189 },
                { name: "Imorgon", stockSpeed: 173 },
                { name: "Neo", stockSpeed: 201 },
                { name: "Jester2", stockSpeed: 190 },
                { name: "Vortex", stockSpeed: 183 },
                { name: "Zombiea", stockSpeed: 170 },
                { name: "Blazer4", stockSpeed: 153 }
                // ... alte date
            ];

            const tableBody = document.getElementById("car-speeds");
            if (!tableBody) {
                console.error("Element with id 'car-speeds' not found.");
                return;
            }

            const fragment = document.createDocumentFragment();
            data.forEach(car => {
                const speeds = calculateSpeeds(car.stockSpeed);
                const row = document.createElement("tr");

                const nameCell = document.createElement("td");
                nameCell.textContent = car.name;
                row.appendChild(nameCell);

                const stockSpeedCell = document.createElement("td");
                stockSpeedCell.textContent = car.stockSpeed;
                row.appendChild(stockSpeedCell);

                speeds.forEach(speed => {
                    const cell = document.createElement("td");
                    cell.textContent = speed.toFixed(2); // Limitează la 2 zecimale
                    row.appendChild(cell);
                });

                fragment.appendChild(row);
            });

            tableBody.appendChild(fragment);
        }

        function populateTable2() {
            console.log("Funcția populateTable2 a fost verificată.");
            const data = [
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
                { name: "Schlagen", stockSpeed: 202 },
                { name: "Rebla", stockSpeed: 200 },
                { name: "Panto", stockSpeed: 140 },
                { name: "Growler", stockSpeed: 205 },
                { name: "Visione", stockSpeed: 202 },
                { name: "virtue" ,stockSpeed: 192 },
                { name: "si" ,stockSpeed: 181 },
                { name: "champion" ,stockSpeed: 202 },
                { name: "entityxf" ,stockSpeed: 199 },
                { name: "entity2" ,stockSpeed: 206 },
                { name: "entity3" ,stockSpeed: 212 },
                { name: "Bhws1000rr", stockSpeed: 215 },
                { name: "vigero" ,stockSpeed: 181 },
                { name: "vigero2" ,stockSpeed: 202 },
                { name: "vigero3" ,stockSpeed: 202 },
                { name: "Vstr", stockSpeed: 203 },
                { name: "Tyrant", stockSpeed: 203 },
                { name: "Hakuchou", stockSpeed: 190 },
                { name: "Hakuchou2", stockSpeed: 203 },
                { name: "Cliffhanger", stockSpeed: 188 },
                { name: "Gargoyle", stockSpeed: 186 },
                { name: "Baller3", stockSpeed: 168 },
                { name: "T20", stockSpeed: 200 },
                { name: "broadway" ,stockSpeed: 156 },
                { name: "Brawler", stockSpeed: 192 },
                { name: "Mesa2", stockSpeed: 156 },
                { name: "Sentinel3", stockSpeed: 187 },
                { name: "sentinel4" ,stockSpeed: 202 },
                { name: "Bhuster", stockSpeed: 155 },
                { name: "Bhcamry", stockSpeed: 180 },
                { name: "Bhodgearger", stockSpeed: 225 },
                { name: "Bhwi8", stockSpeed: 215 },
                { name: "Bhertsgt63s", stockSpeed: 235 },
                { name: "Sa_infernus", stockSpeed: 195 },
                { name: "Nrg500sa", stockSpeed: 190 },
                { name: "Sultansa", stockSpeed: 160 },
                { name: "sultan3" ,stockSpeed: 188 },
                { name: "sugoi" ,stockSpeed: 192 },
                { name: "Bholetcorvettec7", stockSpeed: 230 },
                { name: "Jester3", stockSpeed: 193 },
                { name: "jester4" ,stockSpeed: 202 },
                { name: "Bholf4", stockSpeed: 165 },
                { name: "comet3" ,stockSpeed: 191 },
                { name: "comet6" ,stockSpeed: 202 },
                { name: "comet7" ,stockSpeed: 213 },
                { name: "Bholos60", stockSpeed: 187 },
                { name: "Bhert45", stockSpeed: 177 },
                { name: "Bhstanggt", stockSpeed: 200 },
                { name: "Bhudiq8", stockSpeed: 220 },
                { name: "Bhudisbrs3", stockSpeed: 215 },
                { name: "Bhchetbs", stockSpeed: 225 },
                { name: "Comet5", stockSpeed: 195 },
                { name: "Bhnaultrs", stockSpeed: 178 },
                { name: "Bhordfocusrs", stockSpeed: 185 },
                { name: "Bhwe46", stockSpeed: 190 },
                { name: "Bhupra", stockSpeed: 195 },
                { name: "Bhswagenps", stockSpeed: 165 },
                { name: "Bhwx6", stockSpeed: 160 },
                { name: "Raiden", stockSpeed: 177 },
                { name: "Slamvan3", stockSpeed: 156 },
                { name: "Bhishievox", stockSpeed: 200 },
                { name: "Omnis", stockSpeed: 181 },
                { name: "Ellie", stockSpeed: 173 },
                { name: "Bhahawork", stockSpeed: 161 },
                { name: "Bhbuswork", stockSpeed: 109 },
                { name: "Bhertwork", stockSpeed: 132 },
                { name: "Bhlumberwork", stockSpeed: 176 },
                { name: "Bhtrashwork", stockSpeed: 140 },
                { name: "Bhtractorwork", stockSpeed: 79 },
                { name: "Bhiniaventadorlp700", stockSpeed: 248 },
                { name: "Bagger", stockSpeed: 130 },
                { name: "Brioso", stockSpeed: 165 },
                { name: "sovereign" ,stockSpeed: 167 },
                { name: "Bhfaromeogiulia21", stockSpeed: 225 },
                { name: "Bhsakizx10r", stockSpeed: 220 },
                { name: "Bhssangtr17", stockSpeed: 230 },
                { name: "hexer" ,stockSpeed: 161 },
                { name: "Bhwm4competition21", stockSpeed: 225 },
                { name: "Krieger", stockSpeed: 209 },
                { name: "Khamelion", stockSpeed: 165 },
                { name: "Paragon", stockSpeed: 185 },
                { name: "Paragon3" ,stockSpeed: 207 },
                { name: "Bhinioopers", stockSpeed: 177 },
                { name: "Bhondacivictyper", stockSpeed: 200 },
                { name: "Bhenzegle53c", stockSpeed: 215 },
                { name: "Bhudirs6c8", stockSpeed: 235 },
                { name: "Thrax", stockSpeed: 198 },
                { name: "niobe" ,stockSpeed: 207 },
                { name: "Prototipo", stockSpeed: 205 },
                { name: "Longfin", stockSpeed: 190 },
                { name: "Bhatonmartdb11", stockSpeed: 210 },
                { name: "Sheava", stockSpeed: 195 },
                { name: "Taipan", stockSpeed: 200 },
                { name: "Fmj", stockSpeed: 203 },
                { name: "Locust", stockSpeed: 195 },
                { name: "Italigto", stockSpeed: 205 },
                { name: "italirsx" ,stockSpeed: 212 },
                { name: "italigtb2" ,stockSpeed: 204 },
                { name: "komoda" ,stockSpeed: 197 },
                { name: "Vectre", stockSpeed: 186 },
                { name: "Coquette4", stockSpeed: 205 },
                { name: "Bhguarftyper22", stockSpeed: 220 },
                { name: "Ruston", stockSpeed: 190},
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
                { name: "Zorrusso", stockSpeed: 200 },
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
                { name: "zr350" ,stockSpeed: 186 },
                { name: "Futo", stockSpeed: 196 },
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
                { name: "tenf" ,stockSpeed: 205 },
                { name: "calico" ,stockSpeed: 188 },
                { name: "bhw330i20", stockSpeed: 235 },
                { name: "bhazdamx5miatana19", stockSpeed: 190 },
                { name: "bhssan350zconv2006", stockSpeed: 195 },
                { name: "bhodgechallengerrth97", stockSpeed: 205 },
                { name: "bhert190eevo290", stockSpeed: 205 },
                { name: "bhssans13silvia180sx98", stockSpeed: 207 },
                { name: "bhwm3e36", stockSpeed: 210 },
                { name: "bhrrari488gtb16", stockSpeed: 245 },
                { name: "bhlaren675lts16", stockSpeed: 250 },
                { name: "bhrrari812sf18", stockSpeed: 255 },
                { name: "bhorsche918s15", stockSpeed: 265 },
                { name: "bhlarenp114", stockSpeed: 270 },
                { name: "bhgseggagerars18", stockSpeed: 275 },
                { name: "bhssanznismo24", stockSpeed: 235 }

                // ... alte date
            ];

            const tableBody = document.getElementById("car-speeds2");
            if (!tableBody) {
                console.error("Element with id 'car-speeds2' not found.");
                return;
            }

            const fragment = document.createDocumentFragment();
            data.forEach(car => {
                const speeds = calculateSpeeds(car.stockSpeed);
                const row = document.createElement("tr");

                const nameCell = document.createElement("td");
                nameCell.textContent = car.name;
                row.appendChild(nameCell);

                const stockSpeedCell = document.createElement("td");
                stockSpeedCell.textContent = car.stockSpeed;
                row.appendChild(stockSpeedCell);

                speeds.forEach(speed => {
                    const cell = document.createElement("td");
                    cell.textContent = speed.toFixed(2); // Limitează la 2 zecimale
                    row.appendChild(cell);
                });

                fragment.appendChild(row);
            });

            tableBody.appendChild(fragment);
        }

        // Apelează funcțiile pentru a popula tabelele
        populateTable();
        console.log("Funcția populateTable a fost incarcata.");
        populateTable2();
       console.log("Funcția populateTable2 a fost incarcata.");
