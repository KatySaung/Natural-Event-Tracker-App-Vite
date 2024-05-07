import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
  MarkerClusterer,
} from "@react-google-maps/api";

const containerStyle = { width: "100vw", height: "100vw" };
const center = { lat: 35.503164, lng: -102.252503 };

// MarkerF from react-google-maps/api library will load the marker only if variable name is position assigned to the lat and lng values. If using Marker component, it will not show.
// const markers in Map.jsx with conditional will not show up along with no map
const Map = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_API_KEY_DEV,
  });
  if (!isLoaded) return <div>Loading...</div>;

  // infoWindow

  // DevTools, components show marker is mapping through all coordinates. Multiple markers will not display on map.
  const markers = data.map((ev, index) => {
    if (ev.categories[0].id === "wildfires") {
      return (
        <MarkerF
          key={index}
          position={{
            lat: ev.geometry[0].coordinates[1],
            lng: ev.geometry[0].coordinates[0],
          }}
        ></MarkerF>
      );
    }
    return null;
  });
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
      {/* <MarkerF position={center}></MarkerF> */}
      {markers}
    </GoogleMap>
  );
};

export default Map;
