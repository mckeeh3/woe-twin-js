
const worldMap = {
  entityIdFor: (region) => {
    const tLat = region.topLeftLat.toFixed(13);
    const tLng = region.topLeftLng.toFixed(13);
    const bLat = region.botRightLat.toFixed(13);
    const bLng = region.botRightLng.toFixed(13);
    return `${region.zoom}:${tLat}:${tLng}:${bLat}:${bLng}`;
  }
};

export default worldMap;
