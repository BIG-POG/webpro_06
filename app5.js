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
  { id:1, year:"1965~1966" , name:"ラリー・スコット" , from:"アメリカ合衆国" , height: "170cm", features:"" },
  { id:2, year:"1967~1969" , name:"セルジオ・オリバ" , from:"キューバ", height:"175cm" , features:"" },
  { id:3, year:"1970~1975,1980" , name: "アーノルド・シュワルツネッガー", from:"オーストリア" , height:"188cm" , features:"" },
  { id:4, year:"1976,1981" , name:"フランコ・コロンブ" , from:"イタリア" , height:"165cm" , features:"" },
  { id:5, year:"1977~1979" , name:"フランク・ゼーン" , from:"アメリカ合衆国" , height:"175cm" , features:"" },
  { id:6, year:"1982" , name:"クリス・ディッカーソン" , from:"アメリカ合衆国" , height:"168cm" , features:"" },
  { id:7, year:"1983" , name:"サミアー・バヌー" , from:"レバノン" , height:"170cm" , features:"" },
  { id:8, year:"1984~1991" , name:"リー・ヘイニー" , from:"アメリカ合衆国" , height:"181cm" , features:"" },
  { id:9, year:"1992~1997" , name:"ドリアン・イェーツ" , from:"イギリス" , height:"177cm" , features:"" },
  { id:10, year:"1998~2005" , name:"ロニー・コールマン" , from:"アメリカ合衆国" , height:"180cm" , features:"" },
  { id:11, year:"2006,2007,2009,2010" , name:"ジェイ・カトラー" , from:"アメリカ合衆国" , height:"175cm" , features:"" },
  { id:12, year:"2008" , name:"デキスタージャクソン" , from:"アメリカ合衆国" , height:"169cm" , features:"" },
  { id:13, year:"2011~2017" , name:"フィル・ヒース" , from:"アメリカ合衆国" , height:"175cm" , features:"" },
  { id:14, year:"2018" , name:"ショーン・ローデン" , from:"ジャマイカ" , height:"178cm" , features:"" },
  { id:15, year:"2019" , name:"ブランドン・カリー" , from:"アメリカ合衆国" , height:"173cm" , features:"" },
  { id:16, year:"2020,2021" , name:"マンドゥ・エルスビエイ(ビッグ・ラミー)" , from:"エジプト" , height:"175cm" , features:"" },
  { id:17, year:"2022" , name:"ハディー・チョーパン" , from:"イラン" , height:"169cm" , features:"" },
  { id:18, year:"2023,2025" , name:"デレク・ランスフォード" , from:"アメリカ合衆国" , height:"168cm" , features:"" },
  { id:19, year:"2024" , name:"サムソン・ダウダ" , from:"ナイジェリア" , height:"180cm" , features:"" },

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
app.get("/keiyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
});
// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {data: detail} );
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
app.listen(8080, () => console.log("Example app listening on port 8080!"));

