/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'logo_two_line',
                type: 'image',
                rect: ['1090px', '0','250px','152px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo%20two%20line.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['69px', '36px','auto','auto','auto', 'auto'],
                text: "OUR",
                font: ['Arial, Helvetica, sans-serif', 70, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['242px', '36px','auto','auto','auto', 'auto'],
                text: "SPEAKERS",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 70, "rgba(248,24,24,1.00)", "400", "none", "normal"]
            },
            {
                id: 'speaker',
                type: 'image',
                rect: ['-39px', '170px','1359px','254px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"speaker.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '36px'],
                ["style", "left", '69px'],
                ["style", "font-size", '70px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(251,251,251,1.00)'],
                ["style", "width", '1345px'],
                ["style", "height", '620px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(248,24,24,1.00)'],
                ["style", "left", '242px'],
                ["style", "top", '36px']
            ],
            "${_logo_two_line}": [
                ["style", "height", '152px'],
                ["style", "left", '1090px'],
                ["style", "width", '250px']
            ],
            "${_speaker}": [
                ["style", "top", '170px'],
                ["style", "left", '-39px'],
                ["style", "width", '1359px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7073243");
