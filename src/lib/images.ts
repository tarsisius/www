const images = import.meta.glob(
  '$lib/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}',
  {
    query: {
      enhanced: true,
    },
  }
)

export default images
