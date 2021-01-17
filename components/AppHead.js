import Head from "next/head";

function AppHead({ title }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Privatzimmer-Vermietung in Westerstede-Halstrup. Stadtnahe und preisguenstige Unterkunft."
      />
      <meta
        name="keywords"
        content="Esther Welter, Pension, Westerstede, Zimmer, Halstrup, Herberge, Guenstig, Rhodo, Privat, Ammerland, Ammerlandklinik"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

export default AppHead;
