import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoibjhvdmxlMDAiLCJhIjoiY2tsYjN0OGptMGE2dDJ1czMyeTlubGNzeiJ9.z8bd2tehV97OKD8VUDSLOg")

export default function Map() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          styleUrl={MapboxGL.StyleURL.Street}
          style={styles.map}
          zoomLevel={6}
          centerLocation={[24,65]}
          >
            <MapboxGL.PointAnnotation
              key="key1"
              id="id1"
              title="test"
              coordinate={[25,65]}>

            </MapboxGL.PointAnnotation>
            <MapboxGL.Camera
            zoomLevel={6}
            centerCoordinate={[25,65]}>

            </MapboxGL.Camera>

        </MapboxGL.MapView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});
