"use client";

import { motion } from "framer-motion";

export default function EscapeGameLP() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* 背景ノイズ */}
      <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="tracking-[0.5em] text-red-500 mb-4">
            ESCAPE GAME
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight">
            あなたは
            <br />
            脱出できるか
          </h1>

          <p className="mt-8 text-gray-300 max-w-xl mx-auto text-lg md:text-xl">
            閉ざされた館、残された暗号、
            <br />
            制限時間60分。
          </p>

          <button className="mt-10 px-10 py-4 bg-red-600 hover:bg-red-500 transition-all rounded-2xl text-lg font-bold shadow-2xl shadow-red-900/50">
            今すぐ挑戦する
          </button>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-red-500 tracking-[0.3em] mb-4">ABOUT</p>

          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            体験するミステリー
          </h2>

          <p className="text-gray-300 leading-8 text-lg max-w-3xl">
            プレイヤーは謎に満ちた空間へ閉じ込められる。
            手がかりを集め、暗号を解読し、
            仲間と協力しながら脱出を目指す。
            <br />
            <br />
            あなたの観察力、推理力、そして直感が試される。
          </p>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="py-28 bg-zinc-950 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-500 tracking-[0.3em] mb-4">STORY</p>

          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            「助けて。まだここにいる。」
          </h2>

          <div className="space-y-8 text-gray-300 text-lg leading-9">
            <p>
              深夜0時。
              <br />
              あなたの元に届いた一通のメール。
            </p>

            <div className="border-l-4 border-red-600 pl-6 italic text-white">
              助けて。まだここにいる。
            </div>

            <p>
              差出人は、3年前に失踪した友人だった。
              <br />
              導かれるように辿り着いた廃館。
            </p>

            <p>
              扉が閉まる音とともに、
              館内アナウンスが響く。
            </p>

            <div className="text-2xl font-bold text-red-500">
              「ゲームを開始します。」
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <p className="text-red-500 tracking-[0.3em] mb-4">FEATURES</p>

        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          このゲームの特徴
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "本格謎解き",
              text: "初心者から上級者まで楽しめる多層構造。",
            },
            {
              title: "マルチエンディング",
              text: "選択によって物語が変化する。",
            },
            {
              title: "オンライン対応",
              text: "PC・スマホでプレイ可能。",
            },
            {
              title: "圧倒的演出",
              text: "映像・BGM・UIで没入感を最大化。",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl hover:border-red-500 transition"
            >
              <div className="text-red-500 text-5xl font-black mb-6">
                0{i + 1}
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLOW */}
      <section className="py-28 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500 tracking-[0.3em] mb-4">FLOW</p>

          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            遊び方
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "ゲーム開始",
              "部屋を探索",
              "情報を収集",
              "謎を解く",
              "脱出成功",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-800 rounded-3xl p-8 text-center"
              >
                <div className="text-red-500 text-4xl font-black mb-4">
                  {i + 1}
                </div>

                <p className="font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 text-center overflow-hidden">
        <div className="absolute inset-0 bg-red-950 opacity-20 blur-3xl" />

        <div className="relative z-10 px-6">
          <p className="text-red-500 tracking-[0.3em] mb-6">
            FINAL MISSION
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            最後の1分まで、
            <br />
            生き残れ。
          </h2>

          <button className="mt-12 px-12 py-5 bg-red-600 hover:bg-red-500 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-red-900/50">
            今すぐ脱出する
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500">
        <p>© 2026 ESCAPE GAME</p>
      </footer>
    </main>
  );
}
