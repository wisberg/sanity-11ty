import client from "./sanityClient.js";

const pageQuery = `*[_type == "page" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  slug,
  seoTitle,
  seoDescription,
  seoKeywords,
  "seoImageUrl": seoImage.asset->url,
  noIndex,
  pageBuilder[]{
    ...,
    _type == "fullWidthHero" => {
      ...,
      "backgroundUrl": backgroundImage.asset->url,
      "backgroundAlt": backgroundImage.alt,
      "primaryInternalSlug": primaryInternalLink->slug.current,
      "secondaryInternalSlug": secondaryInternalLink->slug.current
    },
    _type == "hero" => {
      ...,
      "imageUrl": backgroundImage.asset->url,
      "imageAlt": backgroundImage.alt
    },
    _type == "cta" => {
      ...,
      "internalSlug": internalLink->slug.current
    },
    _type == "imageWithText" => {
      ...,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      "internalSlug": internalLink->slug.current
    },
    _type == "showcase" => {
      ...,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      "primaryInternalSlug": primaryInternalLink->slug.current,
      "secondaryInternalSlug": secondaryInternalLink->slug.current
    },
    _type == "mediaMosaic" => {
      ...,
      "items": items[]{
        ...,
        "url": asset->url,
        "alt": alt,
        "caption": caption
      }
    },
    _type == "testimonial" => {
      ...,
      "avatarUrl": avatar.asset->url,
      "avatarAlt": avatar.alt
    },
    _type == "logoCloud" => {
      ...,
      "logos": logos[]{
        ...,
        "url": asset->url,
        "alt": alt
      }
    },
    _type == "sandBand" => {
      ...,
      "internalSlug": internalLink->slug.current
    },
    _type == "darkBand" => {
      ...,
      "internalSlug": internalLink->slug.current
    },
    _type == "fullScreenHero" => {
      ...,
      "backgroundUrl": backgroundImage.asset->url,
      "backgroundAlt": backgroundImage.alt,
      "internalSlug": internalLink->slug.current
    }
  }
}`;

export default async function () {
  const liveClient = client.withConfig({ useCdn: false });
  const pages = await liveClient.fetch(pageQuery);
  const site = await liveClient.fetch(`*[_id in ["siteSettings", "drafts.siteSettings"]] | order(_updatedAt desc)[0]{
    title,
    "logoUrl": logo.asset->url,
    "logoAlt": logo.alt,
    siteUrl,
    "homepageSlug": homepage->slug.current,
    "defaultDescription": defaultDescription,
    "defaultOgImageUrl": defaultOgImage.asset->url,
    analyticsId,
    navigation[]{
      ...,
      "internalId": internalLink->_id,
      "internalSlug": internalLink->slug.current,
      children[]{
        ...,
        "internalId": internalLink->_id,
        "internalSlug": internalLink->slug.current
      }
    },
    evergreenLinks[]{
      ...,
      "internalId": internalLink->_id,
      "internalSlug": internalLink->slug.current,
      children[]{
        ...,
        "internalId": internalLink->_id,
        "internalSlug": internalLink->slug.current
      }
    },
    footerLinks[]{
      ...,
      "internalId": internalLink->_id,
      "internalSlug": internalLink->slug.current,
      children[]{
        ...,
        "internalId": internalLink->_id,
        "internalSlug": internalLink->slug.current
      }
    },
    "footerBackgroundUrl": footerBackground.asset->url,
    "footerBackgroundAlt": footerBackground.alt,
    footerTagline,
    footerLegal
  }`);
  return { pages, site };
}
