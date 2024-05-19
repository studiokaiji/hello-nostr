import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import logoSrc from "~/assets/HelloNostr.svg";
import whatIsNostrSrc from "~/assets/WhatIsNostr.webp";
import noEmailPasswordSrc from "~/assets/NoEmailPassword.webp";
import favoriteDesignSrc from "~/assets/FavoriteDesign.webp";
import noAdsSrc from "~/assets/NoAds.webp";
import externalIconSrc from "~/assets/External.svg";
import gettingStartedSrc from "~/assets/GettingStarted.webp";
import nostterTopImageSrc from "~/assets/Nostter.webp";
import nostterCreateAccountImageSrc from "~/assets/CreateAccount.webp";
import nostterPostImageSrc from "~/assets/Post.webp";
import nostterTrendImageSrc from "~/assets/Trend.webp";
import nostterProfileImageSrc from "~/assets/Profile.webp";
import cheeseSrc from "~/assets/Cheese.webp";
import { Link } from "~/components/Link";
import { Footer } from "~/components/Footer";

const features = [
  {
    title: "メールアドレス・パスワード不要",
    text: "Nostrは、メールアドレスやパスワードを使わずにアカウントを作ることができます。",
    image: noEmailPasswordSrc,
    bgColor: "bg-accent-sky",
  },
  {
    title: "好きなアプリ、お気に入りのデザインで",
    text: "Nostrでは、対応する多くのスマートフォン・ウェブアプリがあり、これらを自由に使い分けることができます。",
    image: favoriteDesignSrc,
    bgColor: "bg-accent-purple",
  },
  {
    title: "広告フリー",
    text: "Nostrは「アプリ」と、データが流れてくる「リレー」のそれぞれを、自分で選択できるので、広告を表示するかしないかは、あなたが決めることができます。",
    image: noAdsSrc,
    bgColor: "bg-accent-pink",
  },
];

const gettingStartedSteps = [
  {
    title: "Nostterへアクセスする",
    children: (
      <>
        <p>
          まず<Link to="https://nostter.app">このリンク</Link>
          からNostterへアクセスしてください。
        </p>
        <p>
          Nostrアカウントを初めて作る場合、ページ内の「アカウントを作成」ボタンを押すことで、すぐにアカウントを作成することができます。
        </p>
        <p>
          また「タイムラインをのぞいてみる」ボタンを押せば、アカウントを作らなくてもタイムラインの様子を見ることができます(注意:
          投稿やプロフィールの編集はできません)。
        </p>
      </>
    ),
    image: nostterTopImageSrc,
    bgColor: "bg-accent-purple",
  },
  {
    title: "アカウントを作る",
    children: (
      <>
        <p>
          「アカウントを作成」ボタンを押すと、アカウント作成画面に移動します。
        </p>
        <p>
          Nostterでは、アカウントを作る際に、メールアドレスやパスワードを使わずに、アカウントを作成することができます。
        </p>
        <p>
          表示されたフォームに自分のニックネームなどを入力して、「作成」ボタンを押すだけですぐにはじめられます。
        </p>
      </>
    ),
    image: nostterCreateAccountImageSrc,
    bgColor: "bg-accent-emerald",
  },
  {
    title: "タイムラインを見てみる",
    children: (
      <>
        <p>「トレンド」では、最近の投稿を見ることができます。</p>
        <p>
          まだ誰もフォローしていなければ、「トレンド」を眺めてみるとフォローする人を見つけられるかもしれません。
        </p>
        <p>
          逆に、フォローしている人だけを表示したい場合は、「トレンド」の隣の「ホーム」をタップしてください。
        </p>
      </>
    ),
    image: nostterTrendImageSrc,
    bgColor: "bg-white",
  },
  {
    title: "投稿してみる",
    children: (
      <>
        <p>
          PCやタブレットでは画面左下の投稿ボタン、またはスマートフォンでは右下の投稿ボタンから投稿できます。
        </p>
        <p>Nostrには文字数制限がありません。好きな文章を投稿してみましょう。</p>
      </>
    ),
    image: nostterPostImageSrc,
    bgColor: "bg-accent-orange",
  },
  {
    title: "プロフィールを設定する",
    children: (
      <>
        <p>
          他のユーザーがあなたを見つけられるように、アイコンなどのプロフィールを設定しましょう。
        </p>
        <p>
          PCやタブレットでは、左の「プロフィール」ボタン、スマートフォンでは右下のボタンから人型のアイコンをタップして自分のプロフィール画面を開きます。
        </p>
        <p>
          次に🔧マークの編集ボタンをタップします。ここでプロフィールの設定ができます。
        </p>
      </>
    ),
    image: nostterProfileImageSrc,
    bgColor: "bg-accent-pink",
  },
];

export default function Index() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center text-center py-36 space-y-6 border-b-2 border-black p-6">
        <img src={logoSrc} alt="logo" />
        <h1 className="text-4xl font-bold leading-none">
          ようこそ、分散型SNS「Nostr」へ！
        </h1>
        <h2 className="text-2xl text-neutral-600 leading-none">
          Nostr日本語チュートリアルサイト
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-end border-b-2 border-black">
        <div className="w-0 sm:w-36 border-r-2 border-black" />
        <div className="p-12 space-y-4 w-full border-b-2 sm:border-b-0 sm:border-r-2 border-black">
          <img src={whatIsNostrSrc} alt="What is Nostr" width={80} />
          <h2 className="text-4xl font-medium">Nostrとは？</h2>
          <p>
            Nostrとは、分散型SNSを構築するために作られたシンプルなシステム/プロトコルです。
          </p>
          <p>
            投稿はリレーと呼ばれる世界各地にあるサーバーに保存され、クライアントと呼ばれるWebサイトやアプリを使って、ユーザーが自由に選んで見ることができます。
          </p>
        </div>
        <div>
          <p className="text-xl whitespace-nowrap border-b-2 leading-none border-black text-center p-6 bg-accent-yellow sm:bg-transparent transition-colors">
            とりあえず使ってみる
          </p>
          <div className="space-y-3 flex flex-col p-6">
            <Button
              color="purple"
              element="a"
              href="https://apps.apple.com/jp/app/damus/id1628663131"
              target="_blank"
              rel="noopener"
            >
              Damus (iOS)
            </Button>
            <Button
              color="emerald"
              element="a"
              href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst&hl=ja&gl=US"
              target="_blank"
              rel="noopener"
            >
              Amethyst (Android)
            </Button>
            <Button
              color="white"
              element="a"
              href="https://snort.social"
              target="_blank"
              rel="noopener"
            >
              Snort (Web)
            </Button>
            <Button
              color="orange"
              element="a"
              href="https://nostter.app"
              target="_blank"
              rel="noopener"
            >
              Nostter (Web)
            </Button>
            <Button
              color="pink"
              element="a"
              href="https://rabbit.syusui.net"
              target="_blank"
              rel="noopener"
            >
              Rabbit (Web)
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4 bg-neutral-200 border-b-2 border-black">
          <h2 className="text-xl text-center">Nostrの特徴</h2>
        </div>
        <div className="flex justify-center w-full">
          <div className="border-b-2 border-black flex-1 md:pr-6 pr-0" />
          <div className="max-w-screen-lg">
            <div className="flex justify-end mx-auto">
              <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-stretch md:border-l-2 border-black">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="border-b-2 md:border-r-2 border-black"
                  >
                    <div
                      className={`${feature.bgColor} flex items-center justify-center h-60 border-b-2 border-black self-auto`}
                    >
                      <img
                        src={feature.image}
                        className="w-full h-full object-contain p-9"
                        alt={feature.title}
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl">{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              className="text-3xl font-bold p-6 bg-accent-yellow max-w-screen-lg hover:brightness-95 transition-all md:border-x-2 border-b-2 border-black flex items-center justify-between"
              href="https://scrapbox.io/nostr/はじめてのNostr%E3%80%90はじめての方はこちら%E3%80%91"
              target="_blank"
              rel="noreferrer"
            >
              <p className="leading-none">More Info...</p>
              <img src={externalIconSrc} alt="external page link" />
            </a>
          </div>
          <div className="border-b-2 border-black md:pl-6 pl-0 flex-1" />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="border-b-2 border-black flex-1 md:pr-6 pr-0" />
        <div className="max-w-screen-lg w-full md:border-x-2 border-b-2 border-black">
          <div className="flex flex-col items-center py-12 px-6 space-y-6">
            <img src={gettingStartedSrc} height={90} width={110} alt="" />
            <h2 className="text-4xl leading-none font-medium">
              Nostrのはじめかた
            </h2>
            <p>
              このチュートリアルでは、
              <Link external to="https://nostter.app">
                Nostter
              </Link>
              を使ってNostrをはじめる方法を説明します。
            </p>
          </div>
          <div>
            {gettingStartedSteps.map((step, index) => (
              <div key={step.title} className="flex">
                <div className="flex-1">
                  <h3
                    className={`px-6 py-5 text-xl leading-none border-t-2 border-black ${
                      step.bgColor || ""
                    }`}
                  >
                    {index + 1}. {step.title}
                  </h3>

                  <div className="flex-1 block md:hidden">
                    <img
                      className="aspect-[4/3] object-fill bg-stone-200 border-black border-t-2"
                      src={step.image}
                      alt={step.title}
                    />
                  </div>
                  <div className="p-6 border-t-2 border-black space-y-8">
                    {step.children}
                  </div>
                </div>
                <div className="flex-1 hidden md:block border-t-2 border-l-2 border-black">
                  <img
                    className="aspect-[4/3] object-fill bg-stone-200 "
                    src={step.image}
                    alt={step.title}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center p-6 border-t-2 border-black ">
            <img src={cheeseSrc} alt="Cheeeese!" width={64} />
          </div>
        </div>
        <div className="border-b-2 border-black flex-1 md:pr-6 pr-0" />
      </div>

      <Footer />
    </div>
  );
}
