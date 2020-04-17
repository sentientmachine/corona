window.colorSet = [
  '#ff4322', '#06a1fe', '#198038', '#c24885', '#60d835',
  '#6929c4', '#f8bb03', '#5f5f60', '#bd5a05', '#002d9c',
  'darkCyan', '#6c703a', '#8a2319', '#888', '#ff9900',
  '#94bada', 'pink', '#00e0e0', '#c0e000', 'black'
];

window.shortcuts = {
  'us': 'United States',
  'usa': 'United States',
  'uk': 'United Kingdom',
  'eu': 'EU 27'
};

window.populations = {
  // from https://www.worldometers.info/world-population/population-by-country/
  "Afghanistan": 38928346, "Albania": 2877797, "Algeria": 43851044, "American Samoa": 55191, "Andorra": 77265,
  "Angola": 32866272, "Anguilla": 15003, "Antigua and Barbuda": 97929, "Argentina": 45195774, "Armenia": 2963243,
  "Aruba": 106766, "Australia": 25499884, "Austria": 9006398, "Azerbaijan": 10139177, "Bahamas": 393244,
  "Bahrain": 1701575, "Bangladesh": 164689383, "Barbados": 287375, "Belarus": 9449323, "Belgium": 11589623,
  "Belize": 397628, "Benin": 12123200, "Bermuda": 62278, "Bhutan": 771608, "Bolivia": 11673021,
  "Bosnia and Herzegovina": 3280819, "Botswana": 2351627, "Brazil": 212559417, "British Virgin Islands": 30231, "Brunei": 437479,
  "Bulgaria": 6948445, "Burkina Faso": 20903273, "Burundi": 11890784, "Cabo Verde": 555987, "Cambodia": 16718965,
  "Cameroon": 26545863, "Canada": 37742154, "Caribbean Netherlands": 26223, "Cayman Islands": 65722, "Central African Republic": 4829767,
  "Chad": 16425864, "Channel Islands": 173863, "Chile": 19116201, "China": 1439323776, "Colombia": 50882891,
  "Comoros": 869601, "Congo (Brazzaville)": 5518087, "Cook Islands": 17564, "Costa Rica": 5094118, "Croatia": 4105267,
  "Cuba": 11326616, "Curacao": 164093, "Cyprus": 1207359, "Czechia": 10708981, "Cote d'Ivoire": 26378274,
  "Congo (Kinshasa)": 89561403, "Denmark": 5792202, "Djibouti": 988000, "Dominica": 71986, "Dominican Republic": 10847910,
  "Ecuador": 17643054, "Egypt": 102334404, "El Salvador": 6486205, "Equatorial Guinea": 1402985, "Eritrea": 3546421,
  "Estonia": 1326535, "Eswatini": 1160164, "Ethiopia": 114963588, "Faroe Islands": 48863, "Falkland Islands": 3480,
  "Fiji": 896445, "Finland": 5540720, "France": 65273511, "French Guiana": 298682, "French Polynesia": 280908,
  "Gabon": 2225734, "Gambia": 2416668, "Georgia": 3989167, "Germany": 83783942, "Ghana": 31072940,
  "Gibraltar": 33691, "Greece": 10423054, "Greenland": 56770, "Grenada": 112523, "Guadeloupe": 400124,
  "Guam": 168775, "Guatemala": 17915568, "Guinea": 13132795, "Guinea-Bissau": 1968001, "Guyana": 786552,
  "Haiti": 11402528, "Vatican": 801, "Honduras": 9904607, "Hong Kong": 7496981, "Hungary": 9660351,
  "Iceland": 341243, "India": 1380004385, "Indonesia": 273523615, "Iran": 83992949, "Iraq": 40222493,
  "Ireland": 4937786, "Isle of Man": 85033, "Israel": 8655535, "Italy": 60461826, "Jamaica": 2961167,
  "Japan": 126476461, "Jordan": 10203134, "Kazakhstan": 18776707, "Kenya": 53771296, "Kiribati": 119449,
  "Kuwait": 4270571, "Kyrgyzstan": 6524195, "Laos": 7275560, "Latvia": 1886198, "Lebanon": 6825445,
  "Lesotho": 2142249, "Liberia": 5057681, "Libya": 6871292, "Liechtenstein": 38128, "Lithuania": 2722289,
  "Luxembourg": 625978, "Macau": 649335, "Madagascar": 27691018, "Malawi": 19129952, "Malaysia": 32365999,
  "Maldives": 540544, "Mali": 20250833, "Malta": 441543, "Marshall Islands": 59190, "Martinique": 375265,
  "Mauritania": 4649658, "Mauritius": 1271768, "Mayotte": 272815, "Mexico": 128932753, "Micronesia": 115023,
  "Moldova": 4033963, "Monaco": 39242, "Mongolia": 3278290, "Montenegro": 628066, "Montserrat": 4992,
  "Morocco": 36910560, "Mozambique": 31255435, "Myanmar": 54409800, "Namibia": 2540905, "Nauru": 10824,
  "Nepal": 29136808, "Netherlands": 17134872, "New Caledonia": 285498, "New Zealand": 4822233, "Nicaragua": 6624554,
  "Niger": 24206644, "Nigeria": 206139589, "Niue": 1626, "North Korea": 25778816, "North Macedonia": 2083374,
  "Northern Mariana Islands": 57559, "Norway": 5421241, "Oman": 5106626, "Pakistan": 220892340, "Palau": 18094,
  "Panama": 4314767, "Papua New Guinea": 8947024, "Paraguay": 7132538, "Peru": 32971854, "Philippines": 109581078,
  "Poland": 37846611, "Portugal": 10196709, "Puerto Rico": 2860853, "Qatar": 2881053, "Romania": 19237691,
  "Russia": 145934462, "Rwanda": 12952218, "Reunion": 895312, "Saint Barthelemy": 9877, "Saint Helena": 6077,
  "Saint Kitts & Nevis": 53199, "Saint Lucia": 183627, "St Martin": 38666, "Saint Pierre & Miquelon": 5794, "Samoa": 198414,
  "San Marino": 33931, "Sao Tome & Principe": 219159, "Saudi Arabia": 34813871, "Senegal": 16743927, "Serbia": 8737371,
  "Seychelles": 98347, "Sierra Leone": 7976983, "Singapore": 5850342, "Sint Maarten": 42876, "Slovakia": 5459642,
  "Slovenia": 2078938, "Solomon Islands": 686884, "Somalia": 15893222, "South Africa": 59308690, "South Korea": 51269185,
  "South Sudan": 11193725, "Spain": 46754778, "Sri Lanka": 21413249, "Saint Vincent & Grenadines": 110940, "Palestinian territories": 5101414,
  "Sudan": 43849260, "Suriname": 586632, "Sweden": 10099265, "Switzerland": 8654622, "Syria": 17500658,
  "Taiwan": 23816775, "Tajikistan": 9537645, "Tanzania": 59734218, "Thailand": 69799978, "Timor-Leste": 1318445,
  "Togo": 8278724, "Tokelau": 1357, "Tonga": 105695, "Trinidad and Tobago": 1399488, "Tunisia": 11818619,
  "Turkey": 84339067, "Turkmenistan": 6031200, "Turks and Caicos": 38717, "Tuvalu": 11792, "U.S. Virgin Islands": 104425,
  "Uganda": 45741007, "Ukraine": 43733762, "United Arab Emirates": 9890402, "United Kingdom": 67886011, "United States": 331002651,
  "Uruguay": 3473730, "Uzbekistan": 33469203, "Vanuatu": 307145, "Venezuela": 28435940, "Vietnam": 97338579,
  "Wallis & Futuna": 11239, "Western Sahara": 597339, "Yemen": 29825964, "Zambia": 18383955, "Zimbabwe": 14862924,
  "Kosovo": 1793000
}

window.statePopulations = {
  'United States': {
    // https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States_by_population
    "Alabama": 4903185, "Alaska": 731545, "American Samoa": 55641, "Arizona": 7278717, "Arkansas": 3017825,
    "California": 39512223, "Colorado": 5758736, "Connecticut": 3565287, "Delaware": 973764, "District of Columbia": 705749,
    "Florida": 21477737, "Georgia": 10617423, "Guam": 165718, "Hawaii": 1415872, "Idaho": 1787147,
    "Illinois": 12671821, "Indiana": 6732219, "Iowa": 3155070, "Kansas": 2913314, "Kentucky": 4467673,
    "Louisiana": 4648794, "Maine": 1344212, "Maryland": 6045680, "Massachusetts": 6949503, "Michigan": 9986857,
    "Minnesota": 5639632, "Mississippi": 2976149, "Missouri": 6137428, "Montana": 1068778, "Nebraska": 1934408,
    "Nevada": 3080156, "New Hampshire": 1359711, "New Jersey": 8882190, "New Mexico": 2096829, "New York": 19453561,
    "North Carolina": 10488084, "North Dakota": 762062, "Northern Mariana Islands": 55194, "Ohio": 11689100, "Oklahoma": 3956971,
    "Oregon": 4217737, "Pennsylvania": 12801989, "Puerto Rico": 3193694, "Rhode Island": 1059361, "South Carolina": 5148714,
    "South Dakota": 884659, "Tennessee": 6833174, "Texas": 28995881, "Virgin Islands": 104914, "Utah": 3205958,
    "Vermont": 623989, "Virginia": 8535519, "Washington": 7614893, "West Virginia": 1792065, "Wisconsin": 5822434,
    "Wyoming": 578759
  },
  'Canada': {
    // https://worldpopulationreview.com/canadian-provinces/
    "Alberta": 4345737, "British Columbia": 5020302, "Manitoba": 1360396, "New Brunswick": 772094, "Newfoundland": 523790,
    "Northwest Territory": 44598, "Nova Scotia": 965382, "Nunavut": 38787, "Ontario": 14446515, "Prince Edward Island": 154748,
    "Quebec": 8433301, "Saskatchewan": 1168423, "Yukon": 40369
  },
  'Australia': {
    // https://en.wikipedia.org/wiki/States_and_territories_of_Australia
    "Australian Capital Territory": 426709, "Jervis Bay Territory": 405,
    "New South Wales": 8089526, "Northern Territory": 245869,
    "Queensland": 5095100, "South Australia": 1751693,
    "Tasmania": 534281, "Victoria": 6594804, "Western Australia": 2621680
  },
  'China': {
    // https://en.wikipedia.org/wiki/Provinces_of_China
    "Anhui": 59500510, "Beijing": 19612368, "Chongqing": 28846170, "Fujian": 36894216, "Gansu": 25575254,
    "Guangdong": 104303132, "Guangxi": 46026629, "Guizhou": 34746468, "Hainan": 9171300, "Hebei": 71854202,
    "Heilongjiang": 38312224, "Henan": 94023567, "Hubei": 57237740, "Hunan": 65683722, "Inner Mongolia": 24706321,
    "Jiangsu": 78659903, "Jiangxi": 44567475, "Jilin": 27462297, "Liaoning": 43746323, "Ningxia": 6301350,
    "Qinghai": 5626722, "Shaanxi": 37327378, "Shandong": 95793065, "Shanghai": 23019148, "Shanxi": 35712111,
    "Sichuan": 80418200, "Tianjin": 12938224, "Tibet": 3002166, "Xinjiang": 21813334, "Yunnan": 45966239,
    "Zhejiang": 54426891
  }
}

window.countryCodes = {
  "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "American Samoa": "as",
  "Andorra": "ad", "Angola": "ao", "Anguilla": "ai", "Antarctica": "aq", "Antigua and Barbuda": "ag",
  "Argentina": "ar", "Armenia": "am", "Aruba": "aw", "Australia": "au", "Austria": "at",
  "Azerbaijan": "az", "Bahamas": "bs", "Bahrain": "bh", "Bangladesh": "bd", "Barbados": "bb",
  "Belarus": "by", "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bermuda": "bm",
  "Bhutan": "bt", "Bolivia": "bo", "Bonaire, Sint Eustatius and Saba": "bq", "Bosnia and Herzegovina": "ba", "Botswana": "bw",
  "Bouvet Island": "bv", "Brazil": "br", "British Indian Ocean Territory": "io", "Brunei": "bn", "Bulgaria": "bg",
  "Burkina Faso": "bf", "Burundi": "bi", "Cabo Verde": "cv", "Cambodia": "kh", "Cameroon": "cm",
  "Canada": "ca", "Cayman Islands": "ky", "Central African Republic": "cf", "Chad": "td", "Chile": "cl",
  "China": "cn", "Christmas Island": "cx", "Cocos (Keeling) Islands": "cc", "Colombia": "co", "Comoros": "km",
  "Congo (Brazzaville)": "cg", "Congo (Kinshasa)": "cd", "Cook Islands": "ck", "Costa Rica": "cr", "Croatia": "hr",
  "Cuba": "cu", "Curacao": "cw", "Cyprus": "cy", "Czechia": "cz", "Cote d'Ivoire": "ci",
  "Denmark": "dk", "Djibouti": "dj", "Dominica": "dm", "Dominican Republic": "do", "Ecuador": "ec",
  "Egypt": "eg", "El Salvador": "sv", "Equatorial Guinea": "gq", "Eritrea": "er", "Estonia": "ee",
  "Eswatini": "sz", "Ethiopia": "et", "Falkland Islands (Malvinas)": "fk", "Faroe Islands": "fo", "Fiji": "fj",
  "Finland": "fi", "France": "fr", "French Guiana": "gf", "French Polynesia": "pf", "French Southern Territories": "tf",
  "Gabon": "ga", "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh",
  "Gibraltar": "gi", "Greece": "gr", "Greenland": "gl", "Grenada": "gd", "Guadeloupe": "gp",
  "Guam": "gu", "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw",
  "Guyana": "gy", "Haiti": "ht", "Heard Island and McDonald Islands": "hm", "Vatican": "va", "Honduras": "hn",
  "Hong Kong": "hk", "Hungary": "hu", "Iceland": "is", "India": "in", "Indonesia": "id",
  "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Isle of Man": "im", "Israel": "il",
  "Italy": "it", "Jamaica": "jm", "Japan": "jp", "Channel Islands": "je", "Jordan": "jo",
  "Kazakhstan": "kz", "Kenya": "ke", "Kiribati": "ki", "Korea (Democratic People's Republic of)": "kp", "South Korea": "kr",
  "Kuwait": "kw", "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv", "Lebanon": "lb",
  "Lesotho": "ls", "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt",
  "Luxembourg": "lu", "Macau": "mo", "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my",
  "Maldives": "mv", "Mali": "ml", "Malta": "mt", "Marshall Islands": "mh", "Martinique": "mq",
  "Mauritania": "mr", "Mauritius": "mu", "Mayotte": "yt", "Mexico": "mx", "Micronesia (Federated States of)": "fm",
  "Moldova": "md", "Monaco": "mc", "Mongolia": "mn", "Montenegro": "me", "Montserrat": "ms",
  "Morocco": "ma", "Mozambique": "mz", "Burma": "mm", "Namibia": "na", "Nauru": "nr",
  "Nepal": "np", "Netherlands": "nl", "New Caledonia": "nc", "New Zealand": "nz", "Nicaragua": "ni",
  "Niger": "ne", "Nigeria": "ng", "Niue": "nu", "Norfolk Island": "nf", "North Macedonia": "mk",
  "Northern Mariana Islands": "mp", "Norway": "no", "Oman": "om", "Pakistan": "pk", "Palau": "pw",
  "Palestinian territories": "ps", "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe",
  "Philippines": "ph", "Pitcairn": "pn", "Poland": "pl", "Portugal": "pt", "Puerto Rico": "pr",
  "Qatar": "qa", "Romania": "ro", "Russia": "ru", "Rwanda": "rw", "Reunion": "re",
  "Saint Barthelemy": "bl", "Saint Helena, Ascension and Tristan da Cunha": "sh", "Saint Kitts & Nevis": "kn", "Saint Lucia": "lc", "St Martin": "mf",
  "Saint Pierre and Miquelon": "pm", "Saint Vincent & Grenadines": "vc", "Samoa": "ws", "San Marino": "sm", "Sao Tome and Principe": "st",
  "Saudi Arabia": "sa", "Senegal": "sn", "Serbia": "rs", "Seychelles": "sc", "Sierra Leone": "sl",
  "Singapore": "sg", "Sint Maarten": "sx", "Slovakia": "sk", "Slovenia": "si", "Solomon Islands": "sb",
  "Somalia": "so", "South Africa": "za", "South Georgia and the South Sandwich Islands": "gs", "South Sudan": "ss", "Spain": "es",
  "Sri Lanka": "lk", "Sudan": "sd", "Suriname": "sr", "Svalbard and Jan Mayen": "sj", "Sweden": "se",
  "Switzerland": "ch", "Syria": "sy", "Taiwan": "tw", "Tajikistan": "tj", "Tanzania": "tz",
  "Thailand": "th", "Timor-Leste": "tl", "Togo": "tg", "Tokelau": "tk", "Tonga": "to",
  "Trinidad and Tobago": "tt", "Tunisia": "tn", "Turkey": "tr", "Turkmenistan": "tm", "Turks and Caicos Islands": "tc",
  "Tuvalu": "tv", "Uganda": "ug", "Ukraine": "ua", "United Arab Emirates": "ae", "United Kingdom": "gb",
  "United States Minor Outlying Islands": "um", "United States": "us", "Uruguay": "uy", "Uzbekistan": "uz", "Vanuatu": "vu",
  "Venezuela": "ve", "Vietnam": "vn", "British Virgin Islands": "vg", "Virgin Islands (U.S.)": "vi", "Wallis and Futuna": "wf",
  "Western Sahara": "eh", "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw",
  "Kosovo": "xk", "MS Zaandam": "xmz", "Diamond Princess": "xdp"
}

window.stateCodes = {
  "United States": {
    "Alabama": "us-al", "Alaska": "us-ak", "American Samoa": "us-as", "Arizona": "us-az",
    "Arkansas": "us-ar", "California": "us-ca", "Colorado": "us-co", "Connecticut": "us-ct", "Delaware": "us-de",
    "District of Columbia": "us-dc", "Florida": "us-fl", "Georgia": "us-ga", "Guam": "us-gu", "Hawaii": "us-hi",
    "Idaho": "us-id", "Illinois": "us-il", "Indiana": "us-in", "Iowa": "us-ia", "Kansas": "us-ks",
    "Kentucky": "us-ky", "Louisiana": "us-la", "Maine": "us-me", "Maryland": "us-md", "Massachusetts": "us-ma",
    "Michigan": "us-mi", "Minnesota": "us-mn", "Mississippi": "us-ms", "Missouri": "us-mo", "Montana": "us-mt",
    "Nebraska": "us-ne", "Nevada": "us-nv", "New Hampshire": "us-nh", "New Jersey": "us-nj", "New Mexico": "us-nm",
    "New York": "us-ny", "North Carolina": "us-nc", "North Dakota": "us-nd", "Northern Mariana Islands": "us-mp", "Ohio": "us-oh",
    "Oklahoma": "us-ok", "Oregon": "us-or", "Pennsylvania": "us-pa", "Puerto Rico": "us-pr", "Rhode Island": "us-ri",
    "South Carolina": "us-sc", "South Dakota": "us-sd", "Tennessee": "us-tn", "Texas": "us-tx", "United States Minor Outlying Islands": "us-um",
    "Utah": "us-ut", "Vermont": "us-vt", "Virgin Islands": "us-vi", "Virginia": "us-va", "Washington": "us-wa",
    "West Virginia": "us-wv", "Wisconsin": "us-wi", "Wyoming": "us-wy",
    "Diamond Princess": "us-xdp", "Grand Princess": "us-xgp"
  },
  "Canada": {
    "Alberta": "ca-ab", "British Columbia": "ca-bc", "Manitoba": "ca-mb", "New Brunswick": "ca-nb",
    "Newfoundland and Labrador": "ca-nl", "Northwest Territories": "ca-nt", "Nova Scotia": "ca-ns", "Nunavut": "ca-nu",
    "Ontario": "ca-on", "Prince Edward Island": "ca-pe", "Quebec": "ca-qc", "Saskatchewan": "ca-sk", "Yukon": "ca-yt",
    "Diamond Princess": "ca-xdp", "Grand Princess": "ca-xgp"
  },
  "Australia": {
    "Australian Capital Territory": "au-act", "New South Wales": "au-nsw", "Northern Territory": "au-nt", "Queensland": "au-qld",
    "South Australia": "au-sa", "Tasmania": "au-tas", "Victoria": "au-vic", "Western Australia": "au-wa"
  },
  "China": {
    "Anhui": "cn-ah", "Aomen": "cn-mo", "Beijing": "cn-bj", "Chongqing": "cn-cq",
    "Fujian": "cn-fj", "Gansu": "cn-gs", "Guangdong": "cn-gd", "Guangxi": "cn-gx", "Guizhou": "cn-gz",
    "Hainan": "cn-hi", "Hebei": "cn-he", "Heilongjiang": "cn-hl", "Henan": "cn-ha", "Hubei": "cn-hb",
    "Hunan": "cn-hn", "Jiangsu": "cn-js", "Jiangxi": "cn-jx", "Jilin": "cn-jl", "Liaoning": "cn-ln",
    "Inner Mongolia": "cn-nm", "Ningxia": "cn-nx", "Qinghai": "cn-qh", "Shaanxi": "cn-sn", "Shandong": "cn-sd",
    "Shanghai": "cn-sh", "Shanxi": "cn-sx", "Sichuan": "cn-sc", "Tianjin": "cn-tj", "Xinjiang": "cn-xj",
    "Tibet": "cn-xz", "Yunnan": "cn-yn", "Zhejiang": "cn-zj"
  } 
}

window.specialCodes = {
  'Europe': 'eur',
  'EU 27': 'eu'
}

let BASIC_MODES = ['linear', 'logarithmic'];


// --- init

function initCorona() {
  calculateDateRange();
  calculateTotalPopulations();
  buildCodeMap();
  buildPlaceMap();

  buildSidebarList();
  restoreSelectedCountries();
  initializeFromPermalink();

  watchForDarkMode();
  watchForPermalinkChanges();
}

function buildSidebarList() {
  let dataList = document.getElementById('country_list');
  let list = document.getElementById('list');
  list.innerHTML = '';

  let ranking = [];
  let autocompleteList = [];

  let sortedItems = window.coronaData.sortedBy(function(item) {
    return [
      item['order'] || 1000,
      (item['place'][0] || '').toLowerCase(),
      (item['place'][1] || '').toLowerCase()
    ]
  });

  sortedItems.forEach(function(item) {
    let place = item['place'];
    let autocompleteName = place[1] || place[0];

    if (place[0]) {
      if (place[0] == 'United States' && place[1] == 'Georgia') {
        autocompleteList.push('Georgia US');
      } else if (!isShip(place)) {
        autocompleteList.push(autocompleteName);
      }
    } else {
      if (item['autocomplete']) {
        autocompleteList.push(autocompleteName);
      }
    }

    if (item['hidden']) { return }

    if (place[1] && place[0]) {
      if ((!window.stateCodes[place[0]] || !window.stateCodes[place[0]][place[1]]) && window.console) {
        console.error("Missing state code for " + place);
      }
    } else if (place[0]) {
      if (!window.countryCodes[place[0]] && window.console) {
        console.error("Missing country code for " + place[0]);
      }
    }

    let a = document.createElement('a');

    a.tag = formatPlaceForPermalink(place);
    a.country = place[0];
    a.region = place[1];

    if (a.tag == 'compare_countries') {
      a.tag = 'compare';
    }

    if (item['component']) {
      a.component = item['component'];
    }

    a.href = '#' + a.tag;

    a.onclick = function() {
      let oldOffset = a.parentElement.offsetTop;

      selectPlace(place, a.component);
      a.classList.add('selected');

      updatePermalink(a.tag);

      let newOffset = a.parentElement.offsetTop;
      list.scrollTop += (newOffset - oldOffset);

      return false;
    };

    if (!place[0]) {
      a.classList.add('total');
      a.innerText = place[1];
    } else if (place[1]) {
      a.classList.add('region');

      let countrySpan = document.createElement('span');
      countrySpan.classList.add('country');
      countrySpan.innerText = place[0] + ' >';
      a.appendChild(countrySpan);

      a.appendChild(document.createTextNode(place[1]));
    } else {
      a.innerText = place[0];
    }

    let currentCount;
    let data = getDataForPlace(place);

    if (data) {
      let dates = Object.keys(data).sortedBy(dateSort);
      currentCount = data[dates.last()][0];
    } else {
      currentCount = '-';
    }

    if (!isShip(place)) {
      ranking.push([currentCount, place]);
    }

    let span = document.createElement('span');
    span.classList.add('counter');
    span.innerText = currentCount;
    a.appendChild(span);

    let li = document.createElement('li');
    li.appendChild(a);
    list.appendChild(li);
  });

  window.ranking = ranking.sortedBy(r => -r[0]);

  autocompleteList.sortedBy(v => v.toLowerCase()).forEach(function(label) {
    let option = document.createElement('option');
    option.value = label;
    dataList.appendChild(option);
  });
}

function buildCodeMap() {
  let map = {};

  Object.keys(window.countryCodes).forEach(function(name) {
    map[window.countryCodes[name]] = [name, null];
  });

  Object.keys(window.stateCodes).forEach(function(country) {
    let regionMap = window.stateCodes[country];

    Object.keys(regionMap).forEach(function(name) {
      map[regionMap[name]] = [country, name];
    });
  });

  Object.keys(window.specialCodes).forEach(function(name) {
    map[window.specialCodes[name]] = [null, name];
  });

  window.codeMap = map;
}

function buildPlaceMap(json) {
  let map = {};

  window.coronaData.forEach(function(item) {
    let key = dataKeyForPlace(item['place']);
    map[key] = item['data'];
  });

  window.placeMap = map;
}

function calculateDateRange() {
  let jsons = window.coronaData.map(d => d['data']).filter(d => d);
  window.dateRange = uniqueDatesFromJSONList(jsons);
}

function calculateTotalPopulations() {
  window.populations['Europe'] = window.europeanCountries.map(c => window.populations[c]).reduce((s, x) => s + x);
  window.populations['EU 27'] = window.euCountries.map(c => window.populations[c]).reduce((s, x) => s + x);
}

function initializeFromPermalink() {
  let hash = getPermalinkHash();
  let viewName = getPermalinkTag();

  if (!window.selectedCountries) {
    window.selectedCountries = getCountrySet('top_countries');
  }

  if (viewName == 'compare_countries') {
    viewName = 'compare';
  } else if (['top_countries', 'top_in_europe', 'top_us', 'top_exc_china', 'compare_clear'].includes(viewName)) {
    setSelectedCountries(getCountrySet(viewName));
    viewName = 'compare';
  }

  let dot = hash.indexOf('.');
  if (dot > -1) {
    let viewMode = hash.slice(dot + 1).replace(/\?.*$/, '');

    switch (viewMode) {
    case 'log':
      selectMode('logarithmic', false);
      break;
    case 'daily':
      selectMode('daily', false);
      break;
    case 'perc':
      selectMode('percent', false);
      break;
    }
  }

  if (viewName == 'compare') {
    let question = hash.indexOf('?');
    if (question > -1) {
      let options = hash.slice(question + 1).split('&').map(t => t.split('='));

      options.forEach(function(opt) {
        switch (opt[0]) {
        case 'val':
          if (opt[1] == 'd') {
            window.currentValueMode = 'deaths';
            selectValueMode('deaths', false);
          };
          break;
        case 'align100':
          window.alignBy100 = true;
          document.getElementById('align_by_100').checked = true;
          break;
        case 'lwk':
          window.lastWeeks = true;
          document.getElementById('last_weeks').checked = true;
          break;
        case 'pop':
          window.byPopulation = true;
          document.getElementById('by_population').checked = true;
          break;
        case 'c':
          let codes = opt[1];
          setSelectedCountries((codes == '') ? [] : codes.split(',').map(findPlaceByCode).filter(c => c));
          break;
        }
      });
    }
  }

  window.sortedCountries = window.selectedCountries.sortedBy(placeSort);

  let rows = Array.from(document.getElementById('list').querySelectorAll('a'));
  let linkedRow = rows.find(a => a.tag == viewName);

  if (linkedRow) {
    selectPlace([linkedRow.country, linkedRow.region], linkedRow.component);
    linkedRow.scrollIntoViewIfNeeded();
  } else {
    selectPlace([null, 'Total']);
  }
}

function updatePermalink(tag) {
  if (!tag) {
    tag = getPermalinkTag();
  }

  let url = '#' + tag;

  switch (window.currentMode) {
  case 'linear':
    break;
  case 'logarithmic':
    url += '.log';
    break;
  case 'daily':
    url += '.daily';
    break;
  case 'percent':
    url += '.perc';
    break;
  }

  if (window.inCompareMode) {
    let options = {};

    switch (window.currentValueMode) {
    case 'confirmed':
      break;
    case 'deaths':
      options['val'] = 'd';
      break;
    }

    if (window.alignBy100) {
      options['align100'] = 1;
    }

    if (window.lastWeeks) {
      options['lwk'] = 1;
    }

    if (window.byPopulation) {
      options['pop'] = 1;
    }

    options['c'] = window.selectedCountries.map(codeForPlace).filter(c => c).join(',');

    let keys = Object.keys(options);

    if (keys.length > 0) {
      url += '?' + keys.map(k => k + '=' + options[k]).join('&');
    }
  }

  history.replaceState({}, null, url);
}

function watchForDarkMode() {
  window.matchMedia('(prefers-color-scheme: dark)').addListener(updateDarkMode);
}

function updateDarkMode() {
  let chart = window.chart;
  let options = chartOptions(null, window.currentMode);

  chart.options.title.fontColor = options.title.fontColor;
  chart.options.legend.labels.fontColor = options.legend.labels.fontColor;
  chart.options.scales.xAxes[0].gridLines = options.scales.xAxes[0].gridLines;
  chart.options.scales.yAxes[0].gridLines = options.scales.yAxes[0].gridLines;
  chart.options.scales.xAxes[0].ticks.fontColor = options.scales.xAxes[0].ticks.fontColor;
  chart.options.scales.yAxes[0].ticks.fontColor = options.scales.yAxes[0].ticks.fontColor;
  chart.options.tooltips.backgroundColor = options.tooltips.backgroundColor;
  chart.update();
}

function watchForPermalinkChanges() {
  window.addEventListener("hashchange", initializeFromPermalink, false);
}

function restoreSelectedCountries() {
  let list = localStorage.getItem('selectedCountries');

  if (list) {
    window.selectedCountries = list.split(',').map(findPlaceByCode).filter(c => c);
  }
}

function setSelectedCountries(selectedCountries) {
  window.selectedCountries = selectedCountries;

  try {
    localStorage.setItem('selectedCountries', selectedCountries.map(codeForPlace).filter(c => c).join(','));
  } catch (error) {}
}


// -- handling list controls

function onCountrySearch(event) {
  let search = document.getElementById('search').querySelector('input[type=search]');
  let text = search.value.toLowerCase().trim();

  let list = document.getElementById('list');
  let elements = Array.from(list.querySelectorAll('li a'));

  if (text == '') {
    list.classList.remove('filtered');

    let selected = elements.find(a => a.classList.contains('selected'));
    if (selected) {
      selected.scrollIntoViewIfNeeded();
    }
  } else {
    list.classList.add('filtered');

    let altText = window.shortcuts[text] && window.shortcuts[text].toLowerCase();

    elements.forEach(function(a) {
      let matched = a.country && !a.region && a.country.toLowerCase().includes(text)
                 || a.country && !a.region && altText && a.country.toLowerCase().includes(altText)
                 || a.region && a.region.toLowerCase().includes(text)
                 || a.region && altText && a.region.toLowerCase().includes(altText);

      if (matched) {
        a.classList.add('matched');
      } else {
        a.classList.remove('matched');
      }
    });

    list.scrollTop = 0;
  }
}


// -- handling nav bar controls

function selectMode(a, redraw) {
  if (typeof a == 'string') {
    a = document.querySelector('a[data-mode="' + a + '"]');
  }

  let previousMode = window.currentMode;
  window.currentMode = a.getAttribute('data-mode');

  highlightSelectedSegment(a);

  if (redraw !== false) {
    updatePermalink(null);

    if (BASIC_MODES.includes(previousMode) && BASIC_MODES.includes(currentMode)) {
      let chart = window.chart;
      chart.options.scales.yAxes[0].type = currentMode;

      if (window.inCompareMode) {
        configureOptionsForCompareCountries(chart.options, chart.data.datasets);
      }

      chart.update();
    } else if (window.inCompareMode) {
      resetComparedCountries();
    } else {
      let place = window.currentPlace;
      selectPlace(place);
    }
  }

  return false;
}

function selectValueMode(a, redraw) {
  if (typeof a == 'string') {
    a = document.querySelector('a[data-mode="' + a + '"]');
  }

  window.currentValueMode = a.getAttribute('data-mode');

  highlightSelectedSegment(a);

  if (redraw !== false) {
    updatePermalink(null);
    resetComparedCountries();
  }

  return false;
}

function highlightSelectedSegment(a) {
  Array.from(a.parentNode.querySelectorAll('a')).forEach(a => a.classList.remove('selected'));
  a.classList.add('selected');
}

function updateModeSelectorElements(elements) {
  let modeSelector = document.getElementById('current_mode');
  let segments = Array.from(modeSelector.querySelectorAll('a'))
  let enabled = [];

  segments.forEach(function(a) {
    let modeName = a.getAttribute('data-mode');
    if (elements[modeName] === false) {
      a.style.display = 'none';
    } else {
      a.style.display = 'inline';
      enabled.push(a);
    }
  });

  segments.forEach(function(a) {
    if (a == enabled[0]) {
      a.classList.add('first');
    } else {
      a.classList.remove('first');
    }

    if (a == enabled.last()) {
      a.classList.add('last');
    } else {
      a.classList.remove('last');
    }
  });

  if (elements[window.currentMode] === false) {
    selectMode(enabled[0], false);
  }
}

function updateCheckboxes(sender) {
  let spanAlignBy100 = document.getElementById('span_align_by_100');
  let spanLastWeeks = document.getElementById('span_last_weeks');
  let spanByPopulation = document.getElementById('span_by_population');

  let alignBy100 = spanAlignBy100.querySelector('input');
  let lastWeeks = spanLastWeeks.querySelector('input');
  let byPopulation = spanByPopulation.querySelector('input');

  switch (window.currentMode) {
  case 'linear':
  case 'logarithmic':
  case 'daily':
    spanAlignBy100.style.display = 'inline';
    spanLastWeeks.style.display = 'none';
    spanByPopulation.style.display = 'inline';

    window.lastWeeks = false;
    lastWeeks.checked = false;
    break;
  case 'percent':
    spanAlignBy100.style.display = 'inline';
    spanLastWeeks.style.display = 'inline';
    spanByPopulation.style.display = 'none';

    window.byPopulation = false;
    byPopulation.checked = false;
    break;
  }

  if (alignBy100.checked && lastWeeks.checked) {
    if (sender == lastWeeks) {
      alignBy100.checked = false;
      window.alignBy100 = false;
    } else {
      lastWeeks.checked = false;
      window.lastWeeks = false;
    }
  }
}

function changeAlignByDate() {
  let checkbox = document.getElementById('align_by_100');
  window.alignBy100 = checkbox.checked;

  updateCheckboxes(checkbox);
  updatePermalink(null);
  resetComparedCountries();
}

function changeLastWeeks() {
  let checkbox = document.getElementById('last_weeks');
  window.lastWeeks = checkbox.checked;

  if (window.alignBy100) {
    updateCheckboxes(checkbox);
    resetComparedCountries();
  } else {
    let chart = window.chart;
    configureOptionsForCompareCountries(chart.options, chart.data.datasets);
    chart.update();
  }

  updatePermalink(null);
}

function changeByPopulation() {
  let checkbox = document.getElementById('by_population');
  window.byPopulation = checkbox.checked;

  updatePermalink(null);
  resetComparedCountries();
}

function onAddCountryKeyPress(e) {
  document.getElementById('place_search').classList.remove('error');

  if (e.keyCode == 13) {
    addSelectedCountry();
  }
}

function addSelectedCountry() {
  let searchField = document.getElementById('place_search');
  let text = searchField.value.toLowerCase();

  if (window.shortcuts[text]) {
    text = window.shortcuts[text].toLowerCase();
  }

  let entry = window.coronaData.find(function(item) {
    let place = item['place'];

    if (place[0]) {
      return (
        text == 'georgia us' && place[0] == 'United States' && place[1] == 'Georgia' ||
        text == 'georgia' && place[0] == 'Georgia' ||
        place[0].toLowerCase() == text && place[1] == null ||
        place[1] && place[1].toLowerCase() == text
      );
    } else {
      return place[1].toLowerCase() == text && item['autocomplete'];
    }
  });

  if (entry) {
    addCountryToChart(entry['place'], entry['data']);

    searchField.value = '';
  } else {
    searchField.classList.add('error');
  }

  return false;
}

function updatePlaceSearchState() {
  let canAddMoreCountries = (window.chart.data.datasets.length < window.colorSet.length);
  document.getElementById('place_search').disabled = !canAddMoreCountries;
}

function selectCountrySetLink(a) {
  let countrySet = a.href.replace(/.*#/, '');
  resetComparedCountries(countrySet);
  updatePermalink(null);
  return false;
}


// --- help & settings

function showHelp() {
  document.getElementById('help_container').style.display = 'block';
  document.getElementById('help_container').querySelector('.content').scrollTop = 0;
  document.getElementById('help_overlay').style.display = 'block';
  return false;
}

function closeHelp() {
  document.getElementById('help_container').style.display = 'none';
  document.getElementById('help_overlay').style.display = 'none';
  return false;
}

function toggleExtraPanel() {
  let panel = document.getElementById('extra_panel');

  if (panel.classList.contains('visible')) {
    panel.classList.remove('visible');
    document.querySelector('#country_selection .add img').style.visibility = 'visible';
  } else {
    panel.classList.add('visible');
    document.querySelector('#country_selection .add img').style.visibility = 'hidden';

    document.querySelector('#settings_button').style.border = 'none';
    document.querySelector('#settings_button').style.top = '22px';
    document.querySelector('#settings_button').style.padding = '0';
    document.querySelector('#settings_button').style.paddingRight = '6px';
  }

  return false;
}


// --- chart selection

function selectPlace(place, component) {
  window.currentPlace = place;

  let rows = Array.from(document.getElementById('list').querySelectorAll('li a'));
  rows.forEach(function(a) {
    if (a.country == place[0] && a.region == place[1]) {
      a.classList.add('selected');
    } else {
      a.classList.remove('selected');
    }
  });
  rows.filter(a => a.country != null && a.region != null).forEach(function(a) {
    if (a.country == place[0]) {
      a.classList.add('expanded');
    } else {
      a.classList.remove('expanded');
    }
  });

  let nav = document.querySelector('nav');
  let modeSelector = document.getElementById('current_mode');
  let valueModeSelector = document.getElementById('value_to_show');
  let countrySelection = document.getElementById('country_selection');
  let checkboxes = document.getElementById('checkboxes');

  modeSelector.style.display = 'inline-block';

  if (component == 'compare') {
    window.inCompareMode = true;

    nav.classList.add('compare');
    valueModeSelector.style.display = 'inline-block';
    updateCheckboxes();
    countrySelection.style.display = 'block';
    checkboxes.style.display = 'inline-block';

    updateContainerSize();
    buildCompareCountriesChart();
  } else {
    window.inCompareMode = false;

    nav.classList.remove('compare');
    valueModeSelector.style.display = 'none';
    countrySelection.style.display = 'none';
    checkboxes.style.display = 'none';

    updateContainerSize();
    buildSingleCountryChart(place);
  }
}

function updateContainerSize() {
  let margin = document.querySelector('nav').scrollHeight;

  if (document.getElementById('country_selection').style.display == 'block') {
    margin += document.getElementById('country_selection').scrollHeight;
  }

  if (document.getElementById('warning')) {
    margin += document.getElementById('warning').scrollHeight;
  }

  document.getElementById('chart_container').style.height = 'calc(100vh - ' + margin + 'px)';
}


// --- drawing charts

function createNewChart(params) {
  let context = document.getElementById('corona_chart').getContext('2d');

  if (window.chart) {
    window.chart.destroy();
  }

  window.chart = new Chart(context, params);
}

function buildSingleCountryChart(place) {
  let json = getDataForPlace(place);
  let dates = Object.keys(json).filter(d => json[d][0] > 0).sortedBy(dateSort);
  let placeName = formatPlaceForTitle(place);

  let chartType, datasets, title, minX = undefined;

  if (currentMode == 'daily') {
    chartType = 'bar';
    title = placeName + ' - daily increase';
    datasets = [
      {
        label: 'New confirmed',
        data: dates.map((d, i) => i == 0 ? 0 : (json[d][0] - json[dates[i-1]][0])),
        borderColor: '#00f',
        backgroundColor: '#00f',
      },
      {
        label: 'New deaths',
        data: dates.map((d, i) => i == 0 ? 0 : (json[d][1] - json[dates[i-1]][1])),
        borderColor: '#f00',
        backgroundColor: '#f00'
      },
      {
        label: 'New recovered',
        data: dates.map((d, i) => i == 0 ? 0 : (json[d][2] - json[dates[i-1]][2])),
        borderColor: '#0c0',
        backgroundColor: '#0c0'
      }
    ];
  } else if (currentMode == 'percent') {
    minX = dates.find((d, i) => i > 0 && json[d][0] > json[dates[i-1]][0]);

    chartType = 'line';
    title = placeName + ' - % increase';
    datasets = [
      {
        label: '% increase confirmed',
        data: dates.map((d, i) => i == 0 ? null : percentIncrease(json[dates[i-1]][0], json[d][0])),
        borderColor: '#00f',
        pointBackgroundColor: '#00f',
      },
      {
        label: '5-day trend',
        data: dates.map((d, i) => i < 5 ? null : percentIncreaseN(json[dates[i-5]][0], json[d][0], 5)),
        borderColor: '#f0f',
        pointRadius: 0,
        pointHitRadius: 0,
        fill: false,
        lineTension: 0.2,
        order: -1 
      }
    ];
  } else {
    chartType = 'line';
    title = placeName;
    datasets = [
      {
        label: 'Confirmed',
        data: dates.map(d => json[d][0]),
        borderColor: '#00f',
        pointBackgroundColor: '#00f',
        order: 0
      },
      {
        label: 'Deaths',
        data: dates.map(d => json[d][1]),
        borderColor: '#f00',
        pointBackgroundColor: '#f00',
        order: 1
      }
    ];

    let recovered = dates.map(d => json[d][2]);

    if (recovered.some(d => d > 0)) {
      datasets = datasets.concat([
        {
          label: 'Recovered',
          data: recovered,
          borderColor: '#0c0',
          pointBackgroundColor: '#0c0',
          order: 2
        },
        {
          label: 'Active',
          data: dates.map(d => json[d][0] ? json[d][0] - (json[d][1] || 0) - (json[d][2] || 0) : json[d][0]),
          borderColor: '#6929c4',
          pointBackgroundColor: '#6929c4',
          order: 0
        }
      ]);
    }
  }

  let options = chartOptions(title, window.currentMode);

  if (minX) {
    options.scales.xAxes[0].ticks.min = formatDate(minX);
  }

  createNewChart({
    type: chartType,
    data: {
      labels: dates.map(formatDate),
      datasets: datasets
    },
    options: options
  });    
}

function buildCompareCountriesChart() {
  let countries = window.selectedCountries;
  let jsons = countries.map(c => getDataForPlace(c));

  let datasets = countries.map(function(c, i) {
    return datasetForCountry(
      c,
      window.sortedCountries.indexOf(c),
      window.dateRange,
      jsons[i],
      window.alignBy100,
      window.byPopulation,
      window.currentValueMode,
      window.currentMode
    );
  });

  let options = chartOptions(null, window.currentMode);
  configureOptionsForCompareCountries(options, datasets);

  createNewChart({
    type: 'line',
    data: {
      labels: labelsForCompareCountries(),
      datasets: datasets
    },
    options: options
  });

  updatePlaceSearchState();
}

function resetComparedCountries(countrySet) {
  let chart = window.chart;

  if (countrySet) {
    let countries = (typeof countrySet == 'string') ? getCountrySet(countrySet) : countrySet;
    setSelectedCountries(countries);
    window.sortedCountries = countries.sortedBy(placeSort);
  }

  updateCheckboxes();

  if (window.selectedCountries.length > 0) {
    let countries = window.selectedCountries;
    let jsons = countries.map(c => getDataForPlace(c));

    chart.data.labels = labelsForCompareCountries();

    chart.data.datasets = countries.map(function(c, i) {
      return datasetForCountry(
        c,
        window.sortedCountries.indexOf(c),
        window.dateRange,
        jsons[i],
        window.alignBy100,
        window.byPopulation,
        window.currentValueMode,
        window.currentMode
      );
    });
  } else {
    chart.data.datasets = [];
  }

  configureOptionsForCompareCountries(chart.options, chart.data.datasets);
  updatePlaceSearchState();

  chart.update();

  return false;
}

function addCountryToChart(place, data) {
  let chart = window.chart;

  if (chart.data.datasets.find(d => d.label == formatPlaceForLegend(place))) {
    return false;
  }

  setSelectedCountries(window.selectedCountries.concat([place]));
  window.sortedCountries.push(place);

  chart.data.datasets.push(datasetForCountry(
    place,
    chart.data.datasets.length,
    window.dateRange,
    data,
    window.alignBy100,
    window.byPopulation,  
    window.currentValueMode,
    window.currentMode
  ));

  configureOptionsForCompareCountries(chart.options, chart.data.datasets);
  updatePlaceSearchState();
  updatePermalink(null);

  chart.update();
}

function configureOptionsForCompareCountries(options, datasets) {
  if (window.alignBy100 || window.selectedCountries.find(c => c[0] == 'China')) {
    options.scales.xAxes[0].ticks.min = undefined;
  } else {
    options.scales.xAxes[0].ticks.min = '2/15';
  }

  if (window.currentMode == 'percent') {
    let value = (window.currentValueMode == 'deaths') ? 'deaths' : 'cases';

    options.title.text = 'Compare Countries (% increase of ' + value + ' - 3-day trend)';
  } else if (window.currentMode == 'daily') {
    let value = (window.currentValueMode == 'deaths') ? 'deaths' : 'cases';
    let per = (window.byPopulation) ? ' per 1 mln' : '';

    options.title.text = 'Compare Countries (new daily ' + value + per + ')';
  } else {
    let value = (window.currentValueMode == 'deaths') ? 'deaths' : 'confirmed cases';
    let per = (window.byPopulation) ? ' per 1 mln' : '';

    options.title.text = 'Compare Countries (' + value + per + ')';
  }

  if (window.currentMode == 'percent') {
    options.scales.yAxes[0].type = 'linear';
    options.scales.yAxes[0].ticks.max = 1;
    options.scales.yAxes[0].ticks.min = 0;
    options.scales.yAxes[0].ticks.precision = 2;
    options.tooltips.callbacks.label = renderTooltipPercentValue;
    options.tooltips.callbacks.footer = Chart.defaults.global.tooltips.callbacks.footer;

    if (window.lastWeeks) {
      options.scales.xAxes[0].ticks.min = formatDate(window.dateRange[window.dateRange.length - 21]);
      options.scales.yAxes[0].ticks.max = getRecentMaxInDatasets(datasets, 21);
      options.legend.onClick = function(e, legendItem) {
        Chart.defaults.global.legend.onClick.call(this, e, legendItem);

        let chart = this.chart;
        let visibleDatasets = chart.data.datasets.filter((d, i) => !chart.getDatasetMeta(i).hidden);
        chart.options.scales.yAxes[0].ticks.max = getRecentMaxInDatasets(visibleDatasets, 21);
        chart.update();
      };
    } else {
      options.legend.onClick = Chart.defaults.global.legend.onClick;
    }
  } else {
    options.scales.yAxes[0].type = (window.currentMode == 'logarithmic') ? 'logarithmic' : 'linear';
    options.scales.yAxes[0].ticks.max = undefined;
    options.scales.yAxes[0].ticks.precision = 0;
    options.tooltips.callbacks.label = renderTooltipNormalValue;
    options.tooltips.callbacks.footer = renderTooltipFooter;
    options.legend.onClick = Chart.defaults.global.legend.onClick;

    if (window.byPopulation && window.currentMode == 'logarithmic' && !window.alignBy100) {
      options.scales.yAxes[0].ticks.min = 0.5;
    } else if (window.currentMode == 'daily') {
      options.scales.yAxes[0].ticks.min = 0;
    } else {
      options.scales.yAxes[0].ticks.min = undefined;
    }
  }

  if (window.alignBy100) {
    let maxLength = Math.max.apply(null, datasets.map(d => d.data.length))

    options.tooltips.callbacks.title = renderTooltipTitleForDay;
    options.scales.xAxes[0].ticks.max = "" + (maxLength + 4);
  } else {
    options.tooltips.callbacks.title = Chart.defaults.global.tooltips.callbacks.title;
    options.scales.xAxes[0].ticks.max = undefined;
  }
}

function labelsForCompareCountries() {
  if (window.alignBy100) {
    return window.dateRange.map((x, i) => "" + (i + 1));
  } else {
    return window.dateRange.map(formatDate);
  }
}

function getTop10Countries(filter) {
  return window.ranking.filter(x => filter(x[1])).slice(0, 10).map(x => x[1]);
}

function getCountrySet(name) {
  switch (name) {
  case 'top_countries':
    return getTop10Countries(c => !c[1]);
  case 'top_in_europe':
    return getTop10Countries(c => !c[1] && europeanCountries.includes(c[0]));
  case 'top_us':
    return getTop10Countries(c => c[1] && c[0] == 'United States');
  case 'top_exc_china':
    return getTop10Countries(c => !c[1] && c[0] != 'China');
  case 'compare_clear':
    return [];
  default:
    throw 'No such country set ' + name;
  }
}

function getRecentMaxInDatasets(datasets, days) {
  let maxValues = datasets.map(ds => Math.max.apply(null, ds.data.slice(ds.data.length - days)));
  let maxInAll = Math.max.apply(null, maxValues);

  return Math.min(1.0, Math.ceil(maxInAll * 20) / 20);
}

function datasetForCountry(place, colorIndex, dates, json, alignBy100, byPopulation, valueMode, viewMode) {
  let valueIndex = (valueMode == 'deaths') ? 1 : 0;
  let values;

  if (viewMode == 'percent') {
    values = dates.map(function(d, i) {
      if (i > 0) {
        for (let n = 3; n >= 1; n--) {
          if (i >= n && json[d] && json[dates[i-n]] && json[dates[i-n]][valueIndex]) {
            return percentIncreaseN(json[dates[i-n]][valueIndex], json[d][valueIndex], n);
          }
        }
      }

      return null;
    });
  } else if (viewMode == 'daily') {
    values = dates.map(function(d, i) {
      if (i > 0 && json[d] && json[d][valueIndex] && json[dates[i-1]] && json[dates[i-1]][valueIndex]) {
        return json[d][valueIndex] - json[dates[i-1]][valueIndex];
      } else {
        return null
      }
    });
  } else {
    values = dates.map(d => json[d] ? json[d][valueIndex] : undefined);
  }

  if (alignBy100) {
    let confirmed = dates.map(d => json[d] ? json[d][0] : 0);
    let index100 = confirmed.findIndex(d => d >= 100);

    if (index100 != -1) {
      values = values.slice(index100);

      let lastGoodIndex = values.concat().reverse().findIndex(d => d !== undefined);
      if (lastGoodIndex > 0) {
        values = values.slice(0, -lastGoodIndex);
      }
    } else {
      values = [];
    }
  }

  if (byPopulation) {
    let population;
    
    if (place[0] && place[1]) {
      population = window.statePopulations[place[0]][place[1]];
    } else if (place[0]) {
      population = window.populations[place[0]];
    } else {
      population = window.populations[place[1]];
    }

    values = values.map(v => v && v / (population / 1000000.0));
  }

  let data = {
    label: formatPlaceForLegend(place),
    fill: false,
    data: values,
    borderColor: window.colorSet[colorIndex],
    pointBackgroundColor: window.colorSet[colorIndex]
  };

  if (viewMode == 'percent') {
    Object.assign(data, {
      pointRadius: 1,
      borderWidth: 2
    });
  }

  return data;
}

function chartOptions(placeName, mode) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 750
    },
    title: {
      display: true,
      text: placeName,
      fontSize: 20,
      fontColor: isDarkMode() ? '#eee' : '#333',
      fontStyle: 'normal',
      padding: 20
    },
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 14,
        fontColor: isDarkMode() ? '#888' : undefined,
      }
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 13,
          fontColor: isDarkMode() ? '#888' : undefined
        },
        gridLines: {
          color: isDarkMode() ? '#333' : undefined
        }
      }],
      yAxes: [{
        type: (mode == 'logarithmic') ? 'logarithmic' : 'linear',
        ticks: {
          beginAtZero: true,
          min: 0,
          max: (mode == 'percent') ? 1 : undefined,
          fontSize: 13,
          fontColor: isDarkMode() ? '#888' : undefined,
          precision: (mode == 'percent') ? 2 : 0,
          callback: renderTickValue
        },
        gridLines: {
          color: isDarkMode() ? '#333' : undefined,
          zeroLineColor: isDarkMode() ? '#333' : undefined
        }
      }]
    },
    tooltips: {
      backgroundColor: isDarkMode() ? '#404040' : 'rgba(0, 0, 0, 0.8)',
      callbacks: {
        footer: (BASIC_MODES.includes(mode)) ?
          renderTooltipFooter : Chart.defaults.global.tooltips.callbacks.footer,
        label: (mode == 'percent') ?
          renderTooltipPercentValue : renderTooltipNormalValue
      }
    }
  }
}

function renderTickValue(value, index, values) {
  if (currentMode == 'logarithmic') {
    let firstDigit = String(value).charAt(0);

    if (['1', '2', '5'].includes(firstDigit) || index == 0) {
      return value;
    } else {
      return undefined;
    }
  } else if (currentMode == 'percent') {
    return Math.round(value * 10000) / 100 + '%';
  } else {
    return value;
  }
}

function renderTooltipTitleForDay(tooltips, data) {
  let tip = tooltips[0];

	if (tip.label.includes('/')) {
    return tip.label;
  } else {
    return "Day " + tip.label;
  }
}

function renderTooltipPercentValue(tooltip, data) {
  let label = data.datasets[tooltip.datasetIndex].label || '';

  if (label) {
    label += ': ';
  }

  label += Math.round(tooltip.yLabel * 1000) / 10;
  return label + '%';
}

function renderTooltipNormalValue(tooltip, data) {
  let label = data.datasets[tooltip.datasetIndex].label || '';

  if (label) {
    label += ': ';
  }

  label += Math.round(tooltip.yLabel * 10) / 10;
  return label;
}

function renderTooltipFooter(tooltips, data) {
  let tip = tooltips[0];
  let date = tip.label;
  let index = data.labels.indexOf(date);

  if (index == -1) {
    return null;
  } else {
    let previous = data.datasets[tip.datasetIndex].data[index - 1];

    if (previous) {
      let current = tip.yLabel;
      let diff = Math.round((current - previous) * 10) / 10;
      let perc = Math.round((current / previous - 1) * 1000) / 10;

      if (diff >= 0) {
        return '+' + perc + '% / ' + diff;
      } else {
        return perc + '% / ' + (-diff);
      }
    } else {
      return null;
    }
  }
}


// --- helpers

Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.sortedBy = function(getFields) {
  return this.concat().sort(function(a, b) {
    let af = getFields(a);
    let bf = getFields(b);

    if (!Array.isArray(af)) { af = [af] }
    if (!Array.isArray(bf)) { bf = [bf] }

    for (let i = 0; i < af.length; i++) {
      if (af[i] < bf[i]) {
        return -1;
      } else if (af[i] > bf[i]) {
        return 1;
      }
    }

    return 0;
  });
};

function codeForPlace(place) {
  if (place[0] && place[1]) {
    return window.stateCodes[place[0]][place[1]];
  } else if (place[0]) {
    return window.countryCodes[place[0]];
  } else {
    return window.specialCodes[place[1]];
  }
}

function dataKeyForPlace(place) {
  return place[1] ? (place[0] + '#' + place[1]).toLowerCase() : place[0].toLowerCase();
}

function dateSort(dateString) {
  return dateString.split('/').map(i => parseInt(i, 10)).slice(0, 2);
}

function findPlaceByCode(code) {
  let place = window.codeMap[code];

  if (!place && window.console) {
    console.error("No place found matching code: " + code);
  }

  return place;
}

function formatDate(date) {
  let fields = date.split('/');
  return fields[0] + '/' + fields[1];
}

function formatPlaceForLegend(place) {
  let name = place[1] || place[0];

  switch (name) {
    case 'South Korea': return 'S. Korea';
    case 'United Kingdom': return 'UK';
    case 'United States': return 'USA';
    case 'Georgia':
      return (place[0] == 'United States') ? 'Georgia (US)' : 'Georgia (republic)';
    default: return name;
  }
}

function formatPlaceForPermalink(place) {
  return formatPlaceForTitle(place)
          .replace(/\, /g, '_')
          .replace(/\s+/g, '_')
          .toLowerCase();
}

function formatPlaceForTitle(place) {
  if (place[0] == null) {
    // special view
    return place[1];
  } else if (place[1] == null) {
    // country
    return place[0];
  } else {
    // subregion
    return place[1] + ", " + place[0];
  }
}

function getDataForPlace(place) {
  return window.placeMap[dataKeyForPlace(place)];
}

function getPermalinkHash() {
  return location.hash.replace(/^#/, '');
}

function getPermalinkTag() {
  return getPermalinkHash().replace(/[\.\?].*/, '').toLowerCase();
}

function isDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function isShip(place) {
  let country = place[0] || '';
  let region = place[1] || '';

  return [country, region].some(x => x.includes('Princess')) || [country, region].some(x => x.startsWith('MS '));
}

function percentIncrease(fromValue, toValue) {
  if (fromValue == 0) {
    return undefined;
  } else {
    return toValue / fromValue - 1;
  }
}

function percentIncreaseN(fromValue, toValue, power) {
  if (fromValue == 0) {
    return undefined;
  } else {
    return Math.pow(toValue / fromValue, 1/power) - 1;
  }
}

function placeSort(place) {
  return [(place[0] || '').toLowerCase(), (place[1] || '').toLowerCase()];
}

function uniqueDatesFromJSONList(jsons) {
  let dates = new Set();

  jsons.forEach(function(json) {
    Object.keys(json).filter(d => json[d][0] > 0).forEach(d => dates.add(d));
  });

  return Array.from(dates).sortedBy(dateSort);
}


// --- start

window.coronaLoaded = true;

if (window.coronaData) {
  initCorona();
}
