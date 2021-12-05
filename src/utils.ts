export const makeImagePath = (imageId: string, size: string = "original") => {
  return `https://image.tmdb.org/t/p/${size}/${imageId}`;
};
