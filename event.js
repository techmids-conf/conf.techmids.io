import { OVERALL_END, OVERALL_START} from "schedule"

export const EVENT = {
    date: 'November 27th 2026',
    dateTbc: false,
    title: 'TechMids Conf',
    edition: 'TechMids Conf 2026',
    venue: 'Everyman Cinema',
    address: 'Mailbox, Birmingham',
    startTime: OVERALL_START,
    endTime: OVERALL_END,
    ticketLink: 'https://ti.to/tech-events-birmingham/techmids-conf-2026',
    onSale: true, //swap to true to embed ticket widget
    soldOut: false,
    titoId: 'tech-events-birmingham/techmids-conf-2026',
    CFPLink: "https://forms.gle/mhQxq1BuJFiqzxS6A",
    CFPOpen: true,
    speakersTBC: true,
    capacity: 250,
    tagline: "",
}

//  Marks what information is available on the website
export const AVAILABLE_INFORMATION = {
    scheduleAvailable: false,
    locationAvailable: true, 
    speakersAvailable: false,
    sponsorsAvailable: false,
}

export const sponsorTiers = {
//    headline: {
//        name: "Headline Sponsor",
//        sponsors: [
//            {
//                name: "Amazon Web Services",
//                image: "/sponsors/AWS.svg",
//                url: "https://aws.amazon.com/"
//            }
//        ]
//    },
//    silver: {
//        name: "Silver Sponsors",
//        sponsors: [
//            {
//                name: "AdvancedOne",
//                image: "/sponsors/OneAdvanced.png",
//                url: "https://www.oneadvanced.com/"
//            },
//            {
//                name: "BCS Birmingham Branch",
//                image: "/sponsors/bcs.jpg",
//                url: "https://www.bcs.org/membership-and-registrations/member-communities/birmingham-branch/"
//            }
//        ]
//    },
//    bronze: {
//        name: "Bronze Sponsors",
//        sponsors: [
//            {
//                name: "Bluetel",
//                image: "/sponsors/Bluetel.png",
//                url: "https://www.bluetel.co.uk/"
//            },
//            {
//                name: "Spinks",
//                image: "/sponsors/Spinks.png",
//                url: "https://www.wearespinks.com/"
//            }
//        ]
//    },
}
