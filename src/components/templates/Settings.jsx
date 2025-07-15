"use client"
import { useState } from "react";
import Container from "../atoms/Container";
import Checkbox from "../molecules/Checkbox";
import Accordion from "../molecules/Accordion";

export default function Settings() {
    const [isOn, setIsOn] = useState(false);

    return (
        <Container className="py-10">
            <div className="w-full max-w-xl mx-auto space-y-7">
                <Checkbox status={isOn} setStatus={setIsOn} />
                <Accordion title="الدعم و المساعدة">
                    فيسبوك
                </Accordion>
                <Accordion title="عن فذكر">
                    <p className="text-center text-sm leading-7">
                        في زحام الدنيا وسرعة الحياة… أنشأنا فَذَكِّر ليكون محطة هادئة،  ترجع لها روحك كل يوم، فتسمع آية، تقرأ ذِكر، تتعلّم أصلًا من أصول دينك.  مش بس تطبيق، لكنه رفيقك في طريق الطمأنينة والسكينة.
💡 فَذَكِّر مصمم بلغة بسيطة، وأدوات مفيدة، تناسب كل مسلم مهما كان عمره أو خلفيته.  سواء بتبدأ رحلتك مع الدين… أو راجع بقلبك من بعيد، فالمكان دا معمول ليك.
                    </p>
                </Accordion>
                <Accordion className="flex flex-col" title="المطورين">
                    <h1>UI/UX Designer - Ziad Mohamed</h1>
                    <h2>Software Engnieer - Mostafa Abdelwahed</h2>
                </Accordion>
            </div>
        </Container>
    )
}
