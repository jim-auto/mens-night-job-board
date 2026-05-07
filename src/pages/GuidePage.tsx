import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './GuidePage.module.css';

const GuidePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>はじめてのナイトワーク</h1>
        <p className={styles.subtitle}>
          男性向けナイトワークの基礎知識・職種・キャリアパスを詳しく解説
        </p>

        {/* 職種ガイド */}
        <section className={styles.section}>
          <h2>💼 主な職種について</h2>

          <div className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3>ボーイ</h3>
              <span className={styles.level}>入門・未経験OK</span>
            </div>
            <p className={styles.jobDescription}>
              クラブ・ラウンジでのホール業務。ドリンク提供・灰皿交換・席の案内などが中心。
            </p>
            <ul className={styles.jobDetails}>
              <li>
                <strong>勤務時間：</strong> 18:00〜翌2:00（店舗により異なる）
              </li>
              <li>
                <strong>給与：</strong> 時給 1,500〜3,000円程度
              </li>
              <li>
                <strong>メリット：</strong> 接客スキルが身につく、未経験でも始めやすい
              </li>
              <li>
                <strong>課題：</strong> 足が疲れやすい、客層によってストレス度が変わる
              </li>
              <li>
                <strong>キャリア：</strong> 黒服への昇進が一般的なキャリアパス
              </li>
            </ul>
          </div>

          <div className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3>黒服（マネージャー）</h3>
              <span className={styles.level}>中級・経験者向け</span>
            </div>
            <p className={styles.jobDescription}>
              店舗の顔。客の案内・席の配置・スタッフ管理・売上管理など、店舗オペレーションの中心人物。
            </p>
            <ul className={styles.jobDetails}>
              <li>
                <strong>勤務時間：</strong> 17:00〜翌2:00（正社員が多い）
              </li>
              <li>
                <strong>給与：</strong> 月給 30〜80万円+賞与
              </li>
              <li>
                <strong>メリット：</strong> 給与が大幅に上がる、マネジメント経験が得られる
              </li>
              <li>
                <strong>課題：</strong> 責任が重い、スタッフ管理でストレスあり
              </li>
              <li>
                <strong>キャリア：</strong> 幹部への昇進、独立、別業種への転職
              </li>
            </ul>
          </div>

          <div className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3>ホスト</h3>
              <span className={styles.level}>高収入・営業力必須</span>
            </div>
            <p className={styles.jobDescription}>
              女性客との会話・接待が主業務。営業力とコミュニケーション能力で収入が大きく変わる。
            </p>
            <ul className={styles.jobDetails}>
              <li>
                <strong>勤務時間：</strong> 20:00〜翌5:00（遅く開店）
              </li>
              <li>
                <strong>給与：</strong> 月給 0〜数百万円（完全歩合）
              </li>
              <li>
                <strong>メリット：</strong> 高収入の可能性、営業スキルが磨ける
              </li>
              <li>
                <strong>課題：</strong> 精神的負担が大きい、個人差が極めて大きい
              </li>
              <li>
                <strong>キャリア：</strong> セッション管理職、店舗管理職、グループ経営
              </li>
            </ul>
          </div>

          <div className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3>ドライバー</h3>
              <span className={styles.level}>単価・柔軟性重視</span>
            </div>
            <p className={styles.jobDescription}>
              クラブの送迎業務。営業終了後の客・スタッフ送迎が中心。
            </p>
            <ul className={styles.jobDetails}>
              <li>
                <strong>勤務時間：</strong> 23:00〜翌5:00（夜間専門）
              </li>
              <li>
                <strong>給与：</strong> 時給 1,500〜2,500円程度
              </li>
              <li>
                <strong>メリット：</strong> シフト融通が効く、人間関係が浅い
              </li>
              <li>
                <strong>課題：</strong> 運転技術の安全性が求められる
              </li>
              <li>
                <strong>キャリア：</strong> 副業ベース、独立タクシー運転手への転職も可
              </li>
            </ul>
          </div>

          <div className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h3>スカウト</h3>
              <span className={styles.level}>営業・セルス向け</span>
            </div>
            <p className={styles.jobDescription}>
              新しいキャストを勧誘する営業職。既存キャストの維持・拡大が目標。
            </p>
            <ul className={styles.jobDetails}>
              <li>
                <strong>勤務時間：</strong> 22:00〜翌2:00（柔軟）
              </li>
              <li>
                <strong>給与：</strong> 時給 2,000〜+歩合
              </li>
              <li>
                <strong>メリット：</strong> 営業スキルが身につく、独立ベース
              </li>
              <li>
                <strong>課題：</strong> 成績ベース給与、対人ストレス
              </li>
              <li>
                <strong>キャリア：</strong> 店舗管理職、グループ事業拡大
              </li>
            </ul>
          </div>
        </section>

        {/* キャリアパス */}
        <section className={styles.section}>
          <h2>📈 典型的なキャリアパス</h2>

          <div className={styles.careerPath}>
            <div className={styles.pathRow}>
              <div className={styles.stage}>
                <div className={styles.stageTitle}>Year 0-1: 入門期</div>
                <p>ボーイ・未経験ドライバー</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.stage}>
                <div className={styles.stageTitle}>Year 1-2: 成長期</div>
                <p>黒服昇進（ボーイから）</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.stage}>
                <div className={styles.stageTitle}>Year 2-5: 発展期</div>
                <p>店長・主任・セッション管理職</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.stage}>
                <div className={styles.stageTitle}>Year 5+: 自立期</div>
                <p>独立・別事業・他業種転職</p>
              </div>
            </div>
          </div>

          <div className={styles.pathNote}>
            <p>
              ⚠️ <strong>キャリアパスは人による</strong>：上記は平均的な例です。
              人によって2年で独立する人、ずっとボーイで続ける人、初年度に辞める人など様々です。
            </p>
          </div>
        </section>

        {/* よくある質問 */}
        <section className={styles.section}>
          <h2>❓ よくある質問</h2>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              未経験でも採用されますか？
            </h3>
            <p>
              はい。ボーイやドライバーの多くは未経験者を受け入れています。ただし店舗による。
              研修体制が充実している店舗を選ぶと続きやすいです。
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              どのくらい働けば月給 100万円いきますか？
            </h3>
            <p>
              職種による。ホスト・黒服なら平均 1-3年。ボーイだと月給 100万円は難しく、
              黒服への昇進が必須。給与は個人の成績・交渉力に左右されます。
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              夜勤で健康を壊さないか？
            </h3>
            <p>
              個人差が大きい。生活リズムの調整・栄養管理・十分な睡眠が必須。
              多くの経験者は体力維持のためジムに通ったり、ビタミン補給をしています。
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              客層はどんな人たちですか？
            </h3>
            <p>
              店舗による。高級店はビジネスマン・企業幹部・著名人など。
              大衆的な店舗は工場労働者・タクシー運転手など幅広い層。
              事前に店舗の評判をリサーチすることをお勧めします。
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              辞める人は多い？
            </h3>
            <p>
              多い傾向。特に初年度の離職率は 30-50% 程度。
              「思っていた仕事と違う」「人間関係がつらい」が理由。
              研修が充実した店舗ほど定着率が高いです。
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              給与の支払いは確実ですか？
            </h3>
            <p>
              大手グループ傘下の店舗はほぼ確実。個人経営店は要注意。
              面接時に「給与の支払い方法」「トラブル時の相談窓口」を確認するとよいです。
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              借金リスクはないですか？
            </h3>
            <p>
              違法な店舗では借金トラブルが報告されています。
              「前払い金」「寮費」の名目で金銭を要求する店舗は避けるべき。
              事前調査と信頼できる人への相談が重要です。
            </p>
          </div>
        </section>

        {/* アドバイス */}
        <section className={styles.section}>
          <h2>💡 最後に：ナイトワークを始める前に</h2>

          <div className={styles.adviceBox}>
            <h3>✅ チェックリスト</h3>
            <ul className={styles.adviceList}>
              <li>職場の評判をネット・知人から確認しましたか？</li>
              <li>
                給与・休日・福利厚生を書面で確認しましたか？
              </li>
              <li>夜勤で生活リズムを整えられる自信はありますか？</li>
              <li>短期で辞めるかもしれない状況を想定していますか？</li>
              <li>親・配偶者に職業を明かせるレベルですか？</li>
              <li>トラブル時の相談先を持っていますか？</li>
            </ul>
          </div>

          <div className={styles.adviceBox}>
            <h3>🎯 成功のコツ</h3>
            <ul className={styles.adviceList}>
              <li>
                <strong>研修充実店を選ぶ</strong>：教育体制がしっかりした店舗は定着率が高い
              </li>
              <li>
                <strong>先輩の声を聞く</strong>：実際の勤務ペース・人間関係を知る
              </li>
              <li>
                <strong>健康管理を徹底</strong>：夜勤対応の体力づくりは必須
              </li>
              <li>
                <strong>貯蓄目標を決める</strong>：「○○万円貯めて辞める」という目標が続きやすい
              </li>
              <li>
                <strong>人間関係を大事に</strong>：トラブルの 70% は人間関係が原因
              </li>
              <li>
                <strong>定期的に自己評価</strong>：3ヶ月ごとに「続ける/辞める」を検討
              </li>
            </ul>
          </div>
        </section>

        {/* リソース */}
        <section className={styles.section}>
          <h2>📚 参考リソース</h2>
          <div className={styles.resourceList}>
            <div className={styles.resourceItem}>
              <h3>求人情報</h3>
              <p>当サイトの「求人一覧」では、実際の求人を エリア・職種でフィルタできます。</p>
              <a href="/#/jobs" className={styles.ctaLink}>
                求人一覧を見る →
              </a>
            </div>
            <div className={styles.resourceItem}>
              <h3>給与比較</h3>
              <p>
                「給与比較」ページで、エリア・職種別の給与相場を可視化しました。
              </p>
              <a href="/#/compare" className={styles.ctaLink}>
                給与相場を確認 →
              </a>
            </div>
            <div className={styles.resourceItem}>
              <h3>相談窓口</h3>
              <p>
                トラブルがあれば、労働基準監督署・労働相談窓口に連絡を。
                秘密厳守で対応してくれます。
              </p>
            </div>
          </div>
        </section>

        <div className={styles.disclaimer}>
          <p>
            ⚠️ <strong>免責事項：</strong>
            このガイドは一般的な情報をまとめたものです。実際の職場・給与は店舗により大きく異なります。
            面接時に必ず確認し、不安な点は専門家に相談してください。
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuidePage;
