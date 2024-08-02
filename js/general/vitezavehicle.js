       function calculateSpeeds(stockSpeed) {
            let stage1 = stockSpeed * 1.10;
            let stage2 = stage1 * 1.10;
            let stage3 = stage2 * 1.10;
            let stage4 = stage3 * 1.10;
            return [stage1, stage2, stage3, stage4];
        }

        function populateTable() {
            const data = [
                { name: "Grotti Cheetah Classic", spawncode: "Cheetah2", stockSpeed: 192 },
                { name: "BMX", spawncode: "Bmx", stockSpeed: 58 },
                { name: "Cruiser", spawncode: "Cruiser", stockSpeed: 58 },
                { name: "Scorcher", spawncode: "Scorcher", stockSpeed: 61 },
                { name: "Pegassi Faggio", spawncode: "Faggio", stockSpeed: 111 },
                { name: "Maibatsu Manchez", spawncode: "Manchez", stockSpeed: 173 },
                { name: "Western Zombie Chopper", spawncode: "Zombieb", stockSpeed: 168 },
                { name: "Dinka Double-T", spawncode: "Double", stockSpeed: 183 },
                { name: "Pegassi Bati 801RR", spawncode: "Bati2", stockSpeed: 189 },
                { name: "Enus Daybreak", spawncode: "bhollsroycedawn16", stockSpeed: 234 },
                { name: "Pfister Neon", spawncode: "Neon", stockSpeed: 184 },
                { name: "Pegassi Bati 801", spawncode: "Bati", stockSpeed: 185 },
                { name: "Benefactor Dubsta", spawncode: "Dubsta", stockSpeed: 167 },
                { name: "Nagasaki Blazer", spawncode: "Blazer", stockSpeed: 142 },
                { name: "Declasse Rancher XL", spawncode: "Rancherxl", stockSpeed: 150 },
                { name: "BF Injection", spawncode: "Bfinjection", stockSpeed: 155 },
                { name: "Maxwell Asbo", spawncode: "Asbo", stockSpeed: 155 },
                { name: "Praire", spawncode: "Praire", stockSpeed: 167 },
                { name: "Albany Primo", spawncode: "Primo", stockSpeed: 166 },
                { name: "Vulcar Warrener", spawncode: "Warrener", stockSpeed: 167 },
                { name: "Obey Tailgater", spawncode: "Tailgater", stockSpeed: 168 },
                { name: "Declasse Premier", spawncode: "Premier", stockSpeed: 168 },
                { name: "Declasse Asea", spawncode: "Asea", stockSpeed: 169 },
                { name: "Zirconium Stratum", spawncode: "Stratum", stockSpeed: 169 },
                { name: "Karin Intruder", spawncode: "Intruder", stockSpeed: 171 },
                { name: "Benefactor Glendale", spawncode: "Glendale", stockSpeed: 171 },
                { name: "Canis Mesa", spawncode: "Mesa", stockSpeed: 154 },
                { name: "Gallivanter Baller", spawncode: "Baller", stockSpeed: 176 },
                { name: "Dundreary Landstalker", spawncode: "Landstalker", stockSpeed: 158 },
                { name: "Emperor Habanero", spawncode: "Habanero", stockSpeed: 156 },
                { name: "Enus Huntley", spawncode: "Huntley", stockSpeed: 175 },
                { name: "Enus Deity", spawncode: "deity" ,stockSpeed: 173 },
                { name: "Pegassi Toros", spawncode: "Toros", stockSpeed: 203 },
                { name: "Pegassi Torero XO", spawncode: "torero2" ,stockSpeed: 214 },
                { name: "Declasse Voodoo", spawncode: "Voodoo", stockSpeed: 163 },
                { name: "Albany Buccaneer", spawncode: "Buccaneer", stockSpeed: 183 },
                { name: "Vapid Blade", spawncode: "Blade", stockSpeed: 180 },
                { name: "Vapid Hustler", spawncode: "Hustler", stockSpeed: 200 },
                { name: "Declasse Stalion", spawncode: "Stalion", stockSpeed: 182 },
                { name: "Declasse Impaler", spawncode: "Impaler", stockSpeed: 186 },
                { name: "Bravado Gauntlet", spawncode: "Gauntlet", stockSpeed: 204 },
                { name: "Bravado Redwood Gauntlet", spawncode: "Gauntlet2" ,stockSpeed: 174 },
                { name: "Vapid Dominator", spawncode: "Dominator", stockSpeed: 196 },
                { name: "Bravado Banshee 900R", spawncode: "Banshee2", stockSpeed: 176 },
                { name: "Übermacht SC1", spawncode: "Sc1", stockSpeed: 195 },
                { name: "Pegassi Infernus", spawncode: "Infernus", stockSpeed: 187 },
                { name: "Pegassi Infernus Classic", spawncode: "infernus2" ,stockSpeed: 197 },
                { name: "Grotti Cheetah", spawncode: "Cheetah", stockSpeed: 194 },
                { name: "Pegassi Reaper", spawncode: "Reaper", stockSpeed: 187 },
                { name: "Vapid Bullet", spawncode: "Bullet", stockSpeed: 193 },
                { name: "Grotti Furia", spawncode: "Furia", stockSpeed: 197 },
                { name: "Coil Cyclone", spawncode: "Cyclone", stockSpeed: 188 },
                { name: "Pegassi Tempesta", spawncode: "Tempesta", stockSpeed: 193 },
                { name: "Pegassi Osiris", spawncode: "Osiris", stockSpeed: 200 },
                { name: "Pegassi Zentorno", spawncode: "Zentorno", stockSpeed: 197 },
                { name: "Pegassi Vacca", spawncode: "Vacca", stockSpeed: 194 },
                { name: "Truffade Nero", spawncode: "Nero", stockSpeed: 203},
                { name: "Truffade Adder", spawncode: "Adder", stockSpeed: 203 },
                { name: "Lampadati Casco", spawncode: "Casco", stockSpeed: 194 },
                { name: "Pegassi Monroe", spawncode: "Monroe", stockSpeed: 196 },
                { name: "Bravado Buffalo", spawncode: "Buffalo", stockSpeed: 171 },
                { name: "Schyster Deviant", spawncode: "deviant" ,stockSpeed: 175 },
                { name: "Bravado Buffalo STX", spawncode: "buffalo4" ,stockSpeed: 202 },
                { name: "Invetero Coquette", spawncode: "Coquette", stockSpeed: 190 },
                { name: "Bollokan Envisage", spawncode: "envisage" ,stockSpeed: 195 },
                { name: "Bravado Banshee", spawncode: "Banshee", stockSpeed: 175 },
                { name: "Albany Alpha", spawncode: "Alpha", stockSpeed: 185},
                { name: "Übermacht Cypher", spawncode: "cypher" ,stockSpeed: 183 },
                { name: "Grotti Turismo Classic", spawncode: "Turismo2", stockSpeed: 196 },
                { name: "Grotti Turismo Omaggio", spawncode: "turismo3" ,stockSpeed: 200 },
                { name: "Ocelot Pariah", spawncode: "Pariah", stockSpeed: 206 },
                { name: "Übermacht Zion Classic", spawncode: "zion3" ,stockSpeed: 182 },
                { name: "Grotti Carbonizzare", spawncode: "Carbonizzare", stockSpeed: 190 },
                { name: "Obey 8F Drafter", spawncode: "Drafter", stockSpeed: 200 },
                { name: "Dewbauchee Specter", spawncode: "Specter", stockSpeed: 191 },
                { name: "Dewbauchee Seven-70", spawncode: "Seven70", stockSpeed: 201 },
                { name: "Ocelot Lynx", spawncode: "Lynx", stockSpeed: 198 },
                { name: "Benefactor Surano", spawncode: "Surano", stockSpeed: 188 },
                { name: "Annis Elegy Retro", spawncode: "Elegy", stockSpeed: 182 },
                { name: "Annis Elegy RH8", spawncode: "elegy2" ,stockSpeed: 190 },
                { name: "Declasse Hotring Sabre", spawncode: "Hotring", stockSpeed: 187 },
                { name: "Ocelot Jugular", spawncode: "Jugular", stockSpeed: 201 },
                { name: "Nagasaki BF400", spawncode: "Bf400", stockSpeed: 168 },
                { name: "Dinka Enduro", spawncode: "Enduro", stockSpeed: 144 },
                { name: "Nagasaki Shotaro", spawncode: "Shotaro", stockSpeed: 194 },
                { name: "Karin Everon", spawncode: "Everon", stockSpeed: 176 },
                { name: "Karin Hotring Everon", spawncode: "everon2" ,stockSpeed: 200 },
                { name: "Canis Freecrawler", spawncode: "Freecrawler", stockSpeed: 157 },
                { name: "Dinka Blista", spawncode: "Blista", stockSpeed: 167 },
                { name: "Lampadati Novak", spawncode: "Novak", stockSpeed: 199 },
                { name: "Benefactor XLS", spawncode: "Xls", stockSpeed: 169 },
                { name: "Vapid Dominator GTX", spawncode: "Dominator3", stockSpeed: 174 },
                { name: "Annis 300R", spawncode: "r300" ,stockSpeed: 194 },
                { name: "Vapid Dominator GTT", spawncode: "dominator8" ,stockSpeed: 188 },
                { name: "Vapid Dominator GT", spawncode: "dominator9" ,stockSpeed: 200 },
                { name: "Vapid Dominator ASP", spawncode: "dominator7" ,stockSpeed: 195 },
                { name: "Bravado Redwood Gauntlet", spawncode: "Gaunlet2", stockSpeed: 175 },
                { name: "Progen Emerus", spawncode: "Emerus", stockSpeed: 210 },
                { name: "Truffade Nero Custom", spawncode: "Nero2", stockSpeed: 203 },
                { name: "Pegassi Tezeract", spawncode: "Tezeract", stockSpeed: 202 },
                { name: "Vapid Flash GT", spawncode: "Flashgt", stockSpeed: 189 },
                { name: "Överflöd Imorgon", spawncode: "Imorgon", stockSpeed: 173 },
                { name: "Vysser Neo", spawncode: "Neo", stockSpeed: 201 },
                { name: "Dinka Jester Racecar", spawncode: "Jester2", stockSpeed: 190 },
                { name: "Vortex", spawncode: "Vortex", stockSpeed: 183 },
                { name: "Western Zombie Bobber", spawncode: "Zombiea", stockSpeed: 170 },
                { name: "Nagasaki Street Blazer", spawncode: "Blazer4", stockSpeed: 153 }
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

                const spawncodeCell = document.createElement("td");
                spawncodeCell.textContent = car.spawncode;
                row.appendChild(spawncodeCell);

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

            const data = [
                { name: "Dewbauchee Advantage", spawncode: "Bhatonmartvantage", stockSpeed: 245 },
                { name: "Übermacht XM6 Type F96 ", spawncode: "Bhwx6mf96", stockSpeed: 230 },
                { name: "Nagasaki Assassin H2R ", spawncode: "Bhwasakinjh2", stockSpeed: 240 },
                { name: "Obey RS Type 5 ", spawncode: "Bhudirs5", stockSpeed: 210 },
                { name: "Progen 675LT", spawncode: "Bhlaren765lt", stockSpeed: 255 },
                { name: "Übermacht M2 Type G87", spawncode: "Bhwm2g87", stockSpeed: 215 },
                { name: "Grotti FXX K", spawncode: "Bhrrarifxxkevo", stockSpeed: 255 },
                { name: "BF Gulf Type 6", spawncode: "Bhagenmk6", stockSpeed: 190 },
                { name: "Weeny Copper JCW GP", spawncode: "Bhinijrgp", stockSpeed: 187 },
                { name: "Dinka S2K", spawncode: "Bhndas2000", stockSpeed: 200 },
                { name: "Annis ZR-7 Soul", spawncode: "Bhazdarxspirit", stockSpeed: 205 },
                { name: "Maibatsu Evo Type IX", spawncode: "Bhishileix", stockSpeed: 200 },
                { name: "Maxwell Typ 307 CC", spawncode: "Bhugeotcc307", stockSpeed: 173 },
                { name: "Benefactor C Type 63", spawncode: "Bhenzc63amg", stockSpeed: 220 },
                { name: "Pfister Taycan", spawncode: "Bhorschetaytrs", stockSpeed: 230 },
                { name: "Übermacht 5 Type F10", spawncode: "Bhwf10xd", stockSpeed: 205 },
                { name: "Übermacht 7 Type G11 LE", spawncode: "Bhws7lexdrv", stockSpeed: 220 },
                { name: "Benefactor S Type 500", spawncode: "Bhertsclass500", stockSpeed: 227 },
                { name: "Coil Spec S", spawncode: "Bheslamsplaid", stockSpeed: 200 },
                { name: "Pfister Macan", spawncode: "Bhorscemacpr", stockSpeed: 211 },
                { name: "Maxwell Splendid", spawncode: "Bhodasuperb", stockSpeed: 188 },
                { name: "Benefactor Schalgen", spawncode: "Schlagen", stockSpeed: 202 },
                { name: "Übermacht Rebla GTS", spawncode: "Rebla", stockSpeed: 200 },
                { name: "Benefactor Panto", spawncode: "Panto", stockSpeed: 140 },
                { name: "Pfister Growler", spawncode: "Growler", stockSpeed: 205 },
                { name: "Grotti Visione", spawncode: "Visione", stockSpeed: 202 },
                { name: "Ocelot Virtue", spawncode: "virtue" ,stockSpeed: 192 },
                { name: "si", spawncode: "si" ,stockSpeed: 181 },
                { name: "Dewbauchee Champion", spawncode: "champion" ,stockSpeed: 202 },
                { name: "Överflöd Entity XF", spawncode: "entityxf" ,stockSpeed: 199 },
                { name: "Överflöd Entity XXR", spawncode: "entity2" ,stockSpeed: 206 },
                { name: "Överflöd Entity MT", spawncode: "entity3" ,stockSpeed: 212 },
                { name: "Übermacht RR Type 1000", spawncode: "Bhws1000rr", stockSpeed: 215 },
                { name: "Declasse Vigero", spawncode: "vigero" ,stockSpeed: 181 },
                { name: "Declasse Vigero ZX", spawncode: "vigero2" ,stockSpeed: 202 },
                { name: "Declasse Vigero ZX Convertible", spawncode: "vigero3" ,stockSpeed: 202 },
                { name: "Albany V-STR", spawncode: "Vstr", stockSpeed: 203 },
                { name: "Överflöd Tyrant", spawncode: "Tyrant", stockSpeed: 203 },
                { name: "Shitzu Hakuchou", spawncode: "Hakuchou", stockSpeed: 190 },
                { name: "Shitzu Hakuchou Drag", spawncode: "Hakuchou2", stockSpeed: 203 },
                { name: "Western Cliffhanger", spawncode: "Cliffhanger", stockSpeed: 188 },
                { name: "Western Gargoyle", spawncode: "Gargoyle", stockSpeed: 186 },
                { name: "Gallivanter Baller LE", spawncode: "Baller3", stockSpeed: 168 },
                { name: "Progen T20", spawncode: "T20", stockSpeed: 200 },
                { name: "Classique Broadway", spawncode: "broadway" ,stockSpeed: 156 },
                { name: "Coil Brawler", spawncode: "Brawler", stockSpeed: 192 },
                { name: "Canis Mesa (Winter", spawncode: "Mesa2", stockSpeed: 156 },
                { name: "Übermacht Sentinel Classic", spawncode: "Sentinel3", stockSpeed: 187 },
                { name: "Übermacht Sentinel Classic Widebody", spawncode: "sentinel4" ,stockSpeed: 202 },
                { name: "Vulcar Buster", spawncode: "Bhuster", stockSpeed: 155 },
                { name: "Karin Camry", spawncode: "Bhcamry", stockSpeed: 180 },
                { name: "Bravado Chase", spawncode: "Bhodgearger", stockSpeed: 225 },
                { name: "Übermacht i Type 8", spawncode: "Bhwi8", stockSpeed: 215 },
                { name: "Benefactor GT Type 63s", spawncode: "Bhertsgt63s", stockSpeed: 235 },
                { name: "Pegassi Infernus SA", spawncode: "Sa_infernus", stockSpeed: 195 },
                { name: "Dinka NRG-500 SA", spawncode: "Nrg500sa", stockSpeed: 190 },
                { name: "Karin Sultan SA", spawncode: "Sultansa", stockSpeed: 160 },
                { name: "Karin Sultan RS Classic", spawncode: "sultan3" ,stockSpeed: 188 },
                { name: "Dinka Sugoi", spawncode: "sugoi" ,stockSpeed: 192 },
                { name: "Invetero Coquette C7", spawncode: "Bholetcorvettec7", stockSpeed: 230 },
                { name: "Dinka Jester Classic", spawncode: "Jester3", stockSpeed: 193 },
                { name: "Dinka Jester RR ", spawncode: "jester4" ,stockSpeed: 202 },
                { name: "BF Gulf Type 4", spawncode: "bholf4", stockSpeed: 165 },
                { name: "Pfister Comet Retro Custom", spawncode: "comet3", stockSpeed: 191 },
                { name: "Pfister Comet S2", spawncode: "comet6", stockSpeed: 202 },
              { name: "Pfister Comet S2 Cabrio", spawncode: "comet7", stockSpeed: 213 },
              { name: "Vulcar 60S", spawncode: "bholos60", stockSpeed: 187 },
              { name: "Benefactor CLA Type 45", spawncode: "bhert45", stockSpeed: 177 },
              { name: "Vapid Armasar GT", spawncode: "bhstanggt", stockSpeed: 200 },
              { name: "Obey Q Type 8", spawncode: "bhudiq8", stockSpeed: 220 },
              { name: "Obey RS Type 3 Sportback", spawncode: "bhudisbrs3", stockSpeed: 215 },
              { name: "Pfister 911 TBS", spawncode: "bhchetbs", stockSpeed: 225 },
              { name: "Pfister Comet SR", spawncode: "comet5", stockSpeed: 195 },
              { name: "Maxwell Meganta", spawncode: "bhnaultrs", stockSpeed: 178 },
              { name: "Vapid Focus RS", spawncode: "bhordfocusrs", stockSpeed: 185 },
              { name: "Übermacht 3 Type 46", spawncode: "bhwe46", stockSpeed: 190 },
              { name: "Pfister Comet SR", spawncode: "bhupra", stockSpeed: 195 },
              { name: "BF Passage Type B7", spawncode: "bhswagenps", stockSpeed: 165 },
              { name: "Übermacht 6X", spawncode: "bhwx6", stockSpeed: 160 },
              { name: "Coil Raiden", spawncode: "raiden", stockSpeed: 177 },
              { name: "Vapid Slamvan Custom", spawncode: "slamvan3", stockSpeed: 156 },
              { name: "Maibatsu Evo Type X", spawncode: "bhishievox", stockSpeed: 200 },
              { name: "Obey Omnis", spawncode: "omnis", stockSpeed: 181 },
              { name: "Vapid Ellie", spawncode: "ellie", stockSpeed: 173 },
              { name: "Nagasaki Pizza", spawncode: "bhahawork", stockSpeed: 161 },
              { name: "Brute Bus Custom", spawncode: "bhbuswork", stockSpeed: 109 },
              { name: "Benefactor Hauler", spawncode: "bhertwork", stockSpeed: 132 },
              { name: "MTL Jumberjack Flatbed", spawncode: "bhlumberwork", stockSpeed: 176 },
              { name: "Jobuilt Trashmaster Custom", spawncode: "bhtrashwork", stockSpeed: 140 },
              { name: "Stanley Fieldmaster Custom", spawncode: "bhtractorwork", stockSpeed: 79 },
              { name: "Pegassi Adventura", spawncode: "bhiniaventadorlp700", stockSpeed: 248 },
              { name: "Western Bagger", spawncode: "Bagger", stockSpeed: 130 },
              { name: "Grotti Brioso R/A", spawncode: "Brioso", stockSpeed: 165 },
              { name: "Western Sovereign", spawncode: "sovereign", stockSpeed: 167 },
              { name: "Lampadati Juliette", spawncode: "Bhfaromeogiulia21", stockSpeed: 225 },
              { name: "Nagasaki ZX10R", spawncode: "Bhsakizx10r", stockSpeed: 220 },
              { name: "Annis GT Spec R", spawncode: "Bhssangtr17", stockSpeed: 230 },
              { name: "LCC Hexer", spawncode: "hexer", stockSpeed: 161 },
              { name: "Übermacht M Type 4 Race", spawncode: "Bhwm4competition21", stockSpeed: 225 },
              { name: "Benefactor Krieger", spawncode: "Krieger", stockSpeed: 209 },
              { name: "Hijak Khamelion", spawncode: "Khamelion", stockSpeed: 165 },
              { name: "Enus Paragon R", spawncode: "Paragon", stockSpeed: 185 },
              { name: "Enus Paragon S", spawncode: "Paragon3", stockSpeed: 207 },
              { name: "Weeny Copper", spawncode: "Bhinioopers", stockSpeed: 177 },
              { name: "Dinka Civique Spec R", spawncode: "Bhondacivictyper", stockSpeed: 200 },
              { name: "Benefactor GLE Type 53c", spawncode: "Bhenzegle53c", stockSpeed: 215 },
              { name: "Obey RS Type 6", spawncode: "Bhudirs6c8", stockSpeed: 235 },
              { name: "Truffade Thrax", spawncode: "Thrax", stockSpeed: 198 },
              { name: "Übermacht Niobe", spawncode: "niobe", stockSpeed: 207 },
              { name: "Grotti X80 Proto", spawncode: "Prototipo", stockSpeed: 205 },
              { name: "Shitzu Longfin", spawncode: "Longfin", stockSpeed: 190 },
              { name: "Dewbauchee DB Spec 11", spawncode: "Bhatonmartdb11", stockSpeed: 210 },
              { name: "Emperor ETR1", spawncode: "Sheava", stockSpeed: 195 },
              { name: "Chevak Taipan", spawncode: "Taipan", stockSpeed: 200 },
              { name: "Vapid FMJ", spawncode: "Fmj", stockSpeed: 203 },
              { name: "Ocelot Locust", spawncode: "Locust", stockSpeed: 195 },
              { name: "Grotti Itali GTO", spawncode: "Italigto", stockSpeed: 205 },
              { name: "Grotti Itali RSX", spawncode: "italirsx", stockSpeed: 212 },
              { name: "Progen Itali GTB Custom", spawncode: "italigtb2", stockSpeed: 204 },
              { name: "Lampadati Komoda", spawncode: "komoda", stockSpeed: 197 },
              { name: "Emperor Vectre", spawncode: "Vectre", stockSpeed: 186 },
              { name: "Invetero Coquette D10", spawncode: "Coquette4", stockSpeed: 205 },
              { name: "Ocelot Type F Spec R", spawncode: "Bhguarftyper22", stockSpeed: 220 },
              { name: "Hijak Ruston", spawncode: "Ruston", stockSpeed: 190 },
              { name: "Shitzu Yacht 3B", spawncode: "Bhyacht3b", stockSpeed: 110 },
              { name: "Emperor ETR1", spawncode: "Sheva", stockSpeed: 173 },
              { name: "Übermacht M Type 4 Cabrio", spawncode: "Bhwm4g83", stockSpeed: 220 },
              { name: "BF Rocco R", spawncode: "Bhagenroccor", stockSpeed: 180 },
              { name: "Karin 4Runner TRD", spawncode: "Bhota4rnpro", stockSpeed: 192 },
              { name: "Vapid Armasar 63", spawncode: "Bhstang63", stockSpeed: 205 },
              { name: "Enus Global", spawncode: "Bhntleycontgt", stockSpeed: 240 },
              { name: "Benefactor G Type 63", spawncode: "Bhenzeg63amg", stockSpeed: 220 },
              { name: "Emperor LX570", spawncode: "Bhlx570", stockSpeed: 205 },
              { name: "Obey RS Type 7 RABT", spawncode: "Bhudirs7rabt", stockSpeed: 240 },
              { name: "Obey M Type 8", spawncode: "Bhwm8", stockSpeed: 235 },
              { name: "Dewbauchee Zorrusso", spawncode: "Zorrusso", stockSpeed: 200 },
              { name: "Benefactor Landcruiser", spawncode: "Bhundaisantafe", stockSpeed: 165 },
              { name: "Vapid Regera 50", spawncode: "Bhswagenregr50", stockSpeed: 180 },
              { name: "Annis Overland Cruiser HAT 200", spawncode: "Bhotalandcruhat200", stockSpeed: 189 },
              { name: "Dewbauchee EVG-MC", spawncode: "Bhmmerevgmc", stockSpeed: 210 },
              { name: "Obey RS VRS", spawncode: "Bhoversvrs", stockSpeed: 215 },
              { name: "Enus Bentayga S", spawncode: "Bhentleybentayst", stockSpeed: 230 },
              { name: "Enus Paragon MVZ5", spawncode: "Bhupraformvz5", stockSpeed: 210 },
              { name: "Bennys ER63 AMG", spawncode: "Bherts63cmatic", stockSpeed: 245 },
              { name: "Bennys URUS Perfomante", spawncode: "Bhurusperf23", stockSpeed: 245 },
              { name: "Karin Calico GTF", spawncode: "calico", stockSpeed: 188 },
                { name: "Obey R Type 8", spawncode: "bhudir820", stockSpeed: 245 },
                { name: "Karin Tacoma 2024", spawncode: "bhotatacoma24", stockSpeed: 200 },
                { name: "Karin Spectra Spec 4", spawncode: "bhotasupra", stockSpeed: 240 },
                { name: "Vulcar 90XC", spawncode: "bholvoxc90", stockSpeed: 205 },
                { name: "Bravado Devil", spawncode: "bhodgechallengersrt", stockSpeed: 230 },
                { name: "Annis Vista Spec 34", spawncode: "bhssanskylinegtr", stockSpeed: 235 },
                { name: "Benefactor CLS Type 63", spawncode: "bhertcls63samg15", stockSpeed: 232 },
                { name: "Obey A Type 8L", spawncode: "bhudia8lh22", stockSpeed: 220 },
                { name: "Pfister Type 911 GT2 RS", spawncode: "bhorschegt2rs17", stockSpeed: 250 },
                { name: "Karin WRX STI", spawncode: "bhubaruwrxsti12", stockSpeed: 225 },
                { name: "Declasse Vigero Exorcist", spawncode: "bhchevocam19", stockSpeed: 226 },
                { name: "Übermacht M5 Type E39", spawncode: "bhwm5e39", stockSpeed: 212 },
                { name: "Übermacht M5CS Type G30", spawncode: "bhwm5cs22", stockSpeed: 235 },
                { name: "Übermacht M3 Type E30", spawncode: "bhwm3e30", stockSpeed: 223 },
                { name: "BF Passage Type B8", spawncode: "bhswagenpassatb8", stockSpeed: 205 },
                { name: "Albany CT4 Darkfeather", spawncode: "bhdillacct4vbw22", stockSpeed: 225 },
                { name: "Übermacht M5 Type E60", spawncode: "bhwm5e60v2", stockSpeed: 173 },
                { name: "Pfister Cayenne GT", spawncode: "bhorschecayennegt22", stockSpeed: 230 },
                { name: "Pegassi Panigale V4", spawncode: "bhcatipanigalev4", stockSpeed: 260 },
                { name: "Schyster Spear AMX", spawncode: "bhmcjavelinamx", stockSpeed: 233 },
                { name: "Enus Batur", spawncode: "bhntleybatur24", stockSpeed: 245 },
                { name: "Benefactor Krieger", spawncode: "bhrleydavfb", stockSpeed: 215 },
                { name: "Übermacht 7X Type G07", spawncode: "bhwx7g07", stockSpeed: 220 },
                { name: "Coil Speedster", spawncode: "bheslaroadster20", stockSpeed: 230 },
                { name: "BF Gulf Type 7", spawncode: "bhswagengolfrmk75", stockSpeed: 223 },
                { name: "Benefactor GT Type Race", spawncode: "bhertgtr22", stockSpeed: 245 },
                { name: "Karin RAVE4 XSE", spawncode: "bhotarav4pxse21", stockSpeed: 165 },
                { name: "Obey Surge GT", spawncode: "bhudietrongt", stockSpeed: 230 },
                { name: "Übermacht M Type 8", spawncode: "bhw760ig7024", stockSpeed: 230 },
                { name: "Benefactor GLS Type 800B", spawncode: "bhertglsbrabus800", stockSpeed: 230 },
                { name: "Pegassi Hurricane", spawncode: "bhinihuracanperf18", stockSpeed: 250 },
                { name: "Grotti Portofino", spawncode: "bhrrariportofino18", stockSpeed: 243 },
                { name: "Karin Evora GT", spawncode: "bhotusevoragt430", stockSpeed: 234 },
                { name: "Lampadati Levente Mansory", spawncode: "bhseratileventemansory", stockSpeed: 233 },
                { name: "Übermacht 7X Type G07", spawncode: "bhwx7g0722", stockSpeed: 220 },
                { name: "Benefactor E Type 63B", spawncode: "bherte63sbrabus800", stockSpeed: 233 },
                { name: "Vapid GT Spec 2", spawncode: "bhordgtmk2", stockSpeed: 246 },
                { name: "Enus Batur", spawncode: "bhntleybatur24", stockSpeed: 243 },
                { name: "Pegassi Panigale 43", spawncode: "bhcatipanigale43", stockSpeed: 240 },
                { name: "Schyster Spear AMX", spawncode: "bhmcajavelinamx", stockSpeed: 240 },
                { name: "Übermacht 7X Type G07", spawncode: "bhwx7g07", stockSpeed: 225 },
                { name: "Benefactor Krieger", spawncode: "bhrleydavfb", stockSpeed: 220 },
                { name: "Truffade Vayder", spawncode: "bhgattiveyronvt", stockSpeed: 270 },
                { name: "Nagasaki RZR", spawncode: "bholarisrzrxpesp", stockSpeed: 200 },
                { name: "Pfister Carrera Type 911 Convertible", spawncode: "bhorschecarrera4sc911", stockSpeed: 240 },
                { name: "Annis ZR-350", spawncode: "zr350", stockSpeed: 186 },
                { name: "Karin Futo", spawncode: "Futo", stockSpeed: 196 },
                { name: "Obey RSQ Type 8 Mansory", spawncode: "Bhudirsq821", stockSpeed: 240 },
                { name: "Karin BRZ Spec S", spawncode: "Bhbarubrz2ts24", stockSpeed: 220 },
                { name: "Übermacht 6M Type E64", spawncode: "Bhwm6e64c26", stockSpeed: 215 },
                { name: "Karin Prius", spawncode: "Bhotaprius24", stockSpeed: 180 },
                { name: "Dewbauchee Valor", spawncode: "Bhatonmartvalour24", stockSpeed: 247 },
                { name: "Maibatsu YZF R1", spawncode: "Bhahayzfr1m20", stockSpeed: 235 },
                { name: "Coil Wind Sapphire", spawncode: "Bhcidairsapphire23", stockSpeed: 227 },
                { name: "Lampadati MC20", spawncode: "Bhseratimc202", stockSpeed: 250 },
                { name: "Progen M500", spawncode: "Bhoblem50022", stockSpeed: 245 },
                { name: "Dewbauchee DB Spec X", spawncode: "Bhatonmartdbx70723", stockSpeed: 240 },
                { name: "Dinka NSX Spec S", spawncode: "Bhuransxts22", stockSpeed: 230 },
                { name: "Dinka Frauscher", spawncode: "bhuscher16", stockSpeed: 225 },
                { name: "Emperor LFA Nürburgring Spec", spawncode: "bhlxlfanur11", stockSpeed: 243 },
                { name: "Bravado Venom", spawncode: "bhodgeviper17", stockSpeed: 243 },
                { name: "Übermacht 5XM Type F15", spawncode: "bhwx5m", stockSpeed: 225 },
                { name: "Canis RoadEagle", spawncode: "bheepgrandchtr418", stockSpeed: 225 },
                { name: "Cheval Poison GT", spawncode: "bhesseyvenomgtsfe16", stockSpeed: 260 },
                { name: "Dinka Civique EG6", spawncode: "bhondaciviceg6kev95", stockSpeed: 230 },
                { name: "Vapid Armasar BB", spawncode: "bhordmustangbb24", stockSpeed: 238 },
                { name: "Karin Spectra Mark 5", spawncode: "bhotasupragr20", stockSpeed: 240 },
                { name: "Obey 10F", spawncode: "tenf", stockSpeed: 205 },
                { name: "Karin Calico GTF", spawncode: "calico", stockSpeed: 188 },
                { name: "Übermacht 3.30i Type G20", spawncode: "bhw330i20", stockSpeed: 235 },
                { name: "Annis MZ-5", spawncode: "bhazdamx5miatana19", stockSpeed: 190 },
                { name: "Annis Z350 Convertible", spawncode: "bhssan350zconv2006", stockSpeed: 195 },
                { name: "Dodge Contender R/T \ 97", spawncode: "bhodgechallengerrth97", stockSpeed: 205 },
                { name: "Benefactor E Type 190 EVO", spawncode: "bhert190eevo290", stockSpeed: 205 },
                { name: "Annis Silvia 13", spawncode: "bhssans13silvia180sx98", stockSpeed: 207 },
                { name: "Übermacht 3M Type E36", spawncode: "bhwm3e36", stockSpeed: 210 },
                { name: "Grotti 488 GTB", spawncode: "bhrrari488gtb16", stockSpeed: 245 },
                { name: "Progen 675LT Convertible", spawncode: "bhlaren675lts16", stockSpeed: 250 },
                { name: "Grotti 812 SF", spawncode: "bhrrari812sf18", stockSpeed: 255 },
                { name: "Pfister 918 Spyder", spawncode: "bhorsche918s15", stockSpeed: 265 },
                { name: "Progen P1", spawncode: "bhlarenp114", stockSpeed: 270 },
                { name: "Överflöd Agera RS", spawncode: "bhgseggagerars18", stockSpeed: 275 },
                { name: "Annis Z", spawncode: "bhssanznismo24", stockSpeed: 235 }
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

                const spawncodeCell = document.createElement("td");
                spawncodeCell.textContent = car.spawncode;
                row.appendChild(spawncodeCell);

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
        populateTable();
        populateTable2();
