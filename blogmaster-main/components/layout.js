import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "SanctaInf";
const pagephoto = "PagePhoto";
export const siteTitle = "SanctusInf";

export default function Layout({ children, home }) {
    return ( <
        div className = { styles.container } >
        <
        Head >
        <
        /Head>{" "} <
        header className = { styles.header } > { " " } {
            home ? ( <
                >

                { " " } <
                h1 className = { utilStyles.heading2Xl } > { name } < /h1>{" "} <
                />

            ) : ( <
                >
                <
                Link href = "/" >
                <
                a >
                <
                img src = "/"
                className = { `${styles.headerImage} ${utilStyles.borderCircle}` }
                alt = { pagephoto }
                />{" "} <
                /a>{" "} <
                /Link>{" "} <
                h2 className = { utilStyles.headingLg } >
                <
                Link href = "/" >
                <
                a className = { utilStyles.colorInherit } > { name } < /a>{" "} <
                /Link>{" "} <
                /h2>{" "} <
                />
            )
        } { " " } <
        /header>{" "} <
        main > { children } < /main>{" "} {
            !home && ( <
                div className = { styles.backToHome } >
                <
                Link href = "/" >
                <
                a > ←Geri Dön < /a>{" "} <
                /Link>{" "} <
                /div>
            )
        } { " " } <
        /div>
    );
}