import { Button, Card, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./PopularTopics.scss"
import { useEffect, useState } from "react";
import { getTopicList } from "../../services/topicsServices";
function PopularTopics() {
    const [topics, setTopics]= useState([]);
    useEffect(()=>{
        const fetchApi= async ()=>{
            const result= await getTopicList();
            setTopics(result)
        }
        fetchApi()
    },[])
    console.log(topics)
    return(
        <>
            <section className="popular-topics">
                <div className="container">
                   <div className="popular-topics__header">
                        <h2 className="popular-topics__title">
                            Khám phá các chủ đề
                        </h2>
                        <p className="popular-topics__description">
                            Lựa chọn chủ đề bạn yêu thích và bắt đầu
                            kiểm tra kiến thức của mình.
                        </p>
                   </div>
                    {/* Topics */}
                    <Row gutter={[20,20]}>
                        {topics.slice(0, 8).map((item)=>(
                            <Col key={item.id}
                                xs={24}
                                sm={12}
                                lg={6}
                            >
                                <Card  className="popular-topics__card">
                                    <div className="popular-topics__card-inner">
                                        <div className="popular-topics__image">
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                        <div className="popular-topics__content">
                                            <h3>
                                                {item.name}
                                            </h3>

                                            <Button
                                                type="link"
                                                className="popular-topics__link"
                                            >
                                                Khám phá
                                                <ArrowRightOutlined />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                       
                    </Row>

                     {/* View All */}
                    <div className="popular-topics__action">
                        <Button
                            type="primary"
                            size="large"
                        >
                            Xem tất cả chủ đề
                            <ArrowRightOutlined />
                        </Button>
                    </div>

                </div>
            </section>
        </>
    )
}
export default PopularTopics;