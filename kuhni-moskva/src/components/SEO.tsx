import { Helmet } from "react-helmet-async";

export default function SEO({title, description, keywords}:{title:string;description:string;keywords?:string}){
  const site = "Кухни и корпусная мебель на заказ в Москве и МО";
  const full = `${title} | ${site}`;
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description}/>
      {keywords && <meta name="keywords" content={keywords}/>}
      <meta property="og:title" content={full}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content="/og-cover.jpg"/>
      <meta property="og:type" content="website"/>
      <script type="application/ld+json">{JSON.stringify({
        "@context":"https://schema.org",
        "@type":"LocalBusiness",
        "name":"Кухни и корпусная мебель",
        "address":{"@type":"PostalAddress","addressLocality":"Москва","streetAddress":"Калужское шоссе 4 с1"},
        "telephone":"+7 995 882-51-91",
        "areaServed":"Москва и МО",
        "url":"https://example.com"
      })}</script>
    </Helmet>
  );
}
