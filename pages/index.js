import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import AppHead from "../components/AppHead";
import Teaser from "../components/Teaser";
import GDPRIframe from "../components/GDPRIframe";
import { optimizeCMSImageSrc } from "../lib/image";
import Carousel from "../components/Carousel";

export default function Home({
  title,
  subtitle,
  images,
  description,
  prices,
  contact,
  contactImage,
}) {
  return (
    <>
      <AppHead title={title} />
      <main>
        <section
          id="welcome"
          className="row g-0 align-items-stretch bg-dark text-light"
        >
          <div className="col">
            <Teaser title={title}>
              <p>{subtitle}</p>
            </Teaser>
          </div>
          <div className="col">
            <Carousel images={images} />
          </div>
        </section>
        <section
          id="about"
          className="p-5"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <section
          id="prices"
          className="p-5 bg-dark text-light"
          dangerouslySetInnerHTML={{ __html: prices }}
        />
        <img
          className="avatar img-thumbnail float-sm-end m-5"
          src={optimizeCMSImageSrc({ src: contactImage.url, width: 200 })}
          alt={contactImage.alternativeText}
          loading="lazy"
          decoding="async"
          width="220"
          height="260"
        />
        <section
          id="contact"
          className="p-5"
          dangerouslySetInnerHTML={{ __html: contact }}
        />
        <GDPRIframe
          id="map"
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20854.616005782707!2d7.920615309296861!3d53.25999540224704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6fae4acf35869%3A0x8c92595791d3fc5!2sPension%20Halstrup!5e0!3m2!1sde!2sus!4v1610899783246!5m2!1sde!2sus"
          height="450"
          width="100%"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          previewText="Bitte akzeptieren, um Google Maps cookies zu laden"
          previewSrc="/map.jpg"
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const home = await fetchAPI("pension-halstrup-home");

  return {
    props: {
      title: home.title,
      subtitle: home.subtitle,
      images: home.images,
      description: await markdownToHtml(home.description),
      prices: await markdownToHtml(home.prices),
      contact: await markdownToHtml(home.contact),
      contactImage: home.contactImage,
    },
  };
}
