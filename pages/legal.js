import AppHead from "../components/AppHead";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Legal({ content }) {
  return (
    <>
      <AppHead title="Pension Halstrup - Impressum" />
      <main
        className="p-5"
        dangerouslySetInnerHTML={{ __html: content }}
      ></main>
    </>
  );
}

export default Legal;

export async function getServerSideProps() {
  const legal = await fetchAPI("pension-halstrup-legal");

  return {
    props: {
      content: await markdownToHtml(legal.content),
    },
  };
}
