
import "../styles/offers.css";

function OffersSection() {

    const offers = [
        {
            id: 1,
            title: "Gadget Deals",
            description: "Save more on your favourite gadgets.",
            discount: "Up to 30% OFF",
            icon: "🎧"
        },
        {
            id: 2,
            title: "Stationery Sale",
            description: "Everything you need for learning.",
            discount: "Up to 20% OFF",
            icon: "📚"
        },
        {
            id: 3,
            title: "Lifestyle Offers",
            description: "Upgrade your everyday essentials.",
            discount: "Up to 25% OFF",
            icon: "🎒"
        }
    ];

    return (
        <section className="offers-section">

            <div className="section-heading">
                <h2>Special Offers</h2>
                <p>Great deals for smarter shopping.</p>
            </div>

            <div className="offers-grid">

                {offers.map((offer) => (
                    <div className="offer-card" key={offer.id}>

                        <span className="offer-icon">
                            {offer.icon}
                        </span>

                        <h3>{offer.title}</h3>

                        <p>{offer.description}</p>

                        <strong>{offer.discount}</strong>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default OffersSection;
