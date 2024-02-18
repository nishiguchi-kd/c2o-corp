// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import CustomHead from '../components/CustomHead'; // カスタム Head コンポーネントをインポート
import styles from '../styles/pages/contact.module.scss';

const HomePage = () => {
    return (
        <div>
            <CustomHead 
                title="お問い合わせ | C2OのWEBサイト" 
                description="ホームページの説明" 
            />
            <Header />
            <main>
                <h1 className="pageTitle">Contact<span>お問合せ</span></h1>
                <section className={styles.contactSection01}>
                    <div className="pageContainer">
                    <form action="実際の送信先URL" method="post">
                        <label htmlFor="company-name">会社名:</label><br />
                        <input type="text" id="company-name" name="companyName" required /><br />
                        
                        <label htmlFor="email">メールアドレス:</label><br />
                        <input type="email" id="email" name="email" required /><br />
                        
                        <label htmlFor="contact-name">ご担当者名:</label><br />
                        <input type="text" id="contact-name" name="contactName" required /><br />
                        
                        <label htmlFor="phone-number">電話番号:</label><br />
                        <input type="tel" id="phone-number" name="phoneNumber" pattern="\d{1,4}-\d{1,4}-\d{3,4}" required /><br />
                        
                        <label htmlFor="inquiry">お問い合わせ内容:</label><br />
                        <textarea id="inquiry" name="inquiry" required></textarea><br />
                        
                        <input type="checkbox" id="privacy-policy" name="privacyPolicy" required />
                        <label htmlFor="privacy-policy">個人情報の取り扱いについて同意する</label><br />
                        
                        <input type="submit" value="送信する" />
                    </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
