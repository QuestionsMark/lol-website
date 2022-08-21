import { QUESTIONS } from "../../config";
import { FAQItem } from "../common/FAQItem";
import { Title } from "../common/Title";

export const FAQ = () => {

    const faqList = () => {
        return QUESTIONS.map(q => <FAQItem key={q.question} faq={q} />)
    };

    return (
        <div className="main__content faq slide-animation">
            <Title>FAQ</Title>
            <div className="faq__content">
                {faqList()}
            </div>
        </div>
    );
};