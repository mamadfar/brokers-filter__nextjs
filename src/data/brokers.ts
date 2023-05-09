export type Broker = {
    id: number
    name: string
    logoUrl: string
    linkUrl: string
    score: number
    isForex?: boolean
    isStock?: boolean
}

/**
 * This is just for the sake of simplicity.
 */
export const exampleBrokerData: Broker[] = [
    {
        "id": 5,
        "name": "Interactive Brokers",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/interactive-brokers-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/interactive-brokers-review",
        "score": 4.9,
        isStock: true,
        isForex: true,
    },
    {
        "id": 6,
        "name": "Saxo Bank",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/saxo-bank-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/saxo-bank-review",
        "score": 4.8
    },
    {
        "id": 11,
        "name": "Swissquote",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/swissquote-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/swissquote-review",
        "score": 4.7,
        isStock: true,
    },
    {
        "id": 12,
        "name": "IG",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/ig-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/ig-review",
        "score": 4.5,
        isStock: true,
    },
    {
        "id": 13,
        "name": "Oanda",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/oanda-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/oanda-review",
        "score": 4.7,
        isForex: true,
    },
    {
        "id": 14,
        "name": "eToro",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/etoro-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/etoro-review",
        "score": 4.8,
        isForex: true,
    },
    {
        "id": 16,
        "name": "Comdirect",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/comdirect-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/comdirect-review",
        "score": 4.2
    },
    {
        "id": 17,
        "name": "BGL BNP Paribas",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/bnp-paribas-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/bnp-paribas-review",
        "score": 3.1,
        isStock: true,
        isForex: true,
    },
    {
        "id": 18,
        "name": "tastyworks",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/tastyworks-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/tastyworks-review",
        "score": 4.8
    },
    {
        "id": 19,
        "name": "Markets.com",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/marketsx-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/marketsx-review",
        "score": 3.9
    },
    {
        "id": 20,
        "name": "Plus500",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/plus500-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/plus500-review",
        "score": 4.7,
        isStock: true,
    },
    {
        "id": 21,
        "name": "Pepperstone",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/pepperstone-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/pepperstone-review",
        "score": 4.6,
        isForex: true,
    },
    {
        "id": 22,
        "name": "TradeStation",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/tradestation-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/tradestation-review",
        "score": 4.7,
        isStock: true,
    },
    {
        "id": 28,
        "name": "FXCM",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/fxcm-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/fxcm-review",
        "score": 4.4
    },
    {
        "id": 60,
        "name": "Robinhood",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/robinhood-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/robinhood-review",
        "score": 4.4,
        isForex: true,
    },
    {
        "id": 15,
        "name": "DEGIRO",
        "logoUrl": "https://brokerchooser.com/uploads/broker_logos/degiro-review.png",
        "linkUrl": "https://brokerchooser.com/broker-reviews/degiro-review",
        "score": 4.9,
        isStock: true,
    }
]