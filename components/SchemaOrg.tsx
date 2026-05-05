export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.studioconsulenzaelia.it/#business",
        "name": "Studio Elia — Consulenza del Lavoro",
        "alternateName": "Studio Consulenza Elia",
        "description": "Studio di consulenza del lavoro e aziendale a Crotone. Specializzati in amministrazione del personale, diritto del lavoro, welfare aziendale, previdenza e politiche attive del lavoro.",
        "url": "https://www.studioconsulenzaelia.it",
        "telephone": "+390962906121",
        "email": "studio.eliamassimo@gmail.com",
        "vatID": "02100260799",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Largo I° Maggio, 14",
          "addressLocality": "Crotone",
          "addressRegion": "KR",
          "postalCode": "88900",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.0808,
          "longitude": 17.1289
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:30",
            "closes": "12:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "15:30",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/studioconsulenzaelia",
          "https://www.linkedin.com/in/salvatore-elia-8020a6139/"
        ],
        "priceRange": "€€",
        "image": "https://www.studioconsulenzaelia.it/images/massimo-elia.jpg",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servizi di Consulenza del Lavoro",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Amministrazione del Personale", "description": "Elaborazione buste paga, retribuzioni, adempimenti contributivi e fiscali" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diritto del Lavoro", "description": "Contrattualistica, procedimenti disciplinari, gestione rapporti di lavoro" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Welfare Aziendale", "description": "Progettazione e gestione piani welfare, premi di risultato, benefit aziendali" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Previdenza e Pensionistica", "description": "Consulenza previdenziale, pensioni e trattamenti di fine rapporto" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Politiche Attive del Lavoro", "description": "Tirocini, Garanzia Giovani, assegni di ricollocazione" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Relazioni Sindacali", "description": "Assistenza nelle controversie di lavoro, gestione esuberi, ammortizzatori sociali" } }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.studioconsulenzaelia.it/#massimo-elia",
        "name": "Elia Massimo",
        "honorificPrefix": "Rag.",
        "jobTitle": "Consulente del Lavoro",
        "description": "Fondatore dello Studio Elia. Oltre 20 anni di esperienza in consulenza del lavoro, aziendale e societaria. Impegnato nell'Ordine Provinciale CDL di Crotone.",
        "worksFor": { "@id": "https://www.studioconsulenzaelia.it/#business" },
        "image": "https://www.studioconsulenzaelia.it/images/massimo-elia.jpg"
      },
      {
        "@type": "Person",
        "@id": "https://www.studioconsulenzaelia.it/#salvatore-elia",
        "name": "Elia Salvatore",
        "honorificPrefix": "Dott.",
        "jobTitle": "Consulente del Lavoro",
        "sameAs": "https://www.linkedin.com/in/salvatore-elia-8020a6139/",
        "worksFor": { "@id": "https://www.studioconsulenzaelia.it/#business" },
        "image": "https://www.studioconsulenzaelia.it/images/salvatore-elia.jpg"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studioconsulenzaelia.it/#website",
        "url": "https://www.studioconsulenzaelia.it",
        "name": "Studio Elia — Consulenza del Lavoro Crotone",
        "publisher": { "@id": "https://www.studioconsulenzaelia.it/#business" },
        "inLanguage": "it-IT"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
