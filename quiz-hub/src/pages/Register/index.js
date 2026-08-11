import {
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Input,
    message,
    Row,
} from "antd";
import {Link, useNavigate} from "react-router-dom"
import {
    UserOutlined,
    MailOutlined,
    LockOutlined,
} from "@ant-design/icons";
import { emailRule, passwordRule, rules, termsRule } from "../../contants";
import "./Register.scss";
import {checkExist, register} from "../../services/usersServices"
import logoSmall from "../../assets/images/logo_small.png"
import { generateToken } from "../../helpers/generateToken";

function Register() {
    const navigate=useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const handleFinish= async (values)=>{
        
        const checkExistEmail= await checkExist("email",values.email)
        if(checkExistEmail.length >0){
            messageApi.open({
                type: 'error',
                content: 'Email đã tồn tại, vui lòng nhập email khác',
                duration:5,
                style: {
                    marginTop: "70px",
                },
            });
        }else{
            const user={
                fullName:values.fullName,
                email:values.email,
                password:values.password,
                token:generateToken()
            }
            const response= await register(user)
            if(response){
                navigate("/login")
            }else{
                messageApi.open({
                type: 'error',
                content: 'Đăng ký thất bại, vui lòng thử lại',
                duration:5,
                style: {
                        marginTop: "70px",
                    },
                });
            }
        }
    }
    return (
        <>
          {contextHolder}
        <div className="register">
           
            <Row
                justify="center"
                align="middle"
                className="register__row"
            >
                <Col xs={22} sm={18} md={12} lg={8} xl={8}>

                    <Card className="register__card">

                        {/* HEADER */}

                        <div className="register__header">

                            <div className="register__logo">
                                <img src={logoSmall} alt="logo small"/>
                            </div>

                            <h1 className="register__title">
                                Đăng ký tài khoản
                            </h1>

                            <p className="register__subtitle">
                                Tham gia DevQuiz và bắt đầu
                                luyện tập ngay hôm nay.
                            </p>

                        </div>


                        {/* FORM */}

                        <Form
                            layout="vertical"
                            className="register__form"
                            onFinish={handleFinish}
                        >

                            <Form.Item
                                label="Họ và tên"
                                name="fullName"
                                rules={rules("họ và tên")}
                            >
                                <Input
                                    size="large"
                                    prefix={<UserOutlined />}
                                    placeholder="Nhập họ và tên"
                                />
                            </Form.Item>


                            <Form.Item
                                label="Email"
                                name="email"
                                rules={emailRule}
                            >
                                <Input
                                    size="large"
                                    prefix={<MailOutlined />}
                                    placeholder="example@gmail.com"
                                />
                            </Form.Item>


                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={passwordRule}
                            >
                                <Input.Password
                                    size="large"
                                    prefix={<LockOutlined />}
                                    placeholder="Nhập mật khẩu"
                                />
                            </Form.Item>


                            <Form.Item
                                name="terms"
                                valuePropName="checked"
                                rules={termsRule}
                            >
                                <Checkbox>
                                    Tôi đồng ý với{" "}
                                    <Link
                                        to="/terms"
                                        className="register__terms"
                                    >
                                        điều khoản sử dụng
                                    </Link>
                                </Checkbox>
                            </Form.Item>


                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block
                                    className="register__button"
                                >
                                    Đăng ký
                                </Button>
                            </Form.Item>

                        </Form>


                        {/* FOOTER */}

                        <div className="register__footer">

                            <span>
                                Bạn đã có tài khoản?
                            </span>

                            <a href="/login">
                                Đăng nhập
                            </a>

                        </div>

                    </Card>

                </Col>
            </Row>

        </div>
        </>
        
    );
}

export default Register;