import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import PrincingList from "./PrincingList"
import Section from "./Section"
import { LeftLine, RightLine } from "./design/Pricing"

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="princing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        className="relative z-1"
                        src={smallSphere}
                        width={255}
                        height={255}
                        alt="sphere"
                    />

                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2
                    -translate-y-1/2 pointer-events-none">
                        <img
                            className="w-full"
                            width={950}
                            height={400}
                            src={stars} alt=""
                        />
                    </div>
                </div>
                <Heading
                    className="text-center"
                    tag="Get started with brainwave"
                    title="Pay once, use forever"
                />

                <div className="relative">
                    <PrincingList />
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="flex justify-center mt-10">
                    <a
                        href="/princing"
                        className="text-xs font-code font-bold tracking-wider uppercase border-b"
                    >
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Pricing
