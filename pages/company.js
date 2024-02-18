// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import CustomHead from '../components/CustomHead'; // カスタム Head コンポーネントをインポート
import styles from '../styles/pages/company.module.scss';

const HomePage = () => {
    return (
        <div>
            <CustomHead 
                title="会社概要 | C2OのWEBサイト" 
                description="ホームページの説明" 
            />
            <Header />
            <main>
                <h1 className="pageTitle">Company Profile<span>会社概要</span></h1>
                <section className={styles.companySection01}>
                    <div className="pageContainer">
                        <h2 className={styles.companyTitle01}>C2Oが提供する<span>ソリューション</span></h2>
                        <div className={styles.companyBlock}>
                            <div className={styles.companyBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/company_img01.png"
                                        alt="ウェブメディアの目的と設"
                                        width={390} // 画像の幅
                                        height={250} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>WEBディレクション</figcaption>
                                <p>大手広告代理店のグループ会社にて、ナショナルクライアントを中心にWEBディレクターを3年経験。
                                その経験を生かして、現在も大手通販メーカーのブランドサイトの企画から構成、デザインディレクション、コーディングサポートなど対応中。
                                そのほか、企業ポートレートサイトのフルリニューアルや、企業サイト制作などWEBサイトに関することでしたら、上流工程から下流工程まで実施可能。</p>
                            </div>
                            <div className={styles.companyBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/company_img02.png"
                                        alt="施策のPDCA"
                                        width={390} // 画像の幅
                                        height={250} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>メディアコンサルティング</figcaption>
                                <p>月間PV3000万超のニュースメディアの立ち上げから参加し、CMS（WordPress）の構築ディレクション、広
                                告収益化、SEOを意識したコンテンツ制作、SNS運用、GoogleAnalytics分析などを実施。
                                現在もナショナルクライアントのオウンドメディアの全体戦略や、CMSのプラグイン提案などの簡単なアドバイスまで、サポートしています。</p>
                            </div>
                            <div className={styles.companyBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/company_img03.png"
                                        alt="クリエイティブ"
                                        width={390} // 画像の幅
                                        height={250} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>運用広告制作</figcaption>
                                <p>現在、大手広告代理店と協力会社としてパートナー契約をしており、LP提案、バナー制作、運用レビューなど
                                ダイレクトマーケティング分野で6年以上の実績があります。また、広告配信パートナー企業と連携して、広告運用も実施可能。「自社の広告を出してみたい」「何から始めていいかわからない」など何でもご相談ください！</p>
                            </div>
                            <div className={styles.companyBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/company_img04.png"
                                        alt="SEO対策"
                                        width={390} // 画像の幅
                                        height={250} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>SEO対策</figcaption>
                                <p>メディア運用、WEBディレクションの実績をもとにアクセス分析やキーワード分析を行います。
                                すべてのWEB制作物でSEOを意識したディレクトリ構造設計、サイトスピード設計、コンテンツ制作を行います。</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.companySection02}>
                    <div className="pageContainer">
                        <dl>
                            <dt>社名</dt>
                            <dd>合同会社C2O （シーツーオー）</dd>
                        </dl>
                        <dl>
                            <dt>代表者</dt>
                            <dd>代表取締役　吉尾 峻</dd>
                        </dl>
                        <dl>
                            <dt>創立</dt>
                            <dd>2018年9月13日</dd>
                        </dl>
                        <dl>
                            <dt>資本金</dt>
                            <dd>5,000万</dd>
                        </dl>
                        <dl>
                            <dt>事業内容</dt>
                            <dd>WEB制作事業、<br />
                            メディアコンサルティング事業、<br />
                            運用広告事業、<br />
                            自社メディア事業</dd>
                        </dl>
                        <dl>
                            <dt>所在地</dt>
                            <dd>〒154-0004 東京都世田谷区太子堂4-8-16 603<br />
                            <br />
                            田園都市線三軒茶屋駅から徒歩5分</dd>
                        </dl>
                        <dl>
                            <dt>主要取引先</dt>
                            <dd>株式会社Hakuhodo DY Matrix<br />
                            株式会社大広<br />
                            株式会社イメジン<br />
                            株式会社Sound Coast</dd>
                        </dl>
                    </div>
                </section>
                <section className={styles.companySection03}>
                    <div className="pageContainer">
                        <p>
                            <Image
                                src="/images/company_img05.png"
                                alt="吉尾 峻"
                                width={940} // 画像の幅
                                height={676} // 画像の高さ
                            />
                        </p>
                        <p>少し長い文章をここに入れようかと。
                            少し長い文章をここに入れようかと。
                            少し長い文章をここに入れようかと。
                            少し長い文章をここに入れようかと。
                            少し長い文章をここに入れようかと。
                            少し長い文章をここに入れようかと。
                            少し長い文章をここに入れようかと。</p>
                        <p>吉尾 峻<span>Shun Yoshio</span></p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
