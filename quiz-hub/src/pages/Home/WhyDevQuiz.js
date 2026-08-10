import {
    ThunderboltOutlined,
    TrophyOutlined,
    RiseOutlined,
} from "@ant-design/icons";

import "./WhyDevQuiz.scss";

function WhyDevQuiz() {

    const features = [
        {
            icon: <ThunderboltOutlined />,
            title: "Học nhanh hơn",
            description:
                "Những bộ quiz ngắn giúp bạn ôn tập kiến thức nhanh chóng mà không mất quá nhiều thời gian.",
        },
        {
            icon: <TrophyOutlined />,
            title: "Theo dõi tiến bộ",
            description:
                "Theo dõi kết quả và biết được bạn đang mạnh ở chủ đề nào.",
        },
        {
            icon: <RiseOutlined />,
            title: "Cải thiện kiến thức",
            description:
                "Luyện tập thường xuyên để củng cố kiến thức và nâng cao kỹ năng lập trình.",
        },
    ];

    return (
        <section className="why-devquiz">

            <div className="container">

                {/* Heading */}
                <div className="why-devquiz__heading">

                    <h2 className="why-devquiz__title">
                        Vì sao nên luyện tập cùng DevQuiz?
                    </h2>

                    <p className="why-devquiz__description">
                        Một cách đơn giản và hiệu quả để kiểm tra,
                        củng cố và nâng cao kiến thức lập trình của bạn.
                    </p>

                </div>


                {/* Features */}
                <div className="why-devquiz__list">

                    {features.map((feature, index) => (

                        <div
                            className="why-devquiz__item"
                            key={index}
                        >

                            <div className="why-devquiz__icon">
                                {feature.icon}
                            </div>

                            <h3 className="why-devquiz__item-title">
                                {feature.title}
                            </h3>

                            <p className="why-devquiz__item-description">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyDevQuiz;