import type { NextPage } from 'next';
import classnames from 'classnames/bind';
//
import Layout from './components/layout';
import styles from './index.module.css';
//
const cls = classnames.bind(styles);

const Home: NextPage = () => {
    return (
        <Layout>
            <div className={cls('body')}>
                <div className={cls('content')}>
                    <section className={cls('section', 'section-1')}>
                        <div className={cls('title')}>
                            Seedless <span>&</span> <br/>Social Recovery
                        </div>
                        <div className={cls('description')}>
                            <i>Private keys? Mnemonic phrases? No more!</i>
                            <p>
                                Civia social recovery mechanism <br/>guarantees 100% wallet recovery <br/>after you specify a few trusted <br/>friends as guardians, in simple <br/>steps.
                            </p>
                        </div>
                    </section>
                    <section className={cls('section', 'section-2')}>
                        <div className={cls('title')}>
                        Build your <span>social <br/>reputation</span> <br/>with peace of mind
                        </div>
                        <div className={cls('description')}>
                            <i>My private key is leaked, the wallet <br/>address won't be safe. What about my <br/>nontransferable certificates and the <br/>social network I've been trying so hard to <br/>build?</i>
                            <p>
                            With the 100% social recovery <br/>mechanism, Civia reassign the <br/>controlling private key of the wallet <br/>to your specified new key, so that <br/>you can continue accumulate your <br/>social reputation with peace of <br/>mind.
                            </p>
                        </div>
                    </section>
                    <section className={cls('section', 'section-3')}>
                        <div className={cls('title')}>
                        Wallet Level <br/><span>Social Graph</span>
                        </div>
                        <div className={cls('description')}>
                            <i>So, I don't own my social graph? and <br/>my social graph can't be shared <br/>across DApps?</i>
                            <p>
                            Civia have your social graph in your <br/>wallet, and you can take it <br/>anywhere to any DApps.
                            </p>
                        </div>
                    </section>
                    <section className={cls('section', 'section-4')}>
                        <div className={cls('title')}>
                        User Defined <span>SBT</span><br/>&nbsp;
                        </div>
                        <div className={cls('description')}>
                            <i>Why should anyone write a smart <br/>contract in order to issue SBTs?<br/>&nbsp;</i>
                            <p>
                                With Civia, anyone can issue SBTs to <br/>anyone else with no code written.
                            </p>
                        </div>
                    </section>
                    <section className={cls('section', 'section-5')}>
                        <div className={cls('title')}>
                        Ethereum <span>&</span> L2
                        </div>
                        <div className={cls('description')}>
                            <i></i>
                            <p>
                            NFT and token assets live on Ethereum, while functionalities and fun <br/>actions are on L2. <br/>Civia provides unified user experience <br/>across Ethereum and L2.
                            </p>
                        </div>
                    </section>
                    <section className={cls('section', 'section-6')}>
                        <div className={cls('title')}>
                        Wallet As A <span>Service</span>
                        </div>
                        <div className={cls('description')}>
                            <i></i>
                            <p>
                            With the flexible multi-key mechanism, users get <br/>smooth surfing experience across multiple <br/>DApps each with their dedicated keys.  <br/>No need to switch keys between <br/>wallets and DApps.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Home;