// Whole-script strict mode syntax
"use strict";

  const myQuestions = [
    {
      question: "MVCの意味は？",
      answers: {
        a: "Model, View, Controller",
        b: "Modal, View, Container",
        c: "Most Visualized Constructure"
      },
      correctAnswer: "a",
      explanation: "MVCはWebアプリケーションのフレームワークの１つ。"
                  + "View(表示)、Model(中身)、Controller(ViewとModelの接続)と分けることで、"
                  + "デザインの修正や画面遷移のロジックの変更を簡単にする考え方。",
      link: "https://qiita.com/tshinsay/items/5b1724baf32b8b5113c2",
      category: "spring"
    },
    {
      question: "Javaの特徴は次のうちどれ？",
      answers: {
        a: "スクリプト言語である",
        b: "オブジェクト指向言語である",
        c: "ジェームズ・ボンドが生みの親である"
      },
      correctAnswer: "b",
      explanation: "Javaはコンパイル言語で、WindowsでもMacでもどのPCでも動かせる。"
                  + "オブジェクト指向によって再利用しやすいプログラムを実装できるのが特徴。"
                  + "1991年にジェームズ・ゴスリンが生み出してから、WebアプリやAndroid開発など"
                  + "様々な分野で使われる人気のプログラミング言語。",
      link: "",
      category: "java"
    },
    {
      question: "Javaの説明として正しいものはどれ？",
      answers: {
        a: "JavascriptはJavaをもとにして作られた言語である",
        b: "Javaを使った開発例として、Twitterや楽天のWebサービス、Minecraftなどがあげられる",
        c: "JavaはPythonを元に作られた言語である"
      },
      correctAnswer: "b",
      explanation: ""
                  + "JavaとJavascriptはハムとハムスターぐらい違う。"
                  + "人気を持ち始めたJavaという名前に便乗して、名付けられたのがJavascript。"
                  + "JavascriptはWebで使われる言語で、ボタンを押した後の処理を決めたりする。"
                  + "JavaはC言語を元に作られた。",
      link: "",
      category: "java"
    },
    {
      question: "一般電気事業者は次のうちどれ？",
      answers: {
        a: "J-POWER",
        b: "PPS",
        c: "IEEE",
        d: "東京電力"
      },
      correctAnswer: "d",
      explanation: 　 "一般電気事業者とは一般(工場や家庭等)向けに電力の小売業を主に行っている会社のこと。"
              　    + "北海道電力・東北電力・東京電力・北陸電力・中部電力・関西電力・中国電力・四国電力・九州電力・沖縄電力の10社ある"
              　    + "英語ではElectric Power Companyと呼ばれる。",
      link: "",
      category: "electric"
    },
    {
      question: "電力自由化によって何ができるようになった？",
      answers: {
        a: "個人で太陽光パネルを設置したりして発電できるようになった",
        b: "電力を制限なく使いたいだけ使えるようになった",
        c: "一般電気事業者以外の電気会社も電力を売ることができるようになった"
      },
      correctAnswer: "c",
      explanation:  　"2016年4月、家庭などに向けた電力小売りが全面自由化された。"
              　    + "これによって一般電気事業者以外も電力を消費者に直接販売できるようになった。"
              　    + "一般電気事業者が電力の価格を独占的に決めていた体制が崩れて"
                    + "消費者はよりお得な契約を結ぶ選択肢が増えた。",
      link: "",
      category: "electric"
    },
    {
      question: "PPSとは？",
      answers: {
        a: "一般電気事業者以外の電力を売る事業者。新電力とも呼ばれる。",
        b: "一般送配電事業者のこと。",
        c: "電力料金計算システムのこと。"
      },
      correctAnswer: "a",
      explanation:  　"一般電気事業者以外の、特定規模電気事業者のこと。"
              　    + "Power Producer and Supplierの略。"
              　    + "電力自由化によって電気事業に新規参入した会社。",
      link: "",
      category: "electric"
    },
    {
      question: "特高について正しいものは？",
      answers: {
        a: "デパートやオフィスビルや病院など、もしくは大規模工場で使われる特別高圧電力。",
        b: "特別高圧電圧の略で、現在では使われている設備はほとんど存在しない。",
        c: "一般家庭向けの電圧。"
      },
      correctAnswer: "a",
      explanation:  　"企業や工場で使用する。"
              　    + "受電電圧が20,000V以上で、さらに契約が2,000kW以上。"
              　    + "低圧や高圧よりも高価であり、維持管理費も膨大となる。",
      link: "https://www.tainavi-biz.com/energy-iot/3399/",
      category: "electric"
    },
    {
      question: "低圧とは？",
      answers: {
        a: "大規模な工場設備で必要な電圧。",
        b: "一般家庭や小さな工場向けの電圧。",
        c: "電線を低温に保つことで低い電圧で電気を送る仕組み。"
      },
      correctAnswer: "b",
      explanation:  　"一般家庭向けの小規模な電圧。"
              　    + "契約電力が50kW未満（目安）だと低圧電力に分類される。"
              　    + "ちなみに2人暮らしの電気代平均額は8,933円/月らしい。",
      link: "https://enechange.jp/articles/average-of-family",
      category: "electric"
    },
    {
      question: "DRとは？",
      answers: {
        a: "ダイレクトレスポンスの略。需要側が供給側に対して直接対応すること。",
        b: "ディマンドリプレイの略。需要量を再度予測し直すこと。",
        c: "ディマンドレスポンスの略。需要側で需給バランスの調整に貢献する仕組み。"
      },
      correctAnswer: "c",
      explanation:  　"電力会社が需要家に対して電力使用の抑制を促す仕組み。"
              　    + "例えば夏場に予想よりも気温が大きく上がったとする。"
              　    + "たくさんの人が冷房をガンガン使うと、電気が足りなくなってしまう。"
                    + "このままでは停電とかになるので、一部の工場などにお願いして"
                    + "電力の使用量を一時的に下げてもらう。そして貢献した分は報酬金を渡すというイメージ。",

      link: "https://enechange.jp/articles/average-of-family",
      category: "electric"
    },
    {
      question: "DBとは？",
      answers: {
        a: "データベータの略",
        b: "データベースの略",
        c: "ダブルベースの略"
      },
      correctAnswer: "b",
      explanation:  　"データベースの略。"
                    + "「複数で共有、利用すること」と「検索、加工すること」を目的に整理されたデータの集まりを指す。"
                    + "広い意味では紙の辞書やタウンページもデータベースに含まれる。",
      link: "https://www.sejuku.net/blog/8763",
      category: "sql_db"
    },
    {
      question: "リレーショナルデータベース（RDB）について正しい説明は？",
      answers: {
        a: "データをkey（キー）とvalue（値）のペアにして管理するデータベース。 ",
        b: "1件1件のデータをドキュメントのように格納する。",
        c: "表形式でデータを管理する。また１つ１つのデータは一意でなくてはならない。"
      },
      correctAnswer: "c",
      explanation:  　"「テーブル」といわれる表形式の構造でデータを管理する関係モデルを使ったデータベース。"
                    + "１つ１つのデータは「レコード」と呼ばれ、重複は許されない。",
      link: "https://www.sejuku.net/blog/8763",
      category: "sql_db"
    },
    {
      question: "RDBMSとは？",
      answers: {
        a: "RDBを拡張したデータベースでより自由にデータを管理できる",
        b: "リレーショナルデータベースから取得したデータのこと",
        c: "リレーショナルデータベースを管理するためのシステム"
      },
      correctAnswer: "c",
      explanation:  　"RDBにデータを新しく追加したり、更新、削除するためのシステム。"
                    + "Relational Database Management Systemの略。"
                    + "MySQL, PostgreSQL, Oracle SQLなどが有名。",
      link: "https://www.sejuku.net/blog/8763",
      category: "sql_db"
    },
    {
      question: "「DBをダンプする」のダンプとは？",
      answers: {
        a: "内容をファイルに出力すること",
        b: "内容を捨てること",
        c: "ダンプカーの略..."
      },
      correctAnswer: "a",
      explanation:  　"「DBをダンプする」とはDBのデータをSQLなどの形でファイルに出力すること。"
                    + "DBの内容をコピーしたり、バックアップとして取っておくときにDBをダンプする。"
                    + "ダンプしたデータをDBに入れることをリストアと呼ぶ。",
      link: "",
      category: "sql_db"
    },
    {
      question: "SQLでデータを検索する予約語は？",
      answers: {
        a: "DELETE",
        b: "SELECT",
        c: "UPDATE",
        d: "SEARCH"
      },
      correctAnswer: "b",
      explanation:  　"「SELECT (列名)　FROM (テーブル名)」でデータを取得できる。"
                    + "例えばユーザテーブルからユーザ名をパスワードを取得するなら"
                    + "「SELECT name, password FROM user」と書いたりする。",
      link: "",
      category: "sql_db"
    },
    {
      question: "SQLでレコードを並びかえる予約語は？",
      answers: {
        a: "SORT",
        b: "FILTER",
        c: "ORDER BY",
        d: "WHERE"
      },
      correctAnswer: "c",
      explanation:  　"「SELECT (列名)　FROM (テーブル名) ORDER BY (列名)」で指定した並びでデータを取得できる。"
                    + "例えばユーザテーブルから全件をユーザー名の昇順で並びかえて取得するなら、"
                    + "「SELECT * FROM user ORDER BY name」と書いたりする。",
      link: "",
      category: "sql_db"
    },
    {
      question: "「SELECT * FROM user ORDER BY name DESC」を実行した結果は？",
      answers: {
        a: "ジョジョ、ディオ、ポルナレフ",
        b: "ディオ、ポルナレフ、ジョジョ",
        c: "ポルナレフ、ディオ、ジョジョ"
      },
      correctAnswer: "c",
      explanation:  　"DESCはDESCENDING(下向きの)の略で降順を意味する。"
                    + "数字なら「5,4,3・・・」と大きい順に、"
                    + "文字列なら「Z,Y,・・・B,A」、「こ,か,・・・い、あ」と後ろから順に並べる。"
                    + "対義語としてASCがあり、昇順で並べる。"
                    + "ASC,DESCの指定がなければデフォルトで昇順なので注意！",
      link: "",
      category: "sql_db"
    },
    {
      question: "SQLでデータを更新する予約語は？",
      answers: {
        a: "UPLOAD",
        b: "INSERT",
        c: "UPGRADE",
        d: "UPDATE"
      },
      correctAnswer: "d",
      explanation:  　"「UPDATE (テーブル名)　SET (列名) = (値)」でレコードを更新できる。"
                    + "例えばユーザテーブルでIDが1のユーザ名をジョジョに更新するなら"
                    + "「UPDATE user SET name = 'ジョジョ' WHERE id = 1」と書いたりする。",
      link: "https://www.sejuku.net/blog/8763",
      category: "sql_db"
    }


  ];
