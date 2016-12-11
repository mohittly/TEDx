/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['OpenSans-Light']='<link rel=\"stylesheet\" href=\"mystyle.css\" type=\"text/css\">';

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
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'logo_two_line2',
                display: 'none',
                type: 'image',
                rect: ['7px', '7px','550px','334px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo%20two%20line2.png",'0px','0px']
            },
            {
                id: 'logo_two_line4',
                display: 'block',
                type: 'image',
                rect: ['1120px', '0','200px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo%20two%20line4.png",'0px','0px']
            },
            {
                id: 'background_2',
                display: 'block',
                type: 'image',
                rect: ['0', '0','1332px','630px','auto', 'auto'],
                opacity: 0.1,
                fill: ["rgba(0,0,0,0)",im+"background%202.jpg",'0px','0px']
            },
            {
                id: 'grass_P',
                display: 'none',
                type: 'image',
                rect: ['0px', '1199px','1395px','800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"grass%202.png",'0px','0px']
            },
            {
                id: '_2016_THEME',
                display: 'block',
                type: 'image',
                rect: ['36px', '46px','350px','450px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2016%20THEME.png",'0px','0px']
            },
            {
                id: 'Ellipse_R_2_PCopy',
                display: 'none',
                type: 'ellipse',
                rect: ['190px', '777px','166px','163px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,84,84,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'tree_P',
                display: 'none',
                type: 'image',
                rect: ['5px', '241px','1400px','1748px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"final-2.png",'0px','0px']
            },
            {
                id: 'Group_ysp_P',
                display: 'none',
                type: 'group',
                rect: ['288', '388','230','235','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'ysp_B_P',
                    type: 'ellipse',
                    rect: ['0px', '0px','230px','235px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(120,102,102,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'ysp_F_P',
                    type: 'ellipse',
                    rect: ['23px', '27px','183px','185px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text_hunt_p',
                    type: 'text',
                    rect: ['57px', '72px','auto','auto','auto', 'auto'],
                    text: "YOUTH",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(247,43,43,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text_speaker_p',
                    type: 'text',
                    rect: ['39px', '109px','auto','auto','auto', 'auto'],
                    text: "SPEAKER",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(247,43,43,1)", "400", "none", "normal"]
                },
                {
                    id: 'Text_HUNT_P',
                    type: 'text',
                    rect: ['67px', '150px','auto','auto','auto', 'auto'],
                    text: "HUNT",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(247,43,43,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'fb_P',
                display: 'none',
                type: 'image',
                rect: ['0', '1400px','150px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fb.jpg",'0px','0px']
            },
            {
                id: 'Group_Speakers_P',
                display: 'none',
                type: 'group',
                rect: ['893', '811','254','250','auto', 'auto'],
                c: [
                {
                    id: 'Ellipse_R_1_PCopy5',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','254px','250px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(249,84,84,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Speakers_W_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['26px', '28px','197px','201px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Speakers_P',
                    display: 'none',
                    type: 'text',
                    rect: ['42px', '105px','auto','auto','auto', 'auto'],
                    text: "SPEAKERS",
                    align: "left",
                    font: ['OpenSans-Light', 35, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'grass_L',
                display: 'block',
                type: 'image',
                rect: ['0', '0','1332px','630px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"grass%202.png",'0px','0px']
            },
            {
                id: 'tree_L',
                display: 'block',
                type: 'image',
                rect: ['435px', '0','500px','624px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"final-22.png",'0px','0px']
            },
            {
                id: 'Ellipse_R_1_L',
                display: 'block',
                type: 'ellipse',
                rect: ['686px', '82px','104px','104px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_5_L',
                display: 'block',
                type: 'ellipse',
                rect: ['613px', '105px','66px','66px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_8_L',
                display: 'block',
                type: 'ellipse',
                rect: ['509px', '204px','51px','51px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_9_L',
                display: 'block',
                type: 'ellipse',
                rect: ['738px', '337px','51px','51px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_2_L',
                display: 'block',
                type: 'ellipse',
                rect: ['827px', '36px','82px','82px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_7_L',
                display: 'block',
                type: 'ellipse',
                rect: ['751px', '207px','93px','93px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_6_L',
                display: 'block',
                type: 'ellipse',
                rect: ['563px', '166px','67px','67px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_3_L',
                display: 'block',
                type: 'ellipse',
                rect: ['738px', '32px','51px','51px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(244,97,97,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Group_16_L',
                display: 'block',
                type: 'group',
                rect: ['621', '193','117','114','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_16_B_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','117px','114px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(248,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_16_S_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['12px', '12px','93px','93px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx16_L',
                    display: 'block',
                    type: 'text',
                    rect: ['39px', '32px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,17,17,1.00)", "600", "none", "normal"]
                },
                {
                    id: 'VITVellore_16_L',
                    display: 'block',
                    type: 'text',
                    rect: ['25px', '51px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "500", "none", "normal"]
                },
                {
                    id: '_2016_L',
                    display: 'block',
                    type: 'text',
                    rect: ['39px', '68px','auto','auto','auto', 'auto'],
                    text: "2016",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "500", "none", "normal"]
                }]
            },
            {
                id: 'Group_Sponsor_L',
                display: 'block',
                type: 'group',
                rect: ['466', '127','82','80','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_About_B_LCopy',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','82px','80px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(146,141,141,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_About_S_LCopy',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['8px', '7px','66px','66px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text12',
                    display: 'block',
                    type: 'text',
                    rect: ['12px', '33px','auto','auto','auto', 'auto'],
                    text: "SPONSORS",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "500", "none", "normal"]
                }]
            },
            {
                id: 'Group_15_L',
                display: 'block',
                type: 'group',
                rect: ['818', '127','117','114','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_15_B_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','117px','114px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(146,141,141,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_15_S_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['12px', '11px','93px','93px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx15_L',
                    display: 'block',
                    type: 'text',
                    rect: ['37px', '30px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,17,17,1.00)", "600", "none", "normal"]
                },
                {
                    id: 'VITVellore_15_L',
                    display: 'block',
                    type: 'text',
                    rect: ['23px', '49px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "500", "none", "normal"]
                },
                {
                    id: '_2015_L',
                    display: 'block',
                    type: 'text',
                    rect: ['44px', '67px','auto','auto','auto', 'auto'],
                    text: "2015<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "500", "none", "normal"]
                }]
            },
            {
                id: 'Group_14_L',
                display: 'block',
                type: 'group',
                rect: ['798', '315','117','114','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_14_B_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','117px','114px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(146,141,141,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_14_S_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['12px', '11px','93px','93px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx14_L',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '30px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,17,17,1.00)", "600", "none", "normal"]
                },
                {
                    id: 'VITVellore_14_L',
                    display: 'block',
                    type: 'text',
                    rect: ['23px', '48px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "500", "none", "normal"]
                },
                {
                    id: '_2014_L',
                    display: 'block',
                    type: 'text',
                    rect: ['44px', '66px','auto','auto','auto', 'auto'],
                    text: "2014<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "500", "none", "normal"]
                }]
            },
            {
                id: 'Group_13_L',
                display: 'block',
                type: 'group',
                rect: ['413', '233','117','114','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_13_B_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','117px','114px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(146,141,141,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_13_S_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['12px', '11px','93px','93px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx13_L',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '33px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,17,17,1.00)", "600", "none", "normal"]
                },
                {
                    id: 'VITVellore_13_L',
                    display: 'block',
                    type: 'text',
                    rect: ['22px', '51px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1.00)", "500", "none", "normal"]
                },
                {
                    id: '_2013_L',
                    display: 'block',
                    type: 'text',
                    rect: ['43px', '69px','auto','auto','auto', 'auto'],
                    text: "2013",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "500", "none", "normal"]
                }]
            },
            {
                id: 'Group_Contact_L',
                display: 'block',
                type: 'group',
                rect: ['525', '303','69','67','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_Contact_B_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','69px','67px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(146,141,141,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_Contact_S_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['7px', '6px','55px','54px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Contact_L',
                    display: 'block',
                    type: 'text',
                    rect: ['11px', '28px','auto','auto','auto', 'auto'],
                    text: "REGISTER",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 9, "rgba(0,0,0,1.00)", "600", "none", "normal"]
                }]
            },
            {
                id: 'Group_About_L',
                display: 'block',
                type: 'group',
                rect: ['644', '10','82','80','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_About_B_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','82px','80px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(146,141,141,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_About_S_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['8px', '7px','66px','66px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'About_L',
                    display: 'block',
                    type: 'text',
                    rect: ['16px', '26px','auto','auto','auto', 'auto'],
                    text: "ABOUT",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 13, "rgba(0,0,0,1)", "600", "none", "normal"]
                },
                {
                    id: 'TED_L',
                    display: 'block',
                    type: 'text',
                    rect: ['28px', '42px','auto','auto','auto', 'auto'],
                    text: "TED",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 13, "rgba(249,29,29,1.00)", "600", "none", "normal"]
                }]
            },
            {
                id: 'Ellipse_R_1_PCopy4',
                display: 'none',
                type: 'ellipse',
                rect: ['357px', '707px','197px','194px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,84,84,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_1_PCopy7',
                display: 'none',
                type: 'ellipse',
                rect: ['844px', '1175px','197px','194px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,84,84,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_1_PCopy6',
                display: 'none',
                type: 'ellipse',
                rect: ['509px', '580px','150px','147px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,84,84,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_1_PCopy2',
                display: 'none',
                type: 'ellipse',
                rect: ['723px', '481px','278px','273px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,84,84,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_1_PCopy3',
                display: 'none',
                type: 'ellipse',
                rect: ['1086px', '293px','278px','273px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,84,84,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse_R_2_P',
                display: 'none',
                type: 'ellipse',
                rect: ['834px', '288px','166px','163px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(249,84,84,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Group_16_P',
                display: 'none',
                type: 'group',
                rect: ['532', '776','324','322','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_16_B_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','324px','322px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(247,79,79,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_16_S_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['25px', '24px','274px','273px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx_16_P',
                    display: 'none',
                    type: 'text',
                    rect: ['101px', '99px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(247,43,43,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'VITVellore_16_P',
                    display: 'none',
                    type: 'text',
                    rect: ['52px', '145px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(23,22,22,1.00)", "400", "none", "normal"]
                },
                {
                    id: '_2016_P',
                    display: 'none',
                    type: 'text',
                    rect: ['107px', '193px','auto','auto','auto', 'auto'],
                    text: "2016",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(23,22,22,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group_15_P',
                display: 'none',
                type: 'group',
                rect: ['1077', '594','287','295','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_15_B_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','287px','295px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(112,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_15_S_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['25px', '24px','242px','250px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx_15_P',
                    display: 'none',
                    type: 'text',
                    rect: ['92px', '88px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(247,43,43,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'VITVellore_15_P',
                    display: 'none',
                    type: 'text',
                    rect: ['43px', '134px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(23,22,22,1.00)", "400", "none", "normal"]
                },
                {
                    id: '_2015_P',
                    display: 'none',
                    type: 'text',
                    rect: ['98px', '183px','auto','auto','auto', 'auto'],
                    text: "2015<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(23,22,22,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group_14_P',
                display: 'none',
                type: 'group',
                rect: ['1057', '1115','287','295','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_14_B_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','287px','295px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(112,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_14_S_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['25px', '24px','242px','250px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx_14_P',
                    display: 'none',
                    type: 'text',
                    rect: ['90px', '84px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(247,43,43,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'VITVellore_14_P',
                    display: 'none',
                    type: 'text',
                    rect: ['41px', '130px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(23,22,22,1.00)", "400", "none", "normal"]
                },
                {
                    id: '_2014_P',
                    display: 'none',
                    type: 'text',
                    rect: ['96px', '179px','auto','auto','auto', 'auto'],
                    text: "2014",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 45, "rgba(23,22,22,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group_Contact_P',
                display: 'none',
                type: 'group',
                rect: ['252', '1061','197','202','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_Contact_B_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','197px','202px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(112,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_Contact_S_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['15px', '15px','166px','172px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text16',
                    display: 'none',
                    type: 'text',
                    rect: ['33px', '78px','auto','auto','auto', 'auto'],
                    text: "REGISTER",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 28, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Text_Theme_D_L',
                display: 'block',
                type: 'text',
                rect: ['51px', '205px','323px','322px','auto', 'auto'],
                opacity: 1,
                text: "<br>The theme we have chosen for our event this time is Unbox your mind. \n\nImagine for a moment a world without borders, without boundaries. And for that to happen you have to break the boundaries, stop following the clichéd norms. What would you do? You have\nto unbox your mind.<br><br>Thinking outside the box yields temporary solutions, but completely unboxing your mind leaves an everlasting impression in this dynamic world.  So why limit yourself?",
                align: "left",
                font: ['OpenSans-Light', 15, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Group_13_P',
                type: 'group',
                rect: ['21px', '901px','252','259','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_13_B_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','252px','259px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(112,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_13_S_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['20px', '20px','212px','220px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'TEDx_13_P',
                    display: 'none',
                    type: 'text',
                    rect: ['83px', '68px','auto','auto','auto', 'auto'],
                    text: "TEDx",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 40, "rgba(247,43,43,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'VITVellore_13_P',
                    display: 'none',
                    type: 'text',
                    rect: ['34px', '114px','auto','auto','auto', 'auto'],
                    text: "VITVellore",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 40, "rgba(23,22,22,1.00)", "400", "none", "normal"]
                },
                {
                    id: '_2013_P',
                    display: 'none',
                    type: 'text',
                    rect: ['89px', '163px','auto','auto','auto', 'auto'],
                    text: "2013",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 40, "rgba(23,22,22,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group_Sponsor_P',
                display: 'none',
                type: 'group',
                rect: ['85', '566','252','259','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_Sponsor_B_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','252px','259px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(112,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_Sponsor_S_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['20px', '21px','212px','220px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text18',
                    display: 'none',
                    type: 'text',
                    rect: ['40px', '113px','auto','auto','auto', 'auto'],
                    text: "SPONSORS",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(0,0,0,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group_About_P',
                display: 'none',
                type: 'group',
                rect: ['592', '273','214','220','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Ellipse_About_B_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','214px','220px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(112,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse_About_S_P',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['18px', '17px','180px','187px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'ABOUT_P',
                    display: 'none',
                    type: 'text',
                    rect: ['58px', '73px','auto','auto','auto', 'auto'],
                    text: "ABOUT",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(0,0,0,1)", "400", "none", "normal"]
                },
                {
                    id: 'TED_P',
                    display: 'none',
                    type: 'text',
                    rect: ['77px', '115px','auto','auto','auto', 'auto'],
                    text: "TED",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(252,29,29,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: '_2013_SPEAKERS',
                display: 'block',
                type: 'image',
                rect: ['35px', '46px','350px','450px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2013%20SPEAKERS.png",'0px','0px']
            },
            {
                id: '_2014_SPEAKERS',
                display: 'block',
                type: 'image',
                rect: ['41px', '46px','350px','450px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2014%20SPEAKERS.png",'0px','0px']
            },
            {
                id: '_2015_SPEAKERS',
                display: 'block',
                type: 'image',
                rect: ['36px', '55px','350px','450px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2015%20SPEAKERS.png",'0px','0px']
            },
            {
                id: '_2013_THEME',
                display: 'block',
                type: 'image',
                rect: ['982px', '218px','326px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2013%20THEME.png",'0px','0px']
            },
            {
                id: '_2014_THEME',
                display: 'block',
                type: 'image',
                rect: ['984px', '217px','326px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2014%20THEME.png",'0px','0px']
            },
            {
                id: '_2015_THEME',
                display: 'block',
                type: 'image',
                rect: ['984px', '218px','326px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2015%20THEME.png",'0px','0px']
            },
            {
                id: 'EVENT',
                display: 'block',
                type: 'image',
                rect: ['984px', '215px','326px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EVENT.png",'0px','0px']
            },
            {
                id: 'AT_p_black',
                display: 'none',
                type: 'rect',
                rect: ['5px', '0px','1390px','1982px','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'AT_P_White',
                display: 'none',
                type: 'rect',
                rect: ['182px', '176px','1067px','1659px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'AR_P_Goback',
                display: 'none',
                type: 'rect',
                rect: ['700px', '1585px','475px','210px','auto', 'auto'],
                fill: ["rgba(244,90,90,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'AT_P_TEXT_BACK',
                display: 'block',
                type: 'text',
                rect: ['807px', '1628px','auto','auto','auto', 'auto'],
                text: "BACK",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 100, "rgba(249,249,249,1.00)", "400", "none", "normal"]
            },
            {
                id: 'AT_P_TEXT',
                display: 'none',
                type: 'text',
                rect: ['285px', '321px','884px','auto','auto', 'auto'],
                text: "TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a \t\t\tconference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues \t\t\t— in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_15_P_B',
                display: 'none',
                type: 'rect',
                rect: ['-2px', '10px','1400px','1982px','auto', 'auto'],
                opacity: 0.8,
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_15_P_S',
                display: 'none',
                type: 'rect',
                rect: ['85px', '118px','1244px','1804px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_15_BACK_BUTTON_P',
                display: 'none',
                type: 'rect',
                rect: ['848px', '1642px','405px','220px','auto', 'auto'],
                fill: ["rgba(240,75,75,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TEXT_15_P_BACK',
                display: 'none',
                type: 'text',
                rect: ['942px', '1686px','auto','auto','auto', 'auto'],
                text: "BACK",
                align: "left",
                font: ['OpenSans-Light', 90, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'TEXT_15_P_THEME',
                display: 'none',
                type: 'text',
                rect: ['190px', '224px','auto','auto','auto', 'auto'],
                text: "THEME -",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TEXT_15_P_THEME_D',
                display: 'none',
                type: 'text',
                rect: ['454px', '225px','auto','auto','auto', 'auto'],
                text: "Intention: Key to Infinity",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'TEXT_15_p_SPEAKERS',
                display: 'none',
                type: 'text',
                rect: ['190px', '410px','auto','auto','auto', 'auto'],
                text: "SPEAKERS - ",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(255,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TEXT_15_P_SPEAKERS_LIST',
                display: 'none',
                type: 'text',
                rect: ['190px', '547px','auto','auto','auto', 'auto'],
                text: "1 Sangeeth Varghese<br><br>\t\t\t              2 Dr. Anagha Amte<br><br>\t\t\t\t3 Kamakshi Khanna<br>\t\t\t\t<br>4 Ravi Kumar<br><br>\t\t\t\t5 Raja Biswas Dr. <br><br>\t\t\t              6 Dr. Mahaveer Golechha<br><br>\t\t              7 Vivek Srinivasan<br>\t\t\t\t<br>8 Edwin Stephen",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: '_14_P_B',
                display: 'none',
                type: 'rect',
                rect: ['5px', '0px','1390px','1982px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_13_P_B',
                display: 'none',
                type: 'rect',
                rect: ['7px', '3px','1390px','1982px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_13_P_S',
                display: 'none',
                type: 'rect',
                rect: ['125px', '125px','1157px','1748px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text_13_P_Theme',
                display: 'none',
                type: 'text',
                rect: ['190px', '176px','auto','auto','auto', 'auto'],
                text: "THEME -",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(17,17,17,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text_13_P_Theme_D',
                display: 'none',
                type: 'text',
                rect: ['445px', '172px','auto','auto','auto', 'auto'],
                text: "Imagine. Inspire. Innovate",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text_13_P_Speakers',
                display: 'none',
                type: 'text',
                rect: ['190px', '284px','auto','auto','auto', 'auto'],
                text: "SPEAKER",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(255,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'text_13_P_Speakers_D',
                display: 'none',
                type: 'text',
                rect: ['191px', '390px','1035px','auto','auto', 'auto'],
                text: "1 Vanitha Mohan, UNESCO awardee, THE HINDU woman of the year 2012<br>\t\t\t\t2 Peter Van Geit, Engineer, Explorer.<br>\t\t\t\t3 Sarath Champati, wildlife.  “kabiniFoundation”<br>\t\t\t\t4 Abhijeet Barse, Chief Executive Officer, “slum Soccer”.<br>\t\t\t\t5 Narayana Peesapaty, BK environmental solutions<br>\t\t\t\t6 Gloria Benny, co-founder, MAD<br>\t\t\t\t7 Adamu Bashiru, Prison Reforms, Founder of NGO ”dreamagain”<br>\t\t\t\t8 Paul D’Souza, Inventor, Creator.<br>\t\t\t\t9 Geraldine Willcocks, ex UN refugee Agency india<br>\t\t\t\t10 Arun Nair, founder of “punchline comics”",
                align: "left",
                font: ['OpenSans-Light', 55, "rgba(9,9,9,1.00)", "400", "none", "normal"]
            },
            {
                id: '_13_P_button',
                display: 'none',
                type: 'rect',
                rect: ['915px', '1686px','324px','147px','auto', 'auto'],
                fill: ["rgba(237,58,58,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_13_P_Back_Text',
                display: 'none',
                type: 'text',
                rect: ['968px', '1691px','auto','auto','auto', 'auto'],
                text: "BACK",
                align: "left",
                font: ['OpenSans-Light', 90, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: '_14_P_S',
                display: 'none',
                type: 'rect',
                rect: ['115px', '118px','1174px','1777px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_14_P_Theme',
                display: 'none',
                type: 'text',
                rect: ['164px', '186px','auto','auto','auto', 'auto'],
                text: "THEME -",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: '_14_P_speakers',
                display: 'none',
                type: 'text',
                rect: ['164px', '309px','auto','auto','auto', 'auto'],
                text: "SPEAKERS - ",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: '_14_P_Speakers_D',
                display: 'none',
                type: 'text',
                rect: ['178px', '431px','1059px','auto','auto', 'auto'],
                text: "1 Arpan Roy, Founder of NGO “Skip A Meal”<br><br>\t\t\t\t2 Ashwini Raghupati, Dancer, Director, ARPANA<br><br>\t\t\t\t3 CP Vishwanath, Co-founder of karaditales.<br>\t\t\t\t<br>4 Dr. R Bala Subramanyam, Founder of Swami Vivekanada Youth Movement<br>\t\t\t\t<br>5 Raghav BK, Co-founder, RenewIT<br>\t\t\t\t<br>6 Samuel Odwar,founder, Thumps Up NGO<br>\t\t\t\t<br>7 Tiffany Brar, Coordinator of “jyothirgamya”<br>\t\t\t\t<br>8 Sriram Venkatakrishnana, historian and columnist<br>\t\t\t\t<br>9 C Srinivasan",
                align: "left",
                font: ['OpenSans-Light', 50, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: '_14_P_Theme_D',
                display: 'none',
                type: 'text',
                rect: ['430px', '187px','auto','auto','auto', 'auto'],
                text: "Todays Vision. Tomorrows Reality.",
                align: "left",
                font: ['OpenSans-Light', 55, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: '_14_P_Back_button',
                display: 'none',
                type: 'rect',
                rect: ['806px', '1653px','417px','187px','auto', 'auto'],
                fill: ["rgba(243,74,74,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_14_P_back_TEXT',
                display: 'none',
                type: 'text',
                rect: ['904px', '1691px','auto','auto','auto', 'auto'],
                text: "BACK",
                align: "left",
                font: ['OpenSans-Light', 90, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2',
                display: 'block',
                type: 'text',
                rect: ['21px', '68px','423px','auto','auto', 'auto'],
                text: "TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a \t\t\tconference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues \t\t\t— in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.",
                align: "left",
                font: ['OpenSans-Light', 17, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['21px', '38px','auto','auto','auto', 'auto'],
                text: "TED",
                align: "left",
                font: ['OpenSans-Light', 17, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'block',
                type: 'text',
                rect: ['25px', '310px','400px','auto','auto', 'auto'],
                text: "The TEDx Program is designed to help communities, organizations and individuals to spark conversation and connection through local TED-like \t\t\t\t    experiences. At TEDx events, a screening of TED Talks videos — or a combination of live presenters and TED Talks videos — sparks deep conversationand \t\t            connections at the local level. TEDx events are planned and coordinated independently, under a free license granted by TED.",
                align: "left",
                font: ['OpenSans-Light', 17, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text5',
                display: 'block',
                type: 'text',
                rect: ['22px', '281px','auto','auto','auto', 'auto'],
                text: "TEDx",
                align: "left",
                font: ['OpenSans-Light', 17, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text8',
                display: 'block',
                type: 'text',
                rect: ['970px', '170px','auto','auto','auto', 'auto'],
                text: "TEDxVITVellore",
                align: "left",
                font: ['OpenSans-Light', 17, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text9',
                display: 'block',
                type: 'text',
                rect: ['968px', '238px','292px','auto','auto', 'auto'],
                text: "The objective of TEDxVITVellore is to make a local forum for ideas within our community that inspires people to change \t   their lives, their futures and ultimately their world. It is held annually withing the campus of VIT University with the help of speakers from all parts of the world bringing our event to justice.",
                align: "left",
                font: ['OpenSans-Light', 17, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_16_P_Back',
                display: 'none',
                type: 'rect',
                rect: ['0px', '7px','1390px','1982px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle5',
                display: 'none',
                type: 'rect',
                rect: ['135px', '147px','1110px','1720px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_16_P_event_title',
                display: 'none',
                type: 'text',
                rect: ['193px', '213px','auto','auto','auto', 'auto'],
                text: "EVENT",
                align: "left",
                font: ['OpenSans-Light', 70, "rgba(255,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: '_16_P_Theme_title',
                display: 'none',
                type: 'text',
                rect: ['202px', '576px','auto','auto','auto', 'auto'],
                text: "THEME",
                align: "left",
                font: ['OpenSans-Light', 70, "rgba(255,0,0,1)", "900", "none", "normal"]
            },
            {
                id: '_16_P_theme_D',
                display: 'none',
                type: 'text',
                rect: ['201px', '696px','993px','952px','auto', 'auto'],
                text: "The theme we have chosen for our event this time is Unbox your mind. \nImagine for a moment a world without borders, without boundaries. And for that to happen you have to break the boundaries, stop following the clichéd norms. What would you do? You have to unbox your mind.<br>Thinking outside the box yields temporary solutions, but completely unboxing your mind leaves an everlasting impression in this dynamic world.  <br>So why limit yourself?",
                align: "left",
                font: ['OpenSans-Light', 50, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: '_16_P_Back_Button',
                display: 'none',
                type: 'group',
                rect: ['821', '1663','374','165','auto', 'auto'],
                c: [
                {
                    id: '_16_P_back_box',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '0px','374px','165px','auto', 'auto'],
                    fill: ["rgba(240,63,63,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: '_16_P_Back_text',
                    display: 'none',
                    type: 'text',
                    rect: ['64px', '9px','auto','auto','auto', 'auto'],
                    text: "BACK",
                    align: "left",
                    font: ['OpenSans-Light', 100, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: '_16_P_text_event_D_1',
                display: 'none',
                type: 'text',
                rect: ['198px', '353px','auto','auto','auto', 'auto'],
                text: "22nd October, 2016 - ",
                align: "left",
                font: ['OpenSans-Light', 50, "rgba(255,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_16_P_text_event_D',
                display: 'none',
                type: 'text',
                rect: ['202px', '447px','auto','auto','auto', 'auto'],
                text: "23rd    October, 2016 - ",
                align: "left",
                font: ['OpenSans-Light', 50, "rgba(255,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_16_P_galadinner',
                display: 'none',
                type: 'text',
                rect: ['724px', '357px','auto','auto','auto', 'auto'],
                text: "Gala Dinner",
                align: "left",
                font: ['OpenSans-Light', 50, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: '_16_P_main_event',
                display: 'none',
                type: 'text',
                rect: ['730px', '451px','auto','auto','auto', 'auto'],
                text: "Main Event",
                align: "left",
                font: ['OpenSans-Light', 50, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Group_Speaker_Details_L',
                display: 'block',
                type: 'group',
                rect: ['986', '162','309','66','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Speaker_Details_Box_L',
                    type: 'rect',
                    rect: ['0px', '0px','309px','66px','auto', 'auto'],
                    fill: ["rgba(235,104,104,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Text_Speaker_Details_L',
                    type: 'text',
                    rect: ['35px', '14px','auto','auto','auto', 'auto'],
                    text: "SPEAKER DETAILS",
                    align: "left",
                    font: ['OpenSans-Light', 30, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Speaker_B_P',
                display: 'none',
                type: 'rect',
                rect: ['-8px', '0px','1400px','1982px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Speaker_W_P',
                display: 'none',
                type: 'rect',
                rect: ['172px', '750px','1059px','584px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'speaker_shyam_P',
                display: 'none',
                type: 'image',
                rect: ['12px', '774px','1366px','254px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"speaker.png",'0px','0px']
            },
            {
                id: 'Speaker_Button',
                display: 'none',
                type: 'group',
                rect: ['794', '1141','405','154','auto', 'auto'],
                c: [
                {
                    id: 'Speaker_Back_box_P',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '0px','405px','154px','auto', 'auto'],
                    fill: ["rgba(235,79,79,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Speaker_Back_Text_P',
                    display: 'none',
                    type: 'text',
                    rect: ['115px', '21px','auto','auto','auto', 'auto'],
                    text: "BACK",
                    align: "left",
                    font: ['OpenSans-Light', 81, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group_Event_Details',
                display: 'block',
                type: 'group',
                rect: ['978', '433','299','66','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Rectangle15',
                    type: 'rect',
                    rect: ['0px', '0px','305px','60px','auto', 'auto'],
                    fill: ["rgba(243,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text15',
                    type: 'text',
                    rect: ['47px', '10px','auto','auto','auto', 'auto'],
                    text: "EVENT DETAILS",
                    align: "left",
                    font: ['OpenSans-Light', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Rectangle16',
                display: 'none',
                type: 'rect',
                rect: ['0px', '3px','1330px','623px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle17',
                display: 'none',
                type: 'rect',
                rect: ['293px', '187px','759px','257px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text19',
                display: 'none',
                type: 'text',
                rect: ['450px', '227px','auto','auto','auto', 'auto'],
                text: "COMING SOON",
                align: "left",
                font: ['OpenSans-Light', 60, "rgba(0,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Group_Event_Back_Button_L',
                display: 'none',
                type: 'group',
                rect: ['790', '347','150','69','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Rectangle18',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '0px','150px','69px','auto', 'auto'],
                    fill: ["rgba(233,105,105,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text20',
                    display: 'none',
                    type: 'text',
                    rect: ['23px', '10px','auto','auto','auto', 'auto'],
                    text: "BACK",
                    align: "left",
                    font: ['OpenSans-Light', 40, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Group_YSP_L',
                display: 'block',
                type: 'group',
                rect: ['529', '55','82','82','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'YSP_B_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['0px', '0px','82px','82px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(134,130,130,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'YSP_F_L',
                    display: 'block',
                    type: 'ellipse',
                    rect: ['5px', '6px','72px','69px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(248,248,248,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Text_youth_L',
                    display: 'block',
                    type: 'text',
                    rect: ['20px', '23px','auto','auto','auto', 'auto'],
                    text: "YOUTH",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 9, "rgba(0,0,0,1)", "600", "none", "normal"]
                },
                {
                    id: 'Text_speaker_L',
                    display: 'block',
                    type: 'text',
                    rect: ['16px', '35px','auto','auto','auto', 'auto'],
                    text: "SPEAKER",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 9, "rgba(0,0,0,1)", "600", "none", "normal"]
                },
                {
                    id: 'Text_hunt_L',
                    display: 'block',
                    type: 'text',
                    rect: ['27px', '47px','auto','auto','auto', 'auto'],
                    text: "HUNT",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 9, "rgba(0,0,0,1)", "600", "none", "normal"]
                }]
            },
            {
                id: 'fb_L',
                display: 'block',
                type: 'image',
                rect: ['700px', '450px','50px','50px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"fb2.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Ellipse_13_S_P}": [
                ["style", "top", '20px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '220px'],
                ["style", "display", 'none'],
                ["style", "left", '20px'],
                ["style", "width", '212px']
            ],
            "${__15_P_B}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "display", 'none']
            ],
            "${_Group_About_L}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_AT_P_TEXT_BACK}": [
                ["style", "top", '1628px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(249,249,249,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '807px'],
                ["style", "font-size", '100px']
            ],
            "${_Rectangle16}": [
                ["style", "height", '623px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none']
            ],
            "${_fb_P}": [
                ["style", "display", 'none'],
                ["style", "height", '150px'],
                ["style", "top", '1400px'],
                ["style", "width", '150px']
            ],
            "${_TEDx_15_P}": [
                ["style", "top", '88px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(247,43,43,1.00)'],
                ["style", "left", '92px'],
                ["style", "font-size", '45px']
            ],
            "${_grass_L}": [
                ["style", "display", 'block']
            ],
            "${_VITVellore_16_L}": [
                ["style", "top", '51px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '25px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_About_S_P}": [
                ["style", "top", '17px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '187px'],
                ["style", "display", 'none'],
                ["style", "left", '18px'],
                ["style", "width", '180px']
            ],
            "${_Ellipse_15_S_L}": [
                ["style", "top", '11px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${__14_P_back_TEXT}": [
                ["style", "top", '1686px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '898px'],
                ["style", "font-size", '90px']
            ],
            "${_Ellipse_14_S_P}": [
                ["style", "top", '24px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '250px'],
                ["style", "display", 'none'],
                ["style", "left", '25px'],
                ["style", "width", '242px']
            ],
            "${_Group_Sponsor_L}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Speaker_Back_Text_P}": [
                ["style", "top", '21px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '115px'],
                ["style", "font-size", '81px']
            ],
            "${__14_P_Speakers_D}": [
                ["style", "top", '431px'],
                ["style", "font-size", '50px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '178px'],
                ["style", "width", '1059px']
            ],
            "${_AT_P_White}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${__2014_SPEAKERS}": [
                ["style", "top", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '41px'],
                ["style", "display", 'block']
            ],
            "${_Group_YSP_L}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Group_14_L}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${__2016_L}": [
                ["style", "top", '68px'],
                ["style", "font-weight", '500'],
                ["style", "left", '39px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_15_S_P}": [
                ["style", "top", '24px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '250px'],
                ["style", "display", 'none'],
                ["style", "left", '25px'],
                ["style", "width", '242px']
            ],
            "${_Speaker_W_P}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "top", '707px'],
                ["style", "height", '627px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '1390px']
            ],
            "${__2013_SPEAKERS}": [
                ["style", "top", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '35px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_15_B_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(112,105,105,1.00)'],
                ["style", "height", '295px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '287px']
            ],
            "${_TEDx15_L}": [
                ["style", "top", '30px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(255,17,17,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '37px'],
                ["style", "font-size", '16px']
            ],
            "${_Text_hunt_p}": [
                ["style", "top", '72px'],
                ["style", "left", '57px'],
                ["style", "font-size", '30px']
            ],
            "${_speaker_shyam_P}": [
                ["style", "top", '774px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px'],
                ["style", "display", 'none']
            ],
            "${_Text_speaker_L}": [
                ["style", "top", '35px'],
                ["style", "left", '21px'],
                ["style", "display", 'block']
            ],
            "${_TEDx16_L}": [
                ["style", "top", '32px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(255,17,17,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '39px'],
                ["style", "font-size", '16px']
            ],
            "${__2015_L}": [
                ["style", "top", '67px'],
                ["style", "font-weight", '500'],
                ["style", "left", '44px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_R_7_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '207px'],
                ["style", "height", '93px'],
                ["style", "display", 'block'],
                ["style", "left", '751px'],
                ["style", "width", '93px']
            ],
            "${_Ellipse_About_B_L}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(146,141,141,1.00)'],
                ["style", "height", '80px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '82px']
            ],
            "${_TEXT_15_P_THEME_D}": [
                ["style", "top", '225px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '454px'],
                ["style", "display", 'none']
            ],
            "${_Speaker_B_P}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "width", '1400px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '630px'],
                ["style", "width", '1330px']
            ],
            "${__2014_THEME}": [
                ["style", "top", '217px'],
                ["style", "opacity", '0'],
                ["style", "left", '984px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_16_S_P}": [
                ["style", "top", '24px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '25px'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_R_2_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '36px'],
                ["style", "height", '82px'],
                ["style", "display", 'block'],
                ["style", "left", '827px'],
                ["style", "width", '82px']
            ],
            "${_Text_hunt_L}": [
                ["style", "top", '47px'],
                ["style", "left", '29px'],
                ["style", "display", 'block']
            ],
            "${__16_P_theme_D}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '201px'],
                ["style", "font-size", '50px'],
                ["style", "top", '696px'],
                ["style", "height", '952px'],
                ["style", "width", '993px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_14_S_L}": [
                ["style", "top", '11px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_logo_two_line4}": [
                ["style", "display", 'block'],
                ["style", "height", '122px'],
                ["style", "left", '1120px'],
                ["style", "width", '200px']
            ],
            "${_Ellipse_R_1_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '82px'],
                ["style", "height", '104px'],
                ["style", "display", 'block'],
                ["style", "left", '686px'],
                ["style", "width", '104px']
            ],
            "${_Ellipse_R_5_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '105px'],
                ["style", "height", '66px'],
                ["style", "display", 'block'],
                ["style", "left", '613px'],
                ["style", "width", '66px']
            ],
            "${_Group_ysp_P}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_YSP_F_L}": [
                ["style", "display", 'block'],
                ["style", "top", '6px'],
                ["style", "left", '5px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_fb_L}": [
                ["style", "top", '450px'],
                ["style", "display", 'block'],
                ["style", "height", '50px'],
                ["style", "left", '700px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_Text_Theme_D_L}": [
                ["style", "top", '205px'],
                ["style", "width", '323px'],
                ["style", "display", 'block'],
                ["style", "height", '322px'],
                ["style", "opacity", '0'],
                ["style", "left", '51px'],
                ["style", "font-size", '15px']
            ],
            "${_Text_HUNT_P}": [
                ["style", "left", '67px'],
                ["style", "top", '150px']
            ],
            "${_Text_13_P_Theme_D}": [
                ["style", "top", '179px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '445px'],
                ["color", "color", 'rgba(255,0,0,1.00)']
            ],
            "${_Text9}": [
                ["style", "top", '212px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '970px'],
                ["style", "width", '292px']
            ],
            "${_Text19}": [
                ["style", "top", '227px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '450px'],
                ["style", "font-size", '60px']
            ],
            "${_TED_L}": [
                ["style", "top", '42px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(249,29,29,1.00)'],
                ["style", "left", '28px'],
                ["style", "font-size", '13px']
            ],
            "${__16_P_event_title}": [
                ["style", "top", '213px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '193px'],
                ["style", "font-size", '70px']
            ],
            "${_text_13_P_Speakers_D}": [
                ["style", "top", '397px'],
                ["style", "font-size", '55px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(9,9,9,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '191px'],
                ["style", "width", '1035px']
            ],
            "${_VITVellore_13_P}": [
                ["style", "top", '114px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(23,22,22,1.00)'],
                ["style", "left", '34px'],
                ["style", "font-size", '40px']
            ],
            "${_Rectangle15}": [
                ["color", "background-color", 'rgba(243,105,105,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '305px']
            ],
            "${__2015_THEME}": [
                ["style", "top", '218px'],
                ["style", "opacity", '0'],
                ["style", "left", '984px'],
                ["style", "display", 'block']
            ],
            "${__2015_P}": [
                ["style", "top", '183px'],
                ["style", "left", '98px'],
                ["style", "display", 'none']
            ],
            "${_ysp_F_P}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '185px'],
                ["style", "top", '27px'],
                ["style", "left", '23px'],
                ["style", "width", '183px']
            ],
            "${__13_P_S}": [
                ["style", "top", '132px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Ellipse_R_8_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '199px'],
                ["style", "height", '51px'],
                ["style", "display", 'block'],
                ["style", "left", '504px'],
                ["style", "width", '51px']
            ],
            "${_Ellipse_16_B_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(247,79,79,1.00)'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__13_P_B}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${_TEXT_15_p_SPEAKERS}": [
                ["style", "top", '410px'],
                ["style", "opacity", '0'],
                ["style", "left", '190px'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_R_3_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '32px'],
                ["style", "height", '51px'],
                ["style", "display", 'block'],
                ["style", "left", '738px'],
                ["style", "width", '51px']
            ],
            "${__13_P_Back_Text}": [
                ["style", "top", '1698px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '968px'],
                ["style", "font-size", '90px']
            ],
            "${_Group_Speaker_Details_L}": [
                ["style", "top", '160px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '973px'],
                ["style", "cursor", 'pointer']
            ],
            "${__14_P_Back_button}": [
                ["color", "background-color", 'rgba(243,74,74,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '187px'],
                ["style", "opacity", '0'],
                ["style", "left", '806px'],
                ["style", "top", '1653px']
            ],
            "${_Group_Sponsor_P}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_13_S_L}": [
                ["style", "top", '11px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_Text_youth_L}": [
                ["style", "top", '23px'],
                ["style", "left", '25px'],
                ["style", "display", 'block']
            ],
            "${_Text2}": [
                ["style", "top", '70px'],
                ["style", "width", '423px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '21px'],
                ["style", "font-size", '17px']
            ],
            "${_Ellipse_About_S_L}": [
                ["style", "top", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '66px'],
                ["style", "display", 'block'],
                ["style", "left", '8px'],
                ["style", "width", '66px']
            ],
            "${__2013_THEME}": [
                ["style", "top", '218px'],
                ["style", "opacity", '0'],
                ["style", "left", '982px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_Contact_S_L}": [
                ["style", "top", '6px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '54px'],
                ["style", "display", 'block'],
                ["style", "left", '7px'],
                ["style", "width", '55px']
            ],
            "${_Ellipse_R_9_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '337px'],
                ["style", "height", '51px'],
                ["style", "display", 'block'],
                ["style", "left", '738px'],
                ["style", "width", '51px']
            ],
            "${_Ellipse_R_1_PCopy7}": [
                ["color", "background-color", 'rgba(249,84,84,1.00)'],
                ["style", "top", '1175px'],
                ["style", "height", '194px'],
                ["style", "display", 'none'],
                ["style", "left", '844px'],
                ["style", "width", '197px']
            ],
            "${__16_P_main_event}": [
                ["style", "top", '451px'],
                ["style", "opacity", '0'],
                ["style", "left", '730px'],
                ["style", "display", 'none']
            ],
            "${__16_P_galadinner}": [
                ["style", "top", '357px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '724px'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_About_B_LCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(146,141,141,1.00)'],
                ["style", "height", '80px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '82px']
            ],
            "${_ysp_B_P}": [
                ["style", "top", '0px'],
                ["style", "height", '235px'],
                ["color", "background-color", 'rgba(120,102,102,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '230px']
            ],
            "${_Ellipse_Contact_B_L}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(146,141,141,1.00)'],
                ["style", "height", '67px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '69px']
            ],
            "${__16_P_Theme_title}": [
                ["style", "top", '576px'],
                ["style", "opacity", '0'],
                ["style", "left", '202px'],
                ["style", "display", 'none']
            ],
            "${_logo_two_line2}": [
                ["style", "top", '7px'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${_Contact_L}": [
                ["style", "top", '28px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '11px'],
                ["style", "font-size", '9px']
            ],
            "${_tree_L}": [
                ["style", "left", '435px'],
                ["style", "display", 'block']
            ],
            "${_Group_15_P}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Text_13_P_Theme}": [
                ["style", "top", '183px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(17,17,17,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '190px'],
                ["style", "font-size", '60px']
            ],
            "${__16_P_Back_Button}": [
                ["style", "display", 'none']
            ],
            "${__16_P_text_event_D}": [
                ["style", "top", '447px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '202px'],
                ["style", "font-size", '50px']
            ],
            "${_Text_Speaker_Details_L}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '14px'],
                ["style", "left", '35px'],
                ["style", "font-size", '30px']
            ],
            "${_Group_About_P}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '271px']
            ],
            "${_Ellipse_13_B_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(112,105,105,1.00)'],
                ["style", "height", '259px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '252px']
            ],
            "${_TEDx14_L}": [
                ["style", "top", '30px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(255,17,17,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '36px'],
                ["style", "font-size", '16px']
            ],
            "${_VITVellore_15_P}": [
                ["style", "top", '134px'],
                ["color", "color", 'rgba(23,22,22,1.00)'],
                ["style", "left", '43px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '38px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '21px'],
                ["color", "color", 'rgba(255,0,0,1.00)']
            ],
            "${__16_P_back_box}": [
                ["color", "background-color", 'rgba(240,63,63,1.00)'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_TEXT_15_P_BACK}": [
                ["style", "top", '1686px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '942px'],
                ["style", "font-size", '90px']
            ],
            "${_Rectangle18}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '69px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(233,105,105,1.00)']
            ],
            "${_Speaker_Button}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_TEDx13_L}": [
                ["style", "top", '33px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(255,17,17,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '36px'],
                ["style", "font-size", '16px']
            ],
            "${_tree_P}": [
                ["style", "top", '241px'],
                ["style", "display", 'none'],
                ["style", "height", '1748px'],
                ["style", "left", '5px'],
                ["style", "width", '1400px']
            ],
            "${_Ellipse_Contact_S_P}": [
                ["style", "top", '15px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '172px'],
                ["style", "display", 'none'],
                ["style", "left", '15px'],
                ["style", "width", '166px']
            ],
            "${__16_P_text_event_D_1}": [
                ["style", "top", '353px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '198px'],
                ["style", "font-size", '50px']
            ],
            "${_ABOUT_P}": [
                ["style", "display", 'none'],
                ["style", "top", '73px'],
                ["style", "left", '58px'],
                ["style", "font-size", '30px']
            ],
            "${__14_P_Theme_D}": [
                ["style", "top", '187px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '430px'],
                ["style", "font-size", '55px']
            ],
            "${_Ellipse_15_B_L}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(146,141,141,1.00)'],
                ["style", "height", '114px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '117px']
            ],
            "${_TED_P}": [
                ["style", "top", '115px'],
                ["color", "color", 'rgba(252,29,29,1.00)'],
                ["style", "left", '77px'],
                ["style", "display", 'none']
            ],
            "${_Group_Contact_L}": [
                ["style", "display", 'block'],
                ["style", "cursor", 'pointer']
            ],
            "${_About_L}": [
                ["style", "display", 'block'],
                ["style", "top", '26px'],
                ["style", "left", '16px'],
                ["style", "font-size", '13px']
            ],
            "${_Text16}": [
                ["style", "top", '85px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '27px'],
                ["style", "font-size", '28px']
            ],
            "${__14_P_Theme}": [
                ["style", "top", '186px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '164px'],
                ["style", "font-size", '60px']
            ],
            "${__2014_P}": [
                ["style", "top", '179px'],
                ["style", "left", '96px'],
                ["style", "display", 'none']
            ],
            "${_VITVellore_14_P}": [
                ["style", "top", '130px'],
                ["color", "color", 'rgba(23,22,22,1.00)'],
                ["style", "left", '41px'],
                ["style", "display", 'none']
            ],
            "${_Speaker_Details_Box_L}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(235,104,104,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '309px']
            ],
            "${_Group_Event_Back_Button_L}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_Group_13_L}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Group_16_L}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${__2013_L}": [
                ["style", "top", '69px'],
                ["style", "font-weight", '500'],
                ["style", "left", '43px'],
                ["style", "display", 'block']
            ],
            "${_Group_Speakers_P}": [
                ["style", "display", 'none']
            ],
            "${_Group_16_P}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${__2014_L}": [
                ["style", "top", '66px'],
                ["style", "font-weight", '500'],
                ["style", "left", '44px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_Sponsor_S_P}": [
                ["style", "top", '21px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '220px'],
                ["style", "display", 'none'],
                ["style", "left", '20px'],
                ["style", "width", '212px']
            ],
            "${_Ellipse_R_1_PCopy4}": [
                ["color", "background-color", 'rgba(249,84,84,1.00)'],
                ["style", "top", '707px'],
                ["style", "height", '194px'],
                ["style", "display", 'none'],
                ["style", "left", '357px'],
                ["style", "width", '197px']
            ],
            "${_Group_Event_Details}": [
                ["style", "top", '434px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '970px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Ellipse_R_1_PCopy2}": [
                ["color", "background-color", 'rgba(249,84,84,1.00)'],
                ["style", "top", '481px'],
                ["style", "height", '273px'],
                ["style", "display", 'none'],
                ["style", "left", '723px'],
                ["style", "width", '278px']
            ],
            "${__2015_SPEAKERS}": [
                ["style", "top", '55px'],
                ["style", "opacity", '0'],
                ["style", "left", '36px'],
                ["style", "display", 'block']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_13_B_L}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(146,141,141,1.00)'],
                ["style", "height", '114px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '117px']
            ],
            "${_Text8}": [
                ["style", "top", '172px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '970px'],
                ["color", "color", 'rgba(255,0,0,1.00)']
            ],
            "${_Ellipse_Sponsor_B_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(112,105,105,1.00)'],
                ["style", "height", '259px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '252px']
            ],
            "${_TEDx_13_P}": [
                ["style", "top", '68px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(247,43,43,1.00)'],
                ["style", "left", '83px'],
                ["style", "font-size", '40px']
            ],
            "${_Ellipse_About_B_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(112,105,105,1.00)'],
                ["style", "height", '220px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '214px']
            ],
            "${_Text18}": [
                ["style", "display", 'none'],
                ["style", "top", '113px'],
                ["style", "left", '40px'],
                ["style", "font-size", '30px']
            ],
            "${_AT_P_TEXT}": [
                ["style", "top", '321px'],
                ["style", "font-size", '60px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '278px'],
                ["style", "width", '884px']
            ],
            "${_TEXT_15_P_THEME}": [
                ["style", "top", '224px'],
                ["style", "opacity", '0'],
                ["style", "left", '190px'],
                ["style", "display", 'none']
            ],
            "${__13_P_button}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "top", '1693px'],
                ["color", "background-color", 'rgba(237,58,58,1.00)']
            ],
            "${__15_P_S}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Ellipse_R_1_PCopy6}": [
                ["color", "background-color", 'rgba(249,84,84,1.00)'],
                ["style", "top", '580px'],
                ["style", "height", '147px'],
                ["style", "display", 'none'],
                ["style", "left", '509px'],
                ["style", "width", '150px']
            ],
            "${_TEXT_15_P_SPEAKERS_LIST}": [
                ["style", "top", '547px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '190px'],
                ["color", "color", 'rgba(0,0,0,1.00)']
            ],
            "${_Group_Contact_P}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_16_B_L}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(248,68,68,1.00)'],
                ["style", "height", '114px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '117px']
            ],
            "${_Ellipse_R_1_PCopy3}": [
                ["color", "background-color", 'rgba(249,84,84,1.00)'],
                ["style", "top", '293px'],
                ["style", "height", '273px'],
                ["style", "display", 'none'],
                ["style", "left", '1086px'],
                ["style", "width", '278px']
            ],
            "${_Group_14_P}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${__16_P_Back_text}": [
                ["style", "top", '9px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '64px'],
                ["style", "font-size", '100px']
            ],
            "${_Ellipse_R_6_L}": [
                ["color", "background-color", 'rgba(244,97,97,1.00)'],
                ["style", "top", '166px'],
                ["style", "height", '67px'],
                ["style", "display", 'block'],
                ["style", "left", '563px'],
                ["style", "width", '67px']
            ],
            "${__15_BACK_BUTTON_P}": [
                ["color", "background-color", 'rgba(240,75,75,1.00)'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '841px'],
                ["style", "top", '1642px']
            ],
            "${_TEDx_16_P}": [
                ["style", "top", '99px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(247,43,43,1.00)'],
                ["style", "left", '101px'],
                ["style", "font-size", '45px']
            ],
            "${_Ellipse_R_2_P}": [
                ["color", "background-color", 'rgba(249,84,84,1.00)'],
                ["style", "top", '288px'],
                ["style", "height", '163px'],
                ["style", "display", 'none'],
                ["style", "left", '834px'],
                ["style", "width", '166px']
            ],
            "${__2016_THEME}": [
                ["style", "top", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '36px'],
                ["style", "display", 'block']
            ],
            "${__14_P_B}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${__2016_P}": [
                ["style", "top", '193px'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_AT_p_black}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_Text15}": [
                ["style", "left", '47px'],
                ["style", "top", '10px']
            ],
            "${_VITVellore_14_L}": [
                ["style", "top", '48px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '23px'],
                ["style", "display", 'block']
            ],
            "${_Ellipse_14_B_L}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(146,141,141,1.00)'],
                ["style", "height", '114px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '117px']
            ],
            "${__14_P_S}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_grass_P}": [
                ["style", "top", '1199px'],
                ["style", "height", '800px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '1395px']
            ],
            "${__14_P_speakers}": [
                ["style", "top", '309px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '164px'],
                ["style", "display", 'none']
            ],
            "${_VITVellore_16_P}": [
                ["style", "top", '145px'],
                ["color", "color", 'rgba(23,22,22,1.00)'],
                ["style", "left", '52px'],
                ["style", "display", 'none']
            ],
            "${_EVENT}": [
                ["style", "top", '215px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '984px'],
                ["style", "width", '308px']
            ],
            "${_Text5}": [
                ["style", "top", '281px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '22px'],
                ["color", "color", 'rgba(255,0,0,1.00)']
            ],
            "${_TEDx_14_P}": [
                ["style", "top", '84px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(247,43,43,1.00)'],
                ["style", "left", '90px'],
                ["style", "font-size", '45px']
            ],
            "${_VITVellore_15_L}": [
                ["style", "top", '49px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '23px'],
                ["style", "display", 'block']
            ],
            "${__2013_P}": [
                ["style", "display", 'none'],
                ["style", "top", '163px'],
                ["style", "left", '89px'],
                ["style", "font-size", '40px']
            ],
            "${_Ellipse_About_S_LCopy}": [
                ["style", "top", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '66px'],
                ["style", "display", 'block'],
                ["style", "left", '8px'],
                ["style", "width", '66px']
            ],
            "${_YSP_B_L}": [
                ["style", "display", 'block'],
                ["color", "background-color", 'rgba(134,130,130,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Ellipse_Contact_B_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(112,105,105,1.00)'],
                ["style", "height", '202px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '197px']
            ],
            "${_Text4}": [
                ["style", "top", '312px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '25px'],
                ["style", "width", '400px']
            ],
            "${_Speaker_Back_box_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(235,79,79,1.00)'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Ellipse_16_S_L}": [
                ["style", "top", '12px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '12px'],
                ["style", "display", 'block']
            ],
            "${_Group_13_P}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle17}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '257px'],
                ["style", "opacity", '0'],
                ["style", "left", '293px'],
                ["style", "top", '187px']
            ],
            "${_Group_15_L}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Speakers_P}": [
                ["style", "top", '105px'],
                ["style", "font-weight", '400'],
                ["style", "left", '42px'],
                ["style", "display", 'none']
            ],
            "${_Speakers_W_P}": [
                ["style", "top", '28px'],
                ["style", "height", '201px'],
                ["style", "display", 'none'],
                ["style", "left", '26px'],
                ["style", "width", '197px']
            ],
            "${__16_P_Back}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_VITVellore_13_L}": [
                ["style", "top", '51px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '22px'],
                ["style", "display", 'block']
            ],
            "${_Text_speaker_p}": [
                ["style", "left", '39px'],
                ["style", "top", '109px']
            ],
            "${_Text20}": [
                ["style", "top", '10px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '23px'],
                ["style", "font-size", '40px']
            ],
            "${_Ellipse_R_2_PCopy}": [
                ["color", "background-color", 'rgba(249,84,84,1.00)'],
                ["style", "top", '777px'],
                ["style", "height", '163px'],
                ["style", "display", 'none'],
                ["style", "left", '190px'],
                ["style", "width", '166px']
            ],
            "${_Ellipse_14_B_P}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(112,105,105,1.00)'],
                ["style", "height", '295px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '287px']
            ],
            "${_Text12}": [
                ["style", "top", '33px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '500'],
                ["style", "left", '12px'],
                ["style", "font-size", '11px']
            ],
            "${_AR_P_Goback}": [
                ["color", "background-color", 'rgba(244,90,90,1.00)'],
                ["style", "top", '1575px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '707px'],
                ["style", "width", '475px']
            ],
            "${_background_2}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0.1']
            ],
            "${_Ellipse_R_1_PCopy5}": [
                ["color", "background-color", 'rgba(95,94,94,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '250px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '254px']
            ],
            "${_Text_13_P_Speakers}": [
                ["style", "top", '291px'],
                ["style", "opacity", '0'],
                ["style", "left", '190px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 715,
            autoPlay: false,
            labels: {
                "1300": 0,
                "ATedL": 22,
                "15": 58,
                "13": 96,
                "14": 138,
                "16": 180,
                "event_L": 317,
                "750": 390,
                "AboutTedP": 398,
                "hold": 450,
                "15P": 458,
                "14P": 500,
                "13P": 560,
                "16P": 603,
                "speaker_P": 659
            },
            timeline: [
                { id: "eid525", tween: [ "style", "${__16_P_theme_D}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid540", tween: [ "style", "${__16_P_theme_D}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid466", tween: [ "style", "${__16_P_theme_D}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid547", tween: [ "style", "${_Group_Speaker_Details_L}", "display", 'none', { fromValue: 'block'}], position: 203, duration: 0 },
                { id: "eid358", tween: [ "style", "${__13_P_Back_Text}", "top", '1698px', { fromValue: '1698px'}], position: 560, duration: 0 },
                { id: "eid64", tween: [ "style", "${__2014_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${__2014_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid530", tween: [ "style", "${__16_P_text_event_D}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid536", tween: [ "style", "${__16_P_text_event_D}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid470", tween: [ "style", "${__16_P_text_event_D}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Ellipse_13_B_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Ellipse_13_B_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid250", tween: [ "style", "${__2013_SPEAKERS}", "display", 'none', { fromValue: 'block'}], position: 130, duration: 0 },
                { id: "eid255", tween: [ "style", "${__2014_SPEAKERS}", "display", 'none', { fromValue: 'block'}], position: 167, duration: 0 },
                { id: "eid68", tween: [ "style", "${_VITVellore_15_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${_VITVellore_15_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid438", tween: [ "style", "${_Text9}", "top", '210px', { fromValue: '212px'}], position: 22, duration: 19 },
                { id: "eid33", tween: [ "style", "${_About_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_About_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid460", tween: [ "style", "${__16_P_main_event}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid378", tween: [ "style", "${_Text_13_P_Theme_D}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid63", tween: [ "style", "${_VITVellore_14_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_VITVellore_14_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid609", tween: [ "style", "${_Speakers_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid611", tween: [ "style", "${_Speakers_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid669", tween: [ "style", "${_Rectangle18}", "opacity", '1', { fromValue: '0'}], position: 317, duration: 35 },
                { id: "eid332", tween: [ "style", "${__14_P_B}", "opacity", '0.8', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid256", tween: [ "style", "${_EVENT}", "opacity", '1', { fromValue: '0'}], position: 180, duration: 15 },
                { id: "eid452", tween: [ "style", "${_logo_two_line4}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid533", tween: [ "style", "${__16_P_Theme_title}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid541", tween: [ "style", "${__16_P_Theme_title}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid473", tween: [ "style", "${__16_P_Theme_title}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid424", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 50, duration: 0 },
                { id: "eid406", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid666", tween: [ "style", "${_Text19}", "opacity", '1', { fromValue: '0'}], position: 317, duration: 35 },
                { id: "eid50", tween: [ "style", "${_Ellipse_Contact_S_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_Ellipse_Contact_S_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid726", tween: [ "style", "${_speaker_shyam_P}", "display", 'block', { fromValue: 'none'}], position: 641, duration: 0 },
                { id: "eid729", tween: [ "style", "${_speaker_shyam_P}", "display", 'none', { fromValue: 'block'}], position: 715, duration: 0 },
                { id: "eid356", tween: [ "style", "${_text_13_P_Speakers_D}", "top", '397px', { fromValue: '397px'}], position: 560, duration: 0 },
                { id: "eid254", tween: [ "style", "${__2014_THEME}", "display", 'none', { fromValue: 'block'}], position: 167, duration: 0 },
                { id: "eid158", tween: [ "style", "${_Ellipse_About_S_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid197", tween: [ "style", "${_Ellipse_About_S_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Ellipse_R_1_PCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid192", tween: [ "style", "${_Ellipse_R_1_PCopy4}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid290", tween: [ "style", "${_TEXT_15_p_SPEAKERS}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid315", tween: [ "style", "${_TEXT_15_p_SPEAKERS}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Ellipse_R_1_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Ellipse_R_1_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid639", tween: [ "style", "${_Speaker_W_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid643", tween: [ "style", "${_Speaker_W_P}", "display", 'block', { fromValue: 'none'}], position: 641, duration: 0 },
                { id: "eid630", tween: [ "style", "${_Speaker_W_P}", "display", 'none', { fromValue: 'block'}], position: 715, duration: 0 },
                { id: "eid148", tween: [ "style", "${_Ellipse_R_2_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid187", tween: [ "style", "${_Ellipse_R_2_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid606", tween: [ "style", "${_Group_About_P}", "top", '271px', { fromValue: '271px'}], position: 396, duration: 0 },
                { id: "eid132", tween: [ "style", "${_TED_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_TED_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid696", tween: [ "style", "${_Text_hunt_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid702", tween: [ "style", "${_Text_hunt_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid263", tween: [ "style", "${_AR_P_Goback}", "left", '707px', { fromValue: '707px'}], position: 398, duration: 0 },
                { id: "eid728", tween: [ "style", "${_speaker_shyam_P}", "opacity", '1', { fromValue: '0'}], position: 659, duration: 39 },
                { id: "eid701", tween: [ "style", "${_YSP_B_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid707", tween: [ "style", "${_YSP_B_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Ellipse_Sponsor_S_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid199", tween: [ "style", "${_Ellipse_Sponsor_S_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid463", tween: [ "style", "${__16_P_galadinner}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid464", tween: [ "style", "${__16_P_Theme_title}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid67", tween: [ "style", "${_Ellipse_15_B_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "style", "${_Ellipse_15_B_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid260", tween: [ "style", "${_AT_p_black}", "display", 'block', { fromValue: 'none'}], position: 398, duration: 0 },
                { id: "eid281", tween: [ "style", "${_AT_p_black}", "display", 'none', { fromValue: 'block'}], position: 432, duration: 0 },
                { id: "eid355", tween: [ "style", "${__13_P_button}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid385", tween: [ "style", "${__13_P_button}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid439", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid440", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 41, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Ellipse_R_1_PCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid191", tween: [ "style", "${_Ellipse_R_1_PCopy7}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid258", tween: [ "style", "${_EVENT}", "display", 'none', { fromValue: 'block'}], position: 203, duration: 0 },
                { id: "eid305", tween: [ "style", "${__15_P_B}", "opacity", '0.8', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid29", tween: [ "style", "${_tree_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid529", tween: [ "style", "${__16_P_text_event_D_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid537", tween: [ "style", "${__16_P_text_event_D_1}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid469", tween: [ "style", "${__16_P_text_event_D_1}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid321", tween: [ "style", "${__14_P_back_TEXT}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid337", tween: [ "style", "${__14_P_back_TEXT}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid61", tween: [ "style", "${_Ellipse_14_B_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_Ellipse_14_B_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid476", tween: [ "style", "${__16_P_back_box}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid228", tween: [ "style", "${_Group_16_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid229", tween: [ "style", "${_Group_16_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid388", tween: [ "style", "${_logo_two_line2}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid30", tween: [ "style", "${_Ellipse_R_2_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Ellipse_R_2_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid690", tween: [ "style", "${_Text16}", "left", '27px', { fromValue: '27px'}], position: 390, duration: 0 },
                { id: "eid443", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid444", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '1'}], position: 41, duration: 0 },
                { id: "eid376", tween: [ "style", "${__13_P_B}", "opacity", '0.8', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid270", tween: [ "style", "${_AT_P_TEXT_BACK}", "opacity", '1', { fromValue: '0'}], position: 398, duration: 26 },
                { id: "eid700", tween: [ "style", "${_YSP_F_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid706", tween: [ "style", "${_YSP_F_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid264", tween: [ "style", "${_AR_P_Goback}", "top", '1575px', { fromValue: '1575px'}], position: 398, duration: 0 },
                { id: "eid331", tween: [ "style", "${__14_P_S}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid357", tween: [ "style", "${_Text_13_P_Speakers}", "top", '291px', { fromValue: '291px'}], position: 560, duration: 0 },
                { id: "eid253", tween: [ "style", "${__2014_SPEAKERS}", "opacity", '1', { fromValue: '0'}], position: 138, duration: 21 },
                { id: "eid677", tween: [ "style", "${_Group_Event_Details}", "left", '970px', { fromValue: '970px'}], position: 195, duration: 0 },
                { id: "eid166", tween: [ "style", "${_Ellipse_15_S_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid205", tween: [ "style", "${_Ellipse_15_S_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid426", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 50, duration: 0 },
                { id: "eid408", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid69", tween: [ "style", "${__2015_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${__2015_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid653", tween: [ "style", "${_Group_Event_Back_Button_L}", "display", 'block', { fromValue: 'none'}], position: 307, duration: 0 },
                { id: "eid676", tween: [ "style", "${_Group_Event_Back_Button_L}", "display", 'none', { fromValue: 'block'}], position: 360, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Ellipse_16_S_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid207", tween: [ "style", "${_Ellipse_16_S_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid437", tween: [ "style", "${_Text8}", "top", '172px', { fromValue: '172px'}], position: 22, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Ellipse_13_S_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Ellipse_13_S_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid47", tween: [ "style", "${_VITVellore_13_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_VITVellore_13_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid387", tween: [ "style", "${_grass_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Ellipse_R_1_PCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid189", tween: [ "style", "${_Ellipse_R_1_PCopy2}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid636", tween: [ "style", "${_Speaker_Button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid646", tween: [ "style", "${_Speaker_Button}", "display", 'block', { fromValue: 'none'}], position: 641, duration: 0 },
                { id: "eid686", tween: [ "style", "${_Speaker_Button}", "display", 'none', { fromValue: 'block'}], position: 715, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Ellipse_16_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid208", tween: [ "style", "${_Ellipse_16_B_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid447", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid448", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '1'}], position: 41, duration: 0 },
                { id: "eid361", tween: [ "style", "${_Text_13_P_Theme}", "top", '183px', { fromValue: '183px'}], position: 560, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Ellipse_14_S_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid203", tween: [ "style", "${_Ellipse_14_S_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Ellipse_About_B_LCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Ellipse_About_B_LCopy}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid451", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 50, duration: 0 },
                { id: "eid711", tween: [ "style", "${_Text_youth_L}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid220", tween: [ "style", "${_Group_Contact_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid221", tween: [ "style", "${_Group_Contact_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid272", tween: [ "style", "${_AT_P_White}", "opacity", '1', { fromValue: '0'}], position: 398, duration: 26 },
                { id: "eid18", tween: [ "style", "${_grass_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid458", tween: [ "style", "${__16_P_text_event_D}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid293", tween: [ "style", "${__15_P_S}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid318", tween: [ "style", "${__15_P_S}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid62", tween: [ "style", "${_TEDx14_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_TEDx14_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid307", tween: [ "style", "${_TEXT_15_P_BACK}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid346", tween: [ "style", "${__14_P_back_TEXT}", "left", '898px', { fromValue: '898px'}], position: 544, duration: 0 },
                { id: "eid576", tween: [ "style", "${__16_P_Back_Button}", "display", 'block', { fromValue: 'none'}], position: 598, duration: 0 },
                { id: "eid577", tween: [ "style", "${__16_P_Back_Button}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid304", tween: [ "style", "${_TEXT_15_P_THEME}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid527", tween: [ "style", "${__16_P_Back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid544", tween: [ "style", "${__16_P_Back}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid468", tween: [ "style", "${__16_P_Back}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid273", tween: [ "style", "${_AT_p_black}", "opacity", '0.8', { fromValue: '0'}], position: 398, duration: 26 },
                { id: "eid546", tween: [ "style", "${_Group_Speaker_Details_L}", "opacity", '1', { fromValue: '0'}], position: 180, duration: 15 },
                { id: "eid286", tween: [ "style", "${_AT_P_TEXT_BACK}", "display", 'none', { fromValue: 'block'}], position: 432, duration: 0 },
                { id: "eid730", tween: [ "style", "${_fb_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid731", tween: [ "style", "${_fb_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid240", tween: [ "style", "${_Group_Contact_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid241", tween: [ "style", "${_Group_Contact_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Ellipse_15_S_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_Ellipse_15_S_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid651", tween: [ "style", "${_Group_Event_Details}", "opacity", '1', { fromValue: '0'}], position: 180, duration: 15 },
                { id: "eid640", tween: [ "style", "${_Speaker_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid642", tween: [ "style", "${_Speaker_B_P}", "display", 'block', { fromValue: 'none'}], position: 641, duration: 0 },
                { id: "eid629", tween: [ "style", "${_Speaker_B_P}", "display", 'none', { fromValue: 'block'}], position: 715, duration: 0 },
                { id: "eid246", tween: [ "style", "${__2015_SPEAKERS}", "display", 'none', { fromValue: 'block'}], position: 88, duration: 0 },
                { id: "eid430", tween: [ "style", "${_EVENT}", "width", '308px', { fromValue: '308px'}], position: 41, duration: 0 },
                { id: "eid371", tween: [ "style", "${_text_13_P_Speakers_D}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid532", tween: [ "style", "${__16_P_galadinner}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid535", tween: [ "style", "${__16_P_galadinner}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid471", tween: [ "style", "${__16_P_galadinner}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid247", tween: [ "style", "${__2015_THEME}", "display", 'none', { fromValue: 'block'}], position: 88, duration: 0 },
                { id: "eid330", tween: [ "style", "${__14_P_Speakers_D}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid236", tween: [ "style", "${_Group_14_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid237", tween: [ "style", "${_Group_14_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Stage}", "height", '630px', { fromValue: '630px'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Stage}", "height", '1990px', { fromValue: '630px'}], position: 390, duration: 0 },
                { id: "eid144", tween: [ "style", "${_TEDx_15_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid183", tween: [ "style", "${_TEDx_15_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid375", tween: [ "style", "${__13_P_button}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid335", tween: [ "style", "${__14_P_speakers}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid53", tween: [ "style", "${_Ellipse_16_B_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_Ellipse_16_B_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid309", tween: [ "style", "${__15_BACK_BUTTON_P}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid230", tween: [ "style", "${_Group_16_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_Group_16_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Ellipse_14_S_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_Ellipse_14_S_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid668", tween: [ "style", "${_Text20}", "opacity", '1', { fromValue: '0'}], position: 317, duration: 35 },
                { id: "eid461", tween: [ "style", "${__16_P_theme_D}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid145", tween: [ "style", "${__2016_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid184", tween: [ "style", "${__2016_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid685", tween: [ "style", "${_Speaker_Button}", "opacity", '1', { fromValue: '0'}], position: 659, duration: 39 },
                { id: "eid712", tween: [ "style", "${_Text_hunt_L}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Ellipse_About_B_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Ellipse_About_B_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid699", tween: [ "style", "${_Text_youth_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid705", tween: [ "style", "${_Text_youth_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid453", tween: [ "style", "${_background_2}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid716", tween: [ "style", "${_Group_Event_Details}", "top", '434px', { fromValue: '434px'}], position: 195, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Ellipse_R_7_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Ellipse_R_7_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid56", tween: [ "style", "${_VITVellore_16_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_VITVellore_16_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid51", tween: [ "style", "${_Contact_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_Contact_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid140", tween: [ "style", "${_VITVellore_14_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid179", tween: [ "style", "${_VITVellore_14_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid691", tween: [ "style", "${_Text16}", "top", '85px', { fromValue: '85px'}], position: 390, duration: 0 },
                { id: "eid167", tween: [ "style", "${_Ellipse_15_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid206", tween: [ "style", "${_Ellipse_15_B_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid65", tween: [ "style", "${_TEDx15_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_TEDx15_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid138", tween: [ "style", "${_TEDx_13_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid177", tween: [ "style", "${_TEDx_13_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid326", tween: [ "style", "${__14_P_Theme_D}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid342", tween: [ "style", "${__14_P_Theme_D}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid32", tween: [ "style", "${_Ellipse_About_S_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Ellipse_About_S_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Ellipse_R_9_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid99", tween: [ "style", "${_Ellipse_R_9_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid310", tween: [ "style", "${__15_P_S}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid724", tween: [ "style", "${_Speaker_W_P}", "height", '627px', { fromValue: '627px'}], position: 698, duration: 0 },
                { id: "eid372", tween: [ "style", "${_Text_13_P_Speakers}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid457", tween: [ "style", "${__16_P_event_title}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid31", tween: [ "style", "${_Ellipse_R_3_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Ellipse_R_3_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid454", tween: [ "style", "${_Text_Theme_D_L}", "display", 'none', { fromValue: 'block'}], position: 203, duration: 0 },
                { id: "eid13", tween: [ "style", "${_tree_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_tree_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid462", tween: [ "style", "${__16_P_text_event_D_1}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid37", tween: [ "style", "${_Ellipse_R_5_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Ellipse_R_5_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid655", tween: [ "style", "${_Rectangle18}", "display", 'block', { fromValue: 'none'}], position: 307, duration: 0 },
                { id: "eid608", tween: [ "style", "${_Speakers_W_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid610", tween: [ "style", "${_Speakers_W_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid625", tween: [ "style", "${_Speaker_B_P}", "opacity", '0.83999999284744', { fromValue: '0'}], position: 659, duration: 39 },
                { id: "eid445", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid446", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '1'}], position: 41, duration: 0 },
                { id: "eid648", tween: [ "style", "${_Group_Speaker_Details_L}", "left", '973px', { fromValue: '973px'}], position: 195, duration: 0 },
                { id: "eid725", tween: [ "style", "${_Speaker_W_P}", "top", '707px', { fromValue: '707px'}], position: 698, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Ellipse_13_S_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid201", tween: [ "style", "${_Ellipse_13_S_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid465", tween: [ "style", "${__16_P_Back}", "opacity", '0.85', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid210", tween: [ "style", "${_Ellipse_R_2_PCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid211", tween: [ "style", "${_Ellipse_R_2_PCopy}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid435", tween: [ "style", "${_Text4}", "top", '312px', { fromValue: '312px'}], position: 22, duration: 0 },
                { id: "eid723", tween: [ "style", "${_Speaker_W_P}", "width", '1390px', { fromValue: '1390px'}], position: 698, duration: 0 },
                { id: "eid149", tween: [ "style", "${_Ellipse_R_1_PCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid188", tween: [ "style", "${_Ellipse_R_1_PCopy3}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid665", tween: [ "style", "${_Rectangle17}", "opacity", '1', { fromValue: '0'}], position: 317, duration: 35 },
                { id: "eid57", tween: [ "style", "${__2016_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${__2016_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid131", tween: [ "style", "${_ABOUT_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid170", tween: [ "style", "${_ABOUT_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Ellipse_13_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid202", tween: [ "style", "${_Ellipse_13_B_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid656", tween: [ "style", "${_Text19}", "display", 'block', { fromValue: 'none'}], position: 307, duration: 0 },
                { id: "eid673", tween: [ "style", "${_Text19}", "display", 'none', { fromValue: 'block'}], position: 360, duration: 0 },
                { id: "eid354", tween: [ "style", "${__13_P_S}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid386", tween: [ "style", "${__13_P_S}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid251", tween: [ "style", "${__2013_THEME}", "display", 'none', { fromValue: 'block'}], position: 130, duration: 0 },
                { id: "eid528", tween: [ "style", "${__16_P_event_title}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid542", tween: [ "style", "${__16_P_event_title}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid474", tween: [ "style", "${__16_P_event_title}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid46", tween: [ "style", "${_TEDx13_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_TEDx13_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid49", tween: [ "style", "${_Ellipse_Contact_B_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_Ellipse_Contact_B_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid154", tween: [ "style", "${_Ellipse_R_1_PCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid193", tween: [ "style", "${_Ellipse_R_1_PCopy5}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid133", tween: [ "style", "${_Text18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Text18}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Ellipse_Contact_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid196", tween: [ "style", "${_Ellipse_Contact_B_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid224", tween: [ "style", "${_Group_14_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid225", tween: [ "style", "${_Group_14_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid649", tween: [ "style", "${_Group_Speaker_Details_L}", "top", '160px', { fromValue: '160px'}], position: 195, duration: 0 },
                { id: "eid322", tween: [ "style", "${__14_P_Back_button}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid338", tween: [ "style", "${__14_P_Back_button}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid328", tween: [ "style", "${__14_P_back_TEXT}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid289", tween: [ "style", "${_TEXT_15_P_SPEAKERS_LIST}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid314", tween: [ "style", "${_TEXT_15_P_SPEAKERS_LIST}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid238", tween: [ "style", "${_Group_13_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid239", tween: [ "style", "${_Group_13_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid271", tween: [ "style", "${_AR_P_Goback}", "opacity", '1', { fromValue: '0'}], position: 398, duration: 26 },
                { id: "eid41", tween: [ "style", "${_Ellipse_About_S_LCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Ellipse_About_S_LCopy}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid141", tween: [ "style", "${_TEDx_14_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid180", tween: [ "style", "${_TEDx_14_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Ellipse_R_6_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Ellipse_R_6_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid475", tween: [ "style", "${__16_P_Back_text}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid652", tween: [ "style", "${_Group_Event_Details}", "display", 'none', { fromValue: 'block'}], position: 203, duration: 0 },
                { id: "eid429", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 50, duration: 0 },
                { id: "eid411", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid279", tween: [ "style", "${_AT_P_TEXT}", "opacity", '1', { fromValue: '0'}], position: 398, duration: 26 },
                { id: "eid308", tween: [ "style", "${_TEXT_15_P_THEME_D}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid54", tween: [ "style", "${_Ellipse_16_S_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_Ellipse_16_S_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid244", tween: [ "style", "${__2015_SPEAKERS}", "opacity", '1', { fromValue: '0'}], position: 58, duration: 21 },
                { id: "eid428", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 50, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid329", tween: [ "style", "${__14_P_Theme_D}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid43", tween: [ "style", "${_Ellipse_R_8_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Ellipse_R_8_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid311", tween: [ "style", "${__15_BACK_BUTTON_P}", "left", '841px', { fromValue: '841px'}], position: 473, duration: 0 },
                { id: "eid377", tween: [ "style", "${_Text_13_P_Theme}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid325", tween: [ "style", "${__14_P_Theme}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid341", tween: [ "style", "${__14_P_Theme}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid134", tween: [ "style", "${__2013_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${__2013_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid350", tween: [ "style", "${_Text_13_P_Theme}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid380", tween: [ "style", "${_Text_13_P_Theme}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid245", tween: [ "style", "${__2015_THEME}", "opacity", '1', { fromValue: '0'}], position: 58, duration: 21 },
                { id: "eid352", tween: [ "style", "${_text_13_P_Speakers_D}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid383", tween: [ "style", "${_text_13_P_Speakers_D}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid360", tween: [ "style", "${__13_P_button}", "top", '1693px', { fromValue: '1693px'}], position: 560, duration: 0 },
                { id: "eid218", tween: [ "style", "${_Group_About_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid219", tween: [ "style", "${_Group_About_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid637", tween: [ "style", "${_Speaker_Back_Text_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid645", tween: [ "style", "${_Speaker_Back_Text_P}", "display", 'block', { fromValue: 'none'}], position: 641, duration: 0 },
                { id: "eid633", tween: [ "style", "${_Speaker_Back_Text_P}", "display", 'none', { fromValue: 'block'}], position: 715, duration: 0 },
                { id: "eid291", tween: [ "style", "${_TEXT_15_P_THEME_D}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid316", tween: [ "style", "${_TEXT_15_P_THEME_D}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid436", tween: [ "style", "${_Text2}", "top", '70px', { fromValue: '70px'}], position: 22, duration: 0 },
                { id: "eid284", tween: [ "style", "${_AT_P_TEXT}", "left", '278px', { fromValue: '278px'}], position: 432, duration: 0 },
                { id: "eid323", tween: [ "style", "${__14_P_Speakers_D}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid339", tween: [ "style", "${__14_P_Speakers_D}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid697", tween: [ "style", "${_Group_YSP_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid703", tween: [ "style", "${_Group_YSP_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Ellipse_About_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid198", tween: [ "style", "${_Ellipse_About_B_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid657", tween: [ "style", "${_Rectangle17}", "display", 'block', { fromValue: 'none'}], position: 307, duration: 0 },
                { id: "eid674", tween: [ "style", "${_Rectangle17}", "display", 'none', { fromValue: 'block'}], position: 360, duration: 0 },
                { id: "eid142", tween: [ "style", "${__2015_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid181", tween: [ "style", "${__2015_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid722", tween: [ "style", "${_Speaker_W_P}", "left", '0px', { fromValue: '0px'}], position: 698, duration: 0 },
                { id: "eid709", tween: [ "style", "${_Text_speaker_L}", "left", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Ellipse_14_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid204", tween: [ "style", "${_Ellipse_14_B_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid55", tween: [ "style", "${_TEDx16_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_TEDx16_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid34", tween: [ "style", "${_TED_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_TED_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid353", tween: [ "style", "${__13_P_Back_Text}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid384", tween: [ "style", "${__13_P_Back_Text}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid257", tween: [ "style", "${__2016_THEME}", "opacity", '1', { fromValue: '0'}], position: 180, duration: 15 },
                { id: "eid303", tween: [ "style", "${_TEXT_15_p_SPEAKERS}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid248", tween: [ "style", "${__2013_SPEAKERS}", "opacity", '1', { fromValue: '0'}], position: 96, duration: 22 },
                { id: "eid612", tween: [ "style", "${_Group_Speakers_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid641", tween: [ "style", "${_Group_Speakers_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid347", tween: [ "style", "${__14_P_back_TEXT}", "top", '1686px', { fromValue: '1686px'}], position: 544, duration: 0 },
                { id: "eid708", tween: [ "color", "${_YSP_F_L}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid143", tween: [ "style", "${_VITVellore_15_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "style", "${_VITVellore_15_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid320", tween: [ "style", "${__14_P_B}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid336", tween: [ "style", "${__14_P_B}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid526", tween: [ "style", "${_Rectangle5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid543", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid467", tween: [ "style", "${_Rectangle5}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid374", tween: [ "style", "${__13_P_S}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid147", tween: [ "style", "${_TEDx_16_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid186", tween: [ "style", "${_TEDx_16_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid292", tween: [ "style", "${_TEXT_15_P_THEME}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid317", tween: [ "style", "${_TEXT_15_P_THEME}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid327", tween: [ "style", "${__14_P_S}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid343", tween: [ "style", "${__14_P_S}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid234", tween: [ "style", "${_Group_15_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid235", tween: [ "style", "${_Group_15_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid294", tween: [ "style", "${__15_P_B}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid319", tween: [ "style", "${__15_P_B}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid146", tween: [ "style", "${_VITVellore_16_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid185", tween: [ "style", "${_VITVellore_16_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid288", tween: [ "style", "${_TEXT_15_P_BACK}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid312", tween: [ "style", "${_TEXT_15_P_BACK}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid280", tween: [ "style", "${_AT_P_TEXT}", "display", 'block', { fromValue: 'none'}], position: 398, duration: 0 },
                { id: "eid285", tween: [ "style", "${_AT_P_TEXT}", "display", 'none', { fromValue: 'block'}], position: 432, duration: 0 },
                { id: "eid667", tween: [ "style", "${_Group_Event_Back_Button_L}", "opacity", '1', { fromValue: '0'}], position: 317, duration: 35 },
                { id: "eid151", tween: [ "style", "${_Ellipse_R_1_PCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_Ellipse_R_1_PCopy6}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid427", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 50, duration: 0 },
                { id: "eid409", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid670", tween: [ "style", "${_Rectangle16}", "opacity", '0.85', { fromValue: '0'}], position: 317, duration: 35 },
                { id: "eid135", tween: [ "style", "${_VITVellore_13_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid174", tween: [ "style", "${_VITVellore_13_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid359", tween: [ "style", "${__13_P_S}", "top", '132px', { fromValue: '132px'}], position: 560, duration: 0 },
                { id: "eid349", tween: [ "style", "${_Text_13_P_Theme_D}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid381", tween: [ "style", "${_Text_13_P_Theme_D}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid456", tween: [ "style", "${_Text_Theme_D_L}", "opacity", '1', { fromValue: '0'}], position: 180, duration: 15 },
                { id: "eid242", tween: [ "style", "${_Group_About_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Group_About_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid373", tween: [ "style", "${__13_P_Back_Text}", "opacity", '1', { fromValue: '0'}], position: 560, duration: 10 },
                { id: "eid252", tween: [ "style", "${__2014_THEME}", "opacity", '1', { fromValue: '0'}], position: 138, duration: 21 },
                { id: "eid524", tween: [ "style", "${__16_P_back_box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid539", tween: [ "style", "${__16_P_back_box}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid478", tween: [ "style", "${__16_P_back_box}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid638", tween: [ "style", "${_Speaker_Back_box_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid644", tween: [ "style", "${_Speaker_Back_box_P}", "display", 'block', { fromValue: 'none'}], position: 641, duration: 0 },
                { id: "eid634", tween: [ "style", "${_Speaker_Back_box_P}", "display", 'none', { fromValue: 'block'}], position: 715, duration: 0 },
                { id: "eid654", tween: [ "style", "${_Text20}", "display", 'block', { fromValue: 'none'}], position: 307, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Ellipse_Sponsor_B_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid200", tween: [ "style", "${_Ellipse_Sponsor_B_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid259", tween: [ "style", "${__2016_THEME}", "display", 'none', { fromValue: 'block'}], position: 203, duration: 0 },
                { id: "eid287", tween: [ "style", "${__15_BACK_BUTTON_P}", "display", 'block', { fromValue: 'none'}], position: 458, duration: 0 },
                { id: "eid313", tween: [ "style", "${__15_BACK_BUTTON_P}", "display", 'none', { fromValue: 'block'}], position: 481, duration: 0 },
                { id: "eid351", tween: [ "style", "${_Text_13_P_Speakers}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid382", tween: [ "style", "${_Text_13_P_Speakers}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid306", tween: [ "style", "${_TEXT_15_P_SPEAKERS_LIST}", "opacity", '1', { fromValue: '0'}], position: 458, duration: 15 },
                { id: "eid324", tween: [ "style", "${__14_P_speakers}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid340", tween: [ "style", "${__14_P_speakers}", "display", 'none', { fromValue: 'block'}], position: 552, duration: 0 },
                { id: "eid523", tween: [ "style", "${__16_P_Back_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid538", tween: [ "style", "${__16_P_Back_text}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid477", tween: [ "style", "${__16_P_Back_text}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid713", tween: [ "style", "${_Contact_L}", "left", '11px', { fromValue: '11px'}], position: 0, duration: 0 },
                { id: "eid348", tween: [ "style", "${__13_P_B}", "display", 'block', { fromValue: 'none'}], position: 560, duration: 0 },
                { id: "eid379", tween: [ "style", "${__13_P_B}", "display", 'none', { fromValue: 'block'}], position: 578, duration: 0 },
                { id: "eid139", tween: [ "style", "${__2014_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "style", "${__2014_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid334", tween: [ "style", "${__14_P_Back_button}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid362", tween: [ "style", "${_Text_13_P_Theme_D}", "top", '179px', { fromValue: '179px'}], position: 560, duration: 0 },
                { id: "eid249", tween: [ "style", "${__2013_THEME}", "opacity", '1', { fromValue: '0'}], position: 96, duration: 22 },
                { id: "eid433", tween: [ "style", "${_Text9}", "left", '970px', { fromValue: '970px'}], position: 41, duration: 0 },
                { id: "eid262", tween: [ "style", "${_AR_P_Goback}", "display", 'block', { fromValue: 'none'}], position: 398, duration: 0 },
                { id: "eid283", tween: [ "style", "${_AR_P_Goback}", "display", 'none', { fromValue: 'block'}], position: 432, duration: 0 },
                { id: "eid531", tween: [ "style", "${__16_P_main_event}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid534", tween: [ "style", "${__16_P_main_event}", "display", 'block', { fromValue: 'none'}], position: 596, duration: 0 },
                { id: "eid472", tween: [ "style", "${__16_P_main_event}", "display", 'none', { fromValue: 'block'}], position: 630, duration: 0 },
                { id: "eid441", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid442", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '1'}], position: 41, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Text16}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid222", tween: [ "style", "${_Group_Sponsor_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid223", tween: [ "style", "${_Group_Sponsor_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid623", tween: [ "style", "${_Speaker_W_P}", "opacity", '1', { fromValue: '0'}], position: 659, duration: 39 },
                { id: "eid693", tween: [ "style", "${_Group_ysp_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid694", tween: [ "style", "${_Group_ysp_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid333", tween: [ "style", "${__14_P_Theme}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 44 },
                { id: "eid1", tween: [ "style", "${_Stage}", "width", '1330px', { fromValue: '1330px'}], position: 0, duration: 0 },
                { id: "eid692", tween: [ "style", "${_Stage}", "width", '1400px', { fromValue: '1398px'}], position: 390, duration: 269 },
                { id: "eid628", tween: [ "style", "${_Stage}", "width", '1400px', { fromValue: '1400px'}], position: 698, duration: 0 },
                { id: "eid261", tween: [ "style", "${_AT_P_White}", "display", 'block', { fromValue: 'none'}], position: 398, duration: 0 },
                { id: "eid282", tween: [ "style", "${_AT_P_White}", "display", 'none', { fromValue: 'block'}], position: 432, duration: 0 },
                { id: "eid156", tween: [ "style", "${_Ellipse_Contact_S_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid195", tween: [ "style", "${_Ellipse_Contact_S_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid48", tween: [ "style", "${__2013_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${__2013_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid459", tween: [ "style", "${_Rectangle5}", "opacity", '1', { fromValue: '0'}], position: 603, duration: 12 },
                { id: "eid232", tween: [ "style", "${_Group_Sponsor_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid233", tween: [ "style", "${_Group_Sponsor_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid698", tween: [ "style", "${_Text_speaker_L}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid704", tween: [ "style", "${_Text_speaker_L}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
                { id: "eid714", tween: [ "style", "${_fb_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid715", tween: [ "style", "${_fb_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid449", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '1'}], position: 22, duration: 0 },
                { id: "eid450", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '1'}], position: 41, duration: 0 },
                { id: "eid226", tween: [ "style", "${_Group_15_P}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid227", tween: [ "style", "${_Group_15_P}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
                { id: "eid658", tween: [ "style", "${_Rectangle16}", "display", 'block', { fromValue: 'none'}], position: 307, duration: 0 },
                { id: "eid675", tween: [ "style", "${_Rectangle16}", "display", 'none', { fromValue: 'block'}], position: 360, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-576077479");
