import Image from "next/image";
import Link from "next/link";
import FooterItemList from "../../molecules/FooterItemList";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/footer-logo.svg" width={60} height={60} />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <FooterItemList content="About Us" href="/" />
                    <FooterItemList content="Press Release" href="/" />
                    <FooterItemList content="Terms of Use" href="/" />
                    <FooterItemList content="Privacy & Policy" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <FooterItemList content="Refund Policy" href="/" />
                    <FooterItemList content="Unlock Rewards" href="/" />
                    <FooterItemList content="Live Chatting" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <FooterItemList content="hi@store.gg" href="/" />
                    <FooterItemList content="team@store.gg" href="/" />
                    <FooterItemList
                      content="Pasific 12, Jakarta Selatan"
                      href="/"
                    />
                    <FooterItemList content="021 - 1122 - 9090" href="/" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
