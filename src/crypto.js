// DRYRUN money code: BIP39, BIP32, addresses, hashes, secp256k1, QR and SeedQR, the dice and card methods, and the word reader.
// Frozen: tests/build.test.mjs checks its SHA-256 (tests/fixtures/frozen.json); change it only with a review and a new mutation run.
const WORDLIST = ["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"];
const WORD_MAP = Object.fromEntries(WORDLIST.map((w,i)=>[w,i]));
const CD_RANKS = "A23456789TJQK", CD_SUITS = "\u2663\u2666\u2665\u2660";
const CD_SUIT_OF = {C: "\u2663", D: "\u2666", H: "\u2665", S: "\u2660", "\u2663": "\u2663", "\u2666": "\u2666", "\u2665": "\u2665", "\u2660": "\u2660", "\u2667": "\u2663", "\u2662": "\u2666", "\u2661": "\u2665", "\u2664": "\u2660"};
const CD_NAMES = {A: "ace", T: "10", J: "jack", Q: "queen", K: "king"}, CD_SUIT_NAMES = {"\u2663": "clubs", "\u2666": "diamonds", "\u2665": "hearts", "\u2660": "spades"};
const CD_LETTER = {"\u2663": "C", "\u2666": "D", "\u2665": "H", "\u2660": "S"};
const SLIP39_WORDS = [
  "academic","acid","acne","acquire","acrobat","activity","actress","adapt","adequate","adjust","admit","adorn","adult","advance","advocate","afraid",
  "again","agency","agree","aide","aircraft","airline","airport","ajar","alarm","album","alcohol","alien","alive","alpha","already","alto",
  "aluminum","always","amazing","ambition","amount","amuse","analysis","anatomy","ancestor","ancient","angel","angry","animal","answer","antenna","anxiety",
  "apart","aquatic","arcade","arena","argue","armed","artist","artwork","aspect","auction","august","aunt","average","aviation","avoid","award",
  "away","axis","axle","beam","beard","beaver","become","bedroom","behavior","being","believe","belong","benefit","best","beyond","bike",
  "biology","birthday","bishop","black","blanket","blessing","blimp","blind","blue","body","bolt","boring","born","both","boundary","bracelet",
  "branch","brave","breathe","briefing","broken","brother","browser","bucket","budget","building","bulb","bulge","bumpy","bundle","burden","burning",
  "busy","buyer","cage","calcium","camera","campus","canyon","capacity","capital","capture","carbon","cards","careful","cargo","carpet","carve",
  "category","cause","ceiling","center","ceramic","champion","change","charity","check","chemical","chest","chew","chubby","cinema","civil","class",
  "clay","cleanup","client","climate","clinic","clock","clogs","closet","clothes","club","cluster","coal","coastal","coding","column","company",
  "corner","costume","counter","course","cover","cowboy","cradle","craft","crazy","credit","cricket","criminal","crisis","critical","crowd","crucial",
  "crunch","crush","crystal","cubic","cultural","curious","curly","custody","cylinder","daisy","damage","dance","darkness","database","daughter","deadline",
  "deal","debris","debut","decent","decision","declare","decorate","decrease","deliver","demand","density","deny","depart","depend","depict","deploy",
  "describe","desert","desire","desktop","destroy","detailed","detect","device","devote","diagnose","dictate","diet","dilemma","diminish","dining","diploma",
  "disaster","discuss","disease","dish","dismiss","display","distance","dive","divorce","document","domain","domestic","dominant","dough","downtown","dragon",
  "dramatic","dream","dress","drift","drink","drove","drug","dryer","duckling","duke","duration","dwarf","dynamic","early","earth","easel",
  "easy","echo","eclipse","ecology","edge","editor","educate","either","elbow","elder","election","elegant","element","elephant","elevator","elite",
  "else","email","emerald","emission","emperor","emphasis","employer","empty","ending","endless","endorse","enemy","energy","enforce","engage","enjoy",
  "enlarge","entrance","envelope","envy","epidemic","episode","equation","equip","eraser","erode","escape","estate","estimate","evaluate","evening","evidence",
  "evil","evoke","exact","example","exceed","exchange","exclude","excuse","execute","exercise","exhaust","exotic","expand","expect","explain","express",
  "extend","extra","eyebrow","facility","fact","failure","faint","fake","false","family","famous","fancy","fangs","fantasy","fatal","fatigue",
  "favorite","fawn","fiber","fiction","filter","finance","findings","finger","firefly","firm","fiscal","fishing","fitness","flame","flash","flavor",
  "flea","flexible","flip","float","floral","fluff","focus","forbid","force","forecast","forget","formal","fortune","forward","founder","fraction",
  "fragment","frequent","freshman","friar","fridge","friendly","frost","froth","frozen","fumes","funding","furl","fused","galaxy","game","garbage",
  "garden","garlic","gasoline","gather","general","genius","genre","genuine","geology","gesture","glad","glance","glasses","glen","glimpse","goat",
  "golden","graduate","grant","grasp","gravity","gray","greatest","grief","grill","grin","grocery","gross","group","grownup","grumpy","guard",
  "guest","guilt","guitar","gums","hairy","hamster","hand","hanger","harvest","have","havoc","hawk","hazard","headset","health","hearing",
  "heat","helpful","herald","herd","hesitate","hobo","holiday","holy","home","hormone","hospital","hour","huge","human","humidity","hunting",
  "husband","hush","husky","hybrid","idea","identify","idle","image","impact","imply","improve","impulse","include","income","increase","index",
  "indicate","industry","infant","inform","inherit","injury","inmate","insect","inside","install","intend","intimate","invasion","involve","iris","island",
  "isolate","item","ivory","jacket","jerky","jewelry","join","judicial","juice","jump","junction","junior","junk","jury","justice","kernel",
  "keyboard","kidney","kind","kitchen","knife","knit","laden","ladle","ladybug","lair","lamp","language","large","laser","laundry","lawsuit",
  "leader","leaf","learn","leaves","lecture","legal","legend","legs","lend","length","level","liberty","library","license","lift","likely",
  "lilac","lily","lips","liquid","listen","literary","living","lizard","loan","lobe","location","losing","loud","loyalty","luck","lunar",
  "lunch","lungs","luxury","lying","lyrics","machine","magazine","maiden","mailman","main","makeup","making","mama","manager","mandate","mansion",
  "manual","marathon","march","market","marvel","mason","material","math","maximum","mayor","meaning","medal","medical","member","memory","mental",
  "merchant","merit","method","metric","midst","mild","military","mineral","minister","miracle","mixed","mixture","mobile","modern","modify","moisture",
  "moment","morning","mortgage","mother","mountain","mouse","move","much","mule","multiple","muscle","museum","music","mustang","nail","national",
  "necklace","negative","nervous","network","news","nuclear","numb","numerous","nylon","oasis","obesity","object","observe","obtain","ocean","often",
  "olympic","omit","oral","orange","orbit","order","ordinary","organize","ounce","oven","overall","owner","paces","pacific","package","paid",
  "painting","pajamas","pancake","pants","papa","paper","parcel","parking","party","patent","patrol","payment","payroll","peaceful","peanut","peasant",
  "pecan","penalty","pencil","percent","perfect","permit","petition","phantom","pharmacy","photo","phrase","physics","pickup","picture","piece","pile",
  "pink","pipeline","pistol","pitch","plains","plan","plastic","platform","playoff","pleasure","plot","plunge","practice","prayer","preach","predator",
  "pregnant","premium","prepare","presence","prevent","priest","primary","priority","prisoner","privacy","prize","problem","process","profile","program","promise",
  "prospect","provide","prune","public","pulse","pumps","punish","puny","pupal","purchase","purple","python","quantity","quarter","quick","quiet",
  "race","racism","radar","railroad","rainbow","raisin","random","ranked","rapids","raspy","reaction","realize","rebound","rebuild","recall","receiver",
  "recover","regret","regular","reject","relate","remember","remind","remove","render","repair","repeat","replace","require","rescue","research","resident",
  "response","result","retailer","retreat","reunion","revenue","review","reward","rhyme","rhythm","rich","rival","river","robin","rocky","romantic",
  "romp","roster","round","royal","ruin","ruler","rumor","sack","safari","salary","salon","salt","satisfy","satoshi","saver","says",
  "scandal","scared","scatter","scene","scholar","science","scout","scramble","screw","script","scroll","seafood","season","secret","security","segment",
  "senior","shadow","shaft","shame","shaped","sharp","shelter","sheriff","short","should","shrimp","sidewalk","silent","silver","similar","simple",
  "single","sister","skin","skunk","slap","slavery","sled","slice","slim","slow","slush","smart","smear","smell","smirk","smith",
  "smoking","smug","snake","snapshot","sniff","society","software","soldier","solution","soul","source","space","spark","speak","species","spelling",
  "spend","spew","spider","spill","spine","spirit","spit","spray","sprinkle","square","squeeze","stadium","staff","standard","starting","station",
  "stay","steady","step","stick","stilt","story","strategy","strike","style","subject","submit","sugar","suitable","sunlight","superior","surface",
  "surprise","survive","sweater","swimming","swing","switch","symbolic","sympathy","syndrome","system","tackle","tactics","tadpole","talent","task","taste",
  "taught","taxi","teacher","teammate","teaspoon","temple","tenant","tendency","tension","terminal","testify","texture","thank","that","theater","theory",
  "therapy","thorn","threaten","thumb","thunder","ticket","tidy","timber","timely","ting","tofu","together","tolerate","total","toxic","tracks",
  "traffic","training","transfer","trash","traveler","treat","trend","trial","tricycle","trip","triumph","trouble","true","trust","twice","twin",
  "type","typical","ugly","ultimate","umbrella","uncover","undergo","unfair","unfold","unhappy","union","universe","unkind","unknown","unusual","unwrap",
  "upgrade","upstairs","username","usher","usual","valid","valuable","vampire","vanish","various","vegan","velvet","venture","verdict","verify","very",
  "veteran","vexed","victim","video","view","vintage","violence","viral","visitor","visual","vitamins","vocal","voice","volume","voter","voting",
  "walnut","warmth","warn","watch","wavy","wealthy","weapon","webcam","welcome","welfare","western","width","wildlife","window","wine","wireless",
  "wisdom","withdraw","wits","wolf","woman","work","worthy","wrap","wrist","writing","wrote","year","yelp","yield","yoga","zero"
];
async function sha256(str){
  const data = new TextEncoder().encode(str);
  return new Uint8Array(await crypto.subtle.digest("SHA-256", data));
}
function bytesToBits(b){ return Array.from(b).map(x=>x.toString(2).padStart(8,"0")).join(""); }
async function entropyToMnemonic(entropy){
  const bits = entropy.length*8;
  const cbits = bits/32;
  const h = new Uint8Array(await crypto.subtle.digest("SHA-256", entropy));
  const checksum = bytesToBits(h).slice(0,cbits);
  const full = bytesToBits(entropy) + checksum;
  const words=[];
  for(let i=0;i<full.length;i+=11){
    words.push(WORDLIST[parseInt(full.slice(i,i+11),2)]);
  }
  return words.join(" ");
}
function hex(b){ return Array.from(b).map(x=>x.toString(16).padStart(2,"0")).join(""); }
function fromHex(h){ const o=new Uint8Array(h.length/2); for(let i=0;i<o.length;i++) o[i]=parseInt(h.substr(i*2,2),16); return o; }
function ripemd160(msg){
  const rol=(x,n)=>((x<<n)|(x>>>(32-n)))>>>0;
  const R1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13];
  const R2=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11];
  const S1=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6];
  const S2=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];
  const K1=[0x00000000,0x5A827999,0x6ED9EBA1,0x8F1BBCDC,0xA953FD4E];
  const K2=[0x50A28BE6,0x5C4DD124,0x6D703EF3,0x7A6D76E9,0x00000000];
  const f=(j,x,y,z)=> j<16 ? (x^y^z)>>>0 : j<32 ? ((x&y)|(~x&z))>>>0 : j<48 ? ((x|~y)^z)>>>0 : j<64 ? ((x&z)|(y&~z))>>>0 : (x^(y|~z))>>>0;
  const len=msg.length, padLen=((len+9+63)>>6)<<6;
  const m=new Uint8Array(padLen); m.set(msg); m[len]=0x80;
  const dv=new DataView(m.buffer);
  dv.setUint32(padLen-8,(len*8)>>>0,true); dv.setUint32(padLen-4,Math.floor(len/0x20000000),true);
  let h0=0x67452301,h1=0xEFCDAB89,h2=0x98BADCFE,h3=0x10325476,h4=0xC3D2E1F0;
  for(let off=0;off<padLen;off+=64){
    const X=[]; for(let i=0;i<16;i++) X.push(dv.getUint32(off+i*4,true));
    let a=h0,b=h1,c=h2,d=h3,e=h4, a2=h0,b2=h1,c2=h2,d2=h3,e2=h4;
    for(let j=0;j<80;j++){
      let t=(rol((a+f(j,b,c,d)+X[R1[j]]+K1[j>>4])>>>0,S1[j])+e)>>>0;
      a=e; e=d; d=rol(c,10); c=b; b=t;
      t=(rol((a2+f(79-j,b2,c2,d2)+X[R2[j]]+K2[j>>4])>>>0,S2[j])+e2)>>>0;
      a2=e2; e2=d2; d2=rol(c2,10); c2=b2; b2=t;
    }
    const t=(h1+c+d2)>>>0; h1=(h2+d+e2)>>>0; h2=(h3+e+a2)>>>0; h3=(h4+a+b2)>>>0; h4=(h0+b+c2)>>>0; h0=t;
  }
  const out=new Uint8Array(20), ov=new DataView(out.buffer);
  [h0,h1,h2,h3,h4].forEach((v,i)=>ov.setUint32(i*4,v,true));
  return out;
}
const SP=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2Fn;
const SN=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141n;
const SG=[0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798n,
          0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8n];
const emod=(a)=>((a%SP)+SP)%SP;
function einv(a){ let r0=emod(a), r1=SP, s0=1n, s1=0n;
  while(r1!==0n){ const q=r0/r1; [r0,r1]=[r1,r0-q*r1]; [s0,s1]=[s1,s0-q*s1]; }
  return emod(s0); }
function eadd(p,q){
  if(!p) return q; if(!q) return p;
  let l;
  if(p[0]===q[0]){ if(emod(p[1]+q[1])===0n) return null; l=emod(3n*p[0]*p[0]*einv(2n*p[1])); }
  else l=emod((q[1]-p[1])*einv(q[0]-p[0]));
  const x=emod(l*l-p[0]-q[0]); return [x, emod(l*(p[0]-x)-p[1])];
}
function emul(k,p){ let r=null, a=p; while(k>0n){ if(k&1n) r=eadd(r,a); a=eadd(a,a); k>>=1n; } return r; }
async function mnemonicToSeed(mnemonic, passphrase){
  const enc=new TextEncoder();
  const key=await crypto.subtle.importKey("raw",enc.encode(mnemonic.normalize("NFKD")),"PBKDF2",false,["deriveBits"]);
  const bits=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-512",iterations:2048,
    salt:enc.encode("mnemonic"+(passphrase||"").normalize("NFKD"))},key,512);
  return new Uint8Array(bits);
}
async function masterFromSeed(seed){
  const I=await hmac512(new TextEncoder().encode("Bitcoin seed"),seed);
  const k=BigInt("0x"+hex(I.slice(0,32)));
  if(k===0n || k>=SN) throw new Error("Invalid master key");
  return [k, I.slice(32)];
}
async function fingerprintFromSeed(seed){
  const [k]=await masterFromSeed(seed);
  return hex(ripemd160(await sha256bytes(pubkeyBytes(k))).slice(0,4));
}
function pubkeyBytes(k){
  const P=emul(k,SG); const pub=new Uint8Array(33); pub[0]=(P[1]&1n)?3:2;
  pub.set(fromHex(P[0].toString(16).padStart(64,"0")),1); return pub;
}
async function hmac512(keyBytes, data){
  const key=await crypto.subtle.importKey("raw",keyBytes,{name:"HMAC",hash:"SHA-512"},false,["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC",key,data));
}
async function ckdPriv(k, chain, index, hardened, pub){ // pub: the parent's public key, if already known (saves one multiplication)
  const idx=hardened ? (index+0x80000000)>>>0 : index;
  const data=new Uint8Array(37);
  if(hardened){ data.set(fromHex(k.toString(16).padStart(64,"0")),1); } else { data.set(pub || pubkeyBytes(k),0); }
  data.set([(idx>>>24)&255,(idx>>>16)&255,(idx>>>8)&255,idx&255],33);
  const I=await hmac512(chain,data);
  const il=BigInt("0x"+hex(I.slice(0,32))), child=(il+k)%SN;
  if(il>=SN || child===0n) throw new Error("Invalid child key");
  return [child, I.slice(32)];
}
const B32="qpzry9x8gf2tvdw0s3jn54khce6mua7l";
function bech32Encode(hrp, version, prog){
  const poly=(v)=>{ const G=[0x3b6a57b2,0x26508e6d,0x1ea119fa,0x3d4233dd,0x2a1462b3]; let c=1;
    for(const x of v){ const b=c>>>25; c=((c&0x1ffffff)<<5)^x; for(let i=0;i<5;i++) if((b>>i)&1) c^=G[i]; } return c; };
  const data=[version]; let acc=0, bits=0;
  for(const byte of prog){ acc=(acc<<8)|byte; bits+=8; while(bits>=5){ bits-=5; data.push((acc>>bits)&31); } acc&=(1<<bits)-1; }
  if(bits>0) data.push((acc<<(5-bits))&31);
  const hrpBytes=Array.from(hrp).map(c=>c.charCodeAt(0));
  const values=hrpBytes.map(c=>c>>5).concat([0],hrpBytes.map(c=>c&31),data,[0,0,0,0,0,0]);
  const mod=poly(values)^(version===0?1:0x2bc830a3);
  for(let i=0;i<6;i++) data.push((mod>>(5*(5-i)))&31);
  return hrp+"1"+data.map(d=>B32[d]).join("");
}
async function taggedHash(tag, msg){
  const th=await sha256bytes(new TextEncoder().encode(tag)), b=new Uint8Array(64+msg.length);
  b.set(th,0); b.set(th,32); b.set(msg,64); return sha256bytes(b);
}
async function taprootAddress(k, hrp){ return taprootAddressFromPoint(emul(k,SG), hrp); }
async function taprootAddressFromPoint(P, hrp){
  if(P[1]&1n) P=[P[0],SP-P[1]];
  const xonly=fromHex(P[0].toString(16).padStart(64,"0"));
  const t=BigInt("0x"+hex(await taggedHash("TapTweak",xonly)));
  if(t>=SN) throw new Error("Invalid tweak");
  const Q=eadd(P,emul(t,SG));
  if(!Q) throw new Error("Invalid output key");
  return bech32Encode(hrp || "bc",1,fromHex(Q[0].toString(16).padStart(64,"0")));
}
async function bip85Entropy(k, c, path){
  for(const i of [83696968].concat(path)){
    if(!Number.isInteger(i) || i < 0 || i > 2147483647) throw new Error("every path number must be 0 to 2147483647");
    [k,c]=await ckdPriv(k,c,i,true);
  }
  return hmac512(new TextEncoder().encode("bip-entropy-from-k"), fromHex(k.toString(16).padStart(64,"0")));
}
async function bip85Mnemonic(k, c, words, index){
  if(![12,15,18,21,24].includes(words)) throw new Error("words must be 12, 15, 18, 21 or 24");
  if(!Number.isInteger(index) || index < 0 || index > 2147483647) throw new Error("index must be 0 to 2147483647");
  const e = await bip85Entropy(k, c, [39, 0, words, index]);
  return entropyToMnemonic(e.slice(0, words * 4 / 3));
}
function base64Encode(b){ let s = ""; for(const x of b) s += String.fromCharCode(x); return btoa(s); }
const XPUB_VER=[0x04,0x88,0xb2,0x1e];
const SCRIPT_TYPES={
  wpkh:{purpose:84, kname:"zpub", label:"Native SegWit (bc1q...)"},
  tr:{purpose:86, kname:"xpub", label:"Taproot (bc1p...)"},
  "sh-wpkh":{purpose:49, kname:"ypub", label:"Nested SegWit (3...)"},
  pkh:{purpose:44, kname:"xpub", label:"Legacy (1...)"}
};
const NETS={
  main:{coin:0, hrp:"bc", pkh:0x00, sh:0x05, ver:{wpkh:[0x04,0xb2,0x47,0x46], "sh-wpkh":[0x04,0x9d,0x7c,0xb2], other:XPUB_VER, "ms-wsh":[0x02,0xaa,0x7e,0xd3], "ms-sh-wsh":[0x02,0x95,0xb4,0x3f], "ms-tr":XPUB_VER}},
  test:{coin:1, hrp:"tb", pkh:0x6f, sh:0xc4, ver:{wpkh:[0x04,0x5f,0x1c,0xf6], "sh-wpkh":[0x04,0x4a,0x52,0x62], other:[0x04,0x35,0x87,0xcf], "ms-wsh":[0x02,0x57,0x54,0x83], "ms-sh-wsh":[0x02,0x42,0x89,0xef], "ms-tr":[0x04,0x35,0x87,0xcf]}}
};
NETS.regtest = {...NETS.test, hrp:"bcrt"};
const MULTISIG={ "ms-wsh":{script:2, kname:"Zpub", label:"Multisig cosigner, native SegWit (BIP48)"}, "ms-sh-wsh":{script:1, kname:"Ypub", label:"Multisig cosigner, nested SegWit (BIP48)"},
  "ms-tr":{script:3, kname:"xpub", label:"Multisig cosigner, Taproot (m/48'/coin'/account'/3', not in BIP48)"} };
function validAccount(a){ return Number.isInteger(a) && a >= 0 && a <= 2147483647; }
async function hash160(b){ return ripemd160(await sha256bytes(b)); }
async function addressFromKey(type, k, net){
  const N = NETS[net || "main"];
  if(type === "tr") return taprootAddress(k, N.hrp);
  const h = await hash160(pubkeyBytes(k));
  if(type === "wpkh") return bech32Encode(N.hrp,0,h);
  if(type === "pkh") return base58check(Uint8Array.from([N.pkh, ...h]));
  if(type === "sh-wpkh") return base58check(Uint8Array.from([N.sh, ...await hash160(Uint8Array.from([0x00, 0x14, ...h]))]));
  throw new Error("unknown address type");
}
async function addressFromPub(type, pub, net){
  const N = NETS[net || "main"];
  if(type === "tr") return taprootAddressFromPoint(pointFromPub(pub), N.hrp);
  const h = await hash160(pub);
  if(type === "wpkh") return bech32Encode(N.hrp,0,h);
  if(type === "pkh") return base58check(Uint8Array.of(N.pkh, ...h));
  if(type === "sh-wpkh") return base58check(Uint8Array.of(N.sh, ...await hash160(Uint8Array.of(0x00, 0x14, ...h))));
  throw new Error("unknown address type");
}
function addressNetOf(addr){ return /^bcrt1/.test(addr) ? "regtest" : /^(tb1|[2mn])/.test(addr) ? "test" : "main"; }
function addressTypeOf(addr){
  if(/^bcrt1q/.test(addr)) return "wpkh";   // v2.16.1: regtest
  if(/^bcrt1p/.test(addr)) return "tr";
  if(/^tb1q/.test(addr)) return "wpkh";
  if(/^tb1p/.test(addr)) return "tr";
  if(/^2/.test(addr)) return "sh-wpkh";
  if(/^[mn]/.test(addr)) return "pkh";
  if(/^bc1q/.test(addr)) return "wpkh";
  if(/^bc1p/.test(addr)) return "tr";
  if(/^3/.test(addr)) return "sh-wpkh";
  if(/^1/.test(addr)) return "pkh";
  return null;
}
const B58="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
async function base58check(payload){
  const sum=(await sha256bytes(await sha256bytes(payload))).slice(0,4);
  const all=new Uint8Array(payload.length+4); all.set(payload,0); all.set(sum,payload.length);
  let n=0n; for(const b of all) n=(n<<8n)|BigInt(b);
  let out=""; while(n>0n){ out=B58[Number(n%58n)]+out; n/=58n; }
  for(const b of all){ if(b===0) out="1"+out; else break; }
  return out;
}
function descriptorChecksum(str){
  const IN="0123456789()[],'/*abcdefgh@:$%{}IJKLMNOPQRSTUVWXYZ&+-.;<=>?!^_|~ijklmnopqrstuvwxyzABCDEFGH`#\"\\ ";
  const GEN=[0xf5dee51989n,0xa9fdca3312n,0x1bab10e32dn,0x3706b1677an,0x644d626ffdn];
  const syms=[]; let groups=[];
  for(const c of str){ const v=IN.indexOf(c); if(v<0) throw new Error("bad descriptor character");
    syms.push(v&31); groups.push(v>>5);
    if(groups.length===3){ syms.push(groups[0]*9+groups[1]*3+groups[2]); groups=[]; } }
  if(groups.length===1) syms.push(groups[0]); else if(groups.length===2) syms.push(groups[0]*3+groups[1]);
  let chk=1n;
  for(const v of syms.concat([0,0,0,0,0,0,0,0])){
    const top=chk>>35n; chk=((chk&0x7ffffffffn)<<5n)^BigInt(v);
    for(let i=0;i<5;i++) if((top>>BigInt(i))&1n) chk^=GEN[i];
  }
  chk^=1n; let out="";
  for(let i=0;i<8;i++) out+=B32[Number((chk>>BigInt(5*(7-i)))&31n)];
  return str+"#"+out;
}
function descriptorWrap(type, origin, key, branch){
  const inner = "[" + origin + "]" + key + "/" + branch + "/*";
  return type === "sh-wpkh" ? "sh(wpkh(" + inner + "))" : type + "(" + inner + ")";
}
async function watchOnlyFromSeed(seed, type, account, net){
  type = type || "wpkh"; account = account || 0; net = net || "main";
  const N = NETS[net]; if(!N) throw new Error("unknown network");
  const M = MULTISIG[type], T = M ? null : SCRIPT_TYPES[type]; if(!M && !T) throw new Error("unknown address type");
  if(!validAccount(account)) throw new Error("account must be 0 to 2147483647");
  const steps = M ? [[48,true],[N.coin,true],[account,true],[M.script,true]] : [[T.purpose,true],[N.coin,true],[account,true]];
  let [k,c]=await masterFromSeed(seed);
  const fp=await fingerprintFromSeed(seed);
  let parentPub=null;
  for(const [i,h] of steps){ parentPub=pubkeyBytes(k); [k,c]=await ckdPriv(k,c,i,h); }
  const parentFp=ripemd160(await sha256bytes(parentPub)).slice(0,4);
  const pub=pubkeyBytes(k), cn=((M ? M.script : account)+0x80000000)>>>0;
  const ser=(ver,depth)=>{ const b=new Uint8Array(78); b.set(ver,0); b[4]=depth; b.set(parentFp,5); b.set([(cn>>>24)&255,(cn>>>16)&255,(cn>>>8)&255,cn&255],9); b.set(c,13); b.set(pub,45); return b; };
  if(M){
    const key=await base58check(ser(N.ver[type],4)), xpub=await base58check(ser(N.ver.other,4));
    const origin = fp + "/48h/" + N.coin + "h/" + account + "h/" + M.script + "h";
    return {fp, xpub, zpub:key, key, receive:"[" + origin + "]" + xpub, change:"", first:"", five:[]};
  }
  const xpub=await base58check(ser(N.ver.other,3)), zpub=await base58check(ser(N.ver.wpkh,3)), key=await base58check(ser(T.purpose===84 ? N.ver.wpkh : T.purpose===49 ? N.ver["sh-wpkh"] : N.ver.other,3));
  const origin = fp + "/" + T.purpose + "h/" + N.coin + "h/" + account + "h";
  const d=(br)=>descriptorChecksum(descriptorWrap(type, origin, xpub, br));
  const [rk,rc]=await ckdPriv(k,c,0,false), five=[];
  for(let i=0;i<5;i++){ const [fk]=await ckdPriv(rk,rc,i,false); five.push(await addressFromKey(type, fk, net)); }
  return {fp, xpub, zpub, key, receive:d(0), change:d(1), first:five[0], five};
}
async function base58decode(str){
  if(typeof str !== "string" || !str.length) throw new Error("empty key");
  let n=0n; for(const ch of str){ const v=B58.indexOf(ch); if(v<0) throw new Error("not a valid key: unexpected character"); n=n*58n+BigInt(v); }
  let h=n.toString(16); if(h.length%2) h="0"+h;
  const bytes=n===0n ? new Uint8Array(0) : fromHex(h);
  let zeros=0; for(const ch of str){ if(ch==="1") zeros++; else break; }
  const all=new Uint8Array(zeros+bytes.length); all.set(bytes,zeros);
  if(all.length<5) throw new Error("not a valid key: too short");
  const payload=all.slice(0,all.length-4), h1=await sha256bytes(payload), sum=(await sha256bytes(h1)).slice(0,4);
  for(let i=0;i<4;i++) if(sum[i]!==all[all.length-4+i]) throw new Error("not a valid key: checksum does not match (a typo?)");
  return payload;
}
function liftX(x, odd){
  if(x>=SP) return null;
  const y2=emod(x*x*x+7n); let y=1n, b=y2, e=(SP+1n)/4n;
  while(e>0n){ if(e&1n) y=y*b%SP; b=b*b%SP; e>>=1n; }
  if(y*y%SP!==y2) return null;
  return [x, (y&1n)===(odd?1n:0n) ? y : SP-y];
}
function pointFromPub(pub){
  if(pub.length!==33 || (pub[0]!==2 && pub[0]!==3)) throw new Error("not a valid public key");
  const P=liftX(BigInt("0x"+hex(pub.slice(1))), pub[0]===3);
  if(!P) throw new Error("not a valid public key: point is not on the curve");
  return P;
}
function pubFromPoint(P){ const pub=new Uint8Array(33); pub[0]=2+Number(P[1]&1n); pub.set(fromHex(P[0].toString(16).padStart(64,"0")),1); return pub; }
const EXT_VERSIONS=(()=>{ const m={}; for(const net of ["main","test"]) for(const [t,v] of Object.entries(NETS[net].ver)){ const k=hex(Uint8Array.from(v)); m[k]=m[k]||{net,type:t}; } return m; })();
const EXT_PRIVATE=["0488ade4","049d7878","04b2430c","0295b005","02aa7a99","04358394","044a4e28","045f18bc","024285b5","02575048"];
async function parseExtendedKey(str){
  str=String(str||"").replace(/\s+/g,"");
  const raw=await base58decode(str);
  if(raw.length!==78) throw new Error("not an extended public key (wrong length)");
  const ver=hex(raw.slice(0,4));
  if(EXT_PRIVATE.includes(ver)) throw new Error("this is a PRIVATE key. Never paste private keys here. Paste the public key (xpub, Zpub...) instead.");
  const known=EXT_VERSIONS[ver]; if(!known) throw new Error("unknown key type (version " + ver + ")");
  const pub=raw.slice(45,78); pointFromPub(pub);
  return {str, net:known.net, type:known.type, depth:raw[4], parentFp:hex(raw.slice(5,9)), childNum:(raw[9]<<24|raw[10]<<16|raw[11]<<8|raw[12])>>>0, chain:raw.slice(13,45), pub};
}
async function ckdPub(pub, chain, index){
  if(!Number.isInteger(index) || index<0 || index>=0x80000000) throw new Error("bad index");
  const data=new Uint8Array(37); data.set(pub,0); data.set([(index>>>24)&255,(index>>>16)&255,(index>>>8)&255,index&255],33);
  const I=await hmac512(chain,data), il=BigInt("0x"+hex(I.slice(0,32)));
  if(il>=SN) throw new Error("Invalid child key");
  const C=eadd(emul(il,SG),pointFromPub(pub));
  if(!C) throw new Error("Invalid child key");
  return [pubFromPoint(C), I.slice(32)];
}
function cmpBytes(a,b){ for(let i=0;i<a.length&&i<b.length;i++) if(a[i]!==b[i]) return a[i]-b[i]; return a.length-b.length; }
async function multisigScript(m, cosigners, branch, index){
  const n=cosigners.length;
  if(!Number.isInteger(m) || m<1 || n<2 || n>15 || m>n) throw new Error("bad M-of-N");
  const pubs=[];
  for(const c of cosigners){ const [bp,bc]=await ckdPub(c.key.pub,c.key.chain,branch); const [pk]=await ckdPub(bp,bc,index); pubs.push(pk); }
  pubs.sort(cmpBytes);
  const out=[0x50+m]; for(const pk of pubs){ out.push(33); out.push(...pk); } out.push(0x50+n, 0xae);
  return {script:Uint8Array.from(out), pubs};
}
async function multisigAddress(type, m, cosigners, branch, index, net){
  if(type==="ms-tr") return msTrAddress(m, cosigners, branch, index, net);
  const N=NETS[net||"main"], {script}=await multisigScript(m,cosigners,branch,index), sh=await sha256bytes(script);
  if(type==="ms-wsh") return bech32Encode(N.hrp,0,sh);
  if(type==="ms-sh-wsh"){ const prog=await hash160(Uint8Array.from([0x00,0x20,...sh])); return base58check(Uint8Array.from([N.sh, ...prog])); }
  throw new Error("unknown multisig type");
}
async function multisigDescriptor(type, m, cosigners, branch){
  if(!MULTISIG[type]) throw new Error("unknown multisig type");
  const keys=[];
  for(const c of cosigners){
    const raw=await base58decode(c.key.str), xp=await base58check(Uint8Array.from([...NETS[c.key.net].ver.other, ...raw.slice(4)]));
    keys.push("[" + c.fp + "/" + c.path + "]" + xp + "/" + branch + "/*");
  }
  keys.sort();
  if(type==="ms-tr") return descriptorChecksum("tr(" + await msTrNumsXpub(cosigners) + "/" + branch + "/*,sortedmulti_a(" + m + "," + keys.join(",") + "))");
  const inner="sortedmulti(" + m + "," + keys.join(",") + ")";
  return descriptorChecksum(type==="ms-sh-wsh" ? "sh(wsh(" + inner + "))" : "wsh(" + inner + ")");
}
async function msTrNums(cosigners){
  const pubs=[...new Map(cosigners.map(c => [hex(c.key.pub), c.key.pub])).values()].sort(cmpBytes);
  return {pub: Uint8Array.from([0x02, ...fromHex(MS_NUMS)]), chain: await sha256bytes(concatBytes(...pubs))};
}
async function msTrNumsXpub(cosigners){
  const nk=await msTrNums(cosigners), b=new Uint8Array(78);
  b.set(NETS[cosigners[0].key.net].ver.other, 0); b.set(nk.chain, 13); b.set(nk.pub, 45);   // depth, parent fingerprint and child number stay 0
  return base58check(b);
}
function msTrLeaf(m, xonly){
  const ks=[...xonly].sort(cmpBytes), out=[32, ...ks[0], 0xac];
  for(let i=1;i<ks.length;i++) out.push(32, ...ks[i], 0xba);
  out.push(0x50+m, 0x9c);
  return Uint8Array.from(out);
}
async function msTrAddress(m, cosigners, branch, index, net){
  const n=cosigners.length;
  if(!(Number.isInteger(m) && m >= 1 && m <= n && n >= 2 && n <= 15)) throw new Error("bad M-of-N");
  const xs=[];
  for(const c of cosigners){ const [cp,cc]=await ckdPub(c.key.pub,c.key.chain,branch), [pk]=await ckdPub(cp,cc,index); xs.push(pk.slice(1)); }
  const leaf=msTrLeaf(m, xs), leafHash=await taggedHash("TapLeaf", concatBytes(Uint8Array.of(0xc0), varintBytes(leaf.length), leaf));
  const nk=await msTrNums(cosigners), [ib,ic]=await ckdPub(nk.pub,nk.chain,branch), [ik]=await ckdPub(ib,ic,index);
  return b138TrAddress(ik.slice(1), leafHash, NETS[net||"main"].hrp);
}
const CRC_TABLE = (() => { const t = new Uint32Array(256); for(let n = 0; n < 256; n++){ let c = n; for(let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(b){ let c = 0xFFFFFFFF; for(const x of b) c = CRC_TABLE[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
const BYTEWORDS = "ableacidalsoapexaquaarchatomauntawayaxisbackbaldbarnbeltbetabiasbluebodybragbrewbulbbuzzcalmcashcatschefcityclawcodecolacookcostcruxcurlcuspcyandarkdatadaysdelidicedietdoordowndrawdropdrumdulldutyeacheasyechoedgeepicevenexamexiteyesfactfairfernfigsfilmfishfizzflapflewfluxfoxyfreefrogfuelfundgalagamegeargemsgiftgirlglowgoodgraygrimgurugushgyrohalfhanghardhawkheathelphighhillholyhopehornhutsicedideaidleinchinkyintoirisironitemjadejazzjoinjoltjowljudojugsjumpjunkjurykeepkenokeptkeyskickkilnkingkitekiwiknoblamblavalazyleaflegsliarlimplionlistlogoloudloveluaulucklungmainmanymathmazememomenumeowmildmintmissmonknailnavyneednewsnextnoonnotenumbobeyoboeomitonyxopenovalowlspaidpartpeckplaypluspoempoolposepuffpumapurrquadquizraceramprealredorichroadrockroofrubyruinrunsrustsafesagascarsetssilkskewslotsoapsolosongstubsurfswantacotasktaxitenttiedtimetinytoiltombtoystriptunatwinuglyundouniturgeuservastveryvetovialvibeviewvisavoidvowswallwandwarmwaspwavewaxywebswhatwhenwhizwolfworkyankyawnyellyogayurtzapszerozestzinczonezoom";
const BW_MIN = Array.from({length: 256}, (_, i) => BYTEWORDS[i * 4] + BYTEWORDS[i * 4 + 3]);
const BW_INDEX = Object.fromEntries(BW_MIN.map((w, i) => [w, i]));
const be32 = (n) => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255];
function bytewordsMin(body){ const all = [...body, ...be32(crc32(body))]; return all.map(b => BW_MIN[b]).join(""); }
function bytewordsMinDecode(t){
  t = String(t).toLowerCase();
  if(t.length % 2 || !/^[a-z]+$/.test(t)) throw new Error("the part is not complete (an odd number of letters, or a character that is not a letter)");
  const out = [];
  for(let i = 0; i < t.length; i += 2){ const v = BW_INDEX[t.slice(i, i + 2)]; if(v === undefined) throw new Error("the part has letters that are not Bytewords"); out.push(v); }
  if(out.length < 5) throw new Error("the part is too short");
  const body = out.slice(0, -4), c = be32(crc32(body));
  if(c.some((x, i) => x !== out[out.length - 4 + i])) throw new Error("a part's checksum does not match: it was copied wrongly");
  return body;
}
function cborHead(major, n){
  if(n < 24) return [(major << 5) | n];
  if(n < 256) return [(major << 5) | 24, n];
  if(n < 65536) return [(major << 5) | 25, n >> 8, n & 255];
  return [(major << 5) | 26, ...be32(n)];
}
const CB = {
  uint: (n) => cborHead(0, n), bytes: (b) => [...cborHead(2, b.length), ...b], bool: (x) => [x ? 0xf5 : 0xf4], tag: (t, v) => [...cborHead(6, t), ...v],
  arr: (items) => [].concat(cborHead(4, items.length), ...items), map: (pairs) => [].concat(cborHead(5, pairs.length), ...pairs.map(([k, v]) => k.concat(v)))
};
function cborRead(b, pos){
  if(pos >= b.length) throw new Error("the data ends early");
  const ib = b[pos++], major = ib >> 5, ai = ib & 31;
  let n;
  if(ai < 24) n = ai;
  else if(ai === 24){ n = b[pos]; pos += 1; }
  else if(ai === 25){ n = (b[pos] << 8) | b[pos + 1]; pos += 2; }
  else if(ai === 26){ n = ((b[pos] << 24) >>> 0) + ((b[pos + 1] << 16) | (b[pos + 2] << 8) | b[pos + 3]); pos += 4; }
  else throw new Error("unsupported data inside the QR text");
  if(n === undefined || Number.isNaN(n) || pos > b.length) throw new Error("the data ends early");
  if(major === 0) return {v: n, pos};
  if(major === 2){ if(pos + n > b.length) throw new Error("the data ends early"); return {v: Uint8Array.from(b.slice(pos, pos + n)), pos: pos + n}; }
  if(major === 4){ if(n > 64) throw new Error("unexpected data inside the QR text"); const a = []; for(let i = 0; i < n; i++){ const r = cborRead(b, pos); a.push(r.v); pos = r.pos; } return {v: a, pos}; }
  throw new Error("unexpected data inside the QR text");
}
function urFragLen(len, minF, maxF){ const maxCount = Math.ceil(len / minF); let fl = len; for(let c = 1; c <= maxCount; c++){ fl = Math.ceil(len / c); if(fl <= maxF) break; } return fl; }
function urEncode(type, msg, maxFrag){
  msg = Array.from(msg);
  const fl = urFragLen(msg.length, 10, maxFrag);
  if(fl >= msg.length) return ["ur:" + type + "/" + bytewordsMin(msg)];
  const seqLen = Math.ceil(msg.length / fl), crc = crc32(msg), parts = [];
  for(let i = 0; i < seqLen; i++){
    const frag = msg.slice(i * fl, (i + 1) * fl); while(frag.length < fl) frag.push(0);
    parts.push("ur:" + type + "/" + (i + 1) + "-" + seqLen + "/" + bytewordsMin(CB.arr([CB.uint(i + 1), CB.uint(seqLen), CB.uint(msg.length), CB.uint(crc), CB.bytes(frag)])));
  }
  return parts;
}
function urDecodeFrames(frames){
  let type = null, single = null, info = null, ignored = 0;
  const slots = [];
  for(const f0 of frames){
    const f = f0.toLowerCase(), segs = f.slice(3).split("/");
    if(!/^[a-z0-9-]+$/.test(segs[0] || "")) throw new Error("a UR part has no valid type");
    if(type && segs[0] !== type) throw new Error("the UR parts are of different types (" + type + " and " + segs[0] + ")");
    type = segs[0];
    if(segs.length === 2){ single = bytewordsMinDecode(segs[1]); continue; }
    if(segs.length !== 3 || !/^\d{1,5}-\d{1,5}$/.test(segs[1])) throw new Error("a UR part is not complete, or uses the old UR format (not supported)");
    const body = cborRead(bytewordsMinDecode(segs[2]), 0).v;
    if(!Array.isArray(body) || body.length !== 5 || !(body[4] instanceof Uint8Array)) throw new Error("a UR part is damaged");
    const [sn, sl, ml, ck, data] = body, path = segs[1].split("-").map(Number);
    if(path[0] !== sn || path[1] !== sl || sl < 1 || sl > 65536 || ml < 1) throw new Error("a UR part is damaged (its numbers do not match)");
    if(!info) info = {sl, ml, ck, dl: data.length};
    else if(info.sl !== sl || info.ml !== ml || info.ck !== ck || info.dl !== data.length) throw new Error("the UR parts come from different QR codes");
    if(sn > sl){ ignored++; continue; }
    if(slots[sn - 1] && slots[sn - 1].some((x, i) => x !== data[i])) throw new Error("part " + sn + " appears twice with different contents");
    slots[sn - 1] = data;
  }
  if(single) return {type, msg: single};
  if(!info) throw new Error("no UR part was found");
  const missing = []; for(let i = 0; i < info.sl; i++) if(!slots[i]) missing.push(i + 1);
  if(missing.length) throw new Error("UR parts missing: " + missing.join(", ") + " of " + info.sl + (ignored ? " (" + ignored + " mixed part" + (ignored === 1 ? " was" : "s were") + " left out: paste parts 1 to " + info.sl + ")" : "") + ".");
  const msg = [].concat(...slots.map(x => Array.from(x))).slice(0, info.ml);
  if(crc32(msg) !== info.ck) throw new Error("the joined UR parts do not check out (checksum)");
  return {type, msg};
}
const RFC_B32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function base32Decode(t){ const out = []; let acc = 0, n = 0; for(const ch of t){ const v = RFC_B32.indexOf(ch); if(v < 0) throw new Error("a BBQr part has a character that is not Base32"); acc = (acc << 5) | v; n += 5; if(n >= 8){ out.push((acc >>> (n - 8)) & 255); n -= 8; } acc &= (1 << n) - 1; } return out; }
function bbqrDecodeFrames(frames){
  let head = null; const slots = [];
  for(const f0 of frames){
    const f = f0.toUpperCase();
    if(!/^B\$[H2Z][A-Z][0-9A-Z]{4}/.test(f)) throw new Error("a BBQr part has a damaged header");
    if(head && f.slice(0, 6) !== head) throw new Error("the BBQr parts come from different QR codes");
    head = f.slice(0, 6);
    const total = parseInt(f.slice(4, 6), 36), idx = parseInt(f.slice(6, 8), 36), body = f.slice(8);
    if(total < 1 || idx >= total) throw new Error("a BBQr part number is out of range");
    if(slots[idx] !== undefined && slots[idx] !== body) throw new Error("BBQr part " + (idx + 1) + " appears twice with different contents");
    slots[idx] = body;
  }
  const total = parseInt(head.slice(4, 6), 36), missing = [];
  for(let i = 0; i < total; i++) if(slots[i] === undefined) missing.push(i + 1);
  if(missing.length) throw new Error("BBQr parts missing: " + missing.join(", ") + " of " + total + ".");
  const encC = head[2]; let bytes = [];
  for(const body of slots){
    if(encC === "H"){ if(body.length % 2 || !/^[0-9A-F]*$/.test(body)) throw new Error("a BBQr hex part is damaged"); bytes = bytes.concat(Array.from(fromHex(body.toLowerCase()))); }
    else bytes = bytes.concat(base32Decode(body));
  }
  if(encC === "Z") bytes = inflateRaw(Uint8Array.from(bytes));
  return {fileType: head[3], bytes: Uint8Array.from(bytes)};
}
function inflateRaw(src, max = 4194304){
  let pos = 0, bit = 0, n = 0, out = new Uint8Array(Math.min(max, Math.max(65536, src.length * 4)));
  const room = (k) => {
    if(n + k > max) throw new Error("the compressed data unpacks to more than " + (max >= 1048576 ? max / 1048576 + " MB" : max + " bytes"));
    if(n + k > out.length){ const o = new Uint8Array(Math.min(max, Math.max(n + k, out.length * 2))); o.set(out.subarray(0, n)); out = o; }
  };
  const bits = (n) => { let v = 0; for(let i = 0; i < n; i++){ if(pos >= src.length) throw new Error("the compressed data ends early"); v |= ((src[pos] >> bit) & 1) << i; if(++bit === 8){ bit = 0; pos++; } } return v; };
  const build = (lengths) => { const count = new Array(16).fill(0), offs = new Array(16).fill(0), sym = []; for(const l of lengths) count[l]++; count[0] = 0; for(let l = 1; l < 15; l++) offs[l + 1] = offs[l] + count[l]; lengths.forEach((l, s) => { if(l) sym[offs[l]++] = s; }); return {count, sym}; };
  const decode = (h) => { let code = 0, first = 0, index = 0; for(let len = 1; len < 16; len++){ code |= bits(1); const c = h.count[len]; if(code - c < first) return h.sym[index + (code - first)]; index += c; first += c; first <<= 1; code <<= 1; } throw new Error("the compressed data is damaged"); };
  const LB = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258], LE = [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];
  const DB = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577], DE = [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];
  let last;
  do {
    last = bits(1); const type = bits(2);
    if(type === 0){
      if(bit){ bit = 0; pos++; }
      if(pos + 4 > src.length) throw new Error("the compressed data ends early");
      const len = src[pos] | (src[pos + 1] << 8), nlen = src[pos + 2] | (src[pos + 3] << 8); pos += 4;
      if(len !== (~nlen & 0xffff) || pos + len > src.length) throw new Error("the compressed data is damaged");
      room(len); out.set(src.subarray(pos, pos + len), n); n += len; pos += len;
    } else if(type === 1 || type === 2){
      let lit, dist;
      if(type === 1){ const l = []; for(let i = 0; i < 288; i++) l.push(i < 144 ? 8 : i < 256 ? 9 : i < 280 ? 7 : 8); lit = build(l); dist = build(new Array(30).fill(5)); }
      else {
        const nlen = bits(5) + 257, ndist = bits(5) + 1, ncode = bits(4) + 4, ORD = [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15], cl = new Array(19).fill(0);
        for(let i = 0; i < ncode; i++) cl[ORD[i]] = bits(3);
        const ch = build(cl), lens = [];
        while(lens.length < nlen + ndist){
          const sy = decode(ch);
          if(sy < 16) lens.push(sy);
          else if(sy === 16){ if(!lens.length) throw new Error("the compressed data is damaged"); const r = 3 + bits(2), pv = lens[lens.length - 1]; for(let i = 0; i < r; i++) lens.push(pv); }
          else { const r = sy === 17 ? 3 + bits(3) : 11 + bits(7); for(let i = 0; i < r; i++) lens.push(0); }
        }
        if(lens.length > nlen + ndist) throw new Error("the compressed data is damaged");
        lit = build(lens.slice(0, nlen)); dist = build(lens.slice(nlen));
      }
      for(;;){
        const sy = decode(lit);
        if(sy < 256){ room(1); out[n++] = sy; }
        else if(sy === 256) break;
        else {
          const li = sy - 257; if(li >= 29) throw new Error("the compressed data is damaged");
          const len = LB[li] + bits(LE[li]), di = decode(dist); if(di >= 30) throw new Error("the compressed data is damaged");
          const d = DB[di] + bits(DE[di]); if(d > n) throw new Error("the compressed data is damaged");
          room(len); for(let i = 0; i < len; i++, n++) out[n] = out[n - d];
        }
      }
    } else throw new Error("the compressed data is damaged");
  } while(!last);
  return out.slice(0, n);
}
function qrTextDecode(text){
  const frames = String(text || "").split(/\s+/).filter(Boolean);
  if(!frames.length) return null;
  const ur = frames.filter(f => /^ur:/i.test(f)), bb = frames.filter(f => /^B\$/i.test(f));
  if(ur.length && ur.length === frames.length){ const r = urDecodeFrames(ur); return {kind: "ur", type: r.type, msg: r.msg}; }
  if(bb.length && bb.length === frames.length){ const r = bbqrDecodeFrames(bb); return {kind: "bbqr", type: r.fileType, bytes: r.bytes}; }
  if(ur.length || bb.length) throw new Error("the pasted text mixes QR parts with other text: paste only the parts, one per line");
  return null;
}
function bech32mText(hrp, data){
  const G=[0x3b6a57b2,0x26508e6d,0x1ea119fa,0x3d4233dd,0x2a1462b3];
  const poly=(v)=>{ let c=1; for(const x of v){ const b=c>>>25; c=((c&0x1ffffff)<<5)^x; for(let i=0;i<5;i++) if((b>>i)&1) c^=G[i]; } return c; };
  const hb=Array.from(hrp).map(ch=>ch.charCodeAt(0));
  const mod=poly(hb.map(c=>c>>5).concat([0],hb.map(c=>c&31),data,[0,0,0,0,0,0]))^0x2bc830a3;
  const out=data.slice(); for(let i=0;i<6;i++) out.push((mod>>(5*(5-i)))&31);
  return hrp+"1"+out.map(d=>B32[d]).join("");
}
const QR_M={1:[10,[[1,16]]],2:[16,[[1,28]]],3:[26,[[1,44]]],4:[18,[[2,32]]],5:[24,[[2,43]]],6:[16,[[4,27]]],7:[18,[[4,31]]],8:[22,[[2,38],[2,39]]],9:[22,[[3,36],[2,37]]],10:[26,[[4,43],[1,44]]],11:[30,[[1,50],[4,51]]],12:[22,[[6,36],[2,37]]],13:[22,[[8,37],[1,38]]],14:[24,[[4,40],[5,41]]],15:[24,[[5,41],[5,42]]],16:[28,[[7,45],[3,46]]],17:[28,[[10,46],[1,47]]],18:[26,[[9,43],[4,44]]],19:[26,[[3,44],[11,45]]],20:[26,[[3,41],[13,42]]],21:[26,[[17,42]]],22:[28,[[17,46]]],23:[28,[[4,47],[14,48]]],24:[28,[[6,45],[14,46]]],25:[28,[[8,47],[13,48]]],26:[28,[[19,46],[4,47]]],27:[28,[[22,45],[3,46]]],28:[28,[[3,45],[23,46]]],29:[28,[[21,45],[7,46]]],30:[28,[[19,47],[10,48]]]};
const QR_L={1:[7,[[1,19]]],2:[10,[[1,34]]],3:[15,[[1,55]]]};
const QR_ALIGN={1:[],2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],7:[6,22,38],8:[6,24,42],9:[6,26,46],10:[6,28,50],11:[6,30,54],12:[6,32,58],13:[6,34,62],14:[6,26,46,66],15:[6,26,48,70],16:[6,26,50,74],17:[6,30,54,78],18:[6,30,56,82],19:[6,30,58,86],20:[6,34,62,90],21:[6,28,50,72,94],22:[6,26,50,74,98],23:[6,30,54,78,102],24:[6,28,54,80,106],25:[6,32,58,84,110],26:[6,30,58,86,114],27:[6,34,62,90,118],28:[6,26,50,74,98,122],29:[6,30,54,78,102,126],30:[6,26,52,78,104,130]};
function qrGfMul(a,b){ let r=0; for(let i=7;i>=0;i--){ r=(r<<1)^((r>>>7)*0x11d); r^=((b>>>i)&1)*a; } return r; }
function qrRs(data,deg){
  const g=new Array(deg).fill(0); g[deg-1]=1; let root=1;
  for(let i=0;i<deg;i++){ for(let j=0;j<deg;j++){ g[j]=qrGfMul(g[j],root); if(j+1<deg) g[j]^=g[j+1]; } root=qrGfMul(root,2); }
  const res=new Array(deg).fill(0);
  for(const b of data){ const f=b^res.shift(); res.push(0); for(let i=0;i<deg;i++) res[i]^=qrGfMul(g[i],f); }
  return res;
}
function qrMatrix(text, forcedMask){ return qrBuild({mode:"byte", bytes:Array.from(new TextEncoder().encode(text)), level:"M"}, forcedMask); }
const QR_ALNUM="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
function qrBuild(spec, forcedMask){
  const TBL=spec.level==="L"?QR_L:QR_M, eccBits=spec.level==="L"?1:0, numeric=spec.mode==="numeric", alnum=spec.mode==="alnum";
  const bytes=spec.bytes, digits=spec.digits, text=spec.text;
  if(alnum && [...text].some(ch=>QR_ALNUM.indexOf(ch)<0)) throw new Error("not QR alphanumeric text");
  // character-count bits per mode and version band (v1-9, v10-26, v27-40); alphanumeric added in v2.6.0 for animated UR and BBQr frames
  const cb=(v)=>numeric?(v<10?10:v<27?12:14):alnum?(v<10?9:v<27?11:13):(v<10?8:16);
  const dataBits=numeric?Math.floor(digits.length/3)*10+[0,4,7][digits.length%3]:alnum?Math.floor(text.length/2)*11+(text.length%2)*6:bytes.length*8;
  let ver=0, cap=0;
  for(let v=spec.minVer||1;v<=Object.keys(TBL).length;v++){ const dc=TBL[v][1].reduce((s,[n,l])=>s+n*l,0); if(4+cb(v)+dataBits<=dc*8){ ver=v; cap=dc; break; } }
  if(!ver) throw new Error("Too long for a QR code");
  const bits=[]; const put=(val,len)=>{ for(let i=len-1;i>=0;i--) bits.push((val>>>i)&1); };
  if(numeric){ put(1,4); put(digits.length,cb(ver));
    for(let i=0;i<digits.length;i+=3){ const g=digits.slice(i,i+3); put(parseInt(g,10),g.length===3?10:g.length===2?7:4); } }
  else if(alnum){ put(2,4); put(text.length,cb(ver));
    for(let i=0;i<text.length;i+=2){ const a=QR_ALNUM.indexOf(text[i]); if(i+1<text.length) put(a*45+QR_ALNUM.indexOf(text[i+1]),11); else put(a,6); } }
  else { put(4,4); put(bytes.length,cb(ver)); for(const b of bytes) put(b,8); }
  put(0,Math.min(4,cap*8-bits.length)); while(bits.length%8) bits.push(0);
  for(let pad=0xec; bits.length<cap*8; pad^=0xec^0x11) put(pad,8);
  const data=[]; for(let i=0;i<bits.length;i+=8) data.push(parseInt(bits.slice(i,i+8).join(""),2));
  const [ecLen,groups]=TBL[ver], blocks=[]; let k=0;
  for(const [n,len] of groups) for(let i=0;i<n;i++){ const d=data.slice(k,k+len); k+=len; blocks.push([d,qrRs(d,ecLen)]); }
  const maxLen=Math.max(...blocks.map(b=>b[0].length)), words=[];
  for(let i=0;i<maxLen;i++) for(const b of blocks) if(i<b[0].length) words.push(b[0][i]);
  for(let i=0;i<ecLen;i++) for(const b of blocks) words.push(b[1][i]);
  const size=ver*4+17, m=[], fn=[];
  for(let i=0;i<size;i++){ m.push(new Array(size).fill(false)); fn.push(new Array(size).fill(false)); }
  const set=(x,y,d)=>{ m[y][x]=d; fn[y][x]=true; };
  for(let i=0;i<size;i++){ set(6,i,i%2===0); set(i,6,i%2===0); }
  for(const [cx,cy] of [[3,3],[size-4,3],[3,size-4]]) for(let dy=-4;dy<=4;dy++) for(let dx=-4;dx<=4;dx++){
    const x=cx+dx, y=cy+dy, dist=Math.max(Math.abs(dx),Math.abs(dy)); if(x>=0&&x<size&&y>=0&&y<size) set(x,y,dist!==2&&dist!==4); }
  const ap=QR_ALIGN[ver];
  for(let i=0;i<ap.length;i++) for(let j=0;j<ap.length;j++){
    if((i===0&&j===0)||(i===0&&j===ap.length-1)||(i===ap.length-1&&j===0)) continue;
    for(let dy=-2;dy<=2;dy++) for(let dx=-2;dx<=2;dx++) set(ap[i]+dx,ap[j]+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1); }
  const drawFormat=(mask)=>{
    const d=(eccBits<<3)|mask; let rem=d; for(let i=0;i<10;i++) rem=(rem<<1)^((rem>>>9)*0x537);
    const f=((d<<10)|rem)^0x5412, bit=(i)=>((f>>>i)&1)!==0;
    for(let i=0;i<=5;i++) set(8,i,bit(i)); set(8,7,bit(6)); set(8,8,bit(7)); set(7,8,bit(8));
    for(let i=9;i<15;i++) set(14-i,8,bit(i));
    for(let i=0;i<8;i++) set(size-1-i,8,bit(i));
    for(let i=8;i<15;i++) set(8,size-15+i,bit(i));
    set(8,size-8,true);
  };
  drawFormat(0);
  if(ver>=7){ let rem=ver; for(let i=0;i<12;i++) rem=(rem<<1)^((rem>>>11)*0x1f25);
    const v=(ver<<12)|rem; for(let i=0;i<18;i++){ const b=((v>>>i)&1)!==0, a=size-11+i%3, c=Math.floor(i/3); set(a,c,b); set(c,a,b); } }
  let bi=0;
  for(let right=size-1;right>=1;right-=2){ if(right===6) right=5;
    for(let vert=0;vert<size;vert++) for(let j=0;j<2;j++){ const x=right-j, up=((right+1)&2)===0, y=up?size-1-vert:vert;
      if(!fn[y][x]&&bi<words.length*8){ m[y][x]=((words[bi>>>3]>>>(7-(bi&7)))&1)!==0; bi++; } } }
  const MASKS=[(x,y)=>(x+y)%2===0,(x,y)=>y%2===0,(x,y)=>x%3===0,(x,y)=>(x+y)%3===0,(x,y)=>(Math.floor(x/3)+Math.floor(y/2))%2===0,(x,y)=>x*y%2+x*y%3===0,(x,y)=>(x*y%2+x*y%3)%2===0,(x,y)=>((x+y)%2+x*y%3)%2===0];
  const applyMask=(mk)=>{ for(let y=0;y<size;y++) for(let x=0;x<size;x++) if(!fn[y][x]&&MASKS[mk](x,y)) m[y][x]=!m[y][x]; };
  const penalty=()=>{
    let r=0; const hist=(h,len)=>{ if(h[0]===0) len+=size; h.pop(); h.unshift(len); };
    const pat=(h)=>{ const n=h[1], core=n>0&&h[2]===n&&h[3]===n*3&&h[4]===n&&h[5]===n; return (core&&h[0]>=n*4&&h[6]>=n?1:0)+(core&&h[6]>=n*4&&h[0]>=n?1:0); };
    for(const horiz of [true,false]){ for(let a=0;a<size;a++){ let col=false, run=0; const h=[0,0,0,0,0,0,0];
      for(let b=0;b<size;b++){ const c=horiz?m[a][b]:m[b][a];
        if(c===col){ run++; if(run===5) r+=3; else if(run>5) r++; }
        else { hist(h,run); if(!col) r+=pat(h)*40; col=c; run=1; } }
      if(col){ hist(h,run); run=0; } run+=size; hist(h,run); r+=pat(h)*40; } }
    for(let y=0;y<size-1;y++) for(let x=0;x<size-1;x++){ const c=m[y][x]; if(c===m[y][x+1]&&c===m[y+1][x]&&c===m[y+1][x+1]) r+=3; }
    let dark=0; for(const row of m) for(const c of row) if(c) dark++;
    const tot=size*size; r+=(Math.ceil(Math.abs(dark*20-tot*10)/tot)-1)*10; return r;
  };
  let mask=forcedMask;
  if(mask===undefined){ let best=Infinity;
    for(let mk=0;mk<8;mk++){ applyMask(mk); drawFormat(mk); const p=penalty(); if(p<best){ best=p; mask=mk; } applyMask(mk); } }
  applyMask(mask); drawFormat(mask);
  return {version:ver, mask, rows:m};
}
function seedQrData(words){
  const idx = words.map(w=>WORD_MAP[w]);
  if(![12,24].includes(idx.length) || idx.some(i=>i===undefined)) return null;
  const digits = idx.map(i=>String(i).padStart(4,"0")).join("");
  const bits = idx.map(i=>i.toString(2).padStart(11,"0")).join("").slice(0, idx.length*11 - idx.length/3), bytes = [];
  for(let i=0;i<bits.length;i+=8) bytes.push(parseInt(bits.slice(i,i+8),2));
  return {digits, bytes};
}
function seedQrMatrix(words, kind, mask){
  const d = seedQrData(words); if(!d) throw new Error("SeedQR exists only for 12 and 24 words");
  return qrBuild(kind==="compact" ? {mode:"byte", bytes:d.bytes, level:"L"} : {mode:"numeric", digits:d.digits, level:"L"}, mask);
}
async function sha256bytes(b){ return new Uint8Array(await crypto.subtle.digest("SHA-256", b)); }
async function mnemonicFingerprint(mnemonic, passphrase){ return fingerprintFromSeed(await mnemonicToSeed(mnemonic, passphrase)); }
async function rollsToMnemonic(rolls, wc){
  const entLen = {12:16,15:20,18:24,21:28,24:32}[wc];
  if(!entLen) throw new Error("Only 12, 15, 18, 21 and 24 words are supported");
  const digest = await sha256(rolls);
  return entropyToMnemonic(digest.slice(0, entLen));
}
async function phraseFromCode(raw){
  const q = (raw || "").replace(/\s+/g, "");
  if(/^[0-9]+$/.test(q) && q.length % 4 === 0 && [12,15,18,21,24].includes(q.length / 4)){
    const words = [];
    for(let i = 0; i < q.length; i += 4){
      const n = parseInt(q.slice(i, i + 4), 10);
      if(n > 2047) return {error:"Not a SeedQR digit string: the number " + q.slice(i, i + 4) + " is above 2047."};
      words.push(WORDLIST[n]);
    }
    return {words:words.join(" "), kind:"a SeedQR digit string"};
  }
  if(/^[0-9a-fA-F]+$/.test(q) && [32,40,48,56,64].includes(q.length)) return {words:await entropyToMnemonic(fromHex(q.toLowerCase())), kind:"CompactSeedQR hex"};
  return null;
}
async function electrumSeedType(phrase){
  const t = electrumNorm(phrase);
  if(!t) return null;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode("Seed version"), {name:"HMAC", hash:"SHA-512"}, false, ["sign"]);
  const h = hex(new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(t))));
  if(h.startsWith("100")) return "SegWit";
  if(h.startsWith("101")) return "two-factor (2FA)";
  if(h.startsWith("102")) return "two-factor (2FA) SegWit";
  if(h.startsWith("01")) return "standard";
  return null;
}
async function electrumNote(phrase){
  let k = null; try { k = await electrumSeedType(phrase); } catch(e) { k = null; }
  return k ? " This looks like an Electrum seed (" + k + " type), not a BIP39 phrase. Restore it in Electrum and choose \u201cElectrum seed\u201d, not BIP39; other wallets may not accept it." : "";
}
const OLD_EL_WORDS = ["like","just","love","know","never","want","time","out","there","make","look","eye","down","only","think","heart","back","then","into","about","more","away","still","them","take","thing","even","through","long","always","world","too","friend","tell","try","hand","thought","over","here","other","need","smile","again","much","cry","been","night","ever","little","said","end","some","those","around","mind","people","girl","leave","dream","left","turn","myself","give","nothing","really","off","before","something","find","walk","wish","good","once","place","ask","stop","keep","watch","seem","everything","wait","got","yet","made","remember","start","alone","run","hope","maybe","believe","body","hate","after","close","talk","stand","own","each","hurt","help","home","god","soul","new","many","two","inside","should","true","first","fear","mean","better","play","another","gone","change","use","wonder","someone","hair","cold","open","best","any","behind","happen","water","dark","laugh","stay","forever","name","work","show","sky","break","came","deep","door","put","black","together","upon","happy","such","great","white","matter","fill","past","please","burn","cause","enough","touch","moment","soon","voice","scream","anything","stare","sound","red","everyone","hide","kiss","truth","death","beautiful","mine","blood","broken","very","pass","next","forget","tree","wrong","air","mother","understand","lip","hit","wall","memory","sleep","free","high","realize","school","might","skin","sweet","perfect","blue","kill","breath","dance","against","fly","between","grow","strong","under","listen","bring","sometimes","speak","pull","person","become","family","begin","ground","real","small","father","sure","feet","rest","young","finally","land","across","today","different","guy","line","fire","reason","reach","second","slowly","write","eat","smell","mouth","step","learn","three","floor","promise","breathe","darkness","push","earth","guess","save","song","above","along","both","color","house","almost","sorry","anymore","brother","okay","dear","game","fade","already","apart","warm","beauty","heard","notice","question","shine","began","piece","whole","shadow","secret","street","within","finger","point","morning","whisper","child","moon","green","story","glass","kid","silence","since","soft","yourself","empty","shall","angel","answer","baby","bright","dad","path","worry","hour","drop","follow","power","war","half","flow","heaven","act","chance","fact","least","tired","children","near","quite","afraid","rise","sea","taste","window","cover","nice","trust","lot","sad","cool","force","peace","return","blind","easy","ready","roll","rose","drive","held","music","beneath","hang","mom","paint","emotion","quiet","clear","cloud","few","pretty","bird","outside","paper","picture","front","rock","simple","anyone","meant","reality","road","sense","waste","bit","leaf","thank","happiness","meet","men","smoke","truly","decide","self","age","book","form","alive","carry","escape","damn","instead","able","ice","minute","throw","catch","leg","ring","course","goodbye","lead","poem","sick","corner","desire","known","problem","remind","shoulder","suppose","toward","wave","drink","jump","woman","pretend","sister","week","human","joy","crack","grey","pray","surprise","dry","knee","less","search","bleed","caught","clean","embrace","future","king","son","sorrow","chest","hug","remain","sat","worth","blow","daddy","final","parent","tight","also","create","lonely","safe","cross","dress","evil","silent","bone","fate","perhaps","anger","class","scar","snow","tiny","tonight","continue","control","dog","edge","mirror","month","suddenly","comfort","given","loud","quickly","gaze","plan","rush","stone","town","battle","ignore","spirit","stood","stupid","yours","brown","build","dust","hey","kept","pay","phone","twist","although","ball","beyond","hidden","nose","taken","fail","float","pure","somehow","wash","wrap","angry","cheek","creature","forgotten","heat","rip","single","space","special","weak","whatever","yell","anyway","blame","job","choose","country","curse","drift","echo","figure","grew","laughter","neck","suffer","worse","yeah","disappear","foot","forward","knife","mess","somewhere","stomach","storm","beg","idea","lift","offer","breeze","field","five","often","simply","stuck","win","allow","confuse","enjoy","except","flower","seek","strength","calm","grin","gun","heavy","hill","large","ocean","shoe","sigh","straight","summer","tongue","accept","crazy","everyday","exist","grass","mistake","sent","shut","surround","table","ache","brain","destroy","heal","nature","shout","sign","stain","choice","doubt","glance","glow","mountain","queen","stranger","throat","tomorrow","city","either","fish","flame","rather","shape","spin","spread","ash","distance","finish","image","imagine","important","nobody","shatter","warmth","became","feed","flesh","funny","lust","shirt","trouble","yellow","attention","bare","bite","money","protect","amaze","appear","born","choke","completely","daughter","fresh","friendship","gentle","probably","six","deserve","expect","grab","middle","nightmare","river","thousand","weight","worst","wound","barely","bottle","cream","regret","relationship","stick","test","crush","endless","fault","itself","rule","spill","art","circle","join","kick","mask","master","passion","quick","raise","smooth","unless","wander","actually","broke","chair","deal","favorite","gift","note","number","sweat","box","chill","clothes","lady","mark","park","poor","sadness","tie","animal","belong","brush","consume","dawn","forest","innocent","pen","pride","stream","thick","clay","complete","count","draw","faith","press","silver","struggle","surface","taught","teach","wet","bless","chase","climb","enter","letter","melt","metal","movie","stretch","swing","vision","wife","beside","crash","forgot","guide","haunt","joke","knock","plant","pour","prove","reveal","steal","stuff","trip","wood","wrist","bother","bottom","crawl","crowd","fix","forgive","frown","grace","loose","lucky","party","release","surely","survive","teacher","gently","grip","speed","suicide","travel","treat","vein","written","cage","chain","conversation","date","enemy","however","interest","million","page","pink","proud","sway","themselves","winter","church","cruel","cup","demon","experience","freedom","pair","pop","purpose","respect","shoot","softly","state","strange","bar","birth","curl","dirt","excuse","lord","lovely","monster","order","pack","pants","pool","scene","seven","shame","slide","ugly","among","blade","blonde","closet","creek","deny","drug","eternity","gain","grade","handle","key","linger","pale","prepare","swallow","swim","tremble","wheel","won","cast","cigarette","claim","college","direction","dirty","gather","ghost","hundred","loss","lung","orange","present","swear","swirl","twice","wild","bitter","blanket","doctor","everywhere","flash","grown","knowledge","numb","pressure","radio","repeat","ruin","spend","unknown","buy","clock","devil","early","false","fantasy","pound","precious","refuse","sheet","teeth","welcome","add","ahead","block","bury","caress","content","depth","despite","distant","marry","purple","threw","whenever","bomb","dull","easily","grasp","hospital","innocence","normal","receive","reply","rhyme","shade","someday","sword","toe","visit","asleep","bought","center","consider","flat","hero","history","ink","insane","muscle","mystery","pocket","reflection","shove","silently","smart","soldier","spot","stress","train","type","view","whether","bus","energy","explain","holy","hunger","inch","magic","mix","noise","nowhere","prayer","presence","shock","snap","spider","study","thunder","trail","admit","agree","bag","bang","bound","butterfly","cute","exactly","explode","familiar","fold","further","pierce","reflect","scent","selfish","sharp","sink","spring","stumble","universe","weep","women","wonderful","action","ancient","attempt","avoid","birthday","branch","chocolate","core","depress","drunk","especially","focus","fruit","honest","match","palm","perfectly","pillow","pity","poison","roar","shift","slightly","thump","truck","tune","twenty","unable","wipe","wrote","coat","constant","dinner","drove","egg","eternal","flight","flood","frame","freak","gasp","glad","hollow","motion","peer","plastic","root","screen","season","sting","strike","team","unlike","victim","volume","warn","weird","attack","await","awake","built","charm","crave","despair","fought","grant","grief","horse","limit","message","ripple","sanity","scatter","serve","split","string","trick","annoy","blur","boat","brave","clearly","cling","connect","fist","forth","imagination","iron","jock","judge","lesson","milk","misery","nail","naked","ourselves","poet","possible","princess","sail","size","snake","society","stroke","torture","toss","trace","wise","bloom","bullet","cell","check","cost","darling","during","footstep","fragile","hallway","hardly","horizon","invisible","journey","midnight","mud","nod","pause","relax","shiver","sudden","value","youth","abuse","admire","blink","breast","bruise","constantly","couple","creep","curve","difference","dumb","emptiness","gotta","honor","plain","planet","recall","rub","ship","slam","soar","somebody","tightly","weather","adore","approach","bond","bread","burst","candle","coffee","cousin","crime","desert","flutter","frozen","grand","heel","hello","language","level","movement","pleasure","powerful","random","rhythm","settle","silly","slap","sort","spoken","steel","threaten","tumble","upset","aside","awkward","bee","blank","board","button","card","carefully","complain","crap","deeply","discover","drag","dread","effort","entire","fairy","giant","gotten","greet","illusion","jeans","leap","liquid","march","mend","nervous","nine","replace","rope","spine","stole","terror","accident","apple","balance","boom","childhood","collect","demand","depression","eventually","faint","glare","goal","group","honey","kitchen","laid","limb","machine","mere","mold","murder","nerve","painful","poetry","prince","rabbit","shelter","shore","shower","soothe","stair","steady","sunlight","tangle","tease","treasure","uncle","begun","bliss","canvas","cheer","claw","clutch","commit","crimson","crystal","delight","doll","existence","express","fog","football","gay","goose","guard","hatred","illuminate","mass","math","mourn","rich","rough","skip","stir","student","style","support","thorn","tough","yard","yearn","yesterday","advice","appreciate","autumn","bank","beam","bowl","capture","carve","collapse","confusion","creation","dove","feather","girlfriend","glory","government","harsh","hop","inner","loser","moonlight","neighbor","neither","peach","pig","praise","screw","shield","shimmer","sneak","stab","subject","throughout","thrown","tower","twirl","wow","army","arrive","bathroom","bump","cease","cookie","couch","courage","dim","guilt","howl","hum","husband","insult","led","lunch","mock","mostly","natural","nearly","needle","nerd","peaceful","perfection","pile","price","remove","roam","sanctuary","serious","shiny","shook","sob","stolen","tap","vain","void","warrior","wrinkle","affection","apologize","blossom","bounce","bridge","cheap","crumble","decision","descend","desperately","dig","dot","flip","frighten","heartbeat","huge","lazy","lick","odd","opinion","process","puzzle","quietly","retreat","score","sentence","separate","situation","skill","soak","square","stray","taint","task","tide","underneath","veil","whistle","anywhere","bedroom","bid","bloody","burden","careful","compare","concern","curtain","decay","defeat","describe","double","dreamer","driver","dwell","evening","flare","flicker","grandma","guitar","harm","horrible","hungry","indeed","lace","melody","monkey","nation","object","obviously","rainbow","salt","scratch","shown","shy","stage","stun","third","tickle","useless","weakness","worship","worthless","afternoon","beard","boyfriend","bubble","busy","certain","chin","concrete","desk","diamond","doom","drawn","due","felicity","freeze","frost","garden","glide","harmony","hopefully","hunt","jealous","lightning","mama","mercy","peel","physical","position","pulse","punch","quit","rant","respond","salty","sane","satisfy","savior","sheep","slept","social","sport","tuck","utter","valley","wolf","aim","alas","alter","arrow","awaken","beaten","belief","brand","ceiling","cheese","clue","confidence","connection","daily","disguise","eager","erase","essence","everytime","expression","fan","flag","flirt","foul","fur","giggle","glorious","ignorance","law","lifeless","measure","mighty","muse","north","opposite","paradise","patience","patient","pencil","petal","plate","ponder","possibly","practice","slice","spell","stock","strife","strip","suffocate","suit","tender","tool","trade","velvet","verse","waist","witch","aunt","bench","bold","cap","certainly","click","companion","creator","dart","delicate","determine","dish","dragon","drama","drum","dude","everybody","feast","forehead","former","fright","fully","gas","hook","hurl","invite","juice","manage","moral","possess","raw","rebel","royal","scale","scary","several","slight","stubborn","swell","talent","tea","terrible","thread","torment","trickle","usually","vast","violence","weave","acid","agony","ashamed","awe","belly","blend","blush","character","cheat","common","company","coward","creak","danger","deadly","defense","define","depend","desperate","destination","dew","duck","dusty","embarrass","engine","example","explore","foe","freely","frustrate","generation","glove","guilty","health","hurry","idiot","impossible","inhale","jaw","kingdom","mention","mist","moan","mumble","mutter","observe","ode","pathetic","pattern","pie","prefer","puff","rape","rare","revenge","rude","scrape","spiral","squeeze","strain","sunset","suspend","sympathy","thigh","throne","total","unseen","weapon","weary"];
const OLD_EL_MAP = new Map(OLD_EL_WORDS.map((w, i) => [w, i]));
function oldElDecode(words){
  const n = OLD_EL_WORDS.length, m = (a) => ((a % n) + n) % n; let out = "";
  for(let i = 0; i + 3 <= words.length; i += 3){
    const w1 = OLD_EL_MAP.get(words[i]), w2 = OLD_EL_MAP.get(words[i + 1]), w3 = OLD_EL_MAP.get(words[i + 2]);
    out += (w1 + n * m(w2 - w1) + n * n * m(w3 - w2)).toString(16).padStart(8, "0");
  }
  return out;
}
function oldElSeed(text){
  const words = electrumNorm(text).split(" ").filter(Boolean);
  if(!(words.length === 12 || words.length === 24) || !words.every(w => OLD_EL_MAP.has(w))) return null;
  return {words, hex: oldElDecode(words)};
}
const OLD_EL_K = (() => { const k = [], p = []; for(let c = 2; p.length < 64; c++) if(p.every(q => c % q)) p.push(c);
  for(const q of p) k.push((Math.cbrt(q) % 1) * 4294967296 | 0); return Int32Array.from(k); })();
const OLD_EL_W = new Int32Array(64);
function oldElSha256(m){
  const L = m.length, nb = ((L + 9 + 63) >> 6) << 6, b = new Uint8Array(nb); b.set(m); b[L] = 0x80;
  const bits = L * 8; b[nb - 4] = bits >>> 24; b[nb - 3] = (bits >>> 16) & 255; b[nb - 2] = (bits >>> 8) & 255; b[nb - 1] = bits & 255;
  const K = OLD_EL_K, w = OLD_EL_W;
  let h0 = 0x6a09e667, h1 = 0xbb67ae85 | 0, h2 = 0x3c6ef372, h3 = 0xa54ff53a | 0, h4 = 0x510e527f, h5 = 0x9b05688c | 0, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
  for(let o = 0; o < nb; o += 64){
    for(let i = 0; i < 16; i++){ const q = o + 4 * i; w[i] = (b[q] << 24) | (b[q + 1] << 16) | (b[q + 2] << 8) | b[q + 3]; }
    for(let i = 16; i < 64; i++){ const a = w[i - 15], c = w[i - 2];
      w[i] = (w[i - 16] + (((a >>> 7) | (a << 25)) ^ ((a >>> 18) | (a << 14)) ^ (a >>> 3)) + w[i - 7] + (((c >>> 17) | (c << 15)) ^ ((c >>> 19) | (c << 13)) ^ (c >>> 10))) | 0; }
    let A = h0, B = h1, C = h2, D = h3, E = h4, F = h5, G = h6, H = h7;
    for(let i = 0; i < 64; i++){
      const t1 = (H + (((E >>> 6) | (E << 26)) ^ ((E >>> 11) | (E << 21)) ^ ((E >>> 25) | (E << 7))) + ((E & F) ^ (~E & G)) + K[i] + w[i]) | 0;
      const t2 = ((((A >>> 2) | (A << 30)) ^ ((A >>> 13) | (A << 19)) ^ ((A >>> 22) | (A << 10))) + ((A & B) ^ (A & C) ^ (B & C))) | 0;
      H = G; G = F; F = E; E = (D + t1) | 0; D = C; C = B; B = A; A = (t1 + t2) | 0;
    }
    h0 = (h0 + A) | 0; h1 = (h1 + B) | 0; h2 = (h2 + C) | 0; h3 = (h3 + D) | 0; h4 = (h4 + E) | 0; h5 = (h5 + F) | 0; h6 = (h6 + G) | 0; h7 = (h7 + H) | 0;
  }
  const out = new Uint8Array(32), hs = [h0, h1, h2, h3, h4, h5, h6, h7];
  for(let i = 0; i < 8; i++){ out[4 * i] = hs[i] >>> 24; out[4 * i + 1] = (hs[i] >>> 16) & 255; out[4 * i + 2] = (hs[i] >>> 8) & 255; out[4 * i + 3] = hs[i] & 255; }
  return out;
}
const OLD_EL_HOWTO = "Open it in Electrum: File, New/Restore, type a wallet name, Next, Standard wallet, I already have a seed, and type the words. Electrum shows “Seed Type: old” under them and opens the old wallet.";
function oldElResult(oe){
  return {ok:false, oldElectrum:oe, msg:"Old Electrum seed: these " + oe.words.length + " words are from the old word list of Electrum before version 2.0, not a BIP39 phrase. Most other wallet apps cannot open it. " + OLD_EL_HOWTO + " VERIFY shows its master public key and its first addresses."};
}
const EXPLAIN_NET = {bc: "Bitcoin mainnet (real money)", tb: "testnet or signet (practice coins, worthless)", bcrt: "regtest (a private test network, no real coins)"};
const EXPLAIN_B58T = "testnet, signet or regtest (no real coins; these three write m..., n... and 2... addresses the same way)";
async function explainAddress(text){
  let t = String(text || "").trim(); const terms = [];
  if(!t) return null;
  let uri = "";
  if(/^bitcoin:/i.test(t)){ uri = " It was written as a payment request (BIP21), a bitcoin: link that can also hold an amount and a label."; t = t.slice(8).split("?")[0]; terms.push("BIP21"); }
  t = t.replace(/\s+/g, "");
  const pub = " What someone can do with it: send bitcoin to it, and look up its payments on a block explorer. Nobody can spend from it with the address alone.";
  // Secrets pasted by mistake come first: seed words (also numbered, or as 4-letter forms), SeedQR digits, raw hex.
  const toks = String(text).toLowerCase().split(/[^a-z]+/).filter(Boolean), known = toks.filter(x => Object.prototype.hasOwnProperty.call(WORD_MAP, x) || wordFromPrefix(x) || OLD_EL_MAP.has(x)).length;   // v2.10.0: old Electrum words too
  if(known >= 6 && known >= toks.length * 0.8) return {level: "bad", text: "These look like SEED WORDS, not an address. Anyone who has them controls the funds: never paste them into a website or a connected device.", terms: ["Seed (seed phrase, recovery phrase, mnemonic)"]};
  if(/^\d{48,96}$/.test(t) && t.length % 12 === 0) return {level: "bad", text: "These look like SeedQR digits, not an address: they are seed words written as numbers. Anyone who has them controls the funds.", terms: ["SeedQR"]};
  if(/^[0-9a-f]+$/i.test(t) && [32, 40, 48, 56, 64, 128].includes(t.length)) return {level: "bad", text: "This is " + t.length + " hex characters, not an address. It could be a SECRET (" + (t.length === 128 ? "a BIP39 seed, which opens the whole wallet" : "a private key, or seed words written as hex, such as a CompactSeedQR") + ") or something public such as a transaction ID or a hash. Treat it as secret unless you know what it is.", terms: ["Hex", "Private key", "CompactSeedQR"]};
  if(/^lnurl1/i.test(t)) return {level: "warn", text: "This is an LNURL, a Lightning link, not an on-chain address. Open it in a Lightning wallet.", terms: ["LNURL"]};
  if(/^ln(bc|tb|tbs|bcrt)[0-9]/i.test(t)) return {level: "warn", text: "This is a Lightning invoice (BOLT11), not an on-chain address. Pay it from a Lightning wallet.", terms: ["Lightning invoice (BOLT11)"]};
  if(/^[a-z]{2,12}\(/i.test(t)){
    if(await descriptorHasSecret(t)) return {level: "bad", text: "This descriptor holds a PRIVATE key (an xprv or a WIF key), so it is SECRET: anyone who sees it can spend from the wallet it describes. Never share it or paste it into a website; a watch-only app needs the public descriptor instead.", terms: ["Descriptor", "Extended private key (xprv)", "Private key"]};
    return {level: "warn", text: "This is a descriptor, not an address: it describes a whole wallet. Paste it in \u201cOr open a watch-only wallet\u201d above to see its addresses.", terms: ["Descriptor"]};
  }
  const low = t.toLowerCase(), sep = low.lastIndexOf("1"), hrp = sep > 0 ? low.slice(0, sep) : "";
  if(/^t?sp$/.test(hrp)){
    const data = Array.from(low.slice(sep + 1, -6), ch => B32.indexOf(ch));
    const good = t === low || t === t.toUpperCase() ? data.length > 1 && !data.some(v => v < 0) && bech32mText(hrp, data) === low : false;
    if(!good) return {level: "bad", text: "Not a valid Silent Payment address: the checksum does not match, so at least one character is wrong. Do not send to it.", terms: ["Checksum", "BIP352 (Silent Payments)"]};
    // BIP352: version 0 carries exactly two 33-byte keys (66 bytes); versions 1 to 30 at least that; 31 is reserved.
    const v = data[0], bytes = Math.floor((data.length - 1) * 5 / 8);
    if(v === 31 || (v === 0 ? bytes !== 66 : bytes < 66)) return {level: "bad", text: "Not a valid Silent Payment address: the checksum is right, but its contents are not two keys as BIP352 requires. Do not send to it.", terms: ["BIP352 (Silent Payments)"]};
    return {level: "ok", text: "Silent Payment address (BIP352) on " + (hrp === "sp" ? EXPLAIN_NET.bc : EXPLAIN_NET.tb) + ". It can be reused: each payment goes to a new, unlinkable address that only the receiver can find. Few wallets can send to it yet. What someone can do with it: send bitcoin to it. Its payments cannot be looked up from the address, and nobody can spend with it." + uri, terms: terms.concat(["BIP352 (Silent Payments)", "Address"])};
  }
  if(Object.prototype.hasOwnProperty.call(EXPLAIN_NET, hrp)){
    const net = EXPLAIN_NET[hrp], d = segwitDecode(t);
    if(!d) return {level: "bad", text: "Not a valid address: " + (t !== low && t !== t.toUpperCase() ? "it mixes capital and small letters, which bc1 addresses never do" : "the checksum does not match, so at least one character is wrong or missing") + ". Do not send to it.", terms: ["Checksum", "Bech32 and bech32m"]};
    if(d.version === 0 && d.prog.length === 20) return {level: "ok", text: "Native SegWit address (P2WPKH) on " + net + ". The checksum is valid, so there is no typo. It stands for one public key." + pub + uri, terms: terms.concat(["Native SegWit", "P2WPKH"])};
    if(d.version === 0 && d.prog.length === 32) return {level: "ok", text: "SegWit script address (P2WSH) on " + net + ". The checksum is valid. It stands for a script, most often a multisig wallet." + pub + uri, terms: terms.concat(["P2WSH", "Multisig"])};
    if(d.version === 1 && d.prog.length === 32) return {level: "ok", text: "Taproot address (P2TR) on " + net + ". The checksum is valid. It stands for one key, or a key with hidden spending scripts." + pub + uri, terms: terms.concat(["Taproot", "P2TR"])};
    return {level: "bad", text: "A SegWit version " + d.version + " address with a " + d.prog.length + "-byte program on " + net + ". No wallet uses this kind of address today: do not send to it.", terms: ["SegWit"]};
  }
  if(/^S[1-9A-HJ-NP-Za-km-z]{21,29}$/.test(t) && (await sha256bytes(new TextEncoder().encode(t + "?")))[0] === 0) return {level: "bad", text: "This is a mini PRIVATE KEY, not an address. Anyone who sees it can spend the bitcoin it holds.", terms: ["Mini private key", "Private key"]};
  if(/^[1-9A-HJ-NP-Za-km-z]{25,112}$/.test(t)){
    let raw; try { raw = await base58decode(t); } catch(e) { return {level: "bad", text: "Not a valid address: the checksum does not match, so at least one character is wrong or missing. Do not send to it.", terms: ["Checksum", "Base58 and Base58Check"]}; }
    const v = raw[0];
    if(raw.length === 21 && (v === 0 || v === 0x6f)) return {level: "ok", text: "Legacy address (P2PKH) on " + (v ? EXPLAIN_B58T : EXPLAIN_NET.bc) + ". The checksum is valid. It stands for one public key; sending to it costs more in fees than SegWit." + pub + uri, terms: terms.concat(["Legacy address", "P2PKH"])};
    if(raw.length === 21 && (v === 5 || v === 0xc4)) return {level: "ok", text: "Script address (P2SH) on " + (v === 5 ? EXPLAIN_NET.bc : EXPLAIN_B58T) + ". The checksum is valid. It is most often nested SegWit (one key) or an older multisig; the address alone does not say which." + pub + uri, terms: terms.concat(["P2SH", "Nested SegWit"])};
    if(raw.length === 39 && v === 1 && (raw[1] === 0x42 || raw[1] === 0x43)) return {level: "bad", text: "This is a password-protected PRIVATE KEY (BIP38), not an address. With its password, anyone can spend the bitcoin it holds.", terms: ["Private key"]};
    if((raw.length === 33 || (raw.length === 34 && raw[33] === 1)) && (v === 0x80 || v === 0xef)) return {level: "bad", text: "This is a PRIVATE KEY (WIF), not an address. Anyone who sees it can spend the bitcoin it holds. Never share it or paste it into a website.", terms: ["WIF (Wallet Import Format)", "Private key"]};
    if(raw.length === 78){
      const ver = hex(raw.slice(0, 4));
      if(EXT_PRIVATE.includes(ver)) return {level: "bad", text: "This is an extended PRIVATE key (xprv and similar), not an address. Anyone who sees it can spend from every address of that wallet or account.", terms: ["Extended private key (xprv)"]};
      if(EXT_VERSIONS[ver]) return {level: "warn", text: "This is an extended PUBLIC key (xpub, zpub and similar), not an address. Anyone who has it can see every address and the balance of that account, but cannot spend. Paste it in \u201cOr open a watch-only wallet\u201d above to see its addresses.", terms: ["Extended public key (xpub, ypub, zpub)", "Watch-only wallet"]};
    }
    return {level: "bad", text: "Valid Base58 text, but not a Bitcoin address DRYRUN recognizes (it may belong to another coin). Do not send bitcoin to it.", terms: ["Base58 and Base58Check", "Altcoin"]};
  }
  return {level: "bad", text: "Not a Bitcoin address DRYRUN recognizes. Bitcoin addresses start with bc1, 1 or 3 (testnet: tb1, m, n or 2; regtest: bcrt1, m, n or 2).", terms: ["Address"]};
}
async function descriptorHasSecret(t){
  for(const k of t.match(/[1-9A-HJ-NP-Za-km-z]{50,112}/g) || []){
    let raw; try { raw = await base58decode(k); } catch(e) { continue; }
    if(raw.length === 78 && EXT_PRIVATE.includes(hex(raw.slice(0, 4)))) return true;
    if((raw.length === 33 || (raw.length === 34 && raw[33] === 1)) && (raw[0] === 0x80 || raw[0] === 0xef)) return true;
  }
  return false;
}
function wordFromPrefix(t){
  if(!/^[a-z]{4,8}$/.test(t)) return null;
  return WORDLIST.find(w => w.startsWith(t)) || null;   // 4 letters already pick at most one word
}
function wordDistance(a, b, max){
  if(Math.abs(a.length - b.length) > max) return max + 1;
  const d = Array.from({length: a.length + 1}, (_, i) => [i]);
  for(let j = 1; j <= b.length; j++) d[0][j] = j;
  for(let i = 1; i <= a.length; i++){
    let low = Infinity;
    for(let j = 1; j <= b.length; j++){
      const c = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
      if(i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, d[i - 2][j - 2] + 1);
      d[i][j] = v; if(v < low) low = v;
    }
    if(low > max) return max + 1;
  }
  return d[a.length][b.length];
}
function closestWords(t, n){
  const found = [];
  for(const w of WORDLIST){ const k = wordDistance(t, w, 2); if(k <= 2) found.push([k, w]); }
  found.sort((x, y) => x[0] - y[0] || (x[1] < y[1] ? -1 : 1));
  if(found.length && found[0][0] === 1) return found.filter(f => f[0] === 1).slice(0, n || 3).map(f => f[1]);
  return found.slice(0, n || 3).map(f => f[1]);
}
function unknownWordsMsg(words, bad){
  const one = (i) => { const c = closestWords(words[i], 3); return words[i] + " (word " + (i + 1) + ")" + (c.length ? ": closest BIP39 word" + (c.length > 1 ? "s " : " ") + c.join(", ") : ": no BIP39 word is close"); };
  return (bad.length === 1 ? "Unknown word: " : "Unknown words: ") + bad.slice(0, 4).map(one).join("; ") + (bad.length > 4 ? "; and " + (bad.length - 4) + " more" : "") + ". Check " + (bad.length === 1 ? "it" : "them") + " on your backup.";
}
const WORDS_INVISIBLE = /[\u00ad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180f\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\u3164\ufe00-\ufe0f\ufeff\uffa0]/g;
function wordsClean(text){
  let t = String(text == null ? "" : text); const notes = [];
  const inv = (t.match(WORDS_INVISIBLE) || []).length;
  if(inv){ t = t.replace(WORDS_INVISIBLE, ""); notes.push(inv + " invisible character" + (inv === 1 ? "" : "s")); }
  const nk = t.normalize("NFKC");   // full-width letters (ａｂｏｕｔ) and other compatibility forms, as BIP39's own NFKD reads them
  if(nk.replace(/\s/g, " ") !== t.replace(/\s/g, " ")){ notes.push("full-width letters"); } t = nk;
  if(!/[a-z]/i.test(t)) return {text: t, notes};
  const sep = (t.match(/[,;]/g) || []).length;
  if(sep){ t = t.replace(/[,;]/g, " "); notes.push(sep === 1 ? "a comma" : "commas"); }
  // v2.18.0 review A1/A5: a number is numbering only when it stands alone ("12", "12.", "#12") or a mark ends it ("12.abandon",
  // "3)able"). Digits joined straight onto letters ("0pen", "8rain") are kept as typed, so a digit written for a letter is an
  // unknown word with its closest words, never a different BIP39 word. A number followed by another numbered item, or by nothing
  // (a list cut off after "13."), stays as a missing word "?" at its place and is named in missing, so a dropped word is said.
  // v2.18.1: a lone count line before a numbered list ("12", "12 words" or "12 words:" on a line of its own, then "1. abandon ...
  // 12. about") says how many words follow. It is taken out only when the list starts at number 1 and has exactly that many
  // numbers, so it is never read as a number with no word after it. Any other count is read as before: "12" before only 11
  // numbered words is still a missing word.
  // v2.18.1 review F7: also "12:", Windows line ends, and the count on the same line as the list when "words" or a colon marks it
  // ("12 words: 1. abandon ...", "12: 1. abandon ..."); a bare "12 1. abandon" on one line is not taken for a count.
  // v2.18.1 review round 4 (F2, F3): every list number is read with the word it sits on. parse gives the words, and for each number
  // its place in them: on is [number, place] (place counts from 0; a number with nothing after it sits on its own ?).
  const parse = (src) => {
    let num = 0; const missing = [], toks = [], seq = [], on = []; let first = null, firstOn = 0;
    src.forEach((w, i) => {
      const alone = /^#?(\d{1,2})[.):\-]?$/.exec(w), joined = /^#?(\d{1,2})[.):\-](\D+)$/.exec(w), lead = /^#?(\d{1,2})[.):\-]\S/.exec(w);
      if(alone){ num++; const n = +alone[1], nx = src[i + 1];
        if(i){ seq.push(n); on.push([n, toks.length]); } else { first = n; firstOn = toks.length; }
        if(nx === undefined || /^#?\d{1,2}(?:[.):\-]?$|[.):\-]\D)/.test(nx)){ missing.push(n); toks.push("?"); } return; }
      if(joined){ num++; seq.push(+joined[1]); on.push([+joined[1], toks.length]); toks.push(joined[2]); return; }
      if(lead){ seq.push(+lead[1]); on.push([+lead[1], toks.length]); }
      toks.push(w);
    });
    // a lone first number is a heading only before a list from 1 (or 0) that it does not start ("12", then 1. to 12.); alone before words with no other number (a count such
    // as "12 abandon ability ..."), it is read as before and checked against no place (lone)
    const head = first !== null && seq.length > 0 && seq[0] <= 1 && first > seq[0], lone = first !== null && !seq.length;
    if(first !== null && !head){ seq.unshift(first); on.unshift([first, firstOn]); }
    // full: every word has its own number, so a number left out is a word left out (and gets a ? at its place)
    const at = new Set(on.map((x) => x[1])), full = toks.every((x, k) => at.has(k));
    return {num, missing, toks, seq, on, lone, full};
  };
  let absent = null, said = 0, want = 0;
  const cnt = /^\s*(\d{1,2})(?:[ \t]+words:?|:)?[ \t]*\r?\n/i.exec(t) || /^\s*(\d{1,2})(?:[ \t]+words:?|:)[ \t]+(?=\S)/i.exec(t);
  if(cnt){ const rest = t.slice(cnt[0].length), rs = rest.split(/\s+/).filter(Boolean), numOf = (w) => { const m = /^#?(\d{1,2})[.):\-]?$/.exec(w) || /^#?(\d{1,2})[.):\-]\D+$/.exec(w); return m ? +m[1] : null; };
    if(rs.length && numOf(rs[0]) === 1 && rs.filter(w => numOf(w) !== null).length === +cnt[1]){ t = rest; notes.push("the word count line"); }
    // v2.18.1 review N7: a count line before a list numbered from 1 in order, up to the count, with numbers left out ("24", then
    // 1. to 23. with 5. missing): the numbers left out are named (and Reforge gets a ? at their places), never the count itself.
    // The list then never reads as valid, so the strict rule above still decides when a count line simply goes.
    // v2.18.1 review round 4 (F2): that is so only when every word has its own number. Rows labelled with the number of their
    // first word ("12 words:", then "1. a b c d", "5. e f g h", "9. i j k l") leave out no word: the count line goes, and the
    // count is checked against the words (want).
    else if(rs.length && numOf(rs[0]) === 1){ const ns = rs.map(numOf).filter(n => n !== null), N = +cnt[1];
      if(ns.length < N && ns.every((n, k) => n <= N && (k === 0 || n > ns[k - 1]))){
        if(parse(rs).full){ absent = []; for(let n = 1; n <= N; n++) if(!ns.includes(n)) absent.push(n); } else want = N;
        t = rest; notes.push("the word count line"); said = N; } } }
  // v2.18.1 review M1: seq is every list number in text order (also one in front of a typo it does not take off, "5.8rain"), for
  // the order check below; a lone number first (a heading such as "12 words") is left out of it.
  const P = parse(t.split(/\s+/).filter(Boolean)), toks = P.toks, seq = P.seq, missing = P.missing;
  // v2.18.1 review M1: list numbers (two or more) must run 1 to N (or 0 to N - 1) in text order. Words copied row by row from a
  // sheet with two columns ("1. bulk  7. lucky", "2. romance  8. vanish", as PRINT SEED prints them) are in another order, and
  // when that order has a valid checksum it is a different seed. They are never put in order here: order names the first number
  // that comes too early, and the reader refuses.
  // v2.18.1 review round 4 (F2, F3): and each number sits on the word at its place: the word after number n is word n (word n + 1
  // in a list numbered from 0). Words with no number between numbered ones are fine (rows labelled 1. 5. 9.); "1. w1  w7",
  // "2. w2  w8" (a two-column sheet whose right column lost its numbers) is refused, as number 2 is on word 3. Only in a list
  // where every word has its own number is a number left out a word left out: a ? goes at its place (gaps), as with a count line.
  let order = null, gaps = [];
  if(seq.length > 1)
    for(let k = 1; k < seq.length; k++) if(seq[k] <= seq[k - 1]){ order = seq[k] === seq[k - 1] ? "The list numbers are out of order (number " + seq[k] + " comes twice): type the words in number order, each number once." : "The list numbers are out of order (" + seq[k - 1] + " comes before " + seq[k] + "): type the words in number order. (A list copied line by line from a sheet with two columns, such as “1. word  7. word”, reads in this order. Nothing was put back in order for you.)"; break; }
  if(!order && !absent && seq.length && !P.lone){ const s0 = seq[0] === 0 ? 0 : 1;
    if(P.full){ if(seq.length > 1){ const have = new Set(seq); for(let n = s0; n < seq[seq.length - 1]; n++) if(!have.has(n)) gaps.push(n);
      for(const n of gaps) toks.splice(n - s0, 0, "?"); } }   // a ? where each number was left out
    else { const off = P.on.find(([n, k]) => n - s0 !== k);
      if(off) order = off[0] - s0 < off[1]
        ? "The list numbers do not match the words: number " + off[0] + " is on word " + (off[1] + 1) + ": type the words in number order, each one after its own number. (A list copied line by line from a sheet with two columns, such as “1. word  7. word” or “1. word  word”, reads in another order, and so do an extra word and a line number with more than one word after it. Nothing was put back in order for you.)"
        : "A word is missing, or the words are out of order: number " + off[0] + " is on word " + (off[1] + 1) + ". Copy the whole list, or type the words in number order, each one after its own number. (Nothing was put back in order for you.)"; } }
  if(!order && want && toks.length !== want) order = "The list says " + want + " words, but it has " + toks.length + ". Check for a missing or extra word.";
  if(absent) for(const n of absent) toks.splice(n - 1, 0, "?");   // v2.18.1 review N7: a ? where each number was left out
  if(P.num){ notes.push("the numbering"); t = toks.join(" "); }
  return {text: t, notes, missing, absent, said, order, gaps, top: seq.length ? seq[seq.length - 1] : 0, nums: seq.length};
}
function wordsListMsg(cl){
  const and = (ns) => ns.length === 1 ? ns[0] : ns.slice(0, -1).join(", ") + " and " + ns[ns.length - 1];
  if(cl.absent && cl.absent.length){   // v2.18.1 review N7: a count line, and numbers left out of the list
    const ns = cl.absent.map(String);
    return "A word is missing: the list says " + cl.said + " words, but number" + (ns.length === 1 ? " " : "s ") + and(ns) + (ns.length === 1 ? " is" : " are") + " not in it. Copy the whole list, or type the missing word" + (ns.length === 1 ? "" : "s") + ".";
  }
  if(cl.missing && cl.missing.length){   // v2.18.0 review A5: a numbered list with no word after a number is cut off or missing a word
    const ns = cl.missing.map(n => "number " + n);
    return "A word is missing: the list has " + and(ns) + " with no word after it. Copy the whole list, or type the missing word" + (ns.length === 1 ? "" : "s") + ".";
  }
  if(cl.order) return cl.order;   // v2.18.1 review M1: list numbers out of order are never read as a phrase
  if(cl.gaps && cl.gaps.length){   // v2.18.1 review M1: numbers left out of a list with no count line
    const ns = cl.gaps.map(String);
    return "A word is missing: the list goes up to " + cl.top + ", but number" + (ns.length === 1 ? " " : "s ") + and(ns) + (ns.length === 1 ? " is" : " are") + " not in it. Copy the whole list, or type the missing word" + (ns.length === 1 ? "" : "s") + ".";
  }
  return "";
}
function wordsOrder(text){ return wordsListMsg(wordsClean(text)); }
function wordsCleanNote(notes){ return notes.length ? notes.join(", ").replace(/, ([^,]*)$/, " and $1") : ""; }
function wordsRead(text){
  text = String(text == null ? "" : text).split(/(\s+)/).map((x) => /^[^\p{L}\p{N}?\s]+$/u.test(x.normalize("NFKC")) ? "" : x).join("");
  const cl = wordsClean(text), msg = wordsListMsg(cl), toks = cl.text.toLowerCase().split(/\s+/).filter(Boolean), words = [];
  for(const [i, t] of toks.entries()) if(/\p{N}/u.test(t)) return {msg: "Word " + (i + 1) + " (“" + t + "”) has a number in it that this box cannot read, so nothing was read. Type the words only, or number them as 1. word (also 1) word, #1 word or 1: word), each one after its own number.", words: [], count: toks.length};   // a number first: it is never dropped or read as a place
  if(msg) return {msg, words, count: toks.length};
  for(const [i, t] of toks.entries()){
    if(/[?*]/.test(t)) return {msg: "Word " + (i + 1) + " (\u201c" + t + "\u201d) cannot be read, so nothing was read. This box needs every word: Reforge (in EXTRA TOOLS) finds a missing word.", words: [], count: toks.length};
    const ps = t.split(/[^a-z]+/).filter(Boolean);
    if(cl.nums && ps.length !== 1) return {msg: "Word " + (i + 1) + " (“" + t + "”) is not one word, so the list numbers cannot be checked against it. Type each word in letters, with a space between words.", words: [], count: toks.length};
    words.push(...ps);
  }
  return {msg: "", words, count: words.length};
}
async function checkPhrase(phrase){
  const cl = wordsClean(phrase);
  { const lm = wordsListMsg(cl); if(lm) return {ok:false, msg:lm}; }
  const r = await checkPhraseRead(cl.text);
  if(!cl.notes.length) return r;
  const say = wordsCleanNote(cl.notes);
  r.msg = /\.$/.test(r.msg) ? r.msg + " (Cleaned up before reading: " + say + ".)" : r.msg + " (cleaned up before reading: " + say + ")";
  if(r.ok) r.expanded = true;   // VERIFY puts the clean words back in the box
  return r;
}
async function checkPhraseRead(phrase){
  const pc = await phraseFromCode(phrase);
  if(pc && pc.error) return {ok:false, msg:pc.error};
  if(pc) phrase = pc.words;
  const oe = pc ? null : oldElSeed(phrase);   // v2.10.0: old Electrum words (Electrum checks for them first, as calc_seed_type does)
  const words = phrase.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if(![12,15,18,21,24].includes(words.length)) return {ok:false, msg:(words.length === 1 && /^[0-9a-f]{20,}$/i.test(words[0]) ? "These " + words[0].length + " characters are not the digits of a SeedQR (48 or 96 digits) or the hex of a CompactSeedQR (32 or 64 hex digits)." : words.length ? "A seed phrase has 12, 15, 18, 21 or 24 words; this has " + words.length + "." : "No words are typed.") + await electrumNote(phrase)};   // v2.16.1 review: plain words, not "Invalid length"
  const bad = [], readAs = []; let read = 0;
  words.forEach((w, i) => { if(Object.prototype.hasOwnProperty.call(WORD_MAP, w)) return; const f = wordFromPrefix(w); if(f){ readAs.push("word " + (i + 1) + " '" + w + "' as '" + f + "'"); words[i] = f; read++; } else bad.push(i); });
  if(bad.length) return oe ? oldElResult(oe) : {ok:false, msg:unknownWordsMsg(words, bad)};
  const bits = words.map(w=>WORD_MAP[w].toString(2).padStart(11,"0")).join("");
  const cLen = Math.floor((words.length*11)/32);
  const eBits = bits.length - cLen;
  const eBytes = new Uint8Array(eBits/8);
  for(let i=0;i<eBytes.length;i++) eBytes[i]=parseInt(bits.slice(i*8,(i+1)*8),2);
  const h = new Uint8Array(await crypto.subtle.digest("SHA-256", eBytes));
  if(oe && bits.slice(eBits)!==bytesToBits(h).slice(0,cLen)) return oldElResult(oe);   // v2.10.0
  if(bits.slice(eBits)!==bytesToBits(h).slice(0,cLen)){ const en = await electrumNote(phrase); return {ok:false, msg:"Checksum failed" + (en || ". Every word is a BIP39 word, so one is probably wrong, missing or out of order: Reforge in EXTRA TOOLS can search for it." + (read ? " Some were read from their first letters (" + readAs.slice(0, 3).join(", ") + (read > 3 ? " and " + (read - 3) + " more" : "") + "); check those first." : ""))}; }
  if(oe && read) return oldElResult(oe);   // valid BIP39 only with words read from their first letters: Electrum reads the old words as typed
  return {ok:true, msg:"Valid "+words.length+"-word BIP39 phrase"+(pc ? " (read from "+pc.kind+")" : "")+(read ? " (" + read + " word" + (read > 1 ? "s" : "") + " read from the first letters)" : "") + (oe ? ", and also an old Electrum seed (see below)" : ""), mnemonic:words.join(" "), fromCode:!!pc, expanded: read > 0, oldElectrum: oe};
}
const KNOWN_PHRASES = [
  // The official BIP39 test vectors, English, all 24: trezor/python-mnemonic vectors.json at commit b57a5ad77a981e743f4167ab2f7927a55c1e82a8
  // (file SHA-256 fa3b937b7cff9c9b8ecd3aa011faeb8d6dd67993174b72326e83f4de8fdb30f8). They include "abandon x11 about" (00 x16), "abandon
  // x23 art", "zoo x11 wrong", "zoo x23 vote", "legal winner thank year ... yellow" (7f x16) and "letter advice cage ... above" (80 x16).
  // The BIP44, BIP49, BIP84 and BIP86 test vectors use "abandon x11 about" (BIP44 itself publishes no phrase).
  ["one of the official BIP39 test phrases", "00000000000000000000000000000000 7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f 80808080808080808080808080808080 ffffffffffffffffffffffffffffffff 000000000000000000000000000000000000000000000000 7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f 808080808080808080808080808080808080808080808080 ffffffffffffffffffffffffffffffffffffffffffffffff 0000000000000000000000000000000000000000000000000000000000000000 7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f 8080808080808080808080808080808080808080808080808080808080808080 ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff 9e885d952ad362caeb4efe34a8e91bd2 6610b25967cdcca9d59875f5cb50b0ea75433311869e930b 68a79eaca2324873eacc50cb9c6eca8cc68ea5d936f98787c60c7ebc74e6ce7c c0ba5a8e914111210f2bd131f3d5e08d 6d9be1ee6ebd27a258115aad99b7317b9c8d28b6d76431c3 9f6a2878b2520799a44ef18bc7df394e7061a224d2c33cd015b157d746869863 23db8160a31d3e0dca3688ed941adbf3 8197a4a47f0425faeaa69deebc05ca29c0a5b5cc76ceacc0 066dca1a2bb7e8a1db2832148ce9933eea0f3ac9548d793112d9a95c9407efad f30f8c1da665478f49b001d94c5fc452 c10ec20dc3cd9f652c7fac2f1230f7a3c828389a14392f05 f585c11aec520db57dd353c69554b21a89b20fb0650966fa0a9d6f74fd989d8f"],
  // The BIP85 test vectors (bitcoin/bips bip-0085.mediawiki, BIP39 application): the child phrases of 12, 18 and 24 words. The self-test checks them.
  ["a published BIP85 test phrase", "6250b68daf746d12a24d58b4787a714b 938033ed8b12698449d4bbca3c853c66b293ea1b1ce9d9dc ae131e2312cdc61331542efe0d1077bac5ea803adf24b313a4f0e48e9c51f37f"],
  // SeedSigner's published dice examples (docs/dice_verification.md: 50 rolls for 12 words, 99 for 24), as the self-test reproduces them.
  // Coldcard hashes the rolls the same way, so it makes these words from these rolls too.
  ["the dice example published by SeedSigner (Coldcard makes the same words from those rolls)", "6cb09af855050dcde6fe2adc3181c250 51531761ec7a738946e0b9f46bb11320a695495430e345c14f01ad8b3b898a6d"],
  // This page's own examples: the self-test's 128 and 256 coin flips, its Keystone 50 and 100 rolls (6 as 0), and its cards A♠ 2♣ T♦.
  ["an example in this page's self-test", "e899baabb8a543773ea3ba35196766d4 d9cf6a92fc19289e40cb758b0884e5f6e5cc022a2359cdec5088229930990e2a e29cc0185e9a19f26bdb3d9bde105dc3 0c1df8b60efd0df2e61edabc2ea1d8caea6de5dc8f0ab30725abeb9684d16013 487361395544bff8135d18c2d3370570"],
  // The dice test card (DC_CARD_ROLLS): SeedSigner and Coldcard rules with 50 and 99 rolls, Keystone rules with 50 and 100 rolls.
  ["made from the rolls on this page's dice test card", "d62386116ff35b8c95be90eea4afa1bf 3b3bc470f9adff233d3230ec9d2cbd25d2b3bafdd095e1d2a6617f41bd7cd2d8 a20a0f1ee657d8692a174c16df762ead 3047e7d55e459c4543580cbd8cae6fa07c3c12eb25e6a9243f8e24dbbd535973"],
  // v2.14.0: the Damascus method's three worked examples (docs/damascus-examples.md; example 2 is also an official BIP39 vector,
  // so it is named as one above), in order. tests/vfmethod.test.mjs works them out again from their dice and cards.
  ["a public worked example of the Damascus method", "7a25ddb42ac2d7456a60f61f0b00cc6e 7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f 2154c988f62cf326647ea796c044aff71838f421cc02e940fd854255296b2018"],
  // v2.14.0: the Damascus practice sheets 1 to 100, 12 words and then 24 words, in order, made by the published rule (the rule is in
  // docs/damascus-method.md and above dmPracticeDraws). tests/vfmethod.test.mjs makes every one again from the rule with node:crypto.
  ["a Damascus practice sheet (made by a published rule, so anyone can make it again)",
    "dc464490033b84bf02bc7fce1acdd70f 7e50fd18c3c0afcc22c2b8c81d61c7c7 8bf64ad20cf73cade4ee8a51954a9020 116e66df8f500627808ba9729fd68e9f ef9fb3db69daecdf7958bacc9c1b01b6 55c78617c9e6c63e572e8dfd276f6d21 " +
    "0a79338e62d8fa7d24b8ae4677e6da24 73d5465b0a87563972dd8909f47ec296 9ce382d7314076ebe1984e06e0e67900 c2b47870c57d395c449659a528a16302 90c627ab4720cbaf96146ac54532d2d5 895af152da82ab38cad88c2bdaf9c320 " +
    "7a483d6c370642990fd5d1c485071d2b d3ace6517889e5e26761c9c984f35c70 e3ee8c7e18301b4ef47830be6a9d4f60 b385b414f9401fa0ea130604df1c561e 86b1f38c52109bb459ede46fb5b16120 e19bed94f0342812f627d785f7831db9 " +
    "b74e6b527c772d0d18d545ba9afe7781 b426012bbff3c552ea40a88b7797de85 76e8d162f40ad9072b7ec6198e8ad186 fe262324f70864b92e73c129d6dac9c6 aeabc1ed54e25ff9823d4473ff99daeb c2223d47105503b52913d81acb460fd5 " +
    "1bb7d1f5002e5f846bb756b3d098e72e 4112eee9dc171346cb385b1442ddfec5 e9cb1ff9c07486f657eadf337fb4b5f6 e8bfd6a08b40add61ae1c2812ee08439 0205a3ed9269ef3fe4872aa58c87e656 a14784083eb9c27b091682fc7430663b " +
    "77067d3932a9dbe033f10b3a1c301c81 3b9d9710be527b1df60019763c254783 b1bcf6d1b848b2099303f6d851df30bb 3dd0621ee86a71bb49d8fc4f5f566066 7a7cb5a397730fd29c40224c58af09cc 0ae0174dcb1b94434f3df2c360243a87 " +
    "3bcdcbea9ae27cf648f1e573147f8a7a 886db6e3644bf82f7286533ad9c1f3fb 94144450d661773f864f34cdfce4c21d 584795ac679d5b6e7596328911214054 a5b9fef73fdc3678554826d1b72a964b 389cfc2da42243fcc09069684d17e113 " +
    "9409518415c8dddb32f4ffc7169f4923 3b1649f43c50278162dcb47cc0e076f8 f3af88b3a887afd12c29eb9bc122708c cce8fee94a09e48272d0d4cfd425f3e7 f7bf03fc8fe5fd49fadc3b951b7c5e1d 0f113f9b23ad7e0acf1c965c609abcfe " +
    "2780ad99eabaf10713823f7b01697311 700f58a628f76464184034ecc1a7f35f ce6277096f5e0e39555ac4b2b988f158 6fc635af29c02f83b1ce03b66e036357 f71f17e3252984d5c4b5830f5d9611c8 737dab42c753faa1f0d995e5aa4c7b81 " +
    "786e446d3cec228d2e1f4bb7aa59115a 96d5bdc7381107ba2753a278bc7a0d4e 3f7ad96280041858085fa68c1a10b08a f7645203f7e3377dffdc8d8fc97bff11 332baac5427e6bc01212c49b080b078f 128aa8ef7652a80fbd250844b68d66ec " +
    "48e7fa653c8f67f58c2d2f86d10ac8b3 a03ba635163231da82744b372730f10f 6e539d94ee3a67cefbe5b8e983fed2f0 f4777f422e8964849f834ad107e032d6 0151b913eb3276439bada703e1e10128 ffa51681497458b9129e4a41e8a13374 " +
    "9aec946a58cdec7c4af233f21d627c92 7b0437163deba1d1541db2115e0c4680 7cac6a66bc745c47b121507ab03fa557 cf800d20671bc6d62dea25582bd8c3cb 7328087f8380c6e76df47e5c6fcd7b38 40f477dadc8ecedc465a1066ed59eec9 " +
    "33e559f32200df9aef148a59d3bc6f29 c8a303119facc865610dad5fd6e96f20 c7c2f871e1d154b75069a953eaf1a696 c0cfbad1b34918cb0679158d31328629 05bfaa38574e70113a01e7351b433e38 298fab303f53deee730fb5d4e7afa36f " +
    "4f2398b5c2a211b0bc184b40d05f6253 af85299c77887f821eb6936e7adc6ef2 220566f81dfe5ad6af50438bcd30e6c5 896c5a34160f9f46ea199902de825c64 5695ec09d258327e600df45d6221496a 180e5752ea36058f89185c9ebe72841f " +
    "6a86d988117c34d63df6cf5f9ada3770 2e8428e624a78a53a96b5ffaab65fdec de252b8a2e59ce03b6d708afd28f6e1e e6528224f27ef79522076b64dcc52a10 bfcfeac367a57f155695cccccc608106 62782978bbd08874378642c8f58d8f78 " +
    "c35056b72a27b16713e5dca71868549a 112ad4df904c759763435cfe1e42ae88 40a33eb4b44fc168ef9e26b6b27f1292 872be3f1754163325fec809b4abbade7 104404e283b5089b1e98efc5ce00c154 5f755580141c83d6123822655a7cf6fa " +
    "cc7b72a3fbeba5f262e7bd332ca3b92b ef8d69a697d60b120d9cbfa8ca352b30 7dd909921be8de190b3277a119a933a3 26bbc8e973bf8b76c3c0cf3d577f1d5b 4edd8dc89517d4d856ad8ff1248a0e5bdddefd706f2e32c80410df85b8fde3f2 567dd13fb1b15291ba9948f53f309dacdd0a43d4043adf41c612f4d71b756445 " +
    "b52a318f279d1eeb2d00c406b892f208e3bd70efadb6638ff092ad460fc57e31 572ad417a1ad575153c9507561a8fc60e96c2e76afc0cce2720f46ff84fd6836 1d152409901f2b7442ccd2c000793e3a2c52f74dcd1840234371b6d65ecdbad5 56f01f76b7163400bd3359e6fe2984332affcda616cb656d4791c9d5ff2988c6 e144a13c3b8b5a90cb86a06ad93855751ab169d08d2c863708e27d9e584dd642 cd7f2705e9eb413f2e971e12ad8d87598b05763e4e2f2ac9637af0d4eb32bee8 " +
    "65f47f84a0d8c035ac3ddc0577706350a5a81f1039fbf9d7c28daeeac8d742b0 4d017175a508ef49de7596b08ee8c493a2b82f53d8bbf9aa4911ce5070448f00 ebd00ea1d89d70405a9660f5d377262869d985079e413421bab671b436df6354 7aa8e53a99b6d0e5a2053282ea9944e836a1c25ec899c4cac177aaa1893d3994 b7541b9fe05befa2bc1961bd54f87f7477ba01245a212745ba07a67024617944 697dfc29fb2e3f8ac17ad3da92e07b78ccc869eb60b093635b8d97e0a4115433 " +
    "4c4487163116a4e917e27c9ca9ffd1582577ff7c56f477aff3e820939c11bed2 bfeafb8f87ff0b9503279bc06e89eebf788c7b8aedfdadc919c8f7e9257b91d0 62661f76584e91a9ad0f72c377561b3a3a1b82c3b723cb9d2c087d0158fc627d c7d77f08165c0b8141a3a8e8368ef463fbb6bc5e8a463098be6b498beb57f11d 26ce196ca64f0b77638dd2c08b5fc5facc5132a017b85fc9ef6b4b5c9af3e5a2 90e06e7624ee515927dd826160c8fe1089b36372b412754a226cafca68ee1d77 " +
    "5a98f1d9f9055c03eb4fd1b2dfcc4d9311ba853c95b5d0f04a8141591db1bd70 1dcf16a6065971fdf21cdfff28100204c7b59897aa300e4a1034190a79323d83 1f31141ff160d7fcfd4a4f135464b33250f1739cf1cd224b7800a2aef64e1aee 2bac13f8e71d401f31c96b26050a34fbf1c0887b3338764a9c9a61fafa0e31b7 32f3b0aad7f9f0f1e5e6a9837cd1b6bcbcbb6036feb8ac859e15333ec88b07b1 5b19e70ea3ffd82c4dbded21845f45a77b0dbd24bf1e58d96c11e114821047b1 " +
    "0280bada6f32a9ce52b1924e597269bbd51876f50a03824e9f46e84a7a67a9d4 aebbbe22263c001aa8b5557b59268949a0f7d982457e088f8c6e26726b5c3fe4 2c7770ee53069192bc6472a32b2ddbc37696a332b5448bd6f6a94efcb1ada2b7 521a66c9ad6d41c531213bfd2a9b4a031f2d962959159f58c1d90d79e84bf06e 1323b408bf625b9e7dae53ff6e20722143d37a3b3e8251389ce4474cc575fdac 854a55050fb67b8758fdfb48c838129ef480ef00ba6ebeeffb77612f1e2ebbd0 " +
    "1a53064f77fbd0c3fb61c112152a0761796b39e3da57c87759f2899a46e5ed13 6c8086a3da2a879a0ab2a06401226a6875b85bc343c46a9870d220fd85a0c6d7 f8ad85498713fd0cae7cf77f2d111d0a6d76f745bafcaf81f96f7b1bec2b192b fdf9a45c3e1e12ed7914c11009083b9fad1bf68d508d9b094eabf141bc9e028e 78ed99633796fc35722a6ec31593a693606c4be1ec4266f084d3423f924b291d 21a0fc9d75a814cabfb81089e82a257bd86d7906cc7168a85f477ae1ba95ed3b " +
    "38ed41ebeac17474b77416df088cfb68c99a9fac3060e0b6a0c28ee463da0600 5298481b5937ba88064ad76e4e6d6b8fbf63061ef1240f28f82727257dba0409 88d42286f8dc442bea7c9beb481f1ced09918e84e78906f43f88039a47be79f0 986cf2bc082aabb12e328428a7647963f11c9b49742b32a61e880488d16b1338 52baebdf3a3d34131b63b0844adae0957768c52eb9cf3ace3ad9333df2b4a3fb 32d73e5dcec0cbd318b60326d01f968538eb5e1520a7a51e53fcfcd8b77156a5 " +
    "35f4ccc2bc0b63ed74697313c82ea3480fde2799889e1acf9c20f3f5f9774677 498276c54d14cc955fc0c11f5fbdb442afc4b69000fa42cd18e45e5e0cb35c2a 55a069461f818b71e891e5038a508ec545ac322819dcc86b2f42d35035735517 6c26086501303dbd1f22cde55c5179daf6788be162687210bf65c2a9c677c26c 54b69cb2cad097e1459c0b141efab10258b2bea2948b4bf02f5ad40facdcfde9 76b60b1ee6c1d809a7c7dcc997f59488b3a82e451a87c4ffc1c87d2e75ea824f " +
    "240d149795521f20513eda542ce5aa1e75c033cfc098e5b3da01d6a821dea3f8 6f3ad3c919e77f1080890b9573342b646cc2018e54be14b2e3c331859d072df3 2f69f3827acabfb0e774cd4082d9289aa5a061843da846ad138811ebb42ef590 5de37672a4a8fc30caad26e5f8c33f35ff509f361026eb226334f793f05482c9 d48a268f17b00da3145e4f256b0ca4a3cb358cc956b67364a44a3c0d9fe045c5 22755404ec8beca3c06b59701e7606bbcef680ea704a688fe93f1b7fb3278f53 " +
    "cfd5b0eecd6e0bfa3ca4116e865eff3d49d6433ba9e85bb507e289d01952f445 d94f29bd026dd4193fb20004227573d3b0be8962433d5cde889909f07d0cef40 8ff316b0b1a90cf1bb5ae3cef4e82e09ce8979e00ce9675db488fa298ce06720 267d08051d9a16f9801132dc07e658f6c7d9e42515746fbb99bf4c859b3228a1 092fb0deb0d1fee2f06db5c72c9351a2bdbc44d73e3d075a9bd8932c49da9e51 6c7047333fe0ccb875932bc3e763afc428a1b733b71c63e935a0f50ab24bef79 " +
    "36c3a350e8119010e6161753b50cb6c5751989909ec832f4fb99d4f6176d859f d37eab089b7be6b5aab97236147661b10d5e9488e46bfd35275c8ff5c41fd9d5 be200bd33b4298bb710a3d2b14f8b27c83414c4ae6f31899ad817774238babde 42f33a5d0d1ba7fa465693df835f1ba5c551f98a888186b556c59e59dee3730f daf76ee93f6e1a4a744a932b3c6c7b59eba530e6eaa7d9a310a1cb57d0ba9301 a6230056c2e4d83ed0013d32a4f37ea6ae1d43ecb5124297d488d2c4420cb154 " +
    "d427d13caa2a5524553c1a6cf880710df950e7d2f581015e4b1b4bf2f4ce1d8a 7e6e22e4526417848a8ad8dc8e060fee3c120dfcd6869ced37b974f7e63f91f1 5e1247e0000c1cffa10798b5f01b30ba1bc0bd799f44a6781e0c5486639064d1 46e7eefbed4db0b22038e3c8927e3a1f45f8118495e031f2223be1d45f600f01 96e34afeae8030f846995ba5cbdaddf78981f534d28216e3f71750deffd459b0 9adbb99a54911453043d9d30955762105088372531e3ff015d5cd7b513a128d8 " +
    "0839187b15f941a94d4c959bc869c1806fd84aa0a4520fee5ddb008e2173b3d5 2f87837e8d97d2e1a42ecfba321fbb3b70d161edd4569f51f82ce280fd189a90 3980ae79566571d51a338944b17b56d64a3552524df2f5cac3fec36794007d16 515f2d6ddc6fb83442c2dc2d5a15b8b32a46e48cac20f811239878f41282be79 ce30a551d6406689cc8a3bcfff1aba9b5125edcee3793282ae9c9e2d917b3649 0df61b1a904685396a1c288f7bec46a5565ebc1cc68fa0e6527aec604a9f3722 " +
    "9302d244fa9d56af41d0645044c1952b43674213556f523d1e903545c140d227 bd1f6e9dbdc43155b24ce75d7590835aca639cf7f97ec49cf3d3ca500baaf4f6 80de61f5f82dced60210ccdce60630231a86a92eb4c4b7590d4974db57e8c718 20fa28194cd3c7ba01cdf713d89142778fd153dc145749aea48807fdab7567c5 a1d0feed8e53613eec014e645de535664b6680679f62eee6216b739f79767603 c574d43b6b8b195ec706a7344be1b5648622892e3f666e40609a39d8eb6e969c " +
    "2a63ed29cdd625e1fdbb09a1f56047a280050891d888afaafbb9c1bf88111ea5 304d779921f00a714e72847e8ff2c2448977eaeacfcfcf53f1d523ffd5ad9fb5 4523da6c416f3eba00ab2a309c20ac06a3aa22ba9a7e527a0cd0807b6de3834f bf41fddd6e1e21d07ebcd78d9860dea9accc297017a92002ff58cad02a20439d 332323b8fe19af200f66ce2eb9b895e5ff57e473cbce8a0f0ed020b2bd3d812e 4a57f9ae52e48d366243a3427e2eeb004c5241c6eec35fd551701ef8cb4972af " +
    "5095179353cd90ef94761a84594051a5a76b96b832509e138e7c14c82ae3a6d2 54683f5b35a2e0544a9bece65085f101aaed9f77d85582026eecb2f8a6f308c7 8483735909591e8439f1ea56ffa979489e9227d7e55b15e21c2eb2afda442889 0bcaa1b8dff253104bcb89413d3693814cebc5b7788dbd27383211892a3c1e21 d8c047048bcfb1f0d3202ef2db5501659720f5a15a32784148455a038acd6b66 642d639913874802e2485445a19d3840c5f32a8162c0544a99f8c08e3f074f10 " +
    "492e92246ae18b27974a3849058fe303ac6b1fdb8b4e1b38f1ec5faf72c9c79a 34bf16454319a3cedbf00eb402915abd3590c35b66572dff1f9b86e7a9b75430"]
];
function phraseEntropyHex(m){
  const w = String(m || "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  if(![12, 15, 18, 21, 24].includes(w.length) || !w.every(x => Object.prototype.hasOwnProperty.call(WORD_MAP, x))) return null;
  const bits = w.map(x => WORD_MAP[x].toString(2).padStart(11, "0")).join(""), n = w.length * 32 / 3;
  let h = ""; for(let i = 0; i < n; i += 4) h += parseInt(bits.slice(i, i + 4), 2).toString(16);
  return h;
}
function knownPhrase(m){
  const h = phraseEntropyHex(m); if(!h) return null;
  for(const [label, list] of KNOWN_PHRASES) if(list.split(" ").includes(h)) return label;
  if(PRACTICE_ENTROPY.includes(h)) return "one of this page's practice phrases";
  const b = h.match(/../g).map(x => parseInt(x, 16)), ix = String(m).trim().toLowerCase().split(/\s+/).map(x => WORD_MAP[x]).slice(0, -1);
  if(b.every(x => x === b[0])) return "made from one number repeated, not from real randomness";
  for(const p of [2, 4, 8]) if(b.every((x, i) => x === b[i % p])) return "made from a short pattern repeated, not from real randomness";
  for(const d of [1, 255]) if(b.every((x, i) => x === (b[0] + i * d) % 256)) return "made from counting numbers, not from real randomness";
  if(ix.every(x => x === ix[0])) return "made from one word repeated, not from real randomness";
  for(const d of [1, 2047]) if(ix.every((x, i) => x === (ix[0] + i * d) % 2048)) return "made from words in list order, not from real randomness";
  return null;
}
async function reforgeChecksumOk(idx){
  const cLen = idx.length / 3, eBytes = new Uint8Array(cLen * 4);
  let acc = 0, bits = 0, o = 0;
  for(let i = 0; i < idx.length; i++){
    acc = (acc << 11) | idx[i]; bits += 11;
    while(bits >= 8 && o < eBytes.length){ bits -= 8; eBytes[o++] = (acc >>> bits) & 255; }
    acc &= (1 << bits) - 1;
  }
  if(bits !== cLen) throw new Error("checksum length");
  const h = new Uint8Array(await crypto.subtle.digest("SHA-256", eBytes));
  return acc === (h[0] >>> (8 - cLen));
}
function psbtReader(b){
  let o=0;
  const need=(n)=>{ if(n<0 || o+n>b.length) throw new Error("The PSBT is cut short or damaged."); };
  const r={
    get pos(){ return o; }, get done(){ return o>=b.length; },
    byte(){ need(1); return b[o++]; },
    bytes(n){ need(n); const x=b.slice(o,o+n); o+=n; return x; },
    u32(){ need(4); const v=(b[o]|(b[o+1]<<8)|(b[o+2]<<16)|(b[o+3]<<24))>>>0; o+=4; return v; },
    i64(){ need(8); let v=0n; for(let i=7;i>=0;i--) v=(v<<8n)|BigInt(b[o+i]); o+=8; return v; },
    varint(){ const f=r.byte(); if(f<0xfd) return f; if(f===0xfd){ need(2); const v=b[o]|(b[o+1]<<8); o+=2; return v; }
      if(f===0xfe) return r.u32(); const v=r.i64(); if(v>0xffffffffn) throw new Error("Number too large in the PSBT."); return Number(v); }
  };
  return r;
}
function psbtReadMap(r){
  const m=[], seen=new Set();
  for(;;){
    const kl=r.varint(); if(kl===0) return m;
    const key=r.bytes(kl), vl=r.varint(), val=r.bytes(vl), id=hex(key);
    if(seen.has(id)) throw new Error("This PSBT has the same record twice (type 0x" + key[0].toString(16) + "). Wallets refuse that, so this tool does too.");   // fixes release (review)
    seen.add(id); m.push({type:key[0], key:key.slice(1), val});
  }
}
function psbtParseTx(bytes){
  const r=psbtReader(bytes), tx={version:r.u32(), ins:[], outs:[]};
  let n=r.varint(); if(n===0) throw new Error("This transaction already has witness data; expected an unsigned one.");
  for(let i=0;i<n;i++){ const txid=hex(Uint8Array.from(r.bytes(32)).reverse()), vout=r.u32(), sl=r.varint(); r.bytes(sl); tx.ins.push({txid, vout, seq:r.u32()}); }
  n=r.varint(); for(let i=0;i<n;i++){ const value=r.i64(), sl=r.varint(); tx.outs.push({value, script:r.bytes(sl)}); }
  tx.locktime=r.u32(); return tx;
}
function psbtParseTxOutputs(bytes){ // a full previous transaction (possibly with witness data): only its outputs are needed
  const r=psbtReader(bytes); r.u32(); let n=r.varint(), seg=false;
  if(n===0){ r.byte(); seg=true; n=r.varint(); }
  for(let i=0;i<n;i++){ r.bytes(32); r.u32(); r.bytes(r.varint()); r.u32(); }
  n=r.varint(); const outs=[]; for(let i=0;i<n;i++){ const value=r.i64(); outs.push({value, script:r.bytes(r.varint())}); }
  return outs;
}
function psbtStripWitness(bytes){
  const r=psbtReader(bytes); r.u32(); let n=r.varint(), seg=false;
  if(n===0){ r.byte(); seg=true; n=r.varint(); }
  if(!seg) return bytes;
  for(let i=0;i<n;i++){ r.bytes(32); r.u32(); r.bytes(r.varint()); r.u32(); }
  n=r.varint(); for(let i=0;i<n;i++){ r.i64(); r.bytes(r.varint()); }
  const end=r.pos, out=new Uint8Array(4+(end-6)+4);
  out.set(bytes.slice(0,4),0); out.set(bytes.slice(6,end),4); out.set(bytes.slice(bytes.length-4),4+end-6);
  return out;
}
const eqBytes=(a,b)=>a.length===b.length && a.every((x,i)=>x===b[i]);
async function psbtAddress(script, net){
  const N=NETS[net||"main"];
  if(script.length===25 && script[0]===0x76 && script[1]===0xa9 && script[2]===20 && script[23]===0x88 && script[24]===0xac) return base58check(Uint8Array.from([N.pkh, ...script.slice(3,23)]));
  if(script.length===23 && script[0]===0xa9 && script[1]===20 && script[22]===0x87) return base58check(Uint8Array.from([N.sh, ...script.slice(2,22)]));
  if(script.length===22 && script[0]===0 && script[1]===20) return bech32Encode(N.hrp,0,script.slice(2));
  if(script.length===34 && script[0]===0 && script[1]===32) return bech32Encode(N.hrp,0,script.slice(2));
  if(script.length===34 && script[0]===0x51 && script[1]===32) return bech32Encode(N.hrp,1,script.slice(2));
  if(script.length>0 && script[0]===0x6a) return "OP_RETURN (no address, carries data)";
  return "Unrecognized script: " + hex(script);
}
function psbtFromText(text){
  // v2.6.0: QR text pasted from an animated QR (UR crypto-psbt, psbt or bytes; BBQr P, T or U), one part per line
  const q=qrTextDecode(text);
  if(q){
    if(q.kind==="ur"){
      if(!["crypto-psbt","psbt","bytes"].includes(q.type)) throw new Error("This UR is of type "+q.type+", not a PSBT (crypto-psbt).");
      const r=cborRead(q.msg,0); if(!(r.v instanceof Uint8Array) || r.pos!==q.msg.length) throw new Error("This UR does not hold a PSBT.");
      return r.v;
    }
    if(q.type==="P" || q.type==="T") return q.bytes;
    if(q.type==="U") return psbtFromText(new TextDecoder().decode(q.bytes).replace(/^(ur:|B\$)/i,"x"));
    throw new Error("This BBQr holds file type "+q.type+", not a PSBT (P) or a transaction (T).");
  }
  const t=text.replace(/\s+/g,"");
  if(/^70736274ff/i.test(t) && /^[0-9a-f]+$/i.test(t) && t.length%2===0) return fromHex(t.toLowerCase());
  if(/^0[0-9a-f]000000/i.test(t) && /^[0-9a-f]+$/i.test(t) && t.length%2===0 && t.length>=20) return fromHex(t.toLowerCase()); // a raw transaction in hex
  if(/^[A-Za-z0-9+/]+={0,2}$/.test(t)){ const bin=atob(t), u=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return u; }
  throw new Error("Paste the PSBT as base64 (starts with cHNidP8) or hex (starts with 70736274ff), or choose the file.");
}
function sigDer(b){ // DER ECDSA signature plus one sighash byte, or null when b is not exactly that
  if(b.length<9 || b.length>73 || b[0]!==0x30 || b[1]!==b.length-3 || b[2]!==2) return null;
  const rl=b[3]; if(rl<1 || rl>33 || 4+rl+2>b.length-1 || b[4+rl]!==2) return null;
  const sl=b[5+rl]; if(sl<1 || 6+rl+sl!==b.length-1) return null;
  const strip=(x)=>{ let i=0; while(i<x.length-1 && x[i]===0) i++; return x.slice(i); };
  const r=strip(b.slice(4,4+rl)), sv=strip(b.slice(6+rl,6+rl+sl)); if(r.length>32 || sv.length>32) return null;
  return {kind:"ECDSA", r:hex(r).padStart(64,"0"), s:hex(sv).padStart(64,"0"), sighash:b[b.length-1]};
}
function sigSchnorr(b){ // 64 bytes (default sighash) or 65 bytes (explicit sighash, never 0)
  if(b.length===64) return {kind:"Schnorr", r:hex(b.slice(0,32)), s:hex(b.slice(32)), sighash:0};
  if(b.length===65 && b[64]!==0) return {kind:"Schnorr", r:hex(b.slice(0,32)), s:hex(b.slice(32,64)), sighash:b[64]};
  return null;
}
function scriptPushes(b){ const out=[]; let i=0; while(i<b.length){ const op=b[i++]; let len; if(op>=1&&op<=75) len=op; else if(op===0x4c&&i<b.length) len=b[i++]; else if(op===0x4d&&i+1<b.length){ len=b[i]|(b[i+1]<<8); i+=2; } else continue; if(i+len>b.length) break; out.push(b.slice(i,i+len)); i+=len; } return out; }
function sigsFromScriptSig(b, input){ return scriptPushes(b).map(sigDer).filter(Boolean).map(x=>Object.assign(x,{input})); }
function sigsFromWitness(items, input){
  const out=items.map(sigDer).filter(Boolean);
  if(!out.length && (items.length===1 || (items.length===2 && items[1].length>0 && items[1][0]===0x50))){ const t=sigSchnorr(items[0]); if(t) out.push(t); }
  return out.map(x=>Object.assign(x,{input}));
}
function sigsFromFinalWitness(val, input){ try { const q=psbtReader(val), n=q.varint(), it=[]; for(let i=0;i<n;i++) it.push(q.bytes(q.varint())); return sigsFromWitness(it, input); } catch(e){ return []; } }
function sighashName(k,h){ const base=h&0x1f, ac=(h&0x80)?" + ANYONECANPAY":""; return (k==="Schnorr"&&h===0) ? "ALL (default)" : (base===1?"ALL":base===2?"NONE":base===3?"SINGLE":"unknown (0x"+h.toString(16)+")")+ac; }
async function inspectRawTx(bytes, net){
  const r=psbtReader(bytes), res={raw:true, bytes, ins:[], outs:[], sigs:[]}; res.version=r.u32();
  let seg=false, n=r.varint(); if(n===0){ if(r.byte()!==1) throw new Error("not a transaction"); seg=true; n=r.varint(); }
  if(n===0 || n>100000) throw new Error("not a transaction");
  const bodyStart=seg?6:4;
  for(let i=0;i<n;i++){ const txid=hex(Uint8Array.from(r.bytes(32)).reverse()), vout=r.u32(), sl=r.varint(), ss=r.bytes(sl); res.ins.push({txid, vout, amount:null, seq:r.u32(), scriptSig:sl, final:false, sigs:0}); res.sigs.push(...sigsFromScriptSig(ss, i)); }
  n=r.varint(); if(n===0 || n>100000) throw new Error("not a transaction");
  for(let i=0;i<n;i++){ const value=r.i64(), sl=r.varint(), script=r.bytes(sl); res.outs.push({amount:value, script, address:await psbtAddress(script, net), fps:[]}); }
  const bodyEnd=r.pos;
  if(seg) res.ins.forEach((x,i)=>{ const k=r.varint(), it=[]; for(let j=0;j<k;j++) it.push(r.bytes(r.varint())); if(k>0) x.final=true; res.sigs.push(...sigsFromWitness(it, i)); });
  for(const x of res.ins) if(x.scriptSig>0) x.final=true;
  res.locktime=r.u32(); if(!r.done) throw new Error("not a transaction");
  const stripped=new Uint8Array(4+(bodyEnd-bodyStart)+4); stripped.set(bytes.slice(0,4),0); stripped.set(bytes.slice(bodyStart,bodyEnd),4); stripped.set(bytes.slice(bytes.length-4),4+bodyEnd-bodyStart);
  res.txid=hex((await sha256bytes(await sha256bytes(stripped))).reverse());
  res.totalOut=res.outs.reduce((a,o)=>a+o.amount,0n); res.fee=null;
  res.rbf=res.ins.some(x=>x.seq<0xfffffffe);
  return res;
}
function psbtV2Tx(glob, r){
  const g=(t)=>glob.find(x=>x.type===t && x.key.length===0), u32=(v)=>(v[0]|(v[1]<<8)|(v[2]<<16)|(v[3]<<24))>>>0;
  const need=(rec, what, len)=>{ if(!rec) throw new Error("This PSBT (version 2) is missing its " + what + "."); if(len && rec.val.length!==len) throw new Error("This PSBT (version 2) has a damaged " + what + "."); return rec.val; };
  if(g(0x00)) throw new Error("This PSBT says it is version 2 but also carries a version 0 unsigned transaction. Wallets refuse that, so this tool does too.");
  for(const t of [0x03]){ const x=g(t); if(x && x.val.length!==4) throw new Error("This PSBT (version 2) has a damaged fallback locktime."); }
  const version=u32(need(g(0x02), "transaction version", 4)), nIn=psbtReader(need(g(0x04), "input count")).varint(), nOut=psbtReader(need(g(0x05), "output count")).varint();
  if(nIn>10000 || nOut>10000) throw new Error("This PSBT (version 2) has too many inputs or outputs.");
  const inMaps=[], outMaps=[], ins=[], outs=[];
  for(let i=0;i<nIn;i++){ const m=psbtReadMap(r), f=(t)=>m.find(x=>x.type===t && x.key.length===0); inMaps.push(m);
    const id=need(f(0x0e), "previous transaction ID of input " + i), ix=need(f(0x0f), "output index of input " + i);
    if(id.length!==32 || ix.length!==4) throw new Error("Input " + i + " of this PSBT (version 2) is damaged.");
    const sq=f(0x10), th=f(0x12), tt=f(0x11);
    for(const x of [sq, th, tt]) if(x && x.val.length!==4) throw new Error("Input " + i + " of this PSBT (version 2) has a damaged sequence or locktime.");
    ins.push({txid:hex(Uint8Array.from(id).reverse()), vout:u32(ix), seq:sq && sq.val.length===4 ? u32(sq.val) : 0xffffffff, lockH:th && th.val.length===4 ? u32(th.val) : null, lockT:tt && tt.val.length===4 ? u32(tt.val) : null}); }
  for(let i=0;i<nOut;i++){ const m=psbtReadMap(r), f=(t)=>m.find(x=>x.type===t && x.key.length===0); outMaps.push(m);
    const a=need(f(0x03), "amount of output " + i), sc=need(f(0x04), "script of output " + i); if(a.length!==8) throw new Error("Output " + i + " of this PSBT (version 2) is damaged.");
    outs.push({value:psbtReader(a).i64(), script:sc}); }
  // BIP370 locktime: no input asks for one -> the fallback (or 0); else the largest height if every asking input can take a height, otherwise the largest time.
  const asks=ins.filter(x=>x.lockH!==null || x.lockT!==null), fb=g(0x03);
  let locktime=fb && fb.val.length===4 ? u32(fb.val) : 0;
  if(asks.length){ const byH=asks.every(x=>x.lockH!==null), byT=asks.every(x=>x.lockT!==null);
    if(!byH && !byT) throw new Error("This PSBT (version 2) cannot be signed: one input needs a block-height locktime and another a time locktime, which no transaction can meet.");
    locktime=byH ? Math.max(...asks.map(x=>x.lockH)) : Math.max(...asks.map(x=>x.lockT)); }
  return {version, locktime, ins, outs, inMaps, outMaps};
}
function psbtV2Serialize(tx){ // the unsigned transaction a version 2 PSBT describes (for its transaction ID)
  const b=[], u32=(v)=>b.push(v&255,(v>>>8)&255,(v>>>16)&255,(v>>>24)&255), vi=(n)=>{ if(n<0xfd) b.push(n); else if(n<=0xffff) b.push(0xfd,n&255,n>>>8); else { b.push(0xfe); u32(n); } };
  u32(tx.version); vi(tx.ins.length);
  for(const x of tx.ins){ b.push(...fromHex(x.txid).reverse()); u32(x.vout); b.push(0); u32(x.seq); }
  vi(tx.outs.length);
  for(const o of tx.outs){ let v=BigInt.asUintN(64, o.value); for(let i=0;i<8;i++){ b.push(Number(v&255n)); v>>=8n; } vi(o.script.length); b.push(...o.script); }
  u32(tx.locktime);
  return Uint8Array.from(b);
}
async function inspectPsbt(bytes, net){
  const magic=[0x70,0x73,0x62,0x74,0xff];
  if(bytes.length<5 || !magic.every((x,i)=>bytes[i]===x)){
    let raw=null; try { raw=await inspectRawTx(bytes, net); } catch(e){ raw=null; }
    if(raw) return raw;
    throw new Error("This is not a PSBT (it does not start with the PSBT marker).");
  }
  const r=psbtReader(bytes); r.bytes(5);
  const glob=psbtReadMap(r), g=(t)=>glob.find(x=>x.type===t && x.key.length===0), u32=(v)=>(v[0]|(v[1]<<8)|(v[2]<<16)|(v[3]<<24))>>>0;
  const verRec=g(0xfb), pver=verRec && verRec.val.length===4 ? u32(verRec.val) : 0;
  let tx, txBytes, inMaps, outMaps;
  if(pver===0){
    const txRec=g(0);
    if(!txRec) throw new Error("No unsigned transaction found in this PSBT.");
    tx=psbtParseTx(txRec.val); txBytes=txRec.val;
    inMaps=tx.ins.map(()=>psbtReadMap(r)); outMaps=tx.outs.map(()=>psbtReadMap(r));
  } else if(pver===2){ tx=psbtV2Tx(glob, r); inMaps=tx.inMaps; outMaps=tx.outMaps; txBytes=psbtV2Serialize(tx); }   // fixes release: BIP370
  else throw new Error("PSBT version " + pver + " is not supported by this inspector.");
  const res={version:tx.version, locktime:tx.locktime, psbtVersion:pver, ins:[], outs:[], sigs:[], maps:inMaps};
  res.txid=hex((await sha256bytes(await sha256bytes(txBytes))).reverse());
  for(let i=0;i<tx.ins.length;i++){
    const m=inMaps[i], inp={txid:tx.ins[i].txid, vout:tx.ins[i].vout, seq:tx.ins[i].seq, amount:null, sigs:m.filter(x=>x.type===2).length, final:m.some(x=>x.type===7||x.type===8)};
    const wu=m.find(x=>x.type===1), nw=m.find(x=>x.type===0);
    for(const x of m){
      if(x.type===2){ const g=sigDer(x.val); if(g) res.sigs.push(Object.assign(g,{input:i})); }
      else if(x.type===0x13 || x.type===0x14){ const g=sigSchnorr(x.val); if(g) res.sigs.push(Object.assign(g,{input:i})); }
      else if(x.type===7) res.sigs.push(...sigsFromScriptSig(x.val, i));
      else if(x.type===8) res.sigs.push(...sigsFromFinalWitness(x.val, i));
      else if(x.type===3 && x.val.length===4) inp.sighashReq=x.val[0]|(x.val[1]<<8)|(x.val[2]<<16)|(x.val[3]<<24);
    }
    // The coin this input spends. The full previous transaction (non_witness_utxo) must hash to the input's txid (fixes release) and
    // have that output; with a witness UTXO as well, the two must give the same amount and script (v2.18.0, as the practice signer's
    // ssOwnPrevBad and @scure/btc-signer check). Otherwise the amount is not trusted: a PSBT like that can hide any fee.
    let prevOut=null;
    if(nw){ const id=hex((await sha256bytes(await sha256bytes(psbtStripWitness(nw.val)))).reverse());   // checked whenever present (review)
      if(id!==tx.ins[i].txid) inp.prevMismatch=true; else { prevOut=psbtParseTxOutputs(nw.val)[tx.ins[i].vout] || null; if(!prevOut) inp.prevNoOut=true; } }
    if(wu){ const q=psbtReader(wu.val); inp.wuAmount=q.i64(); inp.wuScript=q.bytes(q.varint());
      if(prevOut && (prevOut.value!==inp.wuAmount || hex(prevOut.script)!==hex(inp.wuScript))) inp.utxoDisagree={wu:inp.wuAmount, nw:prevOut.value, script:hex(prevOut.script)!==hex(inp.wuScript)};
      else if(!inp.prevMismatch && !inp.prevNoOut){ inp.amount=inp.wuAmount; inp.script=inp.wuScript; } }
    else if(prevOut){ inp.amount=prevOut.value; inp.script=prevOut.script; }
    if(inp.script) inp.address=await psbtAddress(inp.script, net);
    // v2.18.0: the script being spent (the witness script, or the last item of a final P2WSH witness), for the waiting times it asks for
    { const ws=m.find(x=>x.type===5 && x.key.length===0), fw=m.find(x=>x.type===8); let sc=ws ? ws.val : null;
      if(!sc && fw && inp.script && inp.script.length===34 && inp.script[0]===0 && inp.script[1]===0x20){ try { const q=psbtReader(fw.val), k=q.varint(); for(let j=0;j<k;j++) sc=q.bytes(q.varint()); } catch(e){ sc=null; } }
      // v2.18.0 review A11: a witness script sent with the PSBT counts only when it is the one the coin commits to: SHA-256 of it is the
      // P2WSH program, or (P2SH-P2WSH) HASH160 of 0x0020 + that SHA-256 is the P2SH hash. Otherwise its waits are not read.
      // Recheck: whatever its source (the PSBT field or a final witness), a script is read only once it is proven to be the coin's;
      // with no trusted coin script there is nothing to prove it against, so its waits are named as not checked.
      if(sc && !inp.script){ inp.wsUnchecked=true; sc=null; }
      if(sc){ const h=await sha256bytes(sc), sp=inp.script;
        const p2wsh=sp.length===34 && sp[0]===0 && sp[1]===0x20, p2sh=sp.length===23 && sp[0]===0xa9 && sp[1]===0x14 && sp[22]===0x87;
        let match=false;
        if(p2wsh) match=hex(sp.slice(2))===hex(h);
        else if(p2sh){ const rs=new Uint8Array(34); rs[0]=0; rs[1]=0x20; rs.set(h,2); match=hex(sp.slice(2,22))===hex(await hash160(rs)); }
        if(!match){ inp.wsBad=p2wsh||p2sh ? "does not match" : "is not spent by"; sc=null; } }
      if(sc) inp.locks=scriptLocks(sc); }
    res.ins.push(inp);
  }
  for(let i=0;i<tx.outs.length;i++){
    const m=outMaps[i], out={amount:tx.outs[i].value, script:tx.outs[i].script, address:await psbtAddress(tx.outs[i].script, net), fps:[], derivs:[]};
    // fixes release: keep each key record whole (fingerprint, path and key), so a change mark can be checked against the wallet's own key
    const pathOf=(b)=>{ const p=[]; for(let j=0;j+4<=b.length;j+=4) p.push((b[j]|(b[j+1]<<8)|(b[j+2]<<16)|(b[j+3]<<24))>>>0); return p; };
    for(const x of m){
      if(x.type===2 && x.val.length>=4){ out.fps.push(hex(x.val.slice(0,4))); out.derivs.push({fp:hex(x.val.slice(0,4)), path:pathOf(x.val.slice(4)), pub:x.key, tap:false}); }
      if(x.type===7 && x.val.length>=5){ const q=psbtReader(x.val), nh=q.varint(); q.bytes(32*nh); const fp=hex(q.bytes(4)); out.fps.push(fp); out.derivs.push({fp, path:pathOf(x.val.slice(q.pos)), pub:x.key, tap:true, leaves:nh}); }
    }
    res.outs.push(out);
  }
  if(!r.done) res.trailing=true;
  res.totalOut=res.outs.reduce((a,o)=>a+o.amount,0n);
  res.fee=res.ins.every(x=>x.amount!==null) ? res.ins.reduce((a,x)=>a+x.amount,0n)-res.totalOut : null;
  res.rbf=res.ins.some(x=>x.seq<0xfffffffe);
  return res;
}
function scriptLocks(b){
  const out={csv:[], cltv:[], bad:[]}; let i=0, last=null;
  while(i<b.length){
    const op=b[i++]; let num=null, len=-1;
    if(op>=0x51 && op<=0x60) num=op-0x50;
    else if(op===0) num=0;   // recheck: 0 CSV and 0 CLTV are valid (no wait)
    else if(op===0x4f) num={bad:"-1"};
    else if(op>=1 && op<=75) len=op;
    else if(op===0x4c){ if(i>=b.length) break; len=b[i++]; }
    else if(op===0x4d){ if(i+1>=b.length) break; len=b[i]|(b[i+1]<<8); i+=2; }
    else if(op===0x4e){ if(i+3>=b.length) break; len=(b[i]|(b[i+1]<<8)|(b[i+2]<<16)|(b[i+3]<<24))>>>0; i+=4; }
    if(len>=0){ if(i+len>b.length) break; const d=b.slice(i,i+len); i+=len;
      const h=hex(d);
      if(len>5) num={bad:"a " + len + "-byte number (at most 5 count)"};
      else if(len===0) num={bad:"0"};
      else if(op>75 || (len===1 && d[0]>=1 && d[0]<=16) || (d[len-1]&0x7f)===0 && (len===1 || !(d[len-2]&0x80))) num={bad:"0x" + h + " written in a longer form than needed"};
      else if(d[len-1]&0x80) num={bad:"0x" + h + ", a negative number"};
      else { num=0; for(let j=len-1;j>=0;j--) num=num*256+d[j]; } }
    if((op===0xb2 || op===0xb1) && last!==null){
      if(typeof last==="number") (op===0xb2 ? out.csv : out.cltv).push(last);
      else out.bad.push((op===0xb2 ? "before CHECKSEQUENCEVERIFY: " : "before CHECKLOCKTIMEVERIFY: ") + last.bad); }
    last=num;
  }
  return out;
}
const PRACTICE_ENTROPY = ["7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f","80808080808080808080808080808080","9e885d952ad362caeb4efe34a8e91bd2","6610b25967cdcca9d59875f5cb50b0ea","68a79eaca2324873eacc50cb9c6eca8c","c0ba5a8e914111210f2bd131f3d5e08d"];
const ELECTRUM_CCC = /[\u{300}-\u{34e}\u{350}-\u{36f}\u{483}-\u{487}\u{591}-\u{5bd}\u{5bf}\u{5c1}-\u{5c2}\u{5c4}-\u{5c5}\u{5c7}\u{610}-\u{61a}\u{64b}-\u{65f}\u{670}\u{6d6}-\u{6dc}\u{6df}-\u{6e4}\u{6e7}-\u{6e8}\u{6ea}-\u{6ed}\u{711}\u{730}-\u{74a}\u{7eb}-\u{7f3}\u{7fd}\u{816}-\u{819}\u{81b}-\u{823}\u{825}-\u{827}\u{829}-\u{82d}\u{859}-\u{85b}\u{898}-\u{89f}\u{8ca}-\u{8e1}\u{8e3}-\u{8ff}\u{93c}\u{94d}\u{951}-\u{954}\u{9bc}\u{9cd}\u{9fe}\u{a3c}\u{a4d}\u{abc}\u{acd}\u{b3c}\u{b4d}\u{bcd}\u{c3c}\u{c4d}\u{c55}-\u{c56}\u{cbc}\u{ccd}\u{d3b}-\u{d3c}\u{d4d}\u{dca}\u{e38}-\u{e3a}\u{e48}-\u{e4b}\u{eb8}-\u{eba}\u{ec8}-\u{ecb}\u{f18}-\u{f19}\u{f35}\u{f37}\u{f39}\u{f71}-\u{f72}\u{f74}\u{f7a}-\u{f7d}\u{f80}\u{f82}-\u{f84}\u{f86}-\u{f87}\u{fc6}\u{1037}\u{1039}-\u{103a}\u{108d}\u{135d}-\u{135f}\u{1714}-\u{1715}\u{1734}\u{17d2}\u{17dd}\u{18a9}\u{1939}-\u{193b}\u{1a17}-\u{1a18}\u{1a60}\u{1a75}-\u{1a7c}\u{1a7f}\u{1ab0}-\u{1abd}\u{1abf}-\u{1ace}\u{1b34}\u{1b44}\u{1b6b}-\u{1b73}\u{1baa}-\u{1bab}\u{1be6}\u{1bf2}-\u{1bf3}\u{1c37}\u{1cd0}-\u{1cd2}\u{1cd4}-\u{1ce0}\u{1ce2}-\u{1ce8}\u{1ced}\u{1cf4}\u{1cf8}-\u{1cf9}\u{1dc0}-\u{1dff}\u{20d0}-\u{20dc}\u{20e1}\u{20e5}-\u{20f0}\u{2cef}-\u{2cf1}\u{2d7f}\u{2de0}-\u{2dff}\u{302a}-\u{302f}\u{3099}-\u{309a}\u{a66f}\u{a674}-\u{a67d}\u{a69e}-\u{a69f}\u{a6f0}-\u{a6f1}\u{a806}\u{a82c}\u{a8c4}\u{a8e0}-\u{a8f1}\u{a92b}-\u{a92d}\u{a953}\u{a9b3}\u{a9c0}\u{aab0}\u{aab2}-\u{aab4}\u{aab7}-\u{aab8}\u{aabe}-\u{aabf}\u{aac1}\u{aaf6}\u{abed}\u{fb1e}\u{fe20}-\u{fe2f}\u{101fd}\u{102e0}\u{10376}-\u{1037a}\u{10a0d}\u{10a0f}\u{10a38}-\u{10a3a}\u{10a3f}\u{10ae5}-\u{10ae6}\u{10d24}-\u{10d27}\u{10eab}-\u{10eac}\u{10efd}-\u{10eff}\u{10f46}-\u{10f50}\u{10f82}-\u{10f85}\u{11046}\u{11070}\u{1107f}\u{110b9}-\u{110ba}\u{11100}-\u{11102}\u{11133}-\u{11134}\u{11173}\u{111c0}\u{111ca}\u{11235}-\u{11236}\u{112e9}-\u{112ea}\u{1133b}-\u{1133c}\u{1134d}\u{11366}-\u{1136c}\u{11370}-\u{11374}\u{11442}\u{11446}\u{1145e}\u{114c2}-\u{114c3}\u{115bf}-\u{115c0}\u{1163f}\u{116b6}-\u{116b7}\u{1172b}\u{11839}-\u{1183a}\u{1193d}-\u{1193e}\u{11943}\u{119e0}\u{11a34}\u{11a47}\u{11a99}\u{11c3f}\u{11d42}\u{11d44}-\u{11d45}\u{11d97}\u{11f41}-\u{11f42}\u{16af0}-\u{16af4}\u{16b30}-\u{16b36}\u{16ff0}-\u{16ff1}\u{1bc9e}\u{1d165}-\u{1d169}\u{1d16d}-\u{1d172}\u{1d17b}-\u{1d182}\u{1d185}-\u{1d18b}\u{1d1aa}-\u{1d1ad}\u{1d242}-\u{1d244}\u{1e000}-\u{1e006}\u{1e008}-\u{1e018}\u{1e01b}-\u{1e021}\u{1e023}-\u{1e024}\u{1e026}-\u{1e02a}\u{1e08f}\u{1e130}-\u{1e136}\u{1e2ae}\u{1e2ec}-\u{1e2ef}\u{1e4ec}-\u{1e4ef}\u{1e8d0}-\u{1e8d6}\u{1e944}-\u{1e94a}]/gu;
const ELECTRUM_CJK = [[0x4E00, 0x9FFF], [0x3400, 0x4DBF], [0x20000, 0x2A6DF], [0x2A700, 0x2B73F], [0x2B740, 0x2B81F], [0xF900, 0xFAFF], [0x2F800, 0x2FA1D], [0x3190, 0x319F], [0x2E80, 0x2EFF], [0x2F00, 0x2FDF], [0x31C0, 0x31EF], [0x2FF0, 0x2FFF], [0xE0100, 0xE01EF], [0x3100, 0x312F], [0x31A0, 0x31BF], [0xFF00, 0xFFEF], [0x3040, 0x309F], [0x30A0, 0x30FF], [0x31F0, 0x31FF], [0x1B000, 0x1B0FF], [0xAC00, 0xD7AF], [0x1100, 0x11FF], [0xA960, 0xA97F], [0xD7B0, 0xD7FF], [0x3130, 0x318F], [0xA4D0, 0xA4FF], [0x16F00, 0x16F9F], [0xA000, 0xA48F], [0xA490, 0xA4CF]];
function electrumIsCJK(ch){ const n = ch.codePointAt(0); return ELECTRUM_CJK.some(([a, b]) => n >= a && n <= b); }
function electrumNorm(t){
  const c = Array.from(String(t || "").normalize("NFKD").toLowerCase().replace(ELECTRUM_CCC, "").split(/[\t\n\v\f\r\x1c-\x1f \x85\xa0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/).filter(Boolean).join(" "));
  return c.filter((ch, i) => !(ch === " " && electrumIsCJK(c[i - 1]) && electrumIsCJK(c[i + 1]))).join("");
}
async function electrumToSeed(text, pass, asTyped){
  const enc = new TextEncoder(), key = await crypto.subtle.importKey("raw", enc.encode(electrumNorm(text)), "PBKDF2", false, ["deriveBits"]);
  return new Uint8Array(await crypto.subtle.deriveBits({name:"PBKDF2", hash:"SHA-512", iterations:2048, salt:enc.encode("electrum" + (asTyped ? String(pass || "").normalize("NFKD") : electrumNorm(pass)))}, key, 512));
}
const qdExp=new Uint8Array(512), qdLog=new Uint8Array(256);
(function(){ let x=1; for(let i=0;i<255;i++){ qdExp[i]=x; qdLog[x]=i; x<<=1; if(x&0x100) x^=0x11d; } for(let i=255;i<512;i++) qdExp[i]=qdExp[i-255]; })();
function qdMul(a,b){ return a&&b ? qdExp[qdLog[a]+qdLog[b]] : 0; }
function qdDiv(a,b){ return a ? qdExp[qdLog[a]+255-qdLog[b]] : 0; }
const qdEcPerBlock={
  L:[7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
  M:[10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],
  Q:[13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
  H:[17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]};
const qdNumBlocks={
  L:[1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],
  M:[1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],
  Q:[1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],
  H:[1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]};
function qdProtectBytes(ver, level){ return ver===1 ? {L:3,M:2,Q:1,H:1}[level] : ver===2&&level==="L" ? 2 : ver===3&&level==="L" ? 1 : 0; }
const qdLevelByBits=["M","L","H","Q"];
const qdFormatWords=[], qdVersionWords=[];
(function(){
  for(let d=0;d<32;d++){ let r=d; for(let i=0;i<10;i++) r=(r<<1)^((r>>>9)*0x537); qdFormatWords.push(((d<<10)|r)^0x5412); }
  for(let v=7;v<=40;v++){ let r=v; for(let i=0;i<12;i++) r=(r<<1)^((r>>>11)*0x1f25); qdVersionWords.push((v<<12)|r); }
})();
function qdBitCount(x){ let n=0; while(x){ x&=x-1; n++; } return n; }
function qdAlignPositions(ver){
  if(ver===1) return [];
  const num=Math.floor(ver/7)+2, size=ver*4+17, step=Math.floor((ver*8+num*3+5)/(num*4-4))*2, out=[6];
  for(let p=size-7; out.length<num; p-=step) out.splice(1,0,p);
  return out;
}
const qdFnCache=[];
function qdFunctionMask(ver){
  if(qdFnCache[ver]) return qdFnCache[ver];
  const n=ver*4+17, fn=new Uint8Array(n*n);
  const mark=(x0,y0,w,h)=>{ for(let y=y0;y<y0+h;y++) for(let x=x0;x<x0+w;x++) if(x>=0&&y>=0&&x<n&&y<n) fn[y*n+x]=1; };
  mark(0,0,9,9); mark(n-8,0,8,9); mark(0,n-8,9,8); mark(6,0,1,n); mark(0,6,n,1);
  const ap=qdAlignPositions(ver);
  for(let i=0;i<ap.length;i++) for(let j=0;j<ap.length;j++){
    if((i===0&&j===0)||(i===0&&j===ap.length-1)||(i===ap.length-1&&j===0)) continue;
    mark(ap[i]-2,ap[j]-2,5,5); }
  if(ver>=7){ mark(n-11,0,3,6); mark(0,n-11,6,3); }
  return qdFnCache[ver]=fn;
}
function qdMaskBit(mask,x,y){
  switch(mask){
    case 0: return (x+y)%2===0;
    case 1: return y%2===0;
    case 2: return x%3===0;
    case 3: return (x+y)%3===0;
    case 4: return (Math.floor(x/3)+Math.floor(y/2))%2===0;
    case 5: return x*y%2+x*y%3===0;
    case 6: return (x*y%2+x*y%3)%2===0;
    default: return ((x+y)%2+x*y%3)%2===0;
  }
}
function qdRsCorrect(block, ecLen, maxErrors){
  const n=block.length, syn=new Uint8Array(ecLen);
  let bad=false;
  for(let j=0;j<ecLen;j++){ let s=0; const a=qdExp[j]; for(let i=0;i<n;i++) s=qdMul(s,a)^block[i]; syn[j]=s; if(s) bad=true; }
  if(!bad) return 0;
  let C=new Uint8Array(ecLen+1), B=new Uint8Array(ecLen+1), L=0, m=1, b=1;
  C[0]=1; B[0]=1;
  for(let k=0;k<ecLen;k++){
    let d=syn[k];
    for(let i=1;i<=L;i++) d^=qdMul(C[i],syn[k-i]);
    if(d===0){ m++; continue; }
    const coef=qdDiv(d,b), T=C.slice();
    for(let i=0;i+m<=ecLen;i++) C[i+m]^=qdMul(coef,B[i]);
    if(2*L<=k){ L=k+1-L; B=T; b=d; m=1; } else m++;
  }
  if(L>maxErrors) return -1;
  const pos=[];
  for(let p=0;p<n;p++){
    const xi=qdExp[(255-p)%255]; let v=0;
    for(let i=L;i>=0;i--) v=qdMul(v,xi)^C[i];
    if(v===0) pos.push(p);
  }
  if(pos.length!==L) return -1;
  const om=new Uint8Array(ecLen);
  for(let i=0;i<ecLen;i++){ let s=0; for(let j=0;j<=Math.min(i,L);j++) s^=qdMul(C[j],syn[i-j]); om[i]=s; }
  for(const p of pos){
    const X=qdExp[p], xi=qdExp[(255-p)%255];
    let o=0; for(let i=ecLen-1;i>=0;i--) o=qdMul(o,xi)^om[i];
    let dv=0, xp=1; const xi2=qdMul(xi,xi);
    for(let i=1;i<=L;i+=2){ dv^=qdMul(C[i],xp); xp=qdMul(xp,xi2); }
    if(dv===0) return -1;
    block[n-1-p]^=qdMul(X,qdDiv(o,dv));
  }
  for(let j=0;j<ecLen;j++){ let s=0; const a=qdExp[j]; for(let i=0;i<n;i++) s=qdMul(s,a)^block[i]; if(s) return -1; }
  return L;
}
function qdReadFormat(mt, n){
  const get=(x,y)=>mt[y*n+x];
  let a=0, b=0;
  for(let i=0;i<=5;i++) a|=get(8,i)<<i;
  a|=get(8,7)<<6; a|=get(8,8)<<7; a|=get(7,8)<<8;
  for(let i=9;i<15;i++) a|=get(14-i,8)<<i;
  for(let i=0;i<8;i++) b|=get(n-1-i,8)<<i;
  for(let i=8;i<15;i++) b|=get(8,n-15+i)<<i;
  let best=-1, bestDist=99;
  for(let d=0;d<32;d++){ const dist=Math.min(qdBitCount(a^qdFormatWords[d]),qdBitCount(b^qdFormatWords[d])); if(dist<bestDist){ bestDist=dist; best=d; } }
  if(bestDist>3) return null;
  return {level:qdLevelByBits[best>>3], mask:best&7};
}
function qdReadVersion(mt, n){
  let a=0, b=0;
  for(let i=0;i<18;i++){ const p=n-11+i%3, q=Math.floor(i/3); a|=mt[q*n+p]<<i; b|=mt[p*n+q]<<i; }
  let best=0, bestDist=99;
  for(let k=0;k<qdVersionWords.length;k++){ const dist=Math.min(qdBitCount(a^qdVersionWords[k]),qdBitCount(b^qdVersionWords[k])); if(dist<bestDist){ bestDist=dist; best=k+7; } }
  return bestDist<=3 ? best : 0;
}
function qdDecodeMatrix(mt, n){
  const ver=(n-17)/4;
  if(ver<1||ver>40||ver!==Math.floor(ver)) return null;
  const fmt=qdReadFormat(mt,n);
  if(!fmt) return null;
  if(ver>=7){ const vv=qdReadVersion(mt,n); if(vv&&vv!==ver) return {version:vv}; }
  const fn=qdFunctionMask(ver);
  let dataModules=0; for(let i=0;i<n*n;i++) if(!fn[i]) dataModules++;
  const total=dataModules>>3, raw=new Uint8Array(total);
  let bit=0;
  for(let right=n-1;right>=1;right-=2){
    if(right===6) right=5;
    const up=((right+1)&2)===0;
    for(let vert=0;vert<n;vert++){
      const y=up?n-1-vert:vert;
      for(let j=0;j<2;j++){
        const x=right-j;
        if(fn[y*n+x]) continue;
        if(bit<total*8){ let v=mt[y*n+x]; if(qdMaskBit(fmt.mask,x,y)) v^=1; if(v) raw[bit>>3]|=0x80>>(bit&7); }
        bit++;
      }
    }
  }
  const ecLen=qdEcPerBlock[fmt.level][ver-1], nb=qdNumBlocks[fmt.level][ver-1];
  const shortBlocks=nb-total%nb, shortData=Math.floor(total/nb)-ecLen, blocks=[];
  for(let i=0;i<nb;i++){ const dl=shortData+(i<shortBlocks?0:1); blocks.push({dl, b:new Uint8Array(dl+ecLen)}); }
  let k=0;
  for(let i=0;i<=shortData;i++) for(const bl of blocks) if(i<bl.dl) bl.b[i]=raw[k++];
  for(let i=0;i<ecLen;i++) for(const bl of blocks) bl.b[bl.dl+i]=raw[k++];
  const maxErr=Math.floor((ecLen-qdProtectBytes(ver,fmt.level))/2), data=[];
  let fixed=0;
  for(const bl of blocks){
    const f=qdRsCorrect(bl.b,ecLen,maxErr);
    if(f<0) return null;
    fixed+=f;
    for(let i=0;i<bl.dl;i++) data.push(bl.b[i]);
  }
  qdParseSegments.partial=false; const bytes=qdParseSegments(data,ver);
  if(!bytes) return null;
  return {bytes, text:qdBytesToText(bytes), version:ver, ecLevel:fmt.level, mask:fmt.mask, fixed, partial:!!qdParseSegments.partial};
}
const qdAlnum="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
function qdParseSegments(data, ver){
  const nbits=data.length*8;
  let pos=0;
  const read=(len)=>{ let v=0; for(let i=0;i<len;i++){ v=(v<<1)|((data[pos>>3]>>(7-(pos&7)))&1); pos++; } return v; };
  const band=ver<10?0:ver<27?1:2, out=[];
  while(nbits-pos>=4){
    const mode=read(4);
    if(mode===0) break;
    if(mode===1){
      const cb=[10,12,14][band]; if(nbits-pos<cb) return null;
      let count=read(cb);
      while(count>0){
        const digits=count>=3?3:count, len=[0,4,7,10][digits];
        if(nbits-pos<len) return null;
        const v=read(len); if(v>=[1,10,100,1000][digits]) return null;
        const s=String(v).padStart(digits,"0");
        for(let i=0;i<digits;i++) out.push(s.charCodeAt(i));
        count-=digits;
      }
    } else if(mode===2){
      const cb=[9,11,13][band]; if(nbits-pos<cb) return null;
      let count=read(cb);
      while(count>0){
        if(count>=2){ if(nbits-pos<11) return null; const v=read(11); if(v>=45*45) return null; out.push(qdAlnum.charCodeAt(Math.floor(v/45)),qdAlnum.charCodeAt(v%45)); count-=2; }
        else { if(nbits-pos<6) return null; const v=read(6); if(v>=45) return null; out.push(qdAlnum.charCodeAt(v)); count--; }
      }
    } else if(mode===4){
      const cb=band===0?8:16; if(nbits-pos<cb) return null;
      const count=read(cb); if(nbits-pos<count*8) return null;
      for(let i=0;i<count;i++) out.push(read(8));
    } else if(mode===7){
      if(nbits-pos<8) return null;
      const first=read(8);
      if((first&0x80)===0){ }
      else if((first&0xc0)===0x80){ if(nbits-pos<8) return null; read(8); }
      else if((first&0xe0)===0xc0){ if(nbits-pos<16) return null; read(16); }
      else return null;
    } else if(mode===3){ if(nbits-pos<16) return null; read(16); qdParseSegments.partial=true; }
    else if(mode===5){ }
    else if(mode===9){ if(nbits-pos<8) return null; read(8); }
    else return null;
  }
  return new Uint8Array(out);
}
function qdBytesToText(bytes){
  const cps=[]; let i=0, ok=true;
  while(i<bytes.length){
    const c=bytes[i];
    if(c<0x80){ cps.push(c); i++; continue; }
    let need, cp, min;
    if(c>=0xc2&&c<=0xdf){ need=1; cp=c&0x1f; min=0x80; }
    else if(c>=0xe0&&c<=0xef){ need=2; cp=c&0x0f; min=0x800; }
    else if(c>=0xf0&&c<=0xf4){ need=3; cp=c&0x07; min=0x10000; }
    else { ok=false; break; }
    if(i+need>=bytes.length){ ok=false; break; }
    for(let k=1;k<=need;k++){ const d=bytes[i+k]; if((d&0xc0)!==0x80){ ok=false; break; } cp=(cp<<6)|(d&0x3f); }
    if(!ok||cp<min||cp>0x10ffff||(cp>=0xd800&&cp<=0xdfff)){ ok=false; break; }
    cps.push(cp); i+=need+1;
  }
  let s="";
  if(ok){ for(let j=0;j<cps.length;j+=4096) s+=String.fromCodePoint.apply(null,cps.slice(j,j+4096)); return s; }
  for(let j=0;j<bytes.length;j+=4096) s+=String.fromCharCode.apply(null,Array.from(bytes.subarray(j,j+4096)));
  return s;
}
function qdBinarize(gray, w, h, invert){
  const S=8, bw=Math.ceil(w/S), bh=Math.ceil(h/S), black=new Float32Array(bw*bh), out=new Uint8Array(w*h);
  for(let by=0;by<bh;by++){
    const y0=by*S, y1=Math.min(y0+S,h);
    for(let bx=0;bx<bw;bx++){
      const x0=bx*S, x1=Math.min(x0+S,w);
      let mn=255, mx=0, sum=0;
      for(let y=y0;y<y1;y++){ const r=y*w; for(let x=x0;x<x1;x++){ let v=gray[r+x]; if(invert) v=255-v; sum+=v; if(v<mn) mn=v; if(v>mx) mx=v; } }
      let avg=sum/((y1-y0)*(x1-x0));
      if(mx-mn<=24){
        avg=mn-24;
        if(by>0&&bx>0){ const nbp=(black[(by-1)*bw+bx]+2*black[by*bw+bx-1]+black[(by-1)*bw+bx-1])/4; if(mn<nbp) avg=nbp; }
      }
      black[by*bw+bx]=avg;
    }
  }
  for(let by=0;by<bh;by++){
    const cy=Math.min(Math.max(by,2),Math.max(bh-3,0)), y0=by*S, y1=Math.min(y0+S,h);
    for(let bx=0;bx<bw;bx++){
      const cx=Math.min(Math.max(bx,2),Math.max(bw-3,0));
      let sum=0, cnt=0;
      for(let dy=-2;dy<=2;dy++){ const yy=cy+dy; if(yy<0||yy>=bh) continue; for(let dx=-2;dx<=2;dx++){ const xx=cx+dx; if(xx<0||xx>=bw) continue; sum+=black[yy*bw+xx]; cnt++; } }
      const t=sum/cnt, x0=bx*S, x1=Math.min(x0+S,w);
      for(let y=y0;y<y1;y++){ const r=y*w; for(let x=x0;x<x1;x++){ let v=gray[r+x]; if(invert) v=255-v; out[r+x]=v<=t?1:0; } }
    }
  }
  return out;
}
function qdFinderRatio(c, tol){
  const total=c[0]+c[1]+c[2]+c[3]+c[4];
  if(total<7) return false;
  const m=total/7, v=m*tol;
  return Math.abs(m-c[0])<v && Math.abs(m-c[1])<v && Math.abs(3*m-c[2])<3*v && Math.abs(m-c[3])<v && Math.abs(m-c[4])<v;
}
function qdRunsAt(bin, w, h, x, y, dx, dy, maxCount){
  const dark=(px,py)=>px>=0&&py>=0&&px<w&&py<h&&bin[py*w+px]===1;
  const inside=(px,py)=>px>=0&&py>=0&&px<w&&py<h;
  if(!dark(x,y)) return null;
  const c=[0,0,0,0,0];
  let px=x, py=y, back=0, fwd=0;
  while(dark(px,py)){ back++; px-=dx; py-=dy; if(back>maxCount*2) return null; }
  while(inside(px,py)&&!dark(px,py)&&c[1]<=maxCount){ c[1]++; px-=dx; py-=dy; }
  if(!inside(px,py)||c[1]>maxCount) return null;
  while(dark(px,py)&&c[0]<=maxCount){ c[0]++; px-=dx; py-=dy; }
  if(c[0]>maxCount) return null;
  px=x+dx; py=y+dy;
  while(dark(px,py)){ fwd++; px+=dx; py+=dy; if(fwd>maxCount*2) return null; }
  while(inside(px,py)&&!dark(px,py)&&c[3]<=maxCount){ c[3]++; px+=dx; py+=dy; }
  if(!inside(px,py)||c[3]>maxCount) return null;
  while(dark(px,py)&&c[4]<=maxCount){ c[4]++; px+=dx; py+=dy; }
  if(c[4]>maxCount) return null;
  c[2]=back+fwd;
  const off=(fwd-back+1)/2;
  return {c, cx:x+0.5+dx*off, cy:y+0.5+dy*off};
}
function qdFindFinders(bin, w, h){
  const found=[];
  const sum=(c)=>c[0]+c[1]+c[2]+c[3]+c[4];
  const tryCenter=(c, y, xEnd)=>{
    const total=sum(c), x0=Math.floor(xEnd-c[4]-c[3]-c[2]/2);
    const vr=qdRunsAt(bin,w,h,x0,y,0,1,c[2]);
    if(!vr||!qdFinderRatio(vr.c,0.5)) return;
    const vt=sum(vr.c); if(5*Math.abs(vt-total)>=2*total) return;
    const hr=qdRunsAt(bin,w,h,x0,Math.floor(vr.cy),1,0,c[2]);
    if(!hr||!qdFinderRatio(hr.c,0.5)) return;
    const ht=sum(hr.c); if(5*Math.abs(ht-total)>=2*total) return;
    const cx=hr.cx, cy=vr.cy;
    const dr=qdRunsAt(bin,w,h,Math.floor(cx),Math.floor(cy),1,1,c[2]*2);
    if(!dr||!qdFinderRatio(dr.c,0.75)) return;
    const ms=(ht+vt)/14;
    for(const f of found){
      if(Math.abs(f.x-cx)<=f.ms*1.5&&Math.abs(f.y-cy)<=f.ms*1.5&&Math.abs(f.ms-ms)<=Math.max(1,f.ms*0.5)){
        const k=f.count; f.x=(f.x*k+cx)/(k+1); f.y=(f.y*k+cy)/(k+1); f.ms=(f.ms*k+ms)/(k+1); f.count++; return; }
    }
    found.push({x:cx, y:cy, ms, count:1});
  };
  const c=[0,0,0,0,0];
  for(let y=0;y<h;y++){
    c[0]=c[1]=c[2]=c[3]=c[4]=0; let state=0;
    const row=y*w;
    for(let x=0;x<w;x++){
      if(bin[row+x]){
        if(state&1) state++;
        c[state]++;
      } else if(state&1){ c[state]++; }
      else if(state===0&&c[0]===0){ }
      else if(state===4){
        if(qdFinderRatio(c,0.5)) tryCenter(c,y,x);
        c[0]=c[2]; c[1]=c[3]; c[2]=c[4]; c[3]=1; c[4]=0; state=3;
      } else { state++; c[state]++; }
    }
    if(state===4&&qdFinderRatio(c,0.5)) tryCenter(c,y,w);
    if(found.length>200) break;
  }
  return found;
}
function qdPickTriples(cands){
  const list=cands.filter(f=>f.count>=2).sort((a,b)=>b.count-a.count).slice(0,14), out=[];
  const d=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  for(let i=0;i<list.length;i++) for(let j=i+1;j<list.length;j++) for(let k=j+1;k<list.length;k++){
    const t=[list[i],list[j],list[k]], mx=Math.max(t[0].ms,t[1].ms,t[2].ms), mn=Math.min(t[0].ms,t[1].ms,t[2].ms);
    if(mx>mn*2.3) continue;
    const dij=d(t[0],t[1]), dik=d(t[0],t[2]), djk=d(t[1],t[2]);
    let corner, p, q;
    if(djk>=dij&&djk>=dik){ corner=t[0]; p=t[1]; q=t[2]; }
    else if(dik>=dij){ corner=t[1]; p=t[0]; q=t[2]; }
    else { corner=t[2]; p=t[0]; q=t[1]; }
    const ax=p.x-corner.x, ay=p.y-corner.y, bx=q.x-corner.x, by=q.y-corner.y, la=Math.hypot(ax,ay), lb=Math.hypot(bx,by);
    if(la<1||lb<1) continue;
    const legs=Math.abs(la-lb)/Math.max(la,lb), cos=Math.abs(ax*bx+ay*by)/(la*lb), msAvg=(t[0].ms+t[1].ms+t[2].ms)/3;
    const dim=(la+lb)/2/msAvg+7;
    if(legs>0.45||cos>0.45||dim<10||dim>200) continue;
    out.push(qdOrient(corner,p,q,legs+cos+(mx/mn-1)*0.5-Math.min(corner.count+p.count+q.count,30)*0.002));
  }
  out.sort((a,b)=>a.score-b.score);
  return out.slice(0,6);
}
function qdOrient(corner, p, q, score){
  const cross=(p.x-corner.x)*(q.y-corner.y)-(p.y-corner.y)*(q.x-corner.x);
  return cross>0 ? {tl:corner, tr:p, bl:q, score} : {tl:corner, tr:q, bl:p, score};
}
function qdFinderFit(bin, w, h, cx, cy, ax, ay, bx, by, allowed){
  let miss=0, seen=0;
  for(let j=-4;j<=4;j++) for(let i=-4;i<=4;i++){
    const px=Math.floor(cx+i*ax+j*bx), py=Math.floor(cy+i*ay+j*by);
    if(px<0||py<0||px>=w||py>=h) continue;
    const ring=Math.max(Math.abs(i),Math.abs(j)), want=ring===2||ring===4 ? 0 : 1;
    seen++;
    if(bin[py*w+px]!==want&&++miss>allowed) return 0;
  }
  return seen>=60 ? 1-miss/seen : 0;
}
function qdRecoverTriples(bin, w, h, cands){
  const list=cands.filter(f=>f.count>=3).sort((a,b)=>b.count-a.count).slice(0,4), out=[];
  for(let i=0;i<list.length;i++) for(let j=i+1;j<list.length;j++){
    const A=list[i], B=list[j], d=Math.hypot(B.x-A.x,B.y-A.y);
    if(Math.max(A.ms,B.ms)>1.5*Math.min(A.ms,B.ms)||d<10) continue;
    const ux=(B.x-A.x)/d, uy=(B.y-A.y)/d, raw=(A.ms+B.ms)/2;
    const tries=[];
    // A and B on one side: the code's axes are along AB and across it
    for(const sg of [1,-1]){ tries.push([A,B,A.x-uy*d*sg,A.y+ux*d*sg,ux,uy,d]); tries.push([B,A,B.x-uy*d*sg,B.y+ux*d*sg,ux,uy,d]); }
    // A and B across the diagonal: the axes are AB turned by 45 degrees, the corner sits off the midpoint
    const r=Math.SQRT1_2, dx=(ux-uy)*r, dy=(ux+uy)*r;
    for(const sg of [1,-1]) tries.push([null,null,(A.x+B.x)/2-uy*d/2*sg,(A.y+B.y)/2+ux*d/2*sg,dx,dy,d*r]);
    for(const [corner,other,tx,ty,ex,ey,side] of tries){
      const m=raw*Math.max(Math.abs(ex),Math.abs(ey)), dim=side/m+7;
      if(dim<17||dim>190) continue;
      const ax=ex*m, ay=ey*m, bx=-ey*m, by=ex*m, reach=(2+0.06*dim)*m, step=Math.max(1,m*0.75);
      let best=0, bxp=0, byp=0;
      for(let oy=-reach;oy<=reach;oy+=step) for(let ox=-reach;ox<=reach;ox+=step){
        const sc=qdFinderFit(bin,w,h,tx+ox,ty+oy,ax,ay,bx,by,20);
        if(sc>best){ best=sc; bxp=tx+ox; byp=ty+oy; }
      }
      if(best<0.8) continue;
      let top=0, sx=0, sy=0, n=0;
      for(let oy=-step;oy<=step;oy+=0.5) for(let ox=-step;ox<=step;ox+=0.5){
        const sc=qdFinderFit(bin,w,h,bxp+ox,byp+oy,ax,ay,bx,by,16);
        if(sc>top+1e-9){ top=sc; sx=0; sy=0; n=0; }
        if(sc>=top-1e-9&&sc>0){ sx+=bxp+ox; sy+=byp+oy; n++; }
      }
      if(top<0.85) continue;
      const C={x:sx/n, y:sy/n, ms:raw, count:2};
      if(cands.some(f=>f.count>=2&&Math.hypot(f.x-C.x,f.y-C.y)<f.ms*2)) continue; // already tried as a normal triple
      out.push(corner ? qdOrient(corner,other,C,1-top) : qdOrient(C,A,B,1-top));
    }
  }
  out.sort((a,b)=>a.score-b.score);
  return out.slice(0,4);
}
function qdLineModule(bin, w, h, a, b){
  const len=Math.hypot(b.x-a.x,b.y-a.y), ux=(b.x-a.x)/len, uy=(b.y-a.y)/len;
  // half-pixel steps; the edge is taken halfway between the last dark and the first light sample
  const edge=(sx,sy)=>{
    let state=0;
    for(let i=0;i<2*len;i++){
      const px=Math.floor(a.x+sx*i/2), py=Math.floor(a.y+sy*i/2);
      if(px<0||py<0||px>=w||py>=h) return NaN;
      const dk=bin[py*w+px]===1;
      if(state===0&&!dk) state=1; else if(state===1&&dk) state=2; else if(state===2&&!dk) return i/2-0.25;
    }
    return NaN;
  };
  return (edge(ux,uy)+edge(-ux,-uy))/7;
}
function qdFitTransform(pairs){
  let sx=0, sy=0, ix=0, iy=0, smax=1, imax=1;
  for(const p of pairs){ sx+=p[0]; sy+=p[1]; ix+=p[2]; iy+=p[3]; }
  sx/=pairs.length; sy/=pairs.length; ix/=pairs.length; iy/=pairs.length;
  for(const p of pairs){ smax=Math.max(smax,Math.abs(p[0]-sx),Math.abs(p[1]-sy)); imax=Math.max(imax,Math.abs(p[2]-ix),Math.abs(p[3]-iy)); }
  const A=[]; for(let i=0;i<8;i++) A.push(new Float64Array(9));
  for(const p of pairs){
    const x=(p[0]-sx)/smax, y=(p[1]-sy)/smax, X=(p[2]-ix)/imax, Y=(p[3]-iy)/imax;
    const rows=[[x,y,1,0,0,0,-x*X,-y*X,X],[0,0,0,x,y,1,-x*Y,-y*Y,Y]];
    for(const r of rows) for(let i=0;i<8;i++){ if(r[i]===0) continue; for(let j=0;j<9;j++) A[i][j]+=r[i]*r[j]; }
  }
  for(let col=0;col<8;col++){
    let piv=col; for(let r=col+1;r<8;r++) if(Math.abs(A[r][col])>Math.abs(A[piv][col])) piv=r;
    if(Math.abs(A[piv][col])<1e-12) return null;
    const t=A[col]; A[col]=A[piv]; A[piv]=t;
    for(let r=0;r<8;r++){ if(r===col) continue; const f=A[r][col]/A[col][col]; if(f) for(let j=col;j<9;j++) A[r][j]-=f*A[col][j]; }
  }
  const q=[]; for(let i=0;i<8;i++) q.push(A[i][8]/A[i][i]);
  // Undo the normalisation: image = Ti^-1 * Q * Ts, with Ts mapping module coords to normalised ones.
  const Q=[[q[0],q[1],q[2]],[q[3],q[4],q[5]],[q[6],q[7],1]];
  const Ts=[[1/smax,0,-sx/smax],[0,1/smax,-sy/smax],[0,0,1]], Ti=[[imax,0,ix],[0,imax,iy],[0,0,1]];
  const mul=(P,R)=>{ const o=[[0,0,0],[0,0,0],[0,0,0]]; for(let i=0;i<3;i++) for(let j=0;j<3;j++) for(let k=0;k<3;k++) o[i][j]+=P[i][k]*R[k][j]; return o; };
  const M=mul(Ti,mul(Q,Ts)), z=M[2][2];
  if(!z) return null;
  return [M[0][0]/z,M[0][1]/z,M[0][2]/z,M[1][0]/z,M[1][1]/z,M[1][2]/z,M[2][0]/z,M[2][1]/z];
}
function qdApply(H, x, y){ const z=H[6]*x+H[7]*y+1; return {x:(H[0]*x+H[1]*y+H[2])/z, y:(H[3]*x+H[4]*y+H[5])/z}; }
function qdFindAlignment(bin, w, h, H, mx, my, radius){
  const p=qdApply(H,mx,my), pu=qdApply(H,mx+1,my), pv=qdApply(H,mx,my+1);
  const ux=pu.x-p.x, uy=pu.y-p.y, vx=pv.x-p.x, vy=pv.y-p.y, ms=(Math.hypot(ux,uy)+Math.hypot(vx,vy))/2;
  if(!(ms>0.8)) return null;
  const offs=[];
  for(let j=-2;j<=2;j++) for(let i=-2;i<=2;i++) offs.push([i*ux+j*vx, i*uy+j*vy, Math.max(Math.abs(i),Math.abs(j))===1?0:1]);
  const score=(cx,cy)=>{ let s=0; for(const o of offs){ const px=Math.floor(cx+o[0]), py=Math.floor(cy+o[1]); const dk=px>=0&&py>=0&&px<w&&py<h?bin[py*w+px]:0; if(dk===o[2]) s++; } return s; };
  const R=radius*ms, step=Math.max(1,Math.floor(ms/3));
  let best=-1, bx=0, by=0, bd=0;
  for(let oy=-R;oy<=R;oy+=step) for(let ox=-R;ox<=R;ox+=step){
    const s=score(p.x+ox,p.y+oy), dd=ox*ox+oy*oy;
    if(s>best||(s===best&&dd<bd)){ best=s; bx=p.x+ox; by=p.y+oy; bd=dd; }
  }
  if(best<20) return null;
  let top=-1, sx=0, sy=0, n=0;
  for(let oy=-step;oy<=step;oy++) for(let ox=-step;ox<=step;ox++){
    const s=score(bx+ox,by+oy);
    if(s>top){ top=s; sx=0; sy=0; n=0; }
    if(s===top){ sx+=bx+ox; sy+=by+oy; n++; }
  }
  if(top<21) return null;
  return {x:sx/n, y:sy/n};
}
function qdSampleGrid(bin, w, h, H, n){
  const mt=new Uint8Array(n*n), d=0.22, offs=[[0,0],[-d,-d],[d,-d],[-d,d],[d,d]];
  let outside=0;
  for(let y=0;y<n;y++) for(let x=0;x<n;x++){
    let dark=0;
    for(const o of offs){
      const mx=x+0.5+o[0], my=y+0.5+o[1], z=H[6]*mx+H[7]*my+1;
      const px=Math.floor((H[0]*mx+H[1]*my+H[2])/z), py=Math.floor((H[3]*mx+H[4]*my+H[5])/z);
      if(px<0||py<0||px>=w||py>=h){ outside++; continue; }
      dark+=bin[py*w+px];
    }
    mt[y*n+x]=dark>=3?1:0;
  }
  return outside>n*n*0.5 ? null : mt;
}
function qdTranspose(mt, n){ const t=new Uint8Array(n*n); for(let y=0;y<n;y++) for(let x=0;x<n;x++) t[x*n+y]=mt[y*n+x]; return t; }
function qdTryVersion(bin, w, h, tri, ver){
  const n=ver*4+17, tl=tri.tl, tr=tri.tr, bl=tri.bl;
  const base=[[3.5,3.5,tl.x,tl.y],[n-3.5,3.5,tr.x,tr.y],[3.5,n-3.5,bl.x,bl.y]];
  // module sizes are measured to about one pixel in seven modules, so ratios within 3.5% of 1 are treated as no perspective
  const ratio=(x)=>Math.abs(x-1)<0.035 ? 1 : Math.min(1.6,Math.max(0.6,x));
  const wx=ratio(Math.sqrt(tri.mTop/tri.mRight)), wy=ratio(Math.sqrt(tri.mLeft/tri.mBottom)), den=wx+wy-1;
  const H0=qdFitTransform(base.concat([[n-3.5,n-3.5,(wx*tr.x+wy*bl.x-tl.x)/den,(wx*tr.y+wy*bl.y-tl.y)/den]]));
  if(!H0) return null;
  // the plain parallelogram corner too: module sizes measured on small codes are rough, so it is the safer guess there
  const flat=wx===1&&wy===1, Hp=flat ? null : qdFitTransform(base.concat([[n-3.5,n-3.5,tr.x+bl.x-tl.x,tr.y+bl.y-tl.y]]));
  const maps=[];
  if(ver>=2){
    const ap=qdFindAlignment(bin,w,h,H0,n-6.5,n-6.5,Math.max(4,n/10))||(Hp&&qdFindAlignment(bin,w,h,Hp,n-6.5,n-6.5,Math.max(4,n/10)));
    if(ap){
      const H1=qdFitTransform(base.concat([[n-6.5,n-6.5,ap.x,ap.y]]));
      if(H1){
        if(ver>=7){ const H2=qdRefine(bin,w,h,H1,base,ver); if(H2) maps.push(H2); }
        maps.push(H1);
      }
    } else if(ver>=7){ const H2=qdRefine(bin,w,h,H0,base,ver); if(H2) maps.push(H2); }
  }
  maps.push(H0);
  if(Hp) maps.push(Hp);
  // A map that decodes with no fixes is taken at once; otherwise the one needing the fewest fixes wins (all decodes that pass
  // Reed-Solomon give the same data, but the best map is the one a caller can trust for the corners).
  let best=null;
  for(const H of maps){
    const mt=qdSampleGrid(bin,w,h,H,n);
    if(!mt) continue;
    let r=qdDecodeMatrix(mt,n), mirrored=false;
    if(r&&!r.bytes) return r;
    if(!r){ r=qdDecodeMatrix(qdTranspose(mt,n),n); mirrored=true; if(r&&!r.bytes) return r; }
    if(r&&(!best||r.fixed<best.fixed)){
      const c=(x,y)=>{ const p=qdApply(H,x,y); return {x:p.x, y:p.y}; };
      r.corners=mirrored ? {topLeft:c(0,0), topRight:c(0,n), bottomRight:c(n,n), bottomLeft:c(n,0)}
                         : {topLeft:c(0,0), topRight:c(n,0), bottomRight:c(n,n), bottomLeft:c(0,n)};
      best=r;
      if(r.fixed===0) break;
    }
  }
  if(best) delete best.fixed;
  return best;
}
function qdRefine(bin, w, h, H, base, ver){
  const ap=qdAlignPositions(ver), pairs=base.slice(), last=ap.length-1, todo=[];
  for(let i=0;i<ap.length;i++) for(let j=0;j<ap.length;j++){
    if((i===0&&j===0)||(i===0&&j===last)||(i===last&&j===0)) continue;
    todo.push([ap[i]+0.5,ap[j]+0.5]);
  }
  todo.sort((a,b)=>Math.max(a[0],a[1])-Math.max(b[0],b[1])||a[0]+a[1]-b[0]-b[1]);
  let cur=H, found=0;
  for(const [mx,my] of todo){
    const f=qdFindAlignment(bin,w,h,cur,mx,my,2.5);
    if(!f) continue;
    pairs.push([mx,my,f.x,f.y]); found++;
    if(pairs.length>=4){ const H2=qdFitTransform(pairs); if(H2) cur=H2; }
  }
  return found>=3 ? cur : null;
}
function qdFinderFrame(tri){
  const lt=Math.hypot(tri.tr.x-tri.tl.x,tri.tr.y-tri.tl.y), ll=Math.hypot(tri.bl.x-tri.tl.x,tri.bl.y-tri.tl.y);
  return {ux:(tri.tr.x-tri.tl.x)/lt, uy:(tri.tr.y-tri.tl.y)/lt, vx:(tri.bl.x-tri.tl.x)/ll, vy:(tri.bl.y-tri.tl.y)/ll};
}
function qdSampleNear(bin, w, h, f, c, m, dx, dy){
  let dark=0;
  for(const [ox,oy] of [[0,0],[-0.22,-0.22],[0.22,-0.22],[-0.22,0.22],[0.22,0.22]]){
    const px=Math.floor(c.x+((dx+ox)*f.ux+(dy+oy)*f.vx)*m), py=Math.floor(c.y+((dx+ox)*f.uy+(dy+oy)*f.vy)*m);
    if(px>=0&&py>=0&&px<w&&py<h) dark+=bin[py*w+px];
  }
  return dark>=3?1:0;
}
function qdVersionNearFinders(bin, w, h, tri){
  const f=qdFinderFrame(tri);
  let a=0, b=0;
  for(let i=0;i<18;i++){
    a|=qdSampleNear(bin,w,h,f,tri.tr,tri.sizeTR,i%3-7,Math.floor(i/3)-3)<<i;
    b|=qdSampleNear(bin,w,h,f,tri.bl,tri.sizeBL,Math.floor(i/3)-3,i%3-7)<<i;
  }
  let best=0, bestDist=99;
  for(let k=0;k<qdVersionWords.length;k++){ const d=Math.min(qdBitCount(a^qdVersionWords[k]),qdBitCount(b^qdVersionWords[k])); if(d<bestDist){ bestDist=d; best=k+7; } }
  return bestDist<=3 ? best : 0;
}
function qdTimingSize(bin, w, h, a, b, ms){
  const len=Math.hypot(b.x-a.x,b.y-a.y), steps=Math.ceil(len/Math.min(1,ms/4));
  if(!(steps>0)||steps>20000) return 0;
  const runs=[];
  let cur=-1, run=0;
  for(let i=0;i<=steps;i++){
    const px=Math.floor(a.x+(b.x-a.x)*i/steps), py=Math.floor(a.y+(b.y-a.y)*i/steps);
    if(px<0||py<0||px>=w||py>=h) return 0;
    const v=bin[py*w+px];
    if(v===cur) run++; else { if(cur>=0) runs.push([cur,run]); cur=v; run=1; }
  }
  runs.push([cur,run]);
  // runs shorter than a third of a module are noise: give them the colour before them, then join equal neighbours
  const minRun=ms/3*steps/len, clean=[];
  for(const r of runs){
    const col=(r[1]<minRun&&clean.length) ? clean[clean.length-1][0] : r[0];
    if(clean.length&&clean[clean.length-1][0]===col) clean[clean.length-1][1]+=r[1]; else clean.push([col,r[1]]);
  }
  let dark=0; for(const r of clean) if(r[0]===1) dark++;
  const n=2*dark+11;
  return n>=21&&n<=177&&(n-17)%4===0 ? n : 0;
}
function qdDecodeBinary(bin, w, h, seen){
  const cands=qdFindFinders(bin,w,h);
  if(seen) seen.finders+=cands.filter(f=>f.count>=2).length;
  for(const tri of qdPickTriples(cands)){ const r=qdDecodeTriple(bin,w,h,tri); if(r) return r; }
  for(const tri of qdRecoverTriples(bin,w,h,cands)){ const r=qdDecodeTriple(bin,w,h,tri); if(r) return r; }
  return null;
}
function qdDecodeTriple(bin, w, h, tri){
  // Module size, measured at each finder along each leg: top at TL, right end at TR, left at TL, bottom end at BL.
  // The finder's own size (from its row and column runs, averaged over many rows) is stretched by 1/max(|cos|,|sin|) of
  // the code's rotation; undone here, it checks the line measurements, which a few noisy pixels can throw off.
  const f0=qdFinderFrame(tri), tilt=Math.max(Math.abs(f0.ux),Math.abs(f0.uy));
  const legs=[[tri.tl,tri.tr],[tri.tr,tri.tl],[tri.tl,tri.bl],[tri.bl,tri.tl]], sizes=[];
  let ms=0, cnt=0;
  for(const [a,b] of legs){
    const m=qdLineModule(bin,w,h,a,b), ok=m>0&&m<a.ms*tilt*1.25&&m>a.ms*tilt/1.25;
    sizes.push(ok?m:0); if(ok){ ms+=m; cnt++; }
  }
  const msF=(tri.tl.ms+tri.tr.ms+tri.bl.ms)/3*tilt;
  ms=cnt ? (ms/cnt+msF)/2 : msF;
  const pick=(k,l)=>sizes[k]&&sizes[l] ? [sizes[k],sizes[l]] : [1,1];
  [tri.mTop,tri.mRight]=pick(0,1); [tri.mLeft,tri.mBottom]=pick(2,3);
  tri.sizeTL=sizes[0]&&sizes[2] ? (sizes[0]+sizes[2])/2 : sizes[0]||sizes[2]||ms;
  tri.sizeTR=sizes[1]||ms; tri.sizeBL=sizes[3]||ms;
  // candidate sizes: version info, the two timing patterns, then the distance between finders over the module size
  const f=qdFinderFrame(tri), queue=[];
  const at=(c,m,dx,dy)=>({x:c.x+(dx*f.ux+dy*f.vx)*m, y:c.y+(dx*f.uy+dy*f.vy)*m});
  const start=at(tri.tl,tri.sizeTL,3,3);
  const nTop=qdTimingSize(bin,w,h,start,at(tri.tr,tri.sizeTR,-3,3),ms), nLeft=qdTimingSize(bin,w,h,start,at(tri.bl,tri.sizeBL,3,-3),ms);
  const top=Math.hypot(tri.tr.x-tri.tl.x,tri.tr.y-tri.tl.y)/ms, left=Math.hypot(tri.bl.x-tri.tl.x,tri.bl.y-tri.tl.y)/ms;
  const guess=Math.round(((top+left)/2+7-17)/4), near=(n)=>n&&Math.abs((n-17)/4-guess)<=Math.max(2,guess*0.2);
  // order: version info (BCH-checked), both timing patterns agreeing, the distance estimate, single timing counts, neighbours
  if(guess>=6||(nTop>=45&&nTop===nLeft)){ const vi=qdVersionNearFinders(bin,w,h,tri); if(vi) queue.push(vi); }
  if(nTop&&nTop===nLeft&&near(nTop)) queue.push((nTop-17)/4);
  queue.push(guess);
  for(const n of [nTop,nLeft]) if(near(n)) queue.push((n-17)/4);
  queue.push(guess-1,guess+1);
  const tried={};
  let redirects=0;
  while(queue.length){
    const v=queue.shift();
    if(v<1||v>40||tried[v]) continue;
    tried[v]=true;
    const r=qdTryVersion(bin,w,h,tri,v);
    if(r&&r.bytes) return r;
    if(r&&r.version&&!tried[r.version]&&redirects++<2) queue.unshift(r.version);
  }
  return null;
}
function qdSmooth(gray, w, h){
  const row=new Uint16Array(w*h), out=new Uint8Array(w*h);
  for(let y=0;y<h;y++){ const r=y*w; for(let x=0;x<w;x++) row[r+x]=gray[r+(x>0?x-1:x)]+2*gray[r+x]+gray[r+(x<w-1?x+1:x)]; }
  for(let y=0;y<h;y++){ const up=(y>0?y-1:y)*w, r=y*w, dn=(y<h-1?y+1:y)*w; for(let x=0;x<w;x++) out[r+x]=(row[up+x]+2*row[r+x]+row[dn+x]+8)>>4; }
  return out;
}
function qrDecodeGray(gray, width, height){
  try {
    const w=width|0, h=height|0;
    if(!gray||w<21||h<21||gray.length<w*h) return null;
    const seen={finders:0};
    let src=gray;
    for(let pass=0;pass<4;pass++){
      if(pass===2){ if(!seen.finders) break; src=qdSmooth(gray,w,h); }
      const r=qdDecodeBinary(qdBinarize(src,w,h,pass%2===1),w,h,seen);
      if(r) return r;
    }
  } catch(e){ }
  return null;
}
function qrDecodeRgba(rgba, width, height){
  const w=width|0, h=height|0;
  if(!rgba||w<1||h<1||rgba.length<w*h*4) return null;
  const gray=new Uint8Array(w*h);
  for(let i=0,j=0;i<w*h;i++,j+=4) gray[i]=(rgba[j]*299+rgba[j+1]*587+rgba[j+2]*114+500)/1000;
  return qrDecodeGray(gray,w,h);
}
async function walletAddressesFrom(root, steps, type, net, chain, from, n){
  let [k,c] = root;
  for(const [i,h] of steps.concat([[chain, false]])) [k,c] = await ckdPriv(k,c,i,h);
  const base = "m" + steps.map(([i,h]) => "/" + i + (h ? "'" : "")).join("") + "/" + chain + "/";
  const out = [];
  for(let i = from; i < from + n && i <= 2147483647; i++){ const [ck] = await ckdPriv(k,c,i,false); out.push({index:i, path: base + i, address: await addressFromKey(type, ck, net)}); }
  return out;
}
function concatBytes(...parts){ const o = new Uint8Array(parts.reduce((a, x) => a + x.length, 0)); let i = 0; for(const x of parts){ o.set(x, i); i += x.length; } return o; }
const le32 = (n) => Uint8Array.of(n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255);
function varintBytes(n){ return Uint8Array.from(n < 0xfd ? [n] : n <= 0xffff ? [0xfd, n & 255, n >>> 8] : [0xfe, n & 255, (n >>> 8) & 255, (n >>> 16) & 255, n >>> 24]); }
const bigOf = (b) => b.length ? BigInt("0x" + hex(b)) : 0n;
const nmod = (a) => ((a % SN) + SN) % SN;
function ninv(a){ let r0 = nmod(a), r1 = SN, s0 = 1n, s1 = 0n; while(r1 !== 0n){ const q = r0 / r1; [r0, r1] = [r1, r0 - q * r1]; [s0, s1] = [s1, s0 - q * s1]; } return nmod(s0); }
async function dsha256(b){ return sha256bytes(await sha256bytes(b)); }
function b64bytes(str){
  const t = String(str || "");
  if(!t || t.length % 4 || !/^[A-Za-z0-9+/]+={0,2}$/.test(t)) return null;
  try { return Uint8Array.from(atob(t), c => c.charCodeAt(0)); } catch(e) { return null; }
}
function segwitDecode(addr){
  const a = String(addr || "").toLowerCase(), p = a.lastIndexOf("1");
  if(p < 1 || a.length - p < 8 || a !== String(addr).trim().toLowerCase() || (addr !== addr.toLowerCase() && addr !== addr.toUpperCase())) return null;
  const data = Array.from(a.slice(p + 1, -6), ch => B32.indexOf(ch));
  if(!data.length || data.some(v => v < 0) || data[0] > 16) return null;
  const prog = []; let acc = 0, bits = 0;
  for(const v of data.slice(1)){ acc = (acc << 5) | v; bits += 5; if(bits >= 8){ bits -= 8; prog.push((acc >> bits) & 255); } acc &= (1 << bits) - 1; }
  if(bits >= 5 || acc) return null;
  const out = {hrp: a.slice(0, p), version: data[0], prog: Uint8Array.from(prog)};
  if(prog.length < 2 || prog.length > 40 || bech32Encode(out.hrp, out.version, out.prog) !== a) return null;
  return out;
}
function derParse(b){
  if(b.length < 8 || b.length > 72 || b[0] !== 0x30 || b[1] !== b.length - 2) return null;
  let i = 2;
  const int = () => { if(b[i] !== 0x02) return null; const n = b[i + 1]; if(!n || n > 33 || i + 2 + n > b.length) return null; const v = b.slice(i + 2, i + 2 + n);
    if(v[0] & 0x80) return null; if(n > 1 && v[0] === 0 && !(v[1] & 0x80)) return null; i += 2 + n; return bigOf(v); };
  const r = int(); if(r === null) return null; const s = int(); if(s === null || i !== b.length) return null;
  return {r, s};
}
function ecdsaVerify(z, r, s, P){
  if(r <= 0n || r >= SN || s <= 0n || s >= SN) return false;
  const w = ninv(s), X = eadd(emul(nmod(z * w), SG), emul(nmod(r * w), P));
  return !!X && nmod(X[0]) === r;
}
function ecRecover(z, r, s, recid){
  if(r <= 0n || r >= SN || s <= 0n || s >= SN) return null;
  const R = liftX(r + ((recid & 2) ? SN : 0n), (recid & 1) === 1); if(!R) return null;
  const ri = ninv(r);
  return eadd(emul(nmod(-z * ri), SG), emul(nmod(s * ri), R));
}
async function schnorrVerify(m32, px32, sig64){
  const P = liftX(bigOf(px32), false); if(!P) return false;
  const r = bigOf(sig64.slice(0, 32)), s = bigOf(sig64.slice(32, 64));
  if(r >= SP || s >= SN) return false;
  const e = nmod(bigOf(await taggedHash("BIP0340/challenge", concatBytes(sig64.slice(0, 32), px32, m32))));
  const R = eadd(emul(s, SG), emul(nmod(-e), P));
  return !!R && (R[1] & 1n) === 0n && R[0] === r;
}
async function msgHashLegacy(msg){
  const m = new TextEncoder().encode(msg), pre = new TextEncoder().encode("\x18Bitcoin Signed Message:\n");
  return dsha256(concatBytes(pre, varintBytes(m.length), m));
}
async function bip322Parts(msg, spk){
  const mh = await taggedHash("BIP0322-signed-message", new TextEncoder().encode(msg));
  const toSpend = concatBytes(le32(0), Uint8Array.of(1), new Uint8Array(32), le32(0xffffffff), Uint8Array.of(34, 0x00, 0x20), mh, le32(0), Uint8Array.of(1), new Uint8Array(8), varintBytes(spk.length), spk, le32(0));
  const txid = await dsha256(toSpend), outputs = concatBytes(new Uint8Array(8), Uint8Array.of(1, 0x6a));
  const toSign = concatBytes(le32(0), Uint8Array.of(1), txid, le32(0), Uint8Array.of(0), le32(0), Uint8Array.of(1), outputs, le32(0));
  return {mh, txid, toSignId: await dsha256(toSign), outpoint: concatBytes(txid, le32(0)), outputs};
}
async function bip322SighashWpkh(parts, h160){ // BIP143, SIGHASH_ALL, amount 0, sequence 0
  const code = concatBytes(Uint8Array.of(0x19, 0x76, 0xa9, 0x14), h160, Uint8Array.of(0x88, 0xac));
  return dsha256(concatBytes(le32(0), await dsha256(parts.outpoint), await dsha256(le32(0)), parts.outpoint, code, new Uint8Array(8), le32(0), await dsha256(parts.outputs), le32(0), le32(1)));
}
async function bip322SighashTr(parts, spk, hashType){ // BIP341 key path, one input, amount 0
  const m = concatBytes(Uint8Array.of(0x00, hashType), le32(0), le32(0), await sha256bytes(parts.outpoint), await sha256bytes(new Uint8Array(8)),
    await sha256bytes(concatBytes(varintBytes(spk.length), spk)), await sha256bytes(le32(0)), await sha256bytes(parts.outputs), Uint8Array.of(0x00), le32(0));
  return taggedHash("TapSighash", m);
}
function witnessParse(b){
  let i = 0;
  const vi = () => { const f = b[i++]; if(f === undefined) throw new Error("short"); if(f < 0xfd) return f; if(f === 0xfd && i + 2 <= b.length){ const v = b[i] | (b[i + 1] << 8); i += 2; if(v < 0xfd) throw new Error("not minimal"); return v; } throw new Error("too long"); };
  const n = vi(), items = [];
  for(let k = 0; k < n; k++){ const len = vi(); if(i + len > b.length) throw new Error("short"); items.push(b.slice(i, i + len)); i += len; }
  if(i !== b.length) throw new Error("extra bytes");
  return items;
}
function looksLikeFull(b){
  if(b.length >= 5 && b[0] === 0x70 && b[1] === 0x73 && b[2] === 0x62 && b[3] === 0x74 && b[4] === 0xff) return true;
  return b.length >= 60 && b[0] <= 2 && b[1] === 0 && b[2] === 0 && b[3] === 0;
}
async function sigCheckOnce(addr, type, net, msg, b, simple){
  if(!simple){
    const h = b[0], recid = (h - 27) & 3, compressed = h >= 31;
    if(!compressed && type !== "pkh") return false;
    const Q = ecRecover(bigOf(await msgHashLegacy(msg)), bigOf(b.slice(1, 33)), bigOf(b.slice(33, 65)), recid);
    if(!Q) return false;
    const pub = compressed ? pubFromPoint(Q) : concatBytes(Uint8Array.of(4), fromHex(Q[0].toString(16).padStart(64, "0")), fromHex(Q[1].toString(16).padStart(64, "0")));
    const got = type === "pkh" ? await base58check(concatBytes(Uint8Array.of(NETS[net].pkh), await hash160(pub))) : await addressFromPub(type, pub, net);
    return got === addr;
  }
  const dec = segwitDecode(addr), spk = concatBytes(Uint8Array.of(dec.version ? 0x50 + dec.version : 0, dec.prog.length), dec.prog);
  let items; try { items = witnessParse(b); } catch(e) { return false; }
  const parts = await bip322Parts(msg, spk);
  if(type === "wpkh"){
    if(items.length !== 2 || items[1].length !== 33 || (items[1][0] !== 2 && items[1][0] !== 3) || hex(await hash160(items[1])) !== hex(dec.prog)) return false;
    const sig = items[0]; if(sig.length < 9 || sig[sig.length - 1] !== 1) return false;
    const d = derParse(sig.slice(0, -1)); if(!d || d.s > SN / 2n) return false;
    const P = liftX(bigOf(items[1].slice(1)), items[1][0] === 3); if(!P) return false;
    return ecdsaVerify(bigOf(await bip322SighashWpkh(parts, dec.prog)), d.r, d.s, P);
  }
  if(items.length !== 1) return items.length > 1 ? "a Taproot script-path signature (or one with an annex). This page checks Taproot key-path signatures only." : false;
  const sig = items[0]; if(sig.length !== 64 && !(sig.length === 65 && sig[64] === 1)) return false;
  return schnorrVerify(await bip322SighashTr(parts, spk, sig.length === 65 ? 1 : 0), dec.prog, sig.slice(0, 64));
}
async function verifyMessage(addrIn, msgIn, sigIn){
  const raw = String(addrIn || "").trim(), addr = /^(bc1|tb1)/i.test(raw) && raw === raw.toUpperCase() ? raw.toLowerCase() : raw;  // QR codes often show bech32 in capitals
  const type = addressTypeOf(addr), msg = String(msgIn == null ? "" : msgIn);
  let st = String(sigIn || "").replace(/\s+/g, "");
  if(!type || (/^(bc1|tb1)/i.test(addr) ? !segwitDecode(addr) : !/^[1-9A-HJ-NP-Za-km-z]{25,35}$/.test(addr))) return {state: "error", text: "That is not a Bitcoin address this page can check (1..., 3..., bc1q..., bc1p..., or testnet m..., n..., 2..., tb1...). Check it for typos."};
  if(!/^(bc1|tb1)/i.test(addr)){ try { const pl = await base58decode(addr); if(pl.length !== 21) throw new Error("length"); } catch(e) { return {state: "error", text: "That address has a typo: its checksum does not match."}; } }
  if(!st) return {state: "error", text: "Paste the signature."};
  const pre = st.slice(0, 3);
  if(pre === "ful" || pre === "pof") return {state: "cannot", text: "CANNOT CHECK: this is a BIP322 “" + (pre === "ful" ? "full" : "proof of funds") + "” signature. This page checks classic signatures and BIP322 “simple” ones only. Check it in a wallet that supports it."};
  let simple = false; if(pre === "smp"){ simple = true; st = st.slice(3); }
  const b = b64bytes(st); if(!b) return {state: "error", text: "The signature is not valid base64. Paste it exactly as the wallet gave it."};
  if(!simple && !(b.length === 65 && b[0] >= 27 && b[0] <= 42)){
    // No prefix and not a classic signature. A whole transaction or PSBT is a BIP322 "full" or "proof of funds" signature from a
    // wallet made before the prefixes existed; otherwise BIP322 says a verifier may assume "simple" (native SegWit addresses only).
    if(looksLikeFull(b)) return {state: "cannot", text: "CANNOT CHECK: this looks like a BIP322 \u201cfull\u201d signature (a whole transaction) without its ful prefix. This page checks classic signatures and BIP322 \u201csimple\u201d ones only."};
    if(type === "pkh" || type === "sh-wpkh") return {state: "error", text: b.length === 65 ? "This classic signature is damaged: its first byte must be 27 to 42. Paste it exactly as the wallet gave it." : "This is not a classic signature (65 bytes, about 88 characters of base64). Paste it exactly as the wallet gave it."};
    simple = true;
  }
  const sw = segwitDecode(addr);
  if(sw && !((sw.version === 0 && sw.prog.length === 20) || (sw.version === 1 && sw.prog.length === 32))) return {state: "cannot", text: "CANNOT CHECK: this looks like a script address (such as multisig). This page checks single-key addresses only."};
  if(!simple && type === "tr") return {state: "cannot", text: "CANNOT CHECK: Taproot (bc1p...) addresses do not use the classic signature format. Ask for a BIP322 signature, which this page checks."};
  if(simple && (type === "pkh" || type === "sh-wpkh")) return {state: "cannot", text: "CANNOT CHECK: a BIP322 signature for a " + (type === "pkh" ? "1..." : "3...") + " address must use the “full” format, which this page does not check. (For these addresses, the classic format is checked here.)"};
  // If the exact text fails: Windows line breaks either way (a text box always gives \n), spaces or line breaks at the ends, a final line break.
  const variants = [msg], n1 = msg.replace(/\r\n/g, "\n");
  for(const v of [n1, msg.trim(), n1.trim(), n1.replace(/\n/g, "\r\n"), n1 + "\n", n1.replace(/\n/g, "\r\n") + "\r\n"]) if(!variants.includes(v)) variants.push(v);
  for(let k = 0; k < variants.length; k++){
    const r = await sigCheckOnce(addr, type, addressNetOf(addr), variants[k], b, simple);
    if(typeof r === "string") return {state: "cannot", text: "CANNOT CHECK: this is " + r};
    if(r !== true) continue;
    const test = addressNetOf(addr) === "test", kinds = {"pkh": "Legacy (" + (test ? "m... or n..." : "1...") + ")", "sh-wpkh": "Nested SegWit (" + (test ? "2..." : "3...") + ")", "wpkh": "Native SegWit (" + (test ? "tb1q..." : "bc1q...") + ")", "tr": "Taproot (" + (test ? "tb1p..." : "bc1p...") + ")"};
    let fmt;
    if(simple) fmt = "BIP322 simple, " + kinds[type] + (pre === "smp" ? "" : ", without the smp prefix that newer wallets add");
    else { const h = b[0], hk = h <= 30 ? "pkh-u" : h <= 34 ? "pkh" : h <= 38 ? "sh-wpkh" : "wpkh";
      fmt = "classic (BIP137), " + kinds[type] + (hk === type ? "" : hk === "pkh-u" ? ", uncompressed key" : hk === "pkh" ? ", with the legacy header that Electrum and Sparrow use for every address type (Bitcoin Core checks 1... addresses only)" : ", although the header names a different address type"); }
    return {state: "valid", variant: k > 0, text: (k ? "VALID, after a small change to the message: the key of " + addr + " signed it once spaces or line breaks at its start or end are removed or added, or its line breaks are written the Windows way. Make sure that is the text you expect." : "VALID: the key of " + addr + " signed exactly this message.") +
      "\nFormat: " + fmt + ".\nA signature shows that whoever holds this address's key signed the message. It does not show who that is, or that any coins are still there."};
  }
  return {state: "invalid", text: "NOT VALID: this signature does not match this address and this message.\nCheck the address, the signature and every character of the message, including spaces and line breaks. A message signed for a different address, or changed after signing, fails here."};
}
const SV_MAX_CHECKS = 120, SV_MAX_BYTES = 8000000, SV_OVER = {over: true};
const SV_TR_TYPES = [0x00, 0x01, 0x02, 0x03, 0x81, 0x82, 0x83];
function svCat(parts){ let n = 0; for(const x of parts) n += x.length; const o = new Uint8Array(n); let i = 0; for(const x of parts){ o.set(x, i); i += x.length; } return o; }
function svLe64(v){ let x = BigInt.asUintN(64, BigInt(v)); const o = new Uint8Array(8); for(let i = 0; i < 8; i++){ o[i] = Number(x & 255n); x >>= 8n; } return o; }
const svOut = (o) => svCat([svLe64(o.amount), varintBytes(o.script.length), o.script]);
const svYield = () => new Promise(r => setTimeout(r, 0));
function svWork(ctx, checks, bytes){ ctx.left -= checks; ctx.bytes += bytes; if(ctx.left < 0 || ctx.bytes > SV_MAX_BYTES) throw SV_OVER; }
async function svHash2(ctx, b){ svWork(ctx, 0, b.length); return dsha256(b); }
async function svHash1(ctx, b){ svWork(ctx, 0, b.length); return sha256bytes(b); }
function svTxModel(bytes){
  const r = psbtReader(bytes), tx = {version: r.u32(), ins: [], outs: []}; let n = r.varint(), seg = false;
  if(n === 0){ if(r.byte() !== 1) throw new Error("not a transaction"); seg = true; n = r.varint(); }
  for(let i = 0; i < n; i++){ const prev = r.bytes(32), vout = r.u32(), ss = r.bytes(r.varint()); tx.ins.push({prev, vout, ss, seq: r.u32(), wit: []}); }
  n = r.varint(); for(let i = 0; i < n; i++){ const amount = r.i64(); tx.outs.push({amount, script: r.bytes(r.varint())}); }
  if(seg) for(const x of tx.ins){ const k = r.varint(); for(let j = 0; j < k; j++) x.wit.push(r.bytes(r.varint())); }
  tx.locktime = r.u32(); if(!r.done) throw new Error("not a transaction");
  return tx;
}
function svCtx(tx, coins, why){ return {tx, coins, why: why || [], all: coins.length === tx.ins.length && coins.every(Boolean), left: SV_MAX_CHECKS, bytes: 0, cache: {}}; }
function svScriptCode(s){
  const seg = []; let pc = 0, from = 0, n = 0;
  while(pc < s.length){
    const op = s[pc++]; let size = 0, ok = true;
    if(op <= 0x4e){
      if(op < 0x4c) size = op;
      else if(op === 0x4c){ if(pc + 1 > s.length) ok = false; else { size = s[pc]; pc += 1; } }
      else if(op === 0x4d){ if(pc + 2 > s.length) ok = false; else { size = s[pc] | (s[pc + 1] << 8); pc += 2; } }
      else { if(pc + 4 > s.length) ok = false; else { size = (s[pc] | (s[pc + 1] << 8) | (s[pc + 2] << 16) | (s[pc + 3] << 24)) >>> 0; pc += 4; } }
      if(ok && s.length - pc < size) ok = false;
      if(!ok) break;
      pc += size;
    }
    if(op === 0xab){ seg.push(s.slice(from, pc - 1)); from = pc; n++; }
  }
  if(from !== s.length) seg.push(s.slice(from, pc));
  return svCat([varintBytes(s.length - n), ...seg]);
}
async function svSighashLegacy(ctx, i, script, ht){
  (ctx.legacy || (ctx.legacy = new Set())).add(i);   // v2.10.0 review: this hash does not cover the amount
  const tx = ctx.tx, base = ht & 0x1f, acp = (ht & 0x80) !== 0;
  if(base === 3 && i >= tx.outs.length){ const one = new Uint8Array(32); one[0] = 1; return one; }   // the SIGHASH_SINGLE quirk: the "hash" is the number 1
  const p = [le32(tx.version)], ins = acp ? [i] : tx.ins.map((_, j) => j);
  p.push(varintBytes(ins.length));
  for(const j of ins){ const x = tx.ins[j]; p.push(x.prev, le32(x.vout), j === i ? svScriptCode(script) : Uint8Array.of(0), le32(j !== i && (base === 2 || base === 3) ? 0 : x.seq)); }
  if(base === 2) p.push(Uint8Array.of(0));
  else if(base === 3){ p.push(varintBytes(i + 1)); for(let j = 0; j < i; j++) p.push(new Uint8Array(8).fill(255), Uint8Array.of(0)); p.push(svOut(tx.outs[i])); }
  else { p.push(varintBytes(tx.outs.length)); for(const o of tx.outs) p.push(svOut(o)); }
  p.push(le32(tx.locktime), le32(ht));
  return svHash2(ctx, svCat(p));
}
async function svSighashV0(ctx, i, scriptCode, amount, ht){   // BIP143
  const tx = ctx.tx, c = ctx.cache, base = ht & 0x1f, acp = (ht & 0x80) !== 0, z = new Uint8Array(32), x = tx.ins[i];
  if(!acp && !c.v0p) c.v0p = await svHash2(ctx, svCat(tx.ins.flatMap(y => [y.prev, le32(y.vout)])));
  if(!acp && base !== 2 && base !== 3 && !c.v0s) c.v0s = await svHash2(ctx, svCat(tx.ins.map(y => le32(y.seq))));
  if(base !== 2 && base !== 3 && !c.v0o) c.v0o = await svHash2(ctx, svCat(tx.outs.map(svOut)));
  const ho = (base !== 2 && base !== 3) ? c.v0o : (base === 3 && i < tx.outs.length) ? await svHash2(ctx, svOut(tx.outs[i])) : z;
  return svHash2(ctx, svCat([le32(tx.version), acp ? z : c.v0p, (acp || base === 2 || base === 3) ? z : c.v0s, x.prev, le32(x.vout),
    varintBytes(scriptCode.length), scriptCode, svLe64(amount), le32(x.seq), ho, le32(tx.locktime), le32(ht)]));
}
async function svSighashTr(ctx, i, ht, ext){
  const tx = ctx.tx, c = ctx.cache, out = ht === 0 ? 1 : ht & 3, acp = (ht & 0x80) !== 0, e = ext || {};
  if(!SV_TR_TYPES.includes(ht) || (out === 3 && i >= tx.outs.length)) return null;
  const p = [Uint8Array.of(0x00, ht), le32(tx.version), le32(tx.locktime)];
  if(!acp){
    if(!c.trp){ c.trp = await svHash1(ctx, svCat(tx.ins.flatMap(y => [y.prev, le32(y.vout)]))); c.tra = await svHash1(ctx, svCat(ctx.coins.map(k => svLe64(k.amount))));
      c.trs = await svHash1(ctx, svCat(ctx.coins.flatMap(k => [varintBytes(k.script.length), k.script]))); c.trq = await svHash1(ctx, svCat(tx.ins.map(y => le32(y.seq)))); }
    p.push(c.trp, c.tra, c.trs, c.trq);
  }
  if(out === 1){ if(!c.tro) c.tro = await svHash1(ctx, svCat(tx.outs.map(svOut))); p.push(c.tro); }
  p.push(Uint8Array.of((e.leaf ? 2 : 0) + (e.annex ? 1 : 0)));
  if(acp){ const x = tx.ins[i], k = ctx.coins[i]; p.push(x.prev, le32(x.vout), svLe64(k.amount), varintBytes(k.script.length), k.script, le32(x.seq)); }
  else p.push(le32(i));
  if(e.annex) p.push(await svHash1(ctx, svCat([varintBytes(e.annex.length), e.annex])));
  if(out === 3) p.push(await svHash1(ctx, svOut(tx.outs[i])));
  if(e.leaf) p.push(e.leaf, Uint8Array.of(0x00), le32(e.codesep === undefined ? 0xffffffff : e.codesep));
  const msg = svCat(p); svWork(ctx, 0, msg.length);
  return taggedHash("TapSighash", msg);
}
function svDg(f){ const memo = new Map(); return async (ht) => { if(!memo.has(ht)) memo.set(ht, await f(ht)); return memo.get(ht); }; }
function svPush(d){ // the plain (minimal) push of d
  if(d.length === 0) return Uint8Array.of(0);
  if(d.length === 1 && d[0] >= 1 && d[0] <= 16) return Uint8Array.of(0x50 + d[0]);
  if(d.length === 1 && d[0] === 0x81) return Uint8Array.of(0x4f);
  if(d.length <= 75) return svCat([Uint8Array.of(d.length), d]);
  if(d.length <= 255) return svCat([Uint8Array.of(0x4c, d.length), d]);
  return svCat([Uint8Array.of(0x4d, d.length & 255, d.length >>> 8), d]);
}
function svPushList(s){ // {items, minimal} for a script that only pushes data, or null
  const items = []; let i = 0, minimal = true;
  while(i < s.length){
    const at = i, op = s[i++]; let n;
    if(op === 0 || op === 0x4f || (op >= 0x51 && op <= 0x60)){ items.push(op === 0 ? new Uint8Array(0) : Uint8Array.of(op === 0x4f ? 0x81 : op - 0x50)); continue; }
    if(op <= 75) n = op;
    else if(op === 0x4c){ if(i + 1 > s.length) return null; n = s[i]; i += 1; }
    else if(op === 0x4d){ if(i + 2 > s.length) return null; n = s[i] | (s[i + 1] << 8); i += 2; }
    else if(op === 0x4e){ if(i + 4 > s.length) return null; n = (s[i] | (s[i + 1] << 8) | (s[i + 2] << 16) | (s[i + 3] << 24)) >>> 0; i += 4; }
    else return null;
    if(i + n > s.length) return null;
    const d = s.slice(i, i + n); i += n; items.push(d);
    if(!eqBytes(svPush(d), s.slice(at, i))) minimal = false;
  }
  return {items, minimal};
}
function svHasCodesep(s){ let i = 0; while(i < s.length){ const op = s[i++]; if(op === 0xab) return true; if(op >= 1 && op <= 75) i += op; else if(op === 0x4c) i += 1 + (s[i] || 0); else if(op === 0x4d) i += 2 + ((s[i] || 0) | ((s[i + 1] || 0) << 8)); else if(op === 0x4e) return true; } return false; }
const svIsP2pkh = (s) => s.length === 25 && s[0] === 0x76 && s[1] === 0xa9 && s[2] === 20 && s[23] === 0x88 && s[24] === 0xac;
const svIsP2sh = (s) => s.length === 23 && s[0] === 0xa9 && s[1] === 20 && s[22] === 0x87;
function svWitProg(s){ if(s.length < 4 || s.length > 42 || (s[0] !== 0 && (s[0] < 0x51 || s[0] > 0x60)) || s[1] + 2 !== s.length) return null; return {ver: s[0] ? s[0] - 0x50 : 0, prog: s.slice(2)}; }
function svP2pk(s){ return ((s.length === 35 && s[0] === 33) || (s.length === 67 && s[0] === 65)) && s[s.length - 1] === 0xac ? s.slice(1, -1) : null; }
function svMultisig(s){ // m <keys> n OP_CHECKMULTISIG, keys of 33 or 65 bytes, m and n from 1 to 16
  if(s.length < 3 || s[s.length - 1] !== 0xae) return null;
  const m = s[0] - 0x50, n = s[s.length - 2] - 0x50; if(m < 1 || m > 16 || n < 1 || n > 16 || m > n) return null;
  const keys = []; let i = 1;
  while(i < s.length - 2){ const l = s[i]; if((l !== 33 && l !== 65) || i + 1 + l > s.length - 2) return null; keys.push(s.slice(i + 1, i + 1 + l)); i += 1 + l; }
  return keys.length === n ? {m, keys} : null;
}
const svPkhScript = (h) => svCat([Uint8Array.of(0x76, 0xa9, 20), h, Uint8Array.of(0x88, 0xac)]);
function svTapLeaf(s){ // <key> OP_CHECKSIG, or multi_a: <key1> OP_CHECKSIG <key2> OP_CHECKSIGADD ... <m> OP_NUMEQUAL
  if(s.length === 34 && s[0] === 32 && s[33] === 0xac) return {m: 1, keys: [s.slice(1, 33)], single: true};
  const keys = []; let i = 0;
  while(i + 34 <= s.length && s[i] === 32 && s[i + 33] === (keys.length ? 0xba : 0xac)){ keys.push(s.slice(i + 1, i + 33)); i += 34; }
  const r = s.slice(i); let m = 0;
  if(r.length === 2 && r[0] >= 0x51 && r[0] <= 0x60) m = r[0] - 0x50;
  else if(r.length === 3 && r[0] === 1 && r[1] > 16 && r[1] < 0x80) m = r[1];
  else if(r.length === 4 && r[0] === 2 && r[2] < 0x80 && (r[2] > 0 || r[1] >= 0x80)) m = r[1] | (r[2] << 8);
  return keys.length && m >= 1 && m <= keys.length && r[r.length - 1] === 0x9c ? {m, keys, single: false} : null;
}
const svLess = (a, b) => { for(let i = 0; i < 32; i++) if(a[i] !== b[i]) return a[i] < b[i]; return false; };
async function svTapLeafHash(lv, script){ return taggedHash("TapLeaf", svCat([Uint8Array.of(lv), varintBytes(script.length), script])); }
async function svTapCommit(control, script, outKey){ // does this script, with this control block, belong to the Taproot output key?
  const P = liftX(bigOf(control.slice(1, 33)), false); if(!P) return {ok: false};
  const leaf = await svTapLeafHash(control[0] & 0xfe, script); let k = leaf;
  for(let j = 33; j < control.length; j += 32){ const e = control.slice(j, j + 32); k = await taggedHash("TapBranch", svLess(k, e) ? svCat([k, e]) : svCat([e, k])); }
  const t = bigOf(await taggedHash("TapTweak", svCat([control.slice(1, 33), k]))); if(t >= SN) return {ok: false};
  const Q = eadd(P, emul(t, SG));
  return {ok: !!Q && Q[0] === bigOf(outKey) && Number(Q[1] & 1n) === (control[0] & 1), leaf};
}
function svWitSize(w){ let n = varintBytes(w.length).length; for(const x of w) n += varintBytes(x.length).length + x.length; return n; }
function svHasKey(script, key, h160){ return scriptPushes(script).some(d => eqBytes(d, key) || (h160 && eqBytes(d, h160))); }
function svPoint(pub){
  if(pub.length === 33 && (pub[0] === 2 || pub[0] === 3)) return liftX(bigOf(pub.slice(1)), pub[0] === 3);
  if(pub.length === 65 && (pub[0] === 4 || pub[0] === 6 || pub[0] === 7)){
    const x = bigOf(pub.slice(1, 33)), y = bigOf(pub.slice(33));
    if(x >= SP || y >= SP || emod(y * y - x * x * x - 7n) !== 0n || (pub[0] !== 4 && Number(y & 1n) !== (pub[0] & 1))) return null;
    return [x, y];
  }
  return null;
}
const svRes = () => ({state: "none", why: "", n: 0, policy: new Set(), info: new Set()});
const svBad = (R, why) => { R.state = "invalid"; R.why = why; return R; };
const svNa = (R, why) => { R.state = "unchecked"; R.why = why; return R; };
const svValid = (R) => { R.state = "valid"; return R; };
const svOne = (R, r) => r.na ? svNa(R, r.na) : !r.ok ? svBad(R, r.why) : (R.n++, svValid(R));
async function svEcdsa(ctx, sig, pub, dg, R, seg){
  if(!sig.length) return {ok: false, why: "a signature is missing (empty)"};
  const d = derParse(sig.slice(0, -1)); if(!d) return {ok: false, enc: true, why: "a signature is not in strict DER form (a consensus rule since BIP66)"};
  const P = svPoint(pub); if(!P) return {ok: false, why: "a public key is not a valid key"};
  svWork(ctx, 1, 0); await svYield();
  const ht = sig[sig.length - 1];
  if(!ecdsaVerify(bigOf(await dg(ht)), d.r, d.s, P)) return {ok: false, why: "the signature does not match this transaction and this key"};
  if(d.s > SN / 2n) R.policy.add("its S value is high (the low-S rule)");
  if(![1, 2, 3, 0x81, 0x82, 0x83].includes(ht)) R.policy.add("it uses an undefined sighash type (0x" + ht.toString(16) + ")");
  if(seg && pub.length !== 33) R.policy.add("it uses an uncompressed key, which SegWit does not relay");
  if(pub[0] === 6 || pub[0] === 7) R.policy.add("it uses an unusual (hybrid) key");
  return {ok: true};
}
async function svSchnorr(ctx, sig, x32, dg){
  if(sig.length !== 64 && sig.length !== 65) return {ok: false, enc: true, why: "a Taproot signature must be 64 or 65 bytes"};
  const ht = sig.length === 65 ? sig[64] : 0;
  if(sig.length === 65 && ht === 0) return {ok: false, enc: true, why: "a 65-byte Taproot signature may not end in sighash type 0"};
  if(!SV_TR_TYPES.includes(ht)) return {ok: false, enc: true, why: "a Taproot signature uses an undefined sighash type (0x" + ht.toString(16) + ")"};
  if(!(ht & 0x80) && !ctx.all) return {na: "a Taproot signature covers every coin the transaction spends, and not all of them are known"};
  const m = await dg(ht); if(!m) return {ok: false, enc: true, why: "it signs with SIGHASH_SINGLE, but there is no output with the same number as this input"};
  svWork(ctx, 1, 0); await svYield();
  return (await schnorrVerify(m, x32, sig.slice(0, 64))) ? {ok: true} : {ok: false, why: "the signature does not match this transaction and this key"};
}
async function svMulti(ctx, ms, sigs, dg, R, seg){
  let k = 0, s = 0;
  while(s < sigs.length && ms.keys.length - k >= sigs.length - s){
    if(!sigs[s].length) return {ok: false, why: "a signature is missing (empty)"};
    const r = await svEcdsa(ctx, sigs[s], ms.keys[k], dg, R, seg);
    if(r.enc) return r;
    if(r.ok) s++;
    k++;
  }
  if(s === sigs.length) return {ok: true};
  for(const sg of sigs){ let any = false; for(const key of ms.keys) if((await svEcdsa(ctx, sg, key, dg, svRes(), seg)).ok){ any = true; break; } if(!any) return {ok: false, why: "a signature matches none of the keys of this coin"}; }
  return {ok: false, why: "the signatures are not in the order of the keys in the script (or one key signed twice)"};
}
async function svSpendScript(ctx, sc, items, dg, R, seg){
  const pk = svP2pk(sc), ms = svMultisig(sc), need = svIsP2pkh(sc) ? 2 : pk ? 1 : ms ? ms.m + 1 : 0;
  if(!need) return svNa(R, "it uses a script this page does not read");
  if(items.length < need) return svBad(R, "it has fewer items than the script needs");
  if(items.length > need) return seg ? svBad(R, "its witness has extra items, which the network refuses in SegWit") : svNa(R, "its unlocking script has extra items, which this page does not read");
  if(svIsP2pkh(sc)){
    if(hex(await hash160(items[1])) !== hex(sc.slice(3, 23))) return svBad(R, "the public key given is not the one whose hash this coin names");
    return svOne(R, await svEcdsa(ctx, items[0], items[1], dg, R, seg));
  }
  if(pk) return svOne(R, await svEcdsa(ctx, items[0], pk, dg, R, seg));
  if(items[0].length) return svBad(R, "the unused first item of a multisig unlocking must be empty (NULLDUMMY, a consensus rule since SegWit)");
  const r = await svMulti(ctx, ms, items.slice(1), dg, R, seg);
  if(!r.ok) return svBad(R, r.why);
  R.n += ms.m; return svValid(R);
}
async function svTaproot(ctx, i, outKey, wit, R){
  const items = wit.slice(); let annex = null;
  if(!items.length) return svBad(R, "its witness is empty");
  if(items.length >= 2 && items[items.length - 1].length && items[items.length - 1][0] === 0x50){ annex = items.pop(); R.policy.add("it carries an annex"); }
  if(items.length === 1) return svOne(R, await svSchnorr(ctx, items[0], outKey, svDg(ht => svSighashTr(ctx, i, ht, {annex}))));
  const control = items.pop(), script = items.pop();
  if(control.length < 33 || (control.length - 33) % 32 || control.length > 33 + 128 * 32) return svBad(R, "its control block has a wrong size");
  svWork(ctx, 1, script.length);
  const c = await svTapCommit(control, script, outKey);
  if(!c.ok) return svBad(R, "the script it uses is not part of this coin (the control block does not match)");
  if((control[0] & 0xfe) !== 0xc0) return svNa(R, "it uses a Taproot script version this page does not know");
  if(items.some(d => d.length > 520)) return svBad(R, "a witness item is longer than 520 bytes (a consensus limit)");
  const lf = svTapLeaf(script); if(!lf) return svNa(R, "it uses a Taproot script this page does not read (the script does belong to this coin)");
  if(items.length !== lf.keys.length) return svBad(R, "the number of witness items does not fit its script");
  const dg = svDg(ht => svSighashTr(ctx, i, ht, {annex, leaf: c.leaf}));
  let budget = 50 + svWitSize(wit), good = 0;
  for(let j = 0; j < lf.keys.length; j++){
    const sig = items[items.length - 1 - j]; if(!sig.length) continue;
    budget -= 50; if(budget < 0) return svBad(R, "it has more signatures than its size allows (the BIP342 signature budget)");
    const r = await svSchnorr(ctx, sig, lf.keys[j], dg); if(r.na) return svNa(R, r.na); if(!r.ok) return svBad(R, r.why); good++;
  }
  if(good !== lf.m) return svBad(R, lf.single ? "the signature is missing" : good + " of the " + lf.m + " signatures the script needs are there");
  R.n += good; return svValid(R);
}
async function svWitness(ctx, i, wp, wit, coin, R, wrapped){
  if(wp.ver === 0 && wp.prog.length === 20){
    if(wit.length !== 2) return svBad(R, "a P2WPKH spend needs exactly a signature and a public key");
    if(hex(await hash160(wit[1])) !== hex(wp.prog)) return svBad(R, "the public key given is not the one whose hash this coin names");
    const sc = svPkhScript(wp.prog);
    return svOne(R, await svEcdsa(ctx, wit[0], wit[1], svDg(ht => svSighashV0(ctx, i, sc, coin.amount, ht)), R, true));
  }
  if(wp.ver === 0 && wp.prog.length === 32){
    if(!wit.length) return svBad(R, "its witness is empty");
    const ws = wit[wit.length - 1], items = wit.slice(0, -1);
    if(ws.length > 10000) return svBad(R, "its witness script is longer than 10,000 bytes (a consensus limit)");
    if(hex(await svHash1(ctx, ws)) !== hex(wp.prog)) return svBad(R, "the witness script is not the one this coin was locked to");
    if(items.some(d => d.length > 520)) return svBad(R, "a witness item is longer than 520 bytes (a consensus limit)");
    if(ws.length > 3600) R.policy.add("its witness script is longer than 3,600 bytes");
    return svSpendScript(ctx, ws, items, svDg(ht => svSighashV0(ctx, i, ws, coin.amount, ht)), R, true);
  }
  if(wp.ver === 0) return svBad(R, "a SegWit version 0 program must be 20 or 32 bytes");
  if(wp.ver === 1 && wp.prog.length === 32 && !wrapped) return svTaproot(ctx, i, wp.prog, wit, R);
  return svNa(R, "it spends a SegWit version this page does not know");
}
async function svFinal(ctx, i){
  const x = ctx.tx.ins[i], ss = x.ss, wit = x.wit, coin = ctx.coins[i], R = svRes();
  if(!ss.length && !wit.length) return R;
  if(!coin) return svNa(R, ctx.why[i] || "cannot check without the coins it spends");
  const spk = coin.script, wp = svWitProg(spk);
  if(wp){ if(ss.length) return svBad(R, "a SegWit coin needs an empty unlocking script (scriptSig)"); return svWitness(ctx, i, wp, wit, coin, R, false); }
  const P = svPushList(ss);
  if(svIsP2sh(spk)){
    if(!P) return svBad(R, "the unlocking script of a P2SH coin may only push data");
    if(!P.items.length) return svBad(R, "its unlocking script is empty");
    if(P.items.some(d => d.length > 520)) return svBad(R, "it pushes more than 520 bytes at once (a consensus limit)");
    const rs = P.items[P.items.length - 1];
    if(hex(await hash160(rs)) !== hex(spk.slice(2, 22))) return svBad(R, "the script it reveals is not the one this coin was locked to");
    const w2 = svWitProg(rs);
    if(w2){ if(!eqBytes(ss, svPush(rs))) return svBad(R, "a wrapped SegWit unlocking script must be exactly one plain push of the SegWit script"); return svWitness(ctx, i, w2, wit, coin, R, true); }
    if(wit.length) return svBad(R, "it has witness data, but the coin is not SegWit");
    if(!P.minimal) R.policy.add("its unlocking script does not use the shortest pushes");
    if(svHasCodesep(rs)) return svNa(R, "its script uses OP_CODESEPARATOR, which this page does not follow");
    return svSpendScript(ctx, rs, P.items.slice(0, -1), svDg(ht => svSighashLegacy(ctx, i, rs, ht)), R, false);
  }
  if(wit.length) return svBad(R, "it has witness data, but the coin is not SegWit");
  if(!P) return svNa(R, "its unlocking script does more than push data");
  if(P.items.some(d => d.length > 520)) return svBad(R, "it pushes more than 520 bytes at once (a consensus limit)");
  if(!P.minimal) R.policy.add("its unlocking script does not use the shortest pushes");
  return svSpendScript(ctx, spk, P.items, svDg(ht => svSighashLegacy(ctx, i, spk, ht)), R, false);
}
async function svPartial(ctx, i, m){
  const R = svRes(), coin = ctx.coins[i], f = (t) => m.find(x => x.type === t && x.key.length === 0);
  const ps = m.filter(x => x.type === 2), tk = f(0x13), ts = m.filter(x => x.type === 0x14 && x.key.length === 64), leaves = m.filter(x => x.type === 0x15);
  if(!ps.length && !tk && !ts.length) return R;
  if(!coin) return svNa(R, ctx.why[i] || "the PSBT does not include the coin it spends");
  const spk = coin.script, wp = svWitProg(spk), req = f(0x03), want = req && req.val.length === 4 ? req.val[0] : null;
  if(tk || ts.length){
    if(!(wp && wp.ver === 1 && wp.prog.length === 32)) return svBad(R, "it has Taproot signatures, but the coin is not a Taproot coin");
    if(tk){ const r = await svSchnorr(ctx, tk.val, wp.prog, svDg(ht => svSighashTr(ctx, i, ht, {}))); if(r.na) return svNa(R, r.na); if(!r.ok) return svBad(R, r.why); R.n++; }
    for(const s of ts){
      const x32 = s.key.slice(0, 32), leaf = s.key.slice(32); let found = null;
      for(const l of leaves){ if(!l.val.length || l.key.length < 33) continue; const sc = l.val.slice(0, -1); if(eqBytes(await svTapLeafHash(l.val[l.val.length - 1], sc), leaf)){ found = {control: l.key, script: sc}; break; } }
      if(found){
        svWork(ctx, 1, found.script.length);
        if(!(await svTapCommit(found.control, found.script, wp.prog)).ok) return svBad(R, "the script it signs is not part of this coin");
        if(!svHasKey(found.script, x32)) return svBad(R, "its key is not in the script it signs");
      } else R.info.add("the script of a script-path signature is not in the PSBT, so only the signature itself was checked");
      const r = await svSchnorr(ctx, s.val, x32, svDg(ht => svSighashTr(ctx, i, ht, {leaf}))); if(r.na) return svNa(R, r.na); if(!r.ok) return svBad(R, r.why); R.n++;
    }
    if(!ps.length) return svValid(R);
  }
  // where the ECDSA signatures go: the script code, whether it is SegWit, and which keys belong to it
  const rs = f(0x04), ws = f(0x05);
  let sc = null, seg = false, hashed = null;
  const useWs = async (prog) => { if(!ws) return "the PSBT does not include the witness script of this coin"; if(ws.val.length > 10000 || hex(await svHash1(ctx, ws.val)) !== hex(prog)) return "bad"; sc = ws.val; seg = true; return ""; };
  if(svIsP2pkh(spk)){ sc = spk; hashed = spk.slice(3, 23); }
  else if(wp && wp.ver === 0 && wp.prog.length === 20){ sc = svPkhScript(wp.prog); seg = true; hashed = wp.prog; }
  else if(wp && wp.ver === 0 && wp.prog.length === 32){ const e = await useWs(wp.prog); if(e === "bad") return svBad(R, "the witness script in the PSBT is not the one this coin was locked to"); if(e) return svNa(R, e); }
  else if(wp) return wp.ver === 1 ? svBad(R, "it has an ECDSA signature, but a Taproot coin needs Schnorr signatures") : svNa(R, "it spends a SegWit version this page does not know");
  else if(svIsP2sh(spk)){
    if(!rs) return svNa(R, "the PSBT does not include the redeem script of this coin");
    if(hex(await hash160(rs.val)) !== hex(spk.slice(2, 22))) return svBad(R, "the redeem script in the PSBT is not the one this coin was locked to");
    const w2 = svWitProg(rs.val);
    if(w2 && w2.ver === 0 && w2.prog.length === 20){ sc = svPkhScript(w2.prog); seg = true; hashed = w2.prog; }
    else if(w2 && w2.ver === 0 && w2.prog.length === 32){ const e = await useWs(w2.prog); if(e === "bad") return svBad(R, "the witness script in the PSBT is not the one this coin was locked to"); if(e) return svNa(R, e); }
    else if(w2) return svNa(R, "it spends a SegWit version this page does not know");
    else { if(rs.val.length > 520) return svBad(R, "its redeem script is longer than 520 bytes, so the coin cannot be spent (a consensus limit)"); sc = rs.val; }
  } else sc = spk;
  if(svHasCodesep(sc)) return svNa(R, "its script uses OP_CODESEPARATOR, which this page does not follow");
  const dg = svDg(ht => seg ? svSighashV0(ctx, i, sc, coin.amount, ht) : svSighashLegacy(ctx, i, sc, ht));
  for(const p of ps){
    const h = await hash160(p.key);
    if(hashed ? !eqBytes(h, hashed) : !svHasKey(sc, p.key, h)) return svBad(R, "a signature's key is not one this coin needs");
    const r = await svEcdsa(ctx, p.val, p.key, dg, R, seg); if(!r.ok) return svBad(R, r.why); R.n++;
    if(want !== null && p.val.length && p.val[p.val.length - 1] !== want) R.info.add("a signature uses another sighash type than the PSBT asks for");
  }
  return svValid(R);
}
async function svCoins(res){
  if(res.svCoins) return res.svCoins;
  const out = {coins: [], why: [], clash: []};
  for(let i = 0; i < res.ins.length; i++){
    const m = res.maps ? res.maps[i] : [], g = (t) => m.find(x => x.type === t && x.key.length === 0), wu = g(1), nw = g(0), x = res.ins[i];
    let coin = null, why = "";
    if(nw){ try { const id = hex((await dsha256(psbtStripWitness(nw.val))).reverse());
        if(id !== x.txid) why = "the full previous transaction in the PSBT is not the one this input spends, so a wrong amount could be hidden";
        else { const o = psbtParseTxOutputs(nw.val)[x.vout]; if(o) coin = {amount: o.value, script: o.script}; else why = "the previous transaction in the PSBT has no output " + x.vout; }
      } catch(e){ why = "the previous transaction in the PSBT is damaged"; } }
    if(wu){ try { const q = psbtReader(wu.val), w = {amount: q.i64(), script: q.bytes(q.varint())};
        if(coin && (coin.amount !== w.amount || !eqBytes(coin.script, w.script))){ coin = null; why = "the PSBT describes the coin it spends in two different ways (amount or script), so a wrong amount could be hidden"; out.clash.push(i); }
        else if(!coin && !why){ coin = w; coin.fromWu = true; }   // only the short coin record: a legacy signature does not cover its amount
      } catch(e){ if(!coin && !why) why = "the coin record in the PSBT is damaged"; } }
    out.coins.push(coin); out.why.push(why);
  }
  return res.svCoins = out;
}
async function psbtSigCheck(res, other){
  const own = await svCoins(res), coins = own.coins.slice(), why = own.why.slice();
  if(other){ const oc = await svCoins(other); res.ins.forEach((y, i) => { if(coins[i] || why[i]) return; const j = other.ins.findIndex(x => x.txid === y.txid && x.vout === y.vout); if(j >= 0 && oc.coins[j]) coins[i] = oc.coins[j]; }); }
  const tx = res.raw ? svTxModel(res.bytes) : {version: res.version, locktime: res.locktime, ins: res.ins.map(x => ({prev: fromHex(x.txid).reverse(), vout: x.vout, seq: x.seq, ss: new Uint8Array(0), wit: []})), outs: res.outs.map(o => ({amount: o.amount, script: o.script}))};
  const ctx = svCtx(tx, coins, why), over = "this page stops after " + SV_MAX_CHECKS + " signature checks in one transaction, so a very large one cannot freeze it";
  for(let i = 0; i < res.ins.length; i++){
    let R;
    try {
      if(ctx.over) R = svNa(svRes(), over);
      else if(res.raw) R = await svFinal(ctx, i);
      else { const m = res.maps[i], f7 = m.find(x => x.type === 7 && !x.key.length), f8 = m.find(x => x.type === 8 && !x.key.length);
        if(f7 || f8){ tx.ins[i].ss = f7 ? f7.val : new Uint8Array(0); tx.ins[i].wit = f8 ? witnessParse(f8.val) : []; R = await svFinal(ctx, i); }
        else R = await svPartial(ctx, i, m); }
    } catch(e){ if(e === SV_OVER){ ctx.over = true; R = svNa(svRes(), over); } else R = svNa(svRes(), "its signature data is damaged"); }
    if(R.state === "valid" && !res.raw && ctx.legacy && ctx.legacy.has(i) && coins[i] && coins[i].fromWu){   // v2.10.0 review
      R.amountOpen = true; R.info.add("a legacy signature does not cover the amount, and this PSBT has no full previous transaction, so the amount shown for this input is not checked"); }
    res.ins[i].sv = R;
  }
  return res;
}
const MS_NUMS = "50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0";
function pubKind(m){   // "practice N", "example N" (the Damascus lists), "public: <where it comes from>" or ""
  const h = phraseEntropyHex(m); if(!h) return "";
  const d = dmListKind(h); if(d) return d;
  const k = knownPhrase(m); return k ? "public: " + k : "";
}
async function b138TrAddress(xonly, root, hrp){
  const P = liftX(BigInt("0x" + hex(xonly)), false); if(!P) throw new Error("the Taproot key is not a valid key");
  const t = BigInt("0x" + hex(await taggedHash("TapTweak", root ? concatBytes(xonly, root) : xonly))); if(t >= SN) throw new Error("Invalid tweak");
  const Q = eadd(P, emul(t, SG)); if(!Q) throw new Error("Invalid output key");
  return bech32Encode(hrp, 1, fromHex(Q[0].toString(16).padStart(64, "0")));
}
const dmPubLists = {};
function dmListKind(h){
  const list = (re) => (dmPubLists[re.source] = dmPubLists[re.source] || (KNOWN_PHRASES.find(([l]) => re.test(l)) || ["", ""])[1].split(" "));
  const ex = list(/worked example of the Damascus/).indexOf(h); if(ex >= 0) return "example " + (ex + 1);
  const pr = list(/^a Damascus practice sheet/).indexOf(h); if(pr >= 0) return "practice " + (pr % 100 + 1);
  return "";
}
function cdParse(text){
  const cards = [], bad = [], t = String(text).toUpperCase().replace(/\uFE0F/g, "").replace(/[,;]/g, " "), re = /(10|[A2-9TJQK])\s*([CDHS\u2660-\u2667])|(\S+)/g;
  let m; while((m = re.exec(t))){ if(m[3] !== undefined || !CD_SUIT_OF[m[2]]){ bad.push(m[0]); continue; } cards.push((m[1] === "10" ? "T" : m[1]) + CD_SUIT_OF[m[2]]); }
  return {cards, bad};
}
function cdBits(cards){
  let bits = 0, again = false, run = new Set();
  for(const c of cards){ if(run.has(c)){ if(run.size < 52) again = true; run = new Set(); } bits += Math.log2(52 - run.size); run.add(c); }
  return {bits, again};
}
function cdRawCode(c){
  const i = CD_SUITS.indexOf(c[1]) * 13 + CD_RANKS.indexOf(c[0]);
  return i < 32 ? i.toString(2).padStart(5, "0") : i < 48 ? (i - 32).toString(2).padStart(4, "0") : (i - 48).toString(2).padStart(2, "0");
}
function cdRaw(cards){
  const bits = cards.map(cdRawCode).join(""), keep = Math.floor(bits.length / 32) * 32, kept = bits.slice(bits.length - keep), bytes = new Uint8Array(keep / 8);
  for(let i = 0; i < bytes.length; i++) bytes[i] = parseInt(kept.slice(i * 8, i * 8 + 8), 2);
  return {all: bits.length, keep, words: keep / 32 * 3, bytes};
}
