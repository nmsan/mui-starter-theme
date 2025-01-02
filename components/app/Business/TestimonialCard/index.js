import WdGrid from "../../../../theme/WdGrid";
import Image from "next/image";
import WdCard from "../../../../theme/WdCard";
import flower from "@/resources/images/flower.png";

const TestimonialCard = props => {

    return <>
        <WdCard>
            <WdGrid container spacing={2}>
                <WdGrid size={3}>
                    <div>
                        <Image src={flower} alt="flower"/>
                    </div>
                </WdGrid>
                <WdGrid size={9}>
                    <p>Test</p>
                </WdGrid>
            </WdGrid>
        </WdCard></>
}

export default TestimonialCard;