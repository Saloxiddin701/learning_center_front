import sanity from './client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanity)

export const CreateUrl = (source, width = 300, height = 300) => {
    return builder.image(source).width(width).height(height).url()
}