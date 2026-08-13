import {
    Button,
    Card,
    Col,
    Form,
    Input,
    message,
    Row,
} from "antd";
import {
    MailOutlined,
    LockOutlined,
} from "@ant-design/icons";
import { useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import { emailRule, rules } from "../../contants";
import logoSmall from "../../assets/images/logo_small.png"
import "./Login.scss"
import { login } from "../../services/usersServices";
import { setCookie } from "../../helpers/cookie";
import { loading } from "../../actions";
function Login(){
    
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const handleFinish= async(values)=>{
        const response= await login(values.email, values.password);
        if(response){
            console.log(response[0].id)
            setCookie("id",response[0].id,1);
            setCookie("fullName",response[0].fullName,1);
            setCookie("email",response[0].email,1);
            setCookie("token",response[0].token,1);
            dispatch(loading(true))
            navigate("/")
        }else{
            messageApi.open({
                type: 'error',
                content: 'Đăng nhập thất bại, vui lòng thử lại',
                duration:5,
                style: {
                    marginTop: "70px",
                },
            })
        }
    }
    return(
        <>
             <div className="login">
                <Row
                    justify="center"
                        align="middle"
                            className="login__row"
                        >
                            <Col xs={22} sm={18} md={12} lg={8} xl={8}>
            
                                <Card className="login__card">
            
                                    {/* HEADER */}
            
                                    <div className="login__header">
            
                                        <div className="login__logo">
                                            <img src={logoSmall} alt="logo small"/>
                                        </div>
            
                                        <h1 className="login__title">
                                            Đăng nhập
                                        </h1>
            
                                        <p className="login__subtitle">
                                            Tham gia DevQuiz và bắt đầu
                                            luyện tập ngay hôm nay.
                                        </p>
            
                                    </div>
            
            
                                    {/* FORM */}
            
                                    <Form
                                        layout="vertical"
                                        className="login__form"
                                        onFinish={handleFinish}
                                    >
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
                                            rules={rules("mật khẩu")}
                                        >
                                            <Input.Password
                                                size="large"
                                                prefix={<LockOutlined />}
                                                placeholder="Nhập mật khẩu"
                                            />
                                        </Form.Item>
            
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                size="large"
                                                block
                                                className="login__button"
                                            >
                                                Đăng nhập
                                            </Button>
                                        </Form.Item>
            
                                    </Form>
            
            
                                    {/* FOOTER */}
            
                                    <div className="login__footer">
            
                                        <span>
                                            Bạn chưa có tài khoản?
                                        </span>
            
                                        <a href="/register">
                                            Đăng ký
                                        </a>
            
                                    </div>
                            </Card>
                     </Col>
                 </Row>
            </div>
        </>
    )
}
export default Login;