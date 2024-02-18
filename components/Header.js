// components/Header.js
import styles from './Header.module.scss'; // SCSSモジュールを使用している場合
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <p>
                    <a href='/'>
                        <Image
                            src="/images/logo.svg"
                            alt="C2O"
                            width={74} // 画像の幅
                            height={40} // 画像の高さ
                        />
                    </a>
                </p>
                <ul>
                    <li><a href="/">TOP<span>トップ</span></a></li>
                    <li><a href="/about">ABOUT<span>私たちができること</span></a></li>
                    <li><a href="/company">COMPANY<span>会社概要</span></a></li>
                    <li><a href="/contact">CONTACT<span>お問い合わせ</span></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
