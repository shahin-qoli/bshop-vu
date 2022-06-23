import { ApiConfig } from "../../types"
import { formatTaxonLink } from './taxonLink'

export function deserializeContents (apiResponse, config: ApiConfig) {
  config.assetsUrl
  const contents = apiResponse.data
  try {
    const included = apiResponse.included
      .map((inc) => {
        const url = config.assetsUrl || config.backendUrl
        if (inc.attributes.type == 'Spree::Cms::Sections::ImageGallery' ||
          inc.attributes.type == 'Spree::Cms::Sections::HeroImage'
        ) {
          const attrs = inc.attributes
          const list = ['one', 'two', 'three']
          const sizes = ['sm', 'md', 'lg', 'xl']
          for (var name of list) {
            for (var size of sizes) {
              const key = `img_${name}_${size}`
              var addr = attrs[key]
              if (addr) {
                attrs[key] = url + addr
              }
            }
          }
        }
        if (inc.attributes.type == 'Spree::Cms::Sections::HeroImage') {
          if (inc.attributes.link) {
            inc.attributes.link = formatTaxonLink(inc.attributes.link)
          }
        }
        if (inc.attributes.type == 'Spree::Cms::Sections::ProductCarousel') {
          const linked_resource = inc.relationships.linked_resource.data
          if (linked_resource) {
            inc.taxon = apiResponse.included
              .find(i => i.type == linked_resource.type && i.id == linked_resource.id)
          }
        }
        return inc
      })
    return contents
      .map((content) => {
        const sectionIds = content.relationships.cms_sections.data.map(cs => cs.id)
        return {
          ...content,
          sections: included
            .filter((inc) => {
              return inc.type == 'cms_section' && sectionIds.includes(inc.id)
            })
        }
      })
  }
  catch (err) {
    console.error(err)
  }
}
