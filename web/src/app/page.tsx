import HeroSection from '../components/HeroSection';
import StealthModeSection from '../components/StealthModeSection';
import TrustedAnswersSection from '../components/TrustedAnswersSection';
import FreeFeaturesSection from '../components/FreeFeaturesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import FooterSection from '../components/FooterSection';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className=" w-full">
                <FadeInWhenVisible className="w-full">
                    <div id="hero">
                        <HeroSection />
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible className="w-full">
                    <div id="trusted-answers">
                        <TrustedAnswersSection />
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible className="w-full">
                    <div id="stealth-mode">
                        <StealthModeSection />
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible className="w-full">
                    <div id="free-features">
                        <FreeFeaturesSection />
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible className="w-full">
                    <div id="pricing">
                        <PricingSection />
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible className="w-full">
                    <div id="faq">
                        <FAQSection />
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible className="w-full">
                    <div id="footer">
                        <FooterSection />
                    </div>
                </FadeInWhenVisible>
            </div>
        </div>
    );
}
