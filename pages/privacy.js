import AppHead from "../components/AppHead";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Privacy({ content }) {
  return (
    <>
      <AppHead title="Pension Halstrup - Datenschutz" />
      <main
        className="p-5"
        dangerouslySetInnerHTML={{ __html: content }}
      ></main>
    </>
  );
}

export default Privacy;

export async function getServerSideProps() {
  const privacy = await fetchAPI("pension-halstrup-privacy");

  return {
    props: {
      content: await markdownToHtml(privacy.content),
    },
  };
}
