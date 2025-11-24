import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
  location?: {
    name: string;
    address: string;
    phone: string;
    latitude?: number;
    longitude?: number;
  };
}

const SEO = ({ title, description, keywords, canonical, ogImage, schema, location }: SEOProps) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo]');
    existingMetas.forEach((meta) => meta.remove());

    // Create new meta tags
    const metaTags = [
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: ogImage || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=630&fit=crop&crop=center' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=630&fit=crop&crop=center' }];


    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    if (canonical) {
      // Remove existing canonical link
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) existingCanonical.remove();

      // Add new canonical link
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonical;
      canonicalLink.setAttribute('data-seo', 'true');
      document.head.appendChild(canonicalLink);
    }

    // Add meta tags
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.name = name;
      if (property) meta.setAttribute('property', property);
      meta.content = content;
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

    // Add structured data
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: 'Gnathos Dental',
      description: 'Best dental clinic in Hyderabad providing advanced, painless, and affordable dental care',
      url: 'https://gnathosdentalcare.com',
      telephone: '+91 9955 708 885',
      email: 'gnathosdentalcare@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Care Hospital, Near Cyberabad Police Commissionerate, Jayabheri Pine Valley',
        addressLocality: 'Hitech City',
        addressRegion: 'Telangana',
        postalCode: '500032',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 17.4399,
        longitude: 78.3908
      },
      openingHours: [
      'Mo-Sa 09:00-20:00',
      'Su 10:00-18:00'],

      priceRange: '₹₹',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1000'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dental Services',
        itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dental Implants',
            description: 'Best dental implants in Hyderabad with advanced technology'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Root Canal Treatment',
            description: 'Painless root canal treatment in Hyderabad with laser technology'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dental Crowns',
            description: 'High-quality dental crowns and caps in Hyderabad'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wisdom Tooth Extraction',
            description: 'Painless wisdom tooth removal in Hyderabad'
          }
        }]

      }
    };

    // Location-specific schema
    if (location) {
      const locationSchema = {
        '@context': 'https://schema.org',
        '@type': 'DentalClinic',
        name: `Gnathos Dental - ${location.name}`,
        description: `Best dental clinic in ${location.name}, Hyderabad`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: location.address,
          addressLocality: location.name,
          addressRegion: 'Telangana',
          addressCountry: 'IN'
        },
        telephone: location.phone,
        ...(location.latitude && location.longitude && {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: location.latitude,
            longitude: location.longitude
          }
        })
      };

      const locationScript = document.createElement('script');
      locationScript.type = 'application/ld+json';
      locationScript.setAttribute('data-seo', 'true');
      locationScript.textContent = JSON.stringify(locationSchema);
      document.head.appendChild(locationScript);
    }

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[data-seo][type="application/ld+json"]');
    existingScripts.forEach((script) => {
      if (!script.textContent?.includes(location?.name || '')) {
        script.remove();
      }
    });

    // Add main structured data
    const finalSchema = schema ? { ...baseSchema, ...schema } : baseSchema;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'true');
    script.textContent = JSON.stringify(finalSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const seoElements = document.querySelectorAll('[data-seo]');
      seoElements.forEach((element) => element.remove());
    };
  }, [title, description, keywords, canonical, ogImage, schema, location]);

  return null;
};

export default SEO;