/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */


/* eslint-disable react/jsx-no-bind */

import classnames from 'classnames';
import Button from 'uxcore-button';
import React from 'react';
import Form from '../src';

const {
  Constants,
  FormRowTitle,
  FormRow,
  InputFormField,
  Validators,
  RadioGroupFormField,
  SelectFormField,
  TextAreaFormField,
  NumberInputFormField,
  DateFormField,
  CheckboxGroupFormField,
  CascadeSelectFormField,
  OtherFormField,
  ButtonGroupFormField,
  EditorFormField,
  SwitchFormField,
  PickableFormField,
  createFormField,
} = Form;


const CheckboxItem = CheckboxGroupFormField.Item;
const RadioItem = RadioGroupFormField.Item;
const PickItem = PickableFormField.Item;
const { Count, LeftAddon, RightAddon } = InputFormField;
const { TextAreaCount } = TextAreaFormField;
const Option = SelectFormField.Option;
const CustomField = createFormField();

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      jsxvalues: {
        // test1: '我是测试',
        fruit: 'apple',
        number: 1,
        city: 'nj',
        editor: '我是一个编辑器',
        option: '1',
        // textArea: "我是多行文本",
        // date: "2015-09-01",
        goods2: ['a', 'b'],
        checkbox: ['sea'],
        dicts: {
          datas: [
            {
              city: 'hz',
              email: '333',
              name: '33',
            },
          ],
        },
        cascade: ['a', 'ab'],
      },
      jsxdata: {
        bj: '北京',
        nj: '南京南京南京南京南京南京南京南京南京南京南京南京南京南京',
        dj: '东京',
        xj: '西京',
      },
      mode: Constants.MODE.EDIT,
    };
  }

  // 表单切换；编辑、取消、保存功能
  // 编辑按钮
  handleEditClick() {
    this.setState({
      mode: Constants.MODE.EDIT,
    });
  }

  // 取消按钮
  handleQuitClick() {
    this.refs.form.resetValues();
    this.setState({
      mode: Constants.MODE.VIEW,
    });
  }

  // 保存按钮
  handleSaveClick() {
    const formData = this.refs.form.getValues(false);
    if (formData.pass) {
      // do ajax with formData.values
      console.log(formData.values);
      this.setState({
        mode: Constants.MODE.VIEW,
      });
    }
  }

  handleClick() {
    const me = this;
    me.refs.form.doValidateAndScroll();
    console.log(this.refs.form.getValues());
    // console.log(JSON.stringify(me.refs.form.getValues()));
  }

  handleSetValues() {
    const me = this;
    me.refs.form.setValues({
      test1: '我不是测试',
      fruit: 'orange',
      number: '',
      cascade: [],
    });
  }

  handleShowPassChange() {
    const me = this;
    me.setState({
      showPass: !me.state.showPass,
    });
  }

  handleFormClick() {
    this.refs.form.setState({
      mode: Constants.MODE.VIEW,
    });
  }

  update() {
    console.log('work');
    this.forceUpdate();
  }

  handleChange(value, name, pass) {
    console.log(value, name, pass);
    // this.setState(value);
  }

  handleKeyDown(e) {
    if (e.keyCode === Form.KeyCode.Enter) {
      console.log('enter');
    }
  }

  handleTextAreaBlur(e, pass) {
    console.log(e, pass);
  }

  changeMode() {
    this.setState({
      mode: this.state.mode === Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT,
    });
  }

  handleValueChange() {
    const me = this;
    me.setState({
      jsxvalues: {
        test1: '我是测试22',
        fruit: 'apple',
        city: [],
        number: '',
        textArea: '我是多行文本',
        editor: '默认值被手动修改',
        date: '2015-09-01',
        checkbox: ['sea'],
        // cascade: ["a", "ab"]
      },
      jsxdata: {
        bj: '北',
        nj: '南',
        dj: '东',
        xj: '西',
      },
    });
  }

  render() {
    const me = this;
    // const data = {
    //   test1: '我是测试',
    //   fruit: 'apple',
    //   city: 'nj',
    //   textArea: '我是多行文本',
    //   date: '2015-09-01',
    //   checkbox: ['sea'],
    //   // cascade: ["a", "ab"]
    // };

    const casData = {
      length: 3,
      contents: [
        {
          value: 'a',
          text: 'A',
          contents: [
            {
              value: 'ab',
              text: 'AB',
              contents: [
                {
                  value: 'abc',
                  text: 'ABC',
                },
                {
                  value: 'abd',
                  text: 'ABD',
                },
              ],
            },
            {
              value: 'ac',
              text: 'AC',
              contents: [
                {
                  value: 'acb',
                  text: 'ACB',
                },
                {
                  value: 'acd',
                  text: 'ACD',
                },
              ],
            },
          ],
        },
        {
          value: 'b',
          text: 'B',
          contents: [
            {
              value: 'ba',
              text: 'BA',
              contents: [
                {
                  value: 'bab',
                  text: 'BAB',
                },
                {
                  value: 'bad',
                  text: 'BAD',
                },
              ],
            },
            {
              value: 'bc',
              text: 'BC',
              contents: [
                {
                  value: 'bca',
                  text: 'BCA',
                },
                {
                  value: 'bcd',
                  text: 'BCD',
                },
              ],
            },
          ],
        },
      ],
    };

    const itemsData = [{
      text: '条件一',
      value: 1,
      num: 15,
    }, {
      text: '条件二',
      value: 2,
      num: 20,
    }, {
      text: '条件三',
      value: 3,
      disable: true,
    }];

    return (
      <div className="demo">
        <Form
          ref="form"
          size="large"
          instantValidate
          verticalAlign={false}
          jsxmode={me.state.mode}
          jsxvalues={me.state.jsxvalues}
          jsxonChange={me.handleChange.bind(me)}
        >
          <FormRowTitle jsxtitle="我是行标题">
            <span className="kuma-title-optbar">
              {me.state.mode === Constants.MODE.EDIT ?
                (<span>
                  <a
                    className="btn"
                    onClick={me.handleSaveClick.bind(me)}
                  >保存</a>
                  <span className="gap">|</span>
                  <a
                    className="btn"
                    onClick={me.handleQuitClick.bind(me)}
                  >取消</a>
                </span>) :
                (<a
                  className="btn"
                  onClick={me.handleEditClick.bind(me)}
                >编辑</a>)
              }
            </span>
          </FormRowTitle>
          <FormRow>
            <InputFormField
              labelMatchInputHeight
              required
              jsxname="test1"
              jsxdisabled={false}
              autoTrim={false}
              jsxlabel="普通输入框"
              jsxtips="请输入数字"
              validateOnBlur={false}
              onKeyDown={me.handleKeyDown.bind(me)}
              jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
            >
              <RightAddon>
                <i className="kuma-icon kuma-icon-phone" />
              </RightAddon>
              {/* <RightAddon>
                <span style={{ lineHeight: '24px' }}>元</span>
              </RightAddon> */}
              <Count total={20} />
            </InputFormField>
            <NumberInputFormField
              jsxname="number"
              jsxlabel="数字输入框"
              jsxtype="money"
              delimiter=","
              fixedNum={2}
              formatOnBlur
              jsxplaceholder="输入数字"
              jsxtips="数字和一般的输入框不同"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                { validator: Validators.isNum, errMsg: '请输入数字' },
              ]}
            >
              <RightAddon>
                1111
              </RightAddon>
            </NumberInputFormField>

            <ButtonGroupFormField jsxshow={false}>
              <Button
                size="medium"
                type="primary"
                action="submit"
                onClick={me.handleFormClick.bind(me)}
              >
                提交
              </Button>
              <Button size="medium" type="secondary" action="reset">取消</Button>
            </ButtonGroupFormField>
          </FormRow>
          <FormRow>
            <RadioGroupFormField jsxname="fruit" jsxlabel="Radio" jsxflex={1}>
              <RadioItem value="apple" text="Apple" />
              <RadioItem value="orange" text="Orange" />
              <RadioItem value="watermelon" text="Watermelon" />
            </RadioGroupFormField>
            <CheckboxGroupFormField jsxname="checkbox" jsxlabel="复选框">
              <CheckboxItem
                value="air" text="天空"
              />
              <CheckboxItem value="sea" text="大海" />
            </CheckboxGroupFormField>
          </FormRow>
          <InputFormField inputBoxMaxWidth="middle" jsxname="pass" jsxlabel="请输入密码" inputType={me.state.showPass ? 'text' : 'password'}>
            <LeftAddon>
              <i
                className={classnames({
                  'kuma-icon': true,
                  'kuma-icon-privacy': !me.state.showPass,
                  'kuma-icon-public': me.state.showPass,
                })}
                onClick={me.handleShowPassChange.bind(me)}
              />
            </LeftAddon>
          </InputFormField>
          <FormRow>
            <SwitchFormField
              jsxname="switch"
              jsxlabel="开关"
              checkedChildren="显示"
              unCheckedChildren="隐藏"
            />
            {/* <PickableFormField
              jsxlabel="筛选"
              jsxname="pick"
              multiple
              type="hook"
            >
              {itemsData.map((item, index) => (
                <PickItem key={index} value={item.value}>{item.text}</PickItem>
              ))}
            </PickableFormField> */}
          </FormRow>
          <TextAreaFormField
            jsxname="textArea"
            jsxlabel="多行文本框"
            jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
            jsxplaceholder="测试"
            validateOnBlur={false}
            onBlur={me.handleTextAreaBlur.bind(me)}
          >
            <TextAreaCount total={100} />
          </TextAreaFormField>
          <FormRow>
            <SelectFormField
              jsxlabel="单选"
              jsxname="city"
              allowClear
              jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
              disabled={false}
              jsxdata={me.state.jsxdata}
            />
            <DateFormField
              format="yyyy-MM-dd HH:mm:ss"
              jsxname="date"
              jsxlabel="日期"
              locale="zh-cn"
            />
          </FormRow>
          <FormRow>
            <SelectFormField
              jsxlabel="单选 combo 模式"
              disabled={false}
              jsxname="goods"
              jsxfetchUrl="http://suggest.taobao.com/sug"
              dataType="jsonp"
              combobox
              afterFetch={(obj) => {
                const data = {};
                obj.result.forEach((item) => {
                  data[item[1]] = item[0];
                });
                return data;
              }}
            />
            <SelectFormField
              jsxlabel="多选模式"
              jsxname="goods2"
              multiple
              jsxfetchUrl="http://suggest.taobao.com/sug"
              jsxdata={{
                a: 'A',
                b: 'B',
              }}
              beforeFetch={function (data) {
                console.log(data);
              }}
              dataType="jsonp"
              afterFetch={(obj) => {
                const data = {};
                obj.result.forEach((item) => {
                  data[item[1]] = item[0];
                });
                return data;
              }}
            />
          </FormRow>
          <SelectFormField
            jsxname="option"
            jsxlabel="传 option"
          >
            <Option value="1">第一个选项</Option>
            <Option value="2">第二个选项</Option>
            <Option value="3">第三个选项</Option>
          </SelectFormField>
          <DateFormField
            showTime
            jsxtype="cascade"
            jsxname="casDate"
            jsxlabel="级联日期"
            // instantValidate={false}
            format="yyyy/MM/dd"
            jsxrules={[{
              validator: (value) => {
                if (typeof value === 'undefined') {
                  return false;
                } else if (Array.isArray(value) && value.length < 2) {
                  return false;
                }
                for (let i = 0, l = value.length; i < l; i++) {
                  if (!value[i]) {
                    return false;
                  }
                }
                return true;
              },
              errMsg: '出错啦',
            }]}
          />
          <CascadeSelectFormField
            jsxdata={casData}
            allowClear
            getPopupContainer={() => {
              const div = document.createElement('div');
              div.className = 'uxcore';
              document.body.appendChild(div);
              return div;
            }}
            jsxplaceholder={['选项一', '选项二', '选项三']}
            jsxname="cascade"
            jsxlabel="级联选择"
          />
          <EditorFormField
            jsxname="editor"
            jsxlabel="富文本编辑器"
            placeholder="测试"
          />

          <CustomField jsxname="custom" jsxlabel="定制" placeholder="test" />

          <ButtonGroupFormField>
            <Button size="medium" onClick={me.handleClick.bind(me)}>提交</Button>
            <Button size="medium" type="secondary" action="reset">取消</Button>
            <Button type="secondary" onClick={me.handleSetValues.bind(me)}>手动setValues</Button>
            <Button
              size="medium"
              type="secondary"
              onClick={me.handleValueChange.bind(me)}
            >修改 props</Button>
            <Button type="secondary" onClick={me.changeMode.bind(me)}>转变模式</Button>
            <Button type="secondary" onClick={me.update.bind(me)}>强制刷新</Button>
          </ButtonGroupFormField>
        </Form>
      </div>
    );
  }
}

export default Demo;
