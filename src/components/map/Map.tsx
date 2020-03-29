import React from 'react';
import SnazzyInfoWindow from 'snazzy-info-window';

const mapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: -100
      },
      {
        color: '#ffdac9'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#ffcab1'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffcab1'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on'
      },
      {
        lightness: 700
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#92e1dd'
      }
    ]
  }
];

export class MapContainer extends React.Component {
  private divRef = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    console.log(google.maps);

    const map = new google.maps.Map(this.divRef.current!, {
      zoom: 14,
      styles: mapStyles,
      center: new google.maps.LatLng(40.72, -74)
    });

    const markerIcon = {
      path:
        'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
      fillColor: '#e25a00',
      fillOpacity: 0.95,
      scale: 3,
      strokeColor: '#fff',
      strokeWeight: 3,
      anchor: new google.maps.Point(12, 24)
    };

    const marker = new google.maps.Marker({
      map: map,
      icon: markerIcon,
      position: new google.maps.LatLng(40.72, -74)
    });

    const info = new SnazzyInfoWindow({
      marker: marker
    });

    info.open();
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <h1>Map Component</h1>
        <div
          ref={this.divRef}
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </React.Fragment>
    );
  }
}

export default MapContainer;
// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? 'NOT_FOUND'
// })(MapContainer);
