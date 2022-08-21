import { MdEuro } from 'react-icons/md';

export enum Server {
    EUNE = 'EUNE',
    EUW = 'EUW',
    NA = 'NA',
};
export enum Rank {
    Iron = 'Iron',
    Bronze = 'Bronze',
    Silver = 'Silver',
    Gold = 'Gold',
    Platinum = 'Platinum',
    Diamond = 'Diamond',
    Unranked = 'Unranked',
    Unranked5 = 'Unranked5',
    Unranked10 = 'Unranked10',
};

export interface Account {
    server: Server;
    blueEssence: number;
    unverifiedEmail: boolean;
    price: number;
    lvl: number;
    shopLink: string;
    rank: Rank;
}

export interface FAQ {
    question: string;
    answer: string;
}

export const EMAIL = 'ppekkox@gmail.com';
export const CURRENCY = MdEuro;
export const ACCOUNTS: Account[] = [
    {
        server: Server.EUW,
        blueEssence: 50000,
        unverifiedEmail: true,
        price: 3.00,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/R7FNdE8",
        rank: Rank.Unranked
    },
    {
        server: Server.EUW,
        blueEssence: 50000,
        unverifiedEmail: true,
        price: 24.00,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/MzjL4Ei",
        rank: Rank.Unranked10
    },
    {
        server: Server.EUW,
        blueEssence: 50000,
        unverifiedEmail: true,
        price: 13.50,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/9ivniW1",
        rank: Rank.Unranked5
    },
    {
        server: Server.EUNE,
        blueEssence: 15000,
        unverifiedEmail: true,
        price: 25.00,
        lvl: 35,
        shopLink: "https://shoppy.gg/product/sFtceTA",
        rank: Rank.Iron
    },
    {
        server: Server.EUW,
        blueEssence: 15000,
        unverifiedEmail: true,
        price: 25.00,
        lvl: 35,
        shopLink: "https://shoppy.gg/product/oGdPUPH",
        rank: Rank.Iron
    },
    {
        server: Server.EUNE,
        blueEssence: 40000,
        unverifiedEmail: true,
        price: 2.00,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/gwTU5ol",
        rank: Rank.Unranked
    },
    {
        server: Server.NA,
        blueEssence: 40000,
        unverifiedEmail: true,
        price: 2.00,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/LspCRUd",
        rank: Rank.Unranked
    },
    {
        server: Server.EUNE,
        blueEssence: 50000,
        unverifiedEmail: true,
        price: 3.00,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/5jMyPr8",
        rank: Rank.Unranked
    },
    {
        server: Server.NA,
        blueEssence: 50000,
        unverifiedEmail: true,
        price: 3.00,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/z4pzrG9",
        rank: Rank.Unranked
    },
    {
        server: Server.EUW,
        blueEssence: 40000,
        unverifiedEmail: true,
        price: 2.30,
        lvl: 30,
        shopLink: "https://shoppy.gg/product/vsQpCCz",
        rank: Rank.Unranked
    }
];

export const QUESTIONS: FAQ[] = [
    {
        answer: 'A Smurf is a fresh lvl 30 League of Legends Account, with no ranked games played on it. It has no Champions bought and the chosen by you amount of Blue Essence (BE).',
        question: 'What is a Smurf?',
    },
    {
        answer: 'After you choose an Account and click on "Buy now", you will be redirected to a page, in which you will choose your payment method and enter your E-Mail Address, where your Account details will be sent to.',
        question: 'How will I get my Account details delivered?',
    },
    {
        answer: 'We accept PayPal, Bitcoin and Ethernum. *Through PayPal you can also pay with your bank account connected or your credit card!*',
        question: 'What Payment methods do you accept?',
    },
    {
        answer: "Yes! Creating and playing on a secondary Account is fully legal whenever you want. Whether it's for playing with friends, test new champions, or just playing without the stress of the ranked games, smurfing is a common practice among LoL users.",
        question: 'Is Smurfing allowed in League of Legends?',
    },
    {
        answer: 'Yes, we offer bulk offers of 5/10 Accounts in one offer, with additional % discount! The more Accounts you buy in one offer the bigger the discount will be! If you want a custom offer with more Accounts, and therefore a higher discount just contact us via the "Contact Us" tab.',
        question: 'Can I buy multiple Accounts at once?',
    },
]

export enum HomeText {
    InstantDelivery = 'We provide an Automated Instant Delivery System via E-Mail Address, which is working 24/7.',
    LifetimeWarranty = 'Accounts that are provided with our Warranty will be instantly replaced for FREE (Always check description of the account). Meaning: Your fresh Account got banned and it was our fault, we will give you a New one! (WE DO NOT REPLACE ACCOUNTS BANNED FOR TOXICITY / SCRIPTS / TROLLING)',
    FullAccess = 'After the purchase you are automatically granted with FULL ACCESS of the Account, since the E-Mails on our Accounts are all Unverifed!'
}