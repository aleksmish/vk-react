import "./form.styles.scss"
import { Button, DatePicker, Select, TimePicker, Form as FormBody } from "antd"
import React from 'react'
import TextArea from "antd/es/input/TextArea"

const buildings = ["A", "B"]
const floors = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
const meetingRooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Form = () => {
  const formRef = React.useRef(null);

  const disabledDate = (current) => {
    let startDateTime = new Date().getTime()
    let currentDateTime = current.$d.getTime()
    return startDateTime > currentDateTime
  }
  
  const handleErase = (event) => {
    formRef.current?.resetFields()
  }

  const handleSubmit = (event) => {
    console.log(JSON.stringify(formRef.current?.getFieldsValue()))
  }

  return (
    <>
      <FormBody
        className="form-container"
        wrapperCol={{ span: 14 }}
        layout="vertical"
        ref={formRef}
        style={{ minWidth: 600 }}
      >
        <header>
          <h2>Бронирование переговорной</h2>
        </header>
        <FormBody.Item label="Башня" name="building">
          <Select >
            {buildings.map(building => (
              <Select.Option key={building} value={building}>{building}</Select.Option>
            ))}
          </Select>
        </FormBody.Item>
        <FormBody.Item label="Этаж" name="floor">
          <Select >
            {floors.map(floor => (
              <Select.Option key={floor} value={floor}>{floor}</Select.Option>
            ))}
          </Select>
        </FormBody.Item>
        <FormBody.Item label="Переговорка" name="meetingRoom">
          <Select >
            {meetingRooms.map(meetingRoom => (
              <Select.Option key={meetingRoom} value={meetingRoom}>{meetingRoom}</Select.Option>
            ))}
          </Select>
        </FormBody.Item>
        <FormBody.Item label="Дата" name="date">
          <DatePicker disabledDate={disabledDate} onOk={() => null} showToday={false} />
        </FormBody.Item>
        <FormBody.Item label="Интервал времени" name="timeRange">
          <TimePicker.RangePicker showNow={false} showToday={false} format={"HH:mm:ss"} />
        </FormBody.Item>
        <FormBody.Item label="Комментарий" name="comment">
          <TextArea />
        </FormBody.Item>
        <div className="buttons">
          <Button danger onClick={handleErase}>Стереть</Button>
          <Button type="primary" onClick={handleSubmit}>Отправить</Button>
        </div>
      </FormBody>
    </>
  );}

export default Form