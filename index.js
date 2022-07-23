
var albums = ["The Clash", "Give 'Em Enough Rope", "London Calling", "Sandinista!", "Combat Rock", "Cut the Crap"];
var clash = ["Janie Jones", "Remote Control", "I'm So Bored with the USA", "White Riot", "Hate and War", "What's My Name", "Deny", "London's Burning", "Career Opportunities", "Cheat", "Protex Blue", "Police & Thieves", "48 Hours", "Garageland", "Clash City Rockers", "Complete Control", "White Riot (single)", "(White Man) in Hammersmith Palais", "I Fought the Law", "Jail Guitar Doors"];
var give = ["Safe European Home", "English Civil War", "Tommy Gun", "Julie's Been Working for the Drug Squad", "Last Gang in Town", "Guns on the Roof", "Drug-Stabbing Time", "Stay Free", "Cheapskates", "All the Young Punks (New Boots and Contracts"];
var lonCal = ["London Calling", "Brand New Cadillac", "Jimmy Jazz", "Hateful", "Rudie Can't Fail", "Spanish Bombs", "The Right Profile", "Lost in the Supermarket", "Clampdown", "The Guns of Brixton", "Wrong 'Em Boyo", "Death or Glory", "Koka Kola", "The Card Cheat", "Lover's Rock", "Four Horseman", "I'm Not Down", "Revolution Rock", "Train in Vain"];
var sandan = ["The Magnificent Seven", "Hitsville UK", "Junco Partner", "Ivan Meets G.I. Joe", "The Leader", "Something About England", "Rebel Waltz", "Look Here", "The Crooked Beat", "Somebody Got Murdered", "One More Time", "One More Dub", "Lightning Strikes (Not Once but Twice)", "Up in Heaven (Not Only Here)", "Corner Soul", "Let's Go Crazy", "If Music Could Talk", "The Sound of Sinners",
             "Police on My Back", "Midnight Log", "The Equaliser", "The Call Up", "Washington Bullets", "Broadway", "Lose This Skin", "Charlie Don't Surf", "Mensforth Hill", "Junkie Slip", "Kingston Advice", "The Street Parade", "Version City", "Living in Fame", "Silicone on Sapphire", "Version Pardner", "Career Opportunities (Sandinista!)", "Shepherds Delight"];
var combat = ["Know Your Rights", "Car Jamming", "Should I Stay or Should I Go", "Rock the Casbah", "Red Angel Dragnet", "Straight to Hell", "Overpowered by Funk", "Atom Tan", "Sean Flynn", "Ghetto Defendant", "Inoculated City", "Death Is a Star"];
var cut = ["Dictator", "Dirty Punk", "We Are The Clash", "Are You Red..Y", "Cool Under Heat", "Movers and Shakers", "This Is England", "Three Card Trick", "Play to Win", "Fingerpoppin'", "North and South", "Life Is Wild"];

function clashSong() {

    document.querySelector(".exlink").style.visibility = "visible";

    const randomAlbumPosition = Math.floor(Math.random() * albums.length);
    const randomAlbum = albums[randomAlbumPosition];

    if (randomAlbum === albums[0]) {
        const randomClashSongPosition = Math.floor(Math.random() * clash.length);
        const randomClashSong = clash[randomClashSongPosition];
        document.querySelector(".song-pick").innerHTML = randomClashSong;
        document.querySelector(".clash77").style.border = "#EB1D36 thick solid";
        document.querySelector(".give").style.border = "hidden";
        document.querySelector(".loncal").style.border = "hidden";
        document.querySelector(".sandan").style.border = "hidden";
        document.querySelector(".comro").style.border = "hidden";
        document.querySelector(".cutcrap").style.border = "hidden";
        document.querySelector(".clash77").style.filter = "drop-shadow(0 0 1rem #FFFFFF)";
        document.querySelector(".give").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".loncal").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".sandan").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".comro").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".cutcrap").style.filter = "drop-shadow(0 0 0.75rem black)";
        if (randomClashSong === clash[0]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/GsVjWd1mh4w");
        } else if (randomClashSong === clash[1]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/eLZ-TPRZzrk");
        } else if (randomClashSong === clash[2]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/2D-l1MauBmM");
        } else if (randomClashSong === clash[3]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/IvG3is7Bm1w");
        } else if (randomClashSong === clash[4]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/a445pvCRyzo");
        } else if (randomClashSong === clash[5]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/D_9BvISV6Lc");
        } else if (randomClashSong === clash[6]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/2zvJJnwE2cc");
        } else if (randomClashSong === clash[7]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/I6XijqjtJoA");
        } else if (randomClashSong === clash[8]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/ihPenaGJ6P4");
        } else if (randomClashSong === clash[9]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/Hhn1CXKUE4A");
        } else if (randomClashSong === clash[10]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/4ZJ-P5P7sD0");
        } else if (randomClashSong === clash[11]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/N3A8uNG3GH4");
        } else if (randomClashSong === clash[12]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/qBr6y3bhhCU");
        } else if (randomClashSong === clash[13]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/UpapNzYkxNE");
        } else if (randomClashSong === clash[14]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/lvmoVYGUQKQ");
        } else if (randomClashSong === clash[15]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/u6ZWV7cCK5A");
        } else if (randomClashSong === clash[16]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/t6cF3ayJgM4");
        } else if (randomClashSong === clash[17]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/zI4SDH9BdD4");
        } else if (randomClashSong === clash[18]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/of0bTx2YAcs");
        } else if (randomClashSong === clash[19]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/jTA5GxhAsFM");
        }
    } if (randomAlbum === albums[1]) {
        const randomGiveSongPosition = Math.floor(Math.random() * give.length);
        const randomGiveSong = give[randomGiveSongPosition];
        document.querySelector(".song-pick").innerHTML = randomGiveSong;
        document.querySelector(".give").style.border = "#EB1D36 thick solid";
        document.querySelector(".clash77").style.border = "hidden";
        document.querySelector(".loncal").style.border = "hidden";
        document.querySelector(".sandan").style.border = "hidden";
        document.querySelector(".comro").style.border = "hidden";
        document.querySelector(".cutcrap").style.border = "hidden";
        document.querySelector(".give").style.filter = "drop-shadow(0 0 1rem #FFFFFF)";
        document.querySelector(".clash77").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".loncal").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".sandan").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".comro").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".cutcrap").style.filter = "drop-shadow(0 0 0.75rem black)";
        if (randomGiveSong === give[0]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/1xgwXkULDCs");
        } else if (randomGiveSong === give[1]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/fTnqwKqVj_0");
        } else if (randomGiveSong === give[2]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/67oBk49x_bg");
        } else if (randomGiveSong === give[3]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/VsGnYHXGtAU");
        } else if (randomGiveSong === give[4]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/H8oAzO0H198");
        } else if (randomGiveSong === give[5]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/viuf4B8GZl4");
        } else if (randomGiveSong === give[6]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/B2QGqzO-gTI");
        } else if (randomGiveSong === give[7]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/jDa8T9EM4Tg");
        } else if (randomGiveSong === give[8]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/Dn9ihX4SBeA");
        } else if (randomGiveSong === give[9]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/gD_AyGGhuCA");
        }
    } if (randomAlbum === albums[2]) {
        const randomLonCalSongPosition = Math.floor(Math.random() * lonCal.length);
        const randomLonCalSong = lonCal[randomLonCalSongPosition];
        document.querySelector(".song-pick").innerHTML = randomLonCalSong;
        document.querySelector(".loncal").style.border = "#EB1D36 thick solid";
        document.querySelector(".clash77").style.border = "hidden";
        document.querySelector(".give").style.border = "hidden";
        document.querySelector(".sandan").style.border = "hidden";
        document.querySelector(".comro").style.border = "hidden";
        document.querySelector(".cutcrap").style.border = "hidden";
        document.querySelector(".loncal").style.filter = "drop-shadow(0 0 1rem #FFFFFF)";
        document.querySelector(".clash77").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".give").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".sandan").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".comro").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".cutcrap").style.filter = "drop-shadow(0 0 0.75rem black)";
        if (randomLonCalSong === lonCal[0]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/LC2WpBcdM_A");
        } else if (randomLonCalSong === lonCal[1]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/uqTpZXcTc_s");
        } else if (randomLonCalSong === lonCal[2]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/_X2SjNpwZaY");
        } else if (randomLonCalSong === lonCal[3]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/BQjoayRUvTs");
        } else if (randomLonCalSong === lonCal[4]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/uEK9oK02D1M");
        } else if (randomLonCalSong === lonCal[5]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/Ul0uJfhywW8");
        } else if (randomLonCalSong === lonCal[6]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/ssFiUE-T2OA");
        } else if (randomLonCalSong === lonCal[7]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/hZw23sWlyG0");
        } else if (randomLonCalSong === lonCal[8]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/_lt4O-EHNnw");
        } else if (randomLonCalSong === lonCal[9]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/JcW8VNwYvL0");
        } else if (randomLonCalSong === lonCal[10]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/m463sDOYxPY");
        } else if (randomLonCalSong === lonCal[11]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/Td6I5l9UnSg");
        } else if (randomLonCalSong === lonCal[12]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/yqIsh9Vdnuc");
        } else if (randomLonCalSong === lonCal[13]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/nhbSYP8cyD8");
        } else if (randomLonCalSong === lonCal[14]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/bsmBnB0rrdI");
        } else if (randomLonCalSong === lonCal[15]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/2vp49UoVnYU");
        } else if (randomLonCalSong === lonCal[16]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/uV6-vY4O5us");
        } else if (randomLonCalSong === lonCal[17]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/07mvTzbIZok");
        } else if (randomLonCalSong === lonCal[18]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/aUzBgeI5dpc");
        }
    } if (randomAlbum === albums[3]) {
        const randomSanSongPosition = Math.floor(Math.random() * sandan.length);
        const randomSanSong = sandan[randomSanSongPosition];
        document.querySelector(".song-pick").innerHTML = randomSanSong;
        document.querySelector(".sandan").style.border = "#EB1D36 thick solid";
        document.querySelector(".clash77").style.border = "hidden";
        document.querySelector(".give").style.border = "hidden";
        document.querySelector(".loncal").style.border = "hidden";
        document.querySelector(".comro").style.border = "hidden";
        document.querySelector(".cutcrap").style.border = "hidden";
        document.querySelector(".sandan").style.filter = "drop-shadow(0 0 1rem #FFFFFF)";
        document.querySelector(".clash77").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".give").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".loncal").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".comro").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".cutcrap").style.filter = "drop-shadow(0 0 0.75rem black)";
        if (randomSanSong === sandan[0]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/dj1Nf850Lys");
        } else if (randomSanSong === sandan[1]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/kFGKm_bJ5Uw");
        } else if (randomSanSong === sandan[2]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/PtBDXzaPgWM");
        } else if (randomSanSong === sandan[3]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/i70zREBdvss");
        } else if (randomSanSong === sandan[4]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/VxgWtbMnKfs");
        } else if (randomSanSong === sandan[5]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/_TwDOO_RJ8Y");
        } else if (randomSanSong === sandan[6]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/9PCtKQ6xsyA");
        } else if (randomSanSong === sandan[7]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/_QsQFoqagnM");
        } else if (randomSanSong === sandan[8]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/wIf5DF-PoDo");
        } else if (randomSanSong === sandan[9]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/NrODxCsR4og");
        } else if (randomSanSong === sandan[10]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/Xu5D0STdIcg");
        } else if (randomSanSong === sandan[11]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/zWiSqeCnnVA");
        } else if (randomSanSong === sandan[12]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/FY1QjMDlMCc");
        } else if (randomSanSong === sandan[13]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/sc7NlVpNx8k");
        } else if (randomSanSong === sandan[14]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/IYCRMME7x7o");
        } else if (randomSanSong === sandan[15]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/_m7_nPzG0E4");
        } else if (randomSanSong === sandan[16]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/EMgSWG3WOzo");
        } else if (randomSanSong === sandan[17]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/dJLcrLRtT0M");
        } else if (randomSanSong === sandan[18]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/0tCx11ITaiY");
        } else if (randomSanSong === sandan[19]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/pUyLhxU5AwA");
        } else if (randomSanSong === sandan[20]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/2Bw00AWplAQ");
        } else if (randomSanSong === sandan[21]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/NLX1yKhSXR4");
        } else if (randomSanSong === sandan[22]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/mkoWjhZOKWo");
        } else if (randomSanSong === sandan[23]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/sgnlSJGFO5E");
        } else if (randomSanSong === sandan[24]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/Cw6e1AB60fw");
        } else if (randomSanSong === sandan[25]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/fFYLCj-hCsc");
        } else if (randomSanSong === sandan[26]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/euPRweGdALQ");
        } else if (randomSanSong === sandan[27]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/nO5PGg1H66o");
        } else if (randomSanSong === sandan[28]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/P9_d6DsSigA");
        } else if (randomSanSong === sandan[29]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/2Fh4aCVHDUA");
        } else if (randomSanSong === sandan[30]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/nKtuOdOvEXo");
        } else if (randomSanSong === sandan[31]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/x74Ojz41G4w");
        } else if (randomSanSong === sandan[32]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/FU0Lo4gqRPU");
        } else if (randomSanSong === sandan[33]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/YhHRv5mbvNs");
        } else if (randomSanSong === sandan[34]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/pvTFu6SjJ7Q");
        } else if (randomSanSong === sandan[35]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/GmT0qjseO5A");
        }
    } if (randomAlbum === albums[4]) {
        const randomComSongPosition = Math.floor(Math.random() * combat.length);
        const randomComSong = combat[randomComSongPosition];
        document.querySelector(".song-pick").innerHTML = randomComSong;
        document.querySelector(".comro").style.border = "#EB1D36 thick solid";
        document.querySelector(".clash77").style.border = "hidden";
        document.querySelector(".give").style.border = "hidden";
        document.querySelector(".loncal").style.border = "hidden";
        document.querySelector(".sandan").style.border = "hidden";
        document.querySelector(".cutcrap").style.border = "hidden";
        document.querySelector(".comro").style.filter = "drop-shadow(0 0 1rem #FFFFFF)";
        document.querySelector(".clash77").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".give").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".loncal").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".sandan").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".cutcrap").style.filter = "drop-shadow(0 0 0.75rem black)";
        if (randomComSong === combat[0]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/1EKCAE1vDzY");
        } else if (randomComSong === combat[1]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/euWnjq8-i8I");
        } else if (randomComSong === combat[2]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/BN1WwnEDWAM");
        } else if (randomComSong === combat[3]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/LJTk64tzduQ");
        } else if (randomComSong === combat[4]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/8v-VM9fT08E");
        } else if (randomComSong === combat[5]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/t7SvtikTkrM");
        } else if (randomComSong === combat[6]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/9LyTWtjYHHA");
        } else if (randomComSong === combat[7]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/iKzd7p0fyxg");
        } else if (randomComSong === combat[8]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/TkeW80R-51I");
        } else if (randomComSong === combat[9]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/9dBh8H2c2JE");
        } else if (randomComSong === combat[10]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/0Sx1nZ3ARmI");
        } else if (randomComSong === combat[11]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/aC8cNZy6aSc");
        }
    } if (randomAlbum === albums[5]) {
        const randomCutSongPosition = Math.floor(Math.random() * cut.length);
        const randomCutSong = cut[randomCutSongPosition];
        document.querySelector(".song-pick").innerHTML = randomCutSong;
        document.querySelector(".cutcrap").style.border = "#EB1D36 thick solid";
        document.querySelector(".clash77").style.border = "hidden";
        document.querySelector(".give").style.border = "hidden";
        document.querySelector(".loncal").style.border = "hidden";
        document.querySelector(".sandan").style.border = "hidden";
        document.querySelector(".comro").style.border = "hidden";
        document.querySelector(".cutcrap").style.filter = "drop-shadow(0 0 1rem #FFFFFF)";
        document.querySelector(".clash77").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".give").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".loncal").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".sandan").style.filter = "drop-shadow(0 0 0.75rem black)";
        document.querySelector(".comro").style.filter = "drop-shadow(0 0 0.75rem black)";
        if (randomCutSong === cut[0]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/SC61BdLbQMg");
        } else if (randomCutSong === cut[1]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/NSdEjFBKchw");
        } else if (randomCutSong === cut[2]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/gnGolF10XRE");
        } else if (randomCutSong === cut[3]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/8-_sL8KVM8M");
        } else if (randomCutSong === cut[4]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/EpXqbhQwKbI");
        } else if (randomCutSong === cut[5]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/a_V44HdZkvo");
        } else if (randomCutSong === cut[6]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/qkj0wUcbUeE");
        } else if (randomCutSong === cut[7]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/2zN1hVy0kEQ");
        } else if (randomCutSong === cut[8]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/OzqO9FtXmKI");
        } else if (randomCutSong === cut[9]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/MK5hpKhTnuI");
        } else if (randomCutSong === cut[10]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/LTVXshMKFgE");
        } else if (randomCutSong === cut[11]) {
          document.getElementById("link").setAttribute("href", "https://youtu.be/xhHU6liaWxg");
        }
    }

}
