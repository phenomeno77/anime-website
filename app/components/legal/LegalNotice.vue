<template>
  <!-- Hero — base tone -->
  <section class="relative">
    <div
      class="container-custom flex min-h-[42vh] flex-col justify-center text-center py-20 lg:min-h-[48vh] lg:py-32"
    >
      <p class="text-sm font-bold uppercase tracking-[0.22em] text-accent-2">
        Legal Information
      </p>

      <h1
        class="mt-5 font-display text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl"
      >
        Legal Notice
      </h1>

      <p class="mx-auto mt-8 max-w-2xl text-lg text-muted">
        Information obligations pursuant to Section 5 of the Austrian E-Commerce
        Act (ECG), Section 14 of the Austrian Commercial Code (UGB), Section 63
        of the Austrian Trade Regulation Act (GewO), and the disclosure
        requirements under Section 25 of the Austrian Media Act (Mediengesetz).
      </p>
    </div>
  </section>

  <!-- Legal Information — raised tone -->
  <UiSectionBackground tone="raised" divider>
    <section class="relative">
      <div class="container-custom py-16 lg:py-24">
        <div class="mx-auto max-w-4xl">
          <!-- Business information -->
          <div
            class="rounded-2xl border border-border bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(157,92,255,0.35)] sm:p-8 lg:p-10"
          >
            <div class="space-y-7">
              <div>
                <h2 class="font-display text-lg font-bold text-text">
                  Media Owner &amp; Service Provider
                </h2>

                <p class="mt-2 leading-7 text-muted">[Your Full Name]</p>

                <p class="mt-1 text-sm text-muted">
                  Artist name:
                  <span class="text-text">AnimeArt Marianelo</span>
                </p>
              </div>

              <div class="border-t border-border pt-7">
                <h2 class="font-display text-lg font-bold text-text">
                  Business Activity
                </h2>

                <p class="mt-2 leading-7 text-muted">
                  Creation of digital artwork, illustrations and multimedia
                  design.
                </p>
              </div>

              <div class="border-t border-border pt-7">
                <h2 class="font-display text-lg font-bold text-text">
                  Registered Business Address
                </h2>

                <p class="mt-2 leading-7 text-muted">
                  [Street]<br />
                  [Postal Code, City], Austria
                </p>
              </div>

              <div class="border-t border-border pt-7">
                <h2 class="font-display text-lg font-bold text-text">
                  Contact
                </h2>

                <p class="mt-2 leading-7 text-muted">
                  Email:
                  <a
                    href="mailto:email@example.com"
                    class="font-medium text-accent-2 transition-colors hover:text-text hover:underline"
                  >
                    email@example.com
                  </a>
                  <br />
                  Telephone: +43 ...
                </p>
              </div>

              <div class="border-t border-border pt-7">
                <h2 class="font-display text-lg font-bold text-text">
                  Membership
                </h2>

                <p class="mt-2 leading-7 text-muted">
                  Member of the Austrian Federal Economic Chamber (WKO),
                  Professional Association for Advertising and Market
                  Communication.
                </p>
              </div>

              <div class="border-t border-border pt-7">
                <h2 class="font-display text-lg font-bold text-text">
                  Supervisory Authority / Trade Authority
                </h2>

                <p class="mt-2 leading-7 text-muted">
                  [District Authority or Municipal Authority]
                </p>
              </div>

              <div class="border-t border-border pt-7">
                <h2 class="font-display text-lg font-bold text-text">
                  Professional Regulations
                </h2>

                <p class="mt-2 leading-7 text-muted">
                  Austrian Trade Regulation Act (GewO)
                </p>

                <a
                  href="https://www.ris.bka.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-2 inline-block text-sm font-medium text-accent-2 underline underline-offset-2 transition-colors hover:text-text"
                >
                  ris.bka.gv.at
                </a>
              </div>

              <div class="border-t border-border pt-7">
                <h2 class="font-display text-lg font-bold text-text">
                  VAT Status
                </h2>

                <div class="mt-2 space-y-3 leading-7 text-muted">
                  <p>
                    <span class="font-medium text-text">Option A:</span>
                    Small business according to Section 6 (1) No. 27 Austrian
                    VAT Act (UStG).
                  </p>

                  <p>
                    <span class="font-medium text-text">Option B:</span>
                    VAT Identification Number:
                    <span class="text-text">ATU12345678</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Media Act -->
          <div class="mt-14">
            <h2
              class="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl"
            >
              Disclosure pursuant to Section 25 Austrian Media Act
            </h2>

            <div
              class="mt-6 rounded-2xl border border-border bg-background/50 p-6 sm:p-8"
            >
              <p class="leading-7 text-muted">
                <span class="font-medium text-text">
                  Purpose of this Website:
                </span>
                Presentation of digital artwork, portfolio projects,
                illustration and graphic design services, and contact
                information for commissions.
              </p>
            </div>
          </div>

          <!-- EU dispute resolution -->
          <div class="mt-14">
            <h2
              class="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl"
            >
              EU Online Dispute Resolution
            </h2>

            <div class="mt-5 space-y-4 text-sm leading-7 text-muted">
              <p>
                Consumers may submit complaints through the European
                Commission's Online Dispute Resolution platform:
              </p>

              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block font-medium text-accent-2 underline underline-offset-2 transition-colors hover:text-text"
              >
                ec.europa.eu/consumers/odr
              </a>

              <p>
                You may also send complaints directly to the email address
                listed above.
              </p>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-14">
            <h2
              class="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl"
            >
              Copyright Notice
            </h2>

            <p class="mt-5 text-sm leading-7 text-muted">
              All content published on this website, including artwork, images,
              illustrations, photographs, videos and text, is protected by
              copyright. Any reproduction, editing, distribution or any other
              use beyond the scope permitted by copyright law requires the prior
              written consent of the respective copyright holder.
            </p>
          </div>
        </div>
      </div>
    </section>
  </UiSectionBackground>
</template>
