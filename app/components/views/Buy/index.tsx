import { t, Trans } from "@lingui/macro";
import Payment from "@mui/icons-material/Payment";
import { providers } from "ethers";

import { Anchor, ConnectModal, Text } from "@klimadao/lib/components";
import LoginIcon from "@mui/icons-material/Login";

import { urls } from "@klimadao/lib/constants";
import { BalancesCard } from "components/BalancesCard";
import { ImageCard } from "components/ImageCard";
import * as styles from "./styles";

interface Props {
  provider?: providers.JsonRpcProvider;
  address?: string;
  isConnected: boolean;
}

export const Buy = (props: Props) => {
  return (
    <>
      <div className={styles.buyCard}>
        <div className={styles.buyCard_header}>
          {props.isConnected && props.address ? (
            <div>
              <Text t="h4" className={styles.buyCard_header_title}>
                <Payment />
                <Trans id="buy.buy_klima">Buy KLIMA</Trans>
              </Text>
              <Text t="caption" className={styles.buyCard_header_subtitle}>
                <Trans id="buy.cta_1">
                  If you are a beginner, we recommend following our step-by-step
                  tutorial: <Anchor href={urls.buy}>How to Buy KLIMA</Anchor>.
                </Trans>
              </Text>
              <Text t="caption" className={styles.buyCard_header_subtitle}>
                <Trans id="buy.cta_2">
                  Otherwise, if you already have a wallet with MATIC on Polygon,
                  the best way to get KLIMA is to swap on{" "}
                  <Anchor href={urls.sushiSwap}>Sushi.com</Anchor>. If you
                  prefer to pay with a credit card instead, you can use{" "}
                  <Anchor href={urls.transakMatic}>Transak</Anchor> to buy KLIMA
                  directly.
                </Trans>
              </Text>
            </div>
          ) : (
            <>
              <Text t="h4" className={styles.buyCard_header_title}>
                <LoginIcon />
                <Trans id="buy.please_log_in">
                  Please Log In Or Connect A Wallet
                </Trans>
              </Text>
              <Text t="body2">
                <Trans id="buy.connect_to_buy" comment="Long sentence">
                  This feature is available only to users who are logged in. You
                  can log in or create an account via the button below.
                </Trans>
              </Text>
              <ConnectModal
                errorMessage={t({
                  message: "We had some trouble connecting. Please try again.",
                  id: "connect_modal.error_message",
                })}
                torusText={t({
                  message: "or continue with",
                  id: "connectModal.continue",
                })}
                titles={{
                  connect: t({
                    id: "connect_modal.sign_in",
                    message: "Sign In / Connect",
                  }),
                  loading: t({
                    id: "connect_modal.connecting",
                    message: "Connecting...",
                  }),
                  error: t({
                    id: "connect_modal.error_title",
                    message: "Connection Error",
                  }),
                }}
                buttonText={t({
                  id: "shared.login_connect",
                  message: "Login / Connect",
                })}
                buttonClassName={styles.connect_button}
              />
            </>
          )}
        </div>
      </div>
      <BalancesCard
        assets={["klima", "sklima"]}
        tooltip={
          <Trans id="stake.balancescard.tooltip" comment="Long sentence">
            Stake your KLIMA tokens to receive sKLIMA. After every rebase, your
            sKLIMA balance will increase by the given percentage.
          </Trans>
        }
      />
      <ImageCard />
    </>
  );
};
