import React from "react";
import UpperSection from '../UpperSection/UpperSection';
import BlackSection from '../../containers/BlackSection/BlackSection';
import ArrowSection from '../../containers/ArrowSection/ArrowSection';
import Data from '../../assets/information/Home/InfoHome';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <UpperSection />
            <BlackSection />
            {Data.arrowSectionData.map(section => {
                return (
                    <ArrowSection
                        key={section.id}
                        name={section.name}
                        id={section.id}
                        triangleUp={section.triangleUp}
                        triangleDown={section.triangleDown}
                        color={section.color}
                        image={section.image}
                        title={section.title}
                        paragraph={section.paragraph}
                        buttonText={section.buttonText}
                        hiddenContent={section.hiddenContent}
                    />
                )
            })}
            <Footer />
        </>
    )
}
export default Home;

