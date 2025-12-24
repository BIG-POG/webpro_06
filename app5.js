const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
let station = [
  { id:1, code:"JE01", name:"東京駅"},
  { id:2, code:"JE07", name:"舞浜駅"},
  { id:3, code:"JE12", name:"新習志野駅"},
  { id:4, code:"JE13", name:"幕張豊砂駅"},
  { id:5, code:"JE14", name:"海浜幕張駅"},
  { id:6, code:"JE05", name:"新浦安駅"},
];
let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];
let olympiaChampion =[
  { id:1, year:"1965,1966" , name:"ラリー・スコット" , from:"アメリカ合衆国" , height: "170cm", explanation:"" },
  { id:2, year:"1967~1969" , name:"セルジオ・オリバ" , from:"キューバ", height:"175cm" , explanation:"" },
  { id:3, year:"1970~1975,1980" , name: "アーノルド・シュワルツネッガー", from:"オーストリア" , height:"188cm" , explanation:"" },
  { id:4, year:"1976,1981" , name:"フランコ・コロンブ" , from:"イタリア" , height:"165cm" , explanation:"" },
  { id:5, year:"1977~1979" , name:"フランク・ゼーン" , from:"アメリカ合衆国" , height:"175cm" , explanation:"" },
  { id:6, year:"1982" , name:"クリス・ディッカーソン" , from:"アメリカ合衆国" , height:"168cm" , explanation:"" },
  { id:7, year:"1983" , name:"サミアー・バヌー" , from:"レバノン" , height:"170cm" , explanation:"" },
  { id:8, year:"1984~1991" , name:"リー・ヘイニー" , from:"アメリカ合衆国" , height:"181cm" , explanation:"" },
  { id:9, year:"1992~1997" , name:"ドリアン・イェーツ" , from:"イギリス" , height:"177cm" , explanation:"" },
  { id:10, year:"1998~2005" , name:"ロニー・コールマン" , from:"アメリカ合衆国" , height:"180cm" , explanation:"" },
  { id:11, year:"2006,2007,2009,2010" , name:"ジェイ・カトラー" , from:"アメリカ合衆国" , height:"175cm" , explanation:"" },
  { id:12, year:"2008" , name:"デキスタージャクソン" , from:"アメリカ合衆国" , height:"169cm" , explanation:"" },
  { id:13, year:"2011~2017" , name:"フィル・ヒース" , from:"アメリカ合衆国" , height:"175cm" , explanation:"" },
  { id:14, year:"2018" , name:"ショーン・ローデン" , from:"ジャマイカ" , height:"178cm" , explanation:"" },
  { id:15, year:"2019" , name:"ブランドン・カリー" , from:"アメリカ合衆国" , height:"173cm" , explanation:"" },
  { id:16, year:"2020,2021" , name:"マンドゥ・エルスビエイ(ビッグ・ラミー)" , from:"エジプト" , height:"175cm" , explanation:"" },
  { id:17, year:"2022" , name:"ハディー・チョーパン" , from:"イラン" , height:"169cm" , explanation:"" },
  { id:18, year:"2023,2025" , name:"デレク・ランスフォード" , from:"アメリカ合衆国" , height:"168cm" , explanation:"" },
  { id:19, year:"2024" , name:"サムソン・ダウダ" , from:"ナイジェリア" , height:"180cm" , explanation:"" },

];
let nijisanji_seeds =[
  {id:1, name:"ドーラ(どーら)",year:"2018/06/03~",species:"ファイヤードレイク",birthday:"8/19"},
  {id:2, name:"海夜叉神(うみやしゃのかみ)",year:"2018/06/03~2019/04/09",species:"神",birthday:"8/19"},
  {id:3, name:"名伽尾アズマ(なかおあずま)",year:"2018/06/03~2019/05/31",species:"人間",birthday:"8/19"},
  {id:4, name:"出雲霞(いずもかすみ)",year:"2018/06/03~2020/10/31",species:"人工知能",birthday:"8/19"},
  {id:5, name:"轟京子(とどろききょうこ)",year:"2018/06/03~",species:"人間",birthday:"8/19"},
  {id:6, name:"シスター・クレア(しすたーくれあ)",year:"2018/06/03~",species:"人間",birthday:"8/19"},
  {id:7, name:"花畑チャイカ(はなばたけちゃいか)",year:"2018/06/03~",species:"エルフ",birthday:"8/19"},
  {id:8, name:"社築(やしろきずく)",year:"2018/06/03~",species:"人間",birthday:"8/19"},
  {id:9, name:"安土桃(あづちもも)",year:"2018/06/03~2024/1/31",species:"人間",birthday:"8/19"},
  {id:10, name:"鈴木勝(すずきまさる)",year:"2018/06/03~",species:"人間",birthday:"8/19"},
  {id:11, name:"緑仙 (りゅーしぇん)",year:"2018/06/03~",species:"人間",birthday:"8/19"},
  {id:12, name:"卯月コウ(うづきこう)",year:"2018/06/03~",species:"人間",birthday:"8/19"},
  {id:13, name:"八朔ゆず(はっさくゆず)",year:"2018/06/03~2019/05/07",species:"人間",birthday:"8/19"}
];
let ac =[
  {id:1, ac_name:"ロックスミス",name:"V.I フロイト",rank:"S/1",affiliate:"アーキバス強化人間部隊"},
  {id:2, ac_name:"ライガーテイル",name:"G1 ミシガン",rank:"S/2",affiliate:"ベイラムグループ専属AC部隊"},
  {id:3, ac_name:"アスタークラウン",name:"キング",rank:"S/3",affiliate:"独立傭兵"},
  {id:4, ac_name:"アストヒク",name:"サム・ドルマヤン",rank:"A/4",affiliate:"ルビコン解放戦線"},
  {id:5, ac_name:"アンバーオックス",name:"シャルトルーズ",rank:"A/5",affiliate:"独立傭兵"},
  {id:6, ac_name:"オープンフェイス",name:"V.II スネイル",rank:"A/6",affiliate:"アーキバスグループ強化人間部隊"},
  {id:7, ac_name:"ディープダウン",name:"G2 ナイル",rank:"A/7",affiliate:"ベイラムグループ専属AC部隊"},
  {id:8, ac_name:"ミルクトゥース",name:"オーネスト・ブルートゥ",rank:"B/8",affiliate:"ジャンカー・コヨーテス"},
  {id:9, ac_name:"スティール・ヘイズ ",name:"V.IV ラスティ",rank:"B/9",affiliate:"アーキバスグループ強化人間部隊"},
  {id:10, ac_name:"デッドスレッド",name:"コールドコール",rank:"B/10",affiliate:"独立傭兵"},
  {id:11, ac_name:"フルコース",name:"シンダー・カーラ",rank:"B/11",affiliate:"RaD"},
  {id:12, ac_name:"バレンフラワー",name:"V.III オキーフ",rank:"B/12",affiliate:"アーキバスグループ強化人間部隊"},
  {id:13, ac_name:"ツバサ",name:"ミドル・フラットウェル",rank:"C/13",affiliate:"ルビコン解放戦線"},
  {id:14, ac_name:"サーカス",name:"チャティ・スティック",rank:"C/14",affiliate:"RaD"},
  {id:15, ac_name:"エンタングル",name:"スッラ",rank:"C/15",affiliate:"独立傭兵"},
  {id:16, ac_name:"デュアルネイチャー",name:"V.VIII ペイター",rank:"C/16",affiliate:"アーキバスグループ強化人間部隊"},
  {id:17, ac_name:"キャノンヘッド",name:"G4 ヴォルタ",rank:"C/17",affiliate:"ベイラムグループ専属AC部隊"},
  {id:18, ac_name:"シノビ",name:"六文銭",rank:"D/18",affiliate:"独立傭兵"},
  {id:19, ac_name:"ヘッドブリンガー",name:"G5 イグアス",rank:"D/19",affiliate:"ベイラムグループ専属AC部隊"},
  {id:20, ac_name:"リコンフィグ",name:"V.V ホーキンス",rank:"D/20",affiliate:"アーキバスグループ強化人間部隊"},
  {id:21, ac_name:"キャンドルリング",name:"リング・フレディ",rank:"D/21",affiliate:"ルビコン解放戦線"},
  {id:22, ac_name:"鯉龍",name:"G3 五花海",rank:"D/22",affiliate:"ベイラムグループ専属AC部隊"},
  {id:23, ac_name:"ガイダンス",name:"V.VII スウィンバーン",rank:"E/23",affiliate:"アーキバスグループ強化人間部隊"},
  {id:24, ac_name:"ユエユー",name:"リトル・ツィイー",rank:"E/24",affiliate:"ルビコン解放戦線"},
  {id:25, ac_name:"インフェクション",name:"V.VI メーテルリンク",rank:"E/25",affiliate:"アーキバスグループ強化人間部隊"},
  {id:26, ac_name:"ビタープロミス",name:"ノーザーク",rank:"E/26",affiliate:"独立傭兵"},
  {id:27, ac_name:"ハーミット",name:"G6 レッド",rank:"F/27",affiliate:"ベイラムグループ専属AC部隊"},
  {id:28, ac_name:"バーンピカクス",name:"インデックス・ダナム",rank:"F/28",affiliate:"ルビコン解放戦線"},
  {id:29, ac_name:"マッドスタンプ",name:"インビンシブル・ラミー",rank:"F/29",affiliate:"RaD"},
];
app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 以下の数行は人間の勝ちの場合の処理なので，
  // 判定に沿ってあいこと負けの処理を追加する
  judgement = '勝ち';
  win += 1;
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});
app.get("/janken_stay",(req, res) =>{
  res.render('janken2', {
    your: '(まだ出していません)',
    cpu: '（待機中）',
    judgement: '勝負してください！',
    win: 0,
    total: 0
  })

});
app.get("/janken2", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  total += 1;
  if (hand === cpu){
    judgement = 'あいこ'
  }else if (
    (hand ==='グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')
  ){
    judgement = '勝ち';
    win += 1;
  }else{
    judgement = '負け';
  }
  
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken2', display );
});
app.get("/keiyo", (req, res)=>{
  res.render('db1', { data:station} );
});
// 一覧
app.get("/keiyo2", (req, res)=>{
  res.render('keiyo2', { data:station2} );
});
// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});
// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {data: detail} );
});
app.get("/keiyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
});
// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});
// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});
// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});
// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
});

// 一覧
app.get("/nijisanji", (req, res)=>{
  res.render('nijisanji', { data:nijisanji_seeds} );
});
// Create
app.get("/nijisanji/create", (req, res) => {
  res.redirect('/public/nijisanji.html');
});
// Read
app.get("/nijisanji/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {data: detail} );
});
app.get("/nijisanji_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
});
// Delete
app.get("/nijisanji/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nijisanji_seeds.splice( req.params.number, 1 );
  res.redirect('/nijisanji' );
});
// Create
app.post("/nijisanji", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('nijisanji', {data: nijisanji_seeds} );
});
// Edit
app.get("/nijisanji/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nijisanji_seeds[ number ];
  res.render('nijisanji_edit', {id: number, data: detail} );
});
// Update
app.post("/nijisanji/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  nijisanji_seeds[req.params.number].code = req.body.code;
  nijisanji_seeds[req.params.number].name = req.body.name;
  nijisanji_seeds[req.params.number].change = req.body.change;
  nijisanji_seeds[req.params.number].passengers = req.body.passengers;
  nijisanji_seeds[req.params.number].distance = req.body.distance;
  console.log( nijisanji_seeds );
  res.redirect('/nijisanji' );
});
app.listen(8080, () => console.log("Example app listening on port 8080!"));

