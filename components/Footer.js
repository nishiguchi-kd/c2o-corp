import styles from './Footer.module.scss'; // SCSSモジュールを使用している場合

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright C2O. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
