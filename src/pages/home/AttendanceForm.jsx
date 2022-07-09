import React from "react";
import { Form, Radio, Input, InputNumber, Button } from "antd";

const AttendanceForm = () => {
  const onFinish = (input) => {
    console.log(input);
    // save into database
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      labelAlign='left'
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      autoComplete="off"
      className="form-style"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Name is required",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="emailAddress"
        message="Email is invalid"
        rules={[
          {
            required: true,
            message: "Email Address is required",
          },
          {
            type: "email",
            message: "Email Address is invalid",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Phone Number is required"
          },
        ]}
      >
        <Input placeholder="012-3456789" />
      </Form.Item>

      <Form.Item name="attending" label="Will you attend?"
        rules={[
            {
            required: true,
            message: "Will you be attending?",
            },
        ]}
      >
        <Radio.Group style={{textAlign: 'left'}}>
          <Radio.Button value="yes"> Yes </Radio.Button>
          <Radio.Button value="maybe"> Maybe </Radio.Button>
          <Radio.Button value="no"> No </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="numberOfGuests" label="Total guests (including you)"
        rules={[
          {
          required: true,
          message: "How many people will be in your party including yourself?",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AttendanceForm;
