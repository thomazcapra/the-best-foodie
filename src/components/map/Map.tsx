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
      disableDefaultUI: true, // a way to quickly hide all controls
      scaleControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      center: new google.maps.LatLng(51.510365, -0.157709)
    });

    const markerIcon = {
      path:
        'M20.844,0h0C9.387,0,0,10.348,0,21.509v.074c.37,7.17,3.991,14.192,8.131,21.361s8.8,14.709,11.6,22.692a1.516,1.516,0,0,0,1.922.961,1.464,1.464,0,0,0,1.035-1.035c2.439-8.278,7.022-15.818,11.161-23.061s7.835-13.97,7.909-21.066h0C41.762,10.348,32.375,0,20.844,0Zm0,36.218A14.783,14.783,0,1,1,35.627,21.435,14.779,14.779,0,0,1,20.844,36.218Z',
      fillColor: '#333',
      fillOpacity: 0.95,
      scale: 1,
      strokeColor: '#fff',
      strokeWeight: 1,
      anchor: new google.maps.Point(51.513012, -0.127607)
    };

    const marker = new google.maps.Marker({
      map: map,
      icon: markerIcon,
      position: new google.maps.LatLng(51.513012, -0.127607)
    });

    const info = new SnazzyInfoWindow({
      marker: marker
    });

    info.open();
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <div
          ref={this.divRef}
          style={{
            height: '500px',
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
