import { useEffect } from "react";
import ChatbotAssets from "./assets/ChatbotAssets";
import "./assets/Whitepaper.css"; // Import CSS for this component
import fig1 from './assets/images/figure-1.png';
import fig2 from './assets/images/figure-2.png';


const Whitepaper = () => {
   
   return (
        <div>
            <ChatbotAssets /> {/* Load JS & CSS globally */}
            <div className="pdf-container">
                <div className="header">
                    <h2 className="line-space no-bold">Aave V3 Technical Paper</h2>
                    <div className="authors">
                        <p>
                        Emilio Frangella
                        <br />
                        <a href="mailto:emilio@aave.com">emilio@aave.com</a>
                        </p>
                        <p>
                        Lasse Herskind
                        <br />
                        <a href="mailto:lasse@aave.com">lasse@aave.com</a>
                        </p>
                    </div>
                    <p>January 27, 2022</p>
                    <br />
                </div>
                <div className="section">
                    <h2>
                        <span>1</span> Introduction
                    </h2>
                    <p>
                        Since its launch in 2020, the Aave Protocol (or &ldquo;Aave&rdquo;) has driven innovation in the <span className="targetText">DeFi ecosystem</span>. Controlled by Aave governance and with an IPFS-deployed and open-sourced frontend, Aave remains one of the biggest DeFi protocols, reaching peak liquidity of $30 billion. Key features of Aave (e.g., aTokens, choice of stable or variable interest rates, credit delegation, and more) have become industry standard, and remain a foundational layer of the protocol. But, as is true with all technology, the development of the ecosystem, along with continuous research and data analysis on markets as well as community feedback, have highlighted some areas for improvement of the current iteration of the Aave protocol.
                    </p>
                    <div className="summary-section">
                        <div className="left-summary">
                        <div className="summary-powered-by">
                            <span className="summary-widget-logo">
                            <span className="text">
                                letme
                                <span className="explain">explain</span>
                            </span>
                            </span>
                            <h2>Paragraph Summary</h2>
                        </div>
                        <div className="summary">
                            Launched in 2020, Aave Protocol has innovated DeFi with governance control, IPFS frontend, peak liquidity of $30 billion, and features like aTokens becoming industry standards.
                        </div>
                        </div>
                        <button
                        className="generate-summary summarise-para"
                        data-txt="Since its launch in 2020, the Aave Protocol (or &ldquo;Aave&rdquo;) has driven innovation in the DeFi ecosystem. Controlled by Aave governance and with an IPFS-deployed and open-sourced frontend, Aave remains one of the biggest DeFi protocols, reaching peak liquidity of $30 billion. Key features of Aave (e.g., aTokens, choice of stable or variable interest rates, credit delegation, and more) have become industry standard, and remain a foundational layer of the protocol. But, as is true with all technology, the development of the ecosystem, along with continuous research and data analysis on markets as well as community feedback, have highlighted some areas for improvement of the current iteration of the Aave protocol."
                        >
                        I can expand on this for better clarity — let me explain further
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3393 7.31427L4.33927 0.314269C3.78676 0.0392781 3.16289 -0.0586206 2.55271 0.0339206C1.94252 0.126462 1.37573 0.404939 0.929602 0.831385C0.483474 1.25783 0.179724 1.81149 0.0597636 2.41688C-0.0601964 3.02227 0.00947219 3.64992 0.259271 4.21427L2.65927 9.58427C2.71373 9.7141 2.74177 9.85348 2.74177 9.99427C2.74177 10.1351 2.71373 10.2744 2.65927 10.4043L0.259271 15.7743C0.055971 16.231 -0.0299735 16.7313 0.00924794 17.2296C0.0484693 17.728 0.211613 18.2087 0.483853 18.628C0.756092 19.0473 1.1288 19.3919 1.56809 19.6305C2.00739 19.8691 2.49935 19.9941 2.99927 19.9943C3.4675 19.9896 3.92876 19.8803 4.34927 19.6743L18.3493 12.6743C18.8459 12.4245 19.2633 12.0416 19.555 11.5683C19.8466 11.0951 20.0011 10.5502 20.0011 9.99427C20.0011 9.43838 19.8466 8.89342 19.555 8.42019C19.2633 7.94696 18.8459 7.56408 18.3493 7.31427H18.3393ZM17.4493 10.8843L3.44927 17.8843C3.26543 17.9725 3.059 18.0025 2.85766 17.9701C2.65631 17.9377 2.46968 17.8446 2.32278 17.7031C2.17589 17.5617 2.07575 17.3787 2.0358 17.1787C1.99585 16.9787 2.018 16.7713 2.09927 16.5843L4.48927 11.2143C4.52021 11.1426 4.54692 11.0691 4.56927 10.9943H11.4593C11.7245 10.9943 11.9788 10.8889 12.1664 10.7014C12.3539 10.5138 12.4593 10.2595 12.4593 9.99427C12.4593 9.72905 12.3539 9.4747 12.1664 9.28716C11.9788 9.09963 11.7245 8.99427 11.4593 8.99427H4.56927C4.54692 8.91944 4.52021 8.84598 4.48927 8.77427L2.09927 3.40427C2.018 3.21723 1.99585 3.00982 2.0358 2.80984C2.07575 2.60986 2.17589 2.42687 2.32278 2.28542C2.46968 2.14396 2.65631 2.0508 2.85766 2.01842C3.059 1.98604 3.26543 2.016 3.44927 2.10427L17.4493 9.10427C17.6131 9.18819 17.7505 9.31568 17.8465 9.47271C17.9425 9.62975 17.9933 9.81022 17.9933 9.99427C17.9933 10.1783 17.9425 10.3588 17.8465 10.5158C17.7505 10.6729 17.6131 10.8004 17.4493 10.8843Z"/>
            </svg>
                        </button>
                    </div>
                    <p>These enhancements concern four specific areas:</p>
                    <ol>
                        <li>Capital efficiency</li>
                        <li>Protocol safety</li>
                        <li>Decentralization</li>
                        <li>User experience</li>
                    </ol>
                    <p>
                        The design of Aave V3 implements enhancements in the categories mentioned above, improving user experience while offering increased capital efficiency without sacrificing security.
                    </p>
                    <p>
                        Before introducing the new features of V3, this next section digs deeper into why these four areas are ripe for improvement.
                    </p>
                    <div className="1.1">
                        <h3>
                        <span>1.1</span> Capital Efficiency
                        </h3>
                        <p></p>
                        <p>
                        <strong>Generate more yield for liquidity providers</strong> The total liquidity of the Aave Protocol across multiple networks is close to $20 billion. Most of that liquidity currently sits idle in the protocol smart contracts, generating yield from the borrowing activity. Although this yield is consistent and secure, it could be increased by implementing new user-facing functionalities that reuse the idling capital without increasing the solvency contingencies. (Note that this does not include reallocating the assets to other protocols for &ldquo;yield farming&rdquo; &ndash; this usually brings considerable smart contract risk and does not fit with Aave being a layer 0 DeFi protocol &ndash; where other protocols often allocate their assets to boost their yield.)
                        </p>
                        <p>
                        <strong>Optimize borrowing power</strong> In the previous iterations of the Aave Protocol, borrowers face challenges in maximizing their borrowing power in certain situations due to the fact that within the pool model, any collateral can be used to borrow any &ldquo;borrowable&rdquo; asset. Accordingly, the risk parameters for borrow transactions are set to be quite conservative.
                        </p>
                        <p>
                        <strong>Inefficient underlying network</strong> Most capital supplied to the Aave Protocol is on the Ethereum L1 network, which is saturated and has resulted in high transaction fees and UX pain points for users. The network inefficiency also reflects on the oracles&rsquo; ability to submit accurate prices with a short response time.
                        </p>
                        <p>
                        <strong>Aggregated liquidity approach</strong> In the Aave Protocol, the total collateral value of a user is calculated by aggregating the value of all collateral deposited and normalizing the total to a certain base currency (usually ETH). The total collateral value is then used to calculate the average borrowing power, calculated as the weighted average of the borrowing power of all the individual assets (see the Aave whitepaper<sup><a href="#ref-1">1</a></sup> , section 5 for more details). The risk configuration of the assets reflects the fact that both the total collateral value and the total value borrowed can be volatile, and thus, are set conservatively. This limits the power borrowers can achieve from their collateral in many cases. For example, a user borrowing stablecoins while supplying stablecoins would have relative low volatility between collateral and assets borrowed and should therefore enjoy higher collateralization power.
                        </p>
                        <p>
                        <strong>Reduce liquidity segregation</strong> New liquidity protocols have sought to improve collateralization power while reducing risk by enabling either isolated pools or isolated pairs. Although this could improve collateralization power for certain assets, this actually encourages additional liquidity segregation (liquidity providers are forced to deploy assets across multiple pairs/pools to match their risk appetite) and UX issues (borrowers may be forced to allocate their collaterals to different pools/pairs to be able to borrow what they need). Section <a href="#section-2">2</a> analyzes in greater detail some of the current approaches and areas for improvement.
                        </p>
                    </div>
                    <div className="1.2">
                        <h3>
                        <span>1.2</span> Protocol safety
                        </h3>
                        <p>
                        Risk management is crucial for a liquidity protocol, requiring mitigation of smart contract risk and liquidity risk. For smart contract risk, a careful review and audit process of any code update and governance proposal is needed. This is mostly an off-chain/coordination matter, and managing this risk usually involves maintaining a mission-critical culture when handling code/smart contract upgrades. The liquidity risk is more subtle, involving careful evaluation of the market conditions to tune the parameter configuration and proper due diligence on assets listing proposals by the community (the Aave community developed and maintains the Aave risk framework<sup><a href="#ref-2">2</a></sup>).
                        </p>
                        <p>
                        Risk configuration in the current iteration of the Aave Protocol is unfortunately limited. While it is possible to adjust borrowing power (LTV) and maintenance margin (liquidation threshold) on the fly, the protocol could benefit from increased defense measures against possible strikes such as infinite minting or oracle manipulations.
                        </p>
                    </div>
                    <div className="1.3">
                        <h3>
                        <span>1.3</span> Decentralization
                        </h3>
                        <p>
                        Protocol management is completely decentralized and thus, controlled by AAVE token holders (&ldquo;Aave governance&rdquo;). Aave governance acts as a gatekeeper in certain aspects of the protocol configuration (e.g., listing new assets). Although this is important to ensure the safety of the protocol, this is somewhat limiting for teams and projects looking to have access to the Aave Protocol&rsquo;s liquidity by listing a token.
                        </p>
                    </div>
                    <div className="1.4">
                        <h3>
                        <span>1.4</span> User experience
                        </h3>
                        <p>
                        In a multichain and multi-rollup world, allowing liquidity to flow seamlessly across different chains is increasingly important. While the Aave Protocol is currently deployed on numerous networks with meaningful TVL, there is no seamless way for users to move liquidity from an Aave instance on one network to an Aave instance on another network.
                        </p>
                    </div>
                </div>
                <div className="section" id="section-2">
                    <h2>
                        <span>2</span> Current solutions
                    </h2>
                    <p>
                        Certain recent liquidity protocols implemented alternative designs to try and address these issues &ndash; most notably, isolated liquidity pairs and isolated liquidity pools. Both of these solutions seek to address the permissionless aspect of listing new assets while at the same time reducing risk of insolvency. Although both design features are beneficial, they also highlighted ways that Aave V3 could further enhance and improve upon these models.
                    </p>
                    <div className="2.1">
                        <h3>
                        <span>2.1</span> Isolated liquidity pairs
                        </h3>
                        <p>
                        This approach uses what is conventionally defined as &ldquo;isolated pairs&rdquo; &ndash; supply/collateral pairs in which borrowers can only borrow one asset at a time with a specific collateral. This has some advantages compared to the aggregated pool approach of Aave V2:
                        </p>
                        <p className="hanging-indent">
                        <em>Reduced gas costs</em> In general, the gas footprint of the interactions is reduced as there is less state management and no need to iterate across all the assets the user has borrowed and supplied.
                        </p>
                        <p className="hanging-indent">
                        <em>Permissionless listing</em> Any asset can be listed with very limited risk management.
                        </p>
                        <p className="no-indent">
                        This design, however, also influences the ability of the protocol to scale.
                        </p>
                        <p className="no-indent">
                        <strong>Extreme liquidity segregation</strong> Liquidity is now strictly segregated per collateral, meaning that suppliers might be forced to split their capital across multiple pools to chase the highest yields. Though supplied cryptoassets could be aggregated through tools built on top of the protocol, this reduces users&rsquo; ability to fine-tune their risk profile, partially invalidating at least one of the main advantages of this approach. This also means that for each new pair, liquidity needs to be built for borrowers to be able to borrow against their newly listed asset.
                        </p>
                        <p className="no-indent">
                        <strong>Bad UX for borrowers</strong> In the Aave Protocol, the act of borrowing funds is straighforward as both the supplied collateral and the borrowed crytpoassets are aggregated. This offers a very simple UX: borrowers can instantly borrow any asset as long as the user supplies the required overcollateralization, and only one position needs to be managed. With isolated pairs, borrowers must interact with many pairs at the same time if they want to borrow multiple assets, even if a single form of collateral is used. The consequence of this is that many positions must be managed simultaneously. This can be mitigated by building solutions on top of the protocol, but it reduces the impact of the liquidity segregation and also invalidates one of the main advantages (gas costs). Liquidity segregation also means in general higher average borrowing rates.
                        </p>
                        <p className="no-indent">
                        <strong>Skewed towards more risky assets</strong> In general, borrowers (on other liquidity protocols) who use risky assets as collateral are willing to pay more compared to safer assets. Such user behavior may allow for potential attacks that are possible in protocols that allow permissionless asset listing without any sort of debt ceiling. For example, users might improperly supply stablecoins to a newly created pool with a volatile or otherwise unstable asset by artificially borrowing against that asset, which increases the attractiveness for suppliers.
                        </p>
                    </div>
                    <div className="2.2">
                        <h3>
                        <span>2.2</span> Isolated liquidity pools
                        </h3>
                        <p>
                        Isolated pools define an architecture that is essentially a hybrid between Aave and isolated pairs, e.g., a permissionless protocol to instantiate independent markets with specific assets and custom risk management configurations. The approach is similar to what Aave pioneered in 2020 with the first Uniswap pool to borrow against Uniswap V1 LP assets. Having multiple markets enables users to split the risk across a cluster of assets, reducing the impact on potential asset failures without sacrificing on UX and some compromises on liquidity segregation.
                        </p>
                        <p>
                        Given its specific architecture, this approach suffers from some of the issues as isolated pairs. Although not as severe, liquidity segregation is still important &ndash; many pools struggle to attract liquidity. TVL also is generally skewed towards more risky assets.
                        </p>
                    </div>
                </div>
                <div className="section">
                    <h2>
                        <span>3</span> Aave V3 Overview
                    </h2>
                    <p>
                        The Aave V3 design is born from thoughtful analysis of the evolution of the protocol and its ecosystems. The V3 enhanced features allow for new use cases that will spur a wave of innovation from users and developers. Aave V3 makes&nbsp;improvements in all the aforementioned categories &ndash; capital efficiency, security, decentralization, UX &ndash; while simultaneously providing new functionalities to leverage the capabilities of rollups and the growing ecosystem of competing L1s.
                    </p>
                    <div className="3.1">
                        <h3>
                        <span>3.1</span> Capital efficiency and UX improvements
                        </h3>
                        <p>
                        <strong>Portal</strong> Portal represents a new set of core features that can be used to allow supplied assets to seamlessly flow between Aave markets on different networks. On a high level, the feature is very simple: the protocol leverages the unique pegged design of the aTokens to burn aTokens on the source network while minting them on the destination network. This enables a way to supply assets in a deferred way, where the underlying cryptoasset is supplied to the Aave Protocol after it has passed through the canonical chain bridge. Further details on the design can be seen in <a href="#section-4.5">section 4.5</a>.
                        </p>
                        <p className="no-indent">
                        <strong>E-Mode</strong> High Efficiency Mode (E-Mode) allows borrowers to extract the highest borrowing power out of their collateral. Assets can now be categorized, with each category having the following risk management parameters:
                        </p>
                        <ul>
                        <li>LTV (Loan-to-value)</li>
                        <li>Liquidation threshold</li>
                        <li>Liquidation bonus</li>
                        <li>A custom price oracle (optional)</li>
                        </ul>
                        <p className="no-indent">
                        E-Mode allows borrowers to restrict themselves in borrowing only assets belonging to a certain category (e.g., stablecoins). When this happens, if users supply assets of the same category as collateral, the borrowing power (LTV), and maintenance margin (liquidation threshold) are overridden by the E-Mode category configuration to allow higher capital efficiency. See fig. 1 for an illustration with multiple categories.
                        </p>
                        <img id="fig-1" src={fig1} alt="Figure 1" />
                        <span className="img-caption">
                        Figure 1: Illustration with three E-Mode categories (Stables, Eth, BTC)
                        </span>
                        <div className="image-box exclude-first">
                        <div className="summary-section image">
                            <div className="summary-powered-by">
                            <span className="summary-widget-logo">
                                <span className="text">
                                letme
                                <span className="explain">explain</span>
                                </span>
                            </span>
                            </div>
                            <button
                            className="prehighlighted_btn"
                            data-src="https://phpstack-1077129-5356362.cloudwaysapps.com/assets/images/figure-1.png"
                            >
                            I can walk you through this chart/diagram—just tap for more details.
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" class="" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3393 7.31427L4.33927 0.314269C3.78676 0.0392781 3.16289 -0.0586206 2.55271 0.0339206C1.94252 0.126462 1.37573 0.404939 0.929602 0.831385C0.483474 1.25783 0.179724 1.81149 0.0597636 2.41688C-0.0601964 3.02227 0.00947219 3.64992 0.259271 4.21427L2.65927 9.58427C2.71373 9.7141 2.74177 9.85348 2.74177 9.99427C2.74177 10.1351 2.71373 10.2744 2.65927 10.4043L0.259271 15.7743C0.055971 16.231 -0.0299735 16.7313 0.00924794 17.2296C0.0484693 17.728 0.211613 18.2087 0.483853 18.628C0.756092 19.0473 1.1288 19.3919 1.56809 19.6305C2.00739 19.8691 2.49935 19.9941 2.99927 19.9943C3.4675 19.9896 3.92876 19.8803 4.34927 19.6743L18.3493 12.6743C18.8459 12.4245 19.2633 12.0416 19.555 11.5683C19.8466 11.0951 20.0011 10.5502 20.0011 9.99427C20.0011 9.43838 19.8466 8.89342 19.555 8.42019C19.2633 7.94696 18.8459 7.56408 18.3493 7.31427H18.3393ZM17.4493 10.8843L3.44927 17.8843C3.26543 17.9725 3.059 18.0025 2.85766 17.9701C2.65631 17.9377 2.46968 17.8446 2.32278 17.7031C2.17589 17.5617 2.07575 17.3787 2.0358 17.1787C1.99585 16.9787 2.018 16.7713 2.09927 16.5843L4.48927 11.2143C4.52021 11.1426 4.54692 11.0691 4.56927 10.9943H11.4593C11.7245 10.9943 11.9788 10.8889 12.1664 10.7014C12.3539 10.5138 12.4593 10.2595 12.4593 9.99427C12.4593 9.72905 12.3539 9.4747 12.1664 9.28716C11.9788 9.09963 11.7245 8.99427 11.4593 8.99427H4.56927C4.54692 8.91944 4.52021 8.84598 4.48927 8.77427L2.09927 3.40427C2.018 3.21723 1.99585 3.00982 2.0358 2.80984C2.07575 2.60986 2.17589 2.42687 2.32278 2.28542C2.46968 2.14396 2.65631 2.0508 2.85766 2.01842C3.059 1.98604 3.26543 2.016 3.44927 2.10427L17.4493 9.10427C17.6131 9.18819 17.7505 9.31568 17.8465 9.47271C17.9425 9.62975 17.9933 9.81022 17.9933 9.99427C17.9933 10.1783 17.9425 10.3588 17.8465 10.5158C17.7505 10.6729 17.6131 10.8004 17.4493 10.8843Z"/>
                </svg>
                            </button>
                        </div>
                        </div>
                        <br />
                        <p>
                        With V3, the Aave Protocol can support a maximum of 255 E-Mode categories, enabling a wave of new use cases such as:
                        </p>
                        <ul>
                        <li>
                            Highly efficient yield farming (for example, deposit ETH staking derivatives to borrow ETH)
                        </li>
                        <li>Diversified risk management</li>
                        </ul>
                        <p>
                        <strong>Example</strong> The Aave Protocol defines E-Mode category 1 (stablecoins) as: 97% LTV, 98% liquidation threshold, and 2% liquidation bonus, without a custom price oracle.
                        </p>
                        <ol>
                        <li>User chooses E-Mode category 1 (stablecoins)</li>
                        <li>User supplies DAI (which normally has 75% LTV)</li>
                        <li>
                            User is now allowed to borrow other stablecoins (including DAI) with the borrowing power defined by the E-Mode category (97%). User&rsquo;s capital is therefore 22% more efficient. Note that the user is still allowed to supply other assets and to use them as collateral, but only collateral belonging to the same E-Mode category chosen by the user will have enhanced risk parameters.
                        </li>
                        </ol>
                        <p className="no-indent">
                        <strong>Isolation Mode</strong>One of the most relevant areas for enhancement is navigating the inherent complexity of modulating risk exposure. When Aave governance lists an asset on the Aave Protocol, borrowers using it as collateral immediately have access to the whole protocol&rsquo;s liquidity. This makes it complicated to list new assets and reduces the capital efficiency for borrowers. Therefore, V3 introduces Isolation Mode, inspired by the MakerDAO approach for exposure management.
                        </p>
                        <p>
                        Assets can now be listed (if voted on by Aave governance) as &ldquo;isolated&rdquo;. Borrowers supplying an isolated asset as collateral cannot supply other assets as collateral (though they can still supply to capture yield). Only stablecoins that have been permitted by Aave governance to be borrowable in isolation mode can be borrowed by users utilizing an isolated collateral up to a specified debt ceiling.
                        </p>
                        <p>
                        In <a href="#fig-2">Figure 2</a>, the user is supplying $TOKEN2 as collateral. $TOKEN2 is an isolated asset with a maximum debt ceiling of $10M. The user will therefore be allowed to borrow up to $10M of USDT, DAI and USDC (the only three assets allowed to be borrowed, in this example, in isolation mode) and will not be allowed to activate any other asset as collateral (user can still supply ETH, for example, for yield generation). Users can exit isolation mode at any time by disabling $TOKEN2 as collateral (as long as it doesn&rsquo;t cause liquidation). $TOKEN2 can exit isolation mode when the Aave governance decides to remove the debt ceiling. This allows for a true permissionless listing in the future with exposure management.
                        </p>
                    </div>
                    <div className="3.2" id="3.2">
                        <h3>
                        <span>3.2</span> Risk Management
                        </h3>
                        <p>
                        Aave V3 brings more sophisticated risk parameters and features to provide to the protocol a high level of protection against potential insolvency.
                        </p>
                        <div className="image-box">
                        <img id="fig-2" src={fig2} alt="Figure 1" />
                        <span className="img-caption left">
                            Figure 2: Illustration of user supplying $Token2 as collateral and borrowing stablecoins.
                        </span>
                        <div className="summary-section image">
                            <div className="summary-powered-by">
                            <span className="summary-widget-logo">
                                <span className="text">
                                letme
                                <span className="explain">explain</span>
                                </span>
                            </span>
                            </div>
                            <button
                            className="prehighlighted_btn"
                            data-src="https://phpstack-1077129-5356362.cloudwaysapps.com/assets/images/figure-1.png"
                            >
                            I can walk you through this chart/diagram—just tap for more details.
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" class="" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3393 7.31427L4.33927 0.314269C3.78676 0.0392781 3.16289 -0.0586206 2.55271 0.0339206C1.94252 0.126462 1.37573 0.404939 0.929602 0.831385C0.483474 1.25783 0.179724 1.81149 0.0597636 2.41688C-0.0601964 3.02227 0.00947219 3.64992 0.259271 4.21427L2.65927 9.58427C2.71373 9.7141 2.74177 9.85348 2.74177 9.99427C2.74177 10.1351 2.71373 10.2744 2.65927 10.4043L0.259271 15.7743C0.055971 16.231 -0.0299735 16.7313 0.00924794 17.2296C0.0484693 17.728 0.211613 18.2087 0.483853 18.628C0.756092 19.0473 1.1288 19.3919 1.56809 19.6305C2.00739 19.8691 2.49935 19.9941 2.99927 19.9943C3.4675 19.9896 3.92876 19.8803 4.34927 19.6743L18.3493 12.6743C18.8459 12.4245 19.2633 12.0416 19.555 11.5683C19.8466 11.0951 20.0011 10.5502 20.0011 9.99427C20.0011 9.43838 19.8466 8.89342 19.555 8.42019C19.2633 7.94696 18.8459 7.56408 18.3493 7.31427H18.3393ZM17.4493 10.8843L3.44927 17.8843C3.26543 17.9725 3.059 18.0025 2.85766 17.9701C2.65631 17.9377 2.46968 17.8446 2.32278 17.7031C2.17589 17.5617 2.07575 17.3787 2.0358 17.1787C1.99585 16.9787 2.018 16.7713 2.09927 16.5843L4.48927 11.2143C4.52021 11.1426 4.54692 11.0691 4.56927 10.9943H11.4593C11.7245 10.9943 11.9788 10.8889 12.1664 10.7014C12.3539 10.5138 12.4593 10.2595 12.4593 9.99427C12.4593 9.72905 12.3539 9.4747 12.1664 9.28716C11.9788 9.09963 11.7245 8.99427 11.4593 8.99427H4.56927C4.54692 8.91944 4.52021 8.84598 4.48927 8.77427L2.09927 3.40427C2.018 3.21723 1.99585 3.00982 2.0358 2.80984C2.07575 2.60986 2.17589 2.42687 2.32278 2.28542C2.46968 2.14396 2.65631 2.0508 2.85766 2.01842C3.059 1.98604 3.26543 2.016 3.44927 2.10427L17.4493 9.10427C17.6131 9.18819 17.7505 9.31568 17.8465 9.47271C17.9425 9.62975 17.9933 9.81022 17.9933 9.99427C17.9933 10.1783 17.9425 10.3588 17.8465 10.5158C17.7505 10.6729 17.6131 10.8004 17.4493 10.8843Z"/>
                </svg>
                            </button>
                        </div>
                        </div>
                        <br />
                        <p className="hanging-indent">
                        <em>Supply and Borrow Caps</em> Aave governance can now configure Borrow Caps and Supply Caps. Borrow Caps, similar to what is implemented in other liquidity protocols, allow the protocol to modulate how much of each asset can be borrowed. Supply Caps allow the limitation of how much of a certain asset can be supplied to the Aave Protocol. This helps in reducing exposure to a certain asset and mitigates risks such as infinite minting or price oracle manipulation.
                        </p>
                        <p className="hanging-indent">
                        <em>Granular borrowing power control</em> Currently, various liquidity protocols do not allow for reduction of the borrowing power of an asset without eventually causing liquidations. This is particularly limiting when the risk profile of a certain asset changes &ndash; e.g., it becomes impossible to reduce the exposure to that asset without liquidating previous borrowers. With granular borrowing power control in Aave V3, Aave governance can lower the borrowing power of any asset to as low as 0% without impacting existing borrowers (though it is still possible to liquidate existing users if deemed necessary).
                        </p>
                        <p className="hanging-indent">
                        <em>Risk admins</em> Aave V3 introduces the ability for the Aave governance to put entities on a permitlist to unlock the ability to change risk parameters without needing a governance vote. These entities can be DAOs (e.g., RiskDAO) or automated agents that can build on top of this feature to react automatically if certain invariants are broken.
                        </p>
                        <p className="hanging-indent">
                        <em>Price Oracle sentinel</em> The Sentinel feature has been designed for L2s to handle eventual downtime of the sequencer (but can be extended to handle other cases, even on L1s, in the future). It introduces a grace period for liquidations and disables borrowing under specific circumstances.
                        </p>
                        <p className="hanging-indent">
                        <em>Variable liquidation</em> close factor In Aave V2, liquidations can only liquidate half of the position at any time. This has shown to be inefficient in many cases, especially with high transaction fees and/or small positions. In V3, this mechanism has been improved to allow the position to be fully liquidated when it approaches insolvency (HF &lt; 0.95).
                        </p>
                    </div>
                    <div className="3.3">
                        <h3>
                        <span>3.3</span> Decentralization
                        </h3>
                        <p>
                        Aave V3 introduces Asset Listing Admins. The Listing Admin is a specific role that can be granted by Aave governance to allow different asset listing strategies other than an on-chain vote as seen in Aave V2. This will allow builders to create custom asset listing strategies which can be designed to bring true permissionless asset listing.
                        </p>
                    </div>
                    <div className="3.4">
                        <h3>
                        <span>3.4</span> Other Features
                        </h3>
                        <ul>
                        <li>
                            All the functions that involve transfer of tokens (supply, repay) now support EIP 2612 permit (this is especially important for L2).
                        </li>
                        <li>
                            EIP 712 signature for credit delegation (no need for contracts to request a user transaction anymore).
                        </li>
                        <li>
                            Repay with aTokens: Allows borrowers to repay using aTokens instead of the underlying.
                        </li>
                        <li>
                            Permitlist on flashloans: Governance can permit entities to access free instant liquidity (waives flashloan premium).
                        </li>
                        <li>Protocol fee on liquidation (configurable).</li>
                        <li>Protocol fee on instant liquidity (configurable).</li>
                        <li>
                            Simplified flashloans: A new <span className="courier">flashloanSimple()</span> allows to reduce impact on gas consumption up to 20% compared to the standard instant liquidity function (still available).
                        </li>
                        <li>
                            Price oracle logic reworked to generalize calculations on the base asset (no longer ETH only).
                        </li>
                        <li>
                            Gas optimizations: Despite all the new features, gas cost of all the functions dropped by around 20 &minus; 25% across the board.
                        </li>
                        <li>Code reorganized to be more modular.</li>
                        <li>
                            Smart contract re-engineering has greatly reduced the code size (more margin for other changes in the future) &rarr; up to 100K optimizer runs!
                        </li>
                        <li>
                            New interest rate strategy that optimizes stable rate calculations (no more oracles for average stable borrow rates). The implementation follows the community discussion here{' '}
                            <a
                            href="https://governance.aave.com/t/basestable-rate-oracle-update-and-improvements-in-aave-v2/1879"
                            style={{ color: "#ea0381", textDecoration: "none" }}
                            >
                            https://governance.aave.com/t/basestable-rate-oracle-update-and-improvements-in-aave-v2/1879
                            </a>
                            , for further information see <a href="#section-4.4">subsection 4.4</a>.
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <h2>
                        <span>4</span> Feature specification
                    </h2>

                    <div className="4.1">
                        <h3>
                        <span>4.1</span> Efficiency Mode
                        </h3>
                        <p>
                        The High Efficiency mode feature is designed to maximize capital efficiency when collateral and borrowed assets are correlated in price, particularly when both are derivatives of the same underlying asset. Stablecoins are usually pegged to a particular underlying asset (for example, one USD), and the occurrence of dramatically losing the peg is rare. ETH and its derivatives (stETH, sETH, alETH and so on) behave in a similar way as their underlying (ETH). In these cases, there is the possibility of granting very high collateralization power.
                        </p>
                        <p>
                        In the original design of the Aave Protocol, the collateral value and the borrowed assets are usually normalized to a base currency (ETH or USD) and there is no way of knowing on-chain which collateral is backing what borrowed asset, which makes it very hard to improve collateral efficiency.
                        </p>
                        <p>
                        E-Mode introduces an asset classification that places all the assets listed on the Aave Protocol in a specific category; assets of the same category are usually highly correlated in price. The correct categorization cannot be enforced onchain and needs to be maintained by the entity managing the protocol (typically the Aave governance).
                        </p>
                        <p>
                        Users can deliberately choose to borrow one specific category, and can therefore employ high collateralization power when using collateral belonging to the same category.
                        </p>
                        <p>
                        E-Mode also offers the possibility of introducing a specific price oracle for a certain category. For example, for a category where only renBTC and WBTC are defined, it would be possible to use the BTC/USD oracle for both of them whenever the user is in BTC E-Mode. This would further reduce the risk of unwanted liquidations as it eliminates the oracle asynchronicity (in case of dramatic price drops of BTC, the WBTC/USD and renBTC/USD oracles might update at slightly different times since they are asynchronous; this might cause unwanted liquidations). The category-specific oracle introduces more risk for the protocol, as if one of the assets fails to keep its value (because of a protocol hack or an underlying issue of the specific derivative, for example) it might cause insolvency. The Aave governance will need to carefully evaluate on a per-asset and per-category basis whether or not to use the category-specific oracle. For all the reasons above, E-Mode is more suitable for faster networks (especially rollups) where the oracles can be more efficient and liquidations do not incur due to high transaction costs.
                        </p>
                        <p className="no-indent">
                        <strong>Invariants</strong>
                        </p>
                        <p className="hanging-indent">
                        <em>Category 0</em> Category 0 is reserved as the default, non-E-Mode category. All the assets listed have this category by default, which indicates the standard operational mode.
                        </p>
                        <p className="hanging-indent">
                        <em>Enter E-Mode</em> A user can enter E-Mode (category &ne; 0) only if all borrowed assets are in the chosen category.
                        </p>
                        <p className="hanging-indent">
                        <em>Exit E-Mode</em> A user can exit E-Mode (set category to 0) only if leaving E-Mode does not leave their position undercollateralized (HF &ge; 1).
                        </p>
                        <p className="hanging-indent">
                        <em>User borrowing</em> A user in E-Mode can <strong>only</strong> borrow assets of the chosen category. The user may use any asset as collateral, but only assets of the same E-Mode category will enjoy the higher collateralization factors.
                        </p>
                        <p className="hanging-indent">
                        <em>Asset addition</em> An asset can be added to E-Mode by authorized entities (risk or pool admin) only if the LTV and Liquidation Threshold of the E-Mode category is higher than the default, non-E-Mode risk parameters for the asset.
                        </p>
                        <p className="hanging-indent">
                        <em>Asset removal</em> An asset can be removed from E-Mode by authorized entities (risk or pool admin). This may drop solvency of some users into unwanted liquidations (<a href="section-4.7">see section 4.7</a>). By design, users borrowing an asset in EMode that has subsequently been removed from an E-Mode category are unaffected. Users that are still in E-Mode will not be able to borrow that asset anymore after the removal.
                        </p>
                    </div>

                    <div className="4.2">
                        <h3>
                        <span>4.2</span> Isolation Mode
                        </h3>
                        <p>
                        In the current generation of liquidity protocols, including Aave V2, when a new asset is listed, the whole liquidity pool is exposed to it, meaning that users using the new collateral asset might be able to borrow the whole liquidity available. This greatly limits the capability to add new assets to the Aave Protocol, as every new asset increases the liquidity and solvency risk. Isolation mode solves for this.
                        </p>
                        <p>
                        Isolation mode allows the protocol to list assets as isolated; isolated assets have a specific debt ceiling (representing the maximum amount in USD that can be borrowed against the collateral, with two decimal points of precision). Borrowers using an isolated asset as collateral can only use that particular asset as collateral, and cannot enable any other assets (including other isolated ones). Users using isolated assets can still supply other assets for yield generation.
                        </p>
                        <p>
                        Assets that can be borrowed in isolation mode are indicated by the flag <span className="courier">BORROWABLE_IN_ISOLATION</span> and should be in USD stablecoins, although the design allows to choose any denomination for assets borrowable in isolation. The assets that are borrowable in isolation mode need to be of the same family, otherwise the debt ceiling calculations would be inconsistent; this consistency cannot be enforced at the smart contract level and governors should be careful when allowing an asset to be borrowable in isolation.
                        </p>
                        <p className="no-indent">
                        <strong>Invariants</strong>
                        </p>
                        <p className="hanging-indent">
                        <em>Isolated assets</em> Any asset with &gt; 0 debt ceiling is an isolated asset
                        </p>
                        <p className="hanging-indent">
                        <em>Adding isolated asset</em> An asset can only be configured as isolated when there is no supplied liquidity (enforced by <span className="courier">checkNoSuppliers()</span>).
                        </p>
                        <p className="hanging-indent">
                        <em>Isolated collateral</em> Users supplying an isolated asset as collateral will only be allowed to use that asset as collateral; in no other case (supply, transfer, liquidation, set as collateral) should it be possible to enable a non-isolated asset as collateral.
                        </p>
                        <p className="hanging-indent">
                        <em>Supplying isolated</em> Users supplying other assets and using them as collateral can still supply isolated assets for yield generation. It should never be possible to enable the isolated asset as collateral when the user has already supplied other nonisolated assets and has these assets enabled as collateral.
                        </p>
                        <p className="hanging-indent">
                        <em>Exit isolation mode</em> Users can exit isolation mode by disabling the isolated asset as collateral. Given the nature of isolated assets, this can only happen if the user is not borrowing.
                        </p>
                        <p className="hanging-indent">
                        <em>Removing asset from isolation mode</em> Authorized entities can remove an asset from isolation mode at any time.
                        </p>
                        <p className="hanging-indent">
                        <em>Debt ceiling</em> Users should be forbidden to borrow if the isolated debt ceiling is reached (debt ceiling does not include interest accrued over time, only the principal borrowed).
                        </p>
                    </div>

                    <div className="4.3">
                        <h3>
                        <span>4.3</span> Granular borrowing power control
                        </h3>
                        <p>
                        The granular borrowing power control design consists of splitting the usual collateral factor used in most liquidity protocols in LTV (which defines the borrowing power for new borrows) and liquidation threshold (which defines the maintenance margin or, in other words, the collateral/debt ratio at which the position is considered undercollateralized and therefore subjected to liquidation). This capability of setting the borrowing power independently from the maintenance margin allows to more granularly control the risk associated with a specific asset while avoiding impacting existing users. In Aave V2, this feature was already implemented, but it was mostly considered a soft protection against borrowers borrowing up to the maintenance margin and thus being immediately liquidated.
                        </p>
                        <p>
                        <strong>Example</strong> Alice wants to borrow with an asset that has 0 LTV and the liquidation threshold &gt; 0. It should be impossible, but Alice can:
                        </p>
                        <ol>
                        <li>
                            deposit an asset with <em>LTV</em> &gt; 0 (for example, using flashloans)
                        </li>
                        <li>
                            supply the asset with <em>LTV</em> == 0
                        </li>
                        <li>borrow</li>
                        <li>
                            withdraw the asset with <em>LTV</em> &gt; 0
                        </li>
                        </ol>
                        <p>
                        This would leave the protocol with a position where the collateral had in origin <em>LTV</em> = 0.
                        </p>
                        <p>
                        Aave V3 introduces a stricter rule on <em>LTV</em>, so it is now possible to enforce actual 0 borrowing power while preventing the situation explained above. This protection requires that borrowers using multiple assets as collateral &ndash; one or more of which have <em>LTV</em> == 0 &ndash; are required to withdraw these assets first and thus cannot withdraw an asset with <em>LTV</em> &gt; 0. In the example above, in V3, Alice would be permitted to execute the last step only after withdrawing the asset with <em>LTV</em> == 0. V3 therefore prevents the situation entirely. In general the granular borrowing power control enforces that:
                        </p>
                        <ul>
                        <li>Users can borrow against any asset as long as LTV &gt; 0 and liq threshold &gt; 0</li>
                        <li>If an LTV of an asset is reset to 0, the user should not be allowed to borrow against that asset anymore.</li>
                        <li>
                            Borrowers using multiple assets as collateral who wish to withdraw must withdraw all 0 LTV assets before any other assets can be withdrawn. This is true for withdrawal as well as transfer. Liquidations, though, are still allowed against assets that do not have 0 LTV.
                        </li>
                        <li>
                            It is still acceptable for borrowers who want to boost their borrowing power (getting closer to liquidation threshold) to use the procedure explained in the example above. The delta LTV &harr; liquidation threshold represents a soft protection for borrowers and a way to reduce liquidation risk on average, but the liquidation threshold is still considered safe for the protocol.
                        </li>
                        </ul>
                    </div>

                    <div className="4.4" id="section-4.4">
                        <h3>
                        <span>4.4</span> Stable interest rate oracle removal
                        </h3>
                        <p>
                        The new interest rate strategy implements an algorithmic way of managing stable rates, as discussed on the governance forum<sup>3</sup>.
                        </p>
                        <p>
                        The current implementation drops the lending rate oracle in favor of optimizing the stable rate against a certain optimal stable/variable debt ratio, defined by the interest rate strategy<sup>4</sup> and sets the minimal stable debt APR as <em>slope<sub>v,1</sub> + offset<sub>base</sub></em>.
                        </p>
                        <p>
                        As an example, for an asset with a stable offset of 2% that is hitting 4% variable rates at its optimal utilization of 90%, the minimal stable rate will be 6%. The rate is then computed using the slopes <em>slope<sub>s,1</sub></em> and <em>slope<sub>s,2</sub></em> and further offset with at most <em>offset<sub>excess</sub></em> if the stable/variable debt moves beyond the optimal.
                        </p>
                        <p>
                        To compute the stable interest rate, let <em>O<sub>util</sub></em> and <em>O<sub>ratio</sub></em> be the optimal utilization rate and optimal stable to total debt ratio constants respectively, then compute the stable interest rate as seen below:
                        </p>
                        <p>{`$$ base_s = slope_{v,1} + offset_{base}, \\quad E_{util} = 10^{27} - O_{util} $$`}</p>
                        <span id="equation-4" className="equation">(1)</span>
                        <p>{`$$ ratio = \\frac{debt_{stable}}{debt_{stable} + debt_{variable}} $$`}</p>
                        <span id="equation-4" className="equation">(2)</span>
                        <p>{`$$
                            rate_s =
                            \\begin{cases} 
                            base_s + slope_{s,1} + slope_{s,2} * \\frac{(util - O_{util})}{E_{util}}, & \\text{if } util > O_{util} \\\\ 
                            base_s + slope_{s,1} * \\frac{util}{O_{util}}, & \\text{otherwise}
                            \\end{cases}
                            $$`}</p>
                        <span id="equation-4" className="equation">(3)</span>
                        <p>{`$$
                            rate_s =
                            \\begin{cases} 
                            rate_s + offset_{excess} * \\frac{ratio - O_{ratio}}{10^{27} - O_{ratio}}, & \\text{if } ratio > O_{ratio} \\\\ 
                            rate_s, & \\text{otherwise}
                            \\end{cases}
                            $$`}</p>
                        <span id="equation-4" className="equation">(4)</span>
                    </div>

                    <div className="4.5" id="section-4.5">
                        <h3>
                        <span>4.5</span> Portals
                        </h3>
                        <p>
                        Portal represents a set of core features that can be used to allow supplied assets to seamlessly flow between Aave instances on different networks. On a high level, the feature itself is very simple:
                        </p>
                        <p>
                        The Aave Protocol leverages the unique design of the aTokens to burn aTokens on the source network while instantly minting them on the destination network. The underlying assets can then be supplied to Aave on the destination network in a deferred manner, by passing it to the pool after it has been moved through a bridge. This has a number of implications on how the interest rates are calculated and in general the security of the market on the destination network.
                        </p>
                        <p>
                        Design-wise, very little functionality is required at the protocol-level to support multiple very different portal implementations. Only three additional features are required by the protocol: <em>i</em>) minting unbacked aTokens, <em>ii</em>) backing the unbacked aTokens and <em>iii</em>) a whitelisting mechanism for contracts that want to use those features. Besides these features, additional internal accounting of the unbacked amount per-reserve and an update to the interest rates computation was needed.
                        </p>
                        <p>
                        Note that minting of unbacked aTokens does not influence the utilization rate for borrowers as no additional liquidity is provided (<em>util<sub>V2</sub> = util<sub>borrow</sub></em>), however, it <em>must</em> be accounted for in the supply utilization because the unbacked aTokens are accruing interest. To accommodate such, we compute separate utilization rates for the borrow and supply side as follows:
                        </p>
                        <p>{`$$
                            debt_{total} = debt_{variable} + debt_{stable}, \\quad total_{liq} = debt_{total} + avail
                            $$`}</p>
                        <span id="equation-5" className="equation">(5)</span>
                        <p>{`$$
                            util_{borrow} = \\frac{debt_{total}}{total_{liq}}, \\quad util_{supply} = \\frac{debt_{total}}{total_{liq} + unbacked}
                            $$`}</p>
                        <span id="equation-6" className="equation">(6)</span>
                        <p>
                        As visible in <a href="#equation-6">Equation 6</a>, increasing the unbacked value will lower the supply utilization and thereby the interest earned by the liquidity providers because they are diluted by the minted tokens. To offset this interest dilution, the backing of unbacked assets supports a fee that is accrued to the liquidity index. This fee should cover the interest earned by the minted tokens (note that the accrual to the liquidity index also redirects some interest to the minted tokens), so to offset the interest earned on amount it should satisfy:
                        </p>
                        <p>{`$$
                            fee \\geq 
                            \\begin{cases} 
                            interest, & \\text{if } amount \\geq supply \\\\ 
                            interest * \\frac{supply}{supply - amount}, & \\text{otherwise}
                            \\end{cases}
                            $$`}</p>
                        <span id="equation-7" className="equation">(7)</span>
                        <p>
                        While the interest rate computation is part of the core protocol, the calculation of the protocol fee needed to cover unbacked amount and fee comes from outside of the core protocol. Since deferred supplies (through <span className="courier">backUnbacked</span>) and fee calculation are not enforced at the protocol level, governors should be careful in approving bridges (ports) to access the Portal feature. To prevent potential risks of excessive minting of unbacked aTokens, an <span className="courier">unbackedMintCap</span> can be specified per asset.
                        </p>
                    </div>

                    <div className="4.6" id="section-4.6">
                        <h3>
                        <span>4.6</span> Price Oracle Sentinel
                        </h3>
                        <p>
                        As noted in <a href="#3.2">subsection 3.2</a> Aave V3 introduces a Price Oracle Sentinel to mitigate some of the UX issues that may arise in a layer 2 network.
                        </p>
                        <p>
                        <strong>Briefly about L2</strong> Most layer 2 networks today (optimistic- and validity rollups) use a centralized block producer (sequencer) along with distributed validation (fraud or validity proofs) to increase throughput. Primarily these architectures support two queues for pending transactions, one being on-chain (requires L1 transaction) and another being off-chain operated by the sequencer. While the sequencer can build the next L2-“block” using transactions from both queues (with some ordering constraints for L1 not covered here), the inclusion of L1 pending transactions can often be postponed until some deadline, after which the user can force an action, be it inclusion or exodus mode for zk-sync. When the sequencer encounters downtime, this leads to the “network” not progressing the state further – no new blocks are produced. While it is still possible to send transactions to the pending transaction queues (on- or off-chain) nothing will happen immediately, the off-chain transactions may even be rejected or dropped depending on sequencer architecture and nature of downtime. Note, that even when transactions are added to the transaction queue on L1, the canonical state of the L2 is unknown until the transaction is included in a commitment to the canonical transaction history (either by sequencer or force inclusion).
                        </p>
                        <p>
                        For the Aave Protocol, and other systems using oracle price-feeds, this means that the feeds are <em>not</em> updated while the sequencer is down (as they use transactions after all). Essentially having a case where the entire price-development that occurred throughout the downtime is applied when the sequencer comes up. This uncertainty, and possibility for “slow flash crashes”, together with the fact that queuing L2 transactions directly at L1 is out of reach for most normal users, lead Aave V3 to introduce a grace-period on liquidations in these exact cases. As long as the position is not heavily undercollateralized (0.95 &lt; HF &lt; 1), it will have a grace period starting at the time the sequencer comes up until it can be liquidated. If the position goes below 0.95 it can be liquidated entirely as on L1. Note, that this grace period is only activated if the sequencer has been down. During the grace period users will also not be allowed to borrow.
                        </p>
                    </div>

                    <div className="4.7" id="section-4.7">
                        <h3>
                        <span>4.7</span> System roles, responsibilities and threat model
                        </h3>
                        <p>
                        The Aave Protocol implements an access control list to segregate powers and/or benefits that can be allocated to different entities on the protocol. These roles and holders are managed in the <span className="courier">ACLManager</span> contract. The <span className="courier">ACLManager</span> keeps track of the individual roles and its holders and allows a role admin to manage roles. Role admin is itself a role that is managed by the <span className="courier">DEFAULT ADMIN ROLE</span>.
                        </p>
                        <p>
                        The contract that manages the various components of the protocol, including the <span className="courier">ACLManager</span> and the <span className="courier">Pool</span>, is the <span className="courier">PoolAddressesProvider</span>. The addresses provider keeps track of the various protocol modules and has the ability to update pointers (e.g., update <span className="courier">ACLManager</span> contract) or update the implementation of proxy contracts (e.g., update the <span className="courier">Pool</span> implementation). The <span className="courier">PoolAddressesProvider</span> is owned by the Aave Governance<sup>5</sup> and specifies the initial holder of the DEFAULT ADMIN ROLE. In networks other than Ethereum, either the Crosschain Governance Bridges (https://github.com/aave/governance-crosschain-bridges) or community multisigs are used to manage the <span className="courier">PoolAddressesProvider</span>.
                        </p>
                        <p className="no-indent">
                        <strong>Role powers and responsibilities</strong> Below we outline the powers/responsibilities of the roles. The <span className="courier">FLASH BORROWER</span> and <span className="courier">BRIDGE</span> have few direct responsibilities and can primarily access specific features of the protocol, while admin roles have the power and responsibility to handle risk or configuration parameters.
                        </p>
                        <p className="hanging-indent">
                        <em>FLASH_BORROWER</em> Holders of this role will have the premium on flash loans waived (does not include the simple flash loan).
                        </p>
                        <p className="hanging-indent">
                        <em>BRIDGE</em> Holders can perform mintUnbacked() and backUnbacked().
                        </p>
                        <p className="hanging-indent">
                        <em>ASSET_LISTING_ADMIN</em> Holders of this role can: <br />
                        Update asset oracle sources and fallback oracle. <br />
                        Add new assets to the Aave market.
                        </p>
                        <p className="hanging-indent">
                        <em>RISK_ADMIN</em> Holders of this role can: <br />
                        Update the grace period of Oracle Sentinels. <br />
                        Update reserve parameters as reserve factor, caps, E-Mode category, borrowing on, stable borrowing allowed, freeze/unfreeze, LTV, liquidation threshold, liquidation bonus (cannot pause/unpause or activate/deactivate a reserve). <br />
                        Create new and update existing E-Mode categories (not category 0). <br />
                        Update unbacked mint cap and liquidation protocol fee.
                        </p>
                        <p className="hanging-indent">
                        <em>ACL_ADMIN</em> Holders of this role manage the role admins in the ACLManager.
                        </p>
                        <p className="hanging-indent">
                        <em>EMERGENCY_ADMIN</em> Holders of this role can pause and unpause the pool or an individual reserve.
                        </p>
                        <p className="hanging-indent">
                        <em>POOL_ADMIN</em> Holders of this role can update token implementations, drop, (un)pause and (de)activate reserves, update premiums along with everything the <span className="courier">ASSET_LISTING_ADMIN</span> and <span className="courier">RISK_ADMIN</span> can do.
                        </p>
                        <p className="no-indent">
                        <strong>Threat Model</strong>
                        </p>
                        <p>
                        <strong>Malicious Actors</strong> The following outlines the potential harm that can be caused by a malicious actor if that actor holds one of these roles.
                        </p>
                        <p className="hanging-indent">
                        <em>ORACLES</em> A malicious oracle may provide an invalid price, allowing it to borrow more than it should or perform liquidations based on the invalid price.
                        </p>
                        <p className="hanging-indent">
                        <em>SEQUENCER</em> As noted in <a href="#section-4.6">subsection 4.6</a> a sequencer has significant power over ordering within the rollup, putting it in a position to extract significant value from the users of Aave when there is a significant crash in asset prices. This can be done by rejecting supply and repay actions, and liquidating users whose HF drops below 1 – effectively removing the user’s ability to protect themselves from liquidation in crashes.
                        </p>
                        <p className="hanging-indent">
                        <em>FLASH_BORROWER</em> If the address is a proxy, it could allow anyone to call flashloans through it to waive fees for all. This would lead to no premium to liquidity providers from flashloans.
                        </p>
                        <p className="hanging-indent">
                        <em>BRIDGE</em> If a contract/address with this role becomes malicious (or is flawed) it may mint up to the unbacked cap and never back it, effectively allowing it to steal <em>cap<sub>unbacked</sub> &minus; unbacked</em> from the liquidity providers.
                        </p>
                        <p className="hanging-indent">
                        <em>ASSET_LISTING_ADMIN</em> An attacker can upgrade the oracle sources putting the protocol in the same state as the malicious oracle. Alternatively, the attacker may list an asset with a malicious aToken (or debttoken) implementation, allowing them to extract any funds deposited in this asset.
                        </p>
                        <p className="hanging-indent">
                        <em>RISK_ADMIN</em> The attacker can drop the Liquidation Threshold to 0 and liquidate users. This can be done atomically in the same transaction or bundle.
                        </p>
                        <p className="hanging-indent">
                        <em>EMERGENCY_ADMIN</em> The attacker can pause the pool, or unpause an insecure pool. Timed with a market crash, the attacker can turn the pool off, and then atomically perform the sequence (turn on – liquidate – turn off), allowing him to be the sole liquidator.
                        </p>
                        <p className="hanging-indent">
                        <em>POOL_ADMIN</em> The attacker may perform the attacks of the <span className="courier">RISK_ADMIN</span> or <span className="courier">ASSET_LISTING_ADMIN</span> or replace existing token implementations for new ones that include a <span className="courier">rug()</span> function only callable by the attacker.
                        </p>
                        <p className="hanging-indent">
                        <em>ACL_ADMIN</em> The attacker may give himself other roles and can then perform attacks of other admins.
                        </p>
                        <p className="hanging-indent">
                        <em>ADDRESSES_PROVIDER</em> If the owner of the addresses provider is malicious governance has fallen and it is game over.
                        </p>
                        <p>
                        The mitigation of the above stated “attacks” by potential malicious attackers are to be handled by Aave governance. When governance gives roles to specific actors, it should use middleware contracts to limit the actions that the actor can perform using the role, e.g., for <span className="courier">ASSET_LISTING_ADMIN</span> reject updates of existing oracle feeds, and allow only additions.
                        </p>
                    </div>
                </div>
                <div className="pdffooter">
                    <p id="ref-1">
                        <sup>1</sup>
                        <a href="https://github.com/aave/protocol-v2/blob/ac8897348c1abc4a74659af254ade8900007 faba/aave-v2-whitepaper.pdf">
                        https://github.com/aave/protocol-v2/blob/ac8897348c1abc4a74659af254ade8900007 faba/aave-v2-whitepaper.pdf
                        </a>
                    </p>
                    <p id="ref-2">
                        <sup>2</sup>
                        <a href="https://docs.aave.com/risk/">
                        https://docs.aave.com/risk/
                        </a>
                    </p>
                    <p id="ref-3">
                        <sup>3</sup>
                        <a href="https://governance.aave.com/t/base-stable-rate-oracle-update-and-improvemen ts-in-aave-v2/1879">
                        https://governance.aave.com/t/base-stable-rate-oracle-update-and-improvemen ts-in-aave-v2/1879
                        </a>
                    </p>
                    <p id="ref-4">
                        <sup>4</sup>
                        OPTIMAL STABLE TO TOTAL DEBT RATIO
                    </p>
                    <p id="ref-5">
                        <sup>5</sup>
                        <a href="https://docs.aave.com/governance/">
                        https://docs.aave.com/governance/
                        </a>
                    </p>
                </div>
            </div>
        </div>    
    );
};

export default Whitepaper;
