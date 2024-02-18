// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import CustomHead from '../components/CustomHead'; // カスタム Head コンポーネントをインポート
import styles from '../styles/pages/about.module.scss';

const HomePage = () => {
    return (
        <div>
            <CustomHead 
                title="C2OのWEBサイト" 
                description="ホームページの説明" 
            />
            <Header />
            <main>
                <h1 className="pageTitle">About our Service<span>サービスについて</span></h1>
                <section className={styles.aboutSection01}>
                    <div className="pageContainer">
                        <h2 className={styles.aboutTitle01}>私たちができること</h2>
                        <p className={styles.aboutText01}>ウェブメディアの立ち上げから運営、成長戦略の策定まで、一貫したサポートを行います。<br />
                        ウェブメディアの運営は、目標達成に向けた持続的な努力が必要です。<br />
                        内製化が難しいウェブメディアの各領域において、<br />
                        戦略的なアプローチと実行サポートを行い、お客様のウェブメディアを次のレベルへと導きます。</p>
                        <div className={styles.aboutBlock}>
                            <div className={styles.aboutBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/about_img01.png"
                                        alt="ウェブメディアの目的と設"
                                        width={307} // 画像の幅
                                        height={220} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>ウェブメディアの目的と設計</figcaption>
                                <p>データ収集と分析に基づき、見える化された成果に基づいて、戦略のブラッシュアップを行います。</p>
                            </div>
                            <div className={styles.aboutBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/about_img02.png"
                                        alt="施策のPDCA"
                                        width={307} // 画像の幅
                                        height={220} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>施策のPDCA</figcaption>
                                <p>ライティング、ライティング支援、広告運用、アナリティクス解析を行います。</p>
                            </div>
                            <div className={styles.aboutBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/about_img03.png"
                                        alt="クリエイティブ"
                                        width={307} // 画像の幅
                                        height={220} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>クリエイティブ</figcaption>
                                <p>バナー作成、ウェブサイト構築、CMS構築、ランディングページ設計を行います。</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.aboutSection02}>
                    <div className="pageContainer">
                        <h2 className={styles.aboutTitle01}>ウェブメディアの役割</h2>
                        <p className={styles.aboutText01}>拡散力のあるSNSは、新しい情報しか触れられないため、<br />
                        悩みや困りごとへの解決を求めている人は検索エンジンを使用します。<br />
                        <br />
                        そこで、ウェブサイトにコンテンツを設けて待ち構えることができる<br />
                        「メディアサイト」でSNSの弱点である「蓄積」と「検索」カバー。<br />
                        <br />
                        発信内容にあわせて情報の出し方を変えながら「情報の倉庫」として活用し、
                        潜在顧客層までリーチする情報網を構築することができます。</p>
                        <p>
                            <Image
                                src="/images/about_img04.png"
                                alt="ウェブメディアの役割"
                                width={958} // 画像の幅
                                height={544} // 画像の高さ
                            />
                        </p>
                    </div>
                </section>
                <section className={styles.aboutSection03}>
                    <div className="pageContainer">
                        <h2 className={styles.aboutTitle01}>メディアサイトの成長と運用</h2>
                        <p className={styles.aboutText01}>C2Oでは、ウェブメディアを通じて、お客様のビジネス成長を総合的にサポートいたします。<br />
                        ウェブメディアの制作運用と成長には、綿密な戦略と日々の努力が必要になります。
                        </p>
                        <p>
                            <Image
                                src="/images/about_img05.png"
                                alt="メディアサイトの成長と運"
                                width={958} // 画像の幅
                                height={495} // 画像の高さ
                            />
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
