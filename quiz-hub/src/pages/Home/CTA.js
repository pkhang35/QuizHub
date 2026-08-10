import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./CTA.scss";

function CTA() {
    return (
        <section className="cta">

            <div className="container">

                <div className="cta__inner">

                    <h2 className="cta__title">
                        Sẵn sàng thử thách bản thân?
                    </h2>

                    <p className="cta__description">
                        Kiểm tra kiến thức, tìm ra điểm yếu
                        và cải thiện kỹ năng lập trình của bạn.
                    </p>

                    <Link to="/quizzes">
                        <Button
                            size="large"
                            className="cta__button"
                            icon={<ArrowRightOutlined />}
                            iconPosition="end"
                        >
                            Bắt đầu làm Quiz
                        </Button>
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default CTA;