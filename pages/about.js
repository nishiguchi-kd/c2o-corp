// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            {/* ページの残りのコンテンツ */}
            <h1>About our Service<span>サービスについて</span></h1>
            <section>
                <h2>私たちができること</h2>
                <p>ウェブメディアの立ち上げから運営、成長戦略の策定まで、一貫したサポートを行います。<br />
                ウェブメディアの運営は、目標達成に向けた持続的な努力が必要です。<br />
                内製化が難しいウェブメディアの各領域において、<br />
                戦略的なアプローチと実行サポートを行い、お客様のウェブメディアを次のレベルへと導きます。</p>
                <div className='about_block_list'>
                    <div className='about_block_list_item'>
                        <figure></figure>
                        <figcaption>ウェブメディアの目的と設計</figcaption>
                        <p>データ収集と分析に基づき、見える化された成果に基づいて、戦略のブラッシュアップを行います。</p>
                    </div>
                    <div className='about_block_list_item'>
                        <figure></figure>
                        <figcaption>施策のPDCA</figcaption>
                        <p>ライティング、ライティング支援、広告運用、アナリティクス解析を行います。</p>
                    </div>
                    <div className='about_block_list_item'>
                        <figure></figure>
                        <figcaption>クリエイティブ</figcaption>
                        <p>バナー作成、ウェブサイト構築、CMS構築、ランディングページ設計を行います。</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>ウェブメディアの役割</h2>
                <p>拡散力のあるSNSは、新しい情報しか触れられないため、
                悩みや困りごとへの解決を求めている人は検索エンジンを使用します。

                そこで、ウェブサイトにコンテンツを設けて待ち構えることができる
                「メディアサイト」でSNSの弱点である「蓄積」と「検索」カバー。

                発信内容にあわせて情報の出し方を変えながら「情報の倉庫」として活用し、
                潜在顧客層までリーチする情報網を構築することができます。</p>
                <p><image src="" /></p>
            </section>
            <section>
                <h2>メディアサイトの成長と運用</h2>
                <p>C2Oでは、ウェブメディアを通じて、お客様のビジネス成長を総合的にサポートいたします。
                ウェブメディアの制作運用と成長には、綿密な戦略と日々の努力が必要になります。
                </p>
                <p><image src="" /></p>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
