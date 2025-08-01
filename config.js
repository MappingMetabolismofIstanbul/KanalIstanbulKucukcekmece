
var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Küçükçekmece Gölü / Lake Küçükçekmece ',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
               center: [28.756,41.012],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/20gvgdZ9/MEF-AAP-027-BAP-PART-II-2025-07-30-09-09-50.png',
            description: '',
            location: {
              center: [28.760,41.019],
                zoom: 14,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/jZx3qDF9/MEF-AAP-027-BAP-PART-II-2025-07-30-06-18-15.png',
            description: '',
            location: {
              center: [28.753,41.008],
                zoom: 14,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/KpYFBpwP/MEF-AAP-027-BAP-PART-II-2025-07-30-06-18-26.png',
            description: '',
            location: {
                 center: [28.753,41.008],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/7x72GVXG/MEF-AAP-027-BAP-PART-II-2025-07-30-06-19-06.png',
            description: '',
            location: {
                 center: [28.753,41.008],
                zoom: 12,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/FqxRrpg9/MEF-AAP-027-BAP-PART-II-2025-07-30-06-19-29.png',
            description: '',
            location: {
                center: [28.753,41.008],
                zoom: 12,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'right',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '7',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/j9w5ZkZC/MEF-AAP-027-BAP-PART-II-2025-07-30-06-28-20.png',
            description: '',
            location: {
                center: [28.753,41.008],
                zoom: 12,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.753,41.008],
                zoom: 12,
                pitch: 10,
                bearing: 0,
               
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
             mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
               center: [28.753,41.008],
                zoom: 12,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       
      
    ]
};
