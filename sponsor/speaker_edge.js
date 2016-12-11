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
                id: 'Rectangle',
                type: 'rect',
                rect: ['208px', '167px','424px','433px','auto', 'auto'],
                fill: ["rgba(82,70,70,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['698px', '167px','424px','433px','auto', 'auto'],
                fill: ["rgba(82,70,70,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'logo_two_line',
                type: 'image',
                rect: ['1090px', '0','250px','152px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo%20two%20line.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['52px', '49px','auto','auto','auto', 'auto'],
                text: "OUR",
                font: ['Arial, Helvetica, sans-serif', 70, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['225px', '49px','auto','auto','auto', 'auto'],
                text: "SPONSORS",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 70, "rgba(248,24,24,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['256px', '197px','auto','auto','auto', 'auto'],
                text: "TITLE  SPONSOR",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['733px', '197px','auto','auto','auto', 'auto'],
                text: "IN KIND  SPONSOR",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 40, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['243px', '255px','347px','189px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"logo.jpg",'0px','0px']
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['243px', '460px','347px','52px','auto', 'auto'],
                text: "Life Insurance Corporation of India (LIC) is an Indian state-owned insurance group and investment company headquartered in Mumbai. It is the largest insurance company in India with an estimated asset value of ₹1,560,482 crore (US$230 billion). As of 2013 it had total life fund of Rs.1433103.14 crore with total value of policies sold of 367.82 lakh that year.",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'VAM_Logo',
                type: 'image',
                rect: ['767px', '261px','290px','141px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"VAM%20Logo.jpg",'0px','0px']
            },
            {
                id: 'cover_photo2',
                type: 'image',
                rect: ['726px', '426px','372px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover%20photo2.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '255px'],
                ["style", "height", '189px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '243px'],
                ["style", "width", '347px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '197px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '733px'],
                ["style", "font-size", '40px']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '197px'],
                ["style", "left", '256px'],
                ["style", "font-size", '40px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(248,24,24,1.00)'],
                ["style", "left", '225px'],
                ["style", "top", '49px']
            ],
            "${_VAM_Logo}": [
                ["style", "top", '261px'],
                ["style", "height", '141px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '767px'],
                ["style", "width", '290px']
            ],
            "${_cover_photo2}": [
                ["style", "height", '141px'],
                ["style", "top", '426px'],
                ["style", "left", '726px'],
                ["style", "width", '372px']
            ],
            "${_Text}": [
                ["style", "top", '49px'],
                ["style", "left", '52px'],
                ["style", "font-size", '70px']
            ],
            "${_RectangleCopy}": [
                ["style", "height", '433px'],
                ["style", "left", '698px'],
                ["color", "background-color", 'rgba(82,70,70,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '620px'],
                ["style", "width", '1345px']
            ],
            "${_Rectangle}": [
                ["style", "height", '433px'],
                ["style", "left", '208px'],
                ["color", "background-color", 'rgba(82,70,70,1.00)']
            ],
            "${_logo_two_line}": [
                ["style", "height", '152px'],
                ["style", "left", '1090px'],
                ["style", "width", '250px']
            ],
            "${_Text4}": [
                ["style", "top", '460px'],
                ["style", "text-align", 'center'],
                ["style", "width", '347px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '52px'],
                ["style", "left", '243px'],
                ["style", "font-size", '15px']
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
