import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import background from "../assets/image.png";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/6dd6/fb84/9a1008b9de2fc1c4ad5db39e51ae4b62?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HDcQRvtc7XVlF0Zhz-xjb~MiUSh88cgXJdFUZ5CQmBxVxifauvWRsvgGwWd65-KO1efNrvrvcMd~YwNEXp7ruOXYEmM9~bA4ye4XqmkHKP6~FBImaXXdVgrO5Gt10BLy1QeOhslI0VuRjDT6ZD4x5Qco1NLvnH3le3DaOQFse9DI6MIit1vBFprnbWaMmu3iaB7aXk6YSX080uw7Xk1xYaTJlXQ8CDmWUZHASoIC8jApN4RAvs8Ktlq43EnEaJp8Q88Lt4rBFuXGzNmSdMInQwMdM6rdkSGmpAfK-Sid0n7NWkOEZjCDaL0dRAXxG33iEKZLCCCP7oawmYgUtiIN8Q__")`,
        }}
      ></div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Title level={2}> Sign Up</Title>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                className="rounded-full border-opacity-10 border-black"
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" className="rounded-full" />
            </Form.Item>

            <div className="flex">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Paragraph level={4} style={{ marginLeft: '200px', marginTop: '4px' }}> Forgot Password?</Paragraph>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full rounded-full h-10"
                style={{ background: "#17B582" }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
