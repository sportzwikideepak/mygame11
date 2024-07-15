export const filterMatchBySeries = (matchesArray = [], seriesName) => {
  if (!matchesArray.length || !seriesName) {
    return [];
  }

  const targetSeriesName = seriesName.toLowerCase();

  return matchesArray.filter(
    (match) => match?.competition?.title?.toLowerCase() === targetSeriesName
  );
};
