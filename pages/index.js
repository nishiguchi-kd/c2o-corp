// pages/index.js
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Footerとして正しくインポート
import Image from 'next/image';
import CustomHead from '../components/CustomHead'; // カスタム Head コンポーネントをインポート
import styles from '../styles/pages/top.module.scss';

const HomePage = () => {
    useEffect(() => {
        // GSAPとScrollTriggerを動的にインポートして使用
    const loadGSAP = async () => {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/dist/ScrollTrigger');
        const gsap = gsapModule.default; // gsapのデフォルトエクスポートを取得
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger); // registerPluginを正しく呼び出す

        gsap.to(`.${styles.topBlock}`, {
        xPercent: -100 * (3 - 1), // 3はアイテム数、1を引くのは0ベースのインデックスのため
        ease: 'none',
        scrollTrigger: {
            trigger: `.${styles.topSection01}`,
            pin: true,
            scrub: 1,
            end: () => `+=${document.querySelector(`.${styles.topBlock}`).offsetWidth}`,
        },
        });
    };

    loadGSAP();
    }, []);

    return (
        <div>
            <CustomHead 
                title="C2OのWEBサイト" 
                description="トップページ" 
            />
            <Header />
            <main>
                <div className={styles.topMainvisual}>
                    <h1>Digital Reach</h1>
                    <h2>PEAK RESULTS</h2>
                    <p>成果を生み出すクリエイティブソリューション</p>
                    <div className='scroll'>SCROLL</div>
                </div>
                <div className={styles.topRead}>
                    <h3>CONSULTING</h3>
                    <h4>全ての工程を経験してきたから一貫したご提案が可能です。</h4>
                    <p>WEB制作におけるすべての工程を経験してきたために<br />
                    企画提案から納品、分析に至るまで一貫したご提案が可能です。<br />
                    また、プロジェクトによって最適な人材をアサインできることが強みです。</p>
                </div>
                <section className={styles.topSection01}>
                    <div className="pageContainer">
                        <div className={styles.topBlock}>
                            <div className={styles.topBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/top_img01.png"
                                        alt="WEBディレクション"
                                        width={640} // 画像の幅
                                        height={360} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>WEBディレクション</figcaption>
                                <p>大手広告代理店のグループ会社にて、ナショナルクライアントを中心にWEBディレクターを3年経験。
                                    その経験を生かして、現在も大手通販メーカーのブランドサイトの企画から構成、
                                    デザインディレクション、コーディングサポートなど対応中。
                                    そのほか、企業ポートレートサイトのフルリニューアルや、
                                    企業サイト制作などWEBサイトに関することでしたら、上流工程から下流工程まで実施可能。</p>
                            </div>
                            <div className={styles.topBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/top_img02.png"
                                        alt="WEBディレクション"
                                        width={640} // 画像の幅
                                        height={360} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>WEBディレクション</figcaption>
                                <p>大手広告代理店のグループ会社にて、ナショナルクライアントを中心にWEBディレクターを3年経験。
                                    その経験を生かして、現在も大手通販メーカーのブランドサイトの企画から構成、
                                    デザインディレクション、コーディングサポートなど対応中。
                                    そのほか、企業ポートレートサイトのフルリニューアルや、
                                    企業サイト制作などWEBサイトに関することでしたら、上流工程から下流工程まで実施可能。</p>
                            </div>
                            <div className={styles.topBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/top_img03.png"
                                        alt="WEBディレクション"
                                        width={640} // 画像の幅
                                        height={360} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>WEBディレクション</figcaption>
                                <p>大手広告代理店のグループ会社にて、ナショナルクライアントを中心にWEBディレクターを3年経験。
                                    その経験を生かして、現在も大手通販メーカーのブランドサイトの企画から構成、
                                    デザインディレクション、コーディングサポートなど対応中。
                                    そのほか、企業ポートレートサイトのフルリニューアルや、
                                    企業サイト制作などWEBサイトに関することでしたら、上流工程から下流工程まで実施可能。</p>
                            </div>
                            <div className={styles.topBlockListItem}>
                                <figure>
                                    <Image
                                        src="/images/top_img04.png"
                                        alt="WEBディレクション"
                                        width={640} // 画像の幅
                                        height={360} // 画像の高さ
                                    />
                                </figure>
                                <figcaption className={styles.figcaption}>WEBディレクション</figcaption>
                                <p>大手広告代理店のグループ会社にて、ナショナルクライアントを中心にWEBディレクターを3年経験。
                                    その経験を生かして、現在も大手通販メーカーのブランドサイトの企画から構成、
                                    デザインディレクション、コーディングサポートなど対応中。
                                    そのほか、企業ポートレートサイトのフルリニューアルや、
                                    企業サイト制作などWEBサイトに関することでしたら、上流工程から下流工程まで実施可能。</p>
                            </div>
                        </div>
                        <p className='btn'>私たちができること</p>
                    </div>
                    
                </section>
                <section className={styles.topSection02}>
                    <div className="pageContainer">
                        <div className={styles.topBlock}>
                            <div className={styles.topBlockListItem}>
                                <Image
                                    src="/images/top_img05.png"
                                    alt="WEBディレクション"
                                    width={340} // 画像の幅
                                    height={460} // 画像の高さ
                                />
                            </div>
                            <div className={styles.topBlockListItem}>
                                <p className={styles.topBlockListItemText01}>Shun Yoshio</p>
                                <p className={styles.topBlockListItemText02}>吉尾 峻</p>
                                <p className={styles.topBlockListItemText03}>WEBディレクター WEB Director</p>
                                <p className={styles.topBlockListItemText04}>1988年生まれ。バイオサイエンス学科を卒業後、
                                    博報堂グループのWEB制作会社でWEBディレクターとして3年従事し、
                                    ニュースメディア「しらべぇ」の立ち上げに参画。
                                    2018年に合同会社C2Oを設立し、WEB制作やオウンドメディアコンサルタントとして活動。</p>
                                <p>会社概要</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;