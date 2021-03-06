hiragana = {
    vowels: [['あ', 'a'],['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o']],
    k: [['か', 'ka'],['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko']],
    s: [['さ', 'sa'],['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so']],
    t: [['た', 'ta'],['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to']],
    n: [['な', 'na'],['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no']],
    h: [['は', 'ha'],['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho']],
    m: [['ま', 'ma'],['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo']],
    y: [['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo']],
    r: [['ら', 'ra'],['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro']],
    w: [['わ', 'wa'], ['ん', 'n'], ['を', 'wo']],
    g: [['が', 'ga'],['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go']],
    z: [['ざ', 'za'],['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo']],
    d: [['だ', 'da'],['ぢ', 'di'], ['づ', 'du'], ['で', 'de'], ['ど', 'do']],
    b: [['ば', 'ba'],['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo']],
    p: [['ぱ', 'pa'],['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po']]
};

katakana = {
    vowels: [['ア', 'a'],['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o']],
    k: [['カ', 'ka'],['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko']],
    s: [['サ', 'sa'],['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so']],
    t: [['タ', 'ta'],['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to']],
    n: [['ナ', 'na'],['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no']],
    h: [['ハ', 'ha'],['ヒ', 'hi'], ['フ', 'fu'], ['ヘ', 'he'], ['ホ', 'ho']],
    m: [['マ', 'ma'],['ミ', 'mi'], ['ム', 'mu'], ['メ', 'me'], ['モ', 'mo']],
    y: [['ヤ', 'ya'],['ユ', 'yu'], ['ヨ', 'yo']],
    r: [['ラ', 'ra'],['リ', 'ri'], ['ル', 'ru'], ['レ', 're'], ['ロ', 'ro']],
    w: [['ワ', 'wa'], ['ン', 'n'], ['ヲ', 'wo']],
    g: [['ガ', 'ga'],['ギ', 'gi'], ['グ', 'gu'], ['ゲ', 'ge'], ['ゴ', 'go']],
    z: [['ザ', 'za'],['ジ', 'ji'], ['ズ', 'zu'], ['ゼ', 'ze'], ['ゾ', 'zo']],
    d: [['ダ', 'da'],['ヂ', 'di'], ['ヅ', 'du'], ['デ', 'de'], ['ド', 'do']],
    b: [['バ', 'ba'],['ビ', 'bi'], ['ブ', 'bu'], ['ベ', 'be'], ['ボ', 'bo']],
    p: [['パ', 'pa'],['ピ', 'pi'], ['プ', 'pu'], ['ペ', 'pe'], ['ポ', 'po']]
};
var languages = {};
small_space = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=";
languages.katakana = katakana;
languages.hiragana = hiragana;

var order = ['a','i','u','e','o'];

list = {};

// give them vowels in the beginning
list.vowels = [];
function onclicked(e){
    var row = this.className.substring(0, this.className.indexOf(" "));
    var symbol = this.id.substring(0, this.id.indexOf("_"));
    var set = this.id.substring(this.id.indexOf("_")+1, this.id.length);
    var col = order.indexOf(symbol.substring(symbol.length-1, symbol.length));
        
//  for (var x=0; x<languages[set][row].length; x++)
//  alert(symbol+ " "+ set + " was clicked in row "+ row);
    if(this.style.backgroundColor == "white" || this.style.backgroundColor == ""){
        if (!list[row])
            list[row] = [];
        list[row].push(languages[set][row][col]);
        localStorage[set+"_"+symbol] = true;
        this.style.backgroundColor = "rgb(204, 255, 220)";
    } else {
        list[row].splice(list[row].indexOf(languages[set][row][col]), 1);
        console.log(list[row]);
        localStorage[set+"_"+symbol] = false;
        this.style.backgroundColor = "white";
    }
};

if (!localStorage['initialized']){
    order.forEach(function(e){
        localStorage['hiragana_'+e] = true;
    });
    localStorage['initialized'] = true;
}
var kanachart = document.createElement('div');
kanachart.className = "border_container";
//make the checkboxes
for(var prop in hiragana){
    var row = document.createElement('div');
    row.id = prop;
    for (var x=0; x<hiragana[prop].length; x++)
    {
        var symbol = hiragana[prop][x];
        
        var input = document.createElement('div');
        input.className = row.id + " symbol";
        input.innerHTML = symbol[0];
        input.id = symbol[1]+"_hiragana";

        var input1 = document.createElement('div');
        input1.className = row.id + " inner_symbol";;
        input1.innerHTML = "<br>"+symbol[1];

        var input2 = document.createElement('div');
        input2.className = row.id + " symbol";
        input2.innerHTML = katakana[prop][x][0];
        input2.id = katakana[prop][x][1]+"_katakana";

        input.addEventListener('click', onclicked);
        input2.addEventListener('click', onclicked);
        
        var smspace = document.createElement('img');
        smspace.src = small_space;
        smspace.className = "smspace";

        var block = document.createElement('div');
        block.appendChild(smspace);
        block.appendChild(input);
        block.appendChild(input1);
        block.appendChild(input2);
        block.className = "sym_block";
        block.id = katakana[prop][x][1];
        row.appendChild(block);
        
        // dat spacing hack tho
        if (hiragana[prop].length == 3 && x!=2)
        {
            var spacer = document.createElement('div');
            spacer.className = "sym_block";
            row.appendChild(spacer);
        }
        

    }
    kanachart.appendChild(row);
}

document.getElementById('settings').appendChild(kanachart);
//give them vowels
for (var x=0; x<order.length; x++)
{
    list.vowels.push(hiragana.vowels[x]);
    document.getElementById(order[x]+"_hiragana").style.backgroundColor = "rgb(204, 255, 220)";
}

function massSet(lang, check)
{
    var things = ['vowels', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'g', 'z', 'd', 'b', 'p'];
    for (var x=0; x<things.length; x++)
    {
    	// create the key if it doesn't exist
    	if (!(things[x] in list))
		list[things[x]] = [];

	var targetColor = "white";

	if (check)
	{
		// append the stuff from the lang's vocab
		list[things[x]] = list[things[x]].concat(languages[lang][things[x]]);

		targetColor = "rgb(204, 255, 220)";
	} else
	{
		// strip out the stuff from the lang's vocab
		list[things[x]] = list[things[x]].filter(function(item) {
		    return languages[lang][things[x]].indexOf(item) === -1;
		    });
	}

	// strip out the duplicate items
	list[things[x]] = list[things[x]].filter(function (item, pos) {return list[things[x]].indexOf(item) == pos});

	// highlight the characters we just enabled or disabled with green or white in the chart
	for (var y=0; y<languages[lang][things[x]].length; y++)
		document.getElementById(languages[lang][things[x]][y][1]+"_"+lang).style.backgroundColor = targetColor;

    }
}


function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
            result = prop;
    return result;
}

var Kana = function(){
    var choice;
    
    while (typeof choice == 'undefined')
    {
        var arr = list[pickRandomProperty(list)];
        choice = arr[parseInt(Math.random()*arr.length)];
    }
    
    this.hiragana = choice[0];
    this.english = choice[1];
    this.x = parseInt(Math.random()*(settings.width-20));
    this.y = 0;
};

function ActiveKana(){
    this.arr = [];
}

ActiveKana.prototype = {
    add: function(kana){
        //check for empty spots in the array
        for(var i = 0; i < this.arr.length; i++){
            if(!this.arr[i]){
                this.arr[i] = kana;
                return;
            }
        }
        //the array is actually full (because the above for-loop didn't return) so just push the element.
        this.arr.push(kana);
    },
    remove: function(kana){
        for(var i = 0; i < this.arr.length; i++){
            if(this.arr[i] === kana){
                this.arr[i] = null;
            }
        }
    },
    forEach: function(fn){
        for(var i = 0; i < this.arr.length; i++){
            if(!this.arr[i]) continue;
            fn(this.arr[i]);
        }
    }
};
