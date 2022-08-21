import { FAQ } from "../../config";
import { Section } from "./Section";

interface Props {
    faq: FAQ;
}

export const FAQItem = ({ faq }: Props) => {
    const { answer, question } = faq;
    return (
        <Section>
            <h3 className="main__subtitle">{question}</h3>
            <p className="faq__text">{answer}</p>
        </Section>
    );
};