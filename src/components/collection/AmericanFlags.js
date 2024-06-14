const flags = [
    {
        country: "Anguilla (UK)",
        code: "AI",
        summary: `The Caribbean British Overseas Territory of Anguilla is well-known for its breathtaking beaches, coral reefs, and crystal-clear turquoise seas. The Valley, the capital, is a quaint little town. The main drivers of Anguilla's economy are tourism, offshore banking, and fishing. With influences from African, European, and indigenous peoples, the island is proud of its rich cultural history. Anguilla is noted for its kind, inviting society and provides a good level of living despite its tiny size. The island is renowned for its thriving music scene, especially for calypso and reggae. 
        
        Since Anguilla does not have any major cities, here are some of the popular tourist destinations instead:`,
        mainImg: "https://images.unsplash.com/photo-1651697196279-2a59b3688916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cities: [
            {
                name: "The Valley (de facto capital)",
                videos: ["https://youtube.com/embed/wknqNzm5iQA?si=DRTUxHkKMQuiP03T"],
            },
            {
                name: "Sandy Hill Bay",
                videos: ["https://youtube.com/embed/B-pb4xIqcp0?si=jtkSdr9BPhyS2YF4"],
            },
            {
                name: "Shoal Bay",
                videos: ["https://youtube.com/embed/AW93g8zF8AM?si=ky4XAVE2wVByNupw", "https://youtube.com/embed/5iFJ9jRwp-w?si=kAZNnsUpRwe-9E0W"],
            },
            {
                name: "Crocus Bay",
                videos: ["https://youtube.com/embed/2ubSDOqIykM?si=kqBSbGADSj1k2rSn", "https://youtube.com/embed/pY0e4e-o8_g?si=MN_HZ_Pa_dvzpP_j"],
            },
            {
                name: "Little Bay",
                videos: ["https://youtube.com/embed/_5Zs15wu9fs?si=KI8ac5nIBHJCXYdF", "https://youtube.com/embed/klkViHh1MTg?si=LiJTlDDXCWdYmGRc"],
            },
            {
                name: "Island Harbour",
                videos: ["https://youtube.com/embed/I-Ll-1eWQ_E?si=stYVwYZOu_oF00Gx", "https://youtube.com/embed/nIUJycQSIiU?si=INDto7QnZAXeW4ID"],
            },
        ],
    },
    {
        country: "Antigua and Barbuda",
        code: "AG",
        summary: "The Caribbean twin-island nation of Antigua and Barbuda is well-known for having 365 beaches, one for every day of the year. St. John's, the capital, is a thriving center with a vibrant market and colonial buildings. The economy is driven by tourism, with manufacturing and agriculture providing support. With influences from African, British, and indigenous cultures, the islands are proud of their rich cultural history. While Barbuda is well-known for its pink sand beaches and the Frigate Bird Sanctuary, Antigua is well-known for its sailing competitions. The country's strong culture and stunning natural surroundings allow it to flourish despite obstacles like storm vulnerability.",
        mainImg: "https://images.unsplash.com/photo-1582300857444-5ddd87c86797?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cities: [
            {
                name: "St. John's (Capital City)",
                videos: ["https://youtube.com/embed/YJr_Rnq4Pqk?si=fi7T6X2wRMWkLB0F", "https://youtube.com/embed/_253WRzb0Cw?si=ukKGHuCVydvsVTRC"],
            },
            {
                name: "Codrington (Barbuda)",
                videos: ["https://youtube.com/embed/ga9gMYetVrw?si=tPsFp-MtD1wzLX-0"],
            },
        ],
    },
    {
        country: "Argentina",
        code: "AR",
        summary: "The second-largest nation in South America, Argentina is renowned for its varied topography, which includes the Andes mountains, Pampas plains, and the glaciers of Patagonia. Buenos Aires, the capital, is well-known for its tango music, European-style architecture, and dynamic culture. Argentina is rich in natural resources and has a robust agricultural industry, especially in the production of wine and meat. The nation's complicated past is replete with instances of both political unrest and economic triumph. Argentina continues to have an impact on literature, athletics, and the arts despite its economic struggles, giving birth to well-known people like Lionel Messi and Eva Perón.",
        mainImg: "https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cities: [
            {
                name: "Buenos Aires (Capital City)",
                videos: ["https://youtube.com/embed/4sbYjI_AtmY?si=GtIMBmZj7tttKOjm", "https://youtube.com/embed/MJYT499-twk?si=Pgrei6xLdkOx_Is8"],
            },
            {
                name: "Córdoba",
                videos: ["https://youtube.com/embed/hKaE_AAQBWA?si=lgUcG3q59Gx3PkJy", "https://youtube.com/embed/6TpM6QXTqRA?si=6zKeH06u1zE8KxBY"],
            },
            {
                name: "Mendoza",
                videos: ["https://youtube.com/embed/FwhjSNh6yxY?si=-oY7FWVcBRwQhyWm", "https://youtube.com/embed/rFL5c9OkE3o?si=vOYQ1PdWS5ohz1dF"],
            },
            {
                name: "Salta",
                videos: ["https://youtube.com/embed/W_n6DyZD2oI?si=cfHm2vmWHXkbLV0Z", "https://youtube.com/embed/h5Ay5v1uxMY?si=JMHQibfN5rdBitDz", "https://youtube.com/embed/lFv0SeZDLCA?si=_hg5YNNTBLVmYrTg"],
            },
            {
                name: "Ushuaia",
                videos: ["https://youtube.com/embed/PJpoT9RncJQ?si=Hz5TAl34eMkeFsKI", "https://youtube.com/embed/7g6sdaDozt4?si=kO8Q8SkbXrCN_M8r", "https://youtube.com/embed/GX3WrzrzuNU?si=FzMl7mbnejMnjOvH"],
            },
        ],
    },
    {
        country: "Aruba (NL)",
        code: "AW",
        summary: "The Caribbean island of Aruba, which is a part of the Netherlands, is well-known for its mild weather, beautiful waters, and white sand beaches. Oranjestad, the capital, has a busy port and vibrant Dutch colonial buildings. Aruba's economy is centered on tourism, with offshore banking and aloe production serving as auxiliary sectors. Aruba is well-known for its hospitable and multifaceted culture, which combines elements from its European, African, and indigenous roots. In addition, the island is well-known for its colorful festivals, aquatic activities, and scenic spots like Arikok National Park. Aruba has both a stable political environment and an excellent standard of living.",
        mainImg: "https://images.unsplash.com/photo-1625151919646-9b081352933c?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cities: [
            {
                name: "Oranjestad (Capital City)",
                videos: ["https://youtube.com/embed/MKRhVj41Ql4?si=wCb71_etFHG0SxCa", "https://youtube.com/embed/JTTRU7jmtCY?si=8IXgqz9lyFpHok2X", "https://youtube.com/embed/s4Chy45YIcg?si=1xihFUPB79gaBCNQ", "https://youtube.com/embed/rAzJXrfnE8w?si=U6dC1S0ciK7XHjj2"],
            },
        ],
    },
    {
        country: "Bahamas",
        code: "BS",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Barbados",
        code: "BB",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Belize",
        code: "BZ",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Bermuda (UK)",
        code: "BM",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Bolivia",
        code: "BO",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Brazil",
        code: "BR",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "British Virgin Islands (UK)",
        code: "VG",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Canada",
        code: "CA",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Chile",
        code: "CL",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Colombia",
        code: "CO",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Costa Rica",
        code: "CR",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Cuba",
        code: "CU",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Curacao (NL)",
        code: "CW",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Dominica",
        code: "DM",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Dominican Republic",
        code: "DO",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Ecuador",
        code: "EC",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "El Salvador",
        code: "SV",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "French Guiana (FR)",
        code: "GF",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Greenland (DK)",
        code: "GL",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Grenada",
        code: "GD",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Guadeloupe (FR)",
        code: "GP",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Guatemala",
        code: "GT",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Guyana",
        code: "GY",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Haiti",
        code: "HT",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Honduras",
        code: "HN",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Jamaica",
        code: "JM",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Martinique (FR)",
        code: "MQ",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Mexico",
        code: "MX",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Montserrat (UK)",
        code: "MS",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Nicaragua",
        code: "NI",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Panama",
        code: "PA",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Paraguay",
        code: "PY",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Peru",
        code: "PE",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Puerto Rico (USA)",
        code: "PR",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Saint Kitts and Nevis",
        code: "KN",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Saint Lucia",
        code: "LC",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Saint Vincent and The Grenadines",
        code: "VC",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Suriname",
        code: "SR",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Trinidad and Tobago",
        code: "TT",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "United States of America | USA",
        code: "US",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Uruguay",
        code: "UY",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "US Virgin Islands (USA)",
        code: "VI",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    },
    {
        country: "Venezuela",
        code: "VE",
        summary: "",
        mainImg: "",
        cities: [
            {
                name: "",
                videos: [""],
            },
        ],
    }
];

export default flags;