import './Home.css'
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'


function Home() {
    return (
        <main className="main">
            <section className="hero">
                <div className="hero__content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="hero__content__subtitle">No fees.</p>
                    <p className="hero__content__subtitle">No minimum deposit.</p>
                    <p className="hero__content__subtitle">High interest rates.</p>
                    <p className="hero__content__text">Open a savings account with Argent Bank today!</p>
                </div>
            </section>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <div className="feature">
                    <img src={iconChat} alt="Secure & Reliable" className="feature__icon" />
                    <h3 className="feature__title">You are our #1 priority</h3>
                    <p className="feature__text">Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.s</p>
                </div>
                <div className="feature">
                    <img src={iconMoney} alt="Low Fees" className="feature__icon" />
                    <h3 className="feature__title">More savings means higher rates</h3>
                    <p className="feature__text">The more you save, the higher your interest rate.</p>
                </div>
                <div className="feature">
                    <img src={iconSecurity} alt="24/7 Customer Support" className="feature__icon" />
                    <h3 className="feature__title">Security you can trust</h3>
                    <p className="feature__text">Our support team is available 24/7 to assist you.</p>
                </div>
            </section>
        </main>
    )
}

export default Home